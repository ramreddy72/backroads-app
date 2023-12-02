import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

export const socialLinks = [
    {
        id: 1,
        href: "https://www.facebook.com",
        icon: "fab fa-facebook"
    },
    {
        id: 2,
        href: "https://www.twitter.com",
        icon: "fab fa-twitter"
    },
    {
        id: 3,
        href: "https://www.squarespace.com",
        icon: "fab fa-squarespace"
    }
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort ravan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  }
];

export const toursData = [
  {
    id: 1,
    date: "august 26th, 2020",
    image: tour1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    country: "china",
    days: 6,
    amount: 2100
  },
  {
    id: 2,
    date: "october 1th, 2020",
    image: tour2,
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: 3,
    amount: 1400
  },
  {
    id: 3,
    date: "august 26th, 2020",
    image: tour3,
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: 8,
    amount: 2100
  },
  {
    id: 4,
    date: "december 5th, 2019",
    image: tour4,
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    country: "kenya",
    days: 20,
    amount: 3300
  }
];