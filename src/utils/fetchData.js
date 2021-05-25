let XMLHttpsRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (urlapi) => {
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpsRequest();
        xhttp.open('GET', urlapi, true)
        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState === 4){    
                (xhttp.status === 200 ) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error", urlapi))
            }
        })
        xhttp.send();
    })
}

module.exports = fetchData;