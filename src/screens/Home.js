import React from 'react'
import Auth from '../layout/Auth'

const arr = [1,2,3,4,5,6,7]
function Home(props) {
    
    const Data = arr.map((data,key) => {
        return <li key={key}>{data}</li>
    })
    return (
        <div>
            <Auth >
                <p>Home</p>
                <ul >{Data}</ul>
            </Auth>
        </div>
    )
}


export default Home

