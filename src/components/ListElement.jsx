import styles from './ListElement.module.css'

export default function ListElement({ product }) {
  const { name, price } = product

  return (
    <li className={styles.productItem}>
      <span className={styles.productName}>{name}</span>
      <span className={styles.productPrice}>{price}</span>
    </li>
  )
}
