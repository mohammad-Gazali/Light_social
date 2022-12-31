import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { supabase } from '../../supabase/client';
import { img } from '../../assets';
import DateComponent from './DateComponent';
import BottomPostListIcons from './BottomPostListIcons';

const Post = ({ post }) => {
  const [imageURL, setImageURL] = useState('')
  useEffect(() => {
    getImage(post.image)
  }, [])
  const getImage = async (id) => {
    // fetching all the images from posts-images
    const { data } = await supabase.storage.from("posts-images").list("test", {
      offset: 0,
    })
    const name = Array.from(data).filter(item => item.id === id)[0].name
    const image = await supabase.storage.from("posts-images").getPublicUrl(`test/${name}`).data.publicUrl
    setImageURL(image)
  }

  return (
    <div className='bg-white shadow-md dark:bg-zinc-800 dark:text-white w-full rounded-lg pt-3'>
      <div className='frsc gap-2 px-3'>
        <LazyLoadImage
        src={img}
        className="w-9 h-9 object-cover rounded-full" 
        />
        <div className='fc_s'>
          <span className='font-semibold'>
            Admin  {/*//Todo: Convert to username */}
          </span>
          <DateComponent date={post.created_at} />
        </div>
      </div>
      <p className='px-3 my-3'>
        {post.content}
      </p>
      <LazyLoadImage
      src={imageURL}
      className="aspect-square object-cover w-full"
      />
      <BottomPostListIcons />
    </div>
  )
}

export default Post