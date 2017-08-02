(function() {
    function HomeCtrl(Room, $uibModal) {
        this.allRooms = Room.all;
        this.addRoom = function(roomName) {

            $uibModal.open({
                url: '/',
                templateUrl: 'templates/modalNewRoom.html',
                size: 'sm',
                controller: 'ModalNewRoomCtrl as modalNewRoom'
            });
        }
        this.currentRoom = '';
        this.setCurrentRoom = function (room) {
            console.log(room);
            this.currentRoom = room;
            //sdocument.write(roomName);
            //return roomName;

        };
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
