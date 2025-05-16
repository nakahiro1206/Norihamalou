import { css } from "@panda/css";

export const Devider = () => {
  return (
    <div
      className={css({
        width: "full",
        paddingX: "4rem",
      })}
    >
      <div
        className={css({
          width: "full",
          borderTop: "solid 1px",
          borderColor: "white",
        })}
      ></div>
    </div>
  );
};
