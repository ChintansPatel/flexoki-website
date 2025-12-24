export default function AtomicHabits() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Book Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">Atomic Habits</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">2023</p>
        </header>

        {/* Book Content */}
        <article className="space-y-6">
          <p className="text-fx-black leading-relaxed">
            <a href="#" className="text-fx-red hover:text-fx-orange transition-colors">Atomic Habits</a> by James Clear is a practical guide to building good habits and breaking bad ones. The book presents a proven framework for improving every day through tiny changes that compound into remarkable results.
          </p>

          <p className="text-fx-black leading-relaxed">
            Clear's central thesis is that small changes can have a transformative impact when they accumulate over time. Rather than focusing on goals, he advocates for building systems and focusing on the process of continuous improvement.
          </p>

          {/* Section Header */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">The Four Laws of Behavior Change</h2>

          <p className="text-fx-black leading-relaxed">
            Clear introduces a simple framework for creating good habits and breaking bad ones, based on four laws:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black"><strong>Make it Obvious</strong> - Design your environment to make cues of good habits visible</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black"><strong>Make it Attractive</strong> - Bundle habits you need to do with habits you want to do</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black"><strong>Make it Easy</strong> - Reduce friction and design your environment to make good habits effortless</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black"><strong>Make it Satisfying</strong> - Use immediate rewards to reinforce positive behaviors</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">Identity-Based Habits</h2>

          <p className="text-fx-black leading-relaxed">
            One of the most powerful concepts in the book is the idea of identity-based habits. Instead of focusing on what you want to achieve (outcome-based), focus on who you wish to become (identity-based). Every action you take is a vote for the type of person you want to be.
          </p>

          <p className="text-fx-black leading-relaxed">
            The goal is not to read a book, the goal is to become a reader. The goal is not to run a marathon, the goal is to become a runner. This shift in perspective makes habit formation more sustainable and meaningful.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">Key takeaways</h2>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Focus on systems, not goals - winners and losers have the same goals, but different systems</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Habits are the compound interest of self-improvement - small changes yield remarkable results over time</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Environment design is crucial - make good habits obvious and bad habits invisible</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">The Two-Minute Rule - when starting a new habit, it should take less than two minutes to do</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Never miss twice - if you miss one day, make it a priority to get back on track immediately</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Track your habits - measurement creates awareness and motivation</span>
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
