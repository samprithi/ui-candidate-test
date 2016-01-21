/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "Test Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse function' ); 

    // Make sure the result from the reverseString function is valid
    equal( reverseString('Subscribers rock'), "kcor srebircsbuS", "reversed string is valid" );
});

test("Test findMinValue", 2, function(){
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function');

	// Make sure the result from the finMinValue function is valid
    equal( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, "min value is valid"+ findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
});

test("Test findDistinctValues", 2, function(){
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

	// Make sure the result from the finMinValue function is valid
	var result = findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]);
	var expectedResult = [3,5,7,20,1].toString();

    strictEqual( result,expectedResult, "distinct values are valid"+ findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
});

test("Test removeFruits", 2, function(){
	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function');
	var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToBeRemoved = ['pear', 'banana'];
	var expectedResult = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'].toString();
	// Make sure the result from the finMinValue function is valid
    equal( removeFruits(fruits,fruitsToBeRemoved).toString(), expectedResult, "removed fruits");
});


test("Test pushOntoArray", 3, function(){
	equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');

	var baseArray = [1, 2, 3, 4, 5];
	var valueToPush = 6;
	var arrToPush = [7, 8, 9];
	// Make sure the result from the finMinValue function is valid
	var valuePushedToArrOutput = pushOntoArray(baseArray,valueToPush);
	equal( valuePushedToArrOutput.toString(), [1,2,3,4,5,6].toString(), "returned arr with value added is valid"+valuePushedToArrOutput);

	var baseArray = [1, 2, 3, 4, 5];
	var arrPushedToArrOutput = pushOntoArray(baseArray,arrToPush);
    equal( arrPushedToArrOutput.toString(), [1,2,3,4,5,7,8,9].toString(), "returned arr with arr added is valid"+arrPushedToArrOutput);
    
});


test("Test splitListStrUsingComma", 2, function(){
	equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');

	// Make sure the result from the finMinValue function is valid
	var expectedResult = ['The',' quick',' brown',' fox jumped over'].toString();
	var output = splitListStrUsingComma('The, quick, brown, fox jumped over').toString()
    equal( output, expectedResult, "Comma separted string array is valid");
});


test("Test sum", 2, function(){
	equal( typeof sum, 'function', 'Must contain a sum function');

	// Make sure the result from the finMinValue function is valid
    equal( sum(1, 1, 2, 3, 5, 7), (1+1+2+3+5+7) , "sum value is valid")
});


test("Test isOnlyWhitespace", 2, function(){
	equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function');

	// Make sure the result from the finMinValue function is valid
    equal( isOnlyWhitespace(''), true, "only white space check is valid");
});


