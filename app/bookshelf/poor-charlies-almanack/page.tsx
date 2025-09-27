export default function PoorCharliesAlmanack() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">Poor Charlie's Almanack</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">JAN 21, 2025</p>
        </header>

        {/* Book Content */}
        <article className="space-y-6">
          <p className="text-fx-black leading-relaxed">
            <a href="#" className="text-fx-red hover:text-fx-orange transition-colors">Poor Charlie's Almanack</a> is styled after Ben Franklin's Poor Richard's Almanack, a 
            sort of 'guide to a life well-lived'. In it, Charlie tries to improve upon the things that old 
            Ben left out, which decidedly skew towards investing + decision-making.
          </p>

          <p className="text-fx-black leading-relaxed">
            After a bunch of friends recommended it, I decided to dive in. Rather than a 
            sequence of aphorisms, the book is a series of 11 talks that discuss investing advice, 
            success in business, and how to think about big ideas. It's one of those books that I 
            think is probably worth revisiting ever 5-10 years to ruminate on. At the very least, to 
            enjoy some of Charlie's folksy wit.
          </p>

          {/* Section Header */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">The value of character</h2>

          <p className="text-fx-black leading-relaxed">
            One thing which struck me (which often seems to get lost in today's business + social 
            media world) is how much Charlie emphasized character. From his early days 
            growing up in the midwest, he talks about how his father would come home and share 
            stories about how to be an upstanding citizen.
          </p>

          <p className="text-fx-black leading-relaxed">
            Charlie talks about how important it is to be reliable, to keep your word, and to 
            build a reputation that precedes you. In today's world of quick wins and viral moments, 
            this feels like refreshingly timeless advice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">Mental models and learning</h2>

          <p className="text-fx-black leading-relaxed">
            The core of Charlie's philosophy revolves around building a latticework of mental models 
            from multiple disciplines. He argues that having models from psychology, economics, 
            physics, and other fields allows you to better understand the world.
          </p>

          <p className="text-fx-black leading-relaxed">
            One of my favorite quotes from the book: "You must know the big ideas in the big 
            disciplines and use them routinely — all of them, not just a few. Most people are 
            trained in one model — economics, for example — and try to solve all problems in 
            one way."
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">Key takeaways</h2>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Build a reputation for reliability and integrity above all else</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Develop mental models from multiple disciplines to better understand complex problems</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Invert problems - instead of asking "how do I succeed?", ask "how do I fail?"</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Continuous learning and reading are essential for long-term success</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Focus on a few big opportunities rather than many small ones</span>
            </li>
          </ul>
        </article>

        {/* Navigation Footer */}
        <nav className="border-t border-fx-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-fx-red text-2xl">🏔️</div>
            <ul className="flex flex-col items-center space-y-2 text-fx-red">
              <li><a href="/" className="hover:text-fx-orange transition-colors">About</a></li>
              <li><a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a></li>
              <li><a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a></li>
              <li><a href="/projects" className="hover:text-fx-orange transition-colors">Projects</a></li>
              <li><a href="https://www.linkedin.com/in/chintanpatel42" className="hover:text-fx-orange transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </nav>

      </div>
    </main>
  )
}