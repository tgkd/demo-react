import Moment from 'moment';
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment);

export default function getCalendar(year, month) {
  const calendar = []
  let startDate = moment([year, month]).startOf('month')

  while (startDate.month() === month) {
    const first = moment(startDate).startOf('isoWeek')
    const end = moment(startDate).endOf('isoWeek')
    calendar.push(moment.range(first, end))
    startDate = moment(first).add(7, 'day')
  }
  return calendar
}

