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
        <section className="space-y-6 text-justify">
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

      </div>
    </main>
  )
}
