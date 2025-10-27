"use strict";

var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var appendAlert = function appendAlert(message, type) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
  alertPlaceholder.append(wrapper);
};
var alertTrigger = document.getElementById('liveAlertBtn');
function firstClick() {
  if (alertPlaceholder.children.length === 0) {
    appendAlert("Hello World!", 'success');
  } else {
    alertPlaceholder.innerHTML = '';
  }
}
if (alertTrigger) {
  alertTrigger.addEventListener('click', firstClick);
}
var birthday = moment("04-08-2007", ["MM-DD-YYYY"]);
var data = birthday.format("DD-MM-YYYY");
var outputData = document.getElementById('birthday');
if (outputData) {
  outputData.textContent = data;
}
var dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
document.querySelector('.data').addEventListener('click', function () {
  var inputData = document.getElementById('newData');
  var inpuValue = inputData.value;
  var error = document.getElementById('errorAlert');
  error.classList.add('d-none');
  inputData.classList.remove('is-invalid');
  if (!dateFormatRegex.test(inpuValue)) {
    error.textContent = 'Невірний формат';
    error.classList.remove('d-none');
    inputData.classList.add('is-invalid');
    return;
  }
  var formatData = moment(inpuValue, "DD-MM-YYYY", true);
  var newFormat = formatData.format('YYYY-MM-DD');
  var result = document.getElementById('result');
  result.textContent = newFormat;
});
inputData.addEventListener('input', function () {
  error.classList.add('d-none');
  inputData.classList.remove('is-invalid');
});