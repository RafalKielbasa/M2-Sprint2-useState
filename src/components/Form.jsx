import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import styles from './Form.module.css'
import SkillList from './SkillList'
import Input from './Input'

const experienceSchema = z.object({
  name: z.string().min(1, 'Imię jest wymagane'),
  email: z
    .string()
    .email('Nieprawidłowy format adresu e-mail')
    .min(1, 'E-mail jest wymagany'),
  hasProgrammingExperience: z.boolean(),
  technologies: z
    .array(
      z.object({
        name: z.string().min(1, 'Nazwa technologii jest wymagana'),
        level: z.string().min(1, 'Poziom zaawansowania jest wymagany'),
      })
    )
    .optional()
    .superRefine((technologies, ctx) => {
      if (technologies?.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Dodaj co najmniej jedną technologię',
          path: ['technologies'],
        })
      }
    }),
})

export const Form = () => {
  const { register, control, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      hasProgrammingExperience: false,
      technologies: [],
    },
  })

  const { errors } = formState

  console.log(formState)

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'technologies',
  })

  const hasProgrammingExperience = watch('hasProgrammingExperience')

  const onSubmit = (data) => {
    console.log('Formularz wysłany:', data)
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Formularz doświadczenia</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <Input
            register={register('name')}
            label='Imię'
            errorMessage={errors.name?.message}
          />

          <Input
            register={register('name')}
            label='E-mail'
            errorMessage={errors.email?.message}
          />
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input type='checkbox' {...register('hasProgrammingExperience')} />
            Posiadam doświadczenie w programowaniu
          </label>
        </div>
        {hasProgrammingExperience && (
          <div className={styles.technologiesSection}>
            <h3>Technologie programistyczne</h3>
            {errors.technologies && typeof errors.technologies === 'string' && (
              <p className={styles.errorMessage}>
                {errors.technologies.message}
              </p>
            )}
            <SkillList
              fields={fields}
              register={register}
              errors={errors}
              remove={remove}
            />
            <button
              type='button'
              onClick={() => append({ name: '', level: '' })}
              className={styles.addButton}
            >
              + Dodaj technologię
            </button>
          </div>
        )}
        <button type='submit' className={styles.submitButton}>
          Wyślij formularz
        </button>
      </form>
    </div>
  )
}

export default Form
