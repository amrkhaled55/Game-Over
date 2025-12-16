 "use strict"
const row=document.querySelector(".all-games")
export class GameList{
    constructor(data){        
this.data=data;
    }
    display(){
        let containerGames=``;
          if(this.data.length>30){
    this.data.length=20;
  }
for(let i=0;i<this.data.length;i++){ 
  if(this.data[i].title.length>30){
this.data[i].title = this.data[i].title.trim().slice(0, 10);
  }
containerGames+=` <div class="col-lg-3 col-md-6">
<div class="card mt-4  py-2" data-id=${this.data[i].id}>
  <img src="${this.data[i].thumbnail}" alt="theGame">
  <div class="card-body">
  <div class="the-header d-flex justify-content-between">
    <span class="">${this.data[i].title}</span>
    <a>free</a>
  </div>
  <small>${this.data[i].short_description}</small>
  </div>
  <div class="card-footer d-flex justify-content-between mt-2">
    <small>${this.data[i].genre}</small>
    <small>${this.data[i].platform}</small>
  </div>
  </div>
</div>`
}
row.innerHTML=containerGames
    }
}