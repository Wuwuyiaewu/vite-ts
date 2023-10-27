<template>
    <div>
      <div id="chart-container"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import * as d3 from 'd3';
  
  onMounted(() => {
    const container = d3.select('#chart-container');
    const width = container.node().getBoundingClientRect().width;
    const height = 400;
  
    const svg = container.append('svg')
      .attr('width', width)
      .attr('height', height);
  
    const data = [
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
      { source: 'C', target: 'D' },
    ];
  
    const simulation = d3.forceSimulation(data)
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));
  
    const link = svg.selectAll('.link')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'link');
  
    const node = svg.selectAll('.node')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 5);
  
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });
  });
  </script>
  
  <style scoped lang="scss">
  /* 在這裡添加您的CSS樣式 */
  .link {
    stroke: #999;
    stroke-opacity: 0.6;
  }
  
  .node {
    fill: #000;
  }
  </style>
  