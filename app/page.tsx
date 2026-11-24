import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Hello, my name is Mae Sam Corage</h1>
      <p className="mb-4">
        I am a student learning web development with Next.js. I enjoy building
        personal projects and exploring new technologies.
      </p>
      <p className="mb-4">
        Welcome to my personal site where I share my work and interests.
      </p>
      <Link
        href="/projects"
        className="mt-4 inline-block underline font-medium text-blue-600 hover:text-blue-800"
      >
        See my projects
      </Link>
    </main>
  );
}
