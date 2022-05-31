<template>
    <div>
        <!--<div v-for="(article, amount) in list">
            {{amount}}: {{article}}
        </div>-->
        <!--<div v-for="article in list" :key="list.amount">
            {{article.title}}
        </div>
        <div>-->
            {{list}}
        <!--</div>-->
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(BootstrapVue, VueAxios, axios)

    export default {
        name: 'searchResults',
        data() {
            return {
                list: undefined
            };
        },
        mounted() {
            axios
                .get('https://localhost:7026/News/News')
                .then(response => {
                    //console.warn(response.data)
                    this.list = response.data
                })
        },
        methods: {

        }
    }
</script>

<style>
    .cards {
        max-width: 18rem;
        margin: 40px;
        margin-left: 440px
    }

    .allCards {
        max-width: 18rem;
    }
</style>