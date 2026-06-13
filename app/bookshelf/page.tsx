import { books } from '@/content/bookshelf/books'

export default function Bookshelf() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors font-semibold">Bookshelf</a>
          </nav>
        </header>

        {/* Bookshelf Introduction */}
        <section>
          <p className="text-fx-black leading-relaxed">
            I love reading because it constantly provides me with new thoughts, ideas, and inspiration. I've read quite a few books over the years, but a handful stand out as truly worth mentioning.
          </p>
        </section>

        {/* Books List — add new books in content/bookshelf/books.ts */}
        <section className="space-y-4">
          {books.map((book) => (
            <div key={book.slug}>
              <a
                href={`/bookshelf/${book.slug}`}
                className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium"
              >
                {book.title}{book.favorite ? ' *' : ''}
              </a>
            </div>
          ))}
        </section>

      </div>
    </main>
  )
}
