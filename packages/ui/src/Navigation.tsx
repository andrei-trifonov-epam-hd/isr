import Link from "next/link";

const Navigation = () => (
    <nav>
      <ul>
        <li>
          <Link href={"/app-router"}>App Router</Link>
        </li>
        <li>
          <Link href={"/pages-router"}>Pages Router</Link>
        </li>
      </ul>
    </nav>
);

export default Navigation;