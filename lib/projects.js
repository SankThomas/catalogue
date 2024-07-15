import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Frontend Mentor Projects",
    url: "/projects/frontend-mentor-projects",
    description:
      "This category features projects from Frontend Mentor that I have attempted and completed. If it's complete, there's a YouTube video about it. Find the repository on my GitHub, @sankthomas, and the corresponding video on my YouTube channel: @tsbsankara",
    category: "Frontend mentor",
  },
  {
    id: uuidv4(),
    title: "Book Finder",
    url: "/projects/book-finder",
    description:
      "This app uses the New York Times Books API to get a list of books. Using this API, we build the front-end using NextJs and deploy it to Vercel and Github - obviously. This app also makes use of the built-in routing in NextJs.",
    category: "API projects",
  },
  {
    id: uuidv4(),
    title: "Sports App",
    url: "/projects/sports-app",
    description:
      "Using The Sports DB API, this project leverages NextJs routing and Image components to build a server-rendered web app with lazy loading for the images to make it super fast.",
    category: "API Projects",
  },
  {
    id: uuidv4(),
    title: "DevTo Clone",
    url: "/projects/dev-to",
    description:
      "Dev.to is a popular articles website for developers to share and interact. They have a free API that I use in this project to get all the data that you will find when you open it up.",
    category: "API Projects",
  },
  {
    id: uuidv4(),
    title: "Event creation and booking web app",
    url: "/projects/event-creation-and-booking",
    description:
      'Create events using form state management in NextJs. Add the events to localStorage so that you can access them in other pages within the application. Book said events and display them in the "Booked Events" section',
    category: "NextJs", // Should be an array
  },
  {
    id: uuidv4(),
    title: "Invoicer",
    url: "/projects/invoicer",
    description:
      "Ever wondered how to create an invoice for your clients? Well, this app does just that. It is built in NextJs for the frontend framework, TailwindCSS for the styling, and jsPDF to generate PDFs of said invoices.",
    category: "NextJs", // Should be an array
  },
  {
    id: uuidv4(),
    title: "Food Palace",
    url: "/projects/food-palace",
    description:
      "Build a food recipe app that uses The Meal DB API to get data about food categories and meals and display them to the UI. Look up your next meal in this app.",
    category: "API Projects", // Should be an array
  },
  {
    id: uuidv4(),
    title: "Todo productivity app",
    url: "/projects/todo-app",
    description:
      "The classic Todo app with a slick UI for you to enjoy tracking your projects with your daily tasks.",
    category: "Normal projects", // Should be an array
  },
  {
    id: uuidv4(),
    title: "Password Generator",
    url: "/projects/password-generator",
    description:
      "Build a password generator in NextJs. This is not a password manager - so don't be disappointed with the little features it has.",
    category: "Normal projects",
  },
];
