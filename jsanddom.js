     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         return Math.min.apply(null,values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var returnArr = [];
         var multipleOccArr = [];
         for(var i=0;i<values.length;i++){
            var value = values[i];
            if(multipleOccArr.indexOf(value)<0 && values.indexOf(value,parseInt(i)+1) < 0){
                returnArr.push(value);
            }else{
                multipleOccArr.push(value);   
            }
         }
         return returnArr.toString();
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(var i=0;i<=100;i++){
            var log = i;
            if(i%3 === 0 && i%5 === 0)
                log+=" FizzBuzz";
            else if(i%3 === 0)
                log+=" Fizz";
            else if (i%5 === 0)
                log+=" Buzz";
            console.log(log)
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         var returnArr = [];
         for(var i in fruits){
            var fruit = fruits[i];
            if(fruitsToRemove.indexOf(fruit) == -1)
                returnArr.push(fruit);
         }
         return returnArr;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if(typeof toPush === 'object' && toPush.length){
            for(var i in toPush){
                array.push(toPush[i]);
            }
         }else{
            array.push(toPush);
         }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var sum=0;
         for(var i in arguments){
            sum+=arguments[i];
         }
        return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         return (sourceStr.replace(/ /g,"").length === 0);
     }

     // write an example of a javascript closure

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var person = {
         firstName: "",
         lastName: "",
         city: "",
         state: "",
         zip: "",
         phone: {
             home:1234,
             work:43242,
             mobile:31534
         }
     }


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     var DataTable = function(){
         var columns = [];
         var rows = [];
         this.addColumns = function(cl1,cl2,cl3){
             for(var i in arguments)
                columns.push(arguments[i]);
         };
         this.addRows = function(r1,r2,r3){
             rows.push(arguments)
         };
         this.getData = function(){
             var returnArr = [];
             for(var i in rows){
                 var rowToReturn = {};
                 var currentRow = rows[i];
                 for(var j in columns){
                     rowToReturn[columns[j]]=currentRow[j];
                 }
                 returnArr.push(rowToReturn);
             }
             return returnArr;
         }
     }
     
     

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     $("#div1").append("<select id='div1Select'></select><button onClick='showSelectedValue()'>Click Me!</button>");
     for(var i=1;i<5;i++){
         $("#div1Select").append($('<option>',{
             value:i,
             text: "option "+i
         }))
     }
     var showSelectedValue = function(){
         alert($("#div1Select").val()+":"+$("#div1Select").text());
     }
     

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1". 
     var arr=[1,2,3,4,5];
     var uList = "<ul id='list1'>";
     for(var i in arr){
         uList+ = "<li>"+i+"</li>";
     }
     uList+="</ul>";   

     
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var fooDiv = document.getElementById("foobar");
     for(var i=1;i<3;i++){
        var checkbox = document.createElement("input");
         checkbox.type = 'checkbox'
         checkbox.name = i
         checkbox.id = 'cb'+i;
         fooDiv.appendChild(checkbox);
     }
     var linkOne = document.createElement('a');
     linkOne.innerHTML='checkAll';
     linkOne.onClick = function(){
         for(var i=1;i<3;i++){
             document.getElementById("cb"+i).checked=true;
         }
     }
     var linkTwo = document.createElement('a');
     linkTwo.innerHTML='uncheckAll';
     linkTwo.onClick = function(){
         for(var i=1;i<3;i++){
             document.getElementById("cb"+i).checked=true;
         }
     }
     fooDiv.appendChild(linkOne);
     fooDiv.appendChild(linkTwo);