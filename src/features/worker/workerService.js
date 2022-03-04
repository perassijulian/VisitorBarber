import axios from 'axios';

const API_URL = '/user/worker';

//Register user
const registerWorker = async (userData, workerData) => {
    const workerToPost = {
        user: userData._id,
        birthday: workerData.birthday
    };

    const response = await axios.post(API_URL, workerToPost);

    return response.data;
}

const workerService = {
    registerWorker,
} 

export default workerService;