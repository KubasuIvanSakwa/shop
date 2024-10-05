import UserLogo from '../assets/user.svg'
import CartLogo from '../assets/cart.svg'
import { useState } from 'react'


function Nav() {
    const [cartState, setCartState] = useState()

    return (
        <nav className='flex justify-between'>
            <div>
                something
            </div>
            <div className='flex items-center gap-2 relative'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={UserLogo} alt="User Logo" className='w-[2.5rem]'/>
                    Account
                </div>
                <div className='cursor-pointer relative flex items-center m-2 after:content-["5"] after:flex after:justify-center after:items-center after:text-sm after:text-white after:font-extrabold after:h-[16px] after:w-[16px] after:rounded-full after:absolute after:top-0 after:left-0 after:opacity-90 after:bg-green-400 after:z-20'>
                    <img src={CartLogo} alt="User Logo" className='w-[2.4rem] '/>
                    cart
                </div> 

            </div>
        </nav>
    )
}

export default Nav