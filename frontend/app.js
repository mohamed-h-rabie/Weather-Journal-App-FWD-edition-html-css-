    const url = 'http://api.openweathermap.org/data/2.5/weather?zip='
    const apikey = '&appid=bec119c8b61ed0079f29216514fff4f4&units=metric'
    const performAction = async ()=>{
    try{
        const zipcode = document.getElementById('zip').value;
        const feeling = document.getElementById('feelings').value;
        const d = new Date();
        const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    
    
        const res = await fetch(url+zipcode+apikey);
        const data = await res.json();
        const temp = data.main.temp;
       
    
        const res2= await fetch('/sendData',{
         method:'POST',
         headers:{'content-Type':'application/json'},
         body:JSON.stringify({temp,feeling,date})   
        })
        
    
    
        const res3 = await fetch('/all')
        const data3 = await res3.json();
        console.log(data3.msg);
    
        document.getElementById("temp").innerHTML=data3.msg.temp
        document.getElementById("date").innerHTML=data3.msg.date
        document.getElementById("content").innerHTML=data3.msg.feeling
    }catch(err){
        console.log(err);
    }
   

}
document.getElementById('generate').addEventListener('click',performAction)