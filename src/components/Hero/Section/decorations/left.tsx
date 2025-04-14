import { css } from "@panda/css";

export const LeftDecoration = () => {
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
          marginLeft: "0.25rem",
          marginTop: "0.25rem",
        })}
      >
        {/* 1st row */}
        <div className={css({ display: "flex" })}>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderTop: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderTop: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "5rem",
              height: "0.25rem",
              borderTop: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
        </div>
        {/* 2nd row */}
        <div className={css({ display: "flex" })}>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderTop: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.25rem",
              borderTop: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.3rem",
              height: "0.25rem",
              borderX: "solid 1px",
              borderTop: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
        </div>
        {/* 3rd row */}
        <div className={css({ display: "flex" })}>
          <div
            className={css({
              width: "0.25rem",
              height: "0.3rem",
              borderTop: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.25rem",
              height: "0.3rem",
              borderY: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
          <div
            className={css({
              width: "0.3rem",
              height: "0.3rem",
              borderTop: "solid 1px",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
        </div>
        {/* 4th row */}
        <div className={css({ display: "flex" })}>
          <div
            className={css({
              width: "0.25rem",
              height: "1.5rem",
              borderLeft: "solid 1px",
              borderColor: "primary",
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};
