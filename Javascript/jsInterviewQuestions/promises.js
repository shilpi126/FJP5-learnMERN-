

// function placeOrder(drink){
//     return new Promise(function(resolve, reject){
//         if(drink === "coffee"){
//             resolve("Order placed")
//         }else{
//             reject("sorry, we only serve coffee");
//         }

//     }).then(function(res){
//         console.log(res);
//     }).catch (function(err){
//         console.log(err);
//     });
// }

// placeOrder("tea")





function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === "coffee"){
            resolve("Order placed")
        }else{
            reject("sorry, we only serve coffee");
        }
    }).then(function processOrder(order){
        return new Promise(function(resolve){
            // console.log(`coffee served for the ${order}`)
             resolve("coffee served for the ${order}")
        })
    }).catch(function(err){
        console.log(err);
    })
    

}

placeOrder("coffee")

// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log("order is being process");
//         resolve(`"coffee served for the" ${order}`)
//     })
// }

// placeOrder("coffee").then(function(orderFromCustomer){
//     console.log("Request Recieved");
//     let orderIsProcessed = processOrder(orderFromCustomer)
//         return (orderIsProcessed)
    
// }).then (function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })




// let myPromise = new Promise (function(resolve, reject){
//     let num1 = 1;
//     let num2 = 3;
    
//     if(num1 + num2 == 2){
//         resolve("value is equle to 2");
//     }else{
//         reject("No,value is not equle to 2");
//     }
// }).then(function (res) {
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })

