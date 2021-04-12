import { AltUI } from '../build/AltUI.js'
import { AltLog } from '../build/AltLog.js'
const {log, debug, error} = new AltLog

let carshop = new AltUI.Menu({
  title: "AltUI",
  grades: [
    "staff",
  ]
});

carshop.item({
  title: "plop",
  type: "button"
}).on("data", (e) => {
  log("test on")
  log(JSON.stringify(e))
  carshop.open()
});