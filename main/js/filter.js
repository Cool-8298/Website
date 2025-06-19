const main = [
    { id: 1 },
    { id: 2 }
]

function search(array , search_object){
    return array.some(item =>{
        return Object.keys(search_object).every(key =>{
            return item.hasOwnProperty(key) && item[key] === search_object[key];
        });
    });
}

const item = {id:2}

console.log(search(main , item));