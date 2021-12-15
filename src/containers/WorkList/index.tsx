import React from 'react'
import { useEffect } from 'react'

import { WorkCards } from '~/components'
import { WorkData, WorkFilters } from '~/types'
import { api } from '~/services/api'
import styles from './styles.module.css'
import WorkFilter from '~/components/WorkFilter'

const WorkList = ( props ) => {
  const [workList, setWorkList] = React.useState<WorkData[]>([])

  useEffect( () => {
    const auxSetWork = async () => {
      const filters = { gender : props.workGender } 
      setWorkList(await api.getWorks( filters ))
  }
  auxSetWork();
    
  },[props.workGender] )


  return (
    <div className={styles.mainContainer}>
      <WorkFilter setWorkList={setWorkList} gender={props.workGender} />
      <h1 className={styles.title}>{props.pageTitle}</h1>
      <WorkCards works={workList} />
    </div>
  )
}

export default WorkList
