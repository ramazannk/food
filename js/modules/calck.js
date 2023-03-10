const calck =()=>{
    let result = document.querySelector('.calculating__total span');
    let sex , height, age, weight, ratio;

    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function calcTotal(){
        if(!sex || !height || !age || !weight || !ratio){
            result.textContent = '____';
            return;
        }
        if(sex === 'female'){
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else{
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();
    function localStorageCalc(selector, activeClass){
        const element = document.querySelectorAll(selector);
              element.forEach(elem=>{
                elem.classList.remove(activeClass);
                if(elem.getAttribute('id') === localStorage.getItem('sex')){
                    elem.classList.add(activeClass);
                }
                if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                    elem.classList.add(activeClass);
                }
              });
    }
    localStorageCalc('.calculating__choose_big div', 'calculating__choose-item_active');
    localStorageCalc('#gender div', 'calculating__choose-item_active');

    function getStatickInfo (selector, activeClass){
        const elements = document.querySelectorAll(`${selector} div`);

        elements.forEach(elem =>{
            elem.addEventListener('click', (e)=>{
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', e.target.getAttribute('data-ratio'));
                }else{
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                
                elements.forEach(item =>{
                    item.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
        
        
    }
    getStatickInfo('.calculating__choose_big', 'calculating__choose-item_active');
    getStatickInfo('#gender', 'calculating__choose-item_active');

    function getStatikHumen (selector){
        const input = document.querySelector(selector);

        input.addEventListener('input', ()=>{
            if(input.value.match(/\D/g)){
                input.style.border = '1px solid red';
            }else{
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')){
                case 'weight':
                    weight = +input.value;
                    break;
                case 'height':
                    height = input.value;
                    break;
                case 'age':
                    age = input.value;
                    break;
            }
            calcTotal();
        });
        
    }
    getStatikHumen('#weight');
    getStatikHumen('#height');
    getStatikHumen('#age');
    
};
export default calck;