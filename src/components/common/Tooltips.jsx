import React from 'react'

const TooltipBottom = ({ content, more }) => {
  return (
    <div className={`${more} invisible opacity-0 bg-zinc-900/75 dark:bg-white/75 text-white dark:text-black rounded-lg px-2 py-1 shadow-md absolute mt-20 text-sm transition-all z-10`}>
      { content }
    </div>
  )
}

export { TooltipBottom }