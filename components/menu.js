import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Menu = ({ onClose }) => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div
      className="bg-springgreen w-[289px] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%]"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[101px] left-[78px] rounded-xl w-[133px] h-[23px] overflow-hidden"
        onClick={onFrameButtonClick}
      >
        <b className="absolute top-[0px] left-[23px] text-mid font-inika text-white text-center">
          Get Started
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[153px] left-[78px] rounded-xl w-[133px] h-[23px] overflow-hidden"
        onClick={onFrameButton1Click}
      >
        <b className="absolute top-[0px] left-[44px] text-mid font-inika text-white text-center">
          Login
        </b>
      </button>
      <div
        className="absolute top-[10.7px] left-[246.1px] w-[33.9px] h-[29.5px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[3.2px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

export default Menu;
