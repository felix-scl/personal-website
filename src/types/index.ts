import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  id: number;
  img: StaticImageData;
  link: string;
}
