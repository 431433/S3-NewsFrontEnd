<template>
    <div>
        <h1>All the war articles</h1>
        <hr />
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
            <div class="main-view">
                <h4>Fate of Mariupol fighters unclear; Finland, Sweden apply to join NATO</h4>
                <hr />
                <img src="https://img.jakpost.net/c/2020/01/07/2020_01_07_84421_1578366020._large.jpg" alt="Article img url" class="image" />
                <p>
                    Finland and Sweden formally applied to join NATO at its headquarters in Brussels on Wednesday, beginning an
                    accession process that could reshape transatlantic security, as attacks continued in western Ukraine -
                    not far from the military alliance's border in Poland.
                </p>
                <p>
                    Russia's Defense Ministry claimed that another group of 694 Ukrainian fighters in the strategic port city 
                    of Mariupol left the Azovstal steel plant in the last day as part of a negotiated surrender. The Washington 
                    Post could not immediately verify Russia's account that a total of 959 fighters, including 80 seriously wounded, 
                    have now left the plant, and it was unclear how many remain.
                </p>
                <br />
                <b-button href="https://www.washingtonpost.com/world/2022/05/18/russia-ukraine-war-putin-news-live-updates/" variant="danger">Read more</b-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WarView',
        components: {},
    };
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