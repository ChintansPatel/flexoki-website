I needed a place online to organize my thoughts and share my writing. I knew exactly what I didn't want: a clunky, traditional CMS. I wanted a good framework, but I wanted it on my own terms.

While hunting for design inspiration, I stumbled upon calv.info. The design immediately clicked with me, and I decided to use it as the blueprint for my own site (huge credit to Calv.info for the inspiration!).

## The Build Process

I'm already comfortable in Visual Studio Code, so I fired that up and installed Node.js. But here is where the AI heavy-lifting came in.

I took screenshots of the different pages from calv.info to map out the layout. Then, using the Claude Code plugin right inside VS Code, I had the AI generate the site's code based on those images. Claude essentially built the website for me.

To manage my content, I use Obsidian on my desktop to write everything in clean Markdown. I also draft longer pieces in Google Docs — once I'm happy with the writing, I download it as a Markdown file and update it directly into the website. The best part? If an idea strikes while I'm on the go, I can just open the GitHub mobile app, edit the text right there, and commit the changes on the fly. Once everything is tied together, the repository is updated on GitHub.

## Deployment

I host the site on Vercel, which makes updates incredibly satisfying. Whenever I write a new post or tweak the code and push a commit — whether from my laptop or my phone — Vercel catches it instantly. Within 60 seconds, my live site is updated.

In the end, I bypassed the standard CMS route and built exactly what I needed using Node.js, VS Code, Claude, Obsidian, GitHub, and Vercel.
