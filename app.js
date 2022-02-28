//fill in the arrays with things
const locations =[];
const restaurants =[];
const entertainment =[];
const transportation =[];

//set these equal to variables
let pickedLocation = RandomItemPicker(locations)
let pickedRestaurant = RandomItemPicker(restaurants)
let pickedEntertainment = RandomItemPicker(entertainment)
let pickedTransportation = RandomItemPicker(transportation)

//function for random item from an array
function RandomItemPicker(array){
    return[array[Math.floor(math.random()*array.length)]]
}
// change variables name
function Reselector (array){
switch(choice){
    case 'location':
        return pickedLocation = RandomItemPicker(locations)

    case 'restaurant':
        return pickedRestaurant = RandomItemPicker(restaurants)    

    case 'entertainment':
        return  pickedEntertainment = RandomItemPicker(entertainment)   

    case 'transportation':
        return pickedTransportation = RandomItemPicker(transportation)   

    default:
        alert('not a valid answer please try again')
        Reselector (array)
}
};

//write the actual message function that works as the main function.