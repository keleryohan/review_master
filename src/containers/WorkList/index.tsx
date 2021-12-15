import React from 'react'

import { WorkCards } from '~/components'
import { WorkGender, WorkData } from '~/types'
import { api } from '~/services/api'
import styles from './styles.module.css'

const WorkList = ({ pageTitle, workGender }: { pageTitle: string; workGender: WorkGender }) => {
  const [workList, setWorkList] = React.useState<WorkData[]>([])

  const getWorkList = React.useCallback(
    async () => setWorkList(await api.getWorks(workGender)),
    [workGender]
  )

  React.useEffect(() => {
    getWorkList()
  }, [getWorkList])

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <WorkCards works={workList} />
    </div>
  )
}

export default WorkList
