//fill in the arrays with things
const locations =['Mexico', 'South Korea', 'Poland', 'Canada', 'New Jersey'];
const restaurants =['mexican', 'chinese', 'italian', 'french', 'greek'];
const entertainment =['movie','stand-up','concert','musical','bowling'];
const transportation =['train','bus','car','boat','helicopter'];
//set these equal to variables
let pickedLocation = RandomItemPicker(locations)
let pickedRestaurant = RandomItemPicker(restaurants)
let pickedEntertainment = RandomItemPicker(entertainment)
let pickedTransportation = RandomItemPicker(transportation)
//function for random item from an array
function RandomItemPicker(array){
    return array[Math.floor(Math.random()*array.length)]
}
// change variables name
function Reselector (choice){
switch(choice){
    case '1': //location
        return pickedLocation = RandomItemPicker(locations)
    case '2': //restaurant
        return pickedRestaurant = RandomItemPicker(restaurants)    
    case '3': //entertainment
        return  pickedEntertainment = RandomItemPicker(entertainment)   
    case '4': //transportation
        return pickedTransportation = RandomItemPicker(transportation)
    case '0': //reset whole trip
        pickedLocation = RandomItemPicker(locations)
        pickedRestaurant = RandomItemPicker(restaurants)
        pickedEntertainment = RandomItemPicker(entertainment) 
        pickedTransportation = RandomItemPicker(transportation)
        break;  
    default:
        alert('not a valid answer please try again')
        Reselector (array)
}
};
//write the actual message showing.
let userHappy = false
do{
    userHappy = confirm(`Hello, please confirm your trip to ${pickedLocation}, travel via ${pickedTransportation}, fine dinning at the local ${pickedRestaurant} restaurant and enjoy a ${pickedEntertainment}.`);
    if(userHappy === false){
        let reselectItem = prompt(`Enter "1" to change location ${pickedLocation}. Enter "2" to change dining at a ${pickedRestaurant} restaurant. Enter "3" to change entertainment ${pickedEntertainment} Enter "4" to change transpotation type ${pickedTransportation} Enter "0" to changed entire trip.`)
        Reselector(reselectItem)
    }
}
while(userHappy === false)
alert('Trip completed')