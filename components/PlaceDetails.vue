<template>
    <section>
        <br>
        <div class="mb-5 mb-md-3"></div>
    <div class="container pt-5">
        <div class="row pt-5"><br><br>
            <div class="col-md-4">
                <div>
                    <img class="w-100" style="height: 250px;" :src="places.placeThumbnail" :alt="places.placeName">
                </div><br><br>
                <b>Tour Timeline</b>
                <br>
                <p>08.00 - 08.30</p>
                <p>Meeting Point at <b>Edukatrip Office 1</b><i class="fa fa-paper-plane ml-2 text-primary"></i></p>
                <br><br>
                <b>Tour Track</b><br>
                <div class="rounded-circle">
                    <img class="w-100" style="height: 150px;" src="/img/1.png" alt="">
                </div>

            </div>
            

            <!-- Right Column -->
            <div class="col-md-8">
                <div class="row">
                    <div class="col-sm-8">
                        <h3><b>{{ places.placeName }}</b></h3>
                    </div>
                    <div class="col-sm-2">
                        <a class="btn btn-outline-secondary" href=""><i class="fa fa-share"></i> Share</a>
                    </div>

                    <div class="col-sm-2">
                        <a class="btn btn-outline-secondary" href=""><i class="fa fa-heart"></i> Favorites</a>

                    </div>
                </div>
                <h5><i class="fa fa-map-marker"></i> Bandung</h5>
                <p>{{ places.placeDescription }}</p>
                <div class="row">
                    <div class="col-sm-6">
                        <p><b>12 Hours Tour</b></p>
                    </div>
                    <div class="col-sm-6">
                        <p class="float-right"><i class="fa fa-star text-danger"></i><b>{{ places.google_maps.rating }}</b> ({{ places.google_maps.ratings_total }}) </p>
                    </div>
                </div>
                <hr>
                <h3>
                    <b>What you'll get</b>
                </h3>
                <div class="container-fluid">
                    <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
                        <div class="carousel-inner row w-100 mx-auto" role="listbox">
                            <div class="carousel-item col-md-3  active">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 1" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=1" alt="slide 1">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 3" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=2" alt="slide 2">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 4" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=3" alt="slide 3">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 5" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=4" alt="slide 4">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 6" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=5" alt="slide 5">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 7" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=6" alt="slide 6">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3 ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 8" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=7" alt="slide 7">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-3  ">
                                <div class="panel panel-default">
                                    <div class="panel-thumbnail">
                                        <a href="#" title="image 2" class="thumb">
                                            <img class="img-fluid mx-auto d-block" src="https://via.placeholder.com/600x400?text=8" alt="slide 8">
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <!-- End of facilities Section -->
                <hr>

                <div class="row">
                    <div class="col-sm-6">
                        <img src="/img/1.png" class="w-100" style="height: 150px;" alt="">
                    </div>
                    <div class="col-sm-6">
                        <p>13.00 - 15.00</p>
                        <b>Farhm House Lembang Bandung</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat cum molestias numquam nesciunt.</p>
                        <a class="text-secondary" href="">View Detail</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <section class="logo col-lg-2 text-size-big-2 font-weight-bold">
                    <a href="#">Edukatrip</a>
                </section>
                <section class="col-lg-4 menu">
                    <div class="menu-items">
                        <div class="row">
                            <div class="col-lg-4 d-flex flex-column">
                                <a href="#" class="item">Home</a>
                                <a href="#" class="item">Discovery</a>
                                <a href="#" class="item">Photos</a>
                                <a href="#" class="item">Contact</a>
                            </div>
                            <div class="col-lg-4 d-flex flex-column">
                                <a href="#" class="item">About</a>
                                <a href="#" class="item">Helps</a>
                                <a href="#" class="item">Terms</a>
                                <a href="#" class="item">Guidelines</a>
                            </div>
                            <div class="col-lg-4 d-flex flex-column">
                                <a href="#" class="item">Testimonials</a>
                                <a href="#" class="item">Advertise</a>
                                <a href="#" class="item">Integrations</a>
                                <a href="#" class="item">Careers</a>
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
        <div class="container p-2 col-sm-12 d-flex justify-content-between align-items-center">
            <div class="">
                <a class="text-dark" href="#"><b>{{ places.placeName }}</b></a>
                <p><i class="fa fa-star text-danger"></i><b>{{ places.google_maps.rating }}</b> ({{ places.google_maps.ratings_total }}) </p>

            </div>
            <ul class="d-flex align-items-center justify-content-between p-2 align-items-center">
                <li class="mr-3">
                    <div class="text-orange"><b>Rp.{{ this.$number_format(places.placePrice) }}</b><br>per person</div>
                </li>
                <li>
                    <nuxt-link tag="a" :to="'/payment?id=' + places.id  + '&type=byplaces'" class="col-sm-12 btn btn-orange text-light btn-icon btn-icon-left d-flex align-items-center">
                        <span>Book Tour</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>

    </section>
</template>

<style scoped  id="jsbin-css">
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


<script>
export default {
    props: ["places"],
}
</script>