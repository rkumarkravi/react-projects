import { Link } from 'react-router-dom';
import FourZeroFourLogo from '../assets/404Anim2.gif';

export default function Page404() {
    return <Link to="/main"><img className="anim-404" src={FourZeroFourLogo} alt="loading..."    /></Link>;
}