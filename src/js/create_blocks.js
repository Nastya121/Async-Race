window.onload = function(){
    document.body.innerHTML = '';
    createGarage();
}

function createGarage(){
    createHeaderButonPages();  
    createInput();
    changeInput();
    createButtons();
    createMainTitle();
    (async () => {
        let c = (await getCount());
        for(let i=0;i<c;i++){
            createMainCar(i);
        }
    })()

}

function createWiners(){
    createHeaderButonPages();
    createWinnersTitle();
    createWinnersTable();
}

function createHeaderButonPages(){
    var header = document.createElement('header');
        header.className='header';
    var buttonGarage=document.createElement('button');
        buttonGarage.innerHTML='to garage';        
        buttonGarage.id ='Garage';

    var buttonWinners=document.createElement('button');
        buttonWinners.id = 'Winners'; 
        buttonWinners.innerHTML='to Winners';    
    
    document.body.append(header);
    header.appendChild(buttonGarage);
    header.appendChild(buttonWinners);

    document.getElementById('Garage').onclick = function(){
        document.body.innerHTML = '';
        createGarage(); 
    }
    document.getElementById('Winners').onclick = function(){
        document.body.innerHTML = '';
        createWiners(); 
    }

}

function createInput(){
    var divInput = document.createElement('form');
    divInput.id = 'formInput';
    divInput.className = 'divInput';
    divInput.onsubmit =function(event){
        event.preventDefault();
        postCar();
        return false;
    } 

    var inputName = document.createElement('input');
    inputName.id ='inputName';
    inputName.className='inputName';

    var inputColor = document.createElement('input');
    inputColor.className='inputColor';
    inputColor.type='color';

    inputColor.id='inputColor';
    var buttonCreate = document.createElement('button');
    buttonCreate.innerHTML='create';
    buttonCreate.id='create';

    document.body.append(divInput);
    divInput.appendChild(inputName);
    divInput.appendChild(inputColor);
    divInput.appendChild(buttonCreate);

}

function changeInput(){
    var divChange = document.createElement('form');
    divChange.id = 'divChange';
    divChange.className = 'divInput';
    divChange.onsubmit =function(event){
        event.preventDefault();
        changeCar();
        return false;
    } 

    var nameChange = document.createElement('input');
    nameChange.id ='nameChange';
    nameChange.className='inputColor';

    var changeColor = document.createElement('input');
    changeColor.className='inputColor';
    changeColor.type='color';
    changeColor.id='changeColor';

    var buttonChange = document.createElement('button');
    buttonChange.innerHTML='change';
    buttonChange.id='change';

    document.body.append(divChange);
    divChange.appendChild(nameChange);
    divChange.appendChild(changeColor);
    divChange.appendChild(buttonChange);
}

function createButtons(){
    var divButton = document.createElement('div');
    divButton.className = 'divButton';
    var butonRase = document.createElement('button');
    butonRase.className = 'buttonslist';
    butonRase.innerHTML= 'Rase';

    var buttonRest = document.createElement('button');
    buttonRest.className = 'buttonslist';
    buttonRest.innerHTML= 'Reset';
    buttonRest.id= 'Reset';

    var buttonCreate = document.createElement('button');
    buttonCreate.className = 'buttonslist';
    buttonCreate.innerHTML= 'Create Cars';

    document.body.append(divButton);
    divButton.appendChild(butonRase);
    divButton.appendChild(buttonRest);
    divButton.appendChild(buttonCreate);
}

function createMainTitle(){
    var mainTitle = document.createElement('main');
    var mainDiv1 = document.createElement('div');
    mainDiv1.className = 'mainDiv1';
    var mainTitleText =document.createElement('p');
    mainTitleText.innerHTML='Garage: ';

    (async () => {
        let count = (await getCount());
        var mainTitleCount =document.createElement('p');
        mainTitleCount.innerHTML= count;
        mainDiv1.appendChild(mainTitleCount);
    })()


    var mainDiv2 = document.createElement('div');
    mainDiv2.className = 'mainDiv2';
    var mainTitleText2 =document.createElement('p');
    mainTitleText2.innerHTML='Page - ';
    var mainTitleCount2 =document.createElement('p');
    mainTitleCount2.innerHTML ='count page'; 

    document.body.append(mainTitle);
    mainTitle.appendChild(mainDiv1);
    mainTitle.appendChild(mainDiv2);
    mainDiv1.appendChild(mainTitleText);
    mainDiv2.appendChild(mainTitleText2);
    mainDiv2.appendChild(mainTitleCount2);
}



function createMainCar(number){
    createImg(number);
}

function createImg(number){

const  carName =  async () => {    
    var carsButtons = document.createElement('div');
    carsButtons.className='carsButtons';
    var carsReset = document.createElement('button');
    carsReset.className = 'carsReset';
    carsReset.innerHTML='Select';
    carsReset.id= 'Reset';

    var carsRemove = document.createElement('button');
    carsRemove.className = 'carsRemove';
    carsRemove.innerHTML='Remove';
    var carNameBlock= document.createElement('div');
    
        var carName = document.createElement('p');
        carName.className='carName';
        carName.id='carName';
        carName.innerHTML=(await getCar(number));
        carNameBlock.appendChild(carName);

        document.body.append(carsButtons);
        carsButtons.appendChild(carsReset); 
        carsButtons.appendChild(carsRemove);
        carsButtons.appendChild(carNameBlock);

        carsReset.onclick = function resetValue(){
            resetName(number);
        }
};

carName();

const  carColor =  async () => {
    var AB = document.createElement('div');
    AB.className='AB';
    AB.id='AB';
    var AButton = document.createElement('button');
    AButton.className = 'AButton';
    AButton.id='AButton';
    AButton.innerHTML='A';
    var BButton = document.createElement('button');
    BButton.className = 'BButton';
    BButton.id = 'BButton';
    BButton.innerHTML='B';


    var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
    var wrapper2 = document.createElement('div');
    wrapper2.className = 'car';

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"); 
    
    var color =(await getColor(number));
    console.log(color);
try{
var test=color.slice(1, color.length-1);
}
catch{var test='green';}

    var car = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    car.setAttribute('fill', test);
    car.setAttribute('width', '20');
    car.setAttribute('height', '20');
    car.setAttribute('position', 'absolute');
    car.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    car.id = 'car';
    var mark = document.createElement('img');
        mark.className = 'mark';
        mark.src = './img/mark.svg'; 
         
    document.body.append(AB);
    AB.appendChild(AButton);
    AB.appendChild(BButton);
    document.body.append(wrapper);
    wrapper.appendChild(wrapper2);
    wrapper2.appendChild(svg);
    svg.appendChild(car);
    wrapper.appendChild(mark);

    animate(AButton,wrapper,wrapper2,BButton);

};

carColor(); 
}

function createWinnersTitle(){
    var mainTitleWinners = document.createElement('main');
    var mainDiv1Winners = document.createElement('div');
    mainDiv1Winners.className = 'mainDiv1';
    var mainTitleTextWinners =document.createElement('p');
    mainTitleTextWinners.innerHTML='Winners - ';
    var mainTitleCountWinners =document.createElement('p');
    mainTitleCountWinners.innerHTML =' (count)';

    document.body.append(mainTitleWinners);
    mainTitleWinners.appendChild(mainDiv1Winners);
    mainDiv1Winners.appendChild(mainTitleTextWinners);
    mainDiv1Winners.appendChild(mainTitleCountWinners);

}

function createWinnersTable(){
    var wTable = document.createElement('table');
    wTable.className = 'wTable';
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.className='td';
    var text1 = document.createElement('p');
    text1.innerHTML='Number';
    var td2 = document.createElement('td');
    td2.className='td';
    var text2 = document.createElement('p');
    text2.innerHTML='Car';
    var td3 = document.createElement('td');
    td3.className='td';
    var text3 = document.createElement('p');
    text3.innerHTML='Name';
    var td4 = document.createElement('td');
    td4.className='td';
    var text4 = document.createElement('p');
    text4.innerHTML='Winners';
    var td5 = document.createElement('td');
    td5.className='td';
    var text5 = document.createElement('p');
    text5.innerHTML='Beast Time';

    document.body.append(wTable);
    wTable.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(text1);
    tr.appendChild(td2);   
    td2.appendChild(text2);
    tr.appendChild(td3);   
    td3.appendChild(text3);  
    tr.appendChild(td4);   
    td4.appendChild(text4); 
    tr.appendChild(td5);       
    td5.appendChild(text5);  

}

