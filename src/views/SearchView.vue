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
        <hr /><br />
        <star-rating :max-rating="10" :star-size="20"></star-rating>

        <div>
            <div>
                <b-card-group>
                    <b-card-group>
                        <b-card v-for="article in list" :key="article.amount"
                                :title="article.title"
                                :img-src="article.image"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2 allCards"
                                align="center">
                            <b-card-text>
                                {{article.description}}
                            </b-card-text>
                            <b-button href="article.url" variant="danger">Read more</b-button>
                        </b-card>
                    </b-card-group>
                </b-card-group>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(BootstrapVue, VueAxios, axios)

    export default {
        name: 'SearchView',
        components: {
        },
        data() {
            return {
                newsDate: '',
                language: '',
                keyword: '',
                languages: [{ text: 'Choose a language', value: null }, 'English'],
                list: undefined
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
                            this.list = response.data
                        })
                }
                else {
                    axios
                        .get('https://localhost:7026/News/SearchDate?search=' + this.keyword + '&date=' + this.newsDate)
                        .then(response => {
                            //console.warn(response.data)
                            this.list = response.data
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

    .cards {
        max-width: 18rem;
        margin: 40px;
        margin-left: 440px
    }

    .allCards {
        max-width: 18rem;
    }
</style>