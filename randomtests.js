var arr = [1,2,4,6];

var arr_map = arr.map(function (num){
    return num*(1/2);
});
console.log(arr_map);
arr  = arr.splice(1,2);

console.log(arr);

Array.prototype.equals = function(arr){
    for(let i = 0; i < this.length; i++){
        if(this[i] != arr[i]){
            return 'OPERATOR OVERLOAD';
        }
    }
    return true;
}


Array.prototype.myMethod = function(arr){

    for(let i = 0; i < this.length; i++){
        if(this[i] != arr[i]){
            return 'MY METHOD';
        }
    }
    return true;

}

arr1 = [1,2,3];
arr2 = [2,1,3];
console.log(arr1.equals(arr2));
console.log(arr1.myMethod(arr2));