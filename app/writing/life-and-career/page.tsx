import { posts } from '@/content/writing/posts'

const categoryPosts = posts.filter((p) => p.category === 'life-and-career')

export default function LifeAndCareer() {
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
          <div className="space-y-8">
            {categoryPosts.map((post) => (
              <div key={post.slug}>
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    href={`/writing/${post.slug}`}
                    className="text-fx-red hover:text-fx-orange transition-colors text-2xl font-bold"
                  >
                    {post.title}
                  </a>
                  <span className="text-fx-500 text-sm shrink-0">{post.date}</span>
                </div>
                <p className="text-fx-700 text-sm leading-relaxed mt-1">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
