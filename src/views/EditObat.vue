<template>
    <div>
      <!-- BootstrapVue Done -->
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <!-- Card stats -->
  
      </base-header>
      <card>
      <div>
        Nama obat
        <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Tipe
        <b-form-input v-model="tipe" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Jumlah
        <b-form-input v-model="jumlah" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Tanggal Masuk
        <b-form-input v-model="tgl_masuk" type="date"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Tanggal Kadaluarsa
        <b-form-input v-model="tgl_kadaluarsa" type="date" ></b-form-input>
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
  
    axios.defaults.baseURL = 'http://localhost/obat/cobat/'
    
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
          nama : '',
          jumlah : '',
          tgl_masuk : '',
          tipe : '',
          tgl_kadaluarsa : '',
        }
      },
      created() {
        this.getDataObat()
      },
      methods: {
        getDataObat : function(){
          axios.get(`ambil_update?id=${this.$route.params.id_obat}`)
              .then(response => (
                this.nama = response.data.data[0]['nama'],
                this.jumlah = response.data.data[0]['jumlah'],
                this.tipe = response.data.data[0]['tipe'],
                this.tgl_masuk = response.data.data[0]['tgl_masuk'],
                this.tgl_kadaluarsa = response.data.data[0]['tgl_kadaluarsa']
              ))
          .catch(error => alert(error));
        },
        setDataUpdate : function(){
            var arr_post = {
              nama : this.nama,
              tipe : this.tipe,
              jumlah : this.jumlah,
              tgl_masuk : this.tgl_masuk,
              tgl_kadaluarsa : this.tgl_kadaluarsa,
              id : this.$route.params.id_obat
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