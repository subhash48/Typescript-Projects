import { IoHomeSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <aside className='container'>

        <div className="content-top">
            <IoHomeSharp className="icon" size = {18}/>
            <IoMdPerson className="icon" size = {18}/>
            <FaSearch className="icon" size = {18}/>
        </div>

        <div className="content-bottom">
            <IoMdSettings className="icon" size ={18} />
            <IoMdPerson className="icon" size = {18}/>
        </div>

    </aside>
    

  )
}

