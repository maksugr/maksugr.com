import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: string;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/maksugr",
    linkTitle: `${SITE.title} on GitHub`,
    icon: "carbon:logo-github",
  },
  {
    name: "X",
    href: "https://x.com/maksugr",
    linkTitle: `${SITE.title} on X`,
    icon: "carbon:logo-x",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maksugr/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: "carbon:logo-linkedin",
  },
  {
    name: "Mail",
    href: "mailto:maksugr@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: "carbon:email",
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: "carbon:logo-x",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Share this post on Bluesky`,
    icon: "carbon:logo-bluesky",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: "carbon:logo-linkedin",
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/submit?url=",
    linkTitle: `Share this post on Reddit`,
    icon: "simple-icons:reddit",
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: "simple-icons:telegram",
  },
] as const;
