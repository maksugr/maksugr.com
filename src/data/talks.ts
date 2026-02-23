export type Talk = {
  title: string;
  videoId: string;
  url: string;
  event: string;
  lang: "ru" | "en";
};

export const TALKS: Talk[] = [
  {
    title:
      "Creating a Common Language Between Designers and Developers for Data Analytics",
    videoId: "RrlMOunfdHs",
    url: "https://www.youtube.com/live/RrlMOunfdHs?si=6JL507n2OwpOLnI5&t=5915",
    event: "Bridging the Gap Between Design and Development",
    lang: "en",
  },
  {
    title: "WebXR in Real Life",
    videoId: "6eGVk9Qi0ho",
    url: "https://www.youtube.com/watch?v=6eGVk9Qi0ho",
    event: "HolyJS 2021 Piter",
    lang: "ru",
  },
  {
    title: "AR: The Next Big Thing",
    videoId: "6zh0A9esWLA",
    url: "https://www.youtube.com/watch?v=6zh0A9esWLA",
    event: "RndTechConf 2020",
    lang: "ru",
  },
  {
    title: "Machines are learning: Don't be afraid, Lead!",
    videoId: "8OkhauJfTRI",
    url: "https://www.youtube.com/watch?v=8OkhauJfTRI",
    event: "HolyJS 2019 Moscow",
    lang: "ru",
  },
];
