import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';

export default function Plan() {
    const [InEntry,setInEntry] = useState(false)
    const funct = ()=>{
        setInEntry(true)
    }
  return (

    <div className="min-w-screen min-h-screen bg-[#ECF2FF] px-5 py-5" onLoad={funct}>
    <div className="w-full mx-auto bg-[#ECF2FF] px-5 py-10 text-gray-600 mb-10">
        <div className="text-center max-w-xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-5">Get Your Note More Efficiency</h1>
            <h3 className="text-xl font-medium mb-10">Whether you want to get organized, keep your personal life in check, or increase productivity at work, Noted has the right plan for you.</h3>
        </div>
        <Zoom top cascade>
        <div className="max-w-4xl mx-auto md:flex">
        
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">FREE</h2>
                    <h3 className="text-center font-bold text-4xl mb-5 text-[#0667DA]">$0/mo</h3>
                    <ul className="text-sm px-5 mb-8">
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Store upto 50 notes</li>
                    </ul>
                </div>
                <div className="w-full">
                    <button className="font-bold bg-[#0667DA] hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
        
            
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-40 md:flex md:flex-col">
                <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">PERSONAL</h2>
                    <h3 className="text-center font-bold text-4xl md:text-5xl mb-5 text-[#0667DA]">$6/mo</h3>
                    <ul className="text-sm px-5 mb-8">
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Store upto 1000</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Access themes</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Tag notes with color</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Get notified</li>
                    </ul>
                </div>
                <div className="w-full">
                    <button className="font-bold bg-[#0667DA] hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
            
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">PROFESSIONAL</h2>
                    <h3 className="text-center font-bold text-4xl mb-5 text-[#0667DA]">$8/mo</h3>
                    <ul className="text-sm px-5 mb-8">
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Store upto 5000</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Multiple themes</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Tag notes with color</li>
                        <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Get notified</li>
                    </ul>
                </div>
                <div className="w-full">
                    <button className="font-bold bg-[#0667DA] hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
        </div>
            </Zoom>
    </div>
</div>
    
    )
}
