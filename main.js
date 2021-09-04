const deg=6;

const $hr = $('#hr');
const $mn = $('#mn');
const $sc = $('#sc');
const $dc = $('#dclock');


setInterval(()=>{
   let day = new Date();
   let hh = day.getHours() * 30;
   let mm= day.getMinutes() * deg;
   let ss= day.getSeconds() * deg;
   console.log(ss);
   $hr.css({
    'transform' :'rotateZ('+(hh+(mm/12))+'deg)'
   });

   $mn.css({
    'transform' :'rotateZ('+(mm)+'deg)'
   });

   $sc.css({
    'transform' :'rotateZ('+ss+'deg)'
   });

   var obj = document.createElement('audio');
   obj.src = './clock.wav'; 
   obj.play(); 

   let sec= day.getSeconds() < 10 ? '0'+day.getSeconds() : day.getSeconds();


   $dc.html('<p class="dtext">'+day.getHours()+' : '+day.getMinutes()+' : '+sec +'</p>');

},1000)