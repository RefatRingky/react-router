import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../Component/CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Fancy Routing!!!</h1>
            <nav>
                 <CustomLink to='/'>Home</CustomLink>
                 <CustomLink to='/about'>About</CustomLink>
                 <CustomLink to='/friends'>Friend</CustomLink>
                {/* <Link to='/'>Home</Link>
                <Link to='/friends'>Friend</Link>
                <Link to='/about'>About</Link> */}
              
            </nav>
        </div>
    );
};

export default Header;