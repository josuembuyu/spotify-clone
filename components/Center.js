
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500"
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor()
  }, [])
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-0">
        <div className="flex items-center bg-red-300 space-x-2 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img className="rounded-full w-10 h-10" src={session?.user.image} />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section className="flex items-end bg-gradient-to-b to-black space-x-7 from-red-500 h-80 text-white padding-8 w-full">
          <h1>Hello</h1>
      </section>
    </div>
  );
}

export default Center;
