import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';

import Image from '../../../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper-account')}>
            <Image
                src={
                    'https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/52948657_827559447588263_6315469411260039168_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=vd1hhBHHnWEAX8tHXQn&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfAm7ZVseGJBoX5h2CbjIX3r9C2g9eDHAzLSH7Piz5Yb0A&oe=64F7C039'
                }
                className={cx('img')}
            />
            <div className={cx('info')}>
                <div className={cx('row-1')}>
                    <span className={cx('user')}>actress.lanhuong</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Lê Lý Lan Hương</p>
            </div>
        </div>
    );
}

export default Account;
