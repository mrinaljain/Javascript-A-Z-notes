



function loadData(params) {
   var xhttp = new XMLHttpRequest();
   let apiEndPoint = "https://dummyjson.com/products/1";
   console.log(xhttp.readyState); // 0 here 
   xhttp.onreadystatechange = function () {
      console.log(this.readyState);
      if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
      }
   };
   xhttp.open('GET', apiEndPoint);
   xhttp.send();
}

loadData();