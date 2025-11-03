"use client"
import React from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const clickHandle = (e) => {
        e.preventDefault()
        toast("Email Submitted Sucessfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    return (
        <form onSubmit={clickHandle} className=" flex justify-center items-center flex-col gap-[2rem] w-[380px] ">
            <div className="grp flex justify-center items-start flex-col  gap-2 w-[100%]  ">
                <label className=" text-gray-500">Email Address</label>
                <input type="text" className=" bg-gray-100 w-[100%] p-2" />
            </div>
            <button className=" w-[100%] bg-[#27AE60] p-2" >Sumbit</button>
        </form>
    )
}

export default Login