// 1.
let teaFlavors = ["green tea", "black tea", "oolong tea"]

const firstTea = teaFlavors[0]

//2. 
let cities = ["London", "Tokyo", "Paris", "New York"]

const favoriteCity = cities[2]

//3.
let teaTypes = ["herbal tea", "white tea", "masala chai"]

teaTypes[1] = "jasmine tea"
//console.log(teaTypes)

//4.
let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
citiesVisited[citiesVisited.length] = "Dharamshala"
//console.log(citiesVisited)

//5.
let arr = ["chai", "iced tea", "macha", "earl grey"]
const last_order = arr.pop()
//console.log(arr, last_order);

//6. Soft Copy (Both Manipulated)
let popularTeas = ["green tea", "black tea", "oolong tea", "chai"]
let softcopyTeas = popularTeas
popularTeas[0] = "ahhh"
//console.log(popularTeas,'\n', softcopyTeas);

//7. Hardcopy (no impact in copy)
let topCities = ["Berlin", "Singapore", "NY"]
let hardcopyCities = [...topCities] //rest and spread operator '...'
topCities.pop()
// console.log(topCities);
// console.log(hardcopyCities);

//8. Merge
let euCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

let worldCities = euCities.concat(asianCities)

//let worldCities = euCities + asianCities //string
//console.log(worldCities, '\n', typeof worldCities);

//9.length
let len = popularTeas.length
//console.log(len);

//10.
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList, cityBucketList.includes("Bangkok"))





