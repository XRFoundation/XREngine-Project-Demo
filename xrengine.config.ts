import type { ProjectConfigInterface } from '@xrengine/projects/ProjectConfigInterface'

const config: ProjectConfigInterface = {
  onEvent: './projectEventHooks.ts',
  thumbnail: "/static/xrengine_thumbnail.jpg",
  routes: {},
  services: undefined,
  databaseSeed: './locationseed.ts'
}

export default config