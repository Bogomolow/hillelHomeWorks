document.querySelector('button').addEventListener('click', () => {
    const form = document.forms.signin;
    const login = form.login.value;
    const data = form.date.value
    const gender = form.gender.value
    const city = form.city.value;
    const adress = form.adress.value
    const skills = form.skills.value;
    document.querySelector('#table').innerHTML = `
    login: ${login}\n 
    data: ${data}
    gender: ${gender}
    city: ${city}
    adress: ${adress}
    skills: ${skills}
 `
 form.style.display = 'none'
 });

