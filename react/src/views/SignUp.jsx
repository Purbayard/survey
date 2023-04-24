import { useState } from 'react';
import {Link} from 'react-router-dom';
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';

function SignUp() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
    
        axiosClient.post("/signUp", {
            name: userName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            })
            .then(({ data }) => {
                setCurrentUser(data.user)
                setUserToken(data.token)
            })
            .catch((error) => {
                if (error.response) {
                const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                console.log(finalErrors)
                setError({__html: finalErrors.join('<br>')})
            }
            console.error(error)
        })
    }

    return (
        <>
            <h2 class="text-center text-3xl font-bold tracking-tigh">Sign Up</h2>
            
            {error.__html && (
                <div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
                </div>
            )}
            
            <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="user-name" className="sr-only">
                            User Name
                        </label>
                        <input
                            id="user-name"
                            name="user-name"
                            type="text"
                            required
                            value={userName}
                            onChange={event => setUserName(event.target.value)}
                            className="relative block w-full rounded-t-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="User Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email Address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="relative block w-full border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email address"
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
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            className="relative block w-full border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label htmlFor="password-confirmation" className="sr-only">
                            Password Confirmation
                        </label>
                        <input
                            id="password-confirmation"
                            name="password_confirmation"
                            type="password"
                            required
                            value={passwordConfirmation}
                            onChange={event => setPasswordConfirmation(event.target.value)}
                            className="relative block w-full rounded-b-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password Confirmation"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative flex w-full justify-center rounded-md text-white-50 text-white bg-cyan py-2 px-3 text-sm font-semibold font hover:bg-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign Up
                    </button>
                </div>
            </form>
            <p class="text-center mt-2 font-medium hover:text-darkBlue">
                <Link to="/login">
                    Log In
                </Link>
            </p>
        </>
    )
}

export default SignUp