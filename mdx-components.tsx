import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 text-fx-red">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-fx-black">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 text-fx-black">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-fx-black leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-fx-red hover:text-fx-orange transition-colors">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="space-y-3">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="flex items-start space-x-3">
        <span className="text-fx-red text-lg mt-0.5">•</span>
        <span className="text-fx-black">{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-fx-black">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-fx-red pl-4 italic text-fx-500">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
