import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import styles from './Form.module.css'
import Input from '../Input'
import Button from '../button/Button'

const experienceSchema = z.object({
  name: z.string().min(1, 'Nazwa jest wymagana'),
  price: z.string().min(1, 'Cena jest wymagana'),
})

export const Form = () => {
  const methods = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      name: '',
      price: '',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (data) => {
    console.log('Formularz wysłany:', data)
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Formularz doświadczenia</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <Input label='Nazwa' formKey='name' />
            <Input label='Cena' formKey='price' />
          </div>
          <Button type='submit' size='l'>
            Wyślij formularz
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default Form
