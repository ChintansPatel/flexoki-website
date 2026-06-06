import BookContent from '@/content/bookshelf/poor-charlies-almanack.mdx'

export default function PoorCharliesAlmanack() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">Poor Charlie's Almanack</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">JAN 21, 2025</p>
        </header>

        {/* Book Content — edit this in content/bookshelf/poor-charlies-almanack.mdx */}
        <article className="space-y-6">
          <BookContent />
        </article>

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
