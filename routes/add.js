var data = require("../data.json");

exports.addFriend = function(req, res) {
    var newName = req.query.name;
    var newDes = req.query.description;
    var newImg = "http://lorempixel.com/400/400/people"; 

    console.log(newName + '|' + newDes + '|' + newImg);
    
    var newFriend = { 
        'name' : newName,
        'description' : newDes,
        'imageURL' : newImg,
    };

    data.friends.push(newFriend);
}

