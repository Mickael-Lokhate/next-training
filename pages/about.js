import Link from "next/link";
import Layout from "../components/Layout";

const linkStyle = {
  color: "red",
  borderLeft: "5px solid black",
  padding: "5px",
};

export default function About() {
  return (
    <Layout
      mainTitle={"About page built with Next JS"}
      footer={`This is built by Mickael`}
    >
      <h2>About page</h2>
      <Link href="/">
        <a style={linkStyle}>Home page</a>
      </Link>
      <p>
        Quis cillum esse non aliquip cupidatat et tempor. Commodo labore quis
        cupidatat ut anim excepteur est tempor amet esse nulla enim. Enim magna
        officia eu veniam laboris officia voluptate id. Reprehenderit do sint ea
        consequat reprehenderit officia cillum quis reprehenderit cillum tempor
        laboris dolore. Lorem consectetur duis quis ea ex ut pariatur nostrud
        elit eu. Occaecat dolor pariatur est officia et non occaecat sint
        incididunt nisi. Occaecat esse labore sit nostrud minim aute occaecat.
      </p>
      <style jsx>
        {`
          p {
            color: indigo;
            font-size: 20px;
          }
        `}
      </style>
    </Layout>
  );
}
