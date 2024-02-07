// task 1

// let topla = 0;
// let cixma = 0;
// let vurma = 1;
// let bolme = 1;
// let riyaziemel = "vurma";

// function cixmama(num1, num2, callminus) {
//     cixma = num1 - num2;
//     return callminus(cixma);
// }

// function toplama(num1, num2, callplus) {
//     topla = num1 + num2;
//     return callplus(topla);
// }

// function bolmeme(num1, num2, callbolme) {
//     bolme = num1 / num2;
//     return callbolme(bolme);
// }

// function vurmama(num1, num2, callvur) {
//     vurma = num1 * num2;
//     return callvur(vurma);
// }

// function Output(output) {
//     console.log(output);
// }

// switch (riyaziemel) {
//     case "cixma":
//         cixmama(15, 5, Output);
//         break;
//     case "topla":
//         toplama(15, 5, Output);
//         break;
//     case "bolme":
//         bolmeme(15, 5, Output);
//         break;
//     case "vurma":
//         vurmama(15, 5, Output);
//         break;
//     default:
//         console.log("riyazi emel deyil!!!!");
//         break;
// }




// task 2


// let NewArr =[]
// let finalarr=[]
// function TekEded(arr,callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2===1) {
//             NewArr.push(arr[i])
//         }
       
//     }
//     return callback (NewArr,Output);

// }
// function onbes(arr,onbescallback) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j]%15===0) {
//             finalarr.push(arr[j])
//         }
//     }
//     return onbescallback(finalarr)
// }
// function Output(output) {
//     console.log(output);
// }
// let arr=[12,34,25,15,30,75]
// TekEded(arr,onbes)
