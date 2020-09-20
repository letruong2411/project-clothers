import axios from 'axios';
import * as Config from '../constants/Configs'

const callAPI = (endpoints, method = "GET", body) => {
    return axios({
        method: method,
        url: `${Config.API_ULR}/${endpoints}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}

export default callAPI