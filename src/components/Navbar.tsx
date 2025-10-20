//components/Navbar.tsx
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Phone, User } from 'lucide-react';
import menuIcon from '../assets/images/hamburger.png';
export const Navbar = () => {
    const location = useLocation()
    return(
        <nav className='flex items-center justify-between bg-[#1A1A1A] h-[99px] lg:px-30 px-5'>
            {/**logo */}
            <a href='/' className='flex items-center justify-center gap-2'>
                <img className='lg:w-[48px] lg:h-[48px] w-[28px] h-[28px]' src={logo} alt="Estatien logo" />
                <h1 className='font-bold lg:text-2xl'>Estatein</h1>
            </a>

            {/**links */}
            <ul className='hidden lg:flex gap-10'>
                {[
                    {id:1, title:"Home", path:"/"},
                    {id:2, title:"About Us", path:"/about"},
                    {id:3, title:"Properties", path:"/properties"},
                    {id:4, title:"Services", path:"/services"},
                ].map((link)=>(
                    <li key={link.id}><a className={`${location.pathname === link.path ? 'text-purple-200' : 'text-white'}`} href={link.path}>{link.title}</a></li>
                ))}
            </ul>

            {/**action btns */}
            <div className='hidden lg:flex gap-5'>
                {[
                    {id:1, icon:<User size={20} aria-label='User Icon' />},
                    {id:2, icon:<Phone size={20} aria-label='Phone Icon' />},
                ].map((icon)=>(
                    <div className='w-10 h-10 rounded-full bg-[#141414] border border-[#363636] flex items-center justify-center px-2 py-2 cursor-pointer'>
                       <span>{icon.icon}</span>
                    </div>
                ))}
            </div>

            {/**hamburger icon */}
            <div className='flex lg:hidden'>
                <img className='cursor-pointer' src={menuIcon} alt="menu bar icon" aria-label='menu bar icon'/>
            </div>
            
            {/**dropdown bar */}
        </nav>
    )
}
