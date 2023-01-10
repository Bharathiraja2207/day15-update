//form
form_submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    var firstname=document.querySelector('[placeholder="firstname"]')
    var lastname=document.querySelector('[placeholder="last name"]')
    var address=document.querySelector('[ placeholder="address"]')
    var city=document.querySelector('[placeholder="city"]')
    var choosecar=document.querySelector('#car')
    console.log('form submitted');
    console.log(firstname,lastname,address,city,choosecar);

    var datas=[firstname,lastname,address,city,choosecar]

var creating_tr=document.createElement('tr');
    for(i=0;i<5;i++){
        var creating_td=document.createElement('td')   
        creating_td.innerText=datas[i].value
        creating_tr.append(creating_td)
    }
    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value=""
    }
})

//calculator
function clearscreen(){
    document.getElementById("result").value="";
}
function display(value){
document.getElementById("result").value +=value
}
function calculate(){
var a=document.getElementById("result").value;
var b=eval(a);
document.getElementById("result").value=b
}