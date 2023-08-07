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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <>
            <h2 className={cx('wrapper')}>
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
                <div className={cx('following')}>
                    Các tài khoản đang follow
                    <ul>
                        <li>Le Van A</li>
                        <li>Le Van A</li>
                        <li>Le Van A</li>
                        <li>Le Van A</li>
                        <li>Le Van A</li>
                        <li>Le Van A</li>
                    </ul>
                    <button>Xem them</button>
                </div>
                <div className={cx('policy')}>
                    <div>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Bảng tin</li>
                            <li>Liên hệ</li>
                            <li>Sự nghiệp</li>
                            <li>ByteDance</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Bảng tin</li>
                            <li>Liên hệ</li>
                            <li>Sự nghiệp</li>
                            <li>ByteDance</li>
                        </ul>
                    </div>
                </div>
            </h2>
        </>
    );
}

export default Sidebar;
