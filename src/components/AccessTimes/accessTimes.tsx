import internal from 'stream'
import style from './accessTimes.module.css'

interface AccessTimes{
    times: number|null,
    lastTime: Date| null
}

export function AccessTimes(){
    function getAccessTimesObject(): AccessTimes | null{
        let accessTimes: AccessTimes = JSON.parse(localStorage.getItem("access") ?? "{}")
        return accessTimes
    }

    function setAccessTimesObject(times: number, lastTime: Date){
        localStorage.setItem("access", JSON.stringify({ times: times, lastTime: lastTime }))
    }

    let accessTimesObj: AccessTimes | null = getAccessTimesObject();

    setAccessTimesObject(accessTimesObj?.times ?? 0, accessTimesObj?.lastTime ?? new Date())

    return (
        <p>Esta página foi visitada 2 vezes. A última visita foi: 13/06/2024, 19:37</p>
    )
}
