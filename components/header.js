import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalDrawer from "./portal-drawer";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onFrameButton5Click = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onFrameButton6Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-springgreen shadow-[0px_0px_100px_rgba(0,_0,_0,_0.25)] w-[1728px] h-[60px] overflow-hidden shrink-0 z-[13]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[356px] w-[60px] h-[23px] hidden md:flex"
          onClick={openMenu}
        >
          <div className="absolute top-[0px] left-[20px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[9px] left-[13px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[18px] left-[0px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden" />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-black absolute top-[19px] left-[535px] rounded-xl w-[133px] h-[23px] overflow-hidden"
          onClick={onFrameButton5Click}
        >
          <b className="absolute top-[0px] left-[23px] text-mid font-inika text-white text-center">
            Get Started
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-black absolute top-[19px] left-[790px] rounded-xl w-[133px] h-[23px] overflow-hidden"
          onClick={onFrameButton6Click}
        >
          <b className="absolute top-[0px] left-[44px] text-mid font-inika text-white text-center">
            Login
          </b>
        </button>
        <img
          className="absolute top-[5px] left-[9px] w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/frame-100@2x.png"
        />
      </div>
      {isMenuOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closeMenu}>
          <Menu onClose={closeMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
