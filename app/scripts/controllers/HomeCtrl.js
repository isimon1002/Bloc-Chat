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
            Room.addRoomByName(roomName);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
