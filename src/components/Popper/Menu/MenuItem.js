import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('item',{
        separate: data.separate
    })
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}
export default MenuItem;