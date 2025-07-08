import styles from './Input.module.css'

const Input = ({
  register,
  variant,
  label = 'Name',
  type = 'text',
  errorMessage,
}) => {
  return (
    <label className={styles.inputLabel}>
      {type !== 'checkbox' && label}
      <input type={type} {...register} className={styles.inputField} />
      {errorMessage && type !== 'checkbox' && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
      {type === 'checkbox' && label}
    </label>
  )
}

export default Input
