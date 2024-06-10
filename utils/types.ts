export type Project = {
  title: string;
  description: string;
  cover: string;
  screenshots: string[];
  link?: string;
  src: string;
  technologies: {
    name: string;
    icon: string;
    isImage?: boolean;
  }[];
};
