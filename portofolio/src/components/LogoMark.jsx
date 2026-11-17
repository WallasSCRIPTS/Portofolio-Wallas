export const blobPath =
  'M95.7 50.0 L94.7 53.9 L92.1 57.4 L88.3 60.3 L84.2 62.4 L80.3 64.1 L77.0 65.6 L74.3 67.0 L72.2 68.6 L70.3 70.3 L68.6 72.2 L67.0 74.3 L65.6 77.0 L64.1 80.3 L62.4 84.2 L60.3 88.3 L57.4 92.1 L53.9 94.7 L50.0 95.7 L46.1 94.7 L42.6 92.1 L39.7 88.3 L37.6 84.2 L35.9 80.3 L34.4 77.0 L33.0 74.3 L31.4 72.2 L29.7 70.3 L27.8 68.6 L25.7 67.0 L23.0 65.6 L19.7 64.1 L15.8 62.4 L11.7 60.3 L7.9 57.4 L5.3 53.9 L4.3 50.0 L5.3 46.1 L7.9 42.6 L11.7 39.7 L15.8 37.6 L19.7 35.9 L23.0 34.4 L25.7 33.0 L27.8 31.4 L29.7 29.7 L31.4 27.8 L33.0 25.7 L34.4 23.0 L35.9 19.7 L37.6 15.8 L39.7 11.7 L42.6 7.9 L46.1 5.3 L50.0 4.3 L53.9 5.3 L57.4 7.9 L60.3 11.7 L62.4 15.8 L64.1 19.7 L65.6 23.0 L67.0 25.7 L68.6 27.8 L70.3 29.7 L72.2 31.4 L74.3 33.0 L77.0 34.4 L80.3 35.9 L84.2 37.6 L88.3 39.7 L92.1 42.6 L94.7 46.1 Z'

function LogoMark({
  className = '',
  strokeWidth = 5.5,
  eye = true,
  diamonds = true,
  ...props
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d={blobPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {eye && (
        <>
          <path
            d="M27 50c7.4-11.4 15.2-17.1 23-17.1S65.6 38.6 73 50c-7.4 11.4-15.2 17.1-23 17.1S34.4 61.4 27 50Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path d="M50 37.5 61 50 50 62.5 39 50Z" fill="currentColor" />
        </>
      )}
      {diamonds && (
        <>
          <path d="M50 14.5 54.5 19 50 23.5 45.5 19Z" fill="currentColor" />
          <path d="M50 76.5 54.5 81 50 85.5 45.5 81Z" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

export default LogoMark
