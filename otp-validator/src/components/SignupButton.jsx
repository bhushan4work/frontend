import React from "react"

export default function SignupButton({ enabled, onClick }) {
  return (
    <button
      disabled={!enabled}
      onClick={onClick}
      className={`
        w-64 py-3 rounded-lg font-semibold text-white
        transition-all duration-300
        ${
          enabled ? "bg-blue-950 hover:bg-black" : "bg-blue-900 opacity-50 cursor-not-allowed"
        }
      `}
    >
      Sign Up
    </button>
  );
}
