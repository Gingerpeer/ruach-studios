
import RuachLogo from './RuachStudiosLogo.png';

console.log({RuachLogo})
const Logo = () => {
    return(
        <div id='Logo'>
            <img id='logoRuach' src={RuachLogo} className='img-fluid justify-content-start navbar-brand' alt='Logo'></img>
        </div>
        );
}
export default Logo;