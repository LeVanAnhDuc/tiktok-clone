import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '..';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, menuItem }) {
    const loopMenu = () => {
        return menuItem.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <>
            <Tippy
                interactive={true}
                delay={[0, 600]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-list')}>
                            {menuItem && menuItem.length > 0 && loopMenu()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
