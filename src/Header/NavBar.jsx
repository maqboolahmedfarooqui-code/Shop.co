import Picture from "./Picture"
import logo from "../assets/logo.png";
import TextButton from "./TextButton";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { useState } from "react";

function NavBar({logoClassName}){
 let [isOpen , setIsOpen] = useState(false);

 let Open = () => {
    setIsOpen(!isOpen);
 }
    return(
        <>
          <nav className="flex flex-row gap-3 w-full h-12 mt-2.5 items-center justify-center overflow-x-hidden">
           <div className="block sm:hidden">
           <DensityMediumOutlinedIcon sx={{cursor:'pointer'}} onClick={Open} />
           </div>
           
           <Picture logoHref={'#'} picture={logo} logoClassName={'w-[95px] h-[18px] sm:w-[160px] sm:h-[22px]'} />
           
           <TextButton textButtonClassName={'hover:border-b-[2px] hidden sm:block text-[16px] font-semibold'} href={'#'} textButtonText={'Shop'} />

           <TextButton textButtonClassName={`hover:border-b-[2px] hidden sm:block text-[16px] font-semibold`} href={'#'} textButtonText={'On Sale'} />

           <TextButton textButtonClassName={'hover:border-b-[2px] hidden sm:block text-[16px] font-semibold'} href={'#'} textButtonText={'New Arrivals'} />

           <TextButton textButtonClassName={'hover:border-b-[2px] hidden sm:block text-[16px] font-semibold'} href={'#'} textButtonText={'Brands'} />
           
           
           <div className="flex flex-row items-center w-24 sm:w-80 h-12 border-[0.5px] border-gray-200 bg-gray-200 rounded-3xl">
            <SearchIcon sx={{marginLeft:'8px',marginRight:'5px'}} />
           <input className="focus:outline-none" type="text" placeholder="Search" />
           </div>
           <ShoppingCartOutlinedIcon sx={{cursor:'pointer'}} />
           <PersonOutlineOutlinedIcon sx={{cursor:'pointer'}} />
           
          </nav>
          <div className={`${isOpen ? "block" : "hidden"} sm:hidden space-y-2 ml-2`}>

            <TextButton textButtonClassName={'hover:border-b-[2px] text-[16px] font-semibold block'} href={'#'} textButtonText={'Shop'} />

           <TextButton textButtonClassName={`hover:border-b-[2px] text-[16px] font-semibold block`} href={'#'} textButtonText={'On Sale'} />

           <TextButton textButtonClassName={'hover:border-b-[2px] text-[16px] font-semibold block'} href={'#'} textButtonText={'New Arrivals'} />
           
           <TextButton textButtonClassName={'hover:border-b-[2px] text-[16px] font-semibold block'} href={'#'} textButtonText={'Brands'} />
          </div>
          </>
    )
}

export default NavBar;