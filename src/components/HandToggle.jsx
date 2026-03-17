import { useHand } from "../hooks/useHand";

export function HandToggle({
  children = "Toggle Hand",
  className = "",
  onClick,
  ...props
}) {
  const { toggle } = useHand();

  const handleClick = (e) => {
    toggle();
    onClick?.(e);
  };

  return (
    <button
      type="button"
      aria-label="Toggle hand preference"
      onClick={handleClick}
      className={`hand-toggle ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
