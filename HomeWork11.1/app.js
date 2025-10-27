let tableHTML = '<table>'
    
for(let i = 1; i <= 10; i++){
    tableHTML += '<tr>'
    for(let j = 1; j <= 10; j++){
        tableHTML += `<td>${i} * ${j} = ${i * j}</td>`
    }
    tableHTML += '</tr>'
}
tableHTML += '</table>'
document.getElementById('table-container').innerHTML = tableHTML;
    
