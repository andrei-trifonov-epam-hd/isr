export const LIVEWIRE_SECURITY =
  "F1TmMgmaOf1ANyVESsOtb8epuH8O75M5dsDppEvyxb79iWdQxW";
export const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST ||
  "https://6594a7821493b011606ab970.mockapi.io";
export const CMS_HOST =
  process.env.NEXT_PUBLIC_CMS_HOST || "https://www.qa.livewire.com/_cms";
export const REVALIDATE_TIME =
  Number.parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME ?? "") || 10;
export const LINKS = [
  { type: "pages" as const, href: "/pages-router/one", label: "One" },
  { type: "pages" as const, href: "/pages-router/two", label: "Two" },
];
