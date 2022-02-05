import React from 'react'
import styles from './styles.module.css'
import { useUser } from '~/hooks/'
import { useRouter } from 'next/router'
import { LoadingIndicator } from '~/components'

const HomePage = () => {
  const router = useRouter()
  const { user, loadingUser } = useUser()

  React.useEffect(() => {
    if (!user && !loadingUser) router.push({ pathname: '/auth', query: { mode: 'login' } })
  }, [loadingUser, router, user])

  return loadingUser ? (
    <div className={styles.mainContainer}>
      <LoadingIndicator />
    </div>
  ) : (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Home Page</h1>
      <div className={styles.row}>
        <a href='games'>
          <h2>Games</h2>
        </a>
        <a href='movies'>
          <h2>Movies</h2>
        </a>
      </div>
    </div>
  )
}

export default HomePage
