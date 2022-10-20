
## Project - Backend Developer

### Key points
- Git Branch name `https://github.com/Likemanu1999/Pushpak.git`


### Models
- Vehicle Model
{ 
  lincensePlateNumber: {string, mandatory},
  manufacturerNAme: {string, mandatory},
  model: {string, mandatory},
  fuelType: {string, mandatory,(petrol,desiel,electric)},
  ownerName: {string, mandatory},
  rc_status: {boolean, mandatory[Active, Inactive]},
  vehicleColor: {string, mandatory},
  registrationDate: {string, mandatory ,format("YYYY-MM-DD")},
  insuranceUpto: {string, mandatory ,format("YYYY-MM-DD")},
  fitnessUpto: {string, mandatory ,format("YYYY-MM-DD")},
  roadTaxUpto: {string, mandatory ,format("YYYY-MM-DD")},
}

- #violated Model

{ 
  lincensePlateNumber: {string, mandatory(ObjectId, mandatory, refs to user model) },
  manufacturerNAme: {string, mandatory}, 
  voilationType:{string, mandatory},
  status: {boolean, mandatory[paid, unpaid]},
  data: {string, mandatory ,format("YYYY-MM-DD")},
  time : {string, mandatory ,format("HH-MM-SS")},
  location:{string, mandatory},
  videoUrl:{string, mandatory}
}




## Vehicle APIs 
### POST /register
- Create a vehicle  
- Create a user document from request body.
- Return HTTP status 201 on a succesful user creation. Also return the user document
- Return HTTP status 400 if no params or invalid params received in request body.

### GET /getregister
- Returns all Vehicle details 
- Return the HTTP status 200 if any documents are found.
- If no documents are found then return an HTTP status 404


## PUT /register/:vehicleId
- Update the all details in vehicle
- Return an HTTP status 200 if updated successfully 
- Also make sure in the response you return the updated vehicle document. 

### DELETE /deletevehile/:vehicleId
- Check if the bookId exists and is not deleted. If it does, mark it deleted and return an HTTP status 200 with a response body with status and message.
- If the book document doesn't exist then return an HTTP status of 404



#### voilation APIs 
### POST /register
- Create a voilation  
- Create a user document from request body.
- Return HTTP status 201 on a succesful user creation. Also return the user document
- Return HTTP status 400 if no params or invalid params received in request body.

### GET /getregister
- Returns all voilation details 
- Return the HTTP status 200 if any documents are found.
- If no documents are found then return an HTTP status 404


## PUT /updatarequest/:voilationId
- Update the all details in voilation
- Return an HTTP status 200 if updated successfully 
- Also make sure in the response you return the updated vehicle document. 

### DELETE /deletedata/:voilationId
- Check if the bookId exists and is not deleted. If it does, mark it deleted and return an HTTP status 200 with a response body with status and message.
- If the book document doesn't exist then return an HTTP status of 404



## Testing 
- To test these apis create a new collection in Postman named Project Pushpak Assigment 
- Each api should have a new request in this collection
- Each request in the collection should be rightly named. Eg Create vehicle,  Get vehicle etc
- Each member of each team should have their tests in running state


## Collections
## vehicle
{
    "lincensePlateNumber" : "MH-03-R-007",
    "manufacturerName" : "Hero",
    "model" : "Herohonda",
    "fuleType" : "desiel",
    "ownerName" : "manoj Patil",
    "rc_status" : "Active",
    "vehicleColor" : "Block",
    "registrationDate" : "2022-05-22",
    "insuranceUpto" : "2022--05-30",
    "fitnessUpto" : "2022-05-31",
    "roadTaxUpto" : "2022-06-01"
 }   


### voilation
{
    "status": true,
    "message": "user successfully created",
    "data": {
        "lincensePlateNumber": "DJ-19-R-9923",
        "voilationType": "Traffic",
        "status": "unpaid",
        "date": "2022-04-02",
        "time": "23:22",
        "location": "Jalgaon",
        "videoUrl": "https://mail.google.com/mail/u/0/",
        "_id": "6350eb8f4d448de7035ee8b1",
        "__v": 0
    }
}

Installation And Run the code

1)  You need to open the repository in a code editor.
2) cd into Assigment folder and run below command. npm install
3)To start the backend server, run below command. npm src/index.js
4) You will see the Express app running on port 3000
5) Then after the run the code postman
