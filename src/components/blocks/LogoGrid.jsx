import './blocks.css';

export function LogoGrid({ logos }) {
  return (
    <div className="logo-grid">
      {logos.map((logo) => (
        <div key={logo.name} className="logo-grid__item">
          <img
            src={logo.src}
            alt={logo.name}
            className="logo-grid__img"
          />
        </div>
      ))}
    </div>
  );
}

export default LogoGrid;
