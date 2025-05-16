import { css } from "@panda/css";

export const RightBottomDecoration = () => {
  return (
    // pair: relative && absolute
    <div
      className={css({
        width: "full",
        position: "relative",
      })}
    >
      <div
        className={css({
          position: "absolute",
          right: "0",
          bottom: "-4rem",
          marginRight: "0.25rem",
          marginBottom: "0.25rem",
        })}
      >
        {/* 1st row */}
        <div className={css({ display: "flex", justifyContent: "right" })}>
          <div
            className={css({
              width: "0.25rem",
              height: "0.5rem",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
        </div>
        {/* 2nd row */}
        <div className={css({ display: "flex", justifyContent: "right" })}>
          <div
            className={css({
              width: "0.3rem",
              height: "0.3rem",
              borderRight: "solid 1px",
              borderBottom: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.3rem",
              borderY: "solid 1px",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.3rem",
              borderBottom: "solid 1px",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
        </div>
        {/* 3rd row */}
        <div className={css({ display: "flex", justifyContent: "right" })}>
          <div
            className={css({
              width: "0.3rem",
              height: "0.25rem",
              borderX: "solid 1px",
              borderBottom: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderBottom: "solid 1px",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderBottom: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
        </div>
        {/* 4nd row */}
        <div className={css({ display: "flex", justifyContent: "right" })}>
          <div
            className={css({
              width: "1.5rem",
              height: "0.25rem",
              borderBottom: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderBottom: "solid 1px",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderBottom: "solid 1px",
              borderRight: "solid 1px",
              borderColor: "beige",
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};
