import { categories } from '@/content/writing/posts'

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

        {/* Writing Introduction */}
        <section>
          <p className="text-fx-black leading-relaxed">
            Welcome to my writing space. I created this page to share the stories, decisions, and experiences that have shaped who I am today. I am not a professional writer. I draft my thoughts in Google Docs and use AI tools to help refine my writing, but every experience and reflection shared here is authentically my own.
          </p>
        </section>

        {/* Category Links */}
        <section className="space-y-4">
          {categories.map((category) => (
            <div key={category.slug}>
              <a
                href={`/writing/${category.slug}`}
                className="text-fx-red hover:text-fx-orange transition-colors text-2xl font-bold"
              >
                {category.name}
              </a>
            </div>
          ))}
        </section>

      </div>
    </main>
  )
}
