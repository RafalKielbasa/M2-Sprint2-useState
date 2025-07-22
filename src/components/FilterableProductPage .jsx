import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ProductList from './ProductList'
import { Form } from './form'

import styles from './FilterableProductPage.module.css'

const { VITE_API_URL } = import.meta.env

export default function FilterableProductPage() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/products?${query ? `name=${query}` : ''}`
        )
        setData(response.data)
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error)
      }
    }
    fetchData()
  }, [query])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lista Produktów</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <ProductList products={data} query={query} />
      <Form setData={setData} />
    </div>
  )
}
