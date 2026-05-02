"use client"

import axios from "axios"
import { redirect } from "next/navigation"
import { useState } from "react"

type Props = {}

const RegisterPage = (props: Props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [usernameCheck, setUsernameCheck] = useState("")

    const hadleSubmit = async () => {
        try {
            setPasswordCheck("")
            setUsernameCheck("")

            if (password !== passwordConfirm) {
                return setPasswordCheck("Password not match!")
            }

            const res = await axios.post("http://localhost:8000/api/register", {
                username,
                password
            })

            console.log("regsiter success")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 409) {
                    setUsernameCheck("Username Already Exist!")
                }
            }
            console.log("error", error)
        }
    }

    const linkToRegister = () => {
        redirect('/login')
    }

    return (
        <div className={`flex h-screen items-center justify-center bg-[#0d0d0f]`}>
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#141416] px-11 py-10">

                {/* Header */}
                <h1 className={`text-[26px] font-semibold tracking-tight text-[#f5f0e8]`}>
                    Create account.
                </h1>
                <p className="mb-8 mt-1 text-[13px] font-light text-white/40">
                    Fill in the details to get started
                </p>

                {/* Username */}
                <div className="mb-4 flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium uppercase tracking-widest text-white/35">
                        Username
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-[#f0ece4] placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                    />
                </div>

                {/* Password */}
                <div className="mb-4 flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium uppercase tracking-widest text-white/35">
                        Password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-[#f0ece4] placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                    />
                </div>

                {/* Confirm-Password */}
                <div className="mb-4 flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium uppercase tracking-widest text-white/35">
                        Confirm-Password
                    </label>
                    <input
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-[#f0ece4] placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                    />
                </div>

                {/* Submit */}
                <button
                    className="w-full cursor-pointer rounded-lg bg-[#f5f0e8] py-3 text-[14px] font-medium tracking-wide text-[#0d0d0f] transition-all hover:-translate-y-px hover:opacity-90 active:scale-[0.99]"
                    onClick={() => hadleSubmit()}
                >
                    Create account
                </button>

                {/* Validation */}
                <div className="mt-5">
                    <h1 className="text-[12.5px] text-red-600 mb-4">{passwordCheck}</h1>
                    <h1 className="text-[12.5px] text-red-600 mb-4">{usernameCheck}</h1>
                </div>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2.5">
                    <div className="h-px flex-1 bg-white/[0.08]" />
                    <span className="text-[11px] text-white/20">or</span>
                    <div className="h-px flex-1 bg-white/[0.08]" />
                </div>

                {/* Footer */}
                <p className="text-center text-[12.5px] text-white/30">
                    Already have an account?{" "}
                    <span onClick={() => linkToRegister()} className="cursor-pointer text-white/60 hover:text-white/80 transition-colors">
                        Sign in
                    </span>
                </p>

            </div>
        </div >
    )
}

export default RegisterPage