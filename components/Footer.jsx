import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai'

import Link from 'next/link'

const Footer = () => {
    return (
        <div className = 'text-center mt-20 p-10 relative rounded-lg bg-black bg-opacity-20'>
            <h1 className='font-bold text-4xl text-white mb-5'>Cardy's Blog</h1>
            <div className='flex items-center justify-center'>
                <Link href='https://www.instagram.com/_cardys_/' passHref>
                    <a target='_blank' >
                        <FiInstagram color='#fff' fontSize={27} className='cursor-pointer' />
                    </a>  
                </Link>
                <Link href='https://www.linkedin.com/in/adijat-adetutu-oyede-829811175' passHref >
                    <a target='_blank'>
                        <AiOutlineLinkedin color='#fff' fontSize={32} className='mx-5 cursor-pointer' />
                    </a> 
                </Link>
                <Link href='https://wa.me/c/2348166511178' passHref>
                    <a target='_blank'>   
                        <BsWhatsapp color='#fff' fontSize={27} className='cursor-pointer' />
                    </a>
                </Link>
            </div>
            <p className="text-white text-xl mt-5">{new Date().getFullYear()} Cardy's Blog. All Rights reserved.</p>
        </div>
    );
};

export default Footer;
