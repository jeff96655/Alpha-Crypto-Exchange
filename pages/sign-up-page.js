import { useState } from "react";

const SignUpPage = () => {
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [fullName1Value, setFullName1Value] = useState("");
  const [email1Value, setEmail1Value] = useState("");
  const [password1Value, setPassword1Value] = useState("");
  const [confirmPassword1Value, setConfirmPassword1Value] = useState("");
  return (
    <div className="relative bg-springgreen w-full h-[1117px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-[20px] text-white font-inknut-antiqua">
      <div className="absolute my-0 mx-[!important] top-[235px] left-[17px] rounded-xl bg-black w-[395px] h-[583px] overflow-hidden shrink-0 hidden z-[0] md:flex">
        <div className="absolute top-[95px] left-[16px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[360px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[16px] left-[12px] font-bold text-white text-left"
            placeholder="Full Name"
            type="text"
            value={fullNameValue}
            onChange={(event) => setFullNameValue(event.target.value)}
          />
        </div>
        <b className="absolute top-[15px] left-[153px]">Sign Up</b>
        <div className="absolute top-[196px] left-[16px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[360px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[16px] left-[12px] font-bold text-white text-left"
            placeholder="Email"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
        </div>
        <div className="absolute top-[297px] left-[18px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[360px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[14px] left-[11px] font-bold text-white text-left"
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
        </div>
        <div className="absolute top-[398px] left-[18px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[360px] h-[50px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-mid bg-[transparent] absolute top-[14px] left-[9px] font-bold text-white text-left"
            placeholder="Confirm Password"
            type="password"
            value={confirmPasswordValue}
            onChange={(event) => setConfirmPasswordValue(event.target.value)}
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-springgreen absolute top-[499px] left-[114px] rounded-3xs w-[168px] h-[33px] overflow-hidden">
          <b className="absolute top-[3px] left-[42px] text-3xl font-inter text-black text-center">
            Sign Up
          </b>
        </button>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1034px] left-[7px] flex flex-col items-center justify-start gap-[33px] z-[1] text-center text-mini text-black font-inika">
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
      <div className="my-0 mx-[!important] absolute top-[235px] left-[553px] w-[1175px] flex flex-row items-center justify-start gap-[565px] z-[2] text-11xl lg:gap-[1100px] lg:items-center lg:justify-center md:hidden">
        <div className="relative rounded-xl bg-black w-[598px] h-[664px] overflow-hidden shrink-0">
          <div className="absolute top-[107px] left-[19px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[560px] h-[60px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[16px] left-[12px] font-bold text-white text-left"
              placeholder="Full Name"
              type="text"
              value={fullName1Value}
              onChange={(event) => setFullName1Value(event.target.value)}
            />
          </div>
          <b className="absolute top-[13px] left-[232px]">Sign Up</b>
          <div className="absolute top-[225px] left-[19px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[560px] h-[60px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[16px] left-[12px] font-bold text-white text-left"
              placeholder="Email"
              type="email"
              value={email1Value}
              onChange={(event) => setEmail1Value(event.target.value)}
            />
          </div>
          <div className="absolute top-[343px] left-[19px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[560px] h-[60px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[16px] left-[11px] font-bold text-white text-left"
              placeholder="Password"
              type="password"
              value={password1Value}
              onChange={(event) => setPassword1Value(event.target.value)}
            />
          </div>
          <div className="absolute top-[461px] left-[19px] rounded-3xs bg-black shadow-[0px_0px_0px_3px_#00f570] w-[560px] h-[60px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-3xl bg-[transparent] absolute top-[15px] left-[14px] font-bold text-white text-left"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword1Value}
              onChange={(event) => setConfirmPassword1Value(event.target.value)}
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-springgreen absolute top-[579px] left-[215px] rounded-3xs w-[168px] h-[33px] overflow-hidden">
            <b className="absolute top-[3px] left-[42px] text-3xl font-inter text-black text-center">
              Sign Up
            </b>
          </button>
        </div>
        <div className="relative w-[19px] h-[204px] overflow-hidden shrink-0" />
      </div>
    </div>
  );
};

export default SignUpPage;
