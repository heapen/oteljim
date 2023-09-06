'use client'
import {FaUmbrellaBeach} from 'react-icons/fa'
import {FaHotel} from 'react-icons/fa'
import {GiCampingTent} from 'react-icons/Gi'
import {GiVillage} from 'react-icons/Gi'

export const categories = [
    {
        name : 'Tatil-Yerleri',
        icon : FaUmbrellaBeach
    },
    {
        name : 'Kamp',
        icon : GiCampingTent
    },
    {
        name : 'Otel',
        icon : FaHotel
    },
    {
        name : 'Villa',
        icon : GiVillage
    },
]

const Categories = () => {
  return (
    <div>
      categories 
    </div>
  )
}

export default Categories
