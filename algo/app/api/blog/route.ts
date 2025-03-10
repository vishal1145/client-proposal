import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "The Future Of IT In The Legal Field Trends To Watch",
    category: "App Development",
    content:
      "Technology is transforming the legal industry, enabling automation, AI-driven research, and cloud-based legal services.",
    imageUrl: "/images/man.jpg",
    link: "/blog/the-future-of-it-in-the-legal-field-trends-to-watch",
    date: "March 5, 2024",
    mainImage: "/images/legalTechMain.jpg",
    fullContent: [
      "Law firms are adopting AI-based research tools...",
      "The rise of cloud-based case management...",
    ],
    quote: {
      text: "Technology in law is about efficiency & justice.",
      author: "Legal IT Expert",
    },
    additionalImages: ["/images/legalTech2.jpg", "/images/legalTech3.jpg"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "IT solutions revolutionized our law firm's efficiency.",
      person: {
        name: "Michael Smith",
        avatar: "/images/user1.jpg",
        position: "Senior Lawyer",
      },
    },
  },
  {
    id: 2,
    title: "Cybersecurity Tips For Law Firms & Its Legal Aids",
    category: "Cybersecurity",
    content:
      "Law firms are prime targets for cyber threats. Strong security policies ensure the protection of sensitive legal data.",
    imageUrl: "/images/man.jpg",
    link: "/blog/Cybersecurity-Tips-For-Law-Firms-Its-Legal-Aids",
    date: "February 12, 2024",
    mainImage: "/images/cyberLawMain.jpg",
    fullContent: [
      "Implementing end-to-end encryption...",
      "Regular cybersecurity training for employees...",
    ],
    quote: {
      text: "Data security isn't an option; it's a necessity.",
      author: "Cybersecurity Analyst",
    },
    additionalImages: ["/images/cyberLaw2.jpg", "/images/cyberLaw3.jpg"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "We significantly reduced breaches using these strategies.",
      person: {
        name: "Sarah Johnson",
        avatar: "/images/user2.jpg",
        position: "IT Director",
      },
    },
  },
  {
    id: 3,
    title: "Modern Authentication in Node.js: Passkeys, Biometrics, and Beyond",
    category: "IT Security",
    content:
      "Passkeys and biometrics are transforming Node.js authentication. Say goodbye to passwords and hello to seamless security.",
    imageUrl: "/images/muskan.jpeg",
    link: "/blog/modern-authentication-nodejs",
    date: "21 February 2025",
    mainImage: "/images/Mblog1.webp",
    fullContent: [
      "As cyber threats rise, Node.js now supports advanced authentication techniques like passkeys, biometrics, and passwordless authentication for better security and user experience.Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    quote: {
      text: "Traditional passwords are highly vulnerable to attacks, making them easy targets for phishing and data breaches. Modern authentication methods like passkeys, biometrics, and multi-factor authentication provide stronger security by reducing reliance on easily compromised passwords. Implementing passwordless authentication not only enhances security but also improves the user experience, ensuring safer and more seamless access to digital platforms.",
      author: "Security Specialist",
    },
    additionalImages: ["/images/mblog1.webp", "/images/mblog1.webp"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "Passkeys have made our authentication process effortless.",
      person: {
        name: "David Patel",
        avatar: "/images/user3.jpg",
        position: "CTO",
      },
    },
  },
  {
    id: 5,
    title:
      "Node.js and AI: How to Build Intelligent Apps with Machine Learning",
    category: "Artificial Intelligence",
    content:
      "With AI integration, Node.js can build predictive, data-driven applications, enhancing efficiency and decision-making.",
    imageUrl: "/images/muskan.jpeg",
    link: "/blog/nodejs-ai-intelligent-apps",
    date: "April 5, 2024",
    mainImage: "/images/nodeAI.jpg",
    fullContent: [
      "How Node.js connects with TensorFlow.js...",
      "Building a chatbot with AI and Node.js...",
    ],
    quote: {
      text: "AI is the key to unlocking intelligent automation.",
      author: "AI Engineer",
    },
    additionalImages: ["/images/nodeAI2.jpg", "/images/nodeAI3.jpg"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "Using AI in Node.js revolutionized our app experience.",
      person: {
        name: "Sophia Chang",
        avatar: "/images/user6.jpg",
        position: "AI Developer",
      },
    },
  },
  {
    id: 6,
    title: "IT Compliance And Data Protection For Law Firms",
    category: "IT Compliance",
    content:
      "Law firms must follow strict compliance standards to ensure data privacy and regulatory adherence.",
    imageUrl: "/images/man.jpg",
    link: "/blog/IT-Compliance-And-Data-Protection-For-Law-Firms",
    date: "April 15, 2024",
    mainImage: "/images/dataProtectionMain.jpg",
    fullContent: [
      "Law firms must follow GDPR & industry standards...",
      "Encrypted storage prevents unauthorized data access...",
    ],
    quote: {
      text: "Compliance builds trust in legal IT.",
      author: "Data Privacy Expert",
    },
    additionalImages: [
      "/images/dataProtection2.jpg",
      "/images/dataProtection3.jpg",
    ],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "Regulatory compliance has secured our legal firm.",
      person: {
        name: "Emily Carter",
        avatar: "/images/user4.jpg",
        position: "Compliance Officer",
      },
    },
  },
  {
    id: 10,
    title: "Learning Flask: The Python Micro Web Framework",
    category: "Web Development",
    content:
      "Flask simplifies Python web development, offering flexibility and scalability for developers.",
    imageUrl: "/images/rajat.jpg",
    link: "/blog/learning-flask-the-python-micro-web-framework",
    date: "May 5, 2024",
    mainImage: "/images/flaskMain.jpg",
    fullContent: [
      "Flask’s lightweight structure makes development easier...",
      "Building REST APIs with Flask and SQLAlchemy...",
    ],
    quote: {
      text: "Flask is a developer-friendly framework.",
      author: "Python Developer",
    },
    additionalImages: ["/images/flask2.jpg", "/images/flask3.jpg"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "Flask made my backend development smoother.",
      person: {
        name: "Rajiv Das",
        avatar: "/images/user5.jpg",
        position: "Software Engineer",
      },
    },
  },
  {
    id: 11,
    title:
      "The Future of Intelligence - How Python Powers Artificial Intelligence",
    category: "Artificial Intelligence",
    content:
      "Python is the backbone of AI, enabling the development of machine learning models and automation solutions.",
    imageUrl: "/images/rajat.jpg",
    link: "/blog/the-future-of-intelligence-how-python-powers-ai",
    date: "June 10, 2024",
    mainImage: "/images/pythonAIMain.jpg",
    fullContent: [
      "Python’s TensorFlow & PyTorch lead AI development...",
      "AI is reshaping industries, from healthcare to finance...",
    ],
    quote: {
      text: "AI is the future, and Python is leading the way.",
      author: "AI Researcher",
    },
    additionalImages: ["/images/pythonAI2.jpg", "/images/pythonAI3.jpg"],
    afterAdditionalImage: [
      "Passkeys replace passwords with cryptographic key pairs stored on a user’s device, making logins phishing-resistant and highly secure. The device generates and stores a secure key pair during registration, and users verify their identity via biometrics or a device PIN. Developers can easily integrate passkeys in Node.js applications using @simplewebauthn/server.",
    ],
    social: { twitter: "TW", youtube: "YU", facebook: "FB", linkedin: "IN" },
    testimonial: {
      text: "Python's AI capabilities have been groundbreaking.",
      person: {
        name: "Sophia Chang",
        avatar: "/images/user6.jpg",
        position: "AI Engineer",
      },
    },
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blogLink = searchParams.get("link");

  if (blogLink) {
    // Find the blog by its link
    const blog = blogs.find((b) => b.link === blogLink);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  }

  // If no specific blog is requested, return all blogs
  return NextResponse.json(blogs, { status: 200 });
}
