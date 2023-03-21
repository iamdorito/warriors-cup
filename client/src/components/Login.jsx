import { useState, useRef } from 'react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'

function Profile ({user}) {
  return (
    <h3>{user.username}</h3>
  )
}

export default function Login({ user, setUser, logout }) {
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(form.current)
    let req = await fetch("http://localhost:3000/login", {
      method: 'POST',
      body: formData
    })
    let res = await req.json()
    console.log("Res", res)
    console.log(formData)
    Cookies.set('token', res.token)
    setUser(res.user)
  }

  return (
    <div className="App">
      <>
        {!user && (<p>hi</p>)}
        { user && <Profile user={user.first_name} /> }
      </>

      <form onSubmit={handleSubmit} ref={form}>
        <input name='username' type='username' placeholder="username" />
        <input name='password' type='text' placeholder="password" />
        <button>
        LOGIN
        </button>
      </form>
      <br /> 
      <button onClick={logout}>LOGOUT</button>
{/* 
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register New User
              </a>
            </p>
          </div>
          <form 
            className="mt-8 space-y-6"
            onSubmit={handleSubmit} 
            ref={form}
            >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
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

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  )
}