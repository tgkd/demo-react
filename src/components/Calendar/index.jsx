/* eslint-disable */
import React from 'react'
import moment from 'moment'

import getCalendar from 'libs/calendarGenerator'
import './index.styl'

function getWeeks (calendar) {
  return calendar.map((week) => {
    let dayList = []
    for (let day of week.by('days')) {
      dayList.push(day)
    }
    return dayList.map((day) => {
      return day.format('D')
    })
  })
}

const getCalendarDaysTemplate = (weeks) => {
  return weeks.map((week, weekId) => {
    return (
      <div className="calendar-body__week" key={weekId}>
        {
          week.map((day, dayId) => {
            return (
              <div
                className={
                  `calendar-body__day ${day === moment().format('D') ? 'calendar-body__day--today' : ''}`
                }
                key={dayId}>
                { day }
              </div>
            )
          })
        }
      </div>
    )
  })
}

const Calendar = () => {
  const year = moment().year()
  const month = moment().month()
  const calendar = getCalendar(year, month)
  const weeksRows = getWeeks(calendar)
  return (
    <div className="calendar">
      <div className="calendar-title">
        <span className="calendar-title__month"> { moment().format('MMMM') } </span>
        <span className="calendar-title__year">{ moment().format('YYYY') }</span>
      </div>
      <div className="calendar-body">
        { getCalendarDaysTemplate(weeksRows) }
      </div>
    </div>
  )
}

export default Calendar

