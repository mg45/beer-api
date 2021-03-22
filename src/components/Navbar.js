import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='ui raised verry padded segment'>
            <div className='ui right header'>
                <button className='ui button'><NavLink to="/">Home</NavLink></button>
                <button className='ui button'><NavLink to="/allbeers">All Beers</NavLink></button>
                <button className='ui button'><NavLink to="/randombeersingleview">Random</NavLink></button>
            </div>
        </nav>
    );
}
 
export default Navbar;
