import React from 'react'
import { WorkReviews } from '~/components'
import ReviewForm from '~/components/ReviewForm'
import { api } from '~/services/api'
import { WorkData } from '~/types'

import styles from './styles.module.css'

const WorkWithReviews = ({ id }: { id: number }) => {
  //const [workData, setWorkData] = React.useState<WorkData>()
  const [workData, setWorkData] = React.useState<any>()
  const [reviews, setReviews] = React.useState([])

  //const getWorkData = React.useCallback(async () => setWorkData(await api.getWork(id)), [id])

  const getWorkData = React.useCallback(
    async () =>
      setWorkData(
        [
          { id: 1, title: 'title1', description: 'description1' },
          { id: 2, title: 'title2', description: 'description2' },
          { id: 3, title: 'title3', description: 'description3' },
        ].find(e => e.id === id)
      ),
    [id]
  )

  //const getReviews = React.useCallback(async () => setReviews(await api.getReviews(id)), [id])
  const getReviews = React.useCallback(async () => setReviews([]), [id])

  React.useEffect(() => {
    if (id) getWorkData()
  }, [getWorkData, id])

  React.useEffect(() => {
    if (id) getReviews()
  }, [getReviews, id])

  return (
    !!workData && (
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{workData.name}</h1>
          <h1 className={styles.description}>{workData.description}</h1>
          <div className={styles.reviewsWrapper}>
            <div className={styles.reviewsContainer}>
              <ReviewForm id={id} />
              <WorkReviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default WorkWithReviews
