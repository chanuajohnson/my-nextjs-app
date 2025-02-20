/*export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center">🚀 My Full Stack Engineer Journey Starts Today!</h1>
        <p className="mt-4 text-lg text-gray-600">Excited to build amazing projects!</p>
      </div>
    );
  }*/
  import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        🚀 My Full Stack Engineer Journey Starts Today!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Excited to build amazing projects!
      </p>
      <div className="mt-6">
        <Link href="/about">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            Go to About Page
          </button>
        </Link>
      </div>
    </div>
  );
}