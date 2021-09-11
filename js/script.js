$(function (event){
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onload= function() {
  if (this.readyState == 4 && this.status == 200) {

    var myObj = JSON.parse(this.responseText);
    	 window.$myObj=myObj;
  }
  var d=new Date();
  var img = new Image();
  for(var i=0;i<7;i++){
	if((d.getDay()-1)==i){
        img.src = $myObj.img[i];
  		img.setAttribute("class", "img-responsive");
  		img.setAttribute("alt", "special");
  		img.setAttribute("id","spec-img");
  		document.getElementById("picture").appendChild(img);
		document.getElementById("spec-name").innerHTML="item:"+$myObj.name[i]+"<br>";
		document.getElementById("spec-price").innerHTML="price:"+$myObj.price[i];
		document.getElementById("spec-disc").innerHTML=$myObj.disc[i];
		break;
	}
}
};
xmlhttp.open("GET", "data/spec-data.json", true);
xmlhttp.send();
});