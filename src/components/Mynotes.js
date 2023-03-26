import React, {useContext} from 'react'
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdEditNote } from 'react-icons/md';
import NoteContext from '../context/notes/noteContext';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
 

export default function Mynotes(props) {
  const {delete_note} = useContext(NoteContext)
  const {note,updatenote} = props
  const handleclick = ()=>{
    updatenote(note)
    props.setOpen(true)
  }
  const deleteClick = ()=>{
    delete_note(note._id)
    props.showAlert("Note is deleted","green")
  }
  return (
    <>
  <div className='px-14 pt-9 pb-14'>
        {/* <div className='font-sans font-bold text-lg text-left'>My Notes</div> */}
    <div className={`flex flex-col gap-y-8 bg-${props.color} h-72 w-68 rounded-xl border border-[#9B9EA0]`}>
        <div className={`flex flex-col gap-y-4`}>
          <div className='pt-3 pl-3 h-8 w-8 flex justify-start transition ease-in-out hover:scale-125 duration-300 cursor-pointer'><MdDelete onClick={deleteClick}/></div>
          <div className='flex flex-row gap-x-8 pt-1 pl-4'>
            <div className={`title text-${props.text_color_t} text-lg flex justify-start font-semibold font-sans`}>{props.title}</div>
            <div className='logo flex justify-end items-center transition ease-in-out hover:scale-125 duration-300 cursor-pointer'><RiEdit2Fill onClick={handleclick}/></div>
          </div>
          <hr/>
          <div className={`flex text-left text-sm text-[#5A6166] font-medium pl-4 text-${props.text_color_d}`}>{props.description}</div>
        </div>
    </div>
    </div>
    </>
  )
}
