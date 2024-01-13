import { twMerge } from "tailwind-merge";
export default function Button({ className }) {
  return (
    <button
      className={twMerge(` bg-green-500 ${className} px-3 py-2 rounded-md `)}
    >
      Click Me
    </button>
  );
}
