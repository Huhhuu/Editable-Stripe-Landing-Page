import './ui.css';

const LINE_INDICES = [1, 2, 3, 4, 5];

export function GridLines({
  variant = 'light',
  slanted = false,
  className = '',
}) {
  const slantClass = slanted ? 'grid-lines--slanted' : '';

  return (
    <div
      className={`grid-lines grid-lines--${variant} ${slantClass} ${className}`.trim()}
      aria-hidden="true"
    >
      {LINE_INDICES.map((index) => (
        <div
          key={index}
          className={`grid-lines__line grid-lines__line--${index}`}
        />
      ))}
    </div>
  );
}

export default GridLines;
