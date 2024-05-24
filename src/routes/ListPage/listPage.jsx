import React from 'react'
import Filter from '../../components/Filter/Filter' 
import Card from '../../components/Card/Card'
import {listData} from '../../lib/dummydata'
import './listpage.scss'

const data = listData

const listPage = () => {
  return (
    <div className='listpage'>
      <div className='listContainer'>
        <div className="wrapper">
            <Filter/>
            {data.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
      </div>
      <div className='mapContainer'>
        map
      </div>
    </div>
  )
}
 
export default listPage
