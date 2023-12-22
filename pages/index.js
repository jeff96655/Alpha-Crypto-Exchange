import { useEffect } from "react";
import Header from "../components/header";

const AlphaCryptoExchange = () => {
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
  return (
    <div className="relative bg-springgreen w-full h-[5116px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-11xl text-black font-inika md:h-[5500px]">
      <div className="my-0 mx-[!important] absolute top-[0px] left-[40px] w-[1549px] h-[510px] flex flex-row items-center justify-start gap-[70px] z-[0] text-21xl font-kadwa lg:w-[1300px] lg:gap-[0px] md:w-[500px]">
        <div className="relative w-[634px] h-[146px] z-[0]">
          <b className="absolute top-[0px] left-[0px] md:text-6xl md:w-[300px]">
            <span>{`Alpha `}</span>
            <span className="text-blue">Crypto</span>
            <span>{` `}</span>
            <span className="text-red">Exchange</span>
          </b>
          <div className="absolute top-[80px] left-[0px] text-6xl font-inika text-left inline-block w-[634px] md:text-base md:w-[350px]">
            Welcome to Alpha Crypto Exchange, where seamless trading meets the
            world of digital assets
          </div>
        </div>
        <div className="relative w-[845px] h-[510px] z-[1] md:hidden">
          <img
            className="absolute top-[148px] left-[0px] w-[414px] h-[362px] overflow-hidden object-cover"
            alt=""
            src="/frame-3@2x.png"
          />
          <img
            className="absolute top-[0px] left-[207px] w-[414px] h-[362px] overflow-hidden object-cover"
            alt=""
            src="/frame-3@2x.png"
          />
          <img
            className="absolute top-[140px] left-[431px] w-[414px] h-[362px] overflow-hidden object-cover"
            alt=""
            src="/frame-3@2x.png"
          />
        </div>
        <div className="absolute my-0 mx-[!important] top-[345px] left-[157px] w-[290px] h-[238px] hidden z-[2] md:flex">
          <img
            className="absolute top-[0px] left-[122px] w-[150px] h-[150px] overflow-hidden object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
          <img
            className="absolute top-[75px] left-[0px] w-[150px] h-[150px] overflow-hidden object-cover"
            alt=""
            src="/frame-8@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[624px] left-[0px] w-[1160px] flex flex-row items-center justify-end gap-[428px] z-[1] text-6xl lg:w-[900px] md:w-[400px] md:gap-[0px] md:pl-0 md:pt-2.5 md:box-border">
        <div className="relative w-5 h-[66px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[682px] h-[237px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          {" "}
          Our platform provides a secure and user-friendly environment for
          cryptocurrency enthusiasts to trade their various coins into Naira
          instantly. At Alpha Crypto Exchange, we aim to redefine the way you
          experience cryptocurrency trading, offering reliability, speed, and
          convenience.
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[411px] left-[258px] w-[290px] h-[238px] hidden z-[2] md:flex">
        <img
          className="absolute top-[0px] left-[122px] w-[150px] h-[150px] overflow-hidden object-cover"
          alt=""
          src="/frame-8@2x.png"
        />
        <img
          className="absolute top-[75px] left-[0px] w-[150px] h-[150px] overflow-hidden object-cover"
          alt=""
          src="/frame-8@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[814px] left-[0px] w-[1026px] flex flex-row items-center justify-end gap-[547px] z-[3] lg:w-[750px] md:w-[405px] md:gap-[0px]">
        <div className="relative w-[23px] h-[82px] overflow-hidden shrink-0" />
        <img
          className="relative w-[395px] h-[456px] object-cover [&.animate]:animate-[10s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1]"
          alt=""
          src="/bitcoin-app-for-online-banking@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1270px] left-[0px] w-[1160px] flex flex-row items-center justify-end gap-[465px] z-[4] text-6xl lg:w-[900px] md:w-[400px] md:gap-[0px]">
        <div className="relative w-5 h-[153px] overflow-hidden shrink-0 z-[0]" />
        <div
          className="relative inline-block w-[682px] h-[237px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[1] md:text-mini md:w-[390px]"
          data-animate-on-scroll
        >
          At Alpha Crypto Exchange, our mission is to empower individuals to
          harness the potential of the ever-evolving cryptocurrency market. We
          strive to create a platform that fosters financial inclusion,
          innovation, and trust in the world of digital assets.
        </div>
        <div className="my-0 mx-[!important] absolute top-[796px] left-[7px] w-[1597px] shrink-0 flex flex-row items-start justify-center gap-[200px] z-[2] text-lg text-white lg:w-[1140px] md:flex-col md:gap-[132px] md:pl-2.5 md:box-border sm:pl-[21px] sm:box-border">
          <div className="relative w-[395px] h-[1137px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_#000_0deg,_#00f553_360deg)] shadow-[0px_0px_0px_3px_#000] w-[395px] h-[291px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[98px] left-[8px] inline-block w-[378px] h-[151px]">
                <p className="m-0">
                  <b>Instant Trading</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Experience the speed of crypto trading like never before. With
                  Alpha Crypto Exchange, convert your cryptocurrencies to Naira
                  instantly, allowing you to capitalize on market opportunities
                  in real-time.
                </p>
              </div>
              <img
                className="absolute top-[0px] left-[157px] w-20 h-20 overflow-hidden object-cover"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
            <div
              className="absolute top-[846px] left-[0px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_#000_0deg,_#00f553_360deg)] shadow-[0px_0px_0px_3px_#000] w-[395px] h-[291px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[98px] left-[8px] inline-block w-[378px] h-[151px]">
                <p className="m-0">
                  <b>User-Friendly Interface</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Navigating our platform is a breeze. Our user-friendly
                  interface is designed to cater to both beginners and
                  experienced traders, making the trading process intuitive and
                  straightforward.
                </p>
              </div>
              <img
                className="absolute top-[0px] left-[158px] w-20 h-20 overflow-hidden object-cover"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
            <div
              className="absolute top-[423px] left-[0px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_#000_0deg,_#00f553_360deg)] shadow-[0px_0px_0px_3px_#000] w-[395px] h-[291px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[98px] left-[8px] inline-block w-[378px] h-[151px]">
                <p className="m-0">
                  <b>Wide Range of Cryptocurrencies</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Alpha Crypto Exchange supports a diverse range of
                  cryptocurrencies, ensuring that you have the flexibility to
                  trade your preferred digital assets. From Bitcoin to Ethereum,
                  and beyond, we've got you covered.
                </p>
              </div>
              <img
                className="absolute top-[0px] left-[157px] w-20 h-20 overflow-hidden object-cover"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
          </div>
          <div className="relative w-[395px] h-[714px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_#000_0deg,_#00f553_360deg)] shadow-[0px_0px_0px_3px_#000] w-[395px] h-[291px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[98px] left-[8px] inline-block w-[378px] h-[151px]">
                <p className="m-0">
                  <b>Robust Security</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Security is our top priority. Alpha Crypto Exchange employs
                  state-of-the-art security measures, including encryption and
                  multi-factor authentication, to safeguard your assets and
                  personal information
                </p>
              </div>
              <img
                className="absolute top-[0px] left-[158px] w-20 h-20 overflow-hidden object-cover"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
            <div
              className="absolute top-[423px] left-[0px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_#000_0deg,_#00f553_360deg)] shadow-[0px_0px_0px_3px_#000] w-[395px] h-[291px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <div className="absolute top-[98px] left-[8px] inline-block w-[378px] h-[151px]">
                <p className="m-0">
                  <b>24/7 Customer Support</b>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Have questions or need assistance? Our dedicated customer
                  support team is available 24/7 to address your inquiries and
                  provide the assistance you need.
                </p>
              </div>
              <img
                className="absolute top-[0px] left-[158px] w-20 h-20 overflow-hidden object-cover"
                alt=""
                src="/frame-9@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1507px] left-[0px] w-[1011px] flex flex-row items-center justify-end gap-[590px] z-[5] lg:w-[750px] md:w-[395px]">
        <div className="relative w-[26px] h-[184px] overflow-hidden shrink-0" />
        <img
          className="relative w-[395px] h-[395px] object-cover [&.animate]:animate-[10s_linear_0s_infinite_alternate-reverse_forwards_scale-up] opacity-[1]"
          alt=""
          src="/cryptocurrency-to-usd-exchange-rate@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1935px] left-[3px] flex flex-row items-start justify-end gap-[621px] z-[6] text-21xl font-kadwa lg:gap-[380px] md:gap-[30px]">
        <div className="relative w-[55px] h-20 overflow-hidden shrink-0" />
        <b className="relative">{`Key Features `}</b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3282px] left-[0px] w-[1033px] flex flex-row items-center justify-end gap-[518px] z-[7] lg:w-[800px] lg:gap-[400px] md:w-[440px] md:flex-col md:pt-[220px] md:pr-5 md:box-border">
        <div className="relative w-[23px] h-[215px] overflow-hidden shrink-0" />
        <img
          className="relative w-[456px] h-[456px] object-cover [&.animate]:animate-[10s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1]"
          alt=""
          src="/crypto-trading-and-market-research@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4108px] left-[0px] w-[1061px] h-[189px] flex flex-row items-center justify-end gap-[484px] z-[8] font-kadwa lg:w-[800px] md:w-[350px] md:flex-col md:items-end md:justify-center md:pl-[360px] md:pt-[480px] md:box-border">
        <div className="relative w-[11px] h-[37px] overflow-hidden shrink-0" />
        <b className="relative inline-block w-[452px] h-[107px] shrink-0 md:text-mid md:w-[300px]">
          Join Alpha Crypto Exchange Today!
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3807px] left-[0px] w-[1115px] h-[43px] flex flex-row items-center justify-end gap-[429px] z-[9] font-kadwa lg:w-[850px] md:w-[355px] md:pl-0 md:pt-[850px] md:box-border">
        <div className="relative w-[5px] h-[5px] overflow-hidden shrink-0" />
        <b className="relative inline-block w-[557px] h-[78px] shrink-0 md:text-mid md:text-center md:w-[300px]">
          <p className="m-0">Compliance and Regulation</p>
          <p className="m-0">&nbsp;</p>
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3850px] left-[3px] w-[1207px] flex flex-row items-center justify-end gap-[376px] z-[10] lg:w-[970px] md:w-[400px] md:pt-[810px] md:box-border">
        <div className="relative w-[13px] h-[53px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[794px] h-[116px] shrink-0 md:text-base md:w-[380px]">
          Alpha Crypto Exchange operates in compliance with local regulations
          and strives to maintain transparency in all financial transactions.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4267px] left-[0px] w-[1210px] flex flex-row items-center justify-end gap-[390px] z-[11] lg:w-[1000px] md:w-[400px] md:flex-row md:pt-[570px] md:pr-0 md:box-border">
        <div className="relative w-4 h-[137px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[794px] h-[211px] shrink-0 lg:text-11xl lg:rounded-none md:text-base md:w-[380px]">
          <p className="m-0">
            Embark on your cryptocurrency trading journey with Alpha Crypto
            Exchange. Sign up now to experience instant, secure, and
            user-friendly trading like never before. Your gateway to the world
            of digital assets awaits!
          </p>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4567px] left-[0px] w-[1728px] h-[549px] flex flex-col items-center justify-start gap-[54px] z-[12] text-white md:h-[549px] md:pt-[400px] md:box-border">
        <div className="relative w-[214px] h-[9px] overflow-hidden shrink-0" />
        <div className="relative bg-black w-[1728px] h-[486px] overflow-hidden shrink-0">
          <b className="absolute top-[31px] left-[471px] inline-block w-[705px] lg:hidden md:hidden">
            Join our socials to stay up to date with the latest new and updates
            sorounding Alpha Crypto Exchange
          </b>
          <b className="absolute top-[31px] left-[266px] hidden w-[705px] lg:flex md:hidden">
            Join our socials to stay up to date with the latest new and updates
            sorounding Alpha Crypto Exchange
          </b>
          <b className="absolute top-[55px] left-[28px] text-lg hidden w-[374px] md:flex">
            Join our socials to stay up to date with the latest new and updates
            sorounding Alpha Crypto Exchange
          </b>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[186px] left-[12px] w-10 h-10 overflow-hidden bg-[url('/frame-93@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[243px] left-[12px] w-10 h-10 overflow-hidden bg-[url('/frame-94@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[310px] left-[12px] w-10 h-10 overflow-hidden bg-[url('/frame-95@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[377px] left-[12px] w-10 h-10 overflow-hidden bg-[url('/frame-96@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <img
            className="absolute top-[449px] left-[7px] w-[15px] h-[15px] overflow-hidden object-cover"
            alt=""
            src="/frame-97@2x.png"
          />
          <div className="absolute top-[450px] left-[27px] text-[10px]">
            Copy Right 2024
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default AlphaCryptoExchange;
