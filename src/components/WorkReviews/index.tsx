import styles from './styles.module.css'

export default function WorkReviews({ reviews }) {
  return (
    <div className={styles.mainContainer}>
      {reviews.map((review, i) => {
        return (
          <div key={i} className={styles.review}>
            <div>
              <p>{review.title}</p>
            </div>
            <div>
              <p>{review.text}</p>
            </div>
            <div>
              <p>{review.rating} </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
