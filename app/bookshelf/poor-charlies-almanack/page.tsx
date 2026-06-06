import BookContent from '@/content/bookshelf/poor-charlies-almanack.md'

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

      </div>
    </main>
  )
}
