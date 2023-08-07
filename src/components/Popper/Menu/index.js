import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '..';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuTranslate from './MenuTranslate';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DefaultFn = () => {};

function Menu({ children, menuItem = [], hideOnClick = false, onChange = DefaultFn }) {
    const [history, setHistory] = useState([{ data: menuItem }]);
    const menu = history[history.length - 1];

    const loopMenu = () => {
        return menu.data.map((item, index) => {
            // Kiem tra children
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <>
            <Tippy
                offset={[10, 5]}
                hideOnClick={hideOnClick}
                interactive={true}
                delay={[0, 600]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-list')}>
                            {history.length > 1 && <MenuTranslate title={'Language'} onBack={handleBack} />}
                            <div className={cx('menu-body')}>{menuItem && menuItem.length > 0 && loopMenu()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </>
    );
}

export default Menu;
