import Vue from "vue";

const lagi = async (username, password) => {
    try {
        const data = await $nuxt.$axios({
            method: 'post',
            url: '/auth/login', 
            data: `username=${username}&password=${password}`,
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
        $nuxt.$router.push('/')
    } catch (error) {
        console.log("error =>",error)
    }
}

// Vue.prototype.$auth = { lagi }