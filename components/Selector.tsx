import { ComponentDataType } from "../types";
import { NewsComponent } from "./News";

type SelectorProps = {
  item: ComponentDataType;
};

export const Selector = (props: SelectorProps) => {
  const { item } = props;
  const { type } = item;
  if (type === "news") {
    return <NewsComponent data={item}></NewsComponent>;
  }
  return <></>;
};
