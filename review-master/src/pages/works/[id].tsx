import WorkReviews from "../../components/WorkReviews";

export default function Review(props) {
  return (
    <div>
      <h1>WORK {props.id}</h1>
      <WorkReviews reviews={props.reviews} />
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const reviews = [
    {
      title: "bom d-",
      text: "tava bom, 22",
      rating: 5.7,
    },
    {
      title: "bom d+",
      text: "tava bom, tava meio ruim também, tava ruim, agora parece que piorou",
      rating: 8.7,
    },
    {
      title: "titletitle",
      text: "tava ruim, agora parece que piorou",
      rating: 5.5,
    },
  ];
  return {
    props: {
      reviews: reviews,
      id: params.id,
    },
  };
}
