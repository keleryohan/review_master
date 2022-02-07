import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles.module.css'
import api from '~/services/api'

const AuthPage = () => {
  const [inputUser, setInputUser] = React.useState('')
  const [inputName, setInputName] = React.useState('')
  const [inputPassword, setInputPassword] = React.useState('')

  const router = useRouter()
  const { mode } = router.query
  const isLogin = React.useMemo(() => mode === 'login', [mode])
  const title = React.useMemo(() => (isLogin ? 'Login' : 'Register'), [isLogin])
  const redirectMode = React.useMemo(() => (isLogin ? 'register' : 'login'), [isLogin])

  const handleUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputUser(event.target.value),
    []
  )

  const handleNameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputName(event.target.value),
    []
  )

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setInputPassword(event.target.value),
    []
  )

  const handleClick = React.useCallback(async () => {
    const responseStatus = isLogin
      ? await api.loginUser(inputUser, inputPassword)
      : await api.createUser(inputName, inputUser, inputPassword)

    if (responseStatus === 200) {
      isLogin ? router.push('/home') : router.push({ pathname: '/auth', query: { mode: 'login' } })
    }
  }, [inputName, inputPassword, inputUser, isLogin, router])

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.formContainer}>
        {!isLogin && (
          <input
            type='text'
            placeholder='name'
            className={styles.input}
            value={inputName}
            onChange={handleNameChange}
          />
        )}
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
        <button
          className={styles.button}
          onClick={handleClick}
          disabled={!inputUser || !inputPassword}
        >
          {title}
        </button>
        <a href={`/auth?mode=${redirectMode}`}>Go to {redirectMode} page</a>
      </div>
    </div>
  )
}

export default AuthPage
