import Link from "next/link";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>

      <style jsx>
        {`
          a {
            padding: 10px;
            color: cyan;
          }
          .nav-container {
            background-color: indigo;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
