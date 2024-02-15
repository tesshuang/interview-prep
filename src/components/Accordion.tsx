import { Fragment, useState } from "react";

type Data = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  accordion: Data[];
  type?: "single" | "multiple";
};

export default function Accordion({ accordion, type = "single" }: Props) {
  const [selectIndex, setSelectIndex] = useState<null | number>(0);
  const [selectIndexs, setSelectIndexs] = useState([0]);

  const handleSelection = (id: number) => {
    if (type === "single") {
      if (selectIndex === id) {
        setSelectIndex(null);
      } else {
        setSelectIndex(id);
      }
    } else {
      if (selectIndexs.includes(id)) {
        console.log("same ids");
        setSelectIndexs(selectIndexs.filter((index) => index !== id));
      } else {
        setSelectIndexs([...selectIndexs, id]);
      }
    }
  };

  return (
    <div>
      {accordion.map((item) => {
        const { id, title, content } = item;
        return (
          <Fragment key={`${type}-${id}`}>
            <div
              className=" cursor-pointer"
              onClick={() => handleSelection(id)}
            >
              {title}
              <span
                className={`inline-block h-[10px] p-1 border-current border-t-2 border-r-2 ${
                  selectIndex === id ? "rotate-[135deg]" : "rotate-[45deg]"
                }`}
              ></span>
            </div>
            {type === "single"
              ? selectIndex === id && <div>{content}</div>
              : selectIndexs.includes(id) && <div>{content}</div>}
          </Fragment>
        );
      })}
    </div>
  );
}
