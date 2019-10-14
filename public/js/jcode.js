console.log('Client side scripting is loaded into browser');



const weatherForm = document.querySelector('form');
const addressData = document.querySelector('input');
const mess1 = document.querySelector('#mess1');
const mess2 = document.querySelector('#mess2');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location = addressData.value;
    mess1.textContent = 'loading.....';
    mess2.textContent ='';

        fetch('http://localhost:3000/weather?address='+location).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                console.log(data.error);
                mess1.textContent = data.error;
            }else{
                mess1.textContent = data.location;
                mess2.textContent = data.forecast;
                console.log(data.location);
                console.log(data.forecast);
            }
        });
});

})