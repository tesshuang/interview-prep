import { useState } from "react";
import { cityOptions } from "../data";

export default function Autocomplete({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState("");
  const matched = value
    ? cityOptions.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        type="text"
        className="border border-teal-900"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
      {value && (
        <>
          {matched.length !== 0 ? (
            <div>
              {matched.map((city, index) => (
                <p key={index}>{city}</p>
              ))}
            </div>
          ) : (
            <div>No result found!</div>
          )}
        </>
      )}
    </div>
  );
}
