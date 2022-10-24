import Navbar from "./Navbar";
import stars from "/assets/background-stars.svg";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${stars.src})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
