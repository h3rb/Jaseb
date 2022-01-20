// js.js Copyright (c) 2020 Herbert E. Gilliland III. 
// MIT License.

class JsJs {
  
  constructor() {
    this.events = [
      "Init",
      "Update",
      "Get",
      "Put",
      "Store",
      "Retrieve",
      "Serialize",
      "Parse",
      "Encode"
      "Decode"
    ];
    this.registered = {};
    for ( var i=0; i<events.length; i++ ) this.registered[events[i]]=[];
  }
  
  // Add a new event name to the global event tracker.
  add(name) {
    if ( this.get(name) == null ) {
      this.events[this.events.length]=name;
      return true;
    }
    return false;
  }
  
  index(name) {
    for ( var i=0; i<this.events.length; i++ ) {
      if ( this.events[i].toLowerCase() == name.toLowerCase() ) return i;
    }
    return -1;
  }
  
  // Get back a list of registered events
  get(name) {
    var parsed=parseInt(name);
    if ( !isNaN(parsed) ) {
      if ( parsed >= 0 && parsed < this.events.length ) return this.registered[i];
    } else {
      parsed = this.index(name);
      if ( parsed != -1 ) return this.registered[parsed];
    }
    return null;
  }
  
  run(name) {
    var list=null;
    var parsed=parseInt(name);
    if ( !isNaN(parsed) ) {
      if ( parsed >= 0 && parsed < this.events.length ) list=this.registered[i];
    } else {
      parsed = this.index(name);
      if ( parsed != -1 ) list=this.registered[parsed];
    }
    if ( !list ) return;
    list.forEach( eventfun => eventfun() );
  }
  
 // Merges an object with another
  merge(to, from,name=null) {
   var oname=name;
   if ( !defined(name) || !name ) oname=from.constructor.name;
   for (var prop in from) {
    if ( defined(to[prop]) ) console.log("importObject("+oname+"): Warning `"+prop+"` is already defined, redefining" );
    to[prop] = from[prop];
   }
   return to;
  }
  
  // Returns an object that "extends" an existing class.
  extend(to, from) {
    return merge(to,from);
  }
  
  // Returns an empty component class
  prototype() {
    var o={};
    for ( var i=0; i<this.events.length; i++ ) o[this.events[i]]=function(){};
    return o;
  }
    
  // Imports an object as a global component
  component(to, from,name=null) {
   var oname=name;
   if ( !defined(name) || !name ) oname=from.constructor.name;
   for (var prop in from) {
    if ( defined(to[prop]) ) console.log("importObject("+oname+"): Warning `"+prop+"` is already defined, redefining" );
    to[prop] = from[prop];
   }
  }

};


// Your global library programmer shortcut.

var _$ = new JsJs();
var jsjs=_$;
