import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountPreview.modules.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e036005693c90f43a0640d6858875d83~c5_100x100.jpeg?x-expires=1662289200&x-signature=V32I7orfyaIj5lPkhcgvlmoJboY%3D"
                    alt=""
                />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenkimhung</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Nguyễn Kim Hưng</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
