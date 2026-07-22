export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "Conferences" | "Office" | "Culture & Team" | "CSR & Events";
  title: string;
  caption?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "/Arindam Hari Speaking.JPG",
    alt: "Arindam Hari Speaking at Tech Event",
    category: "Conferences",
    title: "Keynote Presentation",
    caption: "Arindam Hari sharing strategic insights at the Enterprise Leadership Summit."
  },
  {
    id: "2",
    src: "/Meena Chaturvedi Speaking.JPG",
    alt: "Meena Chaturvedi Keynote Speech",
    category: "Conferences",
    title: "Executive Keynote",
    caption: "Meena Chaturvedi delivering an inspirational keynote address."
  },
  {
    id: "3",
    src: "/Rishabh Nair Speaking.JPG",
    alt: "Rishabh Nair Tech Session",
    category: "Conferences",
    title: "Tech Innovation Talk",
    caption: "Rishabh Nair discussing next-gen cloud and SAP architectures."
  },
  {
    id: "4",
    src: "/Sunik Kumar Chaturvedi Speaking.JPG",
    alt: "Sunil Kumar Chaturvedi Speaking",
    category: "Conferences",
    title: "Industry Vision Address",
    caption: "Strategic roadmap session on industrial transformation."
  },
  {
    id: "5",
    src: "/Excon pic 1.jpg",
    alt: "Acceleron Stall at EXCON Exhibition",
    category: "Conferences",
    title: "EXCON Expo 2024",
    caption: "Showcasing Suraksha & Tyre Health platforms at EXCON."
  },
  {
    id: "6",
    src: "/Excon pic 2.jpg",
    alt: "Team at EXCON Stall",
    category: "Conferences",
    title: "EXCON Engagement",
    caption: "Engaging with heavy industry delegates and partners at EXCON."
  },
  {
    id: "7",
    src: "/Excon pic 3.jpg",
    alt: "EXCON Exhibition Showcase",
    category: "Conferences",
    title: "Live Product Demonstrations",
    caption: "Demonstrating IoT and real-time fleet analytics to industrial leaders."
  },
  {
    id: "8",
    src: "/Excon pic 4.jpg",
    alt: "Acceleron EXCON Booth",
    category: "Conferences",
    title: "EXCON Leadership Meet",
    caption: "Interacting with enterprise partners and clients at Stall OD 4A01."
  },
  {
    id: "9",
    src: "/Excon pic 5 Stall No. OD 4A01.png",
    alt: "Acceleron Solutions Stall Banner",
    category: "Conferences",
    title: "Stall OD 4A01",
    caption: "Acceleron Solutions official booth layout at EXCON."
  },
  {
    id: "10",
    src: "/Inaguration Photo.JPG",
    alt: "Office Ribbon Cutting Ceremony",
    category: "Office",
    title: "Office Inauguration",
    caption: "Grand inauguration of the state-of-the-art tech center."
  },
  {
    id: "11",
    src: "/Office Entrace Photo.JPG",
    alt: "Acceleron Office Reception & Entrance",
    category: "Office",
    title: "HQ Reception & Entrance",
    caption: "Welcoming visitors to Acceleron Solutions Kolkata HQ."
  },
  {
    id: "12",
    src: "/Office View 1.JPG",
    alt: "Modern Workspace View",
    category: "Office",
    title: "Development Hub",
    caption: "High-energy open floor plan facilitating collaborative engineering."
  },
  {
    id: "13",
    src: "/Office View 2.JPG",
    alt: "Collaborative Workstation Area",
    category: "Office",
    title: "Collaborative Zones",
    caption: "Design and strategy spaces for product engineering."
  },
  {
    id: "14",
    src: "/Meena Mam & Arindam sir.JPG",
    alt: "Leadership Moment",
    category: "Culture & Team",
    title: "Leadership Exchange",
    caption: "Executive leaders sharing a moment at the annual team meet."
  },
  {
    id: "15",
    src: "/Rishab sir & Arindam sir.JPG",
    alt: "Executive Partnership",
    category: "Culture & Team",
    title: "Strategic Alignment",
    caption: "Discussing future technology roadmaps."
  },
  {
    id: "16",
    src: "/Conglomated pic.JPG",
    alt: "Acceleron Team Gathering",
    category: "Culture & Team",
    title: "All-Hands Celebration",
    caption: "Celebrating major delivery milestones together."
  },
  {
    id: "17",
    src: "/DSC03576.JPG",
    alt: "Team Event Moments",
    category: "Culture & Team",
    title: "Annual Cultural Fest",
    caption: "Team members coming together for cultural celebrations."
  },
  {
    id: "18",
    src: "/DSC03584.JPG",
    alt: "Celebration Gathering",
    category: "Culture & Team",
    title: "Festive Gatherings",
    caption: "Bringing energy and team spirit to life."
  },
  {
    id: "19",
    src: "/DSC03610.JPG",
    alt: "Workshop & Seminar",
    category: "CSR & Events",
    title: "Tech Workshop Series",
    caption: "Knowledge-sharing workshops across enterprise domains."
  },
  {
    id: "20",
    src: "/DSC03626.JPG",
    alt: "CSR Drive & Community Outreach",
    category: "CSR & Events",
    title: "Community Outreach Drive",
    caption: "Empowering local communities through CSR initiatives."
  },
  {
    id: "21",
    src: "/DSC03909.JPG",
    alt: "Team Awards Night",
    category: "Culture & Team",
    title: "Excellence Awards",
    caption: "Recognizing outstanding engineering and operational contributions."
  },
  {
    id: "22",
    src: "/DSC03936.JPG",
    alt: "Special Event",
    category: "CSR & Events",
    title: "Partner Appreciation Day",
    caption: "Honoring customer and vendor partnerships."
  },
  {
    id: "23",
    src: "/DSC07543.JPG",
    alt: "Conference Hall",
    category: "Conferences",
    title: "Global Tech Summit",
    caption: "Keynote sessions attended by global engineering leads."
  },
  {
    id: "24",
    src: "/IMG_20250620_083216430_HDR_AE.jpg",
    alt: "CSR Environment Drive",
    category: "CSR & Events",
    title: "Green Future Initiative",
    caption: "Tree plantation and sustainability drive organized by Acceleron Cares."
  },
  {
    id: "25",
    src: "/IMG_20250704_172405529_HDR_AE.jpg",
    alt: "Team Building Outdoor Event",
    category: "Culture & Team",
    title: "Outdoor Retreat",
    caption: "Annual team-building and wellness retreat."
  }
];
