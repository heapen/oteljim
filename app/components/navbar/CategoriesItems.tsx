'use client'
import {IconType} from 'react-icons'
import {useRouter} from 'next/navigation';
type CategoriesItemsProps = {
    name: string;
    icon: IconType;
    selected: boolean
}
const CategoriesItems:React.FC<CategoriesItemsProps> = ({
    name,
    icon: Icon,
    selected
}) => {
    const router = useRouter()
    const selectedClass = selected ? 'selected' : '';
  return (
    <div onClick={() => router.push(`?category=${name}`)} className={`${selectedClass} categories-items`}>
      <Icon size={20}/>
      <div className='categories-items-name'>{name}</div>
    </div>
  )
}

export default CategoriesItems
