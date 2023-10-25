import { BsGithub, BsLinkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="p-4 xl:px-10 transition-[padding] duration-300 flex gap-4 fixed bottom-0 w-full z-30">
      <a
        href="https://github.com/felix-scl"
        target="_blank"
        rel="noopener noreferrer"
        className="hocus:scale-110 transition-transform"
        aria-label="Link to Github account"
      >
        <BsGithub className="w-6 h-6 xl:w-8 xl:h-8 transition-[width,_height]" />
      </a>
      <a
        href="https://www.linkedin.com/in/felixperez-c"
        target="_blank"
        rel="noopener noreferrer"
        className="hocus:scale-110 transition-transform"
        aria-label="Link to LinkedIn account"
      >
        <BsLinkedin className="w-6 h-6 xl:w-8 xl:h-8 transition-[width,_height]" />
      </a>
    </footer>
  );
}
