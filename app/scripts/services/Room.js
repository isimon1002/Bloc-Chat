(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
<<<<<<< HEAD
=======
    Room.addRoomByName = function(roomName) {
      rooms.$add({'roomName':roomName});

    };

>>>>>>> checkpoint3

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
