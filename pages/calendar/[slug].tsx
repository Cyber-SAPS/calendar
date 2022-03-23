import * as React from "react";
import { calendarDate } from "@/features/addons/convertDate";
import { GoBack } from "@/ui/goBack";


export default function Event({ event}: { event: any }){
    return(
        <div>
          <GoBack />
            <h2 className="text-center mb-10">{event.title}</h2>
            {calendarDate(event.date)}<br />
            {event}
        </div>
    )
}

