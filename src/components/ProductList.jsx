import ListElement from './ListElement'

import styles from './ProductList.module.css'

export default function ProductList({ products }) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ListElement key={product.name} product={product} />
      ))}
    </ul>
  )
}
