# Observer Patern (pub - sub model)

Ek object mein jab koi change aaye, toh automatically dusre dependent objects ko notify karna.

“Observer pattern ek publish-subscribe (pub-sub) mechanism hai jisme ek subject (observable) apne observers (subscribers) ko notify karta hai jab bhi koi change hota hai.”


- **Subject** (Obesrvable) isko observe kiya jata hai / isko observer krte hai 

- **Observer** (Subscriber) ye log observe krte hai  


Example : Notification delivery on new video update on Youtube


## STEPS to Create Observer 
//1. Observwble classbanaao
//2. constructor mai ek observer space/array bnaao.
// 3. subscribe , unsubscribe, notify y 3 method do 
// 4. subscribe matlab jo bhi fumction mila usko observer mai push kr 
// 5. unsubscribe matlab observr mai ye vo fun pop
// 6. notify matlab observer k andar k sare fun ko line se execute kr
