"use server";

import { createClient } from "@supabase/supabase-js";
import { PostgrestError } from "@supabase/supabase-js";

const isLocal = process.env.NEXT_PUBLIC_NODE_ENV === "local";

const supabase = createClient(
  isLocal
    ? process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL!
    : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  isLocal
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL!
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

type UpdateStatusProps = {
  waitTime: number;
  soldOut: boolean;
  message: string;
};

export const updateStatus = async (
  props: UpdateStatusProps,
): Promise<PostgrestError | null> => {
  const { waitTime, soldOut, message } = props;
  const { error } = await supabase.from("stalls_status").insert({
    wait_minutes: waitTime,
    is_sold_out: soldOut,
    message,
  });
  return error;
};

type Wait = {
  type: "wait";
  wait_minutes: number;
}
type Err = {
  type: "error";
  message: string;
};

export const fetchWait = async (): Promise<Wait | Err> => {
  const { data, error } = await supabase
    .from("stalls_status")
    .select("wait_minutes")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching wait time:", error.message);
    return {
      type: "error",
      message: error.message,
    };
  } else {
    const wait: number | null = data?.wait_minutes ?? null;
    if (wait === null) {
      return {
        type: "error",
        message: "データがありません",
      };
    }
    return {
      type: "wait",
      wait_minutes: wait,
    };
  }
};