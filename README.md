# Introduction to Databases
**Using MongoDB as a data base!**
      
### MongoDB
MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.    
**MongoDB** : https://www.mongodb.com/      
**NodeJs Package** : npm install mongoose --save
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

# Hosted MongoDB
Proceed with the new registration for MongoDB Atlas (from  https://www.mongodb.com/cloud/atlas). After initially registering you can login and create your database server (cluster), which will work similarly to the original one from mongo lab, after we set it up.        
1) In the **Create New Cluster** screen, the free options to create your database server should be picked by default, so you should be able click the 'Create Cluster' button on the bottom left to proceed:
![image](https://user-images.githubusercontent.com/55139904/92408499-46c73600-f15b-11ea-81b3-e16784ac0235.png)
2) After that, you will be taken to your database Clusters dashboard, where you may need to wait for a bit until the cluster gets created.       
When it's done, you can click the **CONNECT** button for Cluster0 that just got created:
![image](https://user-images.githubusercontent.com/55139904/92408877-6874ed00-f15c-11ea-93ff-05268ed48f9c.png)
3) - Click one of the buttons to add an IP address button and paste the following value: **0.0.0.0/0**    
      
- After that, click the green '**Add IP Address**' button. That will enable access to our database server from any IP.           
        
- Create your MongoDB database user by entering a new username and a strong password in the fields below (you can use only alphanumeric characters, since special symbols/characters can cause issues in the database connection string later). Remember your credentials and then press the '**Create MongoDB User**' button.         

- After that is done, you can press the '**Choose a connection method**' button on the bottom right of the dialog.
![image](https://user-images.githubusercontent.com/55139904/92409209-695a4e80-f15d-11ea-8f40-9375db51a1f0.png)
4) In the window that follows, click the '**Connect Your Application**' button:
![image](https://user-images.githubusercontent.com/55139904/92409266-a0c8fb00-f15d-11ea-849d-8a57f23486b6.png)









