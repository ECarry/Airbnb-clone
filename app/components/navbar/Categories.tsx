'use client'

import { TbBeach, TbUfo } from "react-icons/tb"
import { GiCampingTent, GiCastle, GiDesert, GiSpookyHouse } from 'react-icons/gi'
import { FaSwimmingPool } from 'react-icons/fa'
import Container from "../Container"
import CategoryBox from './CategoryBox'

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    descript: 'This property is close to the beach!'
  },
  {
    label: 'OMG!',
    icon: TbUfo,
    descript: ''
  },
  {
    label: 'Design',
    icon: GiSpookyHouse,
    descript: ''
  },
  {
    label: 'Castles',
    icon: GiCastle,
    descript: ''
  },
  {
    label: 'Camping',
    icon: GiCampingTent,
    descript: ''
  },
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    descript: ''
  }
]

const Categories = () => {
  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
