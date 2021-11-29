import packagejson from './package.json'
import { Location } from '@xrengine/common/src/interfaces/Location'
import { v4 as generateUUID } from 'uuid'
import fs from 'fs'
import path from 'path'

const locationSettingsSeed = {
  randomize: false,
  path: 'location-settings',
  templates: [] as any
}

const locationSeed = {
  randomize: false,
  path: 'location',
  templates: [] as any
}

function toCapitalCase(str: string) {
  return str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
}

fs.readdirSync(path.resolve(__dirname))
  .filter(file => file.endsWith('scene.json'))
  .forEach((sceneJson) => {
    const locationId = generateUUID()
    const settingsId = generateUUID()
    const sceneName = sceneJson.replace('.scene.json', '')
    const locationName = toCapitalCase(sceneName.replace('-', ' '))
    const locationSettings = {
      id: settingsId,
      locationId,
      locationType: 'public',
      videoEnabled: true,
      instanceMediaChatEnabled: true
    }
    locationSettingsSeed.templates.push(locationSettings)
    const location = {
      id: locationId,
      name: locationName,
      slugifiedName: sceneName,
      maxUsersPerInstance: 30,
      sceneId: `${packagejson.name}/${sceneName}`,
      location_settings: locationSettings,
      isLobby: false
    } as Location
    locationSeed.templates.push(location)
  })

console.log(locationSettingsSeed, locationSeed)

export default [locationSeed]