import React from 'react'
import logo from '../assets'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearch } from 'react-icons/io5'

const Header = () => {
  const [toggle, setToggle] = React.useState<Boolean>(false)
  const menu = [
    {
      id : 1,
      name : 'Home',
    },
    {
      id : 2,
      name : 'Movies',
    },
    {
      id : 3,
      name : 'TV',
    },
    {
      id : 4,
      name : 'Sports',
    },
    {
      id : 5,
      name : 'News',
    },
    {
      id : 6,
      name : 'Hubs',
    }
  ]

  return (
    <div>Header
        
    </div>
  )
}

export default Header