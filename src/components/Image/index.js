import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '../../assets/images';
import styles from './image.module.scss';

// fallback: customImage = images.noImage
// fallback: customImage : đổi tên để kh trùng. Gắn mặc định là images.noImage nếu không truyền từ ngoài vào

const Image = forwardRef(({ src, className, fallback: customImage = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
