import { AiOutlineSearch } from 'react-icons/ai';

const NavSearch = () => {

  return (
    <form className='NavSearch -fc relative dark:text-white' method='GET'>
        <input className='focus:outline-none hidden lg:block placeholder-gray-500 dark:placeholder-gray-400 dark:bg-zinc-600/50 rounded-full bg-gray-200 py-2 lg:pl-9 pl-3 pr-2' placeholder='search in light' type="text" />
        <span className='w-10 h-10 lg:fc hidden cursor-pointer bg-transparent rounded-full absolute left-0 text-xl text-gray-500 dark:text-gray-400'>
          <AiOutlineSearch />
        </span>
        <span className='SearchIconSmallScreen cursor-pointer w-10 h-10 lg:hidden fc text-xl text-gray-500 dark:text-gray-400 dark:bg-zinc-600/50 rounded-full bg-gray-200'>
          <AiOutlineSearch className='pointer-events-none' />
        </span>
    </form>
  )
}

export default NavSearch