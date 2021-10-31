
function animate(AButton,wrapper,car,BButton){
    function  bounce(timeFraction) {
        return Math.pow(timeFraction, 2)
    }

    function makeEaseOut(timeFraction) {
        return timeFraction;
    }

    AButton.onclick = function() {
    let to = wrapper.clientWidth - car.clientWidth;
        animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
        car.style.left = to * progress + 'px';
        }
        });
    };

    BButton.onclick = function() {
        let to =10;
        animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
        car.style.left = to + 'px';
        }
        });
        }

    function animate({duration, draw, timing}) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
        });
    }
}  

const getCar = async(number)=>{

    const response = await fetch('http://127.0.0.1:3000/garage');
    const data = await response.json();

  return(JSON.stringify(data[number]['name'])) ; 
    
}

const getCount = async() =>{
    const response = await fetch('http://127.0.0.1:3000/garage');
    const data = await response.json();
    
    return await data.length;
}
/*(async () => {
    console.log(await getData())
})()
*/

const postCar = async()=>{ 
    let user = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputColor').value
    };
    let response = await fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    let result = await response.json();
    window.location.reload();
}

const changeCar = async()=>{ 
    let user = {
        name: document.getElementById('nameChange').value,
        surname: document.getElementById('changeColor').value
    };
    let response = await fetch('http://127.0.0.1:3000/garage', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    let result = await response.json();
    window.location.reload();
}

const  resetName =  async (number) => {
    nameChange.value = (await getCar(number));
    console.log(await getCar(number));
}

const getColor = async(number)=>{

    const response = await fetch('http://127.0.0.1:3000/garage');
    const data = await response.json();
     return(JSON.stringify(data[number]['color'])) ;  
}