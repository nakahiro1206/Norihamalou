"use client";

import { useState, useRef, FormEvent } from "react";
import { css } from "@panda/css";
import { updateStatus } from "@/clients/supabase";
import { postTweet, generateAuthUrl } from "@/clients/twitter";
import { useWaitingTime } from "@/hooks/waitingTime";

export const Admin = () => {
  const [wait, setWait] = useState<string>("");
  const [soldOut, setSoldOut] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { wait: tmpWait, error } = useWaitingTime();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (wait == "") {
      setResult("待ち時間を入力してください");
      return;
    }
    const waitTime = parseInt(wait);
    setResult("送信中…");

    const error = await updateStatus({
      waitTime,
      soldOut,
      message,
    });

    if (error === null) {
      // const url = await generateAuthUrl();
      // console.log(url);
      //
      // under development....
      // const code = inputRef.current?.value;
      // if (!code) {
      //   setResult("コードがありません");
      //   return;
      // }
      // const res = await postTweet(
      //   `[Test api call] 現在の推定待ち時間は${message}分です🐼`,
      //   code,
      // );
      // switch (res.name) {
      //   case "PostTweetResponse":
      //     console.log(res);
      //     break;
      //   case "Err":
      //     console.error(res);
      //     break;
      //   default:
      //     exhaustiveMatchingGuard(res);
      // }
    }

    setResult(error ? `エラー: ${error.message}` : "保存しました！");
  };

  const gen = async () => {
    const url = await generateAuthUrl();
    console.log(url);
  };

  return (
    <div
      className={css({
        width: "full",
        padding: "2rem",
      })}
    >
      {/* <input type="text" ref={inputRef} />
      <button onClick={gen}>ABC</button> */}
      <form onSubmit={handleSubmit}>
        <div
          className={css({
            width: "full",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            rounded: "lg",
            backgroundColor: "gray.100",
            padding: "1rem",
          })}
        >
          <div>
            <p>現在の推定待ち時間は{tmpWait ?? "null"}分です</p>
            <p>エラーメッセージ: {error ?? "null"}</p>
          </div>
          <label
            className={css({ width: "full", display: "flex", gap: "1rem" })}
          >
            <span
              className={css({
                width: "30%",
                rounded: "lg",
                backgroundColor: "primary",
                color: "beige",
                fontWeight: "900",
                padding: "0.25rem",
                textAlign: "center",
              })}
            >
              {"待ち時間 (分)"}
            </span>
            <input
              type="number"
              value={wait}
              onChange={(e) => {
                setWait(e.target.value);
              }}
              className={css({
                border: "solid 1px",
                borderColor: "primary",
                rounded: "lg",
                padding: "0.25rem",
                color: "primary",
                _focus: {
                  shadow: "md",
                  outline: "none",
                },
              })}
            />
            {"*"}
          </label>

          <label
            className={css({ width: "full", display: "flex", gap: "1rem" })}
          >
            <span
              className={css({
                width: "30%",
                rounded: "lg",
                backgroundColor: "primary",
                color: "beige",
                fontWeight: "900",
                padding: "0.25rem",
                textAlign: "center",
              })}
            >
              {"品切れ"}
            </span>
            <input
              type="checkbox"
              checked={soldOut}
              onChange={(e) => setSoldOut(e.target.checked)}
              className={css({
                border: "solid 1px",
                borderColor: "primary",
                rounded: "lg",
                padding: "0.25rem",
                color: "primary",
              })}
            />
          </label>

          <label
            className={css({ width: "full", display: "flex", gap: "1rem" })}
          >
            <span
              className={css({
                width: "30%",
                rounded: "lg",
                backgroundColor: "primary",
                color: "beige",
                fontWeight: "900",
                padding: "0.25rem",
                textAlign: "center",
              })}
            >
              {"表示メッセージ"}
            </span>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={css({
                border: "solid 1px",
                borderColor: "primary",
                rounded: "lg",
                padding: "0.25rem",
                color: "primary",
                _focus: {
                  shadow: "md",
                  outline: "none",
                },
              })}
            />
          </label>

          <div className={css({ width: "full", paddingX: "1rem" })}>
            <div
              className={css({
                width: "full",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
                alignItems: "center",
                borderTop: "solid 1px",
                borderColor: "primary",
                paddingTop: "0.5rem",
              })}
            >
              <button
                type="submit"
                className={css({
                  width: "30%",
                  rounded: "lg",
                  backgroundColor: "white",
                  color: "primary",
                  fontWeight: "900",
                  padding: "0.25rem",
                  textAlign: "center",
                })}
              >
                送信
              </button>
              {result && <p>{result}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
