export default function BlogLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {children}
    </section>
  )
}