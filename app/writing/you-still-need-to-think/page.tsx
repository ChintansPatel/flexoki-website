export default function YouStillNeedToThink() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Post Title and Date */}
        <header>
          <h1 className="text-3xl font-bold mb-2 text-fx-red">You Still Need to Think</h1>
          <p className="text-fx-500 text-sm uppercase tracking-wide">SEP 26, 2025</p>
        </header>

        {/* Post Content */}
        <article className="space-y-6">
          <p className="text-fx-black leading-relaxed">
            As coding agents become more capable and long-running, they don't remove the 
            human job of thinking. Someone still has to direct the work—set goals, choose 
            constraints, and judge outputs.
          </p>

          <p className="text-fx-black leading-relaxed">
            Everyone seems to recognize this in the abstract. But nobody seems to talk much 
            about how the product shape fundamentally shifts the type of thinking required to 
            write code.
          </p>

          <p className="text-fx-black leading-relaxed">
            I'd argue that seemingly minor UX differences between different coding agents end 
            up having a massive impact on how users spend their "thinking budget."
          </p>

          <p className="text-fx-black leading-relaxed">
            With a <strong>remote-first product like Codex Cloud</strong> (not the CLI), the product encourages 
            you not to spend time thinking while the agent is <em>working</em> and spend more time 
            thinking about the <em>end result</em> that the agent gave. We intentionally didn't want users 
            watching the agent invoking terminal commands, because the model works very 
            differently than a human might.
          </p>

          <p className="text-fx-black leading-relaxed">
            But this creates a different kind of workflow. Instead of being in a constant 
            dialogue with your code, you're setting direction and then evaluating results. 
            It's more like being a product manager for your codebase than being a hands-on 
            developer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">The thinking shift</h2>

          <p className="text-fx-black leading-relaxed">
            This shift changes what kinds of problems you're good at solving. You become 
            better at:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Articulating requirements clearly upfront</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Evaluating whether a solution actually solves your problem</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Iterating on high-level architecture decisions</span>
            </li>
          </ul>

          <p className="text-fx-black leading-relaxed">
            But you might become worse at:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Debugging edge cases through careful inspection</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Understanding exactly why something works the way it does</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-fx-red text-lg">•</span>
              <span className="text-fx-black">Building intuition for performance implications</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">The meta-question</h2>

          <p className="text-fx-black leading-relaxed">
            The interesting question isn't whether AI will replace programmers—it won't, at 
            least not anytime soon. The question is: what kind of programmer will you become 
            when your day-to-day work fundamentally changes?
          </p>

          <p className="text-fx-black leading-relaxed">
            My hunch is that the best programmers in an AI-assisted world will be those who 
            can fluidly move between different levels of abstraction—zooming out to set direction, 
            then diving deep when the details matter. The challenge is knowing when to zoom 
            and when to dive.
          </p>
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