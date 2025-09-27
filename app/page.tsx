export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Main content area */}
      <div className="space-y-8">
        
        {/* Product recommendations section */}
        <section>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <div>
                <strong className="text-fx-red">Oura Ring</strong>
                <span className="text-fx-700"> — I'm not quite sure what it would tell me, or what I'd do differently. It's hard to explain the full value of the Oura ring, but think of it like a sleep coach. I started sleeping better almost immediately.</span>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <div>
                <strong className="text-fx-red">Oxo Cold Brew</strong>
                <span className="text-fx-700"> — Cold Brew will change your life. Well worth it.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* About section */}
        <section className="border-t border-fx-200 pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-fx-black">About this site</h2>
          <p className="text-fx-700 leading-relaxed">
            This site is built with{' '}
            <a href="#" className="text-fx-red hover:text-fx-orange">Next.js</a>,{' '}
            <a href="#" className="text-fx-red hover:text-fx-orange">Tailwind</a>, and{' '}
            <a href="#" className="text-fx-red hover:text-fx-orange">MDX</a>. Huge thank you to{' '}
            <a href="#" className="text-fx-red hover:text-fx-orange">Steph Ango</a> for the{' '}
            <a href="#" className="text-fx-red hover:text-fx-orange">Flexoki theme</a> theme.
          </p>
        </section>

        {/* Navigation */}
        <nav className="border-t border-fx-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-fx-red text-2xl">🏔️</div>
            <ul className="flex flex-col items-center space-y-2 text-fx-red">
              <li><a href="#" className="hover:text-fx-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-fx-orange transition-colors">Writing</a></li>
              <li><a href="#" className="hover:text-fx-orange transition-colors">Bookshelf</a></li>
              <li><a href="#" className="hover:text-fx-orange transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-fx-orange transition-colors">RSS</a></li>
              <li><a href="#" className="hover:text-fx-orange transition-colors">Twitter</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </main>
  )
}