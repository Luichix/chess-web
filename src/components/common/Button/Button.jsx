import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import classNames from 'classnames'

const Button = ({
  type = 'button',
  size = 'medium',
  children,
  onClick,
  color,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(styles.button, styles[color], styles[size], style)}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
}
