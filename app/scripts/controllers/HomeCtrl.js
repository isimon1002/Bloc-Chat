(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal ) {
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.allRooms = Room.all;

        this.addRoom = function(roomName) {

            $uibModal.open({
                url: '/',
                templateUrl: 'templates/modalNewRoom.html',
                size: 'sm',
                controller: 'ModalNewRoomCtrl as modalNewRoom'
            });
        }



        this.hide=false;
        this.currentRoom = '';
        this.setCurrentRoom = function (room) {
            console.log(room);
            this.currentRoom = room;
            this.roomMessages = Message.getByRoomId(this.currentRoom.$id);
            this.hide=true;
            //sdocument.write(roomName);
            //return roomName;

        };


        this.sendMessage = function (newMessage) {
            // this.newMessage.roomId = this.currentRoom.$id;
            // this.newMessage.username = this.currentUser;
            Message.send(newMessage,this.currentUser,this.currentRoom.$id);

          };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
