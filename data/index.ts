export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#RecentProjects" },
  { name: "What I do", link:"#ido"},
  { name: "Skills", link:"#skills"},
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Introduction",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full z-[-100] opacity-25",
    titleClassName: "justify-end",
    img: "/LetterSwithBackground.png",
    spareImg: "",
  },
  {
    id: 2,
    title: ", ",
    description: "Skilled communicator, creative thinker, and collaborative team player.",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Tech enthusiast with a passion for development.",
    description: "",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",

    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "my LinkedIn",
    description: "All About Me is in ",
    // className: "md:col-span-3 md:row-span-2",
    className: "md:col-span-2 md:row-span-1",

    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: `Do you want to check my Resume?`,
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 ",
    imgClassName: "Wanna check my Resume?",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MyGPA",
    des: "MyGPA is an ultimate academic companion designed to help students effortlessly keep track of their performance..",
    img: "/mygpa.png",
    iconLists: ["/flutter.svg", "/litesql.png","dart.svg"],
    link: "github.com/Darkhenrhal/MyGPA.git",
  },

  {
    id: 2,
    title: "NaviGuide",
    des: "NaviGuide is a web platform that allows the community to connect Resource persons for Awareness Programs..",
    img: "/project-1.png",
    iconLists: ["/re.svg", "/css.png","/html.png", "/spring.png", "/mongo.svg","java.png","js.png"],
    link: "github.com/Darkhenrhal/NaviGuide",
  },
  
  {
    id: 3,
    title: "ToDO Android Application",
    des: "ToDO,Is a mobile application designed to streamline your daily tasks and manage your to-do lists efficiently..",
    img: "/todo.png",
    iconLists: ["/kotlin.png", "/litesql.png"],
    link: "github.com/Darkhenrhal/ToDO-.git",
  },
  {
    id: 4,
    title: "TaEx Windows Application",
    des: "The software is focused on managing the tasks and the expenditures of a corresponding Objective..",
    img: "/project-3.png",
    iconLists: ["/asp.net.png", "/csh.png", "/mysql.png"],
    link: "github.com/Darkhenrhal/TaEx.git",
  },
  {
    id: 5,
    title: "Mathematics Student Association Website",
    des: "The Students’ Association website is to display the activities and events of the association for students and outsiders..",
    img: "/project-2.png",
    iconLists: ["/html.png", "/css.png", "/js.png", "/mysql.png", "/php.png"],
    link: "github.com/Darkhenrhal/Mathematics_Student_Association_Website.git",
  },
  {
    id: 6,
    title: "Hotel Reservation System",
    des: "A software focuses on functionality, Which provides Employee, Customer, and Order management..",
    img: "/project-5.png",
    iconLists: ["/java.png"],
    link: "github.com/Darkhenrhal/Hotel_Reservation_System.git",
  },
  {
    id: 7,
    title: "SLT Mobitel Santa GPT UI/UX",
    des: "A Christmas game launched by DATCom consultants for SLT Mobitel. The game UI followed theme of AI-Generated..",
    img: "/santagpt.png",
    iconLists: ["/figma.png","leanardo.png","photoshop.png"],
    link: "www.figma.com/SandeepaSineth/SantaGPT",
  },
  
  {
    id: 8,
    title: "EasyPlant UI/UX Concept Application",
    des: "EasyPlant is a Conceptual UI/UX project of a Mobile Application related to Agriculture..",
    img: "/project-4.png",
    iconLists: ["/figma.png"],
    link: "www.figma.com/SandeepaSineth/EasyPlant",
  },
  
];

export const testimonials = [
  {
    quote:
      "Collaborating with Sandeepa Sineth for the Santa GPT project for SLT Mobitel was an absolute pleasure. As a UI/UX Designer, his creativity and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of design truly stands out. If you're seeking to elevate your website and enhance your brand, Sineth is the ideal partner.",
    name: "Saman Ilangamuwa",
    title: "Founder of DATCom Consultant",
    image:"/client1.png",
  }
];

export const companies = [
  {
    id: 1,
    name: "Springboot",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const whatido = [
  {
    id: 1,
    title: "Software & Web Development",
    desc: "Bring software and web applications to life with a focus on pixel-perfect user interfaces, built upon semantic, modular, and DRY code.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Mobile Application Development",
    desc: "Create engaging mobile experiences that bring your ideas to life on smartphones and tablets.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp-phone.png",
  },
  {
    id: 2,
    title: "Responsive UI / UX Design",
    desc: "Strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  
  {
    id: 4,
    title: "Involvement and Freelance",
    desc: "I Empower businesses as a freelance Developer & UI/UX Designer along with Innovative solutions. ",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
  {
    id: 3,
    img: "/twit.svg",
  },
];