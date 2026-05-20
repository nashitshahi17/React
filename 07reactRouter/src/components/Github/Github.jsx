import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){

    const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(() =>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    return(
        <>
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
        
        </>
    )
}

export default Github

export const githubLoaderInfo = async() => {
    const response = await fetch('https://api.github.com/users/nashitshahi17')
    return response.json()
}