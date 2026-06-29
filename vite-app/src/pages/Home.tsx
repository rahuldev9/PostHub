import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
          Welcome to PostHub
        </span>

        <h1 className="mt-6 text-5xl font-bold text-gray-900 md:text-6xl">
          Explore Amazing Posts &
          <span className="text-indigo-600"> Discussions</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Browse posts, read engaging discussions, and discover comments from
          people around the world. Built with React, TypeScript, Tailwind CSS,
          and Axios.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/posts"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Browse Posts →
          </Link>

          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            API Docs
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Why Use PostHub?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-5xl">📝</div>
            <h3 className="mb-3 text-xl font-bold">Browse Posts</h3>
            <p className="text-gray-600">
              View beautifully designed posts fetched from the JSONPlaceholder
              API with a clean and responsive layout.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-5xl">💬</div>
            <h3 className="mb-3 text-xl font-bold">Read Comments</h3>
            <p className="text-gray-600">
              Open any post to instantly load comments with a modern,
              social-media-inspired interface.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-3 text-xl font-bold">Fast & Responsive</h3>
            <p className="text-gray-600">
              Built using React, TypeScript, Tailwind CSS, and Axios for a fast,
              scalable, and responsive experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
