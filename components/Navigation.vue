<template>
    <nav class="navbar fixed-top navbar-expand">
        <div class="container">
            <div class="navbar-main-toggle"><i class="material-icons">dehaze</i></div>
            <div class="navbar-left">
                <nuxt-link class="navbar-brand" to="/" tag="a">Edukatrip</nuxt-link>
            </div>
            <div class="navbar-right">
                <ul class="navbar-menu">
                    <li class="navbar-button">
                        <a href="#">Become a Host</a>
                    </li>
                    <li class="navbar-link with-icon">
                        <a href="#">
                            <i class="material-icons">local_activity</i>
                            <span>My Trip</span>
                        </a>
                    </li>
                    <li class="navbar-link icon">
                        <a href="#" id="navbarNotifDropdownButton" @click.prevent="showNotif = !showNotif">
                            <i class="material-icons">notifications</i>
                        </a>
                        <div class="navbar-notif-dropdown active" v-if="showNotif">
                            <form action="#">
                                <ul>
                                    <li>
                                        <span>Notifikasi Email</span>
                                        <span><input type="checkbox" name="notification" id="email"></span>
                                    </li>
                                    <li>
                                        <span>Notifikasi SMS</span>
                                        <span><input type="checkbox" name="notification" id="sms"></span>
                                    </li>
                                    <li>
                                        <span>Notifikasi Whatsapp</span>
                                        <span><input type="checkbox" name="notification" id="whatsapp"></span>
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-block">Simpan Perubahan</button>
                            </form>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-menu-responsive">
                    <a class="navbar-brand" href="/">Edukatrip</a>
                    <li>
                        <a href="#">
                            <i class="material-icons">person</i>
                            <span>Become a Host</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">local_activity</i>
                            <span>My Trip</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">notifications</i>
                            <span>Notifications</span>
                        </a>
                    </li>
                </ul>
                <div class="bg-overlay"></div>
                <div class="navbar-separator"></div>
                <div class="navbar-profile" v-if="this.$auth.$state.loggedIn">
                    <a href="javascript:void(0)" id="navbarProfileDropdownButton" @click.prevent="showProfileModal = !showProfileModal">
                        <span class="navbar-profile-name">{{ user.userFirstName + ' ' + user.userLastName }}</span>
                        <span class="navbar-profile-image">
                            <img src="/assets/img/persons/profile-1.png" alt="">
                        </span>
                    </a>
                    <div class="navbar-profile-dropdown active" v-if="showProfileModal">
                        <div class="navbar-profile-top">
                            <div class="navbar-profile-progress-wrapper">
                                <div class="navbar-profile-progress" style="width: 50%"></div>
                            </div>
                            <a href="#" class="navbar-profile-complete-task">
                                <span>Complete Your Profile</span>
                                <i class="material-icons">keyboard_arrow_right</i>
                            </a>
                        </div>
                        <div class="navbar-profile-bottom">
                            <ul class="navbar-profile-bottom-left">
                                <li>
                                    <a href="#">
                                        <span>Edukatrip Points</span>
                                        <span>854</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>My Rewards</span>
                                        <span>2</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="navbar-profile-bottom-separator"></div>
                            <ul class="navbar-profile-bottom-right">
                                <li><nuxt-link to="/profile" tag="a">Profile</nuxt-link></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Settings</a></li>
                                <br>
                                <li><a href="javascript:void(0)" @click="logout">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section v-else>
                    <nuxt-link tag="button" class="btn" to="/login">Login</nuxt-link>
                    <nuxt-link tag="button" class="btn" to="/register">Register</nuxt-link>
                </section>


            </div>
        </div>
    </nav>
    
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            user: this.$auth.$state.user,
            showProfileModal: false,
            showNotif: false
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout();
        },
        async users(user_id) {
            const response = await this.$axios.get('/user/'+user_id)
            console.log(this.$auth.$state)
        },
        toggleClass() { 

        }
    },
    // mounted: {
    //     ...mapState([''])
    // // }
    // created() {
    //     user(this.$auth.user.id)
    // }
}
</script>