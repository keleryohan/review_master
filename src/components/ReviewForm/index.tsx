import React from 'react'
import { api } from '~/services/api'

import styles from './styles.module.css'

import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { BsFillHandThumbsDownFill } from 'react-icons/bs'

const ReviewForm = ({ id }: { id: number }) => {
  const [liked, setLiked] = React.useState(false)

  const createReview = React.useCallback(() => {
    api.sendReview({ work_id: id, liked })
  }, [id, liked])

  return (
    <form className={styles.container} onSubmit={createReview}>
      {liked === false ? (
        <div onClick={() => setLiked(!liked)}>
          <BsFillHandThumbsUpFill />
        </div>
      ) : (
        <div onClick={() => setLiked(!liked)}>
          <BsFillHandThumbsDownFill />
        </div>
      )}
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default ReviewForm
