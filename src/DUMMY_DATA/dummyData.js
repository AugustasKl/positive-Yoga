import smartwatch from "../assets/svg/smartWatch.svg";
import shoe from "../assets/svg/shoe.svg";
import fileList from "../assets/svg/fileList.svg";
import whistle from "../assets/svg/whistle.svg";
import diet from "../assets/svg/diet.svg";
import exercise from "../assets/svg/exercise.svg";
import bookCheck from "../assets/svg/bookcheck.svg";
import Emily from "../assets/svg/emily.svg";
import kylie from "../assets/svg/kylie.svg";
import jessica from "../assets/svg/jessica.svg";
import star from "../assets/svg/star.svg";

export const PROGRAM_DUMMY_DATA = [
  {
    id: 1,
    image: fileList,
    title: "A personalized yoga program",
    paragraph: "Completely safe and focused on your key goals",
  },
  {
    id: 2,
    image: exercise,
    title: "Easy & enjoyable yoga workouts for your level",
    paragraph: "Program adjusts to your level and pace",
  },
  {
    id: 3,
    image: shoe,
    title: "No special preparation needed",
    paragraph:
      "Perfect for begginners! Requires no special preparation or equipment",
  },
  {
    id: 4,
    image: diet,
    title: "Daily motivation & accountability",
    paragraph:
      "Track your progress, develop a healthy routine, reach goals faster",
  },
  {
    id: 5,
    image: whistle,
    title: "Browse from various yoga challenges",
    paragraph:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
  },
  {
    id: 6,
    image: smartwatch,
    title: "Easy access on any device",
    paragraph: "Do your yoga anywhere across all types of devices",
  },
  {
    id: 7,
    image: fileList,
    title: "A personalized yoga program",
    paragraph: "Completely safe and focused on your key goals",
  },
  {
    id: 8,
    image: bookCheck,
    title: "A complete guide to get started",
    paragraph:
      "Best tips, guidelines, advice, and recommendations for successful practice",
  },
];

export const CLIENTS_DUMMY_DATA = [
  {
    id: "c1",
    name: "Emily, 28",
    city:'Delaware, NJ',
    stars: star,
    image:Emily,
    comment:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
  },
  {
    id: "c2",
    name: "Kylie, 40",
    city:'Los Angeles',
    stars:star,
    image:kylie,
    comment:
      "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
  },
  {
    id: "c3",
    name: "Jesica, 51",
    city:'San Francisco, CA',
    stars: star,
    image:jessica,
    comment:
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
  },
];
