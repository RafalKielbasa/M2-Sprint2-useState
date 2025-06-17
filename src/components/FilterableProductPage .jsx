import { useState } from 'react'

import SearchBar from './SearchBar'
import ProductList from './ProductList'

import styles from './FilterableProductPage.module.css'

const PRODUCTS = [
  { name: 'Laptop', price: '4500 PLN' },
  { name: 'Myszka', price: '150 PLN' },
  { name: 'Klawiatura', price: '250 PLN' },
  { name: 'Monitor', price: '1200 PLN' },
  { name: 'Słuchawki', price: '350 PLN' },
]

export default function FilterableProductPage() {
  const [query, setQuery] = useState('')

  console.log({ query })

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lista Produktów</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <ProductList products={PRODUCTS} query={query} />
    </div>
  )
}
