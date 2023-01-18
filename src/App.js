import './App.css';
import QuestionChatPage from './ChatPage';
import { useState } from 'react'
import { FaRegQuestionCircle, FaImages, FaEdit } from 'react-icons/fa'
import LandingPage from './Land'
import {useEffect} from 'react'
import ImagePage from './ImagePage'
import {CgProfile} from 'react-icons/cg'
import {signInWithGoogle} from './config';
import firebase from './config'
import {logout} from './config'

function App() {
  const [page, setPage] = useState('')
  const [user, setUser] = useState(null)

  

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  useEffect(()=>{
    if(page !== 'Image' && page !== 'Fix' && page!=='Question'){
      mount()
    }
    else if(page === 'LoggedIn' || page=== 'LoggedIn'){
      console.log('it ez what it ez')
    }
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  async function mount(){
    await timeout(3000)
    setPage('Fix')
  }

  const NavBar = () => {

    return (
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow-lg">
        <button onClick={() => { setPage('Question') }}><SideBarIcon icon={<FaRegQuestionCircle size="28" />} text="Ask a question/Talk" /></button>
        <button onClick={() => { setPage('Image') }}><SideBarIcon icon={<FaImages size="28" />} text="Get an Image" /></button>
        <button className="mt-auto mb-4" onClick={() => { setPage('Fix') }}><SideBarIcon icon={<CgProfile size="28" />} text="Fix Your Writing" /></button>
      </div>
    )
  }

  const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
  
  if(page === 'Question' && user) {
    return(
      <div className="flex">
        <NavBar />
        <QuestionChatPage />
      </div>
    )
  }
  else if(page === 'Image' && user){
    return(
      <div className="flex">
        <NavBar />
        <ImagePage />
      </div>
    )
  }
  else if(page === 'Fix'){
    return(
      <div className="flex">
        <NavBar />
        <AuthenPage page={setPage} />
      </div>
    )
  }
  else if(page === 'LoggedIn'){
    <div className="flex">
      <NavBar />
      <LoggedIn />
    </div>
  }
  else if(page === 'LoggedOut'){
    <div className="flex">
      <NavBar />
      <LoggedOut />
    </div>
  }
  if((page === 'Question' || page === 'Image') && !user){
    alert('Please log in')
    setPage('Fix')
  }

  return (
    <div className="flex">
      <NavBar />
      <LandingPage />
    </div>
  );
}

const AuthenPage = ({page}) =>{
  return (
    <div className="container mx-auto h-screen top-0 flex bg-gray-900 text-white shadow-xll max-w-full flex-col">
        <h1 className = "animate-bounce text-9xl mx-auto mt-24">Profile</h1>
        
        <button onClick={()=>{
          signInWithGoogle();
          page('LoggedIn');
        }} className=" mx-auto w-18 h-16 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-2/12 mt-24">
          Log In
        </button>
        <button onClick={()=>{
          logout();
          page('LoggedOut');
        }} className=" mx-auto h-16 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-2/12 mt-24">
          Log Out
        </button>
    </div>
)
}

const LoggedOut = () =>{
  return(
    <div className="container mx-auto h-screen top-0 flex bg-gray-900 text-white shadow-xll max-w-full flex-col">
        <h1 className = "animate-bounce text-9xl mx-auto mt-96">Logged Out</h1>
    </div>
  )
}

const LoggedIn = () =>{
  return(
    <div className="container mx-auto h-screen top-0 flex bg-gray-900 text-white shadow-xll max-w-full flex-col">
        <h1 className = "animate-bounce text-9xl mx-auto mt-96">Logged In</h1>
    </div>
  )
}

export default App;