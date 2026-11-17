function Marquee({ items, speed = 34, className = '', separator = '✳' }) {
  const group = (
    <div className="marquee__group">
      {items.map((item, index) => (
        <span className="marquee__item" key={`${item}-${index}`}>
          {item}
          <span className="marquee__sep" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className="marquee__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {group}
        {group}
      </div>
    </div>
  )
}

export default Marquee
