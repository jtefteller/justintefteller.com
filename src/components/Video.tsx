const styles = {
  video: 'absolute inset-0 w-full h-full object-cover',
  div: 'relative w-full h-0 pb-[56.25%]',
}

export function Video({
  src,
  title,
  ...props
}: {
  src: string
  title: string
}) {
  return (
    <div className={styles.div}>
      <iframe
        className={styles.video}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        {...props}
      ></iframe>
    </div>
  )
}
