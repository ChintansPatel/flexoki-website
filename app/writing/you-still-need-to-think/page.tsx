import PostContent from '@/content/writing/you-still-need-to-think.mdx'

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
