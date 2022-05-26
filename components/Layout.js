import Nav from "./Nav";

export default function Layout({ children, mainTitle, footer }) {
  return (
    <div>
      <Nav />
      <h1>{mainTitle}</h1>
      <hr />
      {children}
      <hr />
      <h4>{footer}</h4>
    </div>
  );
}
