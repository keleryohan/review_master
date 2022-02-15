import React from 'react'
import { useEffect } from 'react'

import { WorkCards } from '~/components'
import { WorkData, WorkFilters } from '~/types'
import { api } from '~/services/api'
import styles from './styles.module.css'
import WorkFilter from '~/components/WorkFilter'

const WorkList = props => {
  //const [workList, setWorkList] = React.useState<WorkData[]>([])
  const [workList, setWorkList] = React.useState<any>([{}])

  useEffect(() => {
    const auxSetWork = async () => {
      const filters = { gender: props.workGender }
      setWorkList([
        { id: 1, title: 'title1', description: 'description1' },
        { id: 2, title: 'title2', description: 'description2' },
        { id: 3, title: 'title3', description: 'description3' },
      ])
      //setWorkList(await api.getWorks(filters))
    }
    auxSetWork()
  }, [props.workGender])

  return (
    <div className={styles.mainContainer}>
      <WorkFilter setWorkList={setWorkList} gender={props.workGender} />
      <h1 className={styles.title}>{props.pageTitle}</h1>
      <WorkCards works={workList} />
    </div>
  )
}

export default WorkList
