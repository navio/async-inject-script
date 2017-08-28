function addRemoteScript(url,id){\
    return new Promise(function(resolve,reject){
        (function(d,s,url,id){
            var js, fjs = d.getElementsByTagName(s)[0];
            js = d.createElement(s); js.id = id || Date.now();
            js.onload = function(){
                resolve(js);
            };
            js.onerror = function(error){
                reject(error);
            }
            js.src = url;
            fjs.parentNode.insertBefore(js, fjs);
        }(document,'script',url,id)) 
    });
}