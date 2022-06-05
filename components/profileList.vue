<template>
  <div>
        {{ profileList }}
  </div>
</template>

<script>
import { useProfileStore } from '~/stores/profiles'

export default defineComponent({
  setup() {
    const profileStore = useProfileStore()
    const profileList = profileStore.profileList

    return { profileList }
  },
})
</script>