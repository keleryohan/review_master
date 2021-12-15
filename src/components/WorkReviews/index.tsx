import { ReviewData } from '~/types'
import styles from './styles.module.css'

const WorkReviews = ({ reviews }: { reviews: ReviewData[] }) => {
  return (
    <div className={styles.mainContainer}>
      {reviews.map((review, i) => {
        return (
          <div key={i} className={styles.review}>
            <div className={styles.reviewHeader}>
              <p>Título: {review.title}</p>
              <p>{review.author}</p>
            </div>
            <div>
              <p>Description: {review.description}</p>
            </div>
            <div>
              <p>Nota: {review.note}</p>
            </div>
            <div></div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkReviews
