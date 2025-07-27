let num = (prompt('Input your number'));
if(num[0] === num[1] && num[1] === num[2])
{
    console.log('Всі цифри однакові');
}else{
    console.log('Цифри різні');
}

if(num[0] === num[1] )
{
    console.log('є однакові цифри');
}else if(num[0] === num[2])
{
    console.log('є однакові цифри');
}else if(num[1] === num[2])
{
    console.log('є однакові цифри');
}else{
    console.log('нема однакових цифр');
}

