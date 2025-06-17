import ListElement from './ListElement'

import styles from './ProductList.module.css'

export default function ProductList({ products, query }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <ul className={styles.productList}>
      {filteredProducts.map((product) => (
        <ListElement key={product.name} product={product} />
      ))}
    </ul>
  )
}
