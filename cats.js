var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name : String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//********Adding a new cat to the DB******
// var george = new Cat({
// 	name: "George",
// 	age: "11",
// 	temperament: "Grouchy"
// });
// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something got wrong!");
// 	} else {
// 		console.log("We just saved a cat to the DB: ")
// 		console.log(cat);
// 	}
// });

//******retrieve all cats from the DB and console.log each one*****
Cat.find({}, function(err, cats){
	if(err){
		console.log("ERROR!");
		console.log(err);
	} else {
		console.log("All the cats...");
		console.log(cats);
	}
});