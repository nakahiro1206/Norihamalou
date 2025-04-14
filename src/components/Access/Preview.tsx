import { FC } from "react";
import Image from "next/image";
import { previewStyles } from "./Preview.recipe";

export const Preview: FC<{ show: boolean; toggle: () => void }> = ({
  show,
  toggle,
}) => {
  const classes = previewStyles();

  if (!show) return null;

  return (
    <div className={classes.background} onClick={toggle}>
      <Image
        className={classes.image}
        src="/access-map-portrait.png"
        width={1000}
        height={1000}
        alt="Norihama-lou icon"
      />
    </div>
  );
};
