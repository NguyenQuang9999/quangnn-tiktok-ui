import Header from '../components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node,
};
export default DefaultLayout;
