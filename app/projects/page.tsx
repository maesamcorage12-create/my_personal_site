export const metadata = { title: "Projects | Mae Sam Corage" };

const projects = [
  { id: 1, name: "Personal Portfolio", description: "A personal site built with Next.js." },
  { id: 2, name: "Task Manager", description: "A to-do list app for tracking daily tasks." },
  { id: 3, name: "Weather App", description: "An app that displays current weather by city." },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="p-4 border border-gray-200 rounded bg-gray-50">
            <h2 className="text-xl font-medium text-gray-900">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
