
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const LandingPage = () => {
    return (
        <div className="container mx-auto h-screen top-0 flex bg-gray-900 text-white shadow-xll max-w-full flex-col">
            <h1 className = "animate-bounce text-9xl mx-auto mt-80">Hey There</h1>
            <h1 className = "animate-bounce text-5xl mx-auto mt-4">We're getting stuff set up for you!</h1>
            <AiOutlineLoading3Quarters className="animate-spin mx-auto mt-12" size="80" />
        </div>
    )
}

export default LandingPage