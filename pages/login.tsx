import React, {useState} from "react"
import Image from "next/image"
import { signIn } from "../utils/firebase/firebase-auth"
import Message from "../components/message"
import { auth } from "../utils/firebase/firebase"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [failed, setFailed] = useState(false)

     
    const handleSubmit = async () => {
            await auth.signInWithEmailAndPassword(username, password)
            setFailed(true)
            console.log(failed)
            setTimeout(() => {
                setFailed(false)
            },3000)

        }     
    
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <Image className="rounded" src="/ts.svg" width={50} height={50}/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please sign in to your account</h2>
                </div>
                
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                        </button>
                    </div>
               
                {failed ? <Message alert={true} text="Incorrect username or password!"/> : ""}
            </div>
        </div>
    )   
}

export default Login