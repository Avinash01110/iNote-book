import React,{useState,useContext} from 'react'
import NoteContext from "../context/notes/noteContext" 

export default function Addnew(props) {
  const context = useContext(NoteContext)
  const {add_note} = context
  const [note, setNote] = useState({title:"",description:"",tag:""})

  const handleClick = (e)=>{
    e.preventDefault()
    add_note(note.title,note.description,note.tag)
    props.showAlert("New Note is created","green")
  }

  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (

    <div className="mt-10 h-screen w-full bg-[#ECF9FF] sm:mt-0">
    <div className="flex flex-col gap-y-5">
      <div className="md:col-span-1">
        <div className="flex justify-center items-center h-20">
            <div className='font-sans font-bold text-3xl'>Add a New note</div>
        </div>
      </div>
      <div className="px-20 w-full mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-[#ECF2FF] px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-5">
                <div className="col-span-12 sm:col-span-3">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="given-title"
                    onChange={onchange}
                    className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                  />
                </div>


                <div className="col-span-12 sm:col-span-4">
                  <label htmlFor="description" className="block text-sm font-medium  text-gray-900">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="description"
                    onChange={onchange}
                    className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                    Tag
                  </label>
                  <select
                    id="tag"
                    name="tag"
                    autoComplete="tag-name"
                    onChange={onchange}
                    className="mt-2 block w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#0667DA] placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                {/* <div className="col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>*/}
              </div>
            </div> 
            <div className="bg-[#ECF2FF] px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="font-sans inline-flex justify-center rounded-full bg-[#0667DA] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleClick}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
