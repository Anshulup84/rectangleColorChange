let rect =  document.querySelector('#center')

rect.addEventListener('mousemove', (details) => {

    let rectanglelocation = rect.getBoundingClientRect();
   let insiderectval =  details.clientX - rectanglelocation.left;
    
   if(insiderectval < rectanglelocation.width/2){
        let redColor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval)
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
   }
   else{
    let blueColor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width,0,255,insiderectval)
    gsap.to(rect, {
        backgroundColor: `rgb(0, 0, ${blueColor})`,
        ease: Power4,
    })
    
   }
    
})

rect.addEventListener('mouseleave', () => {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})