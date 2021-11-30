import React, {useEffect, useState, useCallback} from 'react'
import { useRouter } from 'next/router'

import api from '~/services/api'

import styles from './styles.module.css'

const AddReviews: React.FC = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [note, setNote] = useState(0)
  const [author, setAuthor] = useState("")

  const router = useRouter()

  useEffect(() => {
    if (!router.query.work) {
      router.push('/')
    }
  }, [router])

  const handleCreateReview = useCallback(async (event) => {
    event.preventDefault();
    
    try {
      await api.post('reviews', {
        work_id: router.query.work,
        title,
        description,
        note,
        author
      });

      alert("Avaliação cadastrada com sucesso!!")

      if (router.query.gender == 'movie') {
        router.push(`/movies/${router.query.work}`)
      } else {
        router.push(`/games/${router.query.work}`)
      }

    } catch (error) {
      alert('Não foi possível cadastrar sua avaliação. Por favor, tente novamente')
    }
    
  }, [author, description, note, router, title])

  return (
    <div>
      <form 
        className={styles.container}
        onSubmit={handleCreateReview}>
        <h2>Deixe sua avaliação</h2>
        <input 
          type="text" 
          placeholder="Título" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <textarea 
          className={styles.description} 
          placeholder="Opnião"
          value={description}
          onChange={(e) => setDescription(e.target.value)} >
        </textarea>
        <input 
          type="number" 
          placeholder="Nota" 
          min="0" 
          max="5" 
          required 
          value={note} 
          onChange={(e) => setNote(Number(e.target.value))}/>
        <input 
          type="text" 
          placeholder="Usuário" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default AddReviews;