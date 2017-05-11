(function() {
  'use strict';

  var app = angular.module('techweek', []);
  var db = new PouchDB('db_techweek');

  var $controller = function($timeout){
    var localMsg = {};
    var vm = this;
    vm.list = [];

    PouchDB.sync('db_techweek', 'http://localhost:5984/db_techweek',{
      live: true,
      retry: true
    }).on('change', function (info) {
      if(info.direction == 'push') {
        debugger;
        info.change.docs.forEach(function(doc) {
          if(!duplicated(doc._id)){
            $timeout(function() {
              pushLocal(doc);
            });
          }
        });
      }
    });

    vm.push = function() {
      var obj = {
        _id: 'msg_' + msgId(),
        msg: vm.msg
      };

      vm.msg = '';
      pushLocal(obj);

      db.put(obj).then(function () {
      }).catch(function (err) {
        console.error(err);
      });
    };

    var pushLocal = function(obj) {
      localMsg[obj._id] = true;
      vm.list.push(obj);
    };

    var duplicated = function(id) {
      return localMsg[id];
    }

    function msgId(){
      return new Date().getTime();
    }
  };

  $controller.$inject = ['$timeout'];
  app.controller('controller', $controller);

})();
