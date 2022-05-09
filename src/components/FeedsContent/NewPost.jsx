import React, { useState } from 'react'
import person from '../../images/person.png'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {BsHeartFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {AiTwotoneEdit} from 'react-icons/ai'

const NewPost = () => {

  const [isOptionsOpen, setIsOptionsOpen] = useState(true)
  const showOptions = ()=>{
     setIsOptionsOpen(!isOptionsOpen)
  }
  return (
    <div className='new_post_container'>
      <div className='new-post-heading'>
        <span><img className='post-image' src={person}/></span>
        <div className='new-post-title'>
          <h4>CodewarsFX</h4>
          <div>
            <BiDotsVerticalRounded className='vertical-dots' onClick={showOptions}/>
            {isOptionsOpen && 
            <div className='post-options'>
                <span><MdDelete className='delete-post'/> <p>Delete post</p></span>
                <span><AiTwotoneEdit className='edit-post'/> <p>Edit Post</p></span>
            </div>
            }
          </div>
        </div>
      </div>
      <div className='post-content'>
        <p className='post-text'>Since I started job searching keeping track of jobs I have applied to has been very hard. 
          A friend introduced me to tracker and it has been great ever since. Happy to announce I just got my first role as a software developer... thanks tracker
          Since I started job searching keeping track of jobs I have applied to has been very hard. 
          A friend introduced me to tracker and it has been
        </p>
        <span className='post-love-count'><BsHeartFill className='love-icon'/> 25</span>
      </div>
      
    </div>
    
  )
}

export default NewPost