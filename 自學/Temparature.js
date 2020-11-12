
function calulate() {
  const input = Number(document.querySelector('#temperature').value);
  console.log(input);
  const select = document.querySelector('select').value;
  let output;
  if (select == 'CtoF') {
    output = input * 9 / 5 + 32;
  } else {
    output = (input - 32) * 5 / 9;
  }
  document.querySelector('.anwser').value = output;
}
function click(){
  //document.querySelector('button').addEventListener('click', calulate);
  document.querySelector('#convert').addEventListener('click', calulate);
}
document.addEventListener('DOMContentLoaded', click);


