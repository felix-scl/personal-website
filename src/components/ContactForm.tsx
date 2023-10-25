"use client";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SpinnerIcon } from "./Icons";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target as HTMLFormElement);
    const fromName = form.get("from_name");
    const fromEmail = form.get("from_email");
    const message = form.get("message");

    const res = await fetch("/api/send-email", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fromName, fromEmail, message }),
    });

    const result = await res.json();

    if (result.ok) router.push("/email-sent");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 transition-[margin] duration-300 xl:space-y-14"
    >
      <div className="relative">
        <input
          id="from_name"
          name="from_name"
          type="text"
          placeholder="Name"
          className="bg-transparent border-b border-zinc-300 text-zinc-700 py-2 px-4 w-full peer placeholder-transparent focus:outline-none focus:border-b-2 focus:border-black xl:text-lg dark:text-zinc-300 dark:border-zinc-700 dark:focus:border-white"
          required
        />
        <label
          htmlFor="from_name"
          className="absolute left-4 -top-5 text-xs tracking-widest uppercase bg-black text-white font-bold px-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-placeholder-shown:px-0 peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-black peer-focus:text-white peer-focus:tracking-widest peer-focus:uppercase peer-focus:font-bold peer-focus:px-2 transition-all xl:text-sm xl:peer-focus:text-sm xl:peer-placeholder-shown:text-lg dark:bg-white dark:text-black dark:peer-focus:bg-white dark:peer-focus:text-black dark:peer-placeholder-shown:text-zinc-600"
        >
          Name
        </label>
      </div>
      <div className="relative">
        <input
          id="from_email"
          name="from_email"
          type="email"
          placeholder="Email"
          className="bg-transparent border-b border-zinc-300 text-zinc-700 py-2 px-4 w-full peer placeholder-transparent focus:outline-none focus:border-b-2 focus:border-black xl:text-lg dark:text-zinc-300 dark:border-zinc-700 dark:focus:border-white"
          required
        />
        <label
          htmlFor="from_email"
          className="absolute left-4 -top-5 text-xs tracking-widest uppercase bg-black text-white font-bold px-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-placeholder-shown:px-0 peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-black peer-focus:text-white peer-focus:tracking-widest peer-focus:uppercase peer-focus:font-bold peer-focus:px-2 transition-all xl:text-sm xl:peer-focus:text-sm xl:peer-placeholder-shown:text-lg dark:bg-white dark:text-black dark:peer-focus:bg-white dark:peer-focus:text-black dark:peer-placeholder-shown:text-zinc-600"
        >
          Email
        </label>
      </div>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          cols={30}
          rows={3}
          className="bg-transparent border-b border-zinc-300 text-zinc-700 resize-y py-2 px-4 w-full peer placeholder-transparent focus:outline-none focus:border-b-2 focus:border-black xl:text-lg dark:text-zinc-300 dark:border-zinc-700 dark:focus:border-white"
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-4 -top-5 text-xs tracking-widest uppercase bg-black text-white font-bold px-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-placeholder-shown:px-0 peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:bg-black peer-focus:text-white peer-focus:tracking-widest peer-focus:uppercase peer-focus:font-bold peer-focus:px-2 transition-all xl:text-sm xl:peer-focus:text-sm xl:peer-placeholder-shown:text-lg dark:bg-white dark:text-black dark:peer-focus:bg-white dark:peer-focus:text-black dark:peer-placeholder-shown:text-zinc-600"
        >
          Message
        </label>
      </div>
      <button
        className="mt-4 bg-yellow-600 rounded-sm text-lg py-2 enabled:hocus:bg-yellow-400 transition-colors duration-300 w-full xl:text-xl text-black enabled:dark:hocus:bg-yellow-400 disabled:bg-yellow-700 disabled:dark:bg-yellow-900 disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <SpinnerIcon className="animate-spin w-7 h-7 mx-auto" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
