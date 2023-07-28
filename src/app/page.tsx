import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lg:flex mb-32 text-center md:flex-none lg:mb-0 lg:text-left gap-4">
        <div className="w-[160px] font-bold text-black bg-gray-50 shadow-lg shadow-sky-400/50 p-3 rounded-md  hover:animate-bounce hover:bg-sky-100  animate-none ">
          <div className="px-2 py-3">
            <button className="hover:text-sky-500">
              <Link className="flex" href="/e-commerce">
                e-Commerce{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </Link>
            </button>
          </div>
          <div className="px-2 py-3">
            <button className="hover:text-sky-400">Admin</button>
          </div>
        </div>

        <div className="w-[160px] font-bold text-black bg-gray-50 shadow-lg shadow-pink-400/50 p-3 rounded-md hover:animate-bounce hover:bg-pink-100 animate-none ">
          <div className="px-2 py-3">
            <button className="hover:text-pink-400">
              <Link className="flex" href="/e-commerce">
                Portfolio
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </Link>
            </button>
          </div>
          <div className="px-2 py-3">
            <button className="hover:text-pink-400">Admin</button>
          </div>
        </div>
      </div>
    </main>
  );
}
