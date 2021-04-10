import { AltUI } from '../build/AltUI.js'
import { AltLog } from '../build/AltLog.js'
const {log, debug, error} = new AltLog

let carshop = new AltUI.Menu({
  title: "AltUI",
  items: [
    new AltUI.Item({
      title: 'aze',
      type: "checkbox"
    }),
    new AltUI.Item({
      title: 'plop',
      type: "button"
    }),
    new AltUI.Item({
      title: "yes",
      type: "input"
    })
  ],
  subemenus: [
    new AltUI.subMenu({
      title: "AltUI submenu"
    })
  ]
})

carshop.open()
carshop.item("plop").on("data", (e) => {
  debug(e)
})