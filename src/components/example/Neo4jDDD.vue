<template>
    <div id="viz"></div>
    <button @click="draw()">draw</button>
</template>

<script setup lang="ts">
import NeoVis from 'neovis.js';
import { onMounted } from 'vue'
function draw() {
    var viz
    var config = {
        containerId: "viz",
        neo4j: {
            //  serverUrl: "bolt://localhost:7687",
            serverUrl: "bolt://10.20.30.34:7687",
            serverUser: "neo4j",
            //  serverPassword: "sorts-swims-burglaries"
            serverPassword: "password"
        },
        labels: {
            Troll: {
                caption: "user_key",
                size: "pagerank",
                community: "community"
            }
        },
        relationships: {
        
            RETWEETS: {
                caption: false,
                thickness: "count"
            }
        },
        initialCypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
    };

    viz = new NeoVis(config);
    viz.render();
}
onMounted(() => {
})
</script>

<style scoped lang="scss">
#viz {
    width: 100%;
    height: 100%;
    border: 3px solid #000;
}
</style>