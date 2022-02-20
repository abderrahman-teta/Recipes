import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav>
            <div className="container">
            <div className="logo">
                <Link to="/" ><h1>Yummy</h1></Link>
            </div>
            <div className="navigation">
                <Link to="/reacipelist" >List</Link>
                <Link to="/search" >Search</Link>
                <Link to="/addrecipe">Add New One</Link>
            </div>
            </div>
        </nav>
     );
}
 
export default NavBar;