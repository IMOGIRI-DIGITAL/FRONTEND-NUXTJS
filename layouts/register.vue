<template>
    <div class="float-right mt-2 mr-5">
        <form class="form-signin" method="post" @submit.prevent="register">
            <h2 class="form-signin-heading w-75 justify-content-center"><b> Start your journey With <span class="text-orange">Edukatrip</span></b></h2>
            <!-- <h5><b>Register</b></h5> -->
            <!-- <% if ( successes.length ) {%>
            <% successes = successes[0] %> 
                <span class="sticky-top pb-5">
                    <p>Verification Code has been sent to <b><%= successes.email %> </b></p>
                    <p>Please check your email</p>
                </span>
            <% } %>
            <input type="hidden" id="csrf">
            <h2 class="form-signin-heading w-75 justify-content-center"><b> Start your journey With <span class="text-orange">Edukatrip</span></b></h2>

            <% if ( errors.length ) { %>
                <% errors = errors[0] %> 
                    <% for( let error in errors ) { %>
                        <div class='alert alert-danger'>
                            <%= errors[error] %>
                        </div>
                    <% } %>
                <% } %>

             -->
             <section v-if="isError">
                <div class="alert alert-danger" v-for="(errMessage, i) in errMessage" :key="i">
                    {{ errMessage }}
                </div>
             </section>
             <section v-if="isSuccess">
                <div class="alert alert-success" v-for="(succMessage, i) in succMessage" :key="i">
                    {{ succMessage }}
                </div>
             </section>

            <div>
                <label><b>Fisrt Name</b></label>
                <input type="text" class="form-control" v-model="userFirstName" placeholder="First Name" required="" autofocus=""/>
            </div>
            <div class='mt-3'>
                <label><b>Last Name</b></label>
                <input type="text" class="form-control" v-model="userLastName" placeholder="Last Name" required=""/>
            </div>
            <div class='mt-3'>
                <label><b>Email</b></label>
                <input type="email" class="form-control" v-model="email" placeholder="email" required=""/>
            </div>
            <div class='mt-3'>
                <label><b>Username</b></label>
                <input type="text" class="form-control" v-model="username" placeholder="Email Address" required=""/>
            </div>
            <div class='mt-3'>
                <label><b>Password</b></label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" required=""/>
            </div>
            <div class='mt-3'>
                <label><b>Confirm Password</b></label>
                <input type="password" class="form-control" v-model="c_password" placeholder="Confirm Password" required=""/>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button> <br>
            <br>
            <!-- <a class="btn btn-primary btn-google" href="#"><span class="float-left fa fa-google"></span> Register with Google</a><br>
            <a class="btn btn-primary btn-facebook" href="#"><span class="float-left  fa fa-facebook"></span> Register with Facebook</a> -->
            <p>Have Account ? <router-link to="/login" tag="a">Login</router-link></p>

        </form>
    </div>
</template>



<style scoped>

    /* @import "bourbon"; */

    .forgot {
        float: right;
        text-align: right;
        top: 0px;
        color: grey;
        padding-bottom: 20px;
    }

    .text-grey {
        color: grey;
    }

    .wrapper {
        float: right;
        padding: 10px;
        margin-right: 20px;
    }

    .btn-google {
        color: black;
        background: white;
        width: 320px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
    }

    .btn-google:hover {
        color: white;
        background: rgb(0, 0, 0);
        width: 320px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
    }

    .btn-facebook {
        color: white;
        background: rgba(0, 77, 221, 0.897);
        width: 320px;
        margin-bottom: 10px;
        transition: 0.1s ease-in-out;
    }

    .btn-facebook:hover {
        background: white;
        color: rgba(0, 77, 221, 0.897)
    }

    .form-signin {
        border-radius: 20px;
        max-width: 450px;
        padding: 60px;
        margin: 0px auto;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .form-signin-heading,
    .checkbox {
        margin-bottom: 30px;
        font-size: 25px;
    }

    .checkbox {
        font-weight: normal;
    }

    .form-control {
        width: 320px;
        position: relative;
        font-size: 14px;
        height: auto;
        padding: 5px;
    }

    input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    input[type="password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .content {
        top: -280px;
        position: relative;
        z-index: 1;
    }

    .trip-section {

        margin-left: 100px;
        padding: 10px;
    }

    .rating {
        padding-top: 5%;
        padding-left: 3%;
    }

    .price {
        padding-top: 70px;
        padding-left: 30%;
    }

    .desc-tour {
        padding-right: 10px;
        font-size: 15px;
        padding-top: 20px;
        padding-left: 20px;
    }

    .preview-tour {
        border-left: 1px solid gray;
    }

    .date-from {
        margin: 12px;
        padding: 12px;
        font-size: 12px;
        border-radius: 5px;
        border: 1px solid grey;
    }

    .radio-btn {
        border: 1px solid darkblue;
    }

    /* .has-search{
   
  } */
    .has-search .form-control {
        padding-left: 2.375rem;
        margin: -5px;
        box-shadow: 3px 4px 34px 6px rgba(0, 0, 0, 0.33);

    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #aaa;
    }

    .btn-tour {
        width: 150px;
    }

    .btn-show {
        margin-left: 30px;
        float: right;
        text-align: right;
        position: inherit;
        font-size: 14px;
    }

    .bg-white {
        background: whitesmoke !important;
    }

    .box-footer {
        background: #304ffe;
        height: 140px;
    }

    .price-range {
        width: 125px;
        border: 1px solid grey;
        border-radius: 20px;
        font-size: 14px;
        text-align: left;
        padding: 6px;

    }

    .date-range {
        border: 0px;
        width: 110px;
    }

    .text-white {
        color: white;
    }

    .text-orange {
        color: #ffd800;
    }
</style>



<script>
export default {
    head: {
        bodyAttrs: {
            class: 'auth-body'
        }
    },
    data() {
      return {
          username: '',
          password: '',
          c_password: '',
          userFirstName: '',
          userLastName: '',
          email: '',
          isError: false,
          errMessage: [],
          isSuccess: false,
          succMessage: []
      }  
    },
    methods: {
        async validate()  {
            var userFirstName = this.userFirstName
            var userLastName = this.userLastName
            var username = this.username
            var password = this.password
            var c_password = this.c_password
            var userEmail = this.email


            // console.log({ username, password, c_password, userFirstName, userLastName, email })

            try {
                const response = await this.$axios.post('/auth/register', {
                    username, password, c_password, userFirstName, userLastName, userEmail, endpointCallback: process.env.baseUrl + '/account/verify'
                })
                
                var { username, password } = this
                this.isError = false
                this.isSuccess = true
                this.succMessage.push('please check your email')
            

            } catch (error) {
                this.isError = true
                this.errMessage.push(error.response.data.message)
            }
        },
        async login() {
            var { username, password } = this
            
            try {
                const response = await this.$auth.loginWith('local',{
                    data: {
                        username, password
                    }
                })



                this.isError=false
                this.errorMsg=[]

                console.log(this.$store)

                
            } catch (error) {
                
                const { data, status } = error.response
                if ( status == 401 )
                {
                    this.isError = true
                    this.errorMsg = []
                    this.errorMsg.push(data.message)
                }
            }
        },
        register() {
            this.validate()
        }
    }
}
</script>