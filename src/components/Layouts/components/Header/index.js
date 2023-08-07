import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

// import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

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
    SettingIcon,
    TranSlateIcon,
} from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';
import RoutesConfig from '../../../../config/routes';

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
                    <Link to={RoutesConfig.home} className={cx('logo')}>
                        <img src={images.logo} alt="logo-Tiktok" />
                    </Link>

                    {/* Search */}
                    <Search />

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
                                    src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/52948657_827559447588263_6315469411260039168_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=vd1hhBHHnWEAX8tHXQn&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfAm7ZVseGJBoX5h2CbjIX3r9C2g9eDHAzLSH7Piz5Yb0A&oe=64F7C039"
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
