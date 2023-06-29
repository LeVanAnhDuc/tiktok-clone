import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    {/* Search */}
                    {/* Setting */}
                </div>
            </header>
        </>
    );
}

export default Header;
