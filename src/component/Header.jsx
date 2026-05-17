import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex text-center flex-col justify-center items-center gap-3'>
            <img className='w-[450px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent text-semibold'>{format (new Date(),"EEEE , MMMM MM, yyyy" )}</p>
            
        </div>
    );
};

export default Header;