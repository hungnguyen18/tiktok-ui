import React from 'react';
import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(style);

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>

            <SuggestedAccounts label="Suggested Accounts" />

            <SuggestedAccounts label="Following" />
        </aside>
    );
}
