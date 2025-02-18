interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  show?: boolean;
  wait?: "100" | "200" | "300" | "500" | "700" | "1000"; // Tailwind delay values
}

const Spinner = ({
  size = "md",
  color = "primary",
  show = false,
  wait,
}: SpinnerProps) => {
  // Map sizes to Tailwind classes
  // - If we need bigger consult with tailwind sizes
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  // Map colors to Tailwind classes
  // - We can add theming later if need be went with generic for now
  const colorClasses = {
    primary: "border-blue-600 border-t-blue-200",
    secondary: "border-gray-600 border-t-gray-200",
    white: "border-white border-t-gray-100",
  };

  // Handle delay class
  const delayClass = wait ? `delay-${wait}` : "";

  return (
    <div
      className={`
          animate-spin 
          rounded-full 
          border-4 
          border-solid 
          ${sizeClasses[size]} 
          ${colorClasses[color]}
          ${delayClass}
          ${!show ? "hidden" : ""}
        `}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
