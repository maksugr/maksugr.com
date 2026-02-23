export const SITE = {
  website: "https://maksugr.com/",
  author: "Roman Ponomarev",
  profile: "https://github.com/maksugr",
  desc: "Roman Ponomarev's developer blog",
  title: "maksugr",
  ogImage: "og-image.png",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
