import { useState, useEffect } from "react";
import Link  from 'next/link';

import { getCategories } from "../services";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result));
    }, [])

    return (
        <div className = 'container mx-auto px-10 mb-8'>
            <div className = 'border-b w-full inline-block border-pink-400 py-8'>
                <div className = 'md:float-left block'>
                    <Link href = '/'>
                        <span className = 'cursor-pointer font-bold text-4xl text-white'>Cardy's Blog</span>
                    </Link>
                </div>
                <div className = 'hidden md:float-left md:contents'>
                    <Link href='https://www.instagram.com/_cardys_/' passHref>
                        <a target='_blank' className = 'md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            <FiInstagram color='#fff' fontSize={27} className='cursor-pointer' />   
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/adijat-adetutu-oyede-829811175' passHref>
                        <a target='_blank' className = 'md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                        <AiOutlineLinkedin color='#fff' fontSize={32} className='mx-5 cursor-pointer' />   
                        </a>
                    </Link>
                    <Link href='https://wa.me/c/2348166511178' passHref>
                        <a target='_blank' className = 'md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            <BsWhatsapp color='#fff' fontSize={27} className='cursor-pointer' />   
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
