import { Wrapper as PopperWrapper } from '../../../components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/Icons';

import { useEffect, useRef, useState } from 'react';

import * as searchService from '../../../services/searchService';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebouunce } from '../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebouunce(searchValue, 500);

    useEffect(() => {
        // Nếu không có dữ liệu sẽ không call API
        if (!debounceValue.trim()) {
            setSearch([]);
            return;
        }

        // Nút loading
        setLoading(true);

        // Call Api
        // encodeURIComponent mã hóa kí tự đặc biệt
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearch(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        const fetchAPI = async () => {
            const result = await searchService.search(debounceValue, 'less');
            setSearch(result);
            setLoading(false);
        };

        fetchAPI();
        // ----
    }, [debounceValue]);

    const handleClearResult = () => {
        setSearchValue('');
        setSearch([]);
        inputRef.current.focus();
    };

    const handleChangeKeyWord = (e) => {
        const keyword = e.target.value;
        const KEY_SPACE = /\s/g;

        if (!KEY_SPACE.test(keyword[0])) {
            setSearchValue(keyword);
        }
    };

    const handleShowHideTippy = () => {
        setShowResult(false);
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div className={cx('wrapper')}>
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
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleChangeKeyWord}
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
        </div>
    );
}

export default Search;
