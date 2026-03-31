export type ProjectLink = {
  title: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  url: string;
  repo?: string;
  tags: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "syntsch",
    description:
      "Fully autonomous AI-driven publication that writes cultural essays about Berlin events daily. Zero human editorial intervention. Multi-agent system with Scout, Curator, Author, Critic, and Reflector roles.",
    url: "https://syntsch.de/",
    repo: "https://github.com/maksugr/syntsch",
    tags: ["AI agents"],
    links: [
      {
        title: "AI Writes Daily Without My Involvement",
        url: "/articles/ai-writes-daily-without-my-involvement",
      },
    ],
  },
  {
    title: "plantuml_encoding",
    description:
      "Rust library for encoding and decoding PlantUML diagram markup. Built with TDD approach.",
    url: "https://crates.io/crates/plantuml_encoding",
    repo: "https://github.com/maksugr/plantuml_encoding",
    tags: ["rust", "plantuml"],
    links: [
      {
        title: "PlantUML Encoding in Rust Using TDD",
        url: "/articles/plantuml-encoding-in-rust-using-tdd",
      },
    ],
  },
];
