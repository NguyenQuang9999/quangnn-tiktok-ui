import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    onClick,
    className,
    primary = false,
    outLine = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    disabled = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', className, {
        primary,
        outLine,
        text,
        rounded,
        small,
        large,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to : PropTypes.string,
    href : PropTypes.string,
    onClick : PropTypes.func,
    className : PropTypes.string,
    primary : PropTypes.bool,
    outLine : PropTypes.bool,
    text : PropTypes.bool,
    rounded : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    disabled : PropTypes.bool
};

export default Button;
