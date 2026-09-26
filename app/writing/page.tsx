import { posts } from '@/content/writing/posts'

export default function Writing() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors font-semibold">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        <section>
          <p className="text-fx-black leading-relaxed">
            Welcome to my writing space. I created this page to share the stories, decisions, and experiences that have shaped who I am today. I am not a professional writer. I draft my thoughts in Google Docs and use AI tools to help refine my writing, but every experience and reflection shared here is authentically my own.
          </p>
        </section>

        <section className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug}>
              <div className="flex items-baseline justify-between gap-4">
                <a
                  href={`/writing/${post.slug}`}
                  className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium"
                >
                  {post.title}
                </a>
                <span className="text-fx-500 text-sm shrink-0">{post.date}</span>
              </div>
              <p className="text-fx-700 text-sm leading-relaxed mt-1">{post.description}</p>
            </div>
          ))}
        </section>

      </div>
    </main>
  )
}
