import React, {useEffect, useCallback} from 'react'
import { WorkCards } from '~/components'
import { WorkProps } from '~/types'

import api from '~/services/api'

type MoviesProps = {
  works: WorkProps,
  errorMsg?: string,
}

const Movies = (props: MoviesProps) => {

  useEffect(() => {
    if (props.errorMsg) {
      window.alert(props.errorMsg)
    }
  }, [props.errorMsg])

  return (
    <div style={{ padding: 30 }}>
      <h1>Movies</h1>
      <WorkCards works={props.works} />
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await api.get('works/?gender=movie')  

    return {
      props: {
        works: response.data,
      },
    }
  } catch (error) {
    return {
      props: {
        works: [] as WorkProps[],
        errorMsg: error.response?.data?.message || "Ops, algo deu errado"
      }
    }
  }

  // const workList = [
  //   {
  //     id: 1,
  //     title: 'Avengers',
  //     description:
  //       'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
  //     rating: 8,
  //   },
  //   {
  //     id: 2,
  //     title: 'The Batman',
  //     description:
  //       'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
  //     rating: 9.5,
  //   },
  //   {
  //     id: 3,
  //     title: 'Venom: Let There Be Carnage',
  //     description:
  //       'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.',
  //     rating: 9,
  //   },
  // ]

  
}

export default Movies
