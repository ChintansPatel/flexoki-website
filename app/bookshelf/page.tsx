export default function Bookshelf() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors font-semibold">Bookshelf</a>
          </nav>
        </header>

        {/* Bookshelf Introduction */}
        <section className="space-y-6">
          <p className="text-fx-black leading-relaxed">
            Below, you can find my bookshelf. For each book, I've taken a handful of notes to 
            surface the key themes of the book. They aren't meant to be comprehensive, but 
            they are useful to jog my own memory when it comes to remembering the major 
            takeaways of each.
          </p>

          <p className="text-fx-black leading-relaxed">
            I always love receiving book recommendations. If some book you've encountered has 
            recently changed your world, please send it my way.
          </p>

          <p className="text-fx-black leading-relaxed italic">
            * = one of my favorite reads
          </p>
        </section>

        {/* Books List */}
        <section className="space-y-4">
          {/* 2025 Books */}
          <div className="flex justify-between items-center">
            <a href="/bookshelf/poor-charlies-almanack" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Poor Charlie's Almanack
            </a>
            <span className="text-fx-500 text-sm">Jan 2025</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/sense-of-style" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Sense of Style
            </a>
            <span className="text-fx-500 text-sm">May 2024</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/how-to-know-a-person" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              How to Know a Person
            </a>
            <span className="text-fx-500 text-sm">Mar 2024</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/the-creative-act" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              The Creative Act
            </a>
            <span className="text-fx-500 text-sm">Jan 2024</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/storyworthy" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Storyworthy *
            </a>
            <span className="text-fx-500 text-sm">Jan 2024</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/walter-isaacsons-elon-musk" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Walter Isaacson's Elon Musk
            </a>
            <span className="text-fx-500 text-sm">Oct 2023</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/the-laws-of-trading" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              The Laws of Trading
            </a>
            <span className="text-fx-500 text-sm">Sep 2023</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/thinking-in-systems" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Thinking in Systems
            </a>
            <span className="text-fx-500 text-sm">Jun 2023</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/cant-hurt-me" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Can't Hurt Me
            </a>
            <span className="text-fx-500 text-sm">May 2023</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/the-accidental-superpower" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              The Accidental Superpower
            </a>
            <span className="text-fx-500 text-sm">Jul 2020</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/cities-and-the-wealth-of-nations" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Cities and the wealth of nations
            </a>
            <span className="text-fx-500 text-sm">Jun 2020</span>
          </div>

          <div className="flex justify-between items-center">
            <a href="/bookshelf/range" className="text-fx-red hover:text-fx-orange transition-colors text-lg font-medium">
              Range
            </a>
            <span className="text-fx-500 text-sm">May 2020</span>
          </div>
        </section>

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