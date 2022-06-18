import Header from '../components/Header';
import PropTypes from 'prop-types';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className='content'>{children}</div>
            </div>
        </div>
    );
}
HeaderOnlyLayout.prototype = {
    children: PropTypes.node,
};
export default HeaderOnlyLayout;
