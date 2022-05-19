<template>
    <div>
        <h1>Search all the news you want!</h1>
        <br />
        <div>
            <b-input-group class="search-bar mt-3">
                <b-input-group-text>Search:</b-input-group-text>
                <b-form-input class="search-input" required v-model="keyword"></b-form-input>

                <b-input-group-append>
                    <b-form-select v-model="language"
                                   :options="languages"
                                   required
                                   dropleft
                                   class="search-item"></b-form-select>
                    <b-form-datepicker id="datepicker"
                                       today-button
                                       reset-button
                                       close-button
                                       locale="en"
                                       v-model="newsDate"
                                       class="mb-2 search-item">

                    </b-form-datepicker>
                </b-input-group-append>
            </b-input-group>
            <br />
            <b-button variant="danger" @click="search">Search</b-button>
        </div>
       <!-- {{list}}-->
    <hr /><br />
        <SearchResults/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import SearchResults from '../components/partials/SearchResults.vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(BootstrapVue, VueAxios, axios)

    export default {
        name: 'SearchView',
        components: {
            SearchResults,
        },
        data() {
            return {
                newsDate: '',
                language: '',
                keyword: '',
                languages: [{ text: 'Choose a language', value: null }, 'English'],
                list: null
            }
        },
        methods: {
            search() {
                /* alert(this.keyword + ', ' + this.newsDate + ', ' + this.language)*/
                if (this.newsDate == '') {
                    axios
                        .get('https://localhost:7026/News/Search?search=' + this.keyword)
                        .then(response => {
                            //console.warn(response.data)
                            this.list = response.data.bpi
                        })
                }
                else {
                    axios
                        .get('https://localhost:7026/News/SearchDate?search=' + this.keyword + '&date=' + this.newsDate)
                        .then(response => {
                            //console.warn(response.data)
                            this.list = response.data.bpi
                        })
                }
                
            }
        }
    };
</script>

<style>
    .search-bar{
        max-width: 80%;
    }
    .search-input{
        max-width:80%;
    }

    .search-item{
        max-width: 100%;
    }
</style>