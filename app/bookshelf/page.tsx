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
        <section className="space-y-6">
          <p className="text-fx-black leading-relaxed">
            Below, you can find my bookshelf. For each book, I've taken a handful of notes to
            surface the key themes of the book. They aren't meant to be comprehensive, but
            they are useful to jog my own memory when it comes to remembering the major
            takeaways of each.
          </p>
          <p className="text-fx-black leading-relaxed">
            I always love receiving book recommendations. If some book you've encountered has
            recently changed your world, please send it my way.
          </p>
        </section>

        {/* Books List — add new books in content/bookshelf/books.ts */}
        <section className="space-y-4">
          {books.map((book) => (
            <div key={book.slug} className="flex justify-between items-center">
              <a
                href={`/bookshelf/${book.slug}`}
                className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium"
              >
                {book.title}{book.favorite ? ' *' : ''}
              </a>
              <span className="text-fx-500 text-sm">{book.date}</span>
            </div>
          ))}
        </section>

        {/* Navigation Footer */}
        <nav className="border-t border-fx-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-fx-red text-2xl">🏔️</div>
            <ul className="flex flex-col items-center space-y-2 text-fx-red">
              <li><a href="/" className="hover:text-fx-orange transition-colors">About</a></li>
              <li><a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a></li>
              <li><a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a></li>
              <li><a href="https://www.linkedin.com/in/chintanpatel42" className="hover:text-fx-orange transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </nav>

      </div>
    </main>
  )
}
