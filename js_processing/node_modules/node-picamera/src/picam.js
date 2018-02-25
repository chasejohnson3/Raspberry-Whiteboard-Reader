var exec = require('child_process').exec,
    opts = require('./options');

var debug = true;
/*
 * TODO: video function
 */

function parseOptions(options) {
  var result = '';

  for(var key in options) {
    if(!opts[key]) {
      throw new Error('Invalid option: ' + key);
    }

    result += opts[key] + ' ';
    if(options[key] !== true) result += options[key] + ' ';
  }

    return result;
}

module.exports = {
  still: function(filename,options,cb) {
    if(typeof options === 'function'){
      cb = options; 
      options = {};
    }

    var cmd = 'raspistill' +parseOptions(options) +  '-o ' + filename;
    if(config.debug) {
      cb(null,null,null);
      console.log('cmd: ' + cmd);
      return;
    }
        exec(cmd,cb);
  },
  video: function(filename,length,options,cb) {
    if(typeof options === 'function') {
      cb = options; 
      options = {};
    }

    console.log('not implemented duh.');
  }
};
