import { useFormContext } from 'react-hook-form'

import Button from './button/Button'
import styles from './Input.module.css'

const Input = ({ label = 'Name', formKey = 'name', type = 'text' }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[formKey]

  return (
    <label className={styles.inputLabel}>
      {type !== 'checkbox' && label}
      <input type={type} {...register(formKey)} className={styles.inputField} />
      {error && type !== 'checkbox' && (
        <p className={styles.errorMessage}>{error.message}</p>
      )}
      {type === 'checkbox' && label}
    </label>
  )
}

export default Input
