import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Frontend Mentor Projects",
    url: "/projects/frontend-mentor-projects",
    description:
      "This category features projects from Frontend Mentor that I have attempted and completed. If it's complete, there's a YouTube video about it. Find the repository on my GitHub, @sankthomas, and the corresponding video on my YouTube channel: @tsbsankara",
    category: "Frontend mentor",
    github: "https://github.com/sankthomas/",
  },
  {
    id: uuidv4(),
    title: "Pokedex",
    url: "/projects/pokedex",
    description: "This app uses the PokeAPI to get data about various Pokemon",
    category: "API projects",
    github:
      "https://github.com/SankThomas/catalogue/tree/main/app/projects/pokedex",
  },
  {
    id: uuidv4(),
    title: "Book Finder",
    url: "/projects/book-finder",
    description:
      "This app uses the New York Times Books API to get a list of books. Using this API, we build the front-end using NextJs and deploy it to Vercel and Github - obviously. This app also makes use of the built-in routing in NextJs.",
    category: "API projects",
    github:
      "https://github.com/SankThomas/catalogue/tree/main/app/projects/book-finder",
  },
  {
    id: uuidv4(),
    title: "Sports App",
    url: "/projects/sports-app",
    description:
      "Using The Sports DB API, this project leverages NextJs routing and Image components to build a server-rendered web app with lazy loading for the images to make it super fast.",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/sports-app",
  },
  {
    id: uuidv4(),
    title: "DevTo Clone",
    url: "/projects/dev-to",
    description:
      "Dev.to is a popular articles website for developers to share and interact. They have a free API that I use in this project to get all the data that you will find when you open it up.",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/dev-to",
  },
  {
    id: uuidv4(),
    title: "Event creation and booking web app",
    url: "/projects/event-creation-and-booking",
    description:
      'Create events using form state management in NextJs. Add the events to localStorage so that you can access them in other pages within the application. Book said events and display them in the "Booked Events" section',
    category: "NextJs",
    github:
      "https://github.com/sankthomas/catalogue/tree/main/app/event-creation-and-booking",
  },
  {
    id: uuidv4(),
    title: "Invoicer",
    url: "/projects/invoicer",
    description:
      "Ever wondered how to create an invoice for your clients? Well, this app does just that. It is built in NextJs for the frontend framework, TailwindCSS for the styling, and jsPDF to generate PDFs of said invoices.",
    category: "NextJs",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/invoicer",
  },
  {
    id: uuidv4(),
    title: "Food Palace",
    url: "/projects/food-palace",
    description:
      "Build a food recipe app that uses The Meal DB API to get data about food categories and meals and display them to the UI. Look up your next meal in this app.",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/food-palace",
  },
  {
    id: uuidv4(),
    title: "Todo productivity app",
    url: "/projects/todo-app",
    description:
      "The classic Todo app with a slick UI for you to enjoy tracking your projects with your daily tasks.",
    category: "Normal projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/todo-app",
  },
  {
    id: uuidv4(),
    title: "Password Generator",
    url: "/projects/password-generator",
    description:
      "Build a password generator in NextJs. This is not a password manager - so don't be disappointed with the little features it has.",
    category: "Normal projects",
    github:
      "https://github.com/sankthomas/catalogue/tree/main/app/password-generator",
  },
  {
    id: uuidv4(),
    title: "Diarry",
    url: "/projects/diarry",
    description:
      "Diarry is a note taking application suitable for your every day needs. It features localStorage so that you don't lose access to any of your notes, edit and delete functionality, timestamps for your notes, and markdown capability. I launched this app on ProductHunt.",
    category: "Note Taking",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/diarry",
  },
  {
    id: uuidv4(),
    title: "REST Countries App",
    url: "/projects/countries",
    description:
      "The countries app showcases all the known countries of the world, their flags, and more details about them all using the RestCountries API. This project features dynamic routing using NextJs, TailwindCSS for the styling, and a search functionality for the countries.",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/countries",
  },
  {
    id: uuidv4(),
    title: "Blog Using Sanity CMS",
    url: "/projects/sanity-blog",
    description:
      "This project uses Sanity.io's powerful CMS to deliver content from it's backend to your NextJs front-end.",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/sanity-blog",
  },
  {
    id: uuidv4(),
    title: "Markdown Editor",
    url: "/projects/markdown-editor",
    description:
      "This is a markdown editor built to resemble VSCode's markdown editor and preview. It uses the Remarkable package from npm.",
    category: "Normal Projects",
    github:
      "https://github.com/sankthomas/catalogue/tree/main/app/markdown-editor",
  },
  {
    id: uuidv4(),
    title: "The Real Dog App",
    url: "/projects/dog-app",
    description:
      "This app shows dog breeds from all over the world. It uses TheDogAPI",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/dog-app",
  },
  {
    id: uuidv4(),
    title: "Natural Event Tracker",
    url: "/projects/nasa-eonet",
    description:
      "A map built using LeafletJS that shows natural events occurring all over the world using NASA's Earth Observatory Natural Event Tracker (EONET) API",
    category: "API Projects",
    github: "https://github.com/sankthomas/catalogue/tree/main/app/nasa-eonet",
  },
];
