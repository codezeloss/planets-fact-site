import Navigation from "./Navigation";

interface Props {
  navBtnClicked: any;
}

const NavMobile = ({ navBtnClicked }: Props) => {
  return (
    <>
      <div
        className="hidden 3bp:inline absolute pt-[22px] px-[32px] w-[100%] bg-universe-blue z-[30]"
      >
        <Navigation
          title="Mercury"
          toPath="mercury"
          color="dark-cyan"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Venus"
          toPath="venus"
          color="light-orange"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Earth"
          toPath="earth"
          color="purple"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Mars"
          toPath="mars"
          color="light-red"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Jupiter"
          toPath="jupiter"
          color="red"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Saturn"
          toPath="saturn"
          color="dark-orange"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Uranus"
          toPath="uranus"
          color="cyan"
          navBtnClicked={navBtnClicked}
        />
        <Navigation
          title="Neptune"
          toPath="neptune"
          color="dark-blue"
          navBtnClicked={navBtnClicked}
        />
      </div>
    </>
  );
};

export default NavMobile;
