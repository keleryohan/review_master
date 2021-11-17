import WorkReviews from '~/components/WorkReviews'

const Review = props => {
  return (
    <div style={{ padding: 30 }}>
      <h1>WORK {props.id}</h1>
      <WorkReviews reviews={props.reviews} />
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
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
