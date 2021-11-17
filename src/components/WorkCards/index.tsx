import React from 'react'
import { useRouter } from 'next/router'
import { WorkProps } from '~/types'
import styles from './styles.module.css'

const WorkCards = ({ works }: WorkProps[] | any) => {
  const router = useRouter()

  return (
    <div className={styles.mainContainer}>
      {works.map(work => {
        return (
          <div
            key={work}
            className={styles.work}
            onClick={() => router.push(router.pathname + '/' + work.id)}
          >
            <h2>{work.title}</h2>
            <h3>{work.description}</h3>
            <h3>{work.rating} </h3>
          </div>
        )
      })}
    </div>
  )
}

export default WorkCards
