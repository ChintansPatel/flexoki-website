export interface Post {
  title: string
  slug: string
  date: string
  description: string
  category: string
}

export interface Category {
  name: string
  slug: string
}

export const categories: Category[] = [
  { name: 'Life & Career', slug: 'life-and-career' },
  { name: 'AI', slug: 'ai' },
]

// To add a new article:
// 1. Create a .md file in content/writing/<category-slug>/<article-slug>.md
// 2. Create a route at app/writing/<article-slug>/page.tsx
// 3. Add an entry below with the matching category slug
export const posts: Post[] = [
  {
    title: 'Why I Decided to Pursue MBA at UChicago Booth',
    slug: 'why-i-decided-to-pursue-mba-at-uchicago-booth',
    date: 'JUN 13, 2026',
    description: 'How hitting a plateau in my tech career led me to pursue an MBA at one of the world\'s top business schools.',
    category: 'life-and-career',
  },
  {
    title: 'How I Used AI to Build My Personal Website',
    slug: 'how-i-used-ai-to-build-my-personal-website',
    date: 'JUN 19, 2026',
    description: 'How I used Claude, GitHub, Vercel, and Obsidian to build and deploy my personal site without a traditional CMS.',
    category: 'ai',
  },
]
