(function() {
<<<<<<< HEAD
    function HomeCtrl($scope, Room) {
        $scope.allRooms = Room.all
=======
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
>>>>>>> checkpoint3
    }

    angular
        .module('blocChat')
<<<<<<< HEAD
        .controller('HomeCtrl', ['$scope','Room', HomeCtrl]);
=======
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
>>>>>>> checkpoint3
})();
