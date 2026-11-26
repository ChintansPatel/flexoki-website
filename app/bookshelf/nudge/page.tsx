import BookContent from '@/content/bookshelf/nudge.md'

export default function Nudge() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">Nudge: Improving Decisions About Health, Wealth, and Happiness: Richard H. Thaler and Cass R. Sunstein</h1>
        </header>

        <article className="space-y-6 text-justify">
          <BookContent />
        </article>

      </div>
    </main>
  )
}
