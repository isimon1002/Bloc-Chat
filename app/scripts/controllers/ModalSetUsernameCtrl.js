(function() {
    function ModalSetUsernameCtrl($cookies, $uibModalInstance, Room) {
        this.username = '';
        this.setUsername = function (username){
            console.log(username);
            this.username = username;
            $cookies.put('blocChatCurrentUser', this.username);
            if (username) {
                $uibModalInstance.close();
              }

        }

    }


  angular
    .module('blocChat')
    .controller('ModalSetUsernameCtrl', ModalSetUsernameCtrl);
})();
