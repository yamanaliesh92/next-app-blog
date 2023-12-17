import cookies from "js-cookie";

type Cookies = "token";

export function setCookie(name: Cookies, value: string) {
  console.log("value", value);
  return cookies.set(name, value, { secure: true });
}

export function getCookie(name: Cookies) {
  return cookies.get(name);
}

export function removeCookie(name: Cookies) {
  return cookies.remove(name);
}
