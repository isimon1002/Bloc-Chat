(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                url: '/',
                templateUrl: 'templates/modalSetUsername.html',
                size: 'sm',
                controller: 'ModalSetUsernameCtrl as modalSetUsername',
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
