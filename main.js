const deg=6;

const $hr = $('#hr');
const $mn = $('#mn');
const $sc = $('#sc');
const $dc = $('#dclock');
const $body = $('body');

let colors=['violet','indigo','blue','green','yellow','orange','red']


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
   let c= '#'+(hh+mm+ss);


   $dc.html('<p class="dtext">'+day.getHours()+' : '+day.getMinutes()+' : '+sec +'</p>');
    
   $body.css('background',c);

},1000)