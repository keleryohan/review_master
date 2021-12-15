import React from 'react'

import { WorkWithReviews } from '~/containers'
import { useRouter } from 'next/router'

const Game = () => {
  const router = useRouter()
  const { id } = router.query

  return !!id && <WorkWithReviews id={parseInt(id as string)} />
}

export default Game
