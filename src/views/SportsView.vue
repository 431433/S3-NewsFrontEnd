<template>
    <div>
        <h1>Sport news, for everyone!</h1>
        <hr />

        <div>
            <b-card no-body class="overflow-hidden top-card center-cards">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://e0.365dm.com/22/05/768x432/skysports-city-ground-forest_5774993.jpg?20220518000000" alt="" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Billy Sharp allegedly attacked by fan during Nottingham Forest-Sheffield United pitch invasion | Police arrest man">
                            <b-card-text>
                                Nottingham Forest's penalty shootout win over Sheffield United marred as Billy Sharp appeared to be attacked
                                during pitch invasion at City Ground; Forest play Huddersfield in the Championship play-off final on May 29
                            </b-card-text>
                            <br />
                            <b-button href="https://www.skysports.com/football/news/11095/12615619/billy-sharp-attacked-by-fan-during-nottingham-forest-sheffield-united-pitch-invasion-paul-heckingbottom-its-out-of-order" variant="danger">Read more</b-button>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

            <b-card-group>
                <b-card title="Cambuur-keeper Bos (25) moet carriere beeindigen wegens hartproblemen"
                        img-src="https://media.nu.nl/m/8mexpbla75rp_wd1280.jpg/cambuur-keeper-bos-25-moet-carriere-beeindigen-wegens-hartproblemen.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cards"
                        align="center">
                    <b-card-text>
                        SC Cambuur-keeper Pieter Bos heeft woensdag een punt achter zijn loopbaan moeten zetten. De 25-jarige Fries kampt met hartproblemen, 
                        waardoor een topsportcarriere niet langer mogelijk is.
                    </b-card-text>

                    <b-button href="https://www.nu.nl/voetbal/6201458/cambuur-keeper-bos-25-moet-carriere-beeindigen-wegens-hartproblemen.html" variant="danger">Read more</b-button>
                </b-card>

                <b-card title="Feyenoord neemt revaliderende keeper Bijlow mee op trainingskamp voor finale"
                        img-src="https://media.nu.nl/m/fhzxen5a8ejx_xwd1280.jpg/feyenoord-neemt-revaliderende-keeper-bijlow-mee-op-trainingskamp-voor-finale.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cards"
                        align="center">
                    <b-card-text>
                        Eerste keeper Justin Bijlow, die door een blessure al ruim twee maanden aan de kant staat, is een van de 26 Feyenoord-spelers 
                        die woensdagmiddag naar Portugal reizen voor een trainingskamp in de aanloop naar de Conference League-finale tegen AS Roma.
                    </b-card-text>

                    <b-button href="https://www.nu.nl/voetbal/6201476/feyenoord-neemt-revaliderende-keeper-bijlow-mee-op-trainingskamp-voor-finale.html" variant="danger">Read more</b-button>
                </b-card>

                <b-card title="Vitesse-spits Openda kan in duel met Oranje debuteren voor Belgisch elftal"
                        img-src="https://media.nu.nl/m/eg3xd86a6e96_wd1280.jpg/vitesse-spits-openda-kan-in-duel-met-oranje-debuteren-voor-belgisch-elftal.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cards"
                        align="center">
                    <b-card-text>
                        Lois Openda is woensdag voor het eerst opgeroepen voor het Belgisch elftal. De 22-jarige spits van Vitesse kan
                        daardoor over twee weken in het Nations League-duel met Oranje zijn debuut maken voor de 'Rode Duivels'.
                    </b-card-text>

                    <b-button href="https://www.nu.nl/voetbal/6201467/vitesse-spits-openda-kan-in-duel-met-oranje-debuteren-voor-belgisch-elftal.html" variant="danger">Read more</b-button>
                </b-card>
            </b-card-group>
        </div>

        <div>
            <h3 style="margin-left:50px">The latest articles</h3>
            <hr />
            <p>?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SportsView',
        components: {},
    };
</script>

<style>
    .top-card{
        max-width: 60%;
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
</style>