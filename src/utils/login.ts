import { Provider, SERVER_URL, accessLinks, redirectLinks } from "@/configs";

export const handleGetRedirect = async (
  provider: Provider
): Promise<string> => {
  const res = await fetch(SERVER_URL + redirectLinks[provider] + "-init", {
    method: "GET",
    credentials: "include",
  });
  if (res.ok) {
    const result = await res.json();
    const { urlRedirect } = result;
    return urlRedirect;
  }
  return "";
  //   const response = await fetch(
  //     "https://136f-14-248-94-44.ngrok-free.app/api/auth/google-init",
  //     {
  //       method: "GET",
  //       credentials: "include", // Allows cookies to be sent with the request
  //     }
  //   );
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch Google Auth URL");
  //   }
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.urlRedirect) {
  //     // Open the Google login in a popup or new tab
  //     const googleWindow = window.open(
  //       data.urlRedirect,
  //       "_blank",
  //       "width=500,height=600"
  //     );
  //   }
};

export const handleCallback = async (
  provider: Provider,
  thisUrl: string
): Promise<string> => {
  const queryParams = thisUrl.slice(thisUrl.indexOf("?") + 1);
  const res = await fetch(
    SERVER_URL + accessLinks[provider] + "?" + queryParams
  );
  if (res.ok) {
    const { accessToken } = await res.json();
    return accessToken;
  }
  return "";
};
