import React from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { enUS, hu } from 'date-fns/locale'

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    'en-US': enUS,
    'hu': hu,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
})

export default function TrainingCalendar({ timeRange, events, locale }) {

    const formats = {
        // the 'date' on each day cell of the 'month' view
        dateFormat: 'd',

        // the day of the week header in the 'month' view
        weekdayFormat: (date, culture, localizer) => localizer.format(date, 'EEEE', culture),

        // the day header in the 'week' and 'day' (Time Grid) views
        dayFormat: (date, culture, localizer) => localizer.format(date, 'EEEE - MMMM dd', culture),

        // the time in the gutter in the Time Grid views
        timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'HH:mm', culture)
    };

    const calendarEvents = events.map(e => {
        return {
            id: e._id,
            title: `${e.title} with ${e.trainer.name}`,
            start: new Date('2023-07-21 12:00:00'),
            end: localizer.add(new Date('2023-07-21 12:00:00'), e.duration_minutes, 'minutes')
        };
    });

    return (
        <div>
            <Calendar
                culture={locale}
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 800 }}
                defaultView={Views.WEEK}
                formats={formats}
                views={['week', 'month']}
                min={new Date('1970-01-01 08:00:00')}
                max={new Date('1970-01-01 22:00:00')}
            />
        </div>
    )
}