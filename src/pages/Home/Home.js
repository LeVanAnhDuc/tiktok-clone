import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { Link } from 'react-router-dom';

import config from '../../config';
import Image from '../../components/Image';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Link className={cx('link-avatar')} to={config.Routes.profile}>
                    <Image
                        className={cx('image')}
                        src={
                            'https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.6435-9/52948657_827559447588263_6315469411260039168_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=vd1hhBHHnWEAX8tHXQn&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfAm7ZVseGJBoX5h2CbjIX3r9C2g9eDHAzLSH7Piz5Yb0A&oe=64F7C039'
                        }
                    />
                </Link>
                <div className={cx('content')}>
                    <div className={cx('title')}>
                        <div className={cx('name')}>
                            <h3 className={cx('nick-name')}>meoomaiman</h3>
                            <h4 className={cx('full-name')}>meo mãi mận</h4>
                        </div>
                        <Button outline className={cx('btn-following')}>
                            <div>Follow</div>
                        </Button>
                        <div className={cx('description')}>TXT Coming in July😎</div>
                        <div className={cx('music')}>
                            <h4 className={cx('video-mussic')}>
                                <Link to={''} className={cx('link-music')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} size="sm" />
                                    <div>money trees - 🍪</div>
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className={cx('video')}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
