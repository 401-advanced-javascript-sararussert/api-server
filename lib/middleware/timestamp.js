const { request } = require("../server");

// from kevin
function todaysDate(req, res, next) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let hour = String(today.getHours()).padStart(2, '0');
  var time = hour + ":" + String(today.getMinutes()).padStart(2, '0');
  today = `${yyyy}-${mm}-${dd}T${time}:00`;
  req.requestTime = today;
  next();
}

module.exports = todaysDate;
