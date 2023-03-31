import { Time } from "./Time.js";
import { updateClock } from "./updateClock.js";
const time = new Time()

function main(){
setInterval(()=>{
    time.update();
    updateClock(time);

},1000)
}
main()