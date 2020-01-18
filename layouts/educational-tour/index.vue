<template>
    <section>
        <Navigation/>
        <br>
        <div class="row m-3">
        <div class="col-sm-12 p-5">
            <div class="card mb-4" v-for="(packages, i) in packages.data" :key="i" :title="packages.packageTitle">
                <div class="card-body">

                    <div class="row p-3">
                        <div class="col-sm-4">
                            <div>
                                <img class="w-100" style="height: 100px;" :src="packages.packagePlaces[0].google_maps.photos[0]" alt="">
                            </div>
                            <div class="row pt-2">
                                <!-- <section>
                                    <div class="col-md-7 mb-2 mb-lg-auto">
                                        <img :src="packages.packagesPictures" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-md-4">
                                        <img :src="packages.packagesPictures" class="img-fluid" alt="">
                                    </div>
                                </section> -->
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="row text-secondary">
                                <div class="col-sm-8">
                                    <h1><b>{{ packages.packageTitle }}</b></h1>
                                </div>
                                <div class="col-sm-2">
                                    <a href="" class="btn btn-outline-secondary"><span><i class="fa fa-share-alt"></i> </span> Share</a>
                                </div>
                                <div class="col-sm-2">
                                    <a href="" class="btn btn-outline-secondary"><span><i class="fa fa-heart"></i> </span>Favorite</a>
                                </div>
                            </div>
                            <div class="mt-3">
                                <span class="fa fa-user p-1"></span><b>Bandung</b>
                            </div>
                            <div class="p-2 border-bottom">
                                <p>{{ packages.packagesDescription }}</p>
                            </div>
                            <!-- <div class="mt-1"> -->
                            <div class="row ">
                                <div class="col-sm-5    ">
                                    <b>Join Before Tour it ends in</b>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <span class="btn btn-primary">
                                                1
                                            </span>
                                            <p style="font-size: 12px;" class="text-center">day</p>
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="btn btn-primary">
                                                1
                                            </span>
                                            <p style="font-size: 12px;" class="text-center">Hour</p>
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="btn btn-primary">
                                                1
                                            </span>
                                            <p style="font-size: 12px;" class="text-center">Minute</p>
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="btn btn-primary">
                                                1
                                            </span>
                                            <p style="font-size: 12px;" class="text-center">Second</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <b>18 people Joined</b><br>
                                    <div class="row">
                                        <!-- Image circle list -->
                                        <div class="col-sm-6">
                                            <div class="row">
                                                
                                                <div class="col-sm-3">
                                                    <img class="rounded-circle" style="width: 35px;height: 35px;" src="/img/4035.jpg" alt="">
                                                </div>
                                                <div class="col-sm-3">
                                                    <img class="rounded-circle" style="width: 35px;height: 35px;" src="/img/4035.jpg" alt="">
                                                </div>
                                                <div class="col-sm-3">
                                                    <img class="rounded-circle" style="width: 35px;height: 35px;" src="/img/4035.jpg" alt="">
                                                </div>
                                            </div><br>
                                            <p class="text-danger">hurry up, only for 5 seats left</p>
                                        </div>

                                        <!-- Image circle list -->
                                        <div class="col-sm-6">
                                            <p><b>18</b> / {{ packages.maxPerson }}</p>
                                            <div>
                                                <img src="" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <p class="mt-4 "><b class="text-danger">Rp.{{ $number_format(packages.totalPrice) }}</b> per person</p>
                                    <nuxt-link class="btn btn-danger w-100" :to=" '/payment?id=' + packages.id + '&type=educational'" tag="a">Join tour</nuxt-link>
                                    <nuxt-link class="text-primary float-right" tag="a" :to="{ path: '/educational-tour/' + packages.id }">see details</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </section>
</template>


<script>
import Navigation from "~/components/Navigation";
import { mapState } from "vuex";

export default {
    components: {
        Navigation
    },
    computed: {
        ...mapState(["packages"])
    }
    
}
</script>