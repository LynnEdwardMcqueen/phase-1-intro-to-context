// Your code here

let testString = [
    "Ron",
    "Mexico",
    "Movie Star",
    14.25
]

function createEmployeeRecord(employeeArray)
{
    let employeeRecord = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [],  
    }
    
    // return ("foo")
    return (employeeRecord)
}

let testArray = [[
    "Ron",
    "Mexico",
    "Movie Star",
    14.25],
    ["Barbara",
     "Bach",
     "Hot Woman",
     20000]
]

twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
function createEmployeeRecords( testArray)
{
    let employeeRecordArray = testArray.map(createEmployeeRecord)
    return employeeRecordArray


}

function createTimeInEvent(employeeObject, dateStamp)
{
    let timeInRecord = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10),
    }
    employeeObject.timeInEvents.push(timeInRecord)
    return(employeeObject)

}

function createTimeOutEvent(employeeObject, dateStamp)
{
    let timeOutRecord = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10),
    }
    employeeObject.timeOutEvents.push(timeOutRecord)
    return(employeeObject)

}

function hoursWorkedOnDate(employeeRecord, dateString) {

    let dateIndex = null
    let timeInHour = 0;
    let timeOutHour = 0;
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++) {
        if (employeeRecord.timeInEvents[i].date === dateString) {
            dateIndex = i;
            timeInHour = employeeRecord.timeInEvents[i].hour;
            break;
        }
    }
    
    if (dateIndex != null) {
        timeOutHour = employeeRecord.timeOutEvents[dateIndex].hour;
    }

    return (timeOutHour - timeInHour)/100;  
}

function wagesEarnedOnDate(object, date) {
    return hoursWorkedOnDate(object, date) * object.payPerHour;
}

function allWagesFor(employeeObject) {
    let cumulativeWages = 0;
    for (let i = 0; i < employeeObject.timeInEvents.length; i++) {
        cumulativeWages += wagesEarnedOnDate(employeeObject, employeeObject.timeInEvents[i].date);
    }

    return(cumulativeWages)
}

 
function calculatePayroll (employeeObjects)  
{
    let totalWage = 0;
    for (let employee of employeeObjects) {
        totalWage += allWagesFor(employee);
    }
    return totalWage;
}


let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10]);
let sRecord = createEmployeeRecord(["Simba", "", "King", 100]);
sRecord = createTimeInEvent(sRecord,"2019-01-01 0900")
sRecord = createTimeOutEvent(sRecord, "2019-01-01 1300")
sRecord = createTimeInEvent(sRecord,"2019-01-02 1000")
sRecord = createTimeOutEvent(sRecord, "2019-01-02 1300")
rRecord = createTimeInEvent(rRecord, "2019-01-11 0900")
rRecord = createTimeOutEvent(rRecord,"2019-01-11 1300")
rRecord = createTimeInEvent(rRecord, "2019-01-12 1000")
rRecord = createTimeOutEvent(rRecord,"2019-01-12 1300")
debugger
let employeeArray = [rRecord, sRecord]
let h = allWagesFor(rRecord)
let i = allWagesFor(sRecord)
let g = calculatePayroll(employeeArray)
