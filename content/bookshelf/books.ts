export interface Book {
  title: string
  slug: string
  date: string
  favorite?: boolean
}

export const books: Book[] = [
  {
    title: "Poor Charlie's Almanack",
    slug: 'poor-charlies-almanack',
    date: 'Jan 2025',
  },
  {
    title: 'Who Moved My Cheese',
    slug: 'who-moved-my-cheese',
    date: 'Jan 2024',
  },
  {
    title: 'Atomic Habits',
    slug: 'atomic-habits',
    date: 'Jan 2023',
  },
]
