<template>
  <b-card no-body class="card-profile mt-4" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img style="background-color:white;" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

  

    <b-card-body style="padding-top: 16px;margin-top: 140px;">
    
      
      <div class="text-center">
        <h5 class="h3">
          {{login_name}}<span class="font-weight-light"></span>
        </h5>
        <div>
          <i class="ni education_hat mr-2"></i>{{login_email}}
        </div>

      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      login_name : localStorage.getItem('login-name'),
      login_email : localStorage.getItem('login-email'),
    };
  },
};
</script>
<style></style>
