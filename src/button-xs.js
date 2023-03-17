/* boton de ejemplo */

const e = React.createElement;

// Muestra un <button> que contenga "Like"
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'EJEMPLO'
);