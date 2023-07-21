import { Wrapper as PopperWrapper } from '../../../Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '../../AccountItem';
import { SearchIcon } from '../../../Icons';

import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        // Nếu không có dữ liệu sẽ không call API
        if (!searchValue.trim()) {
            setSearch([]);
            return;
        }

        // Nút loading
        setLoading(true);

        // Call Api
        // encodeURIComponent mã hóa kí tự đặc biệt
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearch(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [searchValue]);

    const handleClearResult = () => {
        setSearchValue('');
        setSearch([]);
        inputRef.current.focus();
    };

    const handleShowHideTippy = () => {
        setShowResult(false);
    };

    return (
        <>
            <HeadLessTippy
                interactive={true}
                visible={showResult && search.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {search.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShowHideTippy}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={(event) => setSearchValue(event.target.value)}
                        value={searchValue}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {
                        // Convert Boolean
                        !!searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClearResult}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )
                    }
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadLessTippy>
        </>
    );
}

export default Search;
