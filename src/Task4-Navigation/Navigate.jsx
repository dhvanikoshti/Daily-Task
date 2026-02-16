import { Link } from "react-router-dom"; 

function Navigate() {
  return (
   <div className='navigate bg-blue-950 text-white flex justify-around items-center h-16'> 
        <div> 
        <img src="logo.svg" alt="Logo" className="h-10 w-10"/> 
        </div> 
        <div className="hidden gap-6 sm:flex text-xl "> 
            <Link className="" to="/"> Home </Link> 
            <Link className="" to="/Contact"> Contact </Link> 
            <Link className="" to="/About"> About </Link>
            <Link className="" to="/Profile"> Profile </Link> 
        </div> 
        <div>
        <input type="text" name="" id="" placeholder="Search here...." className="p-2 border-2 rounded-lg bg-white text-black" />
        </div>
        <div className="text-xl">
            <Link className="" to="/Login"> Login </Link> 
        </div>
     </div> 
  )
}

export default Navigate