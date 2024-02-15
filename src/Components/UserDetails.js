
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { FaLocationDot } from "react-icons/fa6";

const UserDetails = () => {
    const { username } = useParams()

    const [userDetails, setUsereDetails] = useState({})
    const [follwersList, setFollowersList] = useState([])

    const getUsersDetails = async () => {
        const ListsUrl = `https://api.github.com/users/${username}`
        const jwt = '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'
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                Accept: "application/vnd.github+json",
            },
        }
        const response = await fetch(ListsUrl, options)
        const data = await response.json()
        if (response.status === 200) {
            setUsereDetails(data)

        }
        if (response.status === 400) {
            console.log(data.message)
        }

        getFollowersList()
    }

    const getFollowersList = async() =>{
        const ListsUrl = `https://api.github.com/users/${username}/followers`
        const jwt = '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'
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                Accept: "application/vnd.github+json",
            },
        }
        const response = await fetch(ListsUrl, options)
        const data = await response.json()
        if (response.status === 200) {
            setFollowersList(data)
            console.log(data)

        }
        if (response.status === 400) {
            console.log(data.message)
        }
    }


    

    useEffect(() => {
        getUsersDetails()       
    }, [])

    return (
        <div className='userDetails-main'>
        <div className='usersDetails'>
            <img src={userDetails.avatar_url} alt='avatar' />
            <h1>{userDetails.name}</h1>
            <h3><FaLocationDot /> {userDetails.location}</h3>
            <h3><span>Followers</span>: {userDetails.followers}</h3>
            <h3><span>Following</span>: {userDetails.following}</h3>
            <h3><span>Email</span>: {userDetails.email}</h3>
            <h3><span>Company</span>: {userDetails.company}</h3>
            <h3><span>Url</span>: {userDetails.url}</h3>
            <h3><span>Public_gists</span> : {userDetails.public_gists}</h3>
            <h3><span>public_repos </span>: {userDetails.public_repos}</h3>
            <h3><span>created_at</span> :{userDetails.created_at}</h3>
        </div>
        <ul className='followers-list'>
            <h1>Followers List</h1>
            {follwersList.map((each) => 
            <li> 
                <img src={each.avatar_url} alt='avatar'/>
                <h3>{each.login}</h3>
            </li>

            )}

            </ul>
            </div>
    )
}

export default UserDetails