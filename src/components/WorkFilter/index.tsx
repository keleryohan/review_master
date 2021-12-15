import { useState } from 'react'
import api from '~/services/api'
import Select from "react-select";
import styles from './styles.module.css'

const WorkFilter = (props) => {
    const options = [
        {value: "popularity", label: "Popularidade" },
        {value: "rating", label: "Nota média"}
    ]

  const [orderBy, setOrderBy] = useState(null)
  const [name, setName] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const auxSetWork = async () => {
      const filters = {
        gender: props.gender,
        name: name,
        order_by: orderBy.value,
      }
      props.setWorkList(await api.getWorks( filters ))
    }
    auxSetWork()
  }

  return (
      <div >
        <form onSubmit={handleSubmit} className={styles.filterDiv}>
            <input value={name} onChange={(e) => setName(e.target.value) } ></input>
            <Select defaultValue={orderBy} options={options} value={orderBy} onChange={setOrderBy} />

        <button type="submit"> Filtrar </button>
        </form>
    </div>
  )
}

export default WorkFilter
