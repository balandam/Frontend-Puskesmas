<template>
  
    <b-card no-body class="bg-default shadow">
        <b-card-header class="bg-transparent border-0">
            <h3 class="mb-0 text-white">Data Admin</h3>
            <router-link class="btn-success btn float-right" to="/tambahadmin">Tambah</router-link>
        </b-card-header>

        <el-table class="table-responsive table table-dark"
                  header-row-class-name="thead-dark"
                  :data="dadmin">
            <el-table-column label="Nomor Pegawai"
                             min-width="310px"
                             prop="Nomor_pegawai">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="mr-3">
                        
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.nomor_pegawai}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            
            <el-table-column label="Nomor HP"
                             min-width="310px"
                             prop="Nomor_hp">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="mr-3">
                        
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.nomor_hp}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            
            <el-table-column label="Nama"
                             min-width="310px"
                             prop="Nama">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="mr-3">
                        
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.nama}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="aksi"
                             min-width="310px"
                             prop="aksi">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="mr-3">
                        
                        </a>
                        <b-media-body>
                          <router-link :to="{name: 'editadmin', params: { id_admin: row.id }}" class="btn btn-warning">Edit</router-link>
                          <button class="btn btn-danger" v-on:click="hapusAdmin(row.id)">Hapus</button>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            

            

            
        </el-table>

    </b-card>
</template>
<script>
  import { Table, TableColumn} from 'element-ui'
  import axios from 'axios'

  

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        currentPage: 1,
        dadmin : []
      };
    },
    created() {
      axios.defaults.baseURL = 'http://localhost/obat/cadmin/'
    this.getAdmin()
  },
    methods:{
      getAdmin : function(){
        axios.get('list_admin')
             .then(respons => (
              this.dadmin= respons.data.data
             
             ))
             .catch(error => alert(error));
      
    },
      hapusAdmin : function (id) {
        axios.get(`hapus_admin?id=${id}`)
             .then(respons => (
              this.getAdmin()
             ))
             .catch(error => alert(error));
      }
    }
  }
</script>
