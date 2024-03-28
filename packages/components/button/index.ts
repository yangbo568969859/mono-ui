import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import type { App, Plugin } from 'vue'

export const ElButton = withInstall(Button, {
  ButtonGroup,
})

export default ElButton
export * from './src/button'
