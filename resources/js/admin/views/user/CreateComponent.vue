<template>
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.meta.title }}</h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name: 'index'}">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name: 'client'}">All Clients</router-link></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Create Client</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row">
            <div class="col-xl-12">
                <div class="card task-card">
                    <div class="card-body">
                        <form id="form1" enctype="multipart/form-data">
                            <div class="row row-sm mg-b-10 first-parent">
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Name</label>
                                    <input type="text" v-model="user.name" class="form-control" placeholder="Enter Full Name" name="name">
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Email address</label>
                                    <input type="email" v-model="user.email" class="form-control" placeholder="Enter Email" name="email">
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Password</label>
                                    <input type="password" v-model="user.password" class="form-control" placeholder="Enter Password" name="password">
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Country</label>
                                    <input type="text" v-model="user.country" class="form-control" placeholder="Enter country" name="country">
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Contact Number</label>
                                    <input type="text" v-model="user.phone" class="form-control" placeholder="Enter Contact Number" name="phone">
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <label for="">Enter Wallet Address</label>
                                    <input type="text" v-model="user.wallet_address" class="form-control" placeholder="Enter Wallet Address" name="wallet_address">
                                </div>
                                <!-- <div class="col-sm-12 mb-3">
                                    <div class="custom-file">
                                        <input type="file" @change="handleFileChange" class="custom-file-input" id="customFile1" name="profile">
                                        <label class="custom-file-label" for="customFile">Upload Profile Image
                                            <small v-if="image"> (  {{ image.name }}  ) </small>
                                        </label>

                                    </div>
                                </div> -->

                            </div>

                            <div class="row">
                                <div class="col-md-12 col-sm-12 mt-5 mg-t-10">
                                    <button type="button" class="btn btn-primary float-right"
                                        @click="store">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>
<style>
.first-parent label{
    font-weight: bold;
}
</style>
<script>

    export default {
        data() {
            return {
                user: {
                    gender: '',
                    name: '',
                    email: '',
                    password: '',
                    gender: '',
                    phone: '',
                    address: '',
                    country: '',
                    wallet_address: '',
                },
                image: '',
                cv: '',
                baseUrl : window.axios.defaults.baseURL,

            }
        },
        components: {

        },
        mounted() {
        },
        methods: {
            handleFileChange(e){
                this.image = e.target.files[0];
                console.log(e.target.files[0]);
            },
            handleCVChange(e){
                this.cv = e.target.files[0];
            },
            store(){
                let formData = new FormData();

                formData.append("name", this.user.name);
                formData.append("email", this.user.email);
                formData.append("password", this.user.password);
                formData.append("phone", this.user.phone);
                formData.append("country", this.user.country);
                formData.append("image", this.image);
                formData.append("wallet_address", this.user.wallet_address);
                axios.post(`/user`, formData)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        this.user = {
                            gender: '',
                            name: '',
                            email: '',
                            password: '',
                            gender: '',
                            phone: '',
                            address: '',
                            country: '',
                        };
                        // this.fetchJob();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            }
        },
        watch: {}
    }
</script>
