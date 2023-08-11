import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';
import FollowingAccounts from './FollowingAccounts/FollowingAccounts';

const cx = classNames.bind(styles);

const LIST_POLICY = [
    { About: 'About', Newsroom: 'Newsroom', Contact: 'Contact', Careers: 'Careers' },
    {
        TikTokforGood: 'TikTok for Good',
        Advertise: 'Advertise',
        Developers: 'Developers',
        Transparency: 'Transparency',
        TikTokRewards: 'TikTok Rewards',
        TikTokEmbeds: 'TikTok Embeds',
    },
    {
        Help: 'Help',
        Safety: 'Safety',
        Terms: 'Terms',
        Privacy: 'Privacy',
        CreatorPortal: 'Creator Portal',
        CommunityGuidelines: 'Community Guidelines',
    },
];

function Sidebar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <>
            <div className={cx('wrapper')}>
                <nav className={cx('feature')}>
                    <Menu>
                        <MenuItem
                            title={'For You'}
                            to={config.Routes.home}
                            icon={<HomeIcon />}
                            iconActive={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title={'Following'}
                            to={config.Routes.following}
                            icon={<UserGroupIcon />}
                            iconActive={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title={'Explore'}
                            to={config.Routes.explore}
                            icon={<ExploreIcon />}
                            iconActive={<ExploreActiveIcon />}
                        />
                        <MenuItem
                            title={'LIVE'}
                            to={config.Routes.live}
                            icon={<LiveIcon />}
                            iconActive={<LiveActiveIcon />}
                        />
                    </Menu>
                </nav>
                {/* Following account */}
                <FollowingAccounts />

                <div className={cx('policy')}>
                    {LIST_POLICY.map((item, index) => (
                        <div className={cx('list-item')}>
                            {Object.entries(item).map(([key, value], index) => (
                                <a className={cx('link')}>{value}</a>
                            ))}
                        </div>
                    ))}
                    <span className={cx('copy-right')}>© {currentYear} TikTok</span>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
