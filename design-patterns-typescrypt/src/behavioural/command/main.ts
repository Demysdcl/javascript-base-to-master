import { LightPowerCommand } from './light-power-command'
import { SmartHouseApp } from './smart-house-app'
import { SmartHouseLight } from './smart-house-light'

const bedroomLight = new SmartHouseLight('Luz Quarto')
const lightPowerCommand = new LightPowerCommand(bedroomLight)
const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand('btn-1', lightPowerCommand)

smartHouseApp.executeCommand('btn-1')
smartHouseApp.undoCommand('btn-1')
