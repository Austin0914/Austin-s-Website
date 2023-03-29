var button=document.getElementById("con")
console.log(button);
var btns=button.getElementsByClassName("btn")

// var article=getElementsByClassName("article")

for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
      var cur=document.getElementsByClassName("active");
      
      if(cur.length>0){
        cur[0].className=cur[0].className.replace(" active","");
      }
      this.className+=" active";
      console.log(i);
    });
}

function change_fuction(){
    var x=document.getElementById("art");
    var y=document.getElementById("tagID")
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display ='none';
    } else {
        x.style.display = 'none';
        y.style.display ='block';
    }
}
