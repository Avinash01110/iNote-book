import React from "react";

export default function Alert(props) {
  return (
    // <!-- component -->
    <>
    {props.alert && <div className={`${props.alert.state} flex justify-center shadow-xl w-full bg-[#ECF2FF] fixed`}>
      <div className="flex bg-gray-900 h-10 w-[400px] rounded-[30px]">
        <span className="flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center">
          {props.alert.message}
        </span>
        <div className={`w-[10%] bg-${props.alert.color}-400 rounded-r-2xl shadow-[0_0_20px_#00C85177]`}></div>
      </div>
    </div>}
    </>
  );
}
