import Link from "next/link";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href={"/app-router"}>App Router (client router)</Link>
      </li>
      <li>
        <a href={"/app-router"}>App Router (roundtrip)</a>
      </li>
      <li>
        <Link href={"/pages-router"}>Pages Router (client router)</Link>
      </li>
      <li>
        <a href={"/pages-router"}>Pages Router (roundtrip)</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
