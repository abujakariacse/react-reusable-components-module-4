import cn from "../../utils/cn";
export default function Button({
  className,
  outline,
}: {
  className: string;
  outline: boolean;
}) {
  return (
    <button
      className={cn(
        " bg-purple-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10 ": outline,
        },
        className
      )}
    >
      Click Me
    </button>
  );
}
