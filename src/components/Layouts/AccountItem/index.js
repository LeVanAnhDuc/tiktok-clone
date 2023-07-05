import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    src="https://cdn.pixabay.com/photo/2023/06/05/08/41/bird-8041708_1280.jpg"
                    alt="name"
                    className={cx('avatar')}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Le Van Anh Duc</span>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>levananhduc1804</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
