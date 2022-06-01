<template>
    <div>
        <h1>Sport news, for everyone!</h1>
        <hr />

        <div>
            <b-card no-body class="overflow-hidden top-card center-cards">
                <b-row no-gutters v-for="article in mainArticle" :key="article.amount">
                    <b-col md="6">
                        <b-card-img :src="article.image" alt="" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body :title="article.title">
                            <b-card-text>
                                {{article.description}}
                            </b-card-text>
                            <br />
                            <b-button href="article.url" variant="danger">Read more</b-button>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

            <b-card-group>
                <b-card :title="article.title"
                        :img-src="article.image"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cards"
                        align="center"
                         v-for="article in topArticles" :key="article.amount">
                    <b-card-text>
                        {{article.description}}
                    </b-card-text>

                    <b-button href="article.url" variant="danger">Read more</b-button>
                </b-card>
            </b-card-group>
        </div>

        <div>
            <h3 style="margin-left:50px">The latest articles</h3>
            <hr />
            <div>
                <b-card-group columns>

                    <b-card v-for="article in allArticles" :key="article.amount"
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
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'

    Vue.use(VueAxios, axios)

    export default {
        name: 'SportsView',
        components: {},
        data() {
            return {
                mainArticle: null,
                topArticles: null,
                allArticles: null
            }
        },
        mounted() {
            axios
                .get('https://newsbackend.azurewebsites.net/Sports/GetMainSportArticle')
                .then(response => {
                    this.mainArticle = response.data
                    console.warn(this.mainArticle)
                }),
                axios
                .get('https://newsbackend.azurewebsites.net/Sports/GetTopSportArticles')
                    .then(responseTop => {
                        this.topArticles = responseTop.data
                        console.warn(this.topArticles)
                    }),
                axios
                .get('https://newsbackend.azurewebsites.net/Sports/GetSportArticles')
                .then(responseAll => {
                    this.allArticles = responseAll.data
                    console.warn(this.allArticles)
                })

        }
    };
</script>

<style>
    .top-card{
        max-width: 70%;
    }

    .center-cards{
        margin: auto;
        padding: 10px;
    }

    .cards {
        max-width: 18rem;
        margin: 40px;
        margin-left: 440px
    }

    .allCards{
        max-width: 18rem;
    }
</style>