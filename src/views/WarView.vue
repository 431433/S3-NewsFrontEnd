<template>
    <div>
        <h1>All the war articles</h1>
        <hr />
        <b-button @click="mainArticle">test</b-button>
            <br />
            <div>
                <b-list-group class="article-list">
                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>

                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>

                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>

                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>

                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>

                    <b-list-group-item href="#" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Article title goes here</h5>
                            <small>release date</small>
                        </div>

                        <p class="mb-1">
                            description goes here.
                            description goes here.
                            description goes here.
                            description goes here.
                        </p>

                        <small>author goes here</small>
                    </b-list-group-item>
                </b-list-group>
                <div class="main-view" v-for="article in mainArticle" :key="article.amount">
                    <h4>{{article.title}}</h4>
                    <hr />
                    <img :src="article.image" alt="Article img url" class="image" />
                    <p>
                       {{article.description}}
                    </p>
                    <br />
                    <b-button :href="article.url" variant="danger">Read more</b-button>

                </div>
            </div>
        </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'

    Vue.use( VueAxios, axios)
    export default {
        name: 'WarView',
        components: {},
        data() {
            return {
                mainArticle: null,
                allArticles: null
            }
        },
        mounted() {
                /* alert(this.keyword + ', ' + this.newsDate + ', ' + this.language)*/
                axios
                    .get('https://localhost:7026/Warnews/GetWarMainArticle')
                    .then(response => {
                        this.mainArticle = response.data
                        console.warn(this.mainArticle)
                    })
        }
    }
</script>

<style>
    .article-list{
        max-width: 20%;
        float: left;
        margin-right: 60px;
    }

    .main-view{
        margin-left: 100px;
        max-width: 70%;
    }

    .image {
        max-width: 50%;
        max-height: 400px;
        margin-bottom: 30px;
        margin-left: 80px;
    }
</style>