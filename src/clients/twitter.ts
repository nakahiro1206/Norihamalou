"use server";

import { Client, auth } from "twitter-api-sdk";

const twitterApiToken = process.env.TWITTER_API_TOKEN;
const client = new Client(twitterApiToken || "");

type PostTweetResponse = {
  name: "PostTweetResponse";
  data: any;
};

type Err = {
  name: "Err";
  error: any;
};

export const postTweet = async (
  text: string,
): Promise<PostTweetResponse | Err> => {
  try {
    const res = await client.tweets.createTweet({
      text,
      reply_settings: "mentionedUsers", // disables replies unless mentioned
    });

    return { name: "PostTweetResponse", data: res };
  } catch (error) {
    console.error("Error posting tweet:", error);
    console.log(error.headers);
    console.log(error.error);
    return { name: "Err", error };
  }
};

const authClient = new auth.OAuth2User({
  client_id: "TFNZRVNvQXJlcFRnRDdOZ2tTUDA6MTpjaQ",
  client_secret: "-CUoXS1ELh22WOTomBly_lu6DSeAVx3W8IgkysD8uxgPXmtWqr",
  callback: "http://127.0.0.1:3000/callback",
  scopes: ["tweet.read", "users.read", "offline.access", "tweet.write"],
});

export const generateAuthUrl = async (): Promise<string> => {
  const url = authClient.generateAuthURL({
    code_challenge_method: "s256",
    state: "csrf-attack-blocker",
  });
  return new Promise((resolve) => {
    resolve(url);
  });
};
