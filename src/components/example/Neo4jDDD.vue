<template>
    <el-container>
        <el-header><el-input v-model="input" placeholder="Please input Cypher" @keydown.enter="draw"/></el-header>
        <el-container>
            <div id="viz">viz</div>
            <DescriptionItem :Neo4jValue="Neo4jValue"></DescriptionItem>
        </el-container>
    </el-container>
    <button @click="draw()">draw</button>
</template>

<script setup lang="ts">
import NeoVis from 'neovis.js';
import DescriptionItem from '@/components/DescriptionComponent.vue'
import { onMounted, ref } from 'vue'
const input = ref('')
const Neo4jValue: Record<string, any> = ref()
let viz
const config = ref({
    containerId: "viz",
    neo4j: {
        serverUrl: "bolt://10.20.30.34:7687",
        serverUser: "neo4j",
        serverPassword: "password"
    },
    initialCypher: "match p=({name: 'James Marshall'})-[]->() return p limit 100",
    arrows: false,
    // nonFlat: true,
    visConfig: {
        nodes: {
            shape: 'triangle'
        },
        edges: {
            arrows: {
                to: { enabled: true },
                // from: { enabled: true },
            }
        },
    },
    labels: {
        DB: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '15',
                color: '#77777'
            }
        },
        Tool: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '12',
                color: '#77777'
            }
        },
        Person: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '12',
                color: '#77777'
            }
        },
        Movie: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '12',
                color: '#77777'
            }
        }
    },
    relationships: {
        DIRECTED: {
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
                static: {
                    label: "DIRECTED",
                    color: "red",
                }
            }
        },
    },
    // relationships: {
    //     INTERACTS: {
    //         property: {
    //             value: 'weight'
    //         },
    //         function: {
    //             title: (edge) => {
    //                 return viz.nodeToHtml(edge, undefined);
    //             }
    //         }
    //     }
    // },
})

const draw = () => {
    viz = new NeoVis(config.value);
    config.value.initialCypher = input.value
    viz.registerOnEvent('clickNode', (e) => {
        // e: { nodeId: number; node: Node }
        Neo4jValue.value = e.node.raw.properties
        console.info(e.node.raw.properties);
    });
    viz.render()

}

onMounted(() => {
    draw()
})
</script>

<style scoped lang="scss">
textarea {
    border: 1px solid lightgray;
    margin: 5px;
    border-radius: 5px;
}

#viz {
    width: 800px;
    height: 400px;
    border: 5px solid #f1f3f4;
    margin-bottom: 20px;
    font: 22pt arial;
}

button {
    border-radius: 10px;
    border: 3px solid #2d3f5b;
    padding: 10px 20px;
    background: #89a2c7;
    color: #fff;

    &:hover {
        cursor: pointer;
        background: #56667d;
    }
}
</style>