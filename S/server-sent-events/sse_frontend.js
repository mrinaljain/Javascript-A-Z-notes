let source = new EventSource("https://sse.dev/test?interval=1");


source.onmessage = ( message)=>{

   console.log(message.data);
   
}

// this will close the server connection 
setTimeout(() => {
   source.close();
}, 10000);
