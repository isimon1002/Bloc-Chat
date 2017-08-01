(function() {
    function ModalNewRoomCtrl($uibModalInstance, Room) {

    this.submit = function(roomName) {
      Room.addRoomByName(roomName);
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('ModalNewRoomCtrl',  ['Room', '$uibModalInstance', ModalNewRoomCtrl]);
})();
