function apiRes(status, message, affectedRows, data = null) {
   return {
    status: status,
    message: message,
    affectedRows: affectedRows,
    data: data,
    timeStamp: new Date().getTime()
   } 
}
// function success(success, message){
//    return {
//       success: success,
//       message: message,
//       timeStamp: new Date().getTime()
//    }
// }
// function notSuccess(success, message) {
//    return {
//       success: false,
//       message: "Ocorreu algum erro ao registrar um usuario",
//       timeStamp: new Date().getTime()
//    }
// }

module.exports = { apiRes }
