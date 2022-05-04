import React from 'react'
import {HiEmojiSad} from 'react-icons/hi'
import './pageNotFound.css'
const PageNotFound = () => {
  return (
    <div className='error-main'>
        <HiEmojiSad size={500} color="grey"/>
        <p className='error-para'>
            404 <br/>
            Page Not Found!!!
        </p>
    </div>
  )
}

export default PageNotFound