const slides =({continer, nextArr, parentSelector, currentArr, totalArr, wrapperArr, fialdArr, prevArr })=>{
    const slider = document.querySelectorAll(continer),
          nextbtn = document.querySelector(nextArr),
          slidsParent = document.querySelector(parentSelector),
          current = document.querySelector(currentArr),
          total = document.querySelector(totalArr),
          slierWrapper = document.querySelector(wrapperArr),
          fiald =document.querySelector(fialdArr),
          width = window.getComputedStyle(slierWrapper).width,
          prevbtn = document.querySelector(prevArr);

        let slideIndex = 1;
        let offset = 0;

    const dots = [];

    
    slidsParent.style.position = 'relative';
    const indicator = document.createElement('ol');
          indicator.classList.add('carousel-indicators');
          slidsParent.append(indicator);


    for (let i = 0; i < slider.length; i++){
        const dot = document.createElement('li');
              dot.setAttribute('data-slide-to', i + 1);
              dot.classList.add('dot', i + 1);
              if(i == 0){
                dot.style.opacity = 1;
              }
              dots.push(dot);
              indicator.append(dot);
    }
    function activeSlide (){
        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }
    function currentIdex (){
        if (slider.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    }

    fiald.style.width = 100 * slider.length + "%";
    fiald.style.display = 'flex';
    slierWrapper.style.overflow = 'hidden';

    slider.forEach(item=>{
        item.style.width = width;
    });

        if(slider.length < 10){
            total.textContent = `0${slider.length}`;
            current.textContent = `0${slideIndex}`;
        }else{
            total.textContent = slider.length;
            current.textContent = slideIndex;
        }

    nextbtn.addEventListener('click', ()=>{
        if (offset == (+width.replace(/\D/g, '') * (slider.length - 1))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, ''); 
        }
        if(slideIndex == slider.length){
            slideIndex = 1;
        }else{
            slideIndex ++;
        }
        currentIdex();

        fiald.style.transform = `translateX(-${offset}px)`;
        activeSlide();
    });
    prevbtn.addEventListener('click', ()=>{
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slider.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }
        if(slideIndex == 1){
            slideIndex = slider.length;
        }else{
            slideIndex --;
        }
        fiald.style.transform = `translateX(-${offset}px)`;   
        currentIdex();
        activeSlide();
    });
    dots.forEach(item =>{
        item.addEventListener('click', (e)=>{
            const slideto = e.target.getAttribute('data-slide-to');

            slideIndex  = slideto;
            fiald.style.transform = `translateX(-${offset}px)`;
            offset = +width.replace(/\D/g, '') * (slideto - 1);
            currentIdex();
            activeSlide();
        });
    });

};

export default slides;