<template>
    <div id="viz">viz</div>
    <DescriptionItem></DescriptionItem>
    <button @click="draw()">draw</button>
</template>

<script setup lang="ts">
import NeoVis from 'neovis.js';
import DescriptionItem from '@/components/DescriptionComponent.vue'
import { onMounted } from 'vue'
var viz
var config = {
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
}

const draw = () => {
    window.addEventListener('wheel', handleWheel, { passive: true });
    viz = new NeoVis(config);
    viz.registerOnEvent('clickNode', (e) => {
        // e: { nodeId: number; node: Node }
        console.info(e.node.raw.properties);
    });
    viz.render()

}
// 滚动事件处理器
const handleWheel = (event) => {
    // 处理滚动事件的代码
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