import styles from './styles.module.css'

const WorkReviews = ({ reviews }) => {
  return (
    <div className={styles.mainContainer}>
      {reviews.map((review, i) => {
        return (
          <div key={i} className={styles.review}>
            <div>
              <p>{review.title}</p>
            </div>
            <div>
              <p>{review.description}</p>
            </div>
            <div>
              <p>{review.note} </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkReviews
