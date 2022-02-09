import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { router } from '../router'
import { Story } from '../types'

export const useStoryStore = defineStore('story', () => {
  const stories = ref<Story[]>([])
  function setStories (value: Story[]) {
    stories.value = value
  }

  const currentStory = computed(() => stories.value.find(s => s.id === router.currentRoute.value.params.storyId))

  return {
    stories,
    setStories,
    currentStory,
  }
})
