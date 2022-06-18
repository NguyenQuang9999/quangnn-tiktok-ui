import React from 'react'
import './GlobalStyles.scss';
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
