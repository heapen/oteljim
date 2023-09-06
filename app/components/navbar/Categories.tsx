'use client'
import {FaUmbrellaBeach} from 'react-icons/fa'
import {FaHotel} from 'react-icons/fa'
import {GiCampingTent} from 'react-icons/Gi'
import {GiVillage} from 'react-icons/Gi'
import CategoriesItems from './CategoriesItems'
import { useSearchParams } from 'next/navigation'

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
    const params = useSearchParams();
    const urlItems = params?.get('category')
    
  return (
    <div className='categories'>
      {
        categories.map((cat, i) => (
            <CategoriesItems
                key={i}
                name={cat.name}
                icon={cat.icon}
                selected={urlItems == cat.name}
            />
        ))
      }
    </div>
  )
}

export default Categories
