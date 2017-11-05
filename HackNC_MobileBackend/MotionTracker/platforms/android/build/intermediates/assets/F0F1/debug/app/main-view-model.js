var SERVER_URL = "127.0.0.1";

var Observable = require("data/observable").Observable;
var geolocation = require("nativescript-geolocation");
var accelerometer = require("nativescript-accelerometer-advanced");

var SocketIO = require('nativescript-socketio').SocketIO; 
//var socketIO = new SocketIO(SERVER_URL);


var firstPos;
var userVelX = 0;
var userVelZ = 0;
var userVelY = 0;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}


function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    //viewModel.message = getMessage(viewModel.counter);
    viewModel.position = "-1000";

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.updateLocation = function(){
        console.log("update is called");
        var location = geolocation.getCurrentLocation({desiredAccuracy: 1, updateDistance: 0, minimumUpdateTime: 1, maximumAge: 5000, timeout: 10000}).then(function(loc){
            console.log(loc.direction);
            viewModel.set("message", "Latitude: " +  loc.latitude);
        }, function(e){
            console.log("You have a problem b");
        });
        
    }

    viewModel.monitorAccelerometer = function(){
        accelerometer.startAccelerometerUpdates(function(data) {
            if(data.sensortype == 10){
                userVelX += data.x;
                userVelY += data.y;
                userVelZ += data.z;
                // viewModel.set("message", " X: " + userVelX + " \nY: " + userVelY + " \nZ: " + userVelZ);
                viewModel.set("message", " X: " + userVelX + " \nY: " + userVelY + " \nZ: " + userVelZ);
                // console.log(data.x + "\t" + data.y + "\t" + data.z);
            }
        }, { sensorDelay: "game" });
    }

    viewModel.startMonitoring = function(){
        console.log("Started monitoring");

        geolocation.watchLocation(
            function (loc) {
                if (loc) {
                    if(!firstPos){
                        firstPos = loc;
                    }
                    var deltaXLoc = new geolocation.Location();
                    var deltaYLoc = new geolocation.Location();
                    deltaXLoc.latitude = loc.latitude;
                    deltaXLoc.longitude = firstPos.longitude;
                    deltaYLoc.latitude = firstPos.latitude;
                    deltaYLoc.longitude = loc.longitude;
                    var deltaX = geolocation.distance(deltaXLoc, firstPos) * 
                        (deltaXLoc.latitude > firstPos.latitude ? 1 : -1);
                    var deltaY = geolocation.distance(deltaYLoc, firstPos) * 
                        (deltaYLoc.longitude > firstPos.longitude ? 1 : -1);

                    viewModel.set("message", "deltaX: " + deltaX + "\n deltaY: " + deltaY + "\n Distance: " +   geolocation.distance(loc, firstPos) + "\n Time: " + ((loc.timestamp.getTime() -             firstPos.timestamp.getTime()) / 1000) + "s");
                    // socketIO.emit(new function(e){
                    //     console.log("Sent Data!");
                    // }, "testing_testing_1234");

                    console.log("Updated at: " + loc.timestamp);
                }
            }, 
            function(e){
                console.log("Error: " + e.message);
            }, 
        {desiredAccuracy: 3, updateDistance: 0, minimumUpdateTime : 100, maximumAge: 5000});
    }

    viewModel.enableLocationTap = function(args){
        console.log("Adding location request");
        geolocation.enableLocationRequest();
    }

    return viewModel;
}

exports.createViewModel = createViewModel;