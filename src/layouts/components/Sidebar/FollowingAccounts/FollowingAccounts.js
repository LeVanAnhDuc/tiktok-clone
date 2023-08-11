import Account from './Account';
import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FollowingAccounts() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Following accounts</h2>
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <p className={cx('see-more')}>See more</p>
        </div>
    );
}

export default FollowingAccounts;
