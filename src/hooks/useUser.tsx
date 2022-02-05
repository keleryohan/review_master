import React from 'react'

const useUser = (): { user: string; loadingUser: boolean } => {
  const [user, setUser] = React.useState()
  const [loadingUser, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      // TODO: check auth
      setLoading(false)
    }, 1000)
  }, [])

  return { user, loadingUser }
}
export default useUser
