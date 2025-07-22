import styles from './Button.module.css'

export const Button = ({
  variant = 'primary',
  size = 'm',
  children,
  ...rest
}) => {
  const classNames = [styles.button, styles[variant], styles[size]]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default Button
