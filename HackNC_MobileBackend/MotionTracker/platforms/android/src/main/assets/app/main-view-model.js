var SERVER_URL = "172.30.64.11";

var Observable = require("data/observable").Observable;
var geolocation = require("nativescript-geolocation");
var accelerometer = require("nativescript-accelerometer-advanced");
require('nativescript-websockets');
var mySocket = new WebSocket(SERVER_URL, [ /* "protocol","another protocol" */]);
var monitorObject;


var firstPos;
var userVelX = 0;
var userVelZ = 0;
var userVelY = 0;

function createViewModel() {
    var viewModel = new Observable();
    viewModel.message = "Not Monitoring";

    viewModel.updateLocation = function(){
        console.log("update is called");
        var location = geolocation.getCurrentLocation({desiredAccuracy: 1, updateDistance: 0, minimumUpdateTime: 1, maximumAge: 5000, timeout: 10000}).then(function(loc){
            console.log(loc.direction);
            viewModel.set("message", "Latitude: " +  loc.latitude);
        }, function(e){
            console.log("You have a problem");
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

        console.log("Adding location request");
        geolocation.enableLocationRequest();

        monitorObject = geolocation.watchLocation(
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
                        (deltaXLoc.latitude > firstPos.latitude ? -1 : 1);
                    var deltaY = geolocation.distance(deltaYLoc, firstPos) * 
                        (deltaYLoc.longitude > firstPos.longitude ? 1 : -1);

                    viewModel.set("message", "deltaX: " + deltaX + "\n deltaY: " + deltaY + "\n Distance: " +   geolocation.distance(loc, firstPos) + "\n Time: " + ((loc.timestamp.getTime() -             firstPos.timestamp.getTime()) / 1000) + "s");

                    console.log(deltaX + " " + deltaY)

                    //console.log("Updated at: " + loc.timestamp);
                }
            }, 
            function(e){
                console.log("Error: " + e.message);
            }, 
        {desiredAccuracy: 3, updateDistance: 0, minimumUpdateTime : 100, maximumAge: 5000});
    }

    viewModel.stopMonitoring = function(){
        console.log("Stopping monitoring");
        if(monitorObject){
            geolocation.clearWatch(monitorObject);
            viewModel.set("message", "Not Monitoring");
            firstPos = null;
        }
    }

    return viewModel;
}

exports.createViewModel = createViewModel;