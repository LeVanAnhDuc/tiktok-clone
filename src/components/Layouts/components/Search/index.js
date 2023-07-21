import { Wrapper as PopperWrapper } from '../../../Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import AccountItem from '../../AccountItem';
import { SearchIcon } from '../../../Icons';

import { useEffect, useRef, useState } from 'react';

import * as searchService from '../../../../api-services/searchService';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebouunce } from '../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounce = useDebouunce(searchValue, 500);

    useEffect(() => {
        // Nếu không có dữ liệu sẽ không call API
        if (!debounce.trim()) {
            setSearch([]);
            return;
        }

        // Nút loading
        setLoading(true);

        // Call Api
        // encodeURIComponent mã hóa kí tự đặc biệt
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearch(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        // request.instance cấu hình axios trong file utils/requestt để gọi API ngắn hơn
        // tương đương = axios.get('https://tiktok.fullstack.edu.vn/api/users/search')

        // request.instance
        //     .get(`users/search`, {
        //         params: {
        //             q: debounce,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearch(res.data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));

        // ---

        // const fetchAPI = async () => {
        //     try {
        //         const res = await request.instance.get(`users/search`, {
        //             params: {
        //                 q: debounce,
        //                 type: 'less',
        //             },
        //         });
        //         setSearch(res.data.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };

        // fetchAPI();

        // -----

        const fetchAPI = async () => {
            const result = await searchService.search(debounce, 'less');
            setSearch(result);
            setLoading(false);
        };

        fetchAPI();
        // ----
    }, [debounce]);

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
