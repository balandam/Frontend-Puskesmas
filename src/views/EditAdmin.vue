<template>
    <div>
      <!-- BootstrapVue Done -->
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <!-- Card stats -->
  
      </base-header>
      <card>
      <div>
        Nomor Pegawai
        <b-form-input v-model="nomor_pegawai" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Nomor Hp
        <b-form-input v-model="nomor_hp" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        nama
        <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    
  
    <b-button variant="success" v-on:click="setDataUpdate()">Simpan</b-button>
    
  </card>
    </div>
  </template>
  <script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BaseHeader from '@/components/BaseHeader';
    import { Table, TableColumn } from 'element-ui';
    import axios from 'axios'
  
    axios.defaults.baseURL = 'http://localhost/obat/cadmin/'
    
    const head_form = {headers: {'Content-Type': 'multipart/form-data'}}
  
    Vue.use(VueClipboard)
    export default {
      name: 'icons',
      components: {
        BaseHeader,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
      },
      data() {
        return {
        nomor_pegawai : '',
        nomor_hp : '',
        nama : '',
        }
      },
      created() {
        this.getDataObat()
      },
      methods: {
        getDataObat : function(){
          axios.get(`ambil_update?id=${this.$route.params.id_admin}`)
              .then(response => (
                this.nomor_pegawai = response.data.data[0]['nomor_pegawai'],
                this.nomor_hp = response.data.data[0]['nomor_hp'],
                this.nama = response.data.data[0]['nama']
              ))
          .catch(error => alert(error));
        },
        setDataUpdate : function(){
            var arr_post = {
              nomor_pegawai : this.nomor_pegawai,
              nomor_hp : this.nomor_hp,
              nama : this.nama,
              id : this.$route.params.id_admin
            }

            axios.post("simpan_update",arr_post,head_form)
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