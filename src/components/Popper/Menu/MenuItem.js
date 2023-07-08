import Button from '../../Button';
// import classNames from 'classnames/bind';
// import styles from './Menu.module.scss';

// const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <>
            <Button menuSetting leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </>
    );
}

export default MenuItem;
