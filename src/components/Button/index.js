import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// ... passProps là gồm tất cả các giá trị mà cha truyền vào

function Button({
    children,

    to,
    href,

    onclick,

    // Type button
    menuSetting = false,
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
        onclick,
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
    let classs = cx('wrapper', {
        menuSetting,

        primary,
        outline,
        upload,
        disable,
        rounded,

        leftIcon,
        rightIcon,

        small,
        large,
    });

    return (
        <>
            <Comp className={classs} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('children')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

export default Button;
