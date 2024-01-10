import Link from "next/link";
import { Fragment } from "react";

export type LinkType = { type: "app" | "pages"; href: string; label: string };

type Props = {
  links?: LinkType[];
  revalidate?: boolean;
};

const LINKS_DEFAULT: Props["links"] = [
  { type: "app", href: "/app-router", label: "Root" },
  { type: "pages", href: "/pages-router", label: "Root" },
];

const Navigation = ({ links = [], revalidate = true }: Props) => {
  links = [...LINKS_DEFAULT, ...links];
  const appLinks = links.filter(({ type }) => type === "app");
  const pagesLinks = links.filter(({ type }) => type === "pages");
  return (
    <nav>
      <ul>
        <li>
          <div>App Router</div>
          <ul>
            {appLinks.map((link) => (
              <Fragment key={link.href}>
                <li>
                  <span>{link.label}: </span>
                  <Link href={link.href}>client navigation</Link>
                  <span> | </span>
                  <a href={link.href}>server navigation</a>
                  {revalidate && (
                    <>
                      <span> | </span>
                      <a href={buildRevalidateHref(link)} target="_blank">
                        revalidate
                      </a>
                    </>
                  )}
                </li>
              </Fragment>
            ))}
          </ul>
        </li>
        <li>
          <div>Pages Router</div>
          <ul>
            {pagesLinks.map((link) => (
              <Fragment key={link.href}>
                <li>
                  <span>{link.label}: </span>
                  <Link href={link.href}>client navigation</Link>
                  <span> | </span>
                  <a href={link.href}>server navigation</a>
                  {revalidate && (
                    <>
                      <span> | </span>
                      <a href={buildRevalidateHref(link)} target="_blank">
                        revalidate
                      </a>
                    </>
                  )}
                </li>
              </Fragment>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const buildRevalidateHref = (link: LinkType) => {
  switch (link.type) {
    case "app":
      return `/api/revalidate-app?path=${link.href}`;
    case "pages":
      return `/api/revalidate-pages?path=${link.href}`;
  }
};

export default Navigation;
