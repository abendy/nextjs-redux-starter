import Trello from 'trello'
import config from 'config'

const trello = new Trello(config.trelloKey, config.trelloSecret)

export default trello
