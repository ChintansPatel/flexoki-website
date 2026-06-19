export interface Post {
  title: string
  slug: string
  date: string
  description: string
  category: string
}

export const categories = ['Life & Career', 'AI']

export const posts: Post[] = [
  {
    title: 'Why I Decided to Pursue MBA at UChicago Booth',
    slug: 'why-i-decided-to-pursue-mba-at-uchicago-booth',
    date: 'JUN 13, 2026',
    description: 'How hitting a plateau in my tech career led me to pursue an MBA at one of the world\'s top business schools.',
    category: 'Life & Career',
  },
]
