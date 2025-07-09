interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function Loading({
  size = "md",
  text = "Loading...",
  className = "",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-pink-500`}
      ></div>
      {text && <p className="mt-2 text-sm text-gray-600 font-medium">{text}</p>}
    </div>
  );
}
