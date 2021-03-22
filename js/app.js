'use strict';

let workingHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let allLocPerHour=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let Location= function(name,min,max,avgCookies){
  this.locName=name;
  this.min=min;
  this.max=max;
  this.avgCookies=avgCookies;
  this.cusNum=0;
  this.cookiesPerHour=[];
  this.total=0;
};
const seattle = new Location('Seattle',23,65,6.3);
const tokyo = new Location('Tokyo',3,24,1.2);
const dubai =new Location('Dubai',11,38,3.7);
const paris =new Location('Paris',20,38,2.3);
const lima =new Location('Lima',2,16,4.6);
Location.prototype.getSoldCookies = function (){
  for (let i = 0; i < workingHours.length; i++) {
    this.cusNum=Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.cookiesPerHour.push(Math.floor(this.cusNum*this.avgCookies));
    this.total+=this.cookiesPerHour[i];
  }
  this.cookiesPerHour.push(this.total);
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    allLocPerHour[i]+=this.cookiesPerHour[i];
  }
};




const table = document.createElement('table');
const tbodyEl=table.appendChild(document.createElement('tbody'));
let fixedCon=function(){
  const container= document.getElementById('Locations');
  const h1El=document.createElement('h1');
  container.appendChild(h1El);
  const pEl = document.createElement('p');
  container.appendChild(pEl);
  pEl.appendChild(table);
  const theadEl=table.appendChild(document.createElement('thead'));
  const trEl=document.createElement('tr');
  theadEl.appendChild(trEl);
  const thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='Location';
  for (let i = 0; i < (workingHours.length); i++) {
    const thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent=workingHours[i];
  }
  (trEl.appendChild(document.createElement('th'))).textContent='Daily Location Total';
};
fixedCon();
Location.prototype.render =function(){
  const trLocEl= tbodyEl.appendChild(document.createElement('tr'));
  const thLocEl=trLocEl.appendChild(document.createElement('th'));
  thLocEl.textContent=this.locName;
  for (let i = 0; i < (workingHours.length)+1; i++) {
    const tdEl=trLocEl.appendChild(document.createElement('td'));
    tdEl.textContent=this.cookiesPerHour[i];
  }
};
let dynamicCon=function(){
  const trdynEl=tbodyEl.appendChild(document.createElement('tr'));
  const thdynEl=trdynEl.appendChild(document.createElement('th'));
  thdynEl.textContent='Totals';
  for (let i = 0; i < allLocPerHour.length; i++) {
    const tdDynEl=trdynEl.appendChild(document.createElement('td'));
    tdDynEl.textContent=allLocPerHour[i];
  }
};


seattle.getSoldCookies();
seattle.render();
tokyo.getSoldCookies();
tokyo.render();
dubai.getSoldCookies();
dubai.render();
paris.getSoldCookies();
paris.render();
lima.getSoldCookies();
lima.render();
dynamicCon();


