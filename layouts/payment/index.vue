<template>
    <section>
        <div v-html="src"></div>
        <Navigation/>
         <br>
    <div class="mb-5 mb-md-3"></div>

    <section>
        
            
        <div id="payment" class="mb-5" v-if="typeof this.$route.query.pay == 'undefined' && typeof this.$route.query.status == 'undefined' ">
            
            <div class="container co-sm-12">
                <div class="payment-background"></div>
                <div class="payment-wrapper-outer">
                    <div class="payment-page-title">Review your booking</div>
                    
                    <div class="payment-wrapper">
                        <div class="payment-top">
                            <div class="payment-pipe-wrapper">
                                <div class="payment-pipe-item active">
                                    <div class="payment-pipe-step">1</div>
                                    <div class="payment-pipe-text">Review Book</div>
                                </div>
                                <div class="payment-pipe-item">
                                    <div class="payment-pipe-step">2</div>
                                    <div class="payment-pipe-text">Choose Payment Method</div>
                                </div>
                                <div class="payment-pipe-item">
                                    <div class="payment-pipe-step">3</div>
                                    <div class="payment-pipe-text">Receipt</div>
                                </div>
                            </div>
                        </div>
                        
                        <form :action="toAction"  method="post">
                            <div class="payment-bottom row m-0">
                                <div class="payment-bottom-left col-sm-6 p-0">
                                    <section  id="totalPerson">
                                        <h5 class="section-title"><strong>Yogyakarta Tour</strong></h5>
                                        <div class="row m-0">
                                            <div class="col-sm-5 p-0">Date of Tour</div>
                                            <div class="col-sm-7 p-0 font-weight-bold">{{ payment.packageDateFormat }}</div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-sm-5 p-0">Tour Guide</div>
                                            <div class="col-sm-7 p-0 font-weight-bold">Tour Guide A</div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-sm-5 p-0">Total Person</div>
                                            <div class="col-sm-7 p-0 font-weight-bold">
                                                <input type="number" v-model="totalPerson" value="1" @change="number_valid" v-if="!bookMySelf" name="totalPerson">
                                                <span v-else>{{ totalPerson }}</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <h5 class="section-title"><strong>Price Details</strong></h5>
                                        <div class="row m-0 ">
                                            <div class="col-sm-6 p-0">Tour Cost</div>
                                            <div class="col-sm-6 p-0 text-right">Rp.{{ payment.totalPriceFormat }}</div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-sm-6 p-0">Tax</div>
                                            <div class="col-sm-6 p-0 text-right">Included</div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-sm-6 p-0">Total</div>
                                            <div class="col-sm-6 p-0 text-right">Rp.{{ payment.totalPriceFormat }}</div>
                                        </div>
                                    </section>
                                    <section>
                                        <div class="row">
                                            <div class="col-sm-6">Cancellation Policy Applies</div>
                                            <div class="col-sm-6 text-right">
                                                <a href="#">See Details</a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div class="payment-bottom-right col-sm-6 p-0">
                                        <section>
                                            <h5 class="section-title"><strong>Customer Data</strong></h5>
                                                <div class="row mb-3">
                                                    <div class="input-group col-6 d-flex align-items-center">
                                                        <input type="radio" id="one" class="mr-2" :checked="bookMySelf == true" @change="updateBook" name="isSelf" value="true">
                                                        <label for="one" class="m-0">Book for Myself</label>
                                                    </div>
                                                    <div class="input-group col-6 d-flex align-items-center">
                                                        <input type="radio" id="two" class="mr-2" :checked="bookMySelf == false" @change="updateBook" name="isSelf"  value="false">
                                                        <label for="two" class="m-0">Book for Other</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col">
                                                        <label for="two" class="m-0">Name</label>
                                                        <input type="input" class="form-control"  v-model="customer_details.customerCardName" required name="customerCardName">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col">
                                                        <label for="two" class="m-0">Identity ID (KTP / Passport)</label>
                                                        <input type="input" class="form-control" v-model="customer_details.customerID" required name="customerID">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 d-flex justify-content-end">
                                                        <button class="btn btn-primary" >Choose Payment Method</button>
                                                    </div>
                                                </div>
                                            
                                        </section>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            
        </div>


        <!-- <client-only> -->
            <div id="payment" v-if="typeof this.$route.query.pay != 'undefined'" class="payment-process">
                <div class="container">
                    <div class="payment-background"></div>
                    <div class="payment-wrapper-outer">
                        <div class="payment-page-title">Choose Payment Method</div>
                        <div class="payment-wrapper">
                            <div class="payment-top">
                                <div class="payment-pipe-wrapper">
                                    <div class="payment-pipe-item done">
                                        <div class="payment-pipe-step">
                                            <i class="material-icons">check</i>
                                        </div>
                                        <div class="payment-pipe-text">Review Book</div>
                                    </div>
                                    <div class="payment-pipe-item active">
                                        <div class="payment-pipe-step">2</div>
                                        <div class="payment-pipe-text">Choose Payment Method</div>
                                    </div>
                                    <div class="payment-pipe-item">
                                        <div class="payment-pipe-step">3</div>
                                        <div class="payment-pipe-text">Receipt</div>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-bottom row m-0">
                            <div class="payment-bottom-left col-6 p-0">
                                    <section>
                                        <!-- <h5 class="section-title mb-5"><strong>Choose Payment Method</strong></h5> -->
                                        <div class="mb-3">
                                            <!-- <strong>Bank Transfer</strong> -->
                                        </div>
                                        <!-- <p class="mb-4 text-color-888">If you choose bank transfer, you will transfer only to bank listed below</p> -->
                                        <div class="row align-items-center mb-3">
                                            <!-- <div class="col"><img src="/img/banks/bri.png" alt="" class="img-fluid"></div>
                                            <div class="col"><img src="/img/banks/mandiri.png" alt="" class="img-fluid"></div>
                                            <div class="col"><img src="/img/banks/bni.png" alt="" class="img-fluid"></div>
                                            <div class="col"><img src="/img/banks/bca.png" alt="" class="img-fluid"></div> -->
                                        </div>
                                        <!-- <p>All bank account name is <strong>PT.Edukatrip</strong></p> -->
                                    </section>
                                </div>
                                <div class="payment-bottom-right col-6 p-0">
                                    <section>
                                        <div class="row m-0 mb-5 align-items-center">
                                            <div class="col-6 p-0">
                                                <!-- Total -->
                                            </div>
                                            <div class="col-6 p-0 text-right d-flex align-items-center justify-content-end">
                                                <!-- <span class="text-color-secondary text-size-big-1 font-weight-bold mr-1">Rp.110.000</span> -->
                                                <!-- <i class="material-icons text-color-grey text-size-normal">expand_more</i> -->
                                            </div>
                                        </div>
                                        <form @submit.prevent="" class="row m-0 mb-5 form-step-2">
                                            <input type="hidden" name="" id="snap_token" :value="payments.token">
                                            <div class="input-group row m-0 justify-content-between align-items-center pb-3  border-bottom-1px-grey">
                                                <label for="credit-card-1" class="row m-0 align-items-center">
                                                    <!-- <i class="material-icons mr-3 text-color-primary">credit_card</i> -->
                                                    <!-- <span>Saved Cards</span> -->
                                                </label>
                                                <!-- <input type="radio" name="credit-card" id="credit-card-1" class="mx-2"> -->
                                            </div>
                                            <div class="input-group row m-0 justify-content-between align-items-center py-3  border-bottom-1px-grey">
                                                <!-- <label for="credit-card-2" class="row m-0 align-items-center">
                                                    <i class="material-icons mr-3 text-color-primary">account_balance_wallet</i>
                                                    <span>Debit/Credit Cards</span>
                                                </label>
                                                <input type="radio" name="credit-card" id="credit-card-2" class="mx-2"> -->
                                            </div>
                                            <div class="input-group row m-0 justify-content-between align-items-center py-3  border-bottom-1px-grey">
                                                <!-- <label for="credit-card-3" class="row m-0 align-items-center">
                                                    <i class="material-icons mr-3 text-color-primary">account_balance</i>
                                                    <span>Bank Transfer</span>
                                                </label>
                                                <input type="radio" name="credit-card" id="credit-card-3" class="mx-2"> -->
                                            </div>
                                            <div class="input-group row m-0 justify-content-between align-items-center py-3 border-bottom-1px-grey">
                                                <!-- <label for="credit-card-4" class="row m-0 align-items-center">
                                                    <i class="material-icons mr-3 text-color-primary">shopping_basket</i>
                                                    <span>Minimarket</span>
                                                </label>
                                                <input type="radio" name="credit-card" id="credit-card-4" class="mx-2"> -->
                                            </div>
                                            <div class="col-12 mt-4 p-0 d-flex justify-content-end">
                                                <!-- <button type="submit" class="btn btn-primary">Choose</button> -->
                                            </div>
                                        </form>
                                    </section>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


    <div id="payment"  v-if="typeof this.$route.query.status != 'undefined'">
        <div class="container">
            <div class="payment-background"></div>
            <div class="payment-wrapper-outer">
                <div class="payment-page-title">Your Receipt</div>
                <div class="payment-wrapper">
                    <div class="payment-top">
                        <div class="payment-pipe-wrapper">
                            <div class="payment-pipe-item done">
                                <div class="payment-pipe-step">
                                    <i class="material-icons">check</i>
                                </div>
                                <div class="payment-pipe-text">Review Book</div>
                            </div>
                            <div class="payment-pipe-item done">
                                <div class="payment-pipe-step">
                                    <i class="material-icons">check</i>
                                </div>
                                <div class="payment-pipe-text">Choose Payment Method</div>
                            </div>
                            <div class="payment-pipe-item active">
                                <div class="payment-pipe-step">3</div>
                                <div class="payment-pipe-text">Receipt</div>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-column text-center p-5 align-items-center">
                        <div class="col-6 d-flex flex-column align-items-center justify-content-center pb-4">
                            <div class="h2" v-if="this.$route.query.status == 'success'"><strong>Payment Success</strong></div>
                            <div class="h2" v-else-if="this.$route.query.status == 'pending'"><strong>Payment Pending</strong></div>
                            <div class="h2" v-else><strong>Payment Error</strong></div>
                            <div class="my-4 col-5">
                                <img src="/img/check.png" alt="" class="img-fluid">
                            </div>
                            <nuxt-link to="/payment/my-history" class="btn btn-primary px-5 py-2">View My Receipt</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- </client-only>     -->
    </section>



    <!-- <div v-html="midtransJs"></div> -->
        
    </section>
</template>



<style scoped>
.hide{
    display: none;
}
.show {
    display: block;
}
</style>

<script>

import Navigation from "~/components/Navigation";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import qs from "qs";

export default {
    components: {
        Navigation
    },
    computed: {
        ...mapState({
            payment: state => state.payment.data,
            payments: state => state.payment.payments
        }),
        // ...mapState({
            // payments: state => state.payment.payments
        // }),
    },
    scrollToTop: true,
    data() {
        return {
            toAction: (typeof this.$route.query.pay == 'undefined') ? `${this.$route.fullPath}&pay` : `${this.$route.fullPath}`,
            id: this.$route.query.id,
            totalPerson: 1,

            customer_details: {
                customerID: '',
                customerCardName: this.$auth.$state.user.userFirstName + ' ' + this.$auth.$state.user.userLastName,
            },
            showProgress: 1,
            bookMySelf: true,
            
            src: `<script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="${process.env.MIDTRANS_CLIENT_KEY}"><\/script>`
        }
    },
    mounted() {
        if (typeof  this.$route.query.pay != 'undefined')
        {
            let nuxt = this
            var token = this.$el.querySelector('input').value
            var to = ''
            
            snap.pay(token, {
            onSuccess: function(result) {
                // console.log("SUCCESS", result);
                // console.log(this.$route
                // alert("Payment accepted \r\n"+JSON.stringify(result));
                nuxt.$router.push({ path: '/payment', query: { id: nuxt.$route.query.id, type: nuxt.$route.query.type, status: 'success' } })
            },
            onPending: function(result) {
                // console.log("Payment pending", result);
                // to = { path: '/payment', params: { id: 'ok' } }
                nuxt.$router.push({ path: '/payment', query: { id: nuxt.$route.query.id, type: nuxt.$route.query.type, status: 'pending' } })
                // console.log(this.$route)
                // alert("Payment pending \r\n"+JSON.stringify(result));
                
            },
            onError: function() {
                console.log("Payment error");
                
            }
            });
            // if (to != '')
            //     this.$router.push(to)
        }
            

    },
    methods: {
        updateBook() {
            this.bookMySelf = !this.bookMySelf
        },
        async chooseMethod () {
            var { customerID, customerCardName } = this.customer_details
            var { totalPrice, packageTitle, id  } = this.payment.data
            var { userEmail, userFirstName, userLastName } = this.$auth.$state.user

            var customerName = customerCardName.split(' ')

            var gross_amount = totalPrice * this.totalPerson

            var transaction_details = {
                    "gross_amount": gross_amount
                }
            
            var item_details = [{
                id: id,
                price: totalPrice,
                quantity: this.totalPerson,
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
                midtrans :{
                    transaction_details: {...transaction_details},
                    item_details: [...item_details],
                    customer_details: {...customer_details}
                }
            }
            try {
                var response = await axios({
                    method: 'POST',
                    url: process.env.apiV1 + '/payment',
                    data: payments
                })
                // var coba = await axios.post('http://localhost:9999/api/v1/payment',payments)

                console.log(response,'he')
            } catch (error) {
                console.log(error)
            }

            // this.toggleProgres(2)
            // this.$router.push()
            // console.log()
            // console.log(customerID, customerCardName)
        },
        number_valid() {
            if (this.totalPerson < 1 )
                this.totalPerson = 1
        },
        toggleProgres(progress) {
            this.showProgress = progress
        }
    }


    // {
    // {
    //             "transaction_details": {
    //                 "order_id": id,
    //                 "gross_amount": 10000
    //             }
    //         },
    //     "item_details": [{
    //         "id": "ITEM1",
    //         "price": 10000,
    //         "quantity": 1,
    //         "name": "Midtrans Bear",
    //     }],
    //     "customer_details": {
    //         "first_name": "John",
    //         "last_name": "Watson",
    //         "email": "test@example.com",
    //         "phone": "+628123456",
    //         "billing_address": {
    //             "first_name": "John",
    //             "last_name": "Watson",
    //             "email": "test@example.com",
    //             "phone": "081 2233 44-55",
    //             "address": "Sudirman",
    //         },
    //         "shipping_address": {
    //             "first_name": "John",
    //             "last_name": "Watson",
    //             "email": "test@example.com",
    //             "phone": "0 8128-75 7-9338",
    //             "address": "Sudirman",
    //         }
    //     },
    //     "enabled_payments": ["credit_card", "mandiri_clickpay", "cimb_clicks","bca_klikbca", "bca_klikpay", "bri_epay", "echannel", "indosat_dompetku","mandiri_ecash", "permata_va", "bca_va", "bni_va", "other_va", "gopay","kioson", "indomaret", "gci", "danamon_online"],
    //     "credit_card": {
    //         "secure": true,
    //     },
    //     "expiry": {
    //         "start_time": "2020-12-20 18:11:08 +0700",
    //         "unit": "minute",
    //         "duration": 9000
    //     },
    // }
    
}
</script>