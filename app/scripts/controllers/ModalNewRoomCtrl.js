(function() {
    function ModalNewRoomCtrl($uibModalInstance, Room) {

    this.submit = function(newRoomName) {
      Room.addRoomByName(newRoomName)
      if(newRoomName){
      $uibModalInstance.close();
    }
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };

  }


  angular
    .module('blocChat')
    .controller('ModalNewRoomCtrl', ModalNewRoomCtrl);
})();
