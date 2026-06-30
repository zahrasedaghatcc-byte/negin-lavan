import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between gap-3 min-h-screen text-lime-700 p-3">
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
