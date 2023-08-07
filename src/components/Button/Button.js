import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// ... passProps là gồm tất cả các giá trị mà cha truyền vào

function Button({
    children,
    className = false,

    to,
    href,

    onClick,

    // Type button
    primary = false,
    outline = false,
    upload = false,
    disable = false,
    rounded = false,

    leftIcon = false,
    rightIcon = false,

    // Size button
    small = false,
    large = false,

    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event handle when button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // Handle switch router dom or export
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Add class by ES6
    let classs = {
        primary,
        outline,
        upload,
        disable,
        rounded,

        leftIcon,
        rightIcon,

        small,
        large,
    };

    return (
        <>
            <Comp className={cx('wrapper', classs, className)} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('children')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,

    className: PropTypes.string,

    to: PropTypes.string,
    href: PropTypes.string,

    onClick: PropTypes.func,

    primary: PropTypes.bool,
    outline: PropTypes.bool,
    upload: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,

    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,

    small: PropTypes.bool,
    large: PropTypes.bool,
};

export default Button;
