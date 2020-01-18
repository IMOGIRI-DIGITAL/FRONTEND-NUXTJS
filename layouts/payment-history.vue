<template>
    <section>
        <Navigation/>

        <div id="payment" class="payment-history">
        <div class="container">
            <div class="payment-background"></div>
            <div class="payment-wrapper-outer">
                <div class="payment-page-title">Transaction History</div>

                <div class="payment-wrapper payment-history-filter p-4 mb-4">
                    <form class="filter-top row">
                        <div class="col-3">
                            <select class="form-control">
                                <option>Sort</option>
                            </select>
                        </div>
                        <div class="col-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="material-icons">search</i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Search by University, Places, City" aria-label="Search by University, Places, City" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </form>
                    <div class="filter-bottom d-flex align-items-center mt-4">
                        <div class="filter-category-title mr-3 font-weight-bold">Filter Status</div>
                        <div class="filter-category-items d-flex flex-wrap">
                            <a class="item active">All</a>
                            <a class="item">Waiting Your Payment</a>
                            <a class="item">Payment Processed</a>
                            <a class="item">Trip Paid</a>
                            <a class="item">Trip Finished</a>
                            <a class="item">Trip Canceled</a>
                        </div>
                    </div>
                </div>

                <div class="payment-cards">

                    <div class="payment-wrapper payment-card">
                        <div class="row m-0">
                            <div class="col-5 border-right-1px-grey p-3">
                                <div class="mb-2">09 October 2019</div>
                                <div class="row">
                                    <div class="col">
                                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-9 d-flex flex-column justify-content-around">
                                        <div class="font-weight-bold text-size-big-3">Institut Teknologi Bandung</div>
                                        <small class="d-flex justify-content-between">
                                            <span>10 Nov 2019 - 12 Nov 2019</span>
                                            <a href="#">See Details</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 border-right-1px-grey p-3">
                                <div class="mb-2">
                                    <span class="mr-2">Status :</span>
                                    <span class="text-success text-size-normal font-weight-bold">Trip Paid</span>
                                </div>
                                <small>Booking Code</small>
                                <div class="text-size-normal font-weight-bold">SDH3A7D976F796AV</div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="p-3">
                                    <div class="mb-2">Total Payment</div>
                                    <div class="text-color-secondary text-size-big-3 font-weight-bold mb-2">Rp 630.000.000,00-</div>
                                    <a href="#" class="btn btn-primary btn-block">Re-Order</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="payment-wrapper payment-card">
                        <div class="row m-0">
                            <div class="col-5 border-right-1px-grey p-3">
                                <div class="mb-2">09 October 2019</div>
                                <div class="row">
                                    <div class="col">
                                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-9 d-flex flex-column justify-content-around">
                                        <div class="font-weight-bold text-size-big-3">Institut Teknologi Bandung</div>
                                        <small class="d-flex justify-content-between">
                                            <span>10 Nov 2019 - 12 Nov 2019</span>
                                            <a href="#">See Details</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 border-right-1px-grey p-3">
                                <div class="mb-2">
                                    <span class="mr-2">Status :</span>
                                    <span class="text-success text-size-normal font-weight-bold">Trip Paid</span>
                                </div>
                                <small>Booking Code</small>
                                <div class="text-size-normal font-weight-bold">SDH3A7D976F796AV</div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="p-3">
                                    <div class="mb-2">Total Payment</div>
                                    <div class="text-color-secondary text-size-big-3 font-weight-bold mb-2">Rp 630.000.000,00-</div>
                                    <a href="#" class="btn btn-primary btn-block">Re-Order</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="payment-wrapper payment-card">
                        <div class="row m-0">
                            <div class="col-5 border-right-1px-grey p-3">
                                <div class="mb-2">09 October 2019</div>
                                <div class="row">
                                    <div class="col">
                                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-9 d-flex flex-column justify-content-around">
                                        <div class="font-weight-bold text-size-big-3">Institut Teknologi Bandung</div>
                                        <small class="d-flex justify-content-between">
                                            <span>10 Nov 2019 - 12 Nov 2019</span>
                                            <a href="#">See Details</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 border-right-1px-grey p-3">
                                <div class="mb-2">
                                    <span class="mr-2">Status :</span>
                                    <span class="text-success text-size-normal font-weight-bold">Trip Paid</span>
                                </div>
                                <small>Booking Code</small>
                                <div class="text-size-normal font-weight-bold">SDH3A7D976F796AV</div>
                            </div>
                            <div class="col-3 p-0">
                                <div class="p-3">
                                    <div class="mb-2">Total Payment</div>
                                    <div class="text-color-secondary text-size-big-3 font-weight-bold mb-2">Rp 630.000.000,00-</div>
                                    <a href="#" class="btn btn-primary btn-block">Re-Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="row">
                <section class="logo col-sm-2 text-size-big-2 font-weight-bold">
                    <a href="#">Edukatrip</a>
                </section>
                <section class="col-sm-4 menu">
                    <div class="menu-items">
                        <div class="row">
                            <div class="col-sm-4 d-flex flex-column">
                                <a href="#" class="item">Home</a>
                                <a href="#" class="item">Discovery</a>
                                <a href="#" class="item">Photos</a>
                                <a href="#" class="item">Contact</a>
                            </div>
                            <div class="col-sm-4 d-flex flex-column">
                                <a href="#" class="item">About</a>
                                <a href="#" class="item">Helps</a>
                                <a href="#" class="item">Terms</a>
                                <a href="#" class="item">Guidelines</a>
                            </div>
                            <div class="col-sm-4 d-flex flex-column">
                                <a href="#" class="item">Testimonials</a>
                                <a href="#" class="item">Advertise</a>
                                <a href="#" class="item">Integrations</a>
                                <a href="#" class="item">Careers</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="col-sm-4 subscribe">
                    <form action="#">
                        <input type="email" placeholder="Email">
                        <button type="submit">
                            <i class="material-icons">near_me</i>
                        </button>
                    </form>
                    <p class="mt-2">Stay in touch with us for the freshest products!</p>
                </section>
                <section class="col-sm-2 socmed">
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

    </section>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
    components: {
        Navigation
    }
}
</script>