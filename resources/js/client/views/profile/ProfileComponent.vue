<template>
  <div>
    <section class="banner"></section>
    <section class="project_summary">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <h2 class="heading text-center mt-5 mb-5">Profile</h2>
        </div>
        <div class="card-wrapper" v-if="user">
          <div class="form">
            <form id="form1">
              <div class="row row-sm mg-b-10 first-parent">
                <div class="form-group col-md-12 text-center d-flex" style="justify-content: center">
                    <div class="profileHolder">
                        <img @click="$refs.profile_pic.click()" :src="profile">
                        <input accept="image/*" ref="profile_pic" type="file"
                            @change="handleProfilePicture" style="display:none;">
                        <button @click="$refs.profile_pic.click()" type="button"><i class="fa fa-pen"></i></button>
                    </div>
                </div>

                <div class="form-group col-md-12">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="name"
                    v-model="user.first_name"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="name"
                    v-model="user.last_name"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>

                <div class="form-group col-md-12">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    :disabled="true"
                    v-model="user.email"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>

                <div class="form-group col-md-12">
                  <label> Password:</label>
                  <input
                    type="password"
                    name="password"
                    v-model="user.password"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>
                <div class="form-group col-md-12">
                  <label> Wallet Address:</label>
                  <input
                    type="text"
                    name="wallet_address"
                    v-model="user.wallet_address"
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </div>

                  <div class="col-12 form_button mt-2 text-right">
                      <button
                      type="button"
                      @click="updateProfile"
                      class="main-btn btn-gold px-5 py-3"
                      id=""
                      >Submit</button>
                  </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.profileHolder{
    width: 150px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
.profileHolder button{
    position: absolute;
    bottom: 0px;
    right: 10px;
    background: #585858;
    color: black;
    padding: 10px;
    border-radius: 50%

}
.profileHolder button i{
    color: #fff;
}
.profileHolder img{
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
}
.bold-h {
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {
      user: undefined,
      profile: "",
      types: {
        img: ["image/jpeg", "image/jpg", "image/png", "image/bmp", "image/gif"],
      },
    };
  },
  mounted() {
    this.me();
  },
  methods: {
    updateProfile() {
      this.user.image = this.profile;
      axios.post("update", this.user).then(({ data }) => {
        this.$toastr.success(data.message, "Success !");
        this.me();
      });
    },
    me() {
      axios.get("profile").then(({ data }) => {
        this.user = data;
        this.profile = user.image;
      });
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async handleFileChange(e, elem) {
      let file = e.target.files[0];
      console.log(file);
      let types = this.types;
      if (types.img.includes(file.type)) {
        let result = await this.toBase64(file).catch((e) => Error(e));
        if (result instanceof Error) {
          console.log("Error: ", result.message);
          return;
        } else this[elem] = result;
      }
    },
    async handleProfilePicture(e) {
      await this.handleFileChange(e, "profile");
      // this.user.image = e.target.files[0];
      // e.target.files[0]
    },
  },
  watch: {},
};
</script>

<style>
</style>
