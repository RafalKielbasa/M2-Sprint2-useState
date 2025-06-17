import styles from './SearchBar.module.css'

export default function SearchBar({ query, setQuery }) {
  return (
    <form className={styles.searchBar}>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='Szukaj...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
