//making the var data equal to the json file so you can call and tug at elements of it
var data = require('./activity3_3_21.json')
//set i to 0
var i = 0;
//Iterating through the courses in the json
//tugging at courseInfo from the json file and calling it by using the data declaration
while(i< data.courseInfo.length){
    //targeting the course info and specifically only showing the class name
    console.log(data.courseInfo[i].className)
    //iterate one more time i++
    i++;
}

//