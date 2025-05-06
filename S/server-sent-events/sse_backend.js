app.get("/endpoint", (req, res)=>{

   // this 3 header are most important to keep the stream alive 
res.header = {'Content-Type': 'text/event-stream'}
res.header = {'Cache-Control': 'no-cache'}
res.header = {'Connection': 'keep-alive'}


// now we will send data at regular interval

let intervalId = setInterval(() => {
  res.send("updated data sent every 5 seconds");
}, 5000);

// frontend se close call hone pr ye call hoga
req.on("close", () => {
  clearInterval(intervalId);
});


});