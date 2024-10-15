import UserLogo from '../assets/user.svg';
import CartLogo from '../assets/cart.svg';
import ArrowLogo from '../assets/arrowup.svg';
import Logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [hov, setHov] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    // Update the cart count when the component mounts
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(cart.length);
    }, []); // Empty dependency array means this runs only once when the component mounts

    return (
        <nav className="relative flex justify-between border-b z-50">
            <Link
                className="text-3xl font-extralight pl-2 flex items-center"
                to="/"
            >
                <span className="text-green-500 font-extrabold">S</span>H
                <span className="w-[1.6rem]">
                    <img src={Logo} alt="O" className="w-[1.6rem]" />
                </span>
                P
            </Link>
            <div className="flex items-center gap-2 relative">
                {/* Account Dropdown */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onMouseEnter={() => {
                        setHov(true);
                    }}
                    onMouseLeave={() => {
                        setHov(false);
                    }}
                >
                    <img src={UserLogo} alt="User Logo" className="w-[2.5rem]" />
                    <div className="flex">
                        <p>Account</p>
                        <button className="pl-2">
                            <p className="rotate-90 text-xl font-extralight opacity-85">&gt;</p>
                        </button>
                    </div>
                    <div
                        className={`bg-white ${
                            hov ? '' : 'hidden'
                        } shadow-lg w-[20rem] h-[15rem] rounded-lg absolute top-12 right-[2rem]`}
                    >
                        <div className="absolute top-[-1.5rem] right-[2.8rem]">
                            <img src={ArrowLogo} alt="Arrow Logo" className="w-[2.5rem]" />
                        </div>
                    </div>
                </div>

                {/* Cart Icon with Dynamic Counter */}
                <Link
                    className="cursor-pointer relative flex items-center m-2"
                    to='cart'
                >
                    <img src={CartLogo} alt="Cart Logo" className="w-[2.4rem]" />
                    {/* Cart Counter */}
                    {cartCount > 0 && (
                        <span className="absolute top-[-0.1rem]  flex justify-center items-center text-sm text-white font-extrabold h-[16px] w-[16px] rounded-full bg-green-400 z-20">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
