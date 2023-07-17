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
    faGear,
    faArrowRightFromBracket,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

import HeadLessTippy from '@tippyjs/react/headless';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// import { useEffect, useState } from 'react';

import AccountItem from '../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import {
    faBookmark,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faMoon,
    faUser,
} from '@fortawesome/free-regular-svg-icons';

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

    const currentUser = true;

    const menuUser = [
        {
            icon: <FontAwesomeIcon icon={faUser} size="lg" />,
            title: 'View profile',
            to: './@duc',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} size="lg" />,
            title: 'Favorites',
            to: './@duc',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} size="lg" />,
            title: 'Get Coins',
            to: './coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} size="lg" />,
            title: 'Settings',
            to: './setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
    ];

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <img src={images.logo} alt="logo-Tiktok" />

                    {/* Search */}
                    <HeadLessTippy
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
                    </HeadLessTippy>

                    {/* Setting */}
                    <div className={cx('action')}>
                        <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                            Upload
                        </Button>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                    <button className={cx('btn-icon')}>
                                        <img src={images.message} className={cx('icon')} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox">
                                    <button className={cx('btn-icon')}>
                                        <FontAwesomeIcon icon={faMessage} className={cx('icon')} />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Login</Button>
                            </>
                        )}
                        <Menu menuItem={currentUser ? menuUser : MENU_ITEM} onChange={handleChangeMenu}>
                            {currentUser ? (
                                <img
                                    src="https://cdn.pixabay.com/photo/2023/06/05/08/41/bird-8041708_1280.jpg"
                                    className={cx('img-avata')}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
                                </button>
                            )}
                        </Menu>
                    </div>
                    {/* <Button rounded>Tải ứng dụng</Button> */}
                </div>
            </header>
        </>
    );
}

export default Header;
