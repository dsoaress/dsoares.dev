export default function Figure(props) {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={`${props.src}?key=post`} alt={props.alt} {...props} />
        <figcaption>{props.title}</figcaption>
      </figure>
    )
  } else {
    return <img src={`${props.src}?key=post`} alt={props.alt} {...props} />
  }
}
