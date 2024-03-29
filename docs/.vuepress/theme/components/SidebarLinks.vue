<template>
  <ul
    class="sidebar-links"
    v-if="items.length"
  >
    <li v-for="(item, i) in items" :key="i">
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="i === openGroupIndex"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink
        v-else
        :sidebarDepth="sidebarDepth"
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from '@theme/components/SidebarGroup'
import SidebarLink from '@theme/components/SidebarLink'
import { isActive } from '@theme/helpers/utils'

export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },

  props: [
    'items',
    'depth', // depth of current sidebar links
    'sidebarDepth' // depth of headers to be extracted
  ],

  data () {
    return {
      openGroupIndex: 0,
    }
  },

  created () {
    this.refreshIndex()
  },

  mounted() {
    this.isInViewPortOfOne()
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  updated: function () {
    this.isInViewPortOfOne()
  },

  methods: {
    isInViewPortOfOne () {
        let siderbarScroll = document.getElementsByClassName("sidebar")[0]
        let el = document.getElementsByClassName("active sidebar-link")[1]
        if (el ==null || el == undefined || el.offsetTop == undefined) {
          el = document.getElementsByClassName("active sidebar-link")[0]
        }
        if (el ==null || el == undefined || el.offsetTop == undefined) return
        
        const viewPortHeight = siderbarScroll.clientHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
        let offsetBottom = el.offsetTop + el.offsetHeight
        let scrollTop = siderbarScroll.scrollTop
        let isView = (offsetBottom <= viewPortHeight + scrollTop)
        if (!isView) {
          siderbarScroll.scrollTop = (offsetBottom+5 - viewPortHeight)
        }
    },

    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>
