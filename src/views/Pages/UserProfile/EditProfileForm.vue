<template>
  <card>
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Edit profile </h3>
      </b-col>

    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">User information</h6>

      <div class="pl-lg-4">
        <b-row>
          
          <b-col md="12">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col md="12">
            <base-input
              type="text"
              label="Name"
              placeholder="Name"
              v-model="user.Name"
            >
            </base-input>
          </b-col>
          
        </b-row>
      </div>
      <hr class="my-4">

  
    </b-form>
    <button class="btn-info btn col-md-12" @click="setDataUpdate()">Edit Profile</button>
  </card>
</template>
<script>
import axios from 'axios'

  const head_form = {headers: {'Content-Type': 'multipart/form-data'}}

export default {
  created() {
          axios.defaults.baseURL = 'http://localhost/obat/cuser/'
      },
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
       
        email: localStorage.getItem('login-email'),
        postalCode: '',
        Name: localStorage.getItem('login-name'),
        aboutMe: `Hello.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    setDataUpdate : function(){
            var arr_post = {
              email : this.user.email,
              password : '123456',
              id : 1,
              name : this.user.Name,
  
            }

            axios.post("edit_profil",arr_post,head_form)
              .then(response => (
                  // alert('Berhasil ditambahkan')
                  alert("Berhasil diedit")
              ))
              .catch(error => alert(error));
        }
  }
};
</script>
<style></style>
