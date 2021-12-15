import React from 'react'
import { api } from '~/services/api'

import styles from './styles.module.css'

const ReviewForm = ({ id }: { id: number }) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [note, setNote] = React.useState(0)
  const [author, setAuthor] = React.useState('')

  const createReview = React.useCallback(() => {
    if (title && description && note && author)
      api.sendReview({ work_id: id, title, description, note, author })
  }, [author, id, description, note, title])

  return (
    <form className={styles.container} onSubmit={createReview}>
      <h2>Deixe sua avaliação</h2>
      <input
        type='text'
        placeholder='Título'
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className={styles.description}
        placeholder='Opinião'
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></textarea>
      <input
        type='number'
        placeholder='Nota'
        min='0'
        max='5'
        required
        value={note}
        onChange={e => setNote(Number(e.target.value))}
      />
      <input
        type='text'
        placeholder='Usuário'
        required
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default ReviewForm
