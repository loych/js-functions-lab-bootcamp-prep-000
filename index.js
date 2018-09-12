// write your code below!
function happyHolidays(){
  return "Happy Holidays!"
}

function happyHolidaysTo(name){
  return happyHolidaysTo(`"Happy holidays", ${name}!`)
}
happyHolidaysTo("Happy holidays", Lisa)

function happyHolidayTo(holiday, name){
  return happyHolidayTo(`Happy ${holiday}, ${name}!`)
}
happyHolidayTo("Christmas","Lisa")

function holidayCountdown(holiday, numberday){
  return holidayCountdown(`It\'s ${numberday} days until ${holiday}!`)
}

holidayCountdown("Christmas", 5)