import { useState } from "react";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [email1Value, setEmail1Value] = useState("");
  const [password1Value, setPassword1Value] = useState("");
  return (
    <div className="relative bg-springgreen w-full h-[1117px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-11xl text-white font-inika md:h-[970px]">
      <div className="absolute my-0 mx-[!important] top-[260px] left-[17px] rounded-xl bg-black w-[395px] h-[352px] overflow-hidden shrink-0 hidden z-[0] md:flex">
        <div className="absolute top-[90px] left-[23px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[350px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[14px] left-[8px] font-bold text-white text-left"
            placeholder="Email"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
        </div>
        <div className="absolute top-[176px] left-[23px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[350px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[14px] left-[8px] font-bold text-white text-left"
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-springgreen absolute top-[267px] left-[114px] rounded-3xs w-[167px] h-10 overflow-hidden">
          <div className="absolute top-[6px] left-[53px] text-3xl font-black font-inter text-black text-left">
            Login
          </div>
        </button>
        <div className="absolute top-[10px] left-[158px]">
          <b>Login</b>
          <span className="text-xs font-inter">{` `}</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[885px] left-[10px] flex flex-col items-center justify-start pt-[150px] px-0 pb-0 gap-[33px] z-[1] text-center text-mini text-black md:pt-0 md:box-border">
        <div className="relative w-[27px] h-2 overflow-hidden shrink-0" />
        <div className="relative w-[154px] h-5">
          <div className="absolute top-[0px] left-[25px] inline-block w-[129px] h-5">
            Copy Rights 2024
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden object-cover"
            alt=""
            src="/frame-18@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[336px] left-[616px] w-[1112px] flex flex-row items-center justify-start gap-[489px] z-[2] lg:gap-[1200px] lg:items-center lg:justify-center md:hidden">
        <div className="relative rounded-xl bg-black w-[528px] h-[371px] overflow-hidden shrink-0">
          <div className="absolute top-[100px] left-[35px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[457px] h-[50px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[11px] left-[8px] font-bold text-white text-left"
              placeholder="Email"
              type="email"
              value={email1Value}
              onChange={(event) => setEmail1Value(event.target.value)}
            />
          </div>
          <div className="absolute top-[197px] left-[35px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[457px] h-[50px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[10px] left-[9px] font-bold text-white text-left"
              placeholder="Password"
              type="password"
              value={password1Value}
              onChange={(event) => setPassword1Value(event.target.value)}
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-springgreen absolute top-[294px] left-[159px] rounded-3xs w-[210px] h-10 overflow-hidden">
            <div className="absolute top-[6px] left-[74px] text-3xl font-black font-inter text-black text-left">
              Login
            </div>
          </button>
          <div className="absolute top-[26px] left-[224px]">
            <b>Login</b>
            <span className="text-xs font-inter">{` `}</span>
          </div>
        </div>
        <div className="relative w-1 h-[206px] overflow-hidden shrink-0" />
      </div>
    </div>
  );
};

export default LoginPage;
