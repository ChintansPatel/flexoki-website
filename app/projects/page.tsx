export default function Projects() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
            <a href="/projects" className="hover:text-fx-orange transition-colors font-semibold">Projects</a>
          </nav>
        </header>

        {/* Projects List */}
        <section className="space-y-12">
          
          {/* Project 1 - DataViz Pro */}
          <article className="space-y-4">
            <div className="flex justify-between items-start">
              <a href="/projects/dataviz-pro" className="text-fx-red hover:text-fx-orange transition-colors text-xl font-medium">
                DataViz Pro
              </a>
              <div className="text-right">
                <a href="https://datavizpro.com" className="text-fx-red hover:text-fx-orange transition-colors text-sm">datavizpro.com</a>
                <p className="text-fx-500 text-sm">2024 -</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-fx-black leading-relaxed">
                <a href="/projects/dataviz-pro" className="text-fx-red hover:text-fx-orange transition-colors">DataViz Pro</a> is a quick way to explore, visualize, and share large datasets. It was born 
                out of my frustration with today's tools for exploratory data analysis.
              </p>
              
              <p className="text-fx-black leading-relaxed">
                You can either use a tool like Excel and sacrifice speed with hundreds of thousands of 
                rows, or you can use SQL or code and settle for a glacial iteration speed between 
                queries. More enterprisey tools like Tableau help with this, but they focus primarily on 
                reporting, and exploration isn't easy.
              </p>
              
              <p className="text-fx-black leading-relaxed">
                None of those end up being very good options. Oftentimes, I'll start with a single 
                question... and it will lead to another question... and then another. The whole process 
                is extremely iterative and fractal.
              </p>
              
              <p className="text-fx-black leading-relaxed">
                DataViz Pro seeks to address these problems by...
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start space-x-3">
                  <span className="text-fx-red text-lg">•</span>
                  <span className="text-fx-black">being fast and responsive (reloads happen in real-time)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-fx-red text-lg">•</span>
                  <span className="text-fx-black">being visual-first, no code or SQL required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-fx-red text-lg">•</span>
                  <span className="text-fx-black">allowing the user to share charts with a single click</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-fx-red text-lg">•</span>
                  <span className="text-fx-black">having AI-assistants remove the tedious aspects of working with data</span>
                </li>
              </ul>
              
              <p className="text-fx-black leading-relaxed">
                It's free to use, all of your data is stored locally until you hit 'publish'.
              </p>
              
              <p className="text-fx-black leading-relaxed">
                The whole thing has also been a fantastic "idea pump" for AI and cutting-edge web 
                tools like DuckDB and WASM.
              </p>
            </div>
          </article>

        </section>

      </div>
    </main>
  )
}