import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <>
            <h2 className={cx('wrapper')}>
                <nav className={cx('feature')}>
                    Sidebar pageee
                    <br />
                    <br />
                    <ul>
                        <li>Danh cho ban</li>
                        <li>Dang follow</li>
                        <li>Kham pha</li>
                        <li>Live</li>
                    </ul>
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
