/**
 * Copyright (c) Yuri Svetlov
 * https://github.com/Yuriy-Svetlov
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const
  LiveReload = require('live-reload-bp'),
  Transform = require('stream').Transform;

var 
  transformStream,
  lastFile = null;


class Server{

  constructor(options){
    this.liveReload = new LiveReload(options);
  }


  run(){
    this.liveReload.run();
  }


  reloadPage(options = {}){
    transformStream = new Transform({objectMode: true});
    lastFile = null;
    this.resetError();

    transformStream._transform = function(file, encoding, callback) {
      let 
        error = null,
        output = file;
        lastFile = file;

      callback(error, output);
    }

    transformStream._flush = function(callback){
      if(null != lastFile){
        if(this.liveReload.hasError() != true){
          this.liveReload.reloadPage(options);
        }
      }

      callback();
    }.bind(this);

    return transformStream;
  }


  liveAlert(message){
    this.liveReload.liveAlert(message);
  }


  resetError(){
    this.liveReload.resetError();
  }


  hasError(){
    return this.liveReload.hasError();
  }

}

module.exports = Server;
