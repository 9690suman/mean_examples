exports.removeByAttr = removeByAttr;

function removeByAttr(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

/*
//Example
var arr = [{id:1,name:'serdar'},{id:2,name:'alfalfa'},{id:3,name:'joe'}];
removeByAttr(arr, 'id', 1);
// [{id:2,name:'alfalfa'},{id:3,name:'joe'}]

removeByAttr(arr, 'name', 'joe');
// [{id:2,name:'alfalfa'}]
*/