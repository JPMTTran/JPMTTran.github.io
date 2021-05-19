var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
function likePhoto(photoNum){
    if(photoNum === 1){
        counter1++;
        console.log(counter1);
        document.getElementById("likeCount1").innerHTML = counter1;
    } else if (photoNum === 2){
        counter2++;
        console.log(counter2);
        document.getElementById("likeCount2").innerHTML = counter2;
    } else if (photoNum === 3){
        counter3++;
        console.log(counter3);
        document.getElementById("likeCount3").innerHTML = counter3;
    } else if (photoNum === 4){
        counter4++;
        console.log(counter4);
        document.getElementById("likeCount4").innerHTML = counter4;
    } else if (photoNum === 5){
        counter5++;
        console.log(counter5);
        document.getElementById("likeCount5").innerHTML = counter5;
    }
}

var user = {
    "name" : "John-Paul",
    "name_last" : "Tran",
    "followers" : ["Amy" , "Hailey" , "Jennifer" , "Austin" , "Amy"],
    "profile_pic" : "https://www.kumulos.com/wp-content/uploads/2013/10/pikachu-6.png"
}

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);