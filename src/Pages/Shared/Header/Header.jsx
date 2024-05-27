import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='mt-10 text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='py-1 text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-semibold'>{moment().format(`dddd, MMMM D, YYYY, h:mm:ss a`)}</p>
        </div>
    );
};

export default Header;