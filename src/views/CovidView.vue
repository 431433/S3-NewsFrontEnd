<template>
    <div>
        <h1>Covid news</h1>
        <hr />
        <div>
            <div>
                <b-list-group class="article-list">
                    <!--<h3>Latest articles</h3>
                    <hr />
                    <b-list-group-item v-for="article in latestArticles" :href="article.url" class="flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">article.title</h5>
                        </div>

                        <p class="mb-1">
                            {{article.description}}
                        </p>

                        <small>{{article.sourceName}}</small>
                    </b-list-group-item>-->
                </b-list-group>
</div>
        </div>

        <div class="margin-mainView">
            <div class="container">
                <Bar :chart-options="chartOptions"
                     :chart-data="chartDataTests"
                     :plugins="plugins"
                     :css-classes="cssClasses"
                     :styles="styles"
                     :width="width"
                     :height="height" />
            </div>
            <br />
            <div class="container" style="margin-top: 50px">
                <Bar :chart-options="chartOptions"
                     :chart-data="chartDataDeaths"
                     :plugins="plugins"
                     :css-classes="cssClasses"
                     :styles="styles"
                     :width="width"
                     :height="height" />
            </div>
        </div>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs/legacy'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vue from 'vue'

    Vue.use(VueAxios, axios)

    export default {
        name: 'CovidView',
        components: {
            Bar
        },
        data: () => {
            return {
                chartDataTests: {
                    labels: ['April 11', 'April 18', 'April 25', 'May 2', 'May 9', ],
                    datasets: [
                        {
                            data: [5805279, 4735362, 4020728, 3668691, 3815692],
                            label: 'Weekly positive Covid tests, global',
                            backgroundColor: '#6C757D'
                        }                        
                    ]
                },
                chartDataDeaths: {
                    labels: ['April 11', 'April 18', 'April 25', 'May 2', 'May 9',],
                    datasets: [
                        {
                            data: [19606, 16830, 16240, 12438, 10371],
                            label: 'Weekly deaths by Covid, global',
                            backgroundColor: '#6C757D'
                        }
                    ]
                },
                chartOptions: {
                    responsive: false
                }

            }
        },
        props: {
            chartId: {
                type: String,
                default: 'bar-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 700
            },
            height: {
                type: Number,
                default: 400
            },
            cssClasses: {
                default: '',
                type: String
            },
            styles: {
                type: Object,
                default: () => { }
            },
            plugins: {
                type: Object,
                default: () => { }
            }
        }
        //},
        //async mounted() {
        //    this.loaded = false

        //    try {
        //        axios
        //            .get('api string')
        //            .then(response => {
        //                //console.warn(response.data)
        //                this.chartData = response.data
        //            })

        //        this.loaded = true
        //    } catch (e) {
        //        console.error(e)
        //    }
        //}
    };
</script>

<style>
    .article-list {
        max-width: 20%;
        float: right;
        margin-right: 100px;
    }

    .margin-mainView{
        margin-left: 0px;
    }
</style>