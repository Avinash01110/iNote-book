import React from 'react'
import { BsCupHot } from 'react-icons/bs';

export default function Card(props) {
  return (
    <div className={`transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col justify-center items-center gap-y-8 bg-${props.color} h-72 w-80 rounded-xl border border-[#9B9EA0]`}>
        <div className={`flex justify-center items-center text-${props.text_circle} rounded-full h-20 w-20 bg-${props.circle}`}>{props.icon}</div>
        <div className={`text-${props.text_color_h} text-xl font-bold font-sans flex justify-center items-center flex-col gap-y-2`}>{props.head}
        <div className={`flex justify-center text-center items-center text-base font-medium px-5 text-${props.text_color_p}`}>{props.para}</div>
        </div>

    </div>
  )
}
