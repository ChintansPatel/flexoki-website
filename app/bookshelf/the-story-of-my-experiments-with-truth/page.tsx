import BookContent from '@/content/bookshelf/the-story-of-my-experiments-with-truth.md'

export default function TheStoryOfMyExperimentsWithTruth() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">The Story of My Experiments with Truth: An Autobiography: Mahatma Gandhi</h1>
        </header>

        <article className="space-y-6">
          <BookContent />
        </article>

      </div>
    </main>
  )
}
