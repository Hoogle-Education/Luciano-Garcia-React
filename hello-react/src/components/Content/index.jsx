export function Content({
  author = 'Author not defined',
  content = 'Content not defined',
}) {
  return (
    <main>
      <h5>{author}</h5>
      <p>{content}</p>
    </main>
  )
}
