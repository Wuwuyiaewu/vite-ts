<template>
    <el-container>
        <el-header><el-input v-model="input" placeholder="Please input Cypher" @keydown.enter="draw" /></el-header>
        <el-container class="crc__bloom__box">
            <div id="viz" ref="canvas">
                viz
            </div>
            <DescriptionItem :Neo4jValue="Neo4jValue" :visible="visible" @confirm="closeDrawer"></DescriptionItem>
        </el-container>
    </el-container>
    <el-button @click="openDraw()">
        Open Drawer with customized header
    </el-button>
    <el-button @click="draw()">draw</el-button>
    <el-button @click="getItemCardPdf(true, 'Bloom')">download</el-button>
</template>

<script setup lang="ts">
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
import NeoVis from 'neovis.js';
import type { NeovisConfig } from 'neovis.js'
import DescriptionItem from '@/components/DescriptionComponent.vue'
import { onMounted, ref, nextTick } from 'vue'
interface Ref<T> {
    value: T
}

const input = ref('')
const visible = ref(false)
const canvas = ref<HTMLCanvasElement>()
const Neo4jValue: Record<string, any> = ref()
// driver = neo4j.driver('bolt://10.20.30.34:7687', neo4j.auth.basic('neo4j', 'password'));
// session = this.driver.session();

// //  模擬API回傳值
//  async getNodeNames() {
//     try {
//         const result = await this.session.run('MATCH (n) RETURN distinct labels(n), count(*)');
//         const nodeNames = result.records.map((record: any) => record._fields[0][0]);
//         console.log(nodeNames);
//     } catch (error) {
//         console.error('Error executing Neo4j query:', error);
//     } finally {
//         await this.session.close();
//         await this.driver.close();
//     }
// }

const config: Ref<NeovisConfig> = ref()
config.value = {
    containerId: "viz",
    neo4j: {
        serverUrl: "bolt://10.20.30.34:7687",
        serverUser: "neo4j",
        serverPassword: "password"
    },
    initialCypher: "match p=()-[]->() return p limit 10",
    // 找節點：MATCH (n) RETURN distinct labels(n)
    // 找節點包含數量：MATCH (n) RETURN distinct labels(n), count(*)
    // nonFlat: true,
    visConfig: {
        nodes: {
            shape: 'circle',
            physics: true,
            color: "#000",
            labelHighlightBold: true,
            widthConstraint: {
                minimum: 50,
                maximum: 100
            },
            mass: 1,
            icon: {
                face: "green",
                code: "green",
                size: 100,  // 50,
                color: "green",
                weight: "700",
            }
        },
        edges: {
            smooth: true,
            arrows: {
                to: { enabled: true },
                // from: { enabled: true },
            }
        },
        physics: {

        }
    },
    labels: {
        DB: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '2',
                color: '#77777'
            }
        },
        Tool: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '2',
                color: '#77777'
            }
        },
        Person: {
            label: "name",
            value: "pagerank",
            group: "community",
            font: {
                size: '2',
                color: '#77777'
            }
        },
        Movie: {
            label: "title",
            value: "pagerank",
            group: "community",
            font: {
                size: '3',
                color: '#77777',
                background: "#333"
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
}
const watermarkedDataURL = (canvas: Ref<HTMLCanvasElement>) => {
    canvas.value.classList.add('canvas_water')
}
// const download = function () {
//     nextTick(() => {
//         html2Canvas(canvas.value).then(canvas => {
//             document.body.appendChild(canvas)
//         });
//     })
// }
const getItemCardPdf = async (
    isForDownload: boolean,
    title?: string
) => {
    const toCanvasElement = canvas.value
    let blob = null;
    if (toCanvasElement) {
        blob = await html2Canvas(toCanvasElement, {
            allowTaint: false,
            useCORS: true,
        }).then(function (canvas) {
            const position = 0;
            const pageData = canvas.toDataURL("image/jpeg", 1.0);
            console.log(pageData);
            const PDF = new JsPDF("l", "pt", [1200, 600]);

            PDF.addImage(
                pageData,
                "JPEG",
                10,
                position + 10,
                1024,
                488,
                "",
                "NONE",
            );
            if (isForDownload) {
                PDF.save(title + ".pdf");
                return null;
            }
            return Promise.resolve(PDF.output("blob"));
        });
    }
    return blob;
};

const closeDrawer = (e) => {
    console.log(e)
    e.close()
    visible.value = false
}

const openDraw = () => {
    visible.value = true
}
let viz
const draw = () => {
    viz = new NeoVis(config.value);
    config.value.initialCypher = input.value
    viz.registerOnEvent('clickNode', (e) => {
        // e: { nodeId: number; node: Node }
        Neo4jValue.value = e.node.raw.properties
        openDraw()
        console.info(e.node.raw.properties);
    });
    viz.render()
}

onMounted(async () => {
    draw()
    watermarkedDataURL(canvas)
})
</script>

<style scoped lang="scss">
.canvas_water {
    position: relative;
    overflow: hidden;
}

.canvas_water::after {
    position: absolute;
    pointer-events: none;
    content: '浮水印 浮水印 浮水印 浮水印';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    transform: rotate(10deg);
    filter: saturate(0);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: url(@/assets/water.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

textarea {
    border: 1px solid lightgray;
    margin: 5px;
    border-radius: 5px;
}

.crc__bloom__box {
    display: grid;
    grid-template-columns: 1fr 300px;
}

#viz {
    height: 400px;
    border: 5px solid #E9ECEF;
    margin-bottom: 20px;
    background: #F8F9FA;
    box-sizing: border-box;
}

:deep(.modalclass) {
    position: static !important;
    z-index: 0 !important;
}

:deep(.el-drawer.ltr.open) {
    width: 300px !important;
}

button {
    border-radius: 10px;
    border: 3px solid #CED4DA;
    padding: 10px 20px;
    background: #CED4DA;
    color: #495057;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        background: #ADB5BD;
        color: #F8F9FA;
    }
}
</style>