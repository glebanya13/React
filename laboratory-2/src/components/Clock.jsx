import { useEffect, useState } from 'react'
import moment from 'moment-timezone';

export default function Clock({ timezone, format }) {
    const timeFormat = format === '24' ? 'HH:mm:ss' : 'h:mm:ss a';

    const [now, setNow] = useState(moment().tz(timezone).format(timeFormat))

    useEffect(() => {
        const interval = setInterval(() => setNow(moment().tz(timezone).format(timeFormat)), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <p>Текущая дата и время: {now}</p>
        </div>
    );

}