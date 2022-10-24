import Navbar from "./Navbar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[url('/assets/background-stars.svg')">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
