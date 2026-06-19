import PostContent from '@/content/writing/ai/how-i-used-ai-to-build-my-personal-website.md'

export default function HowIUsedAIToBuildMyPersonalWebsite() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">How I Used AI to Build My Personal Website</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">JUN 19, 2026</p>
        </header>

        <article className="space-y-6 text-justify">
          <PostContent />
        </article>

      </div>
    </main>
  )
}
