const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//const few = ages.every(age => age => 5);

//console.log(few);

// for(let i=0; i < companies.length; i++){
// 	console.log(companies[i]);
// }

// companies.forEach(function(company, index, companies){
// 	console.log(index);
// });

// let canDrink = [];
// for(let i=0; i < ages.length; i++){
// 	if(ages[i] >= 21){
// 		canDrink.push(ages[i]);
// 	}
// }

// const canDrink = ages.filter(age => {
// 	if(age >= 21){
// 		return true;
// 	}
// });

//console.log(canDrink);

//const cannotDrink = ages.filter(age => age < 21);
//console.log(cannotDrink);

// const retailCompanies = companies.filter(function(company){
// 	if(company.category == 'Retail')
// 		return true;
// });
//
//const retailCompanies = companies.filter(company => company.category == 'Auto');
//console.log(retailCompanies);


// const lastedTenYearsCompanies = companies.filter((company) => (company.end - company.start >= 10));

// const testMap = companies.map(company => `${company.name}, ${company.start} - ${company.end}`);

// const testMapNames = companies.map( company => company.name );

// const agesDouble = ages.map(age => age*2)

// console.log(agesDouble);

//  

// const sortedCompanies = companies.sort((a, b) => ((a.start > b.start ) ? 1 : -1 ));

// const sortedAges = ages.sort((a, b) => b - a);
//
// console.log(sortedAges);

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
// 	ageSum += ages[i];
// }

// let ageSum = ages.reduce((total, age) => total + age, 0)

// const totalYears = companies.reduce( (total , company) => total + (company.end - company.start), 0);

// console.log(totalYears);

//const combined = 
//
//ages.map(age => age * 2).filter(age => age >= 40).sort((a, b) => a - b).reduce((total,age) => total+age, 0 );
//
//
//console.log(ageSum);









