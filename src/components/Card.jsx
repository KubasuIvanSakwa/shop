import { Link } from 'react-router-dom'
import lovewhite from '../assets/lovewhite.svg'


function Card({ name, description, price, image }) {
    return (
        <Link
            className="relative shadow-lg bg-white w-[18rem] h-[24rem] rounded-xl flex flex-col"
        >
            <div className="absolute top-2 right-2 border-2 border-black  rounded-full w-[2rem] h-[2rem] flex justify-center items-center pt-1 cursor-pointer ">
                <img src={lovewhite} width="25rem"/>
            </div>
            <div 
                className="w-full h-[15rem] rounded-xl bg-no-repeat bg-cover"
                style={{backgroundImage: `url('${image}')`}}
            ></div>
            <div className="absolute bottom-[4rem] w-[96.5%] p-1">
                <div className="flex justify-between -full">
                    <h2 className="truncate font-extrabold w-[9rem]">{name}</h2>
                    <p>
                        <sup>$</sup> {price}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="truncate">{description}</p>
                    <p className="text-sm">stars</p>
                </div>
                <button className="absolute hover:bg-slate-400/20 z-30 bg-white p-[0.3rem] mt-5 mb-1 rounded-3xl border-2 border-black">Add to cart</button>
            </div>
        </Link>
    )
}

export default Card