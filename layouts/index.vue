<template>
    <section>
        <nav>
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">Edukatrip</div>
                    <ul class="nav-menu">
                        <li>
                            <a href="#" class="link ">Become a Host</a>
                        </li>
                        <li v-if="this.$auth.$state.loggedIn">
                            <nuxt-link to="/profile" tag="a" class="link fill">Profile</nuxt-link>
                        </li>
                        <li  v-if="! this.$auth.$state.loggedIn">
                            <nuxt-link to="/login" tag="a" class="link ">Login</nuxt-link>
                        </li>
                        <li  v-if="! this.$auth.$state.loggedIn">
                            <nuxt-link to="/register" tag="a" class="link fill">Register</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="banner">
            <div class="container">
                <div class="banner-text">Book Tour Package for
                    <br>
                        Educational & Leisure Experience</div>
                </div>
            </section>

            <form @submit.prevent="searchData">
                <section class="banner-form container">
                        <div class="row align-items-end">
                            <div class="form-group m-0 col-sm-5">
                                <label for="one" class="m-1 font-weight-bold">Where do you want to go?</label>
                                <input type="input" id="one" placeholder="try 'Bandung'" v-model="search" class="form-control">
                            </div>
                            <div class="form-group m-0 col-sm-5">
                                <label for="two" class="m-1 font-weight-bold">What kind of tour?</label>
                                <select id="two" class="form-control">
                                    <option value="-">Choose your type</option>
                                </select>
                            </div>
                            <div class="col form-group m-0">
                                <button class="btn btn-primary form-control" @click="searchData">Search Tour</button>
                            </div>
                        </div>
                </section>
            </form>

    <section class="educational-tour container">
        <div class="row">
            <div class="col">
                <div class="title mb-3">Educational Tour</div>
                <img
                    src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    class="img-fluid rounded"
                    alt=""></div>
                <div class="col">
                    <div class="description mb-3">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Totam unde quia deleniti hic voluptate distinctio
                        exercitationem ut at provident, quae vitae libero cumque commodi nemo sint
                        nostrum ad alias qui.</div>
                    <div class="row">
                        <div class="col">
                            <img
                                src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                class="img-fluid rounded mb-3"
                                alt="">
                                <img
                                    src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    class="img-fluid rounded"
                                    alt=""></div>
                                <div class="col">
                                    <img
                                        src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        class="img-fluid rounded mb-3"
                                        alt="">
                                        <nuxt-link to="/educational-tour" tag="a" class="btn btn-primary d-flex align-items-center justify-content-between">
                                            More Educational Tour &nbsp;<i class="material-icons">chevron_right</i>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"></div>
                    </section>

                    <section class="product-values container card mt-5 p-3">
                        <div class="row">
                            <div class="col text-center">
                                <img src="/img/value-1.png" class="img-fluid" alt="">
                                    <div class="font-weight-bold text-size-big-1 my-2">Event Reward</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis
                                        tenetur dolores adipisci? Dolores, non!</p>
                                </div>
                                <div class="col text-center">
                                    <img src="/img/value-2.png" class="img-fluid" alt="">
                                        <div class="font-weight-bold text-size-big-1 my-2">Fixed Price</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis</p>
                                    </div>
                                    <div class="col text-center">
                                        <img src="/img/value-3.png" class="img-fluid" alt="">
                                            <div class="font-weight-bold text-size-big-1 my-2">Easy Booking</div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section class="create-your-trip container mt-5">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="h2 title">Create your trip</div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo debitis
                                                laudantium reprehenderit non ex sapiente, adipisci quos. Optio ipsam beatae
                                                porro, asperiores error magnam delectus quos accusamus. Doloremque, optio?</p>
                                            <nuxt-link
                                                to="/create-own-trip" tag="a"
                                                class="btn btn-primary d-inline-flex align-items-center justify-content-between">Create Your Own Trip &nbsp;
                                                <i class="material-icons">chevron_right</i>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </section>

                                <section class="testimonials container mt-5">
                                    <div class="row">
                                        <div class="card col p-3">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi ullam
                                                eligendi minima aliquam cupiditate, odit accusamus sed ad fugit consequatur
                                                quaerat ipsa odio fuga est aperiam quae placeat quo?</p>
                                            <div class="row">
                                                <div class="col-sm-2 text-center">
                                                    <img src="/img/persons/profile-1.png" alt=""></div>
                                                    <div class="col">
                                                        <div class="text-size-small-1 font-weight-bold">Samantha R. Joseph</div>
                                                        <div class="text-size-small-2">@samantha</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card col p-3">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi ullam
                                                    eligendi minima aliquam cupiditate, odit accusamus sed ad fugit consequatur
                                                    quaerat ipsa odio fuga est aperiam quae placeat quo?</p>
                                                <div class="row">
                                                    <div class="col-2 text-center">
                                                        <img src="/img/persons/profile-1.png" alt=""></div>
                                                        <div class="col">
                                                            <div class="text-size-small-1 font-weight-bold">Samantha R. Joseph</div>
                                                            <div class="text-size-small-2">@samantha</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card col p-3">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi ullam
                                                        eligendi minima aliquam cupiditate, odit accusamus sed ad fugit consequatur
                                                        quaerat ipsa odio fuga est aperiam quae placeat quo?</p>
                                                    <div class="row">
                                                        <div class="col-sm-2 text-center">
                                                            <img src="/img/persons/profile-1.png" alt=""></div>
                                                            <div class="col">
                                                                <div class="text-size-small-1 font-weight-bold">Samantha R. Joseph</div>
                                                                <div class="text-size-small-2">@samantha</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section class="limited-for-several-years container mt-5">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="title">Limited Tour for Several Days</div>
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <div class="description">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                            elit. Itaque soluta ad veritatis cupiditate odit minus corporis qui voluptatum
                                                            nam, provident eos est vero suscipit velit? Ipsam temporibus voluptate neque?
                                                            Minima?</div>
                                                    </div>
                                                </div>
                                                <div class="row mt-5">
                                                    <div class="card col-sm-6">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                                            class="img-fluid rounded mb-3"
                                                            alt="">
                                                            <div class="row m-0 p-3">
                                                                <div class="col-sm-6">
                                                                    <div class="col font-weight-bold">Registration Ends In :</div>
                                                                    <div class="d-flex">
                                                                        <div class="col d-flex flex-column">
                                                                            <div class="card">2</div>
                                                                            <div>Days</div>
                                                                        </div>
                                                                        <div class="col d-flex flex-column">
                                                                            <div class="card">2</div>
                                                                            <div>Days</div>
                                                                        </div>
                                                                        <div class="col d-flex flex-column">
                                                                            <div class="card">2</div>
                                                                            <div>Days</div>
                                                                        </div>
                                                                        <div class="col d-flex flex-column">
                                                                            <div class="card">2</div>
                                                                            <div>Days</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card col-sm-6">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1529220543625-9a82e357511e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                                                class="img-fluid rounded mb-3"
                                                                alt="">
                                                                <div class="row m-0 p-3">
                                                                    <div class="col-sm-6">
                                                                        <div class="col font-weight-bold">Registration Ends In :</div>
                                                                        <div class="d-flex">
                                                                            <div class="col d-flex flex-column">
                                                                                <div class="card">2</div>
                                                                                <div>Days</div>
                                                                            </div>
                                                                            <div class="col d-flex flex-column">
                                                                                <div class="card">2</div>
                                                                                <div>Days</div>
                                                                            </div>
                                                                            <div class="col d-flex flex-column">
                                                                                <div class="card">2</div>
                                                                                <div>Days</div>
                                                                            </div>
                                                                            <div class="col d-flex flex-column">
                                                                                <div class="card">2</div>
                                                                                <div>Days</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    <footer>
                                                        <div class="container">
                                                            <div class="row">
                                                                <section class="logo col-sm-2 text-size-big-2 font-weight-bold">
                                                                    <nuxt-link tag="a" to="/">Edukatrip</nuxt-link>
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
                                                                            <a href="#">
                                                                                <i class="fa fa-instagram fa-2x"></i>
                                                                            </a>
                                                                            <a href="#">
                                                                                <i class="fa fa-twitter fa-2x"></i>
                                                                            </a>
                                                                            <a href="#">
                                                                                <i class="fa fa-facebook fa-2x"></i>
                                                                            </a>
                                                                            <a href="#">
                                                                                <i class="fa fa-globe fa-2x"></i>
                                                                            </a>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </footer>
                                                        <!-- {{coba()}} -->
    </section>
</template>

<script>
    export default {
        // middleware: 'authenticated',
        head: {
            bodyAttrs: {
                id: "pageHome"
            }
        },
        scrollToTop: true,
        data() {
            return {
                search: ''
            }
        },
        methods: {
            searchData () {
                this.$router.push('/search/'+this.search)
            },
        }
    }
</script>