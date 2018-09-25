 // Get your shorts on - this is an array workout!
 // ## Array Cardio Day 1

 // Some data we can work with

 const inventors = [{
         first: 'Albert',
         last: 'Einstein',
         year: 1879,
         passed: 1955
     },
     {
         first: 'Isaac',
         last: 'Newton',
         year: 1643,
         passed: 1727
     },
     {
         first: 'Galileo',
         last: 'Galilei',
         year: 1564,
         passed: 1642
     },
     {
         first: 'Marie',
         last: 'Curie',
         year: 1867,
         passed: 1934
     },
     {
         first: 'Johannes',
         last: 'Kepler',
         year: 1571,
         passed: 1630
     },
     {
         first: 'Nicolaus',
         last: 'Copernicus',
         year: 1473,
         passed: 1543
     },
     {
         first: 'Max',
         last: 'Planck',
         year: 1858,
         passed: 1947
     },
     {
         first: 'Katherine',
         last: 'Blodgett',
         year: 1898,
         passed: 1979
     },
     {
         first: 'Ada',
         last: 'Lovelace',
         year: 1815,
         passed: 1852
     },
     {
         first: 'Sarah E.',
         last: 'Goode',
         year: 1855,
         passed: 1905
     },
     {
         first: 'Lise',
         last: 'Meitner',
         year: 1878,
         passed: 1968
     },
     {
         first: 'Hanna',
         last: 'Hammarström',
         year: 1829,
         passed: 1909
     }
 ];

 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
     'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
     'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
     'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
     'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
     'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
     'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
     'Blair, Tony', 'Blake, William'
 ];

 // Array.prototype.filter()
 // 1. Filter the list of inventors for those who were born in the 1500's

 const investorsBornIn1500s = inventors.filter(investor => investor.year >= 1500 && investor.year < 1600);
 console.log(investorsBornIn1500s);

 // Array.prototype.map()
 // 2. Give us an array of the inventors' first and last names

 const investorsFirstAndLastNames = inventors.map(investor => {
     return {
         first: investor.first,
         last: investor.last
     }
 });

 console.log(investorsFirstAndLastNames);

 // Array.prototype.sort()
 // 3. Sort the inventors by birthdate, oldest to youngest

 const sortedInvestors = inventors.sort((investorA, investorB) => investorA.year - investorB.year);
 console.log(sortedInvestors);

 // Array.prototype.reduce()
 // 4. How many years did all the inventors live?

 const allInvestorsYears = inventors.reduce((total, investor) => {
     return total + (investor.passed - investor.year);
 }, 0);
 console.log(allInvestorsYears);
 // 5. Sort the inventors by years lived

 const sortedByYearsLived = inventors.sort((investorA, investorB) => (investorA.passed - investorA.year) - (investorB.passed - investorB.year))
 console.log(sortedByYearsLived);
 // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
 // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 const listOfBoulevards = people.map(investor => investor.replace(',', ' de'));
 console.log(listOfBoulevards);

 // 7. sort Exercise
 // Sort the people alphabetically by last name
 const sortedPeople = people.sort((a, b) => {
     const [personALast] = a.split(','),
         [personBLast] = b.split(',');

     if (personALast === personBLast) {
         return 0;
     }

     const [firstElement] = [personALast, personBLast].sort();

     return firstElement === personALast ? -1 : 1;
 });

 console.log(sortedPeople);
 // 8. Reduce Exercise
 // Sum up the instances of each of these
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
     'truck'
 ];

 const sumUp = data.reduce((result, value) => {
     if (!result[value]) {
         result[value] = 0;
     }
     result[value]++;
     return result;
 }, {});

 console.log(sumUp);