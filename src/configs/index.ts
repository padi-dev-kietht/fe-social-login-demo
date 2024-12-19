export type Provider = "google" | "github";
export const providers: Provider[] = ["google", "github"];

export const SERVER_URL = "https://136f-14-248-94-44.ngrok-free.app/api";

export const redirectLinks = {
  google: "/auth/google",
  github: "/auth/github",
};

export const accessLinks = {
  google: "/auth/google/callback",
  github: "/auth/github/callback",
};
