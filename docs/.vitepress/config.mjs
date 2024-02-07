import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "My Blog",
  // assetsDir: 'assets',
  base: '/blog/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '垃圾回收机制', link: '/' },
      { text: 'Color', link: '/color/index' },
      {
        text: '3DVisualization',
        items: [
          { text: 'threeJs', link: '/3DVisualization/threejs/' },
          { text: 'webGL', link: '/3DVisualization/webgl/' },
        ]
      },
      {
        text: '数据结构与算法',
        items: [
          { text: '数据结构', link: '/data-structure/index' },
          { text: '算法', link: '/algorithm/' },
        ]
      }
    ],

    sidebar: {
      '/color/': [
        {
          text: 'Color组件',
          items: [
            { text: '示例', link: '/color/index' },
          ]
        }
      ],
      '/data-structure/': [
        {
          text: '数据结构',
          items: [
            { text: '什么是数据结构', link: '/data-structure/index' },
            { text: '怎么样查找图书', link: '/data-structure/1-1' },
            { text: '空间与时间', link: '/data-structure/1-2' },
            { text: '到底什么是数据结构与算法呢', link: '/data-structure/1-3' },
            { text: '抽象数据类型', link: '/data-structure/1-4' },
          ]
        },
        {
          text: '算法',
          items: [
            { text: '算法定义', link: '/data-structure/2-1' },
            { text: '空间复杂度、时间复杂度', link: '/data-structure/2-2' },
            { text: '复杂度的渐进表示', link: '/data-structure/2-3' },
          ]
        },
        {
          text: '数据结构与算法',
          items: [
            { text: '多项式的表示', link: '/data-structure/3-1' },
            { text: '线性表', link: '/data-structure/3-2' },
            { text: '链表', link: '/data-structure/3-3' },
            { text: '堆栈', link: '/data-structure/3-4' },
            { text: '队列', link: '/data-structure/3-5' },
            { text: '树', link: '/data-structure/3-6' },
            { text: '堆', link: '/data-structure/3-7' },
            { text: '哈夫曼树', link: '/data-structure/3-8' },
            { text: '集合', link: '/data-structure/3-9' },
            { text: '图', link: '/data-structure/3-10' },
          ]
        },
      ],
      '/algorithm/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],
      '/3DVisualization/threejs/': [
        {
          text: 'THREE-Geo',
          // collapsed: true,
          items: [
            { text: 'BufferGeometry', link: '3DVisualization/threejs/BufferGeometry' },
            { text: 'Point', link: '3DVisualization/threejs/point' },
            { text: 'Curve', link: '3DVisualization/threejs/line' },
            { text: 'Path', link: '3DVisualization/threejs/path' },
            { text: 'Shape', link: '3DVisualization/threejs/shape' },
            { text: 'ShapeGeometry', link: '3DVisualization/threejs/shapeGeometry' },
            { text: 'ExtrudeGeometry', link: '3DVisualization/threejs/ExtrudeGeometry' },
            { text: 'TubeGeometry', link: '3DVisualization/threejs/TubeGeometry'},
            { text: 'LatheGeometry', link: '3DVisualization/threejs/LatheGeometry'}
          ]
        },
        {
          text: 'THREE-Light',
          // collapsed: true,
          items: [
            { text: 'BufferGeometry', link: '3DVisualization/threejs/BufferGeometry' },
            { text: 'Point', link: '3DVisualization/threejs/point' },
            { text: 'Curve', link: '3DVisualization/threejs/line' },
            { text: 'Path', link: '3DVisualization/threejs/path' },
            { text: 'Shape', link: '3DVisualization/threejs/shape' },
            { text: 'ShapeGeometry', link: '3DVisualization/threejs/shapeGeometry' },
            { text: 'ExtrudeGeometry', link: '3DVisualization/threejs/ExtrudeGeometry' },
          ]
        },
        {
          text: 'THREE-Shadow',
          // collapsed: true,
          items: [
            { text: 'BufferGeometry', link: '3DVisualization/threejs/BufferGeometry' },
            { text: 'Point', link: '3DVisualization/threejs/point' },
            { text: 'Curve', link: '3DVisualization/threejs/line' },
            { text: 'Path', link: '3DVisualization/threejs/path' },
            { text: 'Shape', link: '3DVisualization/threejs/shape' },
            { text: 'ShapeGeometry', link: '3DVisualization/threejs/shapeGeometry' },
            { text: 'ExtrudeGeometry', link: '3DVisualization/threejs/ExtrudeGeometry' },
          ]
        }
      ],
      '/3DVisualization/webgl/': [
        {
          text: 'webGL',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aa-fish/blog' }
    ]
  }
})
