import { revalidatePath, revalidateTag } from "next/cache";
import { API_HOST, CMS_HOST, LIVEWIRE_SECURITY } from "./constants";

export const api = async (delay: boolean | number = true) => {
  const result = await fetch(`${API_HOST}/content/1`);
  const response = await result.json();

  delay && (await wait(Number.isInteger(delay) ? <number>delay : 5000)); // A little bit of delay to simulate a slow API
  return response;
};

// https://livewirestg.prod.acquia-sites.com/isr
export const cms = async (path: string, delay: boolean | number = true) => {
  const result = await fetch(`${CMS_HOST}/content?path=${path}`, {
    headers: { livewire: LIVEWIRE_SECURITY },
  });
  const response = await result.json();

  delay && (await wait(Number.isInteger(delay) ? <number>delay : 5000)); // A little bit of delay to simulate a slow API
  return response;
};

export const now = () => new Date().toUTCString();

export const regenerateData = async (prev: string = "Just something...") =>
  fetch("https://6594a7821493b011606ab970.mockapi.io/content/1", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: prev + getRandomIntInclusive(0, 9) }),
  });

export const revalidate = (path: string) => {};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
