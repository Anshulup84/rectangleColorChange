let rect =  document.querySelector('#center')

rect.addEventListener('mousemove', (details) => {

    let rectanglelocation = rect.getBoundingClientRect();
   let insiderectval =  details.clientX - rectanglelocation.left;
    
   if(insiderectval < rectanglelocation.width/2){
    console.log("left")
   }
   else{
    console.log("right");
    
   }
    
})