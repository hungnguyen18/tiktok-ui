import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

export default function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}
