import UserLogo from '../assets/user.svg'
import CartLogo from '../assets/cart.svg'
import ArrowLogo from '../assets/arrowup.svg'
import Logo from '../assets/logo.svg'
import { useState } from 'react'



function Nav() {
    const [hov, setHov] = useState(false)
    const email = localStorage.getItem('email')

    return (
        <nav className='relative flex justify-between border-b z-50'>
            <div className='text-3xl font-extralight pl-2 flex items-center'>
                <span className='text-green-500 font-extrabold'>
                S</span>H<span className='w-[1.6rem]'><img src={Logo} alt="O" className='w-[1.6rem]'/></span>P
            </div>
            <div className='flex items-center gap-2 relative'>
                <div 
                    className='flex items-center gap-2 cursor-pointer'
                    onMouseEnter={() => {
                        setHov(true)
                    }}

                    onMouseLeave={() => {
                        setHov(false)
                    }}
                >
                    <img src={UserLogo} alt="User Logo" className='w-[2.5rem]'/>
                    <div className='flex'>
                        {email ? <p className='truncate'>
                            {email.email}
                        </p>: <p className='truncate'>Account</p>}
                        <button className='pl-2'>
                            <p className='rotate-90 text-xl font-extralight opacity-85'>
                                &gt;
                            </p>
                        </button>
                    </div>
                    <div className={`bg-white ${hov ? '' : 'hidden'} shadow-lg w-[20rem] h-[15rem] rounded-lg absolute top-12 right-[2rem]`}>
                        <div className='absolute top-[-1.5rem] right-[2.8rem]'>
                            <img src={ArrowLogo} alt="User Logo" className='w-[2.5rem]'/>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer relative flex items-center m-2 after:content-["0"] after:flex after:justify-center after:items-center after:text-sm after:text-white after:font-extrabold after:h-[16px] after:w-[16px] after:rounded-full after:absolute after:top-0 after:left-0 after:opacity-90 after:bg-green-400 after:z-20'>
                    <img src={CartLogo} alt="User Logo" className='w-[2.4rem] '/>
                    cart
                </div> 

            </div>
        </nav>
    )
}

export default Nav