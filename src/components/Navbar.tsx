import { useNavigate } from "react-router-dom"
import Button from "./ui/Button"

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="absolute w-full h-20 flex items-center justify-end px-10">
        {/* <span className="text-[#F8F3CE] tracking-widest text-xl font-semibold break-words">Atif Muhammad</span> */}
     
          <Button text="Let's Connect?" type="ghost" handler={()=> navigate('/contact')}/>
        
    </div>
  )
}

export default Navbar