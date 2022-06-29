import React, { useEffect, useState } from 'react'
import post from '../data/posts.json';

export default function Tranding() {
  const [postList, setPostList] = useState(<div></div>);

  useEffect(() => {
    setPostList(post.map((data, index) => {
      const list = <div className='list-item' key={index}>
        <img src={data.repImgSrc} alt="rep image" />
        <section >
          <div className='item-info'>
            <h4><b>{data.title}</b></h4>
            <p>{data.content.length > 100 ? data.content.substr(0, 100)+" ..." : data.content}</p>
            <div className='sub-info'>
              <span>{data.date}</span>
              <span className='separator'>·</span>
              <span>{data.comment.length}개의 댓글</span>
            </div>
          </div>
          <div className='user-info'>
            <span>
              <span className='by'>by</span><span className='username'>{data.username}</span>
            </span>
            <span><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>{data.heart}</span>
          </div>
        </section>
      </div>
      return list;
    }))
  }, [])
  return (
    <div className='post-list'>
      {postList}
    </div>
  )
}
