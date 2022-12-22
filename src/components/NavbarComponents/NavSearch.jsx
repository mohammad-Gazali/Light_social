import { AiOutlineSearch } from 'react-icons/ai';

const NavSearch = () => {
  return (
    <form className='NavSearch -fc relative dark:text-white' method='GET'>
        <input className='transition-all focus:outline-none hidden lg:block placeholder-gray-500 dark:placeholder-gray-400 dark:bg-zinc-600/50 rounded-full bg-gray-200 py-2 pl-9 pr-2' placeholder='search in light' type="text" />
        <span className='w-10 h-10 fc dark:lg:bg-transparent cursor-pointer lg:bg-transparent bg-gray-200 dark:bg-zinc-600/50 rounded-full absolute left-0 text-xl text-gray-500 dark:text-gray-400'>
            <AiOutlineSearch />
        </span>
    </form>
  )
}

export default NavSearch