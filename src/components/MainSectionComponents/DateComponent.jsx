import React from 'react'
import { TooltipRight } from '../common/Tooltips';


const DateComponent = ({ date }) => {
  const handleDate = (date) => {
    const myDate = new Date(date);
    let [year, month, day, hour, minute, second] = [myDate.getFullYear(), myDate.getMonth(), myDate.getDay(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds()]
    const state = hour > 12 ? "PM" : "AM";
    hour -= 12;
    const result1 = `${year}/${month}/${day} ${hour}:${minute}:${second}:${state}`
    const result2 = `${year}/${month}/${day}`
    return [result1, result2]
  }
  return (
    <span className='group relative fc'>
      <div className='cursor-pointer text-slate-600 dark:text-slate-400 font-bold text-sm'>
        {handleDate(date)[1]}
      </div>
      <TooltipRight content={handleDate(date)[0]} more='group-hover:visible group-hover:opacity-100 absolute ml-[230px] w-[151px]' />
    </span>
  )
}

export default DateComponent