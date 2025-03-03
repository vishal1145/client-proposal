import { NextResponse, NextRequest } from "next/server";
import ConnectDB from "@/lib/DB";
import Blog from "@/app/models/Blog"
import fs from "fs";
import path from "path";

interface BlogUpdateData {
  title?: string;
  category?: string;
  content?: string;
  link?: string;
  date?: string;
  fullContent?: string[];  // Ideally type this more strictly if possible
  quote?: { text: string };
  beforeAdditionalImage?: string[];
  additionalImages?: string[];
  afterAdditionalImage?: string[];
  testimonial?: { text: string };
  imageUrl?: string;
  mainImage?: string;
}


// Helper to save files to /public/uploads
async function saveFile(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadsDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const uniqueFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "")}`;
  const filePath = path.join(uploadsDir, uniqueFileName);

  await fs.promises.writeFile(filePath, buffer);
  return `/uploads/${uniqueFileName}`;
}

// GET: Fetch all blogs, or single blog by ID or link
export async function GET(request: NextRequest) {
  await ConnectDB();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const link = searchParams.get("link");

  try {
    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
      return NextResponse.json({ success: true, data: blog });
    }

    if (link) {
      const blog = await Blog.findOne({ link });
      if (!blog) return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
      return NextResponse.json({ success: true, data: blog });
    }

    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });

  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST: Create new blog
export async function POST(request: NextRequest) {
  try {
    await ConnectDB();
    const formData = await request.formData();

    // Handle thumbnail image
    const thumbnailImageFile = formData.get("thumbnailImage") as File;
    if (!thumbnailImageFile) {
      return NextResponse.json({ 
        success: false, 
        message: "Thumbnail image is required" 
      }, { status: 400 });
    }
    const thumbnailImageUrl = await saveFile(thumbnailImageFile);

    // Handle main image
    const mainImageFile = formData.get("mainImage") as File;
    if (!mainImageFile) {
      return NextResponse.json({ 
        success: false, 
        message: "Main image is required" 
      }, { status: 400 });
    }
    const mainImageUrl = await saveFile(mainImageFile);

    // Handle additional images
    const additionalImages = formData.getAll("additionalImages") as File[];
    const additionalImageUrls = await Promise.all(
      additionalImages.map(file => saveFile(file))
    );

    const blogData = {
      title: formData.get("title"),
      category: formData.get("category"),
      content: formData.get("content"),
      imageUrl: thumbnailImageUrl,  // Use thumbnail URL for imageUrl
      link: formData.get("link"),
      date: formData.get("date"),
      mainImage: mainImageUrl,  // Use main image URL for mainImage
      fullContent: JSON.parse(formData.get("fullContent") as string || "[]"),
      quote: JSON.parse(formData.get("quote") as string || '{"text": ""}'),
      beforeAdditionalImage: JSON.parse(formData.get("beforeAdditionalImage") as string || "[]"),
      additionalImages: additionalImageUrls,
      afterAdditionalImage: JSON.parse(formData.get("afterAdditionalImage") as string || "[]"),
      testimonial: JSON.parse(formData.get("testimonial") as string || '{"text": ""}'),
    };

    const blog = await Blog.create(blogData);

    return NextResponse.json({ 
      success: true, 
      data: blog 
    }, { status: 201 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to create blog"
    }, { status: 500 });
  }
}

// PUT: Update existing blog
export async function PUT(request: NextRequest) {
  await ConnectDB();

  try {
    const formData = await request.formData();
    const id = formData.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Parse all form data
    const updateData: BlogUpdateData = {
      title: formData.get("title")?.toString() || undefined,
      category: formData.get("category")?.toString() || undefined,
      content: formData.get("content")?.toString() || undefined,
      link: formData.get("link")?.toString() || undefined,
      date: formData.get("date")?.toString() || undefined,
     
  fullContent: JSON.parse(formData.get("fullContent")?.toString() || "[]"),
  quote: JSON.parse(formData.get("quote")?.toString() || '{"text": ""}'),
  beforeAdditionalImage: JSON.parse(formData.get("beforeAdditionalImage")?.toString() || "[]"),
  afterAdditionalImage: JSON.parse(formData.get("afterAdditionalImage")?.toString() || "[]"),
  testimonial: JSON.parse(formData.get("testimonial")?.toString() || '{"text": ""}'),
    };

    // Handle thumbnail image update
    const thumbnailImage = formData.get("thumbnailImage") as File;
    if (thumbnailImage?.size > 0) {
      try {
        const thumbnailImageUrl = await saveFile(thumbnailImage);
        updateData.imageUrl = thumbnailImageUrl;
      } catch (error) {
        console.error("Error saving thumbnail image:", error);
        return NextResponse.json(
          { success: false, message: "Failed to save thumbnail image" },
          { status: 500 }
        );
      }
    }

    // Handle main image update
    const mainImage = formData.get("mainImage") as File;
    if (mainImage?.size > 0) {
      try {
        const mainImageUrl = await saveFile(mainImage);
        updateData.mainImage = mainImageUrl;
      } catch (error) {
        console.error("Error saving main image:", error);
        return NextResponse.json(
          { success: false, message: "Failed to save main image" },
          { status: 500 }
        );
      }
    }

    // Handle additional images
    const additionalImages = formData.getAll("additionalImages") as File[];
    if (additionalImages.length > 0) {
      try {
        const additionalImageUrls = await Promise.all(
          additionalImages.map(async (file) => {
            if (file.size > 0) {
              return await saveFile(file);
            }
            return null;
          })
        );

        // Filter out any null values from failed uploads
        const validUrls = additionalImageUrls.filter(
          (url): url is string => url !== null
        );

        if (validUrls.length > 0) {
          updateData.additionalImages = validUrls;
        }
      } catch (error) {
        console.error("Error saving additional images:", error);
        return NextResponse.json(
          { success: false, message: "Failed to save additional images" },
          { status: 500 }
        );
      }
    }

    // Find existing blog to preserve images if new ones aren't uploaded
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Preserve existing images if new ones aren't uploaded
    if (!updateData.imageUrl) {
      updateData.imageUrl = existingBlog.imageUrl;
    }
    if (!updateData.mainImage) {
      updateData.mainImage = existingBlog.mainImage;
    }
    if ((updateData.additionalImages?.length ?? 0) === 0) {
      updateData.additionalImages = existingBlog.additionalImages;
  }
  
    // Update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { success: false, message: "Failed to update blog" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: "Blog updated successfully",
    });

  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to update blog"
      },
      { status: 500 }
    );
  }
}
// DELETE: Remove blog and its images
export async function DELETE(request: NextRequest) {
  await ConnectDB();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Blog ID is required" }, { status: 400 });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
    }

    const imagesToDelete = [
      blog.imageUrl,
      blog.mainImage,
      ...(blog.additionalImages || []),
    ].filter(Boolean);

    for (const imageUrl of imagesToDelete) {
      const imagePath = path.join(process.cwd(), "public", imageUrl.replace(/^\//, ""));
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Blog and images deleted" });

  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete blog" }, { status: 500 });
  }
}
