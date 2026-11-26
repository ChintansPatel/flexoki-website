import BookContent from '@/content/bookshelf/misbehaving.md'

export default function Misbehaving() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">Misbehaving: The Making of Behavioral Economics: Richard H. Thaler</h1>
        </header>

        <article className="space-y-6 text-justify">
          <BookContent />
        </article>

      </div>
    </main>
  )
}
