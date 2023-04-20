import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

function GuestLayout() {

    const { userToken } = useStateContext()

    if(userToken) {
        return <Navigate to = "/" />
    }

    return (
        <>
            <div class="max-w-md bg-white my-32 mx-auto items-center justify-center py-5 px-4 sm:px-6 lg:px-8 rounded-lg overflow-hidden shadow-lg">
                <img className="mx-auto h-24 w-full" src="../survey-logo.svg" alt="Survey Logo" />
                <div class="px-6 pt-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default GuestLayout