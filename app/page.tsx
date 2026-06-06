import AboutContent from '@/content/about.md'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors font-semibold">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        {/* About Content — edit this in content/about.mdx */}
        <section className="space-y-6">
          <AboutContent />
        </section>

        {/* Footer - About this site section */}
        <section className="border-t border-fx-200 pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-fx-black">About this site</h2>
          <p className="text-fx-700 leading-relaxed">
            This site is built with{' '}
            <a href="https://nextjs.org" className="text-fx-red hover:text-fx-orange transition-colors">Next.js</a>,{' '}
            <a href="https://tailwindcss.com" className="text-fx-red hover:text-fx-orange transition-colors">Tailwind</a>, and{' '}
            <a href="https://mdxjs.com" className="text-fx-red hover:text-fx-orange transition-colors">MDX</a>. Huge thank you to{' '}
            <a href="https://stephango.com" className="text-fx-red hover:text-fx-orange transition-colors">Steph Ango</a> for the{' '}
            <a href="https://stephango.com/flexoki" className="text-fx-red hover:text-fx-orange transition-colors">Flexoki theme</a>.
          </p>
        </section>

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
