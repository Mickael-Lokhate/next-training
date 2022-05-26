import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout
      mainTitle={"Home page built with Next JS"}
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Home Page</title>
      </Head>
      <h2>Hello from NextJs</h2>
      <Link href="/about">
        <a>About page</a>
      </Link>
      <p>
        Laboris sunt proident duis adipisicing reprehenderit dolor non culpa.
        Laborum duis nulla magna nostrud. Consequat ex qui enim qui tempor
        cillum veniam. Amet incididunt adipisicing dolor consequat eu aute
        adipisicing proident veniam incididunt do aute. Aliqua cillum magna
        laboris occaecat proident eiusmod consectetur amet veniam duis ullamco.
        Sit irure amet commodo laboris voluptate magna laborum.
      </p>
    </Layout>
  );
}
