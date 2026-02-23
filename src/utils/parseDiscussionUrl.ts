export function parseDiscussionUrl(url: string) {
  const parsed = new URL(url);
  const hostname = parsed.hostname.replace("www.", "");

  if (hostname === "reddit.com" || hostname === "old.reddit.com") {
    const match = parsed.pathname.match(/^\/r\/([^/]+)/);
    return {
      icon: "simple-icons:reddit",
      label: match ? `r/${match[1]}` : "Reddit",
      url,
    };
  }

  if (hostname === "x.com" || hostname === "twitter.com") {
    return { icon: "carbon:logo-x", label: "X", url };
  }

  if (hostname === "bsky.app") {
    return { icon: "simple-icons:bluesky", label: "Bluesky", url };
  }

  if (hostname === "news.ycombinator.com") {
    return { icon: "simple-icons:ycombinator", label: "Hacker News", url };
  }

  if (hostname === "t.me") {
    return { icon: "simple-icons:telegram", label: "Telegram", url };
  }

  return { icon: "carbon:link", label: hostname, url };
}
