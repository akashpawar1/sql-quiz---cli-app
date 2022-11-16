// project: SQL queries? CLI App

var readlineSync = require('readline-sync')

var score = 0
var SQLquestions = [
  {
    question:"Which of the following are some common RDBMS in use?",
    option: ['Oracle','MySQL','HeidiSQL','All of the above'],
    answer: 3
  },
  {
    question:'What command is used to create a new table in SQL?',
    option: ['CREATE TABLE', 'BUILD TABLE', 'GENERATE TABLE', 'None of the above'],
    answer: 0
  },
  {
    question:'What does the following sttement in SQL do \n DROP TABLE student',
    option: ['Delete a table called student.',
             'Creates a table called student.', 
             'Check if there is a table called student.',
             'None of the above.'
            ],
    answer: 0
  },
  {
    question:'Which of the following are types of Unicode character string types in SQL?',
    option: ['nchar','ntext','Both A and B','None of the above'],
    answer:2
  },
  {
    question:'What does BLOB in SQL stand for?',
    option: [
      'Binary Large Objects',
      'Big Large Objects',
      'Binary Language for Objects',
      'None of the above'
    ],
    answer: 0
    
  },
  {
    question:'Which of the following datatype is most appropriate for storing a string of up to 255 characters?',
    option: ['TEXT', 'TINY TEXT', 'BLOB', 'BINARY'],
    answer: 1
  },
  {
    question:'What happens when no value is inserted in an ENUM list?',
    option: [
      'Nothing happens',
      'The code will crash',
      'A blank value is inserted in that case',
      'None of the above'
    ],
    answer:2
  },
  {
    question:'What is the range of integers that can be held in the MEDIUMINT datatype of SQL?',
    option: [
      'Signed number in the range of -8388608 to 8388607',
      'Unsigned number in the range of 0 to 16777215',
      'Both A and B',
      'None of the above'
    ],
    answer: 2
  },
  {
    question:'What does the following code snippet do? \n ALTER TABLE SUDENT ADD(ADDRESS VARCHAR2(20));',
    option: [
      'Adds a column called ADDRESS in the table student.',
      'Checks if a column called ADDRESS is present in the table student.',
      'Invalid Syntax',
      'None of the above'
    ],
    answer:0
  },
  {
    question:'Which of the following commands is used to delete all rows and free up space from a table?',
    option: ['TRUNCATE', 'DROP', 'DELETE', 'ALTER'],
    answer: 0
  },
  {
    question:'Which of the following commands are a part of Data Control Language?',
    option: ['Revoke','Grant','Both 1 and 2','None of the above'],
    answer:2
  },
  {
    question:'What does the following code snippet do?\
DELETE FROM STUDENTS \
WHERE AGE = 16;  \
ROLLBACK;',
    option: [
      'Performs an undo operation on the delete operation',
      'Deletes the rows from the table where AGE = 16',
      'Deletes the entire table',
      'None of the above'
    ],
    answer:0
  },
  {
    question:'When is the wildcard in WHERE clause used?',
    option: [
      'An exact match is necessary for a CREATE statement',
      'An exact match is not possible in a SELECT statement',
      'An exact match is necessary for a SELECT statement',
      'None of the above'
    ],
    answer:1
  },
  {
    question:'Which of the following is the full form of DDL?',
    option: [
      'Data definition language',
      'Data derivation language',
      'Dynamic data language',
      'Detailed data language'
    ],
    answer:0
  },
  {
    question:'Which SQL constraint do we use to set some value to a field whose value has not been added explicitly?',
    option: ['UNIQUE','NOT NULL','DEFAULT','CHECK'],
    answer:2
  }
]

function quiz(Qlist){
  for (var i = 0; i < Qlist.length; i++){
    console.log(String(i+1) + '. ' + Qlist[i].question)
    var userAns = readlineSync.keyInSelect(Qlist[i].option,"")

    if(userAns == Qlist[i].answer){
      console.log("CORRECT :) \n")
      score++
    }
    else{
      console.log("OOPS!!! \n")
    }
  }
 
}

userName = readlineSync.question("What's your name? ")
quiz(SQLquestions)
console.log(userName + " you scored = " + score)