export interface Book {
  title: string
  slug: string
  favorite?: boolean
}

export const books: Book[] = [
  {
    title: 'The Story of My Experiments with Truth: An Autobiography: Mahatma Gandhi',
    slug: 'the-story-of-my-experiments-with-truth',
  },
  {
    title: 'Misbehaving: The Making of Behavioral Economics: Richard H. Thaler',
    slug: 'misbehaving',
  },
]
