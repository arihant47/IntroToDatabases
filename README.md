# Introduction to Databases
**Using MongoDB as a data base!**
      
### MongoDB
MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.    
**MongoDB** : https://www.mongodb.com/
## MongoDB Installation Instructions (With GoormIDE)
1. #**cd ..** and go into the main directory (For GoormIDE go into **root@goorm:**)        
[**NOTE** : This is just to make the database usable for all the directories inside the container)      
2. Use #**echo "mongod --nojournal" > mongod**     
This creates the mongo daemon(monogd) file     
3. Then #**chmod a+x mongod**     
To give permissions     
4. Use #**./mongod** to run that file    
      
[**NOTE 1:** ./mongod should always run in a new terminal whenever you are dealing with databases]    
[**NOTE 2:** To open MongoShell use command #**mongo**    
There you can use the MongoDB commands (show dbs, exit, find() etc.)]
