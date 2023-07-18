import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import HeadLessTippy from '@tippyjs/react/headless';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// import { useEffect, useState } from 'react';

import AccountItem from '../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import {
    DarkModeIcon,
    FavoritesIcon,
    FeedbackAndHelpIcon,
    GetCoinIcon,
    InboxIcon,
    KeyboardShortCutIcon,
    LogoutIcon,
    MessageIcon,
    ProflieIcon,
    SearchIcon,
    SettingIcon,
    TranSlateIcon,
} from '../../../Icons';
import Image from '../../../Image';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <TranSlateIcon />,
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
        icon: <FeedbackAndHelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardShortCutIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkModeIcon />,
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
            icon: <ProflieIcon />,
            title: 'View profile',
            to: './@duc',
        },
        {
            icon: <FavoritesIcon />,
            title: 'Favorites',
            to: './@duc',
        },
        {
            icon: <GetCoinIcon />,
            title: 'Get Coins',
            to: './coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: './setting',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
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
                                <SearchIcon />
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
                                        <MessageIcon className={cx('icon')} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox">
                                    <button className={cx('btn-icon')}>
                                        <InboxIcon />
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
                                <Image
                                    src="https://cdn.pixabay.com/photo/2023/06/05/08/41/bird-8041708_.jpg"
                                    className={cx('img-avata')}
                                    alt="avatar"
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
