export default function ProgressBar({
  ariaLabel = "progress bar placeholder",
  value,
}: {
  ariaLabel?: string;
  value: number;
}) {
  return (
    <div
      role="progressbar"
      aria-label={ariaLabel}
      className="h-1 w-full bg-teal-600"
    >
      <span
        className="block h-1 bg-teal-900"
        style={{
          width: `${value * 100}%`,
        }}
      />
    </div>
  );
}
