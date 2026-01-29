import React from "react";
import { useRef, useState } from "react";
import SignupButton from "./SignupButton";

const OTP_LENGTH = 6;

export default function OTPInput() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  const isComplete = otp.every((digit) => digit !== "");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!paste) return;

    const newOtp = [...otp];
    paste.split("").forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);
    inputRefs.current[paste.length - 1]?.focus();
  };

  const handleSubmit = () => {
    alert(`OTP Submitted: ${otp.join("")}`);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-lg font-semibold
                       rounded-lg bg-blue-900 text-white
                       border border-blue-700
                       focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        ))}
      </div>

      <SignupButton enabled={isComplete} onClick={handleSubmit} />
    </div>
  );
}
