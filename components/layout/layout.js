import MainHeader from "./main-header";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <MainHeader />
        {children}
      </main>
    </>
  );
}
