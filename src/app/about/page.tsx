/*export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">📖 About Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the about page of my Next.js app.
      </p>
    </div>
  );
}*/
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">📖 About Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the about page of my Next.js app.
      </p>
      <div className="mt-6">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

