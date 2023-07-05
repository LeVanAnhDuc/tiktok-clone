import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [search, setSearch] = useState([]);

    useEffect(() => {
        // Call Api
        setSearch([]);
    }, []);

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo */}
                    <img src={images.logo} alt="Image-Tiktok" />

                    {/* Search */}
                    <Tippy
                        interactive={true}
                        visible={search.length <= 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Tìm kiếm" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    {/* Setting */}
                    <div className={cx('action')}>3</div>
                </div>
            </header>
        </>
    );
}

export default Header;
