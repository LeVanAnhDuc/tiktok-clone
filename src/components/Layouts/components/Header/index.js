import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

// import { useEffect, useState } from 'react';

import AccountItem from '../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { faCircleQuestion, faKeyboard, faMoon } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} size="lg" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} size="lg" />,
        title: 'Dark mode',
    },
];

function Header() {
    // const [search, setSearch] = useState([]);

    // useEffect(() => {
    //     // Call Api
    //     setSearch([]);
    // }, []);

    const handleChangeMenu = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle
                break;
            default:
        }
    };

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <img src={images.logo} alt="logo-Tiktok" />

                    {/* Search */}
                    <Tippy
                        interactive={true}
                        // visible={search.length <= 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Tìm kiếm" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    {/* Setting */}
                    <div className={cx('action')}>
                        <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Tải lên
                        </Button>
                        <Button primary>Đăng nhập</Button>

                        <Menu menuItem={MENU_ITEM} onChange={handleChangeMenu}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
                            </button>
                        </Menu>

                        {/* <Button rounded>Tải ứng dụng</Button> */}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
