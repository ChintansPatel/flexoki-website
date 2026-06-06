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
]
