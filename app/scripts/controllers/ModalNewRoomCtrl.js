(function() {
    function ModalNewRoomCtrl($uibModalInstance, Room) {
    this.submit = function() {
      Room.addRoomByName();
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('ModalNewRoomCtrl',  ModalNewRoomCtrl);
})();
