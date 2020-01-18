import Vue from "vue";
import axios from "axios";

const search = async (q) => {
    try {
        const response = await axios({
            method: 'get',
            url: `/places/search/${q}`, 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        // const data = await axios({
        //     method: 'post',
        //     url: 'http://localhost:9999/api/v1/auth/login',
        //     data: `username=${username}&password=${password}`,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // })
        console.log(JSON.stringify(data.data))
        // $nuxt.$router.push('/')
    } catch (error) {
        console.log("error =>",error)
    }
    // return data.data
}

Vue.prototype.$places = { search }

export default {
    search
}