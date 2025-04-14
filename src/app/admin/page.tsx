"use client";

import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { css } from "@panda/css";

const isLocal = process.env.NEXT_PUBLIC_NODE_ENV === "local";

// Supabase クライアント
const supabase = createClient(
  isLocal
    ? process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL!
    : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  isLocal
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL!
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function AdminPage() {
  const [wait, setWait] = useState<string>("");
  const [soldOut, setSoldOut] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (wait == "") {
      setResult("待ち時間を入力してください");
      return;
    }
    const waitTime = parseInt(wait);
    setResult("送信中…");

    const { error } = await supabase.from("stalls_status").insert({
      wait_minutes: waitTime,
      is_sold_out: soldOut,
      message,
    });

    setResult(error ? `エラー: ${error.message}` : "保存しました！");
  };

  return (
    <div
      className={css({
        width: "full",
        padding: "2rem",
      })}
    >
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
}
