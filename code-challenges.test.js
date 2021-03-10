// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe('when random is called', () => {
    it('removes the first item from the array and shuffles the remaining content.'', () => {
        let array = ["purple", "blue", "green", "yellow", "pink"]
        let newArray = random(array)
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        expect(newArray.length).toEqual(4)
    })
    it('emoves the first item from the array and shuffles the remaining content.', () => {
        let array2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        let newArray2 = random(array2)
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(newArray2.length).toEqual(4)


var colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = [
	"chartreuse",
	"indigo",
	"periwinkle",
	"ochre",
	"aquamarine",
	"saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

function random(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

console.log(random(colors1));

console.log(random(colors2));

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

describe("when cubeIt is called", () => {
	it("returns sum of all numbers cubed", () => {
		let array = [2, 3, 4];
		let newArray = cubeIt(array);
		// Expected output: 99
		expect(newArray).toEqual(99);
	});
	it("returns sum of all numbers cubed", () => {
		let array2 = [0, 5, 10];
		let newArray2 = cubeIt(array2);
		// Expected output: 1125
		expect(newArray2).toEqual(1125);
	});
});

var cubeAndSum1 = [2, 3, 4];
// Expected output: 99
var cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

const cubeIt = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum = sum + array[i] * array[i] * array[i];
	}
	return sum;
};

console.log(cubeIt(cubeAndSum1));
console.log(cubeIt(cubeAndSum2));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe('when  maxMin is called', () => {
    it('returns an array of the minimum and maximum numbers in that order.', () => {
        let array = [3, 56, 90, -8, 0, 23, 6]
        let newArray = maxMin(array)
        // Expected output: [-8, 90]
        expect(newArray).toEqual([-8, 90])
    })
    it('returns an array of the minimum and maximum numbers in that order.', () => {
        let array2 = [109, 5, 9, -59, 8, 2]
        let newArray2 = maxMin(array2)
        // Expected output: [-59, 109]
        expect(newArray2).toEqual([-59, 109])
    })
}) 



var nums1 = [3, 56, 90, -8, 0, 23, 6];
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24];
// Expected output: [-59, 109]

const maxMin = (array) => {
	let newArray = [];
	let length = array.length - 1;
	array.sort(function (a, b) {
		return b - a;
	});
	newArray.push(array[length], array[0]);
	return newArray;
};

console.log(maxMin(nums1));
console.log(maxMin(nums2));

// b) Create the function that makes the test pass.

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("function that takes in a string ", () => {
	it("a return with every other letter capitalized", () => {
		let string = "albatross";
		let newString = upcase(string);
		// Expected output: "aLbAtRoSs"
		expect(newString).toEqual("aLbAtRoSs");
	});
	it("a return with every other letter capitalized", () => {
		let string2 = "jabberwocky";
		let upcase = upcase(string2);
		// Expected output: "jAbBeRwOcKy"
		expect().toEqual("jAbBeRwOcKy");
	});
});

var testString1 = "albatross";
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky";
// Expected output: "jAbBeRwOcKy"

const upcase = (string) => {
	var newString = "";
	for (i = 0; i < string.length; i++) {
		newString +=
			i % 2 !== 0 ? string.charAt(i).toUpperCase() : string.charAt(i);
	}
	return newString;
};

console.log(upcase(testString1));
console.log(upcase(testString2));

// b) Create the function that makes the test pass.

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3];
var testArray2 = [7, 8, 2, 3, 1, 5, 4];
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.


test('when noDuplicates is called returns one array with no duplicate values', () => {
    let testArray1 = [3, 7, 10, 5, 4, 3, 3]
    let testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })

const noDuplicates = (array1, array2) => {
	let newArr = array1.concat(array2);
	let finalArr = newArr.filter(
		(value, index) => newArr.indexOf(value) === index
	);
	return finalArr;
};

console.log(noDuplicates(testArray1, testArray2));
