export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lg:flex mb-32 text-center md:flex-none lg:mb-0 lg:text-left gap-4">
        <div className="">
          <a
            href="e-commerce"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            // target="_blank"
            rel="noopener noreaferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              e-Commerce{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about e-Commerce features and
              resign-project.
            </p>
          </a>

          <a
            href="/portfolio"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
               Admin
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
        <div className="">
          <a
            href="e-commerce"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            // target="_blank"
            rel="noopener noreaferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Portfolio{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Portfolio features and
              resign-prodect.
            </p>
          </a>

          <a
            href="e-commerce"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            // target="_blank"
            rel="noopener noreaferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Admin
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
    </main>
  );
}
