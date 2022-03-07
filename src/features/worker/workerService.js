import axios from 'axios';

const API_URL = '/worker';

//Register worker
const registerWorker = async (workerData) => {
        const response = await axios.post(API_URL + '/signup', workerData);

    return response.data;
}

//Get worker info
const getWorkerInfo = async (userId) => {
    const response = await axios.get(API_URL + '/my-account');
    console.log('getWorkerInfo', response.data.length)
    for (let i = 0; i<= response.data.length; i++) {
        console.log('getWorkerInfo for')

        if (userId === response.data[i].user) {
            console.log('getWorkerInfo return', response.data[i])
            return response.data[i]
        } else {
            console.log('Worker info has not been found')
            throw new Error('Worker info has not been found')
        }

    }
}

const workerService = {
    registerWorker,
    getWorkerInfo,
} 

export default workerService;