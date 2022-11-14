import React, {useState} from 'react';
import { MdAgriculture, MdAndroid, MdBackpack, MdBook, MdChildCare, MdPets } from 'react-icons/md';
import { GiClothes, GiHealthNormal,GiHamburgerMenu } from 'react-icons/gi';
import land from '../pics/land.webp';
import land2 from '../pics/Online.jpg'





const LandingPage = ()=>{

    const [isActive, setIsActive] = useState<boolean>(true)

    const burgertoggle = ()=>{
        setIsActive(!isActive)
    }

    return(
        // Main container

        <div style={{backgroundImage:`url(${land})`, backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',width:'100vw', }} className="w-full h-screen inline-flex justify-between pt-42 ">
            
            {/* left container */}

            <div className='w-2/6 mt-40 bg-transparent flex'>
                <button onClick={burgertoggle} className='flex items-center  rounded-none h-14 justify-center border-2 w-1/6 ml-4 bg-gray-400 md:rounded-full hover:bg-sky-500 cursor-pointer' type='button'><GiHamburgerMenu className='' /></button>

                {isActive && (
                    <div className=" h-4/5 hidden md:block h-11/12 w-full shadow-2xl  ml-4 bg-white mt-10 p-0 rounded-2xl">
                        <ul  className='  w-full h-4/5 justify-evenly text-left pt-10 '>
                            <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdAgriculture size={25} color={'grey'} /> <p className='pl-6 text-xl'>Home and Garden</p></li>
                            <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'> <GiClothes size={25} color={'grey'}/> <p className='pl-6'>Fashion</p>  </li>
                            <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><GiHealthNormal size={25} color={'grey'} /> <p className='pl-6'>Health and Beauty</p></li>
                            <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer '><MdAndroid size={25} color={'grey'}/> <p className='pl-6'>Electronics</p></li>
                            <li className='pb-6 text-xl  flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer   '><MdChildCare size={25} color={'grey'}/><p className='pl-6'>Baby Toys</p></li>
                            <li className='pb-6 text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdBook size={25} color={'grey'}/><p className='pl-6'>Books</p ></li>
                            <li className=' text-xl flex flex-row items-center px-6 hover:text-sky-500 cursor-pointer'><MdPets size={25} color={'grey'}/><p className='pl-6'>Pets</p></li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Right container */}
            {/* style={{backgroundImage:`url(${land})`, backgroundRepeat:'no-repeat'}} */}
            <div className='h-full shadow-2xl w-3/4 ml-6 bg-transparent' >
                {/* <img className='w-full h-screen' src={land2} /> */}
                
            </div>

        </div>
    );
}

export default LandingPage;