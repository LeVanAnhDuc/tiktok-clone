import { useEffect, useState } from 'react';

function useDebouunce(value, wait) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), wait);

        return () => clearTimeout(handle);
    }, [value]);

    return debounceValue;
}

export default useDebouunce;
