import React from 'react'
import LeftSide from './LeftSide'
import Post from './Post'
import RightSide from './RightSide'
const MainPost = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-24'>
            <div>
                <LeftSide />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <RightSide />
            </div>
        </div>
    )
}

export default MainPost