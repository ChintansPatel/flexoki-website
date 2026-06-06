import PostContent from '@/content/writing/you-still-need-to-think.md'

export default function YouStillNeedToThink() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Post Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">You Still Need to Think</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">SEP 26, 2025</p>
        </header>

        {/* Post Content — edit this in content/writing/you-still-need-to-think.mdx */}
        <article className="space-y-6">
          <PostContent />
        </article>

      </div>
    </main>
  )
}
