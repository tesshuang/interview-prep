import { useState } from "react";

type Option = {
  id: number;
  text: string;
};

type DropdownProps = {
  placeholder: string;
  options: Option[];
};

const Dropdown = (props: DropdownProps) => {
  const { placeholder, options } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);

  const handleSelection = (id: number) => {
    setSelected(id);
    setOpen(!open);
  };

  return (
    <div className="text-white">
      <div
        className="flex items-center justify-between p-2 bg-teal-900 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected !== null ? options[selected].text : placeholder}
        <span
          className={`inline-block h-[10px] p-1 border-b-2 border-r-2 ${
            open ? "rotate-45" : "-rotate-[135deg]"
          }`}
        ></span>
      </div>
      {open && (
        <div className="divide-y">
          {options.map((option) => {
            const { id, text } = option;
            return (
              <div
                key={id}
                className="p-1 bg-teal-800 hover:cursor-pointer hover:bg-teal-500"
                onClick={() => handleSelection(id)}
              >
                {text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
