import ProjectCard from "@/components/Project";
import type { Metadata } from "next";
import type { Project } from "@/types";
import MoviesDbImg from "@/app/assets/MoviesDB-app.jpg";
import TasksImg from "@/app/assets/Tasks-app.jpg";
import OldagramImg from "@/app/assets/Oldagram-app.jpg";
import UnitConverterImg from "@/app/assets/Unit-converter-app.jpg";

export const metadata: Metadata = {
  title: "Projects - Felix Perez",
};

const projects: Project[] = [
  {
    title: "MoviesDB",
    description:
      "Movie database built with React. Built a small backend for get requests",
    id: 1,
    img: MoviesDbImg,
    link: "https://flx-moviesdb-react.netlify.app/",
  },
  {
    title: "Tasks",
    description: "Todo app built with React and RTK for state management ",
    id: 2,
    img: TasksImg,
    link: "https://flx-todo-react.netlify.app/",
  },
  {
    title: "Oldagram",
    description: "Simple instagram feed clone",
    id: 3,
    img: OldagramImg,
    link: "https://flx-oldagram.netlify.app/",
  },
  {
    title: "Unit Converter",
    description: "Basic unit conversion app",
    id: 4,
    img: UnitConverterImg,
    link: "https://flx-unit-converter.netlify.app/",
  },
];

export default function Projects() {
  return (
    <main className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 py-4 px-4 xl:px-10 transition-all duration-300">
      <h1 className="md:hidden text-center text-3xl font-medium">
        Recent projects
      </h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
