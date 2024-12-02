import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { axiosInstance } from '../../config/axiosInstance'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {

    const [profile,isLoading,error]=useFetch('/user/profile')
    const navigate = useNavigate()

    console.log('profile===',profile);

    const userLogout = async()=>{
        try {
            const response = await axiosInstance({method: "put",url: '/user/logout' });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div>profile page</div>
        <button onClick={userLogout}>logout</button>
    </div>
  )
}
