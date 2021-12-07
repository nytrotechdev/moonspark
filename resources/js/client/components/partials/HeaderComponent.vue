<template>
	<header class="header">

		<router-link :to="{ name: 'index'}" class="logo">
			<span>
				<img src="/assets/img/logo.png" alt=""></span> 
			<span>
				<img src="/assets/img/side-logo.png" alt=""></span>
		</router-link>

		<nav class="nav">
			<router-link :to="{ name: 'index', query: { target: 'buy_crypto' } }" >Buy Crypto</router-link>
			<!-- Protected Route Start -->
			<router-link :to="{ name: 'project.create' }" >submit your project</router-link>
			<!-- <a v-else :href="`${base_url}/login`" >submit your project</a> -->
			<!-- Protected Route End -->

			<router-link :to="{ name: 'wallet-guide' }" >wallet guide</router-link>
			<router-link :to="{ name: 'earn' }" >earn</router-link>
			<Fragment v-if="!user">
				<a class="main-btn btn-white" :href="`${base_url}/login`" >Login</a>
				<a class="main-btn btn-gold" :href="`${base_url}/register`" >Register</a>
			</Fragment>
			<Fragment v-else>
				<div class="nav-item dropdown loginIdBtn">
					<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action">
						<img :src="user.image" class="avatar mr-2"/>{{ user.name }} <b class="caret"></b></a>
					<div class="dropdown-menu">
						<router-link :to="{ name: 'profile' }" class="dropdown-item">Profile</router-link>
						<router-link :to="{ name: 'project' }" class="dropdown-item">My Projects</router-link>
						<router-link :to="{ name: 'transaction' }" class="dropdown-item">My Transactions</router-link>
						<div class="dropdown-divider"></div>
						<a :href="`${base_url}/logout`" class="dropdown-item">Logout</a>
					</div>
				</div>

			</Fragment>
		</nav>

		<div id="menu-btn" class="fas fa-bars"></div>
	</header>

</template>

<script>
	import { Fragment } from 'vue-fragment'
    import NotificationsComponent from "./NotificationsComponent";
    export default {
        data(){
            return {
                base_url: window.base_url,
                user: window.user
            }
        },
        mounted() {
			let menu = document.querySelector('#menu-btn');
			let navbar = document.querySelector('.nav');

			menu.onclick = () =>{
				menu.classList.toggle('fa-times');
				navbar.classList.toggle('active');
			}
		},
        components: { NotificationsComponent, Fragment },
    }
</script>
