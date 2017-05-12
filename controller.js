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
        info.change.docs.forEach(function(doc) {
          if(!duplicated(doc._id)){
            $timeout(function() {
              doc.remote = true;
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
        console.log('ok then');
      }).catch(function (err) {
        console.error(err);
      });
    };

    vm.style = function(remote) {
      return {
        'text-align': remote ? 'left' : 'right'
      };
    }

    var pushLocal = function(obj) {
      localMsg[obj._id] = true;
      vm.list.push(obj);
    };

    var duplicated = function(id) {
      return localMsg[id];
    }

    var msgId = function(){
      return new Date().getTime();
    }
  };

  $controller.$inject = ['$timeout'];
  app.controller('controller', $controller);

})();
