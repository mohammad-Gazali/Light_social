import { useState, useEffect } from "react";
import { supabase } from "../../supabase/client";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    const { data } = await supabase.from('posts').select()  //? this fetch all posts
    setPosts(data)
  }

  return (
    <section className="mt-4 fc_s gap-10">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </section>
  )
}

export default Posts