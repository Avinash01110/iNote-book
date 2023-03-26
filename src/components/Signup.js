import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Video from '../logo/Notelogo.mp4'

export default function Login(props) {
  let navigate = useNavigate()
  
  const [cred, setCred] = useState({username : "", email : "", password: ""})
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name:cred.username, email: cred.email, password:cred.password})
    })
    
    const json = await response.json()
    console.log(json)
    
    if(json.success){
      localStorage.setItem("token",json.auth_token)
      navigate("/User",{replace:true})
      props.showAlert("Successfully created the account","green")
    }else{
      props.showAlert("Invalid credentials","red")
    }
  }

  const onChange = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }

  return (
    <div onSubmit={handleSubmit}>
      <div className="flex h-screen bg-[#ECF2FF] min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <video autoPlay muted loop className="mx-auto h-20 w-auto" src={Video}></video>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-2 rounded-md shadow-sm">
              <div>
                <label htmlFor="user-name" className="sr-only">
                  Username
                </label>
                <input
                  id="user-name"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="relative block w-full rounded-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-[#0667DA] placeholder:text-gray-400 placeholder:px-2 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#0667DA] sm:text-sm sm:leading-6"
                  placeholder="User Name"
                  value={cred.username}
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-[#0667DA] placeholder:text-gray-400 placeholder:px-2 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#0667DA] sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  value={cred.email}
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-[#0667DA] placeholder:text-gray-400 placeholder:px-2 focus:z-10 focus:ring-2 focus:ring-[#0667DA] sm:text-sm sm:leading-6 "
                  placeholder="Password"
                  minLength={5}
                  value={cred.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm">
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-[#0667DA] py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
