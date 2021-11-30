import React, {useEffect} from 'react'
import { WorkCards } from '~/components'
import { WorkProps } from '~/types'

import api from '~/services/api'

type GamesProps = {
  works: WorkProps,
  errorMsg?: string,
}

const Games = (props: GamesProps) => {
  
  useEffect(() => {
    if (props.errorMsg) {
      window.alert(props.errorMsg)
    }
  }, [props.errorMsg])

  return (
    <div style={{ padding: 30 }}>
      <h1>Games</h1>
      <WorkCards works={props.works} />
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await api.get('works/?gender=game')  

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
  //     title: 'Grand Theft Auto V',
  //     description:
  //       'The biggest, most dynamic and most diverse open world ever created, Grand Theft Auto V blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.',
  //     rating: 8,
  //   },
  //   {
  //     id: 2,
  //     title: 'Back 4 Blood',
  //     description:
  //       'Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity’s extinction on the line, it’s up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.',
  //     rating: 9.5,
  //   },
  //   {
  //     id: 3,
  //     title: 'Halo Infinite',
  //     description:
  //       'The Master Chief returns in Halo Infinite – the next chapter of the legendary franchise. When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring.',
  //     rating: 9,
  //   },
  // ]

  // return {
  //   props: {
  //     works: workList,
  //   },
  // }
}

export default Games
