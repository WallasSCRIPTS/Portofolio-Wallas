function LayeredTitle({
  children,
  className = '',
  light = false,
  as: Tag = 'h2',
  ...rest
}) {
  return (
    <Tag
      className={`layered-title${light ? ' layered-title--light' : ''} ${className}`}
      {...rest}
    >
      <span className="layered-title__solid">{children}</span>
    </Tag>
  )
}

export default LayeredTitle
