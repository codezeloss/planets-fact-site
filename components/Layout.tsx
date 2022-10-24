import Navbar from "./Navbar";
import stars from "/assets/background-stars.svg"

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`bg-${stars}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
