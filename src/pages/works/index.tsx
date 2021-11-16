import WorkCards from '../../components/WorkCards'

export default function works(props) {
  return (
    <div>
      <h1>works</h1>
      <WorkCards works={props.works} />
    </div>
  )
}

export async function getServerSideProps() {
  const workList = [
    { id: 1, title: 'avengers', description: 'first description', rating: 10 },
    {
      id: 2,
      title: 'avengers 2',
      description: 'second description',
      rating: 6.5,
    },
    { id: 3, title: 'avengers 3', description: 'third description', rating: 9 },
    {
      id: 4,
      title: 'avengers 4',
      description: 'forth description',
      rating: 8.5,
    },
  ]

  return {
    props: {
      works: workList,
    },
  }
}
