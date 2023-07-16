import image404 from '../../images/notfound404.png';

import classNames from 'classnames/bind';
import styles from './error404.module.scss';

const cx = classNames.bind(styles);

function Error404() {
    return (
        <>
            <img className={cx('wrapper')} src={image404} alt="not-found" />
        </>
    );
}

export default Error404;
