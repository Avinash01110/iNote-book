import React, {useContext,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillFileAdd } from 'react-icons/ai';
import { BsCupHotFill } from 'react-icons/bs';
import { RiStickyNoteFill } from 'react-icons/ri';
import { MdEditNote } from 'react-icons/md';
import Addnew from './Addnew';
import NoteContext from "../context/notes/noteContext" 
import Mynotes from './Mynotes';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export default function Sidebar(props) {
    let navigate = useNavigate()
    const {notes,get_notes,edit_note} = useContext(NoteContext)
    useEffect(() => {
      if(localStorage.getItem('token')){
        get_notes()
      }else{
        navigate('/Login',{replace : true})
      }
    }, [])
    const cancelButtonRef = useRef(null)
    const [open, setOpen] = useState(false)
    
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
    
    const updatenote = (currentnote)=>{
        setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    }
    

    const handleClick = (e)=>{
        edit_note(note.id,note.etitle,note.edescription,note.etag)
        setOpen(false)
        props.showAlert("Note is updated","green")
    }
    
    const onchange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    return (
    <div className='flex flex-row h-auto w-full'>
    <div className='left'>
        <div className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-[#ECF2FF] border-r rtl:border-r-0 rtl:border-l">
            <div className='flex flex-col gap-y-4 justify-center cursor-pointer items-center font-sans font-bold'>
                <div className='flex justify-center items-center gap-x-3 border-2 border-[#0667DA] rounded-lg h-10 w-32'><AiFillFileAdd/>Add new</div>
                <div className='flex flex-col justify-center items-center gap-y-2 w-64'>
                    <div className='flex  rounded-full h-6 w-6 bg-[#FBFFB1] border border-[#9B9EA0]'></div>
                    <div className='flex  rounded-full h-6 w-6 bg-[#95BDFF] border border-[#9B9EA0]'></div>
                    <div className='flex  rounded-full h-6 w-6 bg-[#FD8A8A] border border-[#9B9EA0]'></div>
                </div>
                <Link to={"./Mynotes"}>
                <div className='flex justify-center items-center gap-x-3 border-2 border-[#0667DA] rounded-lg h-10 w-32'><RiStickyNoteFill/>My notes</div></Link>
            </div>
            
        </div>
    </div>
    <div className='right flex flex-col h-screen w-full overflow-auto bg-[#ECF9FF]'>
        <Addnew showAlert={props.showAlert}/>
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#ECF2FF] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0667DA] sm:mx-0 sm:h-10 sm:w-10">
                      <MdEditNote className="h-6 w-6 " aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Edit note
                      </Dialog.Title>

                      <div className="flex flex-col mt-2 w-96">
                        <div className="col-span-7 sm:col-span-3">
                          <label htmlFor="etitle" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                          </label>
                          <input
                          value={note.etitle}
                          type="text"
                          name="etitle"
                          id="etitle"
                          autoComplete="given-etitle"
                          onChange={onchange}
                          className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="mt-2 col-span-12 sm:col-span-4">
                          <label htmlFor="edescription" className="block text-sm font-medium  text-gray-900">
                            Description
                          </label>
                          <input
                            value={note.edescription}
                            type="text"
                            name="edescription"
                            id="edescription"
                            autoComplete="description"
                            onChange={onchange}
                            className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                           />
                        </div>

                        <div className="mt-2 col-span-6 sm:col-span-3">
                            <label htmlFor="etag" className="block text-sm font-medium leading-6 text-gray-900">
                              Tag
                            </label>
                            <select
                              value={note.etag}
                              id="etag"
                              name="etag"
                              autoComplete="tag-name"
                              onChange={onchange}
                              className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                            >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                       </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ECF2FF] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#0667DA] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleClick}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto border-2 border-[#0667DA]"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
        <div className='px-14 pt-9 font-sans font-bold text-xl flex justify-start'>My Notes</div>
        <div className='flex flex-row grid grid-cols-3'>
        {notes.map((note)=>{
            return <Mynotes showAlert={props.showAlert} updatenote={updatenote} setOpen={setOpen} note={note} color="[#F7FAFA]" circle="[#0667DA]" text_color_t="[#060709]" text_color_p="[#5A6166]" key={note._id} title={note.title} description={note.description} icon={<BsCupHotFill/>}/>
        })}
        
        </div>
    </div>
    </div>
  )
}
