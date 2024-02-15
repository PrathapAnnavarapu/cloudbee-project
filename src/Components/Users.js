import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const apiStatusContants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS'
}

const Users = () => {

    const navigate = useNavigate()
    // const [apiStatus, setApiStatus] = useState(apiStatusContants.initial)
    const [userData, setUsereData] = useState([])

    const OnClicKItem = (username) => {
        navigate(`/UserListItemDetails/${username}`)
    }


    const getUsersList = async () => {
        const ListsUrl = ' https://api.github.com/users'
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
            setUsereData(data)

        }
        if (response.status === 400) {
            console.log(data.message)
        }
    }

    useEffect(() => {
        getUsersList()
    }, [])



    return (
        <div className='users'>
            <ul >
                {userData.map((each) =>
                    <li className='list-item' onClick={() => OnClicKItem(each.login)}>
                        <img src={each.avatar_url} alt='avatar' />
                        <div className='user-details'>
                            <h1> Login : {each.login}</h1>
                            <h2>{each.site_admin}</h2>
                            <h2> Type : {each.type}</h2>
                            <h2>node_id : {each.node_id}</h2>
                        </div>                        
                    </li>
                )}

            </ul>
        </div>

    )
}


export default Users