export default function Index() {
  return (
    <main className="grid h-screen place-items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter">
          Welcome to Remix
        </h1>
        <h2 className="mb-4">
          Template by{' '}
          <a
            href="https://github.com/juanpujol"
            title="Go to Juan's Github"
            className="text-blue-500 hover:text-blue-700"
          >
            @juanpujol
          </a>
        </h2>

        <ul className="ml-6 list-disc">
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
