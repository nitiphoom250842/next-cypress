"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Automate Test</h1>
      <div className="grid gap-4">
        <button 
          onClick={navigateToHome}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Home
        </button>
        <button 
          onClick={() => router.push('/content')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Content
        </button>
      </div>
    </div>
  );
}
