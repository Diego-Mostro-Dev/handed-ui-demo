export function Fab({ children, className = "", ...props }) {
  return (
    <button className={`fab hand-start ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}
