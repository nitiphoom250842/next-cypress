"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 id='t-01' className="text-3xl font-bold mb-4">My Home Page</h1>
      <div className="grid gap-4">
        <input className=' border border-red-300 rounded-lg' type="text" id="in-name"/>
        <button 
        id = "bt-to-root"
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Root
        </button>
        <button 
         id = "bt-to-content"
          onClick={() => router.push('/content')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Content
        </button>
      </div>
    </div>
  );
}
