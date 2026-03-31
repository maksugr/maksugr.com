import { PROJECTS, type Project } from "@/data/projects";
import { slugifyAll } from "./slugify";

const getProjectsByTag = (tag: string): Project[] =>
  PROJECTS.filter(project => slugifyAll(project.tags).includes(tag));

export default getProjectsByTag;
