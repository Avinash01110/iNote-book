import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, HomeIcon} from '@heroicons/react/24/outline'
import {Link, useNavigate} from "react-router-dom";
import Video from '../logo/Notelogo.mp4'
import logo from '../logo/Noteb.png'


const navigation = [
  { name: <HomeIcon className='block h-5 w-5'></HomeIcon>, to: '/', current: false },
  { name: 'About', to: '/About', current: false },
  { name: 'Why Us', to: '/', current: false },
  { name: 'Plan', to: '/Plan', current: false }
  // { name: 'User', to: '/User', current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate("/Home",{replace:true})
  }
  const goto = ()=>{
    window.scroll({
      top: 2140, 
      left: 0, 
      behavior: 'smooth'
    });
    console.log("hi")
  }
  return (
    <Disclosure as="nav" className="bg-[#ECF2FF] sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="flex flex-shrink-0 items-center">
                  <video autoPlay muted loop className="block h-12 w-auto lg:hidden" src={Video}></video>
                  <video autoPlay muted loop className="hidden h-12 w-auto lg:block" src={Video}></video>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                <div className='h-8 w-0.5 bg-[#0667DA]'></div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-800 text-[#F7FAFA] font-sans' : 'font-sans transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 text-[#5A6166] hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick = {item.name=="Why Us"?goto:""}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link to={"/User"}><div className={`${localStorage.getItem('token')?"":"hidden"} px-3 py-2 rounded-md text-sm font-medium font-sans transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 text-[#5A6166] hover:bg-gray-700 hover:text-white`}>User</div></Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!localStorage.getItem('token')?<div className={`flex space-x-2`}>
                <Link to={"/Signup"}>
                <button className="flex justify-center items-center group rounded-full h-10 w-24 bg-[#F7FAFA] font-semibold text-base border-2 border-[#0667DA] relative overflow-hidden text-[#5A6166]">Sign up</button></Link>

                <Link to={"/Login"}>
                <button className="flex justify-center items-center group rounded-full h-10 w-24 bg-[#0667DA] font-semibold text-base text-white relative overflow-hidden">Login</button></Link>
            </div>
 
                // {/* Profile dropdown */}
                 :<Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/Home"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={handleLogout}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-[#5A6166]' : 'text-[#5A6166] hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}