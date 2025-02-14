export const projects = [
  {
    id: "mobile-application",
    title: "Mobile Application Development",
    category: "App Developments",
    description:
      "App Lorem ipsum dolor sit amet, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    client: "Digital Trading Apps",
    mainImage: "/images/project11.png",
    detailImages: [
      "/images/project-detail-1.jpg",
      "/images/project-detail-2.jpg",
    ],
  },
  {
    id: "poster-magazine",
    title: "Poster Magazine",
    category: "App Developments",
    description:
      "Poster magazine project showcasing modern design solutions...",
    client: "Magazine Co",
    mainImage: "/images/project2.jpeg",
    detailImages: [
      "/images/poster-detail-1.jpg",
      "/images/poster-detail-2.jpg",
    ],
  },
  {
    id: "bottle-designs",
    title: "Bottle Designs",
    category: "Graphic Design",
    description:
      "Bottle design project showcasing modern and sustainable packaging solutions...",
    client: "Eco Beverages",
    mainImage: "/images/project10.png",
    detailImages: [
      "/images/bottle-detail-1.jpg",
      "/images/bottle-detail-2.jpg",
    ],
  },
  {
    id: "shopping-bag",
    title: "Shopping Bag Designs",
    category: "Graphic Design",
    description: "Shopping bag design project with modern aesthetics...",
    client: "Retail Co",
    mainImage: "/images/project4.jpeg",
    detailImages: ["/images/bag-detail-1.jpg", "/images/bag-detail-2.jpg"],
  },
  {
    id: "web-application",
    title: "Web Application",
    category: "App Developments",
    description:
      "Modern web application with cutting-edge technologies and user-friendly interface...",
    client: "Tech Solutions Inc",
    mainImage: "/images/project6.png",
    detailImages: ["/images/web-detail-1.jpg", "/images/web-detail-2.jpg"],
  },
  {
    id: "mobile-application-2",
    title: "Mobile Application 2",
    category: "App Developments",
    description:
      "Next generation mobile application with advanced features and seamless user experience...",
    client: "Mobile Tech Co",
    mainImage: "/images/project5.png",
    detailImages: [
      "/images/mobile2-detail-1.jpg",
      "/images/mobile2-detail-2.jpg",
    ],
  },
  {
    id: "poster-magazine-2",
    title: "Poster Magazine 2",
    category: "App Developments",
    description:
      "Creative poster magazine design with modern aesthetics and engaging layouts...",
    client: "Publishing House",
    mainImage: "/images/project7.jpeg",
    detailImages: [
      "/images/poster2-detail-1.jpg",
      "/images/poster2-detail-2.jpg",
    ],
  },
  {
    id: "cray-bag",
    title: "Cray Bag Designs",
    category: "Graphic Design",
    description: "Innovative bag designs combining style with functionality...",
    client: "Fashion Retail Co",
    mainImage: "/images/project8.png",
    detailImages: [
      "/images/cray-bag-detail-1.jpg",
      "/images/cray-bag-detail-2.jpg",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  mainImage: string;
  detailImages: string[];
  features?: string[];
}
