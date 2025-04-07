export const Section = (props: {
    id?: string,
    classname?: string,
    children: React.ReactNode
}) => {
  return (
    <section id={`${props.id || ""}`} className={`px-6 py-8 md:px-10 ${props.classname || ""}`}>
        {props.children}
    </section>
  )
}
