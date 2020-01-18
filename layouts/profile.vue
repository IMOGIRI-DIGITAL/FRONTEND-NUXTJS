<template>
  <section>
    <Navigation />
    <br />
    <div class="container pt-5">
      <div class="row">
        <div class="col-sm-3">
          <!--left col-->
          <div class="card">
            <div class="card-body p-4">
              <div class="text-center">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  class=" rounded-circle img-thumbnail w-25 float-left" alt="avatar">
              </div>
              <hr><br> <span class="ml-3"><b>{{ user.userFirstName + ' ' + user.userLastName }}</b></span>
              <br><br><br>


              <div class="text-dark">
                <div class="float-left">Edukatrip Points </div>
                <div class="float-right"><b>999</b></div>
              </div><br>
              <div class="text-dark">
                <div class="float-left">My Rewards</div>
                <div class="float-right"><b>2</b></div>
              </div>
              <br>

              <hr>
              <a class="btn btn-outline-primary w-100" href="">Become a host</a>
              <br><br>
              <a class="text-primary" href="">Learn More About become a host</a>
              <br>
              <hr>
              <div>
                <b>My Trip</b><br><br>
                <a class="text-primary" href="">Waiting for your payment </a><br><br>
                <nuxt-link tag="a" class="text-primary" :to="{ path: '/payment/my-history' }">Transaction History
                </nuxt-link><br><br>
                <a class="text-primary" href="">Wishlist</a><br><br>
              </div>
              <hr>
              <div>
                <b>My Profile</b><br><br>
                <a class="text-primary" href="">Edit Profile</a><br><br>
                <a class="text-primary" href="">Setting</a><br><br>

              </div>

            </div>
          </div>
        </div>
        <!--/col-3-->
        <div class="col-sm-9">
          <h3><b> </b></h3>
          <div class="card">
            <ul class="nav nav-tabs p-3">
              <li class="active p-2"><a class="text-primary" data-toggle="tab" href="#home">Profile</a></li>
              <li class="p-2"><a class="text-primary" data-toggle="tab" href="#messages">Payment</a></li>
              <li class="p-2"><a class="text-primary" data-toggle="tab" href="#settings">Notifications</a></li>
            </ul>

            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="home">
                  <hr>
                  <form class="form" action="##" method="post" id="registrationForm">
                    <!-- <div class="form-group">
                      <h4>Complete your profile (1/3)</h4>
                      <div class="row">
                        <div class="col-sm-6">
                          <form action="" method="" @submit.prevent="changeName">
                            <div class="row">
                              <div class="col-sm-8">
                                <label for="">Fullname</label>
                                <input type="text" class="form-control" placeholder="Full name" id="fullname"
                                  v-model="fullname">
                              </div>
                              <div class="col-sm-1 pt-2"><br>
                                <input class="btn btn-primary" type="submit" name="submit" id="">
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="col-sm-6">
                          <form action="" method="">
                            <div class="row">
                              <div class="col-sm-8">
                                <label for="">Phone number</label>
                                <input type="text" class="form-control" placeholder="Phone number">

                              </div>
                              <div class="col-sm-1 pt-2"><br>
                                <input class="btn btn-primary" type="submit" name="submit" id="">
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div> -->
                    <hr>
                    <!-- <div class="form-group"> -->
                    <div class="row">
                      <div class="col-sm-5">
                        <img class="w-25 float-left rounded-circle"
                          src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="">
                        <span class="p-4 mt-2"
                          style="font-size: 20px;">{{ user.userFirstName + ' ' + user.userLastName }}</span>
                        <br><br><br><br>
                        <div class="text-dark">
                          <div class="float-left">Birth Date </div>
                          <div class="text-right"><b>09 Juni 2000</b></div>
                        </div>
                        <br>
                        <div class="text-dark">
                          <div class="float-left">Gender </div>
                          <div class="text-right"><b>Male</b></div>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary w-100">Change Password</button>
                      </div>
                      <div class="col-sm-7 border-left">
                        <h5>Contact</h5><br>

                        <div class="row" v-if="toggleEmail == false">
                          <p class="col-sm-4">Email</p>
                          <span class="col-sm-5">{{ user.userEmail }}
                            <i class="ml-2 fa fa-check-circle text-success"></i>
                            <i></i>
                          </span>
                          <span>
                            <a class="col-sm-3" @click.prevent="toggle('email')" href="javascript:void(0)">edit <i
                                class="fa fa-pencil"></i></a>
                          </span>
                        </div>

                        <div class="row" v-if="toggleEmail != false">
                          <p class="col-sm-4">Email</p>
                          <span class="col-sm-5">
                            <div class="form-group">
                              <div class="input-group mb-3">
                                <!-- <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div> -->
                                <input type="text" class="form-control" placeholder="email" aria-label="email"
                                  aria-describedby="basic-addon1" :value="user.userEmail">
                              </div>
                            </div>
                          </span>
                          <span>
                            <a class="col-sm-3" @click.prevent="toggle('email')" href="javascript:void(0)">cancel</a>
                          </span>
                        </div>


                        <div class="row">
                          <p class="col-sm-4">Phone number</p><span class="col-sm-5">013123125412 <i
                              class="ml-2 fa fa-check-circle text-success"></i></span><span><a class="col-sm-3"
                              href="">edit <i class="fa fa-pencil"></i></a></span>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>

              </div>
              <!--/tab-pane-->
            </div>
            <!--/tab-content-->
          </div>

        </div>
      </div>
      <!--/col-9-->
    </div>
    <Footer />
  </section>
</template>

<script>
  import Navigation from "~/components/Navigation.vue";
  import Footer from "~/components/Footer.vue";
  export default {
    components: {
      Navigation,
      Footer
    },
    data() {
      return {
        user: this.$auth.$state.user,
        fullname: '',
        toggleEmail: false,
      }
    },
    methods: {
      changeName() {
        console.log(this.fullname)
      },
      toggle(method) {
        if (method == 'email')
          this.toggleEmail = !this.toggleEmail
      }
    }
  }

</script>
