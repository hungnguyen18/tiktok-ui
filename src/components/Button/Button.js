import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = React.forwardRef(
    (
        {
            to,
            href,
            primary = false,
            outline = false,
            outlineDefault = false,
            text = false,
            disabled = false,
            rounded = false,
            small = false,
            large = false,
            className,
            leftIcon,
            rightIcon,
            children,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';
        const classes = cx('wrapper', {
            [className]: className,
            primary,
            outline,
            outlineDefault,
            text,
            disabled,
            rounded,
            small,
            large,
        });
        const props = {
            onClick,
            ...passProps,
        };

        // Remove event listeners when btn is disabled
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        return (
            <Comp ref={ref} className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

                <span className={cx('title')}>{children}</span>

                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outlineDefault: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
