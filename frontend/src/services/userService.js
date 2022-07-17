import axios from 'axios';


// Get user details
const getUserDetails = async (id) => {
    let currentUser = JSON.parse(localStorage.getItem('user'))

    const config = {
        headers: {
            Authorization: `Bearer ${currentUser.token}`,
        },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)
    return data;

}

// Update user profile
const updateUserProfile = async (user) => {
    let currentUser = JSON.parse(localStorage.getItem('user'))
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`,
        },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)
    return data


}


const userService = {
    getUserDetails,
    updateUserProfile
}


export default userService;