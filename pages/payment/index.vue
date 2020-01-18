<template>
    <nuxt/>
</template>

<script>
import axios from "axios";
import moment from "moment";
import PlaceDetailsVue from '../../components/PlaceDetails.vue';



export default {
    async fetch({ query, store, error, req, params, app, redirect }) {
        

        var { type, id } = query
        var coll = 'asd'
        if (type == 'educational')
        {
            var coll = 'packages'
            try {
                
                var response = await axios({
                    method: "GET",
                    url: `${process.env.apiV1}/${coll}/${id}`,
                })
                
                // response.data.packageDateFormat = moment(response.data.packageDate._seconds).format('dddd, Do MMMM YYYY')

                // payment_data = {

                // }
        
                store.commit('payment/SET_DATA',response.data)
            } catch (e) {
                console.log(e)
                // console.log(coll, type)   
                return error({ statusCode: 404, message: 'Page Not Found' })
            }
        }
        else
        {
            var coll = 'places'
            try {
                
                var response = await axios({
                    method: "GET",
                    url: `${process.env.apiV1}/${coll}/${id}`,
                })
                console.log(response.data)
                // response.data.packageDateFormat = moment(response.data.placesDate).format('dddd, Do MMMM YYYY')

                // payment_data = {
                    
                // }
        
                store.commit('payment/SET_DATA',response.data)
            } catch (e) {
                console.log(e)
                // console.log(coll, type)   
                return error({ statusCode: 404, message: 'Page Not Found' })
            }
        }


        if(typeof query.pay != 'undefined')
        {
            var { method } = req
            var { id, type } = req.query

            if ( method.toLowerCase() != 'post' )
                return redirect(`/payment?id=${id}&type=${type}`)
            
            var totalPerson = (typeof req.body.totalPerson == 'undefined') ? 1 : req.body.totalPerson
            var { customerID, customerCardName } = req.body
            var { totalPrice, packageTitle, id  } = response.data
            var { userEmail, userFirstName, userLastName } = app.$auth.$state.user


            var customerName = customerCardName.split(' ')

            var gross_amount = totalPrice * totalPerson

            var transaction_details = {
                    "gross_amount": gross_amount
                }
            
            var item_details = [{
                id: id,
                price: totalPrice,
                quantity: totalPerson,
                name: packageTitle
            }]

            var customer_details = {
                first_name: customerName.slice(0,1)[0],
                last_name: customerName.slice(1).join(' '),
                email: userEmail,
                phone: (typeof userPhone !== 'undefined') ? userPhone : '',
                billing_address: {
                    first_name: customerName.slice(0,1)[0],
                    last_name: customerName.slice(1).join(' '),
                    email: userEmail,
                    phone: (typeof userPhone !== 'undefined') ? userPhone : '',
                },
                shipping_address: {
                    first_name: customerName.slice(0,1)[0],
                    last_name: customerName.slice(1).join(' '),
                    email: userEmail,
                    phone: (typeof userPhone !== 'undefined') ? userPhone : '',
                }
            }

            var payments = {
                midtrans: {
                    transaction_details: {...transaction_details},
                    item_details: [...item_details],
                    customer_details: {...customer_details}
                },
                user: app.$auth.$state.user,
                packages: response.data,
                totalPerson,
                totalPrice,
                customerCardName,
                customerCardNumber: customerID
            }

            // console.log(payments)
            const pay = await axios.post(`${process.env.apiV1}/payment`,payments)
            // console.log(app.$auth.$state.user,response.data)
            // console.log()
            console.log(pay.data)
            store.commit('payment/SET_PAYMENTS',pay.data)
                
        }


        
    },
    data() {
        return {
            src: `<script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="${process.env.MIDTRANS_CLIENT_KEY}"><\/script>`
        }
    },
    middleware: ['authenticated','payment'],
    layout: 'payment/index',
}
</script>