import axios from 'axios';


// Get user details
const getUserDetails = async (id) => {
    const userInfo = JSON.parse(localStorage.getItem('user'))

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    return data;
}


// Update user profile
const updateUserProfile = async (user) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)
    return data;
}


const userService = {
    getUserDetails,
    updateUserProfile
}


export default userService;