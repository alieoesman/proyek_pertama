import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profil',
    name: 'Profil',
    redirect: 'Profil/Sejarah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue'),
    children: [
      {
        path: 'Sejarah',
        name: 'Sejarah',
        components :{
        isiprofil: () => import('@/components/Profil/Sejarah.vue'),
        }
      },
      {
        path: 'Profilmad',
        name: 'Profilmad',
        components :{
        isiprofil: () => import('@/components/Profil/Profilmad.vue'),
        }
      },
      {
        path: 'Struktur',
        name: 'Struktur',
        components :{
        isiprofil: () => import('@/components/Profil/struktur.vue'),
        }
      },
      {
        path: 'Komite',
        name: 'Komite',
        components :{
        isiprofil: () => import('@/components/Profil/Komite.vue'),
        }
      },
      {
        path: 'Guru',
        name: 'Guru',
        components :{
        isiprofil: () => import('@/components/Profil/Guru.vue'),
        }
      }
    ]
  },
  {
    path: '/Kesiswaan',
    name: 'siswa',
    redirect: 'Kesiswaan/Datasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profil" */ '../views/Kesiswaan.vue'),
    children: [
      {
        path: 'Datasiswa',
        name: 'Datasiswa',
        components :{
        isisiswa: () => import('@/components/Siswa/Datasiswa.vue'),
        }
      },
      {
        path: 'JadwalPel',
        name: 'JadwalPel',
        components :{
        isisiswa: () => import('@/components/Siswa/Jadwalpel.vue'),
        }
      },
      {
        path: 'Materipel',
        name: 'Materipel',
        components :{
        isisiswa: () => import('@/components/Siswa/Materipel.vue'),
        }
      },
      {
        path: 'Soal',
        name: 'Soal',
        components :{
        isisiswa: () => import('@/components/Siswa/Soal.vue'),
        }
      }
    ]
  },
  {
    path: '/Informasi',
    name: 'isiinfo',
    redirect: 'Informasi/Proker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profil" */ '../views/Informasi.vue'),
    children: [
      {
        path: 'Proker',
        name: 'Proker',
        components :{
        isiinfo: () => import('@/components/Informasi/Proker.vue'),
        }
      },
      {
        path: 'Agenda',
        name: 'Agenda',
        components :{
        isiinfo: () => import('@/components/Informasi/Agenda.vue'),
        }
      },
      {
        path: 'Sarpras',
        name: 'Sarpras',
        components :{
        isiinfo: () => import('@/components/Informasi/Sarpras.vue'),
        }
      },
      {
        path: 'Kaldik',
        name: 'Kaldik',
        components :{
        isiinfo: () => import('@/components/Informasi/Kaldik.vue'),
        }
      },
      {
        path: 'Karyasis',
        name: 'Karyasis',
        components :{
        isiinfo: () => import('@/components/Informasi/Karyasis.vue'),
        }
      },
      {
        path: 'Berita',
        name: 'Berita',
        components :{
        isiinfo: () => import('@/components/Informasi/Berita.vue'),
        }
      },
      {
        path: 'Galeri',
        name: 'Galeri',
        components :{
        isiinfo: () => import('@/components/Informasi/Galeri.vue'),
        }
      },
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
