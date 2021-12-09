import { ACTIONS } from './types'

export function initApp<Properties> (config: {
  getProperties: () => Properties
  setProperties: (properties: Properties) => void
  generateFiles?: () => Promise<{ name: string, data: any }[]>
}) {
  const generateFiles = config.generateFiles ?? (async () => [])
  window.addEventListener('message', (e: any) => {
    const { action, payload } = e.data ?? {}

    const respond = (payload: any) => e.source?.postMessage({ action, payload }, e.origin)

    switch (action) {
    case ACTIONS.PING: return respond('PONG')
    case ACTIONS.GET_PROPERTIES: return respond(config.getProperties())
    case ACTIONS.SET_PROPERTIES: return respond(config.setProperties(payload))
    case ACTIONS.GENERATE_FILES: return generateFiles().then(respond)
    default:
    }
  })
}
