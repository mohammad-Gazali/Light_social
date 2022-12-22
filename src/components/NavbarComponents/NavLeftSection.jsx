import AppLogo from './AppLogo'
import NavSearch from './NavSearch'
import { BsArrowLeft } from 'react-icons/bs'

const NavLeftSection = () => {
  return (
    <div className="-fr_c gap-3">
		  <NavSearch />
		  <AppLogo />
      <BsArrowLeft className='ArrowIcon text-xl text-gray-500 dark:text-gray-400 cursor-pointer hidden' />
	  </div>
  )
}

export default NavLeftSection