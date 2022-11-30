<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
    
    </base-header>

    <b-container fluid class="mt--7">
      <router-link class="btn-success btn float-right" to="/tambahobat">Tambah</router-link>
      <b-row class="justify-content-center">
        <b-col lg="12">
          <el-table class="table-responsive table table-dark" header-row-class-name="thead-dark" :data="dobat">
            <el-table-column label="Tanggal Obat Masuk" min-width="310px" prop="name">
              <template v-slot="{row}">
                <b-media no-body class="align-items-center">
                  <a href="#" class="mr-3">
                  </a>
                  <b-media-body>
                    <span class="font-weight-600 name mb-0 text-sm">{{row.tgl_masuk}}</span>
                  </b-media-body>
                </b-media>
              </template>
            </el-table-column>
            
            <el-table-column label="Tanggal kadaluarsa " prop="Tanggal_kadaluarsa" min-width="140px">
              <template v-slot="{row}">
                <badge class="badge-dot mr-4">
      
                  <span class="status" :class="`note text-white`">{{row.tgl_kadaluarsa}}</span>
                </badge>
              </template>
            </el-table-column>

            <el-table-column label="Nama Obat" min-width="170px" prop="status">
              <template v-slot="{row}">
                <badge class="badge-dot mr-4">
      
                  <span class="status" :class="`note text-white`">{{row.nama}}</span>
                </badge>
              </template>
            </el-table-column>
            <el-table-column label="Type obat" min-width="170px" prop="Type_obat">
              <template v-slot="{row}">
                <badge class="badge-dot mr-4">
      
                  <span class="status" :class="`note text-white`">{{row.tipe}}</span>
                </badge>
              </template>
            </el-table-column>
            <el-table-column label="Jumlah stock obat" min-width="170px" prop="Jumlah stock obat">
              <template v-slot="{row}">
                <badge class="badge-dot mr-4">
      
                  <span class="status" :class="`note text-white`">{{row.jumlah}}</span>
                </badge>
              </template>
            </el-table-column>
            <!-- untuk edit -->
            <el-table-column label="Jumlah stock obat" min-width="170px" prop="Jumlah stock obat">
              
              <template v-slot="{row}">
                <badge class="badge-dot mr-4">
      
                  <span class="status" :class="`note text-white`">
                    <button class="btn btn-danger" v-on:click="hapusObat(row.id)">Hapus</button>
                    <router-link :to="{name: 'editobat', params: { id_obat: row.id }}" class="btn btn-warning">Edit</router-link></span>
                </badge>
              </template>
            </el-table-column>
          </el-table>
          

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';
  import { Table, TableColumn } from 'element-ui';
  import axios from 'axios'

 
  

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
        
        currentPage: 1,
        dobat : []
      };
    },
    created() {
      axios.defaults.baseURL = 'http://localhost/obat/cobat/'
    this.getObat()
  },
    methods: {
      getObat : function(){
        axios.get('list_obat')
             .then(respons => (
              this.dobat= respons.data.data
             ))
             .catch(error => alert(error));
    },
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      },
      hapusObat : function (id) {
        axios.get(`hapus_obat?id=${id}`)
             .then(respons => (
              this.getObat()
             ))
             .catch(error => alert(error));
      }
    }
  };

</script>

<style></style>