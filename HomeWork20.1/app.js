const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
function firstClick() {
  if (alertPlaceholder.children.length === 0) {
    appendAlert("Hello World!", 'success')
  }
  else {
    alertPlaceholder.innerHTML = '';
  }
}
if (alertTrigger) {
  alertTrigger.addEventListener('click', firstClick)
}

const birthday = moment("04-08-2007", ["MM-DD-YYYY"]);
const data = birthday.format("DD-MM-YYYY");

const outputData = document.getElementById('birthday');
if (outputData) {
  outputData.textContent = data;
}

const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;

document.querySelector('.data').addEventListener('click', () => {
  const inputData = document.getElementById('newData');
  const inpuValue = inputData.value;
  const error = document.getElementById('errorAlert');

  error.classList.add('d-none');
    inputData.classList.remove('is-invalid');
    

  if (!dateFormatRegex.test(inpuValue)) {
    error.textContent = 'Невірний формат';
    error.classList.remove('d-none');
    inputData.classList.add('is-invalid');
    return;
  }
  

  const formatData = moment(inpuValue, "DD-MM-YYYY", true);


  const newFormat = formatData.format('YYYY-MM-DD');
  const result = document.getElementById('result')
  result.textContent = newFormat;
   
})

inputData.addEventListener('input', () => {
   
    error.classList.add('d-none');
    inputData.classList.remove('is-invalid');
});

