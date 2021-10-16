---
title: When should I use a class vs a function?
date: September 22, 2020
---

The other day, one of my coworkers asked me **When Should I use a class and when should I use a function?**

I'm going to try to answer this question. 

### Why does it matter? 


A common message to new developers is that they should write "clean code". 

These developers also get introduced to codebases with many classes around them, so its easy to assume that the "right" way to code is always using classes.

While coming up with smart classes is a way to make code simpler it comes with a cost of extra complexity. 

### When to use a class:

Classes are great for when you have a metaphor to use in the code you are writing.
Sometimes you might hear this being refereed to as an *abstraction*.  

For example, take this python code that connects to a mysql database:
```python
# importing the module
import MySQLdb

# opening a database connection
conn = MySQLdb.connect("localhost","testprog","stud","PYDB")

# define a cursor object
cursor = conn.cursor

# drop table if exists
Cursor.execute("IF STUDENT TABLE EXISTS DROP IT")

# query
sql = "CREATE TABLE STUDENT (NAME CHAR(30) NOT NULL, CLASS CHAR(5), AGE INT, GENDER CHAR(8), MARKS INT"

# execute query
cursor.execute(sql)

# close object
cursor.close()

# close connection
conn.close()
```
This code has a lot of context and is a lot to "remember" while you are coding.

This means that it would be a good idea to create a class that manages this for us.

```python
# importing the module
import MySQLdb


class Database():
    def __init__(self, hostname, dbname, user, password):
        # opening a database connection
        self.conn = MySQLdb.connect()
    
    def query(self, query):
        # define a cursor object
        cursor = self.conn.cursor

        try: 
            cursor.execute(query)
        finally:
            # close object
            cursor.close()

    def shutdown(self):
        self.conn.close()

# using the class
db = Database("localhost","testprog","stud","PYDB")

db.query("IF STUDENT TABLE EXISTS DROP IT")
db.query("CREATE TABLE STUDENT (NAME CHAR(30) NOT NULL, CLASS CHAR(5), AGE INT, GENDER CHAR(8), MARKS INT")
```

Creating a class in this context made it easier to call the database functionality.

It also allowed us to add a `finally` statement so we can handle errors if our query fails.

Which one would you rather maintain?

What creating a class does is trades complexity in one area for less complexity in another.

This also makes our code much more [DRY](https://www.drycode.io/)





### When to use a function:




