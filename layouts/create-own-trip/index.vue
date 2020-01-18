<template>
  <section>
    <Navigation />
    <client-only>
      <br>
      <div class="mb-5 mb-md-3"></div>
      <div class="container  pt-5">
        <div class="trip">
          <h1>Create your own tour</h1>
          <h5 class="pt-3 mt-2">Tour Time Line</h5>
          <p>08.00 - 08.30</p>
          <p>Meeting Point at <b>Edukatrip Office 1</b><span class="ml-3 btn  btn-outline-dark fa fa-plane"></span></p>
          <p>Jalan Banda No.13245 Bandung</p>
          <div class="row mt-2"  v-for="(data, i) in packages" :key="i" :title="data">
            <div class="col-sm-5">
              <img class="col-sm-12"
                src="https://www.gfa-cert.com/wp-content/uploads/2016/12/xfsc_pefc.jpg.pagespeed.ic.83UsABsHqi.webp"
                style="height: 100%;border-radius:10px;border:1px solid black;background-size:cover;" alt="">
            </div>
            <div class="col-sm ml-4 pl-1 text-justify">
              <p>09.30 - 12.00 </p>
              <h4>{{ data.placeName }}</h4>
              <p>{{ data.placeDescription }}</p>
              <!-- <h5 class="mt-5 pt-5"><a href class="sticky-bottom text-dark">
                              View Details
                          </a></h5> -->
            </div>
          </div>


          <div class="row mt-4">
            <div class="col-sm-5">

              <div class="mainflip">
                <div class="frontside">
                  <div class="card new-tour">
                    <div class="w-100 card-body text-center">
                      <!-- <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></p> -->
                      <a class="btn btn-white" data-toggle="modal" data-target="#myModal"><i
                          class="btn btn-primary rounded-circle fa fa-plus"></i>
                        <h2 class="card-title"><span class="w-50"> Add More </span></h2>
                        <h2 class="card-title"><span class="w-50"> Destination </span></h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div id="myModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header row m-0">
                    <div class="col row align-items-center">
                      <h5 class="modal-title col-lg mb-3 mb-md-auto"><b>Choose Next Destination</b></h5>
                      <select class="form-control col-lg ml-3 mb-2" name="" id="">
                        <option value=""><i class="fa fa-sort-amount-down"> </i> Sort By</option>
                      </select>
                      <div class="form-control col-lg ml-3">
                        <i class="fa fa-search"></i>
                        <input type="text" style="border:0px;" placeholder="Find Destination">
                      </div>
                    </div>
                    <button type="button" class="col-2 col-md-1 close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">

                    <div class="row  mb-3" v-for="(place, i) in places.data" :key="i" :title="place.placeName">
                      <div class="col-sm-3">
                        <img class="w-100" style="height: 150px;" :src="place.google_maps.photos[0]" alt="">
                      </div>
                      <div class="col-sm-9">
                        <h5><b>{{  place.placeName }}</b></h5>
                        <p> <b>30 Min Travel Time</b> From Farm house</p>
                        <p>{{ place.placeDescription }}</p>
                        <div class="row">
                          <div class="col-sm-6">
                            <p><b class="text-danger">Rp. {{ $number_format(place.placePrice) }}</b> Per Person</p>
                          </div>
                          <div class="col-sm-6">
                            <a @click.prevent="chooseDestination(place.id)" role="button" class="float-right btn btn-outline-primary" data-toggle="modal">Choose Destination</a>
                            <!-- <a :href="'#'+ place.id" role="button" class="float-right btn btn-outline-primary" data-toggle="modal">Choose Destination</a> -->
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div v-for="(place, i) in places.data" :key="i" :id="place.id" class="modal modal-child"
              data-backdrop-limit="1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
              data-modal-parent="#myModal">
              <div class="modal-dialog modal-lg">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title float-left"><b>{{ place.placeName }}</b></h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-sm-4">
                        <img class="w-100" style="height: 150px;" :src="place.placeThumbnail" alt="">
                        <b>30 Min travel time</b>
                        <p>From Farm House Lembang</p>
                      </div>
                      <div class="col-sm-8">
                        <div class="row">
                          <div class="col-sm-6">
                            <p>Start Time</p>
                            <div class="row">
                              <div class="col-sm-6">
                                <select class="form-control" name="" id="">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                  <option value="16">16</option>
                                  <option value="17">17</option>
                                  <option value="18">18</option>
                                  <option value="19">19</option>
                                  <option value="20">20</option>
                                  <option value="21">21</option>
                                  <option value="22">22</option>
                                  <option value="23">23</option>
                                  <option value="24">24</option>

                                </select>
                              </div>
                              <div class="col-sm-6">
                                <select class="form-control" name="" id="">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                  <option value="16">16</option>
                                  <option value="17">17</option>
                                  <option value="18">18</option>
                                  <option value="19">19</option>
                                  <option value="20">20</option>
                                  <option value="21">21</option>
                                  <option value="22">22</option>
                                  <option value="23">23</option>
                                  <option value="24">24</option>
                                  <option value="25">25</option>
                                  <option value="26">26</option>
                                  <option value="27">27</option>
                                  <option value="28">28</option>
                                  <option value="29">29</option>
                                  <option value="30">30</option>
                                  <option value="31">31</option>
                                  <option value="32">32</option>
                                  <option value="33">33</option>
                                  <option value="34">34</option>
                                  <option value="35">35</option>
                                  <option value="36">36</option>
                                  <option value="37">37</option>
                                  <option value="38">38</option>
                                  <option value="39">39</option>
                                  <option value="40">40</option>
                                  <option value="41">41</option>
                                  <option value="42">42</option>
                                  <option value="43">43</option>
                                  <option value="44">44</option>
                                  <option value="45">45</option>
                                  <option value="46">46</option>
                                  <option value="47">47</option>
                                  <option value="48">48</option>
                                  <option value="49">49</option>
                                  <option value="50">50</option>
                                  <option value="51">51</option>
                                  <option value="52">52</option>
                                  <option value="53">53</option>
                                  <option value="54">54</option>
                                  <option value="55">55</option>
                                  <option value="56">56</option>
                                  <option value="57">57</option>
                                  <option value="58">58</option>
                                  <option value="59">59</option>
                                  <option value="60">60</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <p>End Time</p>
                            <div class="row">
                              <div class="col-sm-6">
                                <select class="form-control" name="" id="">
                                  <option value="">12</option>
                                  <option value="">11</option>
                                </select>
                              </div>
                              <div class="col-sm-6">
                                <select class="form-control" name="" id="">
                                  <option value="">12</option>
                                  <option value="">11</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div>
                          <p>Note</p>
                          <textarea class="form-control" name="" id="" cols="10" rows="6"></textarea>
                          <br>
                          <input type="button" class="float-right btn btn-primary" value="Add to Timeline">
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div class="col-sm ml-4 pl-1 text-justify">

            </div>
          </div>

        </div>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <section class="logo col-lg-2 text-size-big-2 font-weight-bold">
              <a href="/">Edukatrip</a>
            </section>
            <section class="col-lg-4 menu">
              <div class="menu-items">
                <div class="row">
                  <div class="col-lg-4 d-flex flex-column">
                    <a href="/" class="item">Home</a>
                    <a href="/" class="item">Discovery</a>
                    <a href="/" class="item">Photos</a>
                    <a href="/" class="item">Contact</a>
                  </div>
                  <div class="col-lg-4 d-flex flex-column">
                    <a href="/" class="item">About</a>
                    <a href="/" class="item">Helps</a>
                    <a href="/" class="item">Terms</a>
                    <a href="/" class="item">Guidelines</a>
                  </div>
                  <div class="col-lg-4 d-flex flex-column">
                    <a href="/" class="item">Testimonials</a>
                    <a href="/" class="item">Advertise</a>
                    <a href="/" class="item">Integrations</a>
                    <a href="/" class="item">Careers</a>
                  </div>
                </div>
              </div>
            </section>
            <section class="col-lg-4 subscribe">
              <form action="#">
                <input type="email" placeholder="Email">
                <button type="submit">
                  <i class="material-icons">near_me</i>
                </button>
              </form>
              <p class="mt-2">Stay in touch with us for the freshest products!</p>
            </section>
            <section class="col-xl-2 socmed">
              <div class="row justify-content-around">
                <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
                <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
                <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fa fa-globe fa-2x"></i></a>
              </div>
            </section>
          </div>
        </div>
      </footer>
      <div class="pricetag">
        <div class="container col-sm-12 d-flex justify-content-between align-items-center">
          <div class="">
            <a class="text-dark" href="#"><b>Total Cart</b></a><br>
            <p class="text-orange"><b>Rp.{{ totalPrice }}</b></p>
          </div>
          <ul class="d-flex justify-content-between p-2 align-items-center">
            <li>
              <a href="#" class="col-sm-12 btn btn-white btn-icon btn-icon-left d-flex align-items-center">
              </a>
            </li>
            <li>
              <a @click.prevent="createTour" class="col-sm-12 btn btn-orange text-light btn-icon btn-icon-left d-flex align-items-center">
                <span>Create Tour</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </client-only>
  </section>
</template>

<style scoped>
  .modal-body div p {
    overflow: hidden;
  }

  .first-content {
    width: 100%;
    float: left;
  }

  .second-content {
    width: 100%;
    float: right;
  }

  .container .trip {
    padding-bottom: -1400px;
  }

  .container .trip ul {
    list-style: none;
  }

  .container .trip ul li {
    padding: 20px;
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

  .new-tour {
    border-radius: 21px;
    border: 5px dotted rgb(50, 110, 210);
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

  .btn-orange {
    background: orangered;
  }

  .pricetag {
    width: 100%;
    background: whitesmoke;
    bottom: -10px;
    position: fixed;
  }

  .pricetag ul li {
    list-style: none;
  }

  .box-footer {
    height: 140px;
    position: relative;
    background: blue;
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
    color: orangered;
  }

</style>
<style id='jsbin-css' scoped>
  .modal-body div p {
    overflow: hidden;
  }

  .first-content {
    width: 100%;
    float: left;
  }

  .second-content {
    width: 100%;
    float: right;
  }

</style>

<script>
  import Navigation from "~/components/Navigation.vue";
  import {
    mapState
  } from "vuex";

  export default {
    components: {
      Navigation
    },
    computed: {
      ...mapState(["places"])
    },
    data(){
        return {
            packages: [],
            totalPrice: 0
        }
    },
    methods: {
        chooseDestination(placeID) {
          // this.packages = 'sa'
            // console.log(this.packages)
            var packages = this.places.data.filter(function(data) {
              return data.id == placeID
            })
            this.packages = [...this.packages,...packages]
            this.totalPrice += parseInt(packages[0].placePrice)


        },
        createTour() {
          console.log(JSON.stringify(this.packages))
        }
    }
  }

</script>
