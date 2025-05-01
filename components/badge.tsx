import React from "react";

interface BadgeProps {
  text: string;
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  onRemove,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm 
                 bg-blue-100 text-blue-800 ${className}`}
    >
      {text}
      {onRemove && (
        <button
          type="button"
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full 
                    text-blue-400 hover:bg-blue-200 hover:text-blue-900 
                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
                    transition-colors duration-200"
          onClick={onRemove}
          aria-label={`Remove ${text}`}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};
