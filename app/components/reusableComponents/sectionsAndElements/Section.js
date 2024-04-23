export default function Section( { children } ) {
  return (
    <section className="pt-[var(--header-height)] pb-[var(--footer-height)] flex flex-col w-full h-screen overflow-hidden">
      {children}
    </section>
  )
}