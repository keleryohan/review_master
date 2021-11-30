import {useCallback, useEffect} from 'react'
import { useRouter } from 'next/router'
import WorkReviews from '~/components/WorkReviews'

import api from '~/services/api'

import styles from './styles.module.css'

const Review = props => {
  const router = useRouter()

  const handleAddReview = useCallback(() => {
    router.push({ 
      pathname: "/reviews/add", 
      query: {
        work: props.work.id,
        gender: props.work.gender
      } 
    })
  }, [router, props.work.id, props.work.gender])

  useEffect(() => {
    if (props.errorMsg) {
      window.alert(props.errorMsg)
    }
  }, [props.errorMsg])

  return (
    <div style={{ padding: 30 }}>
      <div className={styles.reviews_header}>
        <h1>WORK {props.work.name}</h1>
        <button onClick={handleAddReview}>Avaliar</button>
      </div>
      <WorkReviews reviews={props.reviews} />
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  try {
    const workResponse = await api.get(`works/${params.id}`) 

    const reviewsResponse = await api.get(`reviews/?work_id=${params.id}`)

    return {
      props: {
        reviews: reviewsResponse.data,
        work: workResponse.data,
      },
    }
  } catch (error) {
    return {
      props: {
        errorMsg: error.response?.data?.message || "Ops, algo deu errado"
      }
    }
  }

  const reviews = [
    {
      title: 'bom d-',
      text: 'tava bom, 22',
      rating: 5.7,
    },
    {
      title: 'bom d+',
      text: 'tava bom, tava meio ruim também, tava ruim, agora parece que piorou',
      rating: 8.7,
    },
    {
      title: 'title',
      text: 'tava ruim, agora parece que piorou',
      rating: 5.5,
    },
  ]
  return {
    props: {
      reviews: reviews,
      id: params.id,
    },
  }
}

export default Review
