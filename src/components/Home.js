import React,{useRef} from 'react'
import Slideshow from './slideshow' 
import Card from './Card'
import {BsCupHotFill, BsFillLightbulbFill,BsFillCalendarFill } from 'react-icons/bs'
import { RiSearch2Fill,RiFilePaper2Fill} from 'react-icons/ri'
import {HiDeviceTablet} from 'react-icons/hi'
import { useState } from "react";
import Video from "../video/video (1).mp4"
import poster from "../video/image.jpg"
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand'
import Bounce from 'react-reveal/Bounce';
import pic1 from "../Photos/pic4.png"
import pic2 from "../Photos/pic5.png"
import pic3 from "../Photos/pic6.png"

// color white - [#F7FAFA] 
export default function Home() {
  const [InEntry,setInEntry] = useState(false)
  const funct = ()=>{
    setInEntry(true)
  }
  return (
    <>
    <div onLoad={funct} className='flex flex-row bg-[#ECF2FF] h-auto w-full'>
        
        <div className='left flex flex-col h-auto w-2/5 text-justify justify-center items-center'>
            <span className='w-4/5 tracking-tighter font-sans text-[#060709] text-6xl px-10 text-justify'><Zoom left cascade>Your all in one note-taking    application</Zoom></span>
            <span className='tracking-tighter text-justify font-sans text-[#5A6166] text-lg pt-3 px-24'><Zoom left cascade>Takes notes, associate tag, and enjoy increased   productivity with note.!!</Zoom></span>
            <div className='pr-12 pt-5'>
            <RubberBand>
            <button className="text-justify font-sans flex justify-center items-center group rounded-full h-10 w-80 bg-[#0667DA] font-semibold text-base text-white relative overflow-hidden">Get started</button></RubberBand>
            </div>
        </div>

          <div className='right flex h-auto w-3/5 justify-center items-center'>
              <Slideshow/>
          </div>

    </div>
    
    <div className='h-auto py-24 w-full bg-[#ECF2FF] flex flex-row gap-x-10 items-center justify-center'>
      <Zoom delay={100} isvisible>
      <Card color="[#F7FAFA]" circle="[#0667DA]" text_circle="white" text_color_h="[#060709]" text_color_p="[#5A6166]" head="Work from Any where" para="Keep important info handy-your notes sync automatically across all devices." icon={<BsCupHotFill/>}/></Zoom>
      <Zoom delay={100} isvisible>
      <Card color="[#0667DA]" circle="[#F7FAFA]" text_color_h="[#F7FAFA]" text_color_p="[#F7FAFA]" head="Remember Everything" para="Make notes more useful by adding title,desciption,tag, adding text, documents." icon={<BsFillLightbulbFill/>}/></Zoom>
      <Zoom delay={100} isvisible>
      <Card color="[#F7FAFA]" circle="[#0667DA]" text_circle="white" text_color="[#060709]" text_color_p="[#5A6166]" head="Find it Faster" para="Get what you need, when you need it with more powerful and flexible search capablities." icon={<RiSearch2Fill/>}/></Zoom>
    </div>
    <div className='h-auto py-24 w-full bg-[#ECF2FF] flex flex-col gap-y-10 items-center justify-center'>
      <h3 className='text-3xl font-bold font-sans'>Find Your Happy Productive Place</h3>
      <video controls width='100%' poster={poster}>
        <source src={Video}/>  
      </video> 
    </div>

    <div className='h-auto py-8 w-full bg-[#ECF2FF] flex flex-col gap-y-10 items-center justify-center'>
      <h3 className='text-6xl font-bold font-sans'>Why Us ?</h3> 
    </div>

    <div id='why' className='h-auto py-24 px-30 w-full bg-[#ECF2FF] flex flex-row items-center justify-center'>
    <Bounce left cascade isvisible>
      <div className='flex flex-col justify-start gap-y-4 w-72'>
        <div className={`flex justify-center items-center rounded-full h-20 w-20 bg-[#0667DA]`}><BsFillCalendarFill className="text-white"/></div>
        <h3 className='text-3xl font-sans font-bold'>Meet Every deadline</h3>
        <p className='text-justify font-sans font-semibold text-[#5A6166]'>Create and design tasks in your notes with due dates,flages and reminders so that nothing is missed.</p>
      </div>
    </Bounce>
    <Bounce right cascade isvisible>
      <div className='flex justify-end w-3/5'>
        <div className='flex items-center justify-center bg-[#0667DA] rounded-lg'>
        <img width={400} src={pic1} alt="" />
        </div>
      </div>
    </Bounce> 
    </div>

    <div className='h-auto py-24 px-30 w-full bg-[#ECF2FF] flex flex-row items-center justify-center'>
    <Bounce left cascade isvisible>
      <div className='flex justify-start w-3/5'>
        <div className='flex items-center justify-center h-96 bg-[#0667DA] rounded-lg'>
        <img width={400} src={pic2} alt="" />
        </div>
      </div>
    </Bounce>
    <Bounce right cascade isvisible> 
      <div className='flex flex-col justify-end gap-y-4 w-72'>
        <div className={`flex justify-center items-center rounded-full h-20 w-20 bg-[#0667DA]`}><RiFilePaper2Fill className="text-white"/></div>
        <h3 className='text-3xl font-sans font-bold'>Leave Paper Use</h3>
        <p className='text-justify font-sans font-semibold text-[#5A6166]'>Scan important documents and save them on all your devices. Save the information-not the messy one.</p>
      </div>
    </Bounce> 
    </div>

    <div className='h-auto py-24 px-30 w-full bg-[#ECF2FF] flex flex-row items-center justify-center'>
    <Bounce left cascade isvisible>
      <div className='flex flex-col justify-start gap-y-4 w-72'>
        <div className={`flex justify-center items-center rounded-full h-20 w-20 bg-[#0667DA]`}><HiDeviceTablet className="text-white"/></div>
        <h3 className='text-3xl font-sans font-bold'>Get It From Web Clip</h3>
        <p className='text-justify font-sans font-semibold text-[#5A6166]'>Save web pages(no ads) and mark them with arrows,highlights and text to make them more useful.</p>
      </div>
    </Bounce>
    <Bounce right cascade isvisible> 
      <div className='flex justify-end w-3/5'>
        <div className='flex items-center justify-center h-96 bg-[#0667DA] rounded-lg'>
        <img width={400} src={pic3} alt="" />
        </div>
      </div>
      </Bounce>  
    </div>
  </>
  )
}

