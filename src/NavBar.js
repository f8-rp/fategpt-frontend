import {FaRegQuestionCircle ,FaImages, FaEdit} from 'react-icons/fa'
import {useState} from 'react'

const NavBar = () =>{
    const [page, setPage] = useState('')

    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow-lg">
            <button onClick={()=>{setPage('Question')}}><SideBarIcon icon={<FaRegQuestionCircle size="28" />} text="Ask a question/Talk" /></button>
            <button onClick={()=>{setPage('Image')}}><SideBarIcon icon={<FaImages size="28" />} text="Get an Image" /></button>
            <button onClick={()=>{setPage('Fix')}}><SideBarIcon icon={<FaEdit size="28" />} text="Fix Your Writing" /></button>
        </div>
    )
}

const SideBarIcon = ({ icon, text }) =>(
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default NavBar;