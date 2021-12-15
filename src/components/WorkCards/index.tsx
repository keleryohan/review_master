import React from 'react'
import { useRouter } from 'next/router'
import { WorkData } from '~/types'
import styles from './styles.module.css'

const WorkCards = ({ works }: WorkData[] | any) => {
  const router = useRouter()

  return (
    <div className={styles.mainContainer}>
      {works.map(work => {
        return (
          <div
            key={work.name}
            className={styles.work}
            onClick={() => router.push(router.pathname + '/' + work.id)}
          >
            <h2 className={styles.title}>{work.name}</h2>
            <h3 className={styles.description}>{work.description}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default WorkCards
