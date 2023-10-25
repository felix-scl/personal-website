import Image from "next/image";
import { Project } from "@/types";
import { HiArrowTopRightOnSquare } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative w-5/6 max-w-[450px] mx-auto group text-white border border-zinc-300/60 dark:border-none rounded-md overflow-hidden">
      <Image src={project.img} alt={project.title} className="w-full h-auto" />
      <div className="absolute bg-black/60 backdrop-blur-sm inset-0 flex flex-col justify-center items-center gap-2 xl:gap-6 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 text-center px-4">
        <h2 className="text-2xl font-semibold xl:text-3xl">{project.title}</h2>
        <p className="text-zinc-300 xl:text-lg">{project.description}</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-yellow-300/60 rounded-md"
            aria-label={`Live demo of ${project.title}`}
          >
            <HiArrowTopRightOnSquare className="w-5 h-5 xl:w-7 xl:h-7" />
          </a>
        ) : (
          <span>No demo available</span>
        )}
      </div>
    </article>
  );
}
