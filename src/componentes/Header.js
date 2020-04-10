import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <nav className="navbar mb-5 shadow text-center">
            <h1 className="w-100 mt-2 font-weight-bolder display-4 d-none d-md-block">{props.title}</h1>                    
            <h1 className="w-100 mt-2 font-weight-bolder d-block d-sm-block d-md-none">{props.title}</h1>                    
        </nav>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;