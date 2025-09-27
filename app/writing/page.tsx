export default function Writing() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors font-semibold">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        {/* Writing Posts List */}
        <section className="space-y-8">
          
          {/* Post 1 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/you-still-need-to-think" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                You Still Need to Think
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">SEP 26, 2025</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              When it comes to coding agents, the product shape fundamentally shifts how you think.
            </p>
          </article>

          {/* Post 2 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/the-coding-agent-metagame" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                The Coding Agent Metagame
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">AUG 26, 2025</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              Using Claude Code feels more like playing the piano than shuffling tickets in Jira. I get 
              the vague sense that by using the tool differently, I could become a virtuoso. Here's 
              my best attempt to explain why that is.
            </p>
          </article>

          {/* Post 3 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/reflections-on-openai" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                Reflections on OpenAI
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">JUL 15, 2025</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              There's a lot of smoke and noise around what OpenAI is doing, but not a lot of first-hand accounts of what the culture of working there actually feels like. Here's my view on what it was like to work there.
            </p>
          </article>

          {/* Post 4 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/upsides-and-downsides" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                Upsides and Downsides
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">FEB 26, 2025</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              When to shift mentality from upsides to downsides. And why most AI demos don't make great products.
            </p>
          </article>

          {/* Post 5 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/building-with-ai" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                Building with AI
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">JAN 15, 2025</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              Thoughts on what it means to build products in the age of AI, and why most companies are approaching it wrong.
            </p>
          </article>

          {/* Post 6 */}
          <article className="space-y-3">
            <div className="flex justify-between items-start">
              <a href="/writing/the-future-of-work" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium block">
                The Future of Work
              </a>
              <span className="text-fx-500 text-sm whitespace-nowrap ml-4">DEC 10, 2024</span>
            </div>
            <p className="text-fx-black leading-relaxed">
              How AI is reshaping not just what we do, but how we think about work itself.
            </p>
          </article>

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