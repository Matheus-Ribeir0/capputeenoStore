import React, { useState } from 'react'
import storeIcon from '../assets/store_icon.png';
import searchIcon from '../assets/search_icon.png';

function Header() {
    const [shopQtd, setShopQtd] = useState(2);
  return (
    <div>
         <div className="flex justify-center items-center h-20  text-black bg-white ">
          <div className='h-full w-[1200px] flex justify-between items-center px-20'>

            <h1 className='font-saira-stencil text-4xl p-4 text-black text-gray-500 mr-10'>capputeeno</h1>

            <div className='flex justify-center items-center  p-4'>
              <div className='bg-secondGray rounded-lg w-[350px] cursor-text flex justify-center items-center'> 
                
                <input type="text" className='border-0  p-2 outline-none w-[300px] bg-transparent text-sm' placeholder='Procurando por algo específico?'/>
                <img src={searchIcon} className=' h-6'/>
              </div>
              <button className="relative w-[40px] h-[40px] mx-3">
                <img src={storeIcon} className="w-[30px] " />
                <span className="absolute bottom-[-1px] right-[8px] w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {shopQtd}
                </span>
              </button>

            </div>
              
          </div>
      </div>
    </div>
  )
}

export default Header