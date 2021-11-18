<template>
	<header class="header">

		<router-link :to="{ name: 'index'}" class="logo">
			<span>
				<img src="/assets/img/logo.png" alt=""></span> 
			<span>
				<img src="/assets/img/side-logo.png" alt=""></span>
		</router-link>

		<nav class="nav">
			<router-link :to="{ name: 'index' }" >Buy Crypto</router-link>
			<!-- Protected Route Start -->
			<router-link v-if="user" :to="{ name: 'project.create' }" >submit your project</router-link>
			<a v-else :href="`${base_url}/login`" >submit your project</a>
			<!-- Protected Route End -->

			<router-link :to="{ name: 'index' }" >wallet guide</router-link>
			<router-link :to="{ name: 'index' }" >earn</router-link>

			<div class="nav-item dropdown loginIdBtn">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action">
					<img :src="user.image" class="avatar mr-2"/>{{ user.name }} <b class="caret"></b></a>
				<div class="dropdown-menu">
					<router-link :to="{ name: 'profile' }" class="dropdown-item">Profile</router-link>
					<router-link :to="{ name: 'project' }" class="dropdown-item">My Projects</router-link>
					<a href="#" class="dropdown-item">My Transactions</a>
					<div class="dropdown-divider"></div>
					<a :href="`${base_url}/logout`" class="dropdown-item">Logout</a>
				</div>
			</div>
			<!-- <Fragment v-if="!user">
				<a class="main-btn btn-white" :href="`${base_url}/login`" >Login</a>
				<a class="main-btn btn-gold" :href="`${base_url}/register`" >Register</a>
			</Fragment>
			<Fragment v-else>
				<a :href="`${base_url}/logout`" >Logout</a>
				<a href="javascript:;" >{{ user.name }}</a>
			</Fragment> -->
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
        components: { NotificationsComponent, Fragment },
    }
</script>
