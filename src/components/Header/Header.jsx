import Nav from './Nav/Nav'
import Banner from './Banner/Banner'
import './Header.css';

const Header = () => {
    const message = "Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits";
    return ( 
        <>
            <Nav />
            <Banner message = {message} />
        </>
     );
}
 
export default Header;