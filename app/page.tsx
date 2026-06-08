import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/register" className="bg-red-300 p-5 rounded-2xl">Click me</Link>
    </div>
  );
}
