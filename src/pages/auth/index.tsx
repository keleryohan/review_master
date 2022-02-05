import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles.module.css'

const AuthPage = () => {
  const router = useRouter()
  const { mode } = router.query
  const title = mode === 'login' ? 'Login' : 'Register'
  const redirectTitle = mode === 'login' ? 'Register' : 'Login'

  const [inputUser, setInputUser] = React.useState('')
  const [inputPassword, setInputPassword] = React.useState('')

  const handleUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputUser(event.target.value),
    []
  )

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputPassword(event.target.value),
    []
  )

  const handleClick = React.useCallback(() => {
    console.log(inputUser, inputPassword)
    // TODO: check auth
    router.push('/home')
  }, [inputUser, inputPassword, router])

  const getRedirectUrl = React.useCallback(() => {
    if (mode === 'login') return '/auth?mode=register'
    return '/auth?mode=login'
  }, [mode])

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.formContainer}>
        <input
          type='text'
          placeholder='username'
          className={styles.input}
          value={inputUser}
          onChange={handleUsernameChange}
        />
        <input
          type='password'
          placeholder='password'
          className={styles.input}
          value={inputPassword}
          onChange={handlePasswordChange}
        />
        <button className={styles.button} onClick={handleClick}>
          {title}
        </button>
        <a href={getRedirectUrl()}>{redirectTitle} by clicking here</a>
      </div>
    </div>
  )
}

export default AuthPage
