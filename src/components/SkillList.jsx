import styles from './SkillList.module.css'

const SkillList = ({ fields, register, errors, remove }) => {
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className={styles.skillItem}>
          <div className={styles.fieldContainer}>
            <label htmlFor={`tech-${index}`}>Technologia:</label>
            <input
              id={`tech-${index}`}
              {...register(`technologies.${index}.name`)}
              className={`${styles.inputField} ${
                errors.technologies?.[index]?.name ? styles.inputError : ''
              }`}
            />
            {errors.technologies?.[index]?.name && (
              <p className={styles.errorMessage}>
                {errors.technologies[index].name.message}
              </p>
            )}
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor={`level-${index}`}>Poziom:</label>
            <select
              id={`level-${index}`}
              {...register(`technologies.${index}.level`)}
              className={`${styles.inputField} ${
                errors.technologies?.[index]?.level ? styles.inputError : ''
              }`}
            >
              <option value=''>Wybierz</option>
              <option value='początkujący'>Początkujący</option>
              <option value='średniozaawansowany'>Średniozaawansowany</option>
              <option value='zaawansowany'>Zaawansowany</option>
              <option value='ekspert'>Ekspert</option>
            </select>
            {errors.technologies?.[index]?.level && (
              <p className={styles.errorMessage}>
                {errors.technologies[index].level.message}
              </p>
            )}
          </div>
          <button
            type='button'
            onClick={() => remove(index)}
            className={styles.deleteButton}
          >
            Usuń
          </button>
        </div>
      ))}
    </>
  )
}

export default SkillList
