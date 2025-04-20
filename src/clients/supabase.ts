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
