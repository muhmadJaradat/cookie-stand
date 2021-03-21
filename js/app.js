'use strict';
function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



const seattle= {
  locName: 'Seattle',
  min:23,
  max:65,
  avgcookies:6.3,
  CusNum:0,
  cookiesSold:0,
  cookiesPerHour:[],
  Total:0,
  getCusNum : function(){
    this.CusNum= randomNumb(this.min,this.max);
  },
  getSoldCookies :function(){
    for (let i = 0; i < 14; i++) {
      this.getCusNum(this.min,this.max);
      this.cookiesPerHour.push(Math.floor(this.CusNum*this.avgcookies));
      this.Total+=this.cookiesPerHour[i];
    }
  },



  render: function(){
    const container= document.getElementById('Locations');
    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.innerHTML=this.locName;
    const pEl = document.createElement('p');
    container.appendChild(pEl);
    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);
    for (let i = 0; i < (this.cookiesPerHour).length ; i++) {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      let time;
      if (i<=6){
        time=`${6+i}am`;}
      else{
        time=`${i-6}pm`;
      }
      liEl.textContent=`${time}: ${this.cookiesPerHour[i]} cookies`;
    }
    const lilel=document.createElement('li');
    ulEl.appendChild(lilel);
    lilel.textContent=`Total: ${this.Total}`;
  }
};
seattle.getSoldCookies(seattle.CusNum,seattle.avgcookies);
seattle.render();

const Tokyo= {
  locName: 'Tokyo',
  min:3,
  max:24,
  avgcookies:1.2,
  CusNum:0,
  cookiesSold:0,
  cookiesPerHour:[],
  Total:0,
  getCusNum : function(){
    this.CusNum= randomNumb(this.min,this.max);
  },
  getSoldCookies :function(){
    for (let i = 0; i < 14; i++) {
      this.getCusNum(this.min,this.max);
      this.cookiesPerHour.push(Math.floor(this.CusNum*this.avgcookies));
      this.Total+=this.cookiesPerHour[i];
    }
  },



  render: function(){
    const container= document.getElementById('Locations');
    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.innerHTML=this.locName;
    const pEl = document.createElement('p');
    container.appendChild(pEl);
    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);
    for (let i = 0; i < (this.cookiesPerHour).length ; i++) {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      let time;
      if (i<=6){
        time=`${6+i}am`;}
      else{
        time=`${i-6}pm`;
      }
      liEl.textContent=`${time}: ${this.cookiesPerHour[i]} cookies`;
    }
    const lilel=document.createElement('li');
    ulEl.appendChild(lilel);
    lilel.textContent=`Total: ${this.Total}`;
  }
};
Tokyo.getSoldCookies(Tokyo.CusNum,Tokyo.avgcookies);
Tokyo.render();

const Dubai= {
  locName: 'Dubai',
  min:11,
  max:38,
  avgcookies:3.7,
  CusNum:0,
  cookiesSold:0,
  cookiesPerHour:[],
  Total:0,
  getCusNum : function(){
    this.CusNum= randomNumb(this.min,this.max);
  },
  getSoldCookies :function(){
    for (let i = 0; i < 14; i++) {
      this.getCusNum(this.min,this.max);
      this.cookiesPerHour.push(Math.floor(this.CusNum*this.avgcookies));
      this.Total+=this.cookiesPerHour[i];
    }
  },



  render: function(){
    const container= document.getElementById('Locations');
    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.innerHTML=this.locName;
    const pEl = document.createElement('p');
    container.appendChild(pEl);
    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);
    for (let i = 0; i < (this.cookiesPerHour).length ; i++) {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      let time;
      if (i<=6){
        time=`${6+i}am`;}
      else{
        time=`${i-6}pm`;
      }
      liEl.textContent=`${time}: ${this.cookiesPerHour[i]} cookies`;
    }
    const lilel=document.createElement('li');
    ulEl.appendChild(lilel);
    lilel.textContent=`Total: ${this.Total}`;
  }
};
Dubai.getSoldCookies(Dubai.CusNum,Dubai.avgcookies);
Dubai.render();

const Paris= {
  locName: 'Paris',
  min:20,
  max:38,
  avgcookies:2.3,
  CusNum:0,
  cookiesSold:0,
  cookiesPerHour:[],
  Total:0,
  getCusNum : function(){
    this.CusNum= randomNumb(this.min,this.max);
  },
  getSoldCookies :function(){
    for (let i = 0; i < 14; i++) {
      this.getCusNum(this.min,this.max);
      this.cookiesPerHour.push(Math.floor(this.CusNum*this.avgcookies));
      this.Total+=this.cookiesPerHour[i];
    }
  },



  render: function(){
    const container= document.getElementById('Locations');
    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.innerHTML=this.locName;
    const pEl = document.createElement('p');
    container.appendChild(pEl);
    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);
    for (let i = 0; i < (this.cookiesPerHour).length ; i++) {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      let time;
      if (i<=6){
        time=`${6+i}am`;}
      else{
        time=`${i-6}pm`;
      }
      liEl.textContent=`${time}: ${this.cookiesPerHour[i]} cookies`;
    }
    const lilel=document.createElement('li');
    ulEl.appendChild(lilel);
    lilel.textContent=`Total: ${this.Total}`;
  }
};
Paris.getSoldCookies(Paris.CusNum,Paris.avgcookies);
Paris.render();

const Lima= {
  locName: 'Lima',
  min:2,
  max:16,
  avgcookies:4.6,
  CusNum:0,
  cookiesSold:0,
  cookiesPerHour:[],
  Total:0,
  getCusNum : function(){
    this.CusNum= randomNumb(this.min,this.max);
  },
  getSoldCookies :function(){
    for (let i = 0; i < 14; i++) {
      this.getCusNum(this.min,this.max);
      this.cookiesPerHour.push(Math.floor(this.CusNum*this.avgcookies));
      this.Total+=this.cookiesPerHour[i];
    }
  },



  render: function(){
    const container= document.getElementById('Locations');
    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.innerHTML=this.locName;
    const pEl = document.createElement('p');
    container.appendChild(pEl);
    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);
    for (let i = 0; i < (this.cookiesPerHour).length ; i++) {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      let time;
      if (i<=6){
        time=`${6+i}am`;}
      else{
        time=`${i-6}pm`;
      }
      liEl.textContent=`${time}: ${this.cookiesPerHour[i]} cookies`;
    }
    const lilel=document.createElement('li');
    ulEl.appendChild(lilel);
    lilel.textContent=`Total: ${this.Total}`;
  }
};
Lima.getSoldCookies(Lima.CusNum,Lima.avgcookies);
Lima.render();
