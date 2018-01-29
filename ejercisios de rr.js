const promise = x => new Promise((resolve, reject) => { x ? resolve(x) : reject(new Error(x.toString())) });
const errorHandler = (e) => { console.log(e.toString()) };


cont promise= new Promise