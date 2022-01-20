// js.js Copyright (c) 2020 Herbert E. Gilliland III. 
// MIT License.

var jsjsGlobal=[];

class JsJs {
  
  constructor() {
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
    
  // Imports an object as a global component
  component(to, from,name=null) {
   var oname=name;
   if ( !defined(name) || !name ) oname=from.constructor.name;
   for (var prop in from) {
    if ( defined(to[prop]) ) console.log("importObject("+oname+"): Warning `"+prop+"` is already defined, redefining" );
    to[prop] = from[prop];
   }
  }

}


// Your global library programmer shortcut.

var _$ = new Jaseb();
var jsjs=_$;
