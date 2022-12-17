const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, un viernes. Cuenta.  4
// 04/01 es el 1 de abril, un sábado. No cuenta.  5
// 12/25 es el 25 de diciembre, un lunes. Cuenta.  0

function countHours(year, holidays) {
  let dates = holidays.map((date) => {
    const day = new Date(date + "/" + year);
    return day.getDay();
  });
  let hours = dates.filter((date) => {
    return date <= 5 && date > 0;
  });
  return hours.length * 2;
}

countHours(year, holidays); // 2 días -> 4 horas extra en el año

// misma función pero mas corta
function countHours(year, holidays) {
  return (
    holidays
      .map((date) => new Date(date + "/" + year).getDay())
      .filter((date) => date <= 5 && date > 0).length * 2
  );
}
// mismas funciones pero con arrow functions

function countHours(year, holidays) {
  let dates = holidays.map((date) => new Date(date + "/" + year).getDay());
  let hours = dates.filter((date) => date <= 5 && date > 0);
  return hours.length * 2;
}



// misma funcion mas corta y sin arrow functions

function countHours(year, holidays) {
  return (
    holidays
      .map(function (date) {
        return new Date(date + "/" + year).getDay();
      })
      .filter(function (date) {
        return date <= 5 && date > 0;
      }).length * 2
  );
}
