import { useState } from "react";

type RatingProps = {
  name: string;
  value: number;
  onChange: (value: number) => void;
};

export default function Rating({ name, value, onChange }: RatingProps) {
  const [tempValue, setTempValue] = useState<number>(0);

  const ratingArray = Array.from({ length: 5 }, (v, i) => i + 1);

  const handleSelection = (e: any, rate: number) => {
    if (Number(e.target.value) === value) {
      onChange(0);
    } else {
      onChange(rate);
    }
  };

  return (
    <div>
      {ratingArray.map((rate) => {
        return (
          <span
            key={rate}
            onMouseEnter={(e) => {
              const hoverValue = Number(
                e.currentTarget.querySelector("input")?.value
              );
              setTempValue(hoverValue);
            }}
            onMouseLeave={(e) => {
              const hoverValue = Number(
                e.currentTarget.querySelector("input")?.value
              );
              if (hoverValue !== value) {
                setTempValue(value);
              }
            }}
          >
            <input
              name={name}
              type="checkbox"
              id={`rate-${rate}`}
              value={rate}
              className="hidden"
              onChange={(e) => handleSelection(e, rate)}
            />
            <label
              htmlFor={`rate-${rate}`}
              className="inline-block cursor-pointer"
            >
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className={`w-8 stroke-slate-600 hover:text-teal-900 ${
                  tempValue >= rate ? "text-teal-900" : "text-white"
                }`}
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="hidden">{rate} Stars</span>
            </label>
          </span>
        );
      })}
    </div>
  );
}
