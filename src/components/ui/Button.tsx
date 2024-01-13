import cn from "../../utils/cn";
export default function Button({
  className,
  variant,
}: {
  className: string;
  variant: string;
}) {
  const getVariant = (variant: string) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn";
    }
  };
  return (
    <button
      className={cn(
        getVariant(variant),

        className
      )}
    >
      Click Me
    </button>
  );
}
