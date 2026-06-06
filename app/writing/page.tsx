import { posts } from '@/content/writing/posts'

export default function Writing() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors font-semibold">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        {/* Writing Posts List — add new posts in content/writing/posts.ts */}
        <section className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="space-y-3">
              <div className="flex justify-between items-start">
                <a
                  href={`/writing/${post.slug}`}
                  className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block"
                >
                  {post.title}
                </a>
                <span className="text-fx-500 text-sm whitespace-nowrap ml-4">{post.date}</span>
              </div>
              <p className="text-fx-black leading-relaxed">{post.description}</p>
            </article>
          ))}
        </section>

      </div>
    </main>
  )
}
