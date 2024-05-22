var $7hYnT$firebaseadmin = require("firebase-admin");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire0fce"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire0fce"] = parcelRequire;
}
parcelRequire.register("c0cOI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HttpMethod = void 0;
var $8bcf6d4e873da533$var$HttpMethod;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})($8bcf6d4e873da533$var$HttpMethod || (module.exports.HttpMethod = $8bcf6d4e873da533$var$HttpMethod = {}));

});

parcelRequire.register("asJVJ", function(module, exports) {
"use strict";
var $79e025b3dd519d06$var$_a;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.httpStatusTextByCode = module.exports.HttpStatus = void 0;
// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
var $79e025b3dd519d06$var$HttpStatus;
(function(HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["EARLY_HINTS"] = 103] = "EARLY_HINTS";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatus[HttpStatus["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpStatus[HttpStatus["IM_USED"] = 226] = "IM_USED";
    HttpStatus[HttpStatus["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["LOCKED"] = 423] = "LOCKED";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["TOO_EARLY"] = 425] = "TOO_EARLY";
    HttpStatus[HttpStatus["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpStatus[HttpStatus["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatus[HttpStatus["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpStatus[HttpStatus["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatus[HttpStatus["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpStatus[HttpStatus["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpStatus[HttpStatus["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})($79e025b3dd519d06$var$HttpStatus || (module.exports.HttpStatus = $79e025b3dd519d06$var$HttpStatus = {}));
var $79e025b3dd519d06$var$httpStatusText = ($79e025b3dd519d06$var$_a = {}, $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.CONTINUE] = "Continue", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.SWITCHING_PROTOCOLS] = "Switching Protocols", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PROCESSING] = "Processing", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.EARLY_HINTS] = "Early Hints", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.OK] = "OK", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.CREATED] = "Created", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.ACCEPTED] = "Accepted", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NON_AUTHORITATIVE_INFORMATION] = "Non-Authoritative Information", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NO_CONTENT] = "No Content", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.RESET_CONTENT] = "Reset Content", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PARTIAL_CONTENT] = "Partial Content", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.MULTI_STATUS] = "Multi-Status", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.ALREADY_REPORTED] = "Already Reported", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.IM_USED] = "IM Used", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.MULTIPLE_CHOICES] = "Multiple Choices", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.MOVED_PERMANENTLY] = "Moved Permanently", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.FOUND] = "Found", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.SEE_OTHER] = "See Other", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NOT_MODIFIED] = "Not Modified", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.USE_PROXY] = "Use Proxy", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.TEMPORARY_REDIRECT] = "Temporary Redirect", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PERMANENT_REDIRECT] = "Permanent Redirect", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.BAD_REQUEST] = "Bad Request", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.UNAUTHORIZED] = "Unauthorized", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PAYMENT_REQUIRED] = "Payment Required", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.FORBIDDEN] = "Forbidden", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NOT_FOUND] = "Not Found", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.METHOD_NOT_ALLOWED] = "Method Not Allowed", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NOT_ACCEPTABLE] = "Not Acceptable", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.REQUEST_TIMEOUT] = "Request Timeout", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.CONFLICT] = "Conflict", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.GONE] = "Gone", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.LENGTH_REQUIRED] = "Length Required", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PRECONDITION_FAILED] = "Precondition Failed", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PAYLOAD_TOO_LARGE] = "Payload Too Large", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.URI_TOO_LONG] = "URI Too Long", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.RANGE_NOT_SATISFIABLE] = "Range Not Satisfiable", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.EXPECTATION_FAILED] = "Expectation Failed", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.MISDIRECTED_REQUEST] = "Misdirected Request", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.UNPROCESSABLE_ENTITY] = "Unprocessable Entity", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.LOCKED] = "Locked", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.FAILED_DEPENDENCY] = "Failed Dependency", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.TOO_EARLY] = "Too Early", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.UPGRADE_REQUIRED] = "Upgrade Required", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.PRECONDITION_REQUIRED] = "Precondition Required", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.TOO_MANY_REQUESTS] = "Too Many Requests", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS] = "Unavailable For Legal Reasons", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.INTERNAL_SERVER_ERROR] = "Internal Server Error", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NOT_IMPLEMENTED] = "Not Implemented", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.BAD_GATEWAY] = "Bad Gateway", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.SERVICE_UNAVAILABLE] = "Service Unavailable", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.GATEWAY_TIMEOUT] = "Gateway Timeout", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.VARIANT_ALSO_NEGOTIATES] = "Variant Also Negotiates", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.INSUFFICIENT_STORAGE] = "Insufficient Storage", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.LOOP_DETECTED] = "Loop Detected", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NOT_EXTENDED] = "Not Extended", $79e025b3dd519d06$var$_a[$79e025b3dd519d06$var$HttpStatus.NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required", $79e025b3dd519d06$var$_a);
function $79e025b3dd519d06$var$httpStatusTextByCode(httpStatusCode) {
    if (!httpStatusCode || !httpStatusCode.toString) // Not a number or a string
    throw new Error("Invalid httpStatusCode");
    for(var _i = 0, _a = Object.keys($79e025b3dd519d06$var$httpStatusText); _i < _a.length; _i++){
        var key = _a[_i];
        if (key === httpStatusCode.toString()) return $79e025b3dd519d06$var$httpStatusText[key];
    }
    throw new Error("Invalid httpStatusCode");
}
module.exports.httpStatusTextByCode = $79e025b3dd519d06$var$httpStatusTextByCode;

});


$parcel$export(module.exports, "handler", () => $d2d350681eba934f$export$c3c52e219617878);

var $52899a3cb135ca77$exports = {};
"use strict";
var $52899a3cb135ca77$var$__createBinding = $52899a3cb135ca77$exports && $52899a3cb135ca77$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $52899a3cb135ca77$var$__exportStar = $52899a3cb135ca77$exports && $52899a3cb135ca77$exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $52899a3cb135ca77$var$__createBinding(exports1, m, p);
};
Object.defineProperty($52899a3cb135ca77$exports, "__esModule", {
    value: true
});

$52899a3cb135ca77$var$__exportStar((parcelRequire("c0cOI")), $52899a3cb135ca77$exports);

$52899a3cb135ca77$var$__exportStar((parcelRequire("asJVJ")), $52899a3cb135ca77$exports);


const $d63ca567cdaf1add$export$a58d15c8682a241c = (admin)=>{
    // Create a reference to the Firestore database
    const db = $d63ca567cdaf1add$export$c85a9fc8ff68c90c(admin).firestore();
    return db;
};
const $d63ca567cdaf1add$export$c85a9fc8ff68c90c = (admin)=>{
    if (admin.apps.length === 0) {
        console.log("Initializing Firebase Admin SDK");
        admin.initializeApp();
        console.log("Firebase Admin SDK initialized");
    }
    return admin;
};


const $6723f10ebf982aaa$var$PERSON_COLLECTION_NAME = "person";
const $6723f10ebf982aaa$export$c562c31bf17d291e = async (personAdded, admin)=>{
    const db = (0, $d63ca567cdaf1add$export$a58d15c8682a241c)(admin);
    const userRef = db.collection($6723f10ebf982aaa$var$PERSON_COLLECTION_NAME).doc(personAdded.person_id);
    await userRef.set(personAdded);
    return personAdded;
};
const $6723f10ebf982aaa$export$1935eb9cdd85a29d = async (personId, admin)=>{
    const db = (0, $d63ca567cdaf1add$export$a58d15c8682a241c)(admin);
    const userRef = db.collection($6723f10ebf982aaa$var$PERSON_COLLECTION_NAME).doc(personId);
    const person = await userRef.get();
    if (!person.exists) return null;
    return {
        name: person.data().name
    };
};
const $6723f10ebf982aaa$export$b54adde4327eb137 = async (personRenamed, admin, arrayUnion)=>{
    const db = (0, $d63ca567cdaf1add$export$a58d15c8682a241c)(admin);
    const userRef = db.collection($6723f10ebf982aaa$var$PERSON_COLLECTION_NAME).doc(personRenamed.person_id);
    const person = await userRef.get();
    if (!person.exists) throw new Error("Person does not exist");
    if (person.data().deleted) throw new Error("Person is deleted");
    await userRef.update({
        name: personRenamed.name,
        update_time: personRenamed.timestamp,
        previous_names: arrayUnion(personRenamed.name)
    });
    return personRenamed;
};
const $6723f10ebf982aaa$export$a62f0f85c7a9c2e8 = async (personRemoved, admin)=>{
    const db = (0, $d63ca567cdaf1add$export$a58d15c8682a241c)(admin);
    const userRef = db.collection($6723f10ebf982aaa$var$PERSON_COLLECTION_NAME).doc(personRemoved.person_id);
    const person = await userRef.get();
    if (!person.exists) throw new Error("Person does not exist");
    await userRef.update({
        deleted: true
    });
    return personRemoved;
};


var $320a7c24a9146d2f$export$7debb50ef11d5e0b;
(function(util) {
    util.assertEqual = (val)=>val;
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items)obj[item] = item;
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys)filtered[k] = obj[k];
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object)if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") return value.toString();
        return value;
    };
})($320a7c24a9146d2f$export$7debb50ef11d5e0b || ($320a7c24a9146d2f$export$7debb50ef11d5e0b = {}));
var $320a7c24a9146d2f$export$4aa2142c225fd5c7;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})($320a7c24a9146d2f$export$4aa2142c225fd5c7 || ($320a7c24a9146d2f$export$4aa2142c225fd5c7 = {}));
const $320a7c24a9146d2f$export$5716da67bfaa244d = $320a7c24a9146d2f$export$7debb50ef11d5e0b.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const $320a7c24a9146d2f$export$3e9057828ebd5c7a = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.undefined;
        case "string":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.string;
        case "number":
            return isNaN(data) ? $320a7c24a9146d2f$export$5716da67bfaa244d.nan : $320a7c24a9146d2f$export$5716da67bfaa244d.number;
        case "boolean":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.boolean;
        case "function":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.function;
        case "bigint":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.bigint;
        case "symbol":
            return $320a7c24a9146d2f$export$5716da67bfaa244d.symbol;
        case "object":
            if (Array.isArray(data)) return $320a7c24a9146d2f$export$5716da67bfaa244d.array;
            if (data === null) return $320a7c24a9146d2f$export$5716da67bfaa244d.null;
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return $320a7c24a9146d2f$export$5716da67bfaa244d.promise;
            if (typeof Map !== "undefined" && data instanceof Map) return $320a7c24a9146d2f$export$5716da67bfaa244d.map;
            if (typeof Set !== "undefined" && data instanceof Set) return $320a7c24a9146d2f$export$5716da67bfaa244d.set;
            if (typeof Date !== "undefined" && data instanceof Date) return $320a7c24a9146d2f$export$5716da67bfaa244d.date;
            return $320a7c24a9146d2f$export$5716da67bfaa244d.object;
        default:
            return $320a7c24a9146d2f$export$5716da67bfaa244d.unknown;
    }
};
const $320a7c24a9146d2f$export$5ba560653e4a1035 = $320a7c24a9146d2f$export$7debb50ef11d5e0b.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const $320a7c24a9146d2f$export$913eddeaf297cfea = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class $320a7c24a9146d2f$export$f98dac4b251ab333 extends Error {
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) // eslint-disable-next-line ban/ban
        Object.setPrototypeOf(this, actualProto);
        else this.__proto__ = actualProto;
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") issue.unionErrors.map(processError);
                else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
                else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
                else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) curr[el] = curr[el] || {
                            _errors: []
                        };
                        else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof $320a7c24a9146d2f$export$f98dac4b251ab333)) throw new Error(`Not a ZodError: ${value}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, $320a7c24a9146d2f$export$7debb50ef11d5e0b.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues)if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else formErrors.push(mapper(sub));
        return {
            formErrors: formErrors,
            fieldErrors: fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
$320a7c24a9146d2f$export$f98dac4b251ab333.create = (issues)=>{
    const error = new $320a7c24a9146d2f$export$f98dac4b251ab333(issues);
    return error;
};
const $320a7c24a9146d2f$export$341b0b6e0a6f5099 = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type:
            if (issue.received === $320a7c24a9146d2f$export$5716da67bfaa244d.undefined) message = "Required";
            else message = `Expected ${issue.expected}, received ${issue.received}`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, $320a7c24a9146d2f$export$7debb50ef11d5e0b.jsonStringifyReplacer)}`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${$320a7c24a9146d2f$export$7debb50ef11d5e0b.joinValues(issue.keys, ", ")}`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_union:
            message = `Invalid input`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${$320a7c24a9146d2f$export$7debb50ef11d5e0b.joinValues(issue.options)}`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_enum_value:
            message = `Invalid enum value. Expected ${$320a7c24a9146d2f$export$7debb50ef11d5e0b.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_date:
            message = `Invalid date`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                } else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                else $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(issue.validation);
            } else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
            else message = "Invalid";
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.custom:
            message = `Invalid input`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case $320a7c24a9146d2f$export$5ba560653e4a1035.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(issue);
    }
    return {
        message: message
    };
};
let $320a7c24a9146d2f$var$overrideErrorMap = $320a7c24a9146d2f$export$341b0b6e0a6f5099;
function $320a7c24a9146d2f$export$1097a8289cfd22d7(map) {
    $320a7c24a9146d2f$var$overrideErrorMap = map;
}
function $320a7c24a9146d2f$export$32f27c719778d4c4() {
    return $320a7c24a9146d2f$var$overrideErrorMap;
}
const $320a7c24a9146d2f$export$244a85fde9c419ed = (params)=>{
    const { data: data, path: path, errorMaps: errorMaps, issueData: issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) return {
        ...issueData,
        path: fullPath,
        message: issueData.message
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps)errorMessage = map(fullIssue, {
        data: data,
        defaultError: errorMessage
    }).message;
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const $320a7c24a9146d2f$export$1526d2e05f74572 = [];
function $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, issueData) {
    const overrideMap = $320a7c24a9146d2f$export$32f27c719778d4c4();
    const issue = $320a7c24a9146d2f$export$244a85fde9c419ed({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === $320a7c24a9146d2f$export$341b0b6e0a6f5099 ? undefined : $320a7c24a9146d2f$export$341b0b6e0a6f5099
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class $320a7c24a9146d2f$export$5b20a5c3d05c1f6f {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key: key,
                value: value
            });
        }
        return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key: key, value: value } = pair;
            if (key.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            if (value.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const $320a7c24a9146d2f$export$9a105a556e65c2c0 = Object.freeze({
    status: "aborted"
});
const $320a7c24a9146d2f$export$325a211da9693fcf = (value)=>({
        status: "dirty",
        value: value
    });
const $320a7c24a9146d2f$export$c6813a8d51f77eaf = (value)=>({
        status: "valid",
        value: value
    });
const $320a7c24a9146d2f$export$afa861e3c5730743 = (x)=>x.status === "aborted";
const $320a7c24a9146d2f$export$910b6cdd390341b3 = (x)=>x.status === "dirty";
const $320a7c24a9146d2f$export$1ea939691cdc45b8 = (x)=>x.status === "valid";
const $320a7c24a9146d2f$export$aefee5ebe1dcfd9e = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function $320a7c24a9146d2f$var$__classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $320a7c24a9146d2f$var$__classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" && SuppressedError;
var $320a7c24a9146d2f$var$errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message: message
        } : message || {};
    errorUtil.toString = (message)=>typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})($320a7c24a9146d2f$var$errorUtil || ($320a7c24a9146d2f$var$errorUtil = {}));
var $320a7c24a9146d2f$var$_ZodEnum_cache, $320a7c24a9146d2f$var$_ZodNativeEnum_cache;
class $320a7c24a9146d2f$var$ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) this._cachedPath.push(...this._path, ...this._key);
            else this._cachedPath.push(...this._path, this._key);
        }
        return this._cachedPath;
    }
}
const $320a7c24a9146d2f$var$handleResult = (ctx, result)=>{
    if ($320a7c24a9146d2f$export$1ea939691cdc45b8(result)) return {
        success: true,
        data: result.value
    };
    else {
        if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new $320a7c24a9146d2f$export$f98dac4b251ab333(ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function $320a7c24a9146d2f$var$processCreateParams(params) {
    if (!params) return {};
    const { errorMap: errorMap, invalid_type_error: invalid_type_error, required_error: required_error, description: description } = params;
    if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (errorMap) return {
        errorMap: errorMap,
        description: description
    };
    const customMap = (iss, ctx)=>{
        var _a, _b;
        const { message: message } = params;
        if (iss.code === "invalid_enum_value") return {
            message: message !== null && message !== void 0 ? message : ctx.defaultError
        };
        if (typeof ctx.data === "undefined") return {
            message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError
        };
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description: description
    };
}
class $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return $320a7c24a9146d2f$export$3e9057828ebd5c7a(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: $320a7c24a9146d2f$export$3e9057828ebd5c7a(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new $320a7c24a9146d2f$export$5b20a5c3d05c1f6f(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: $320a7c24a9146d2f$export$3e9057828ebd5c7a(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ($320a7c24a9146d2f$export$aefee5ebe1dcfd9e(result)) throw new Error("Synchronous parse encountered promise.");
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: data,
            parsedType: $320a7c24a9146d2f$export$3e9057828ebd5c7a(data)
        };
        const result = this._parseSync({
            data: data,
            path: ctx.path,
            parent: ctx
        });
        return $320a7c24a9146d2f$var$handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: data,
            parsedType: $320a7c24a9146d2f$export$3e9057828ebd5c7a(data)
        };
        const maybeAsyncResult = this._parse({
            data: data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ($320a7c24a9146d2f$export$aefee5ebe1dcfd9e(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return $320a7c24a9146d2f$var$handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") return {
                message: message
            };
            else if (typeof message === "function") return message(val);
            else return message;
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data)=>{
                if (!data) {
                    setError();
                    return false;
                } else return true;
            });
            if (!result) {
                setError();
                return false;
            } else return true;
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else return true;
        });
    }
    _refinement(refinement) {
        return new $320a7c24a9146d2f$export$a60af00cc0ce2582({
            schema: this,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodEffects,
            effect: {
                type: "refinement",
                refinement: refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return $320a7c24a9146d2f$export$aa56fec1e9d629b8.create(this, this._def);
    }
    nullable() {
        return $320a7c24a9146d2f$export$aaac0b8b429cef5.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return $320a7c24a9146d2f$export$7acfc3e64785411.create(this, this._def);
    }
    promise() {
        return $320a7c24a9146d2f$export$3f196b0127d6e50a.create(this, this._def);
    }
    or(option) {
        return $320a7c24a9146d2f$export$a8b236cb5070a311.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return $320a7c24a9146d2f$export$c02deaf0bb5203d4.create(this, incoming, this._def);
    }
    transform(transform) {
        return new $320a7c24a9146d2f$export$a60af00cc0ce2582({
            ...$320a7c24a9146d2f$var$processCreateParams(this._def),
            schema: this,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodEffects,
            effect: {
                type: "transform",
                transform: transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new $320a7c24a9146d2f$export$bb19b37874861e7e({
            ...$320a7c24a9146d2f$var$processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodDefault
        });
    }
    brand() {
        return new $320a7c24a9146d2f$export$66b0c798a395271f({
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodBranded,
            type: this,
            ...$320a7c24a9146d2f$var$processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new $320a7c24a9146d2f$export$75a44ec6249ac76b({
            ...$320a7c24a9146d2f$var$processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description: description
        });
    }
    pipe(target) {
        return $320a7c24a9146d2f$export$a3c3ef8a0e95c6da.create(this, target);
    }
    readonly() {
        return $320a7c24a9146d2f$export$5d1f7ef05c4e493a.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const $320a7c24a9146d2f$var$cuidRegex = /^c[^\s-]{8,}$/i;
const $320a7c24a9146d2f$var$cuid2Regex = /^[0-9a-z]+$/;
const $320a7c24a9146d2f$var$ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const $320a7c24a9146d2f$var$uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const $320a7c24a9146d2f$var$nanoidRegex = /^[a-z0-9_-]{21}$/i;
const $320a7c24a9146d2f$var$durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const $320a7c24a9146d2f$var$emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const $320a7c24a9146d2f$var$_emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let $320a7c24a9146d2f$var$emojiRegex;
// faster, simpler, safer
const $320a7c24a9146d2f$var$ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const $320a7c24a9146d2f$var$ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const $320a7c24a9146d2f$var$base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const $320a7c24a9146d2f$var$dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const $320a7c24a9146d2f$var$dateRegex = new RegExp(`^${$320a7c24a9146d2f$var$dateRegexSource}$`);
function $320a7c24a9146d2f$var$timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) regex = `${regex}\\.\\d{${args.precision}}`;
    else if (args.precision == null) regex = `${regex}(\\.\\d+)?`;
    return regex;
}
function $320a7c24a9146d2f$var$timeRegex(args) {
    return new RegExp(`^${$320a7c24a9146d2f$var$timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function $320a7c24a9146d2f$export$a4b563879add27a(args) {
    let regex = `${$320a7c24a9146d2f$var$dateRegexSource}T${$320a7c24a9146d2f$var$timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function $320a7c24a9146d2f$var$isValidIP(ip, version) {
    if ((version === "v4" || !version) && $320a7c24a9146d2f$var$ipv4Regex.test(ip)) return true;
    if ((version === "v6" || !version) && $320a7c24a9146d2f$var$ipv6Regex.test(ip)) return true;
    return false;
}
class $320a7c24a9146d2f$export$1230eb29b8d3b502 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        if (this._def.coerce) input.data = String(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.string) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.string,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const status = new $320a7c24a9146d2f$export$5b20a5c3d05c1f6f();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    else if (tooSmall) $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!$320a7c24a9146d2f$var$emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "email",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!$320a7c24a9146d2f$var$emojiRegex) $320a7c24a9146d2f$var$emojiRegex = new RegExp($320a7c24a9146d2f$var$_emojiRegex, "u");
                if (!$320a7c24a9146d2f$var$emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "emoji",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!$320a7c24a9146d2f$var$uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "uuid",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!$320a7c24a9146d2f$var$nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "nanoid",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!$320a7c24a9146d2f$var$cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "cuid",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!$320a7c24a9146d2f$var$cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "cuid2",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!$320a7c24a9146d2f$var$ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "ulid",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") try {
                new URL(input.data);
            } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    validation: "url",
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                    message: check.message
                });
                status.dirty();
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "regex",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") input.data = input.data.trim();
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
            else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = $320a7c24a9146d2f$export$a4b563879add27a(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = $320a7c24a9146d2f$var$dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = $320a7c24a9146d2f$var$timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!$320a7c24a9146d2f$var$durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "duration",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!$320a7c24a9146d2f$var$isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "ip",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!$320a7c24a9146d2f$var$base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        validation: "base64",
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation: validation,
            code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_string,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    _addCheck(check) {
        return new $320a7c24a9146d2f$export$1230eb29b8d3b502({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(options)
        });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
        });
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message: message
        });
    }
    time(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "time",
            precision: null,
            message: options
        });
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...$320a7c24a9146d2f$var$errorUtil.errToObj(message)
        });
    }
    /**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */ nonempty(message) {
        return this.min(1, $320a7c24a9146d2f$var$errorUtil.errToObj(message));
    }
    trim() {
        return new $320a7c24a9146d2f$export$1230eb29b8d3b502({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new $320a7c24a9146d2f$export$1230eb29b8d3b502({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new $320a7c24a9146d2f$export$1230eb29b8d3b502({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
$320a7c24a9146d2f$export$1230eb29b8d3b502.create = (params)=>{
    var _a;
    return new $320a7c24a9146d2f$export$1230eb29b8d3b502({
        checks: [],
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function $320a7c24a9146d2f$var$floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
}
class $320a7c24a9146d2f$export$5b070a55c0c43e09 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) input.data = Number(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.number) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.number,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        let ctx = undefined;
        const status = new $320a7c24a9146d2f$export$5b20a5c3d05c1f6f();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!$320a7c24a9146d2f$export$7debb50ef11d5e0b.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if ($320a7c24a9146d2f$var$floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new $320a7c24a9146d2f$export$5b070a55c0c43e09({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: kind,
                    value: value,
                    inclusive: inclusive,
                    message: $320a7c24a9146d2f$var$errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new $320a7c24a9146d2f$export$5b070a55c0c43e09({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && $320a7c24a9146d2f$export$7debb50ef11d5e0b.isInteger(ch.value));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
            else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
$320a7c24a9146d2f$export$5b070a55c0c43e09.create = (params)=>{
    return new $320a7c24a9146d2f$export$5b070a55c0c43e09({
        checks: [],
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$67d741fd70ff98f4 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) input.data = BigInt(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.bigint) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.bigint,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        let ctx = undefined;
        const status = new $320a7c24a9146d2f$export$5b20a5c3d05c1f6f();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, $320a7c24a9146d2f$var$errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new $320a7c24a9146d2f$export$67d741fd70ff98f4({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: kind,
                    value: value,
                    inclusive: inclusive,
                    message: $320a7c24a9146d2f$var$errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new $320a7c24a9146d2f$export$67d741fd70ff98f4({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
$320a7c24a9146d2f$export$67d741fd70ff98f4.create = (params)=>{
    var _a;
    return new $320a7c24a9146d2f$export$67d741fd70ff98f4({
        checks: [],
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$723d146f80596191 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        if (this._def.coerce) input.data = Boolean(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.boolean) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.boolean,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$723d146f80596191.create = (params)=>{
    return new $320a7c24a9146d2f$export$723d146f80596191({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$e974be33bdc55521 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        if (this._def.coerce) input.data = new Date(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.date) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.date,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_date
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const status = new $320a7c24a9146d2f$export$5b20a5c3d05c1f6f();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(check);
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new $320a7c24a9146d2f$export$e974be33bdc55521({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: $320a7c24a9146d2f$var$errorUtil.toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
$320a7c24a9146d2f$export$e974be33bdc55521.create = (params)=>{
    return new $320a7c24a9146d2f$export$e974be33bdc55521({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodDate,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$bcc3b40f6b638044 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.symbol) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.symbol,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$bcc3b40f6b638044.create = (params)=>{
    return new $320a7c24a9146d2f$export$bcc3b40f6b638044({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodSymbol,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$4e780e961c30340d extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.undefined) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.undefined,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$4e780e961c30340d.create = (params)=>{
    return new $320a7c24a9146d2f$export$4e780e961c30340d({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodUndefined,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$a96281f914484f2d extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.null) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.null,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$a96281f914484f2d.create = (params)=>{
    return new $320a7c24a9146d2f$export$a96281f914484f2d({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNull,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$b9d1edb536b4e4eb extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$b9d1edb536b4e4eb.create = (params)=>{
    return new $320a7c24a9146d2f$export$b9d1edb536b4e4eb({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodAny,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$ef3b1bb1630977ae extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$ef3b1bb1630977ae.create = (params)=>{
    return new $320a7c24a9146d2f$export$ef3b1bb1630977ae({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodUnknown,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$1e576a20c3ce9fb5 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
            code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
            expected: $320a7c24a9146d2f$export$5716da67bfaa244d.never,
            received: ctx.parsedType
        });
        return $320a7c24a9146d2f$export$9a105a556e65c2c0;
    }
}
$320a7c24a9146d2f$export$1e576a20c3ce9fb5.create = (params)=>{
    return new $320a7c24a9146d2f$export$1e576a20c3ce9fb5({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNever,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$7d39f5df85f21031 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.undefined) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.void,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
}
$320a7c24a9146d2f$export$7d39f5df85f21031.create = (params)=>{
    return new $320a7c24a9146d2f$export$7d39f5df85f21031({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodVoid,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$7acfc3e64785411 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx, status: status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.array) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.array,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: tooBig ? $320a7c24a9146d2f$export$5ba560653e4a1035.too_big : $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) return Promise.all([
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseAsync(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result)=>{
            return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeArray(status, result);
        });
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new $320a7c24a9146d2f$export$7acfc3e64785411({
            ...this._def,
            minLength: {
                value: minLength,
                message: $320a7c24a9146d2f$var$errorUtil.toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new $320a7c24a9146d2f$export$7acfc3e64785411({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: $320a7c24a9146d2f$var$errorUtil.toString(message)
            }
        });
    }
    length(len, message) {
        return new $320a7c24a9146d2f$export$7acfc3e64785411({
            ...this._def,
            exactLength: {
                value: len,
                message: $320a7c24a9146d2f$var$errorUtil.toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
$320a7c24a9146d2f$export$7acfc3e64785411.create = (schema, params)=>{
    return new $320a7c24a9146d2f$export$7acfc3e64785411({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodArray,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
function $320a7c24a9146d2f$var$deepPartialify(schema) {
    if (schema instanceof $320a7c24a9146d2f$export$736315c5b55efbad) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = $320a7c24a9146d2f$export$aa56fec1e9d629b8.create($320a7c24a9146d2f$var$deepPartialify(fieldSchema));
        }
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof $320a7c24a9146d2f$export$7acfc3e64785411) return new $320a7c24a9146d2f$export$7acfc3e64785411({
        ...schema._def,
        type: $320a7c24a9146d2f$var$deepPartialify(schema.element)
    });
    else if (schema instanceof $320a7c24a9146d2f$export$aa56fec1e9d629b8) return $320a7c24a9146d2f$export$aa56fec1e9d629b8.create($320a7c24a9146d2f$var$deepPartialify(schema.unwrap()));
    else if (schema instanceof $320a7c24a9146d2f$export$aaac0b8b429cef5) return $320a7c24a9146d2f$export$aaac0b8b429cef5.create($320a7c24a9146d2f$var$deepPartialify(schema.unwrap()));
    else if (schema instanceof $320a7c24a9146d2f$export$e2a18bb771d8e6a3) return $320a7c24a9146d2f$export$e2a18bb771d8e6a3.create(schema.items.map((item)=>$320a7c24a9146d2f$var$deepPartialify(item)));
    else return schema;
}
class $320a7c24a9146d2f$export$736315c5b55efbad extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(shape);
        return this._cached = {
            shape: shape,
            keys: keys
        };
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.object) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.object,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const { status: status, ctx: ctx } = this._processInputParams(input);
        const { shape: shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof $320a7c24a9146d2f$export$1e576a20c3ce9fb5 && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data)if (!shapeKeys.includes(key)) extraKeys.push(key);
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof $320a7c24a9146d2f$export$1e576a20c3ce9fb5) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") for (const key of extraKeys)pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: {
                    status: "valid",
                    value: ctx.data[key]
                }
            });
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                        code: $320a7c24a9146d2f$export$5ba560653e4a1035.unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) return Promise.resolve().then(async ()=>{
            const syncPairs = [];
            for (const pair of pairs){
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                    key: key,
                    value: value,
                    alwaysSet: pair.alwaysSet
                });
            }
            return syncPairs;
        }).then((syncPairs)=>{
            return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeObjectSync(status, syncPairs);
        });
        else return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeObjectSync(status, pairs);
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        $320a7c24a9146d2f$var$errorUtil.errToObj;
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    var _a, _b, _c, _d;
                    const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (_d = $320a7c24a9146d2f$var$errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new $320a7c24a9146d2f$export$736315c5b55efbad({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(mask).forEach((key)=>{
            if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
        });
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(this.shape).forEach((key)=>{
            if (!mask[key]) shape[key] = this.shape[key];
        });
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return $320a7c24a9146d2f$var$deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(this.shape).forEach((key)=>{
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) newShape[key] = fieldSchema;
            else newShape[key] = fieldSchema.optional();
        });
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(this.shape).forEach((key)=>{
            if (mask && !mask[key]) newShape[key] = this.shape[key];
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof $320a7c24a9146d2f$export$aa56fec1e9d629b8)newField = newField._def.innerType;
                newShape[key] = newField;
            }
        });
        return new $320a7c24a9146d2f$export$736315c5b55efbad({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return $320a7c24a9146d2f$var$createZodEnum($320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(this.shape));
    }
}
$320a7c24a9146d2f$export$736315c5b55efbad.create = (shape, params)=>{
    return new $320a7c24a9146d2f$export$736315c5b55efbad({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: $320a7c24a9146d2f$export$1e576a20c3ce9fb5.create(),
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodObject,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
$320a7c24a9146d2f$export$736315c5b55efbad.strictCreate = (shape, params)=>{
    return new $320a7c24a9146d2f$export$736315c5b55efbad({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: $320a7c24a9146d2f$export$1e576a20c3ce9fb5.create(),
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodObject,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
$320a7c24a9146d2f$export$736315c5b55efbad.lazycreate = (shape, params)=>{
    return new $320a7c24a9146d2f$export$736315c5b55efbad({
        shape: shape,
        unknownKeys: "strip",
        catchall: $320a7c24a9146d2f$export$1e576a20c3ce9fb5.create(),
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodObject,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$a8b236cb5070a311 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") return result.result;
            }
            for (const result of results)if (result.result.status === "dirty") {
                // add issues from dirty option
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
            }
            // return invalid
            const unionErrors = results.map((result)=>new $320a7c24a9146d2f$export$f98dac4b251ab333(result.ctx.common.issues));
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_union,
                unionErrors: unionErrors
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (ctx.common.async) return Promise.all(options.map(async (option)=>{
            const childCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                }),
                ctx: childCtx
            };
        })).then(handleResults);
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") return result;
                else if (result.status === "dirty" && !dirty) dirty = {
                    result: result,
                    ctx: childCtx
                };
                if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new $320a7c24a9146d2f$export$f98dac4b251ab333(issues));
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_union,
                unionErrors: unionErrors
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
    }
    get options() {
        return this._def.options;
    }
}
$320a7c24a9146d2f$export$a8b236cb5070a311.create = (types, params)=>{
    return new $320a7c24a9146d2f$export$a8b236cb5070a311({
        options: types,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodUnion,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const $320a7c24a9146d2f$var$getDiscriminator = (type)=>{
    if (type instanceof $320a7c24a9146d2f$export$378d0cfce37406e6) return $320a7c24a9146d2f$var$getDiscriminator(type.schema);
    else if (type instanceof $320a7c24a9146d2f$export$a60af00cc0ce2582) return $320a7c24a9146d2f$var$getDiscriminator(type.innerType());
    else if (type instanceof $320a7c24a9146d2f$export$7e44096782a165d3) return [
        type.value
    ];
    else if (type instanceof $320a7c24a9146d2f$export$d325d1f0e1c20179) return type.options;
    else if (type instanceof $320a7c24a9146d2f$export$370b2e8d6d6f5c56) // eslint-disable-next-line ban/ban
    return $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectValues(type.enum);
    else if (type instanceof $320a7c24a9146d2f$export$bb19b37874861e7e) return $320a7c24a9146d2f$var$getDiscriminator(type._def.innerType);
    else if (type instanceof $320a7c24a9146d2f$export$4e780e961c30340d) return [
        undefined
    ];
    else if (type instanceof $320a7c24a9146d2f$export$a96281f914484f2d) return [
        null
    ];
    else if (type instanceof $320a7c24a9146d2f$export$aa56fec1e9d629b8) return [
        undefined,
        ...$320a7c24a9146d2f$var$getDiscriminator(type.unwrap())
    ];
    else if (type instanceof $320a7c24a9146d2f$export$aaac0b8b429cef5) return [
        null,
        ...$320a7c24a9146d2f$var$getDiscriminator(type.unwrap())
    ];
    else if (type instanceof $320a7c24a9146d2f$export$66b0c798a395271f) return $320a7c24a9146d2f$var$getDiscriminator(type.unwrap());
    else if (type instanceof $320a7c24a9146d2f$export$5d1f7ef05c4e493a) return $320a7c24a9146d2f$var$getDiscriminator(type.unwrap());
    else if (type instanceof $320a7c24a9146d2f$export$75a44ec6249ac76b) return $320a7c24a9146d2f$var$getDiscriminator(type._def.innerType);
    else return [];
};
class $320a7c24a9146d2f$export$5ef2424805ac76a3 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.object) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.object,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (ctx.common.async) return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
        else return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = $320a7c24a9146d2f$var$getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                optionsMap.set(value, type);
            }
        }
        return new $320a7c24a9146d2f$export$5ef2424805ac76a3({
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodDiscriminatedUnion,
            discriminator: discriminator,
            options: options,
            optionsMap: optionsMap,
            ...$320a7c24a9146d2f$var$processCreateParams(params)
        });
    }
}
function $320a7c24a9146d2f$var$mergeValues(a, b) {
    const aType = $320a7c24a9146d2f$export$3e9057828ebd5c7a(a);
    const bType = $320a7c24a9146d2f$export$3e9057828ebd5c7a(b);
    if (a === b) return {
        valid: true,
        data: a
    };
    else if (aType === $320a7c24a9146d2f$export$5716da67bfaa244d.object && bType === $320a7c24a9146d2f$export$5716da67bfaa244d.object) {
        const bKeys = $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(b);
        const sharedKeys = $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = $320a7c24a9146d2f$var$mergeValues(a[key], b[key]);
            if (!sharedValue.valid) return {
                valid: false
            };
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === $320a7c24a9146d2f$export$5716da67bfaa244d.array && bType === $320a7c24a9146d2f$export$5716da67bfaa244d.array) {
        if (a.length !== b.length) return {
            valid: false
        };
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = $320a7c24a9146d2f$var$mergeValues(itemA, itemB);
            if (!sharedValue.valid) return {
                valid: false
            };
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === $320a7c24a9146d2f$export$5716da67bfaa244d.date && bType === $320a7c24a9146d2f$export$5716da67bfaa244d.date && +a === +b) return {
        valid: true,
        data: a
    };
    else return {
        valid: false
    };
}
class $320a7c24a9146d2f$export$c02deaf0bb5203d4 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ($320a7c24a9146d2f$export$afa861e3c5730743(parsedLeft) || $320a7c24a9146d2f$export$afa861e3c5730743(parsedRight)) return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            const merged = $320a7c24a9146d2f$var$mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_intersection_types
                });
                return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            }
            if ($320a7c24a9146d2f$export$910b6cdd390341b3(parsedLeft) || $320a7c24a9146d2f$export$910b6cdd390341b3(parsedRight)) status.dirty();
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) return Promise.all([
            this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }),
            this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            })
        ]).then(([left, right])=>handleParsed(left, right));
        else return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }));
    }
}
$320a7c24a9146d2f$export$c02deaf0bb5203d4.create = (left, right, params)=>{
    return new $320a7c24a9146d2f$export$c02deaf0bb5203d4({
        left: left,
        right: right,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodIntersection,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$e2a18bb771d8e6a3 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.array) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.array,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (ctx.data.length < this._def.items.length) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) return Promise.all(items).then((results)=>{
            return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeArray(status, results);
        });
        else return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeArray(status, items);
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new $320a7c24a9146d2f$export$e2a18bb771d8e6a3({
            ...this._def,
            rest: rest
        });
    }
}
$320a7c24a9146d2f$export$e2a18bb771d8e6a3.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new $320a7c24a9146d2f$export$e2a18bb771d8e6a3({
        items: schemas,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodTuple,
        rest: null,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$a2acc09968cb4b7f extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.object) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.object,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data)pairs.push({
            key: keyType._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
        });
        if (ctx.common.async) return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeObjectAsync(status, pairs);
        else return $320a7c24a9146d2f$export$5b20a5c3d05c1f6f.mergeObjectSync(status, pairs);
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof $320a7c24a9146d2f$export$19342e026b58ebb7) return new $320a7c24a9146d2f$export$a2acc09968cb4b7f({
            keyType: first,
            valueType: second,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodRecord,
            ...$320a7c24a9146d2f$var$processCreateParams(third)
        });
        return new $320a7c24a9146d2f$export$a2acc09968cb4b7f({
            keyType: $320a7c24a9146d2f$export$1230eb29b8d3b502.create(),
            valueType: first,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodRecord,
            ...$320a7c24a9146d2f$var$processCreateParams(second)
        });
    }
}
class $320a7c24a9146d2f$export$163b6a2b712d9542 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.map) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.map,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                    if (key.status === "dirty" || value.status === "dirty") status.dirty();
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (key.status === "dirty" || value.status === "dirty") status.dirty();
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
$320a7c24a9146d2f$export$163b6a2b712d9542.create = (keyType, valueType, params)=>{
    return new $320a7c24a9146d2f$export$163b6a2b712d9542({
        valueType: valueType,
        keyType: keyType,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodMap,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$977057706f816712 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.set) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.set,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new $320a7c24a9146d2f$var$ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) return Promise.all(elements).then((elements)=>finalizeSet(elements));
        else return finalizeSet(elements);
    }
    min(minSize, message) {
        return new $320a7c24a9146d2f$export$977057706f816712({
            ...this._def,
            minSize: {
                value: minSize,
                message: $320a7c24a9146d2f$var$errorUtil.toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new $320a7c24a9146d2f$export$977057706f816712({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: $320a7c24a9146d2f$var$errorUtil.toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
$320a7c24a9146d2f$export$977057706f816712.create = (valueType, params)=>{
    return new $320a7c24a9146d2f$export$977057706f816712({
        valueType: valueType,
        minSize: null,
        maxSize: null,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodSet,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$d4602ba55673f53c extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.function) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.function,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        function makeArgsIssue(args, error) {
            return $320a7c24a9146d2f$export$244a85fde9c419ed({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    $320a7c24a9146d2f$export$32f27c719778d4c4(),
                    $320a7c24a9146d2f$export$341b0b6e0a6f5099
                ].filter((x)=>!!x),
                issueData: {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return $320a7c24a9146d2f$export$244a85fde9c419ed({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    $320a7c24a9146d2f$export$32f27c719778d4c4(),
                    $320a7c24a9146d2f$export$341b0b6e0a6f5099
                ].filter((x)=>!!x),
                issueData: {
                    code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof $320a7c24a9146d2f$export$3f196b0127d6e50a) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return $320a7c24a9146d2f$export$c6813a8d51f77eaf(async function(...args) {
                const error = new $320a7c24a9146d2f$export$f98dac4b251ab333([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return $320a7c24a9146d2f$export$c6813a8d51f77eaf(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) throw new $320a7c24a9146d2f$export$f98dac4b251ab333([
                    makeArgsIssue(args, parsedArgs.error)
                ]);
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) throw new $320a7c24a9146d2f$export$f98dac4b251ab333([
                    makeReturnsIssue(result, parsedReturns.error)
                ]);
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new $320a7c24a9146d2f$export$d4602ba55673f53c({
            ...this._def,
            args: $320a7c24a9146d2f$export$e2a18bb771d8e6a3.create(items).rest($320a7c24a9146d2f$export$ef3b1bb1630977ae.create())
        });
    }
    returns(returnType) {
        return new $320a7c24a9146d2f$export$d4602ba55673f53c({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new $320a7c24a9146d2f$export$d4602ba55673f53c({
            args: args ? args : $320a7c24a9146d2f$export$e2a18bb771d8e6a3.create([]).rest($320a7c24a9146d2f$export$ef3b1bb1630977ae.create()),
            returns: returns || $320a7c24a9146d2f$export$ef3b1bb1630977ae.create(),
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodFunction,
            ...$320a7c24a9146d2f$var$processCreateParams(params)
        });
    }
}
class $320a7c24a9146d2f$export$378d0cfce37406e6 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
$320a7c24a9146d2f$export$378d0cfce37406e6.create = (getter, params)=>{
    return new $320a7c24a9146d2f$export$378d0cfce37406e6({
        getter: getter,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodLazy,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$7e44096782a165d3 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                received: ctx.data,
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_literal,
                expected: this._def.value
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
$320a7c24a9146d2f$export$7e44096782a165d3.create = (value, params)=>{
    return new $320a7c24a9146d2f$export$7e44096782a165d3({
        value: value,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodLiteral,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
function $320a7c24a9146d2f$var$createZodEnum(values, params) {
    return new $320a7c24a9146d2f$export$d325d1f0e1c20179({
        values: values,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodEnum,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
}
class $320a7c24a9146d2f$export$d325d1f0e1c20179 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        $320a7c24a9146d2f$var$_ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                expected: $320a7c24a9146d2f$export$7debb50ef11d5e0b.joinValues(expectedValues),
                received: ctx.parsedType,
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (!$320a7c24a9146d2f$var$__classPrivateFieldGet(this, $320a7c24a9146d2f$var$_ZodEnum_cache, "f")) $320a7c24a9146d2f$var$__classPrivateFieldSet(this, $320a7c24a9146d2f$var$_ZodEnum_cache, new Set(this._def.values), "f");
        if (!$320a7c24a9146d2f$var$__classPrivateFieldGet(this, $320a7c24a9146d2f$var$_ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                received: ctx.data,
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_enum_value,
                options: expectedValues
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return $320a7c24a9146d2f$export$d325d1f0e1c20179.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return $320a7c24a9146d2f$export$d325d1f0e1c20179.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
$320a7c24a9146d2f$var$_ZodEnum_cache = new WeakMap();
$320a7c24a9146d2f$export$d325d1f0e1c20179.create = $320a7c24a9146d2f$var$createZodEnum;
class $320a7c24a9146d2f$export$370b2e8d6d6f5c56 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    constructor(){
        super(...arguments);
        $320a7c24a9146d2f$var$_ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = $320a7c24a9146d2f$export$7debb50ef11d5e0b.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.string && ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.number) {
            const expectedValues = $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectValues(nativeEnumValues);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                expected: $320a7c24a9146d2f$export$7debb50ef11d5e0b.joinValues(expectedValues),
                received: ctx.parsedType,
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        if (!$320a7c24a9146d2f$var$__classPrivateFieldGet(this, $320a7c24a9146d2f$var$_ZodNativeEnum_cache, "f")) $320a7c24a9146d2f$var$__classPrivateFieldSet(this, $320a7c24a9146d2f$var$_ZodNativeEnum_cache, new Set($320a7c24a9146d2f$export$7debb50ef11d5e0b.getValidEnumValues(this._def.values)), "f");
        if (!$320a7c24a9146d2f$var$__classPrivateFieldGet(this, $320a7c24a9146d2f$var$_ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = $320a7c24a9146d2f$export$7debb50ef11d5e0b.objectValues(nativeEnumValues);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                received: ctx.data,
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_enum_value,
                options: expectedValues
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
$320a7c24a9146d2f$var$_ZodNativeEnum_cache = new WeakMap();
$320a7c24a9146d2f$export$370b2e8d6d6f5c56.create = (values, params)=>{
    return new $320a7c24a9146d2f$export$370b2e8d6d6f5c56({
        values: values,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNativeEnum,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$3f196b0127d6e50a extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        if (ctx.parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.promise && ctx.common.async === false) {
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.promise,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        const promisified = ctx.parsedType === $320a7c24a9146d2f$export$5716da67bfaa244d.promise ? ctx.data : Promise.resolve(ctx.data);
        return $320a7c24a9146d2f$export$c6813a8d51f77eaf(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
$320a7c24a9146d2f$export$3f196b0127d6e50a.create = (schema, params)=>{
    return new $320a7c24a9146d2f$export$3f196b0127d6e50a({
        type: schema,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodPromise,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$a60af00cc0ce2582 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === $320a7c24a9146d2f$export$558106ce543bd011.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, arg);
                if (arg.fatal) status.abort();
                else status.dirty();
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) return Promise.resolve(processed).then(async (processed)=>{
                if (status.value === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                const result = await this._def.schema._parseAsync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (result.status === "dirty") return $320a7c24a9146d2f$export$325a211da9693fcf(result.value);
                if (status.value === "dirty") return $320a7c24a9146d2f$export$325a211da9693fcf(result.value);
                return result;
            });
            else {
                if (status.value === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (result.status === "dirty") return $320a7c24a9146d2f$export$325a211da9693fcf(result.value);
                if (status.value === "dirty") return $320a7c24a9146d2f$export$325a211da9693fcf(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) return Promise.resolve(result);
                if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((inner)=>{
                if (inner.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (inner.status === "dirty") status.dirty();
                return executeRefinement(inner.value).then(()=>{
                    return {
                        status: status.value,
                        value: inner.value
                    };
                });
            });
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!$320a7c24a9146d2f$export$1ea939691cdc45b8(base)) return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: status.value,
                    value: result
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((base)=>{
                if (!$320a7c24a9146d2f$export$1ea939691cdc45b8(base)) return base;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                        status: status.value,
                        value: result
                    }));
            });
        }
        $320a7c24a9146d2f$export$7debb50ef11d5e0b.assertNever(effect);
    }
}
$320a7c24a9146d2f$export$a60af00cc0ce2582.create = (schema, effect, params)=>{
    return new $320a7c24a9146d2f$export$a60af00cc0ce2582({
        schema: schema,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodEffects,
        effect: effect,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
$320a7c24a9146d2f$export$a60af00cc0ce2582.createWithPreprocess = (preprocess, schema, params)=>{
    return new $320a7c24a9146d2f$export$a60af00cc0ce2582({
        schema: schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodEffects,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$aa56fec1e9d629b8 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === $320a7c24a9146d2f$export$5716da67bfaa244d.undefined) return $320a7c24a9146d2f$export$c6813a8d51f77eaf(undefined);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
$320a7c24a9146d2f$export$aa56fec1e9d629b8.create = (type, params)=>{
    return new $320a7c24a9146d2f$export$aa56fec1e9d629b8({
        innerType: type,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodOptional,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$aaac0b8b429cef5 extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === $320a7c24a9146d2f$export$5716da67bfaa244d.null) return $320a7c24a9146d2f$export$c6813a8d51f77eaf(null);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
$320a7c24a9146d2f$export$aaac0b8b429cef5.create = (type, params)=>{
    return new $320a7c24a9146d2f$export$aaac0b8b429cef5({
        innerType: type,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNullable,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$bb19b37874861e7e extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === $320a7c24a9146d2f$export$5716da67bfaa244d.undefined) data = this._def.defaultValue();
        return this._def.innerType._parse({
            data: data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
$320a7c24a9146d2f$export$bb19b37874861e7e.create = (type, params)=>{
    return new $320a7c24a9146d2f$export$bb19b37874861e7e({
        innerType: type,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$75a44ec6249ac76b extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ($320a7c24a9146d2f$export$aefee5ebe1dcfd9e(result)) return result.then((result)=>{
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new $320a7c24a9146d2f$export$f98dac4b251ab333(newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        });
        else return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
                get error () {
                    return new $320a7c24a9146d2f$export$f98dac4b251ab333(newCtx.common.issues);
                },
                input: newCtx.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
$320a7c24a9146d2f$export$75a44ec6249ac76b.create = (type, params)=>{
    return new $320a7c24a9146d2f$export$75a44ec6249ac76b({
        innerType: type,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
class $320a7c24a9146d2f$export$26ccfa0145e8511f extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== $320a7c24a9146d2f$export$5716da67bfaa244d.nan) {
            const ctx = this._getOrReturnCtx(input);
            $320a7c24a9146d2f$export$db7caee60e5d514d(ctx, {
                code: $320a7c24a9146d2f$export$5ba560653e4a1035.invalid_type,
                expected: $320a7c24a9146d2f$export$5716da67bfaa244d.nan,
                received: ctx.parsedType
            });
            return $320a7c24a9146d2f$export$9a105a556e65c2c0;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
$320a7c24a9146d2f$export$26ccfa0145e8511f.create = (params)=>{
    return new $320a7c24a9146d2f$export$26ccfa0145e8511f({
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodNaN,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
const $320a7c24a9146d2f$export$cf2deea74cde46b4 = Symbol("zod_brand");
class $320a7c24a9146d2f$export$66b0c798a395271f extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { ctx: ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data: data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class $320a7c24a9146d2f$export$a3c3ef8a0e95c6da extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const { status: status, ctx: ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return $320a7c24a9146d2f$export$325a211da9693fcf(inResult.value);
                } else return this._def.out._parseAsync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return $320a7c24a9146d2f$export$9a105a556e65c2c0;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    static create(a, b) {
        return new $320a7c24a9146d2f$export$a3c3ef8a0e95c6da({
            in: a,
            out: b,
            typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodPipeline
        });
    }
}
class $320a7c24a9146d2f$export$5d1f7ef05c4e493a extends $320a7c24a9146d2f$export$19342e026b58ebb7 {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ($320a7c24a9146d2f$export$1ea939691cdc45b8(data)) data.value = Object.freeze(data.value);
            return data;
        };
        return $320a7c24a9146d2f$export$aefee5ebe1dcfd9e(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
$320a7c24a9146d2f$export$5d1f7ef05c4e493a.create = (type, params)=>{
    return new $320a7c24a9146d2f$export$5d1f7ef05c4e493a({
        innerType: type,
        typeName: $320a7c24a9146d2f$export$558106ce543bd011.ZodReadonly,
        ...$320a7c24a9146d2f$var$processCreateParams(params)
    });
};
function $320a7c24a9146d2f$export$4c00f665f0d4b443(check, params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return $320a7c24a9146d2f$export$b9d1edb536b4e4eb.create().superRefine((data, ctx)=>{
        var _a, _b;
        if (!check(data)) {
            const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
                message: params
            } : params;
            const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
            const p2 = typeof p === "string" ? {
                message: p
            } : p;
            ctx.addIssue({
                code: "custom",
                ...p2,
                fatal: _fatal
            });
        }
    });
    return $320a7c24a9146d2f$export$b9d1edb536b4e4eb.create();
}
const $320a7c24a9146d2f$export$1ee8ee30835eab8b = {
    object: $320a7c24a9146d2f$export$736315c5b55efbad.lazycreate
};
var $320a7c24a9146d2f$export$558106ce543bd011;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})($320a7c24a9146d2f$export$558106ce543bd011 || ($320a7c24a9146d2f$export$558106ce543bd011 = {}));
const $320a7c24a9146d2f$export$3d916e7c22dbd8b5 = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>$320a7c24a9146d2f$export$4c00f665f0d4b443((data)=>data instanceof cls, params);
const $320a7c24a9146d2f$export$22b082955e083ec3 = $320a7c24a9146d2f$export$1230eb29b8d3b502.create;
const $320a7c24a9146d2f$export$98e628dec113755e = $320a7c24a9146d2f$export$5b070a55c0c43e09.create;
const $320a7c24a9146d2f$export$9e06de0973666692 = $320a7c24a9146d2f$export$26ccfa0145e8511f.create;
const $320a7c24a9146d2f$export$a0f65b52274bcc00 = $320a7c24a9146d2f$export$67d741fd70ff98f4.create;
const $320a7c24a9146d2f$export$4a21f16c33752377 = $320a7c24a9146d2f$export$723d146f80596191.create;
const $320a7c24a9146d2f$export$324d90190a8b822a = $320a7c24a9146d2f$export$e974be33bdc55521.create;
const $320a7c24a9146d2f$export$8f701197936bc2a6 = $320a7c24a9146d2f$export$bcc3b40f6b638044.create;
const $320a7c24a9146d2f$export$1db45310990710a5 = $320a7c24a9146d2f$export$4e780e961c30340d.create;
const $320a7c24a9146d2f$export$7b1b591b262c240 = $320a7c24a9146d2f$export$a96281f914484f2d.create;
const $320a7c24a9146d2f$export$4154a199d7d90455 = $320a7c24a9146d2f$export$b9d1edb536b4e4eb.create;
const $320a7c24a9146d2f$export$19282c40b967aec6 = $320a7c24a9146d2f$export$ef3b1bb1630977ae.create;
const $320a7c24a9146d2f$export$b3e22bcfd64c1022 = $320a7c24a9146d2f$export$1e576a20c3ce9fb5.create;
const $320a7c24a9146d2f$export$490e536ee7389aeb = $320a7c24a9146d2f$export$7d39f5df85f21031.create;
const $320a7c24a9146d2f$export$2f23118c22fb2630 = $320a7c24a9146d2f$export$7acfc3e64785411.create;
const $320a7c24a9146d2f$export$be5493f9613cbbe = $320a7c24a9146d2f$export$736315c5b55efbad.create;
const $320a7c24a9146d2f$export$8fb0df5f40d0b477 = $320a7c24a9146d2f$export$736315c5b55efbad.strictCreate;
const $320a7c24a9146d2f$export$971dd5b0dfd021b6 = $320a7c24a9146d2f$export$a8b236cb5070a311.create;
const $320a7c24a9146d2f$export$4b888e40c4ee26dd = $320a7c24a9146d2f$export$5ef2424805ac76a3.create;
const $320a7c24a9146d2f$export$bc86dfbf7795668c = $320a7c24a9146d2f$export$c02deaf0bb5203d4.create;
const $320a7c24a9146d2f$export$65e3907585753458 = $320a7c24a9146d2f$export$e2a18bb771d8e6a3.create;
const $320a7c24a9146d2f$export$e5185e241753e543 = $320a7c24a9146d2f$export$a2acc09968cb4b7f.create;
const $320a7c24a9146d2f$export$871de8747c9eaa88 = $320a7c24a9146d2f$export$163b6a2b712d9542.create;
const $320a7c24a9146d2f$export$adaa4cf7ef1b65be = $320a7c24a9146d2f$export$977057706f816712.create;
const $320a7c24a9146d2f$export$44e51c8aac7c2deb = $320a7c24a9146d2f$export$d4602ba55673f53c.create;
const $320a7c24a9146d2f$export$488013bae63b21da = $320a7c24a9146d2f$export$378d0cfce37406e6.create;
const $320a7c24a9146d2f$export$c8ec6e1ec9fefcb0 = $320a7c24a9146d2f$export$7e44096782a165d3.create;
const $320a7c24a9146d2f$export$78a99c8d44d72635 = $320a7c24a9146d2f$export$d325d1f0e1c20179.create;
const $320a7c24a9146d2f$export$6fe7eca19ebe5199 = $320a7c24a9146d2f$export$370b2e8d6d6f5c56.create;
const $320a7c24a9146d2f$export$c957ef27a0ebfd4 = $320a7c24a9146d2f$export$3f196b0127d6e50a.create;
const $320a7c24a9146d2f$export$dc573d8a6576cdb3 = $320a7c24a9146d2f$export$a60af00cc0ce2582.create;
const $320a7c24a9146d2f$export$516e28dec6a4b6d4 = $320a7c24a9146d2f$export$aa56fec1e9d629b8.create;
const $320a7c24a9146d2f$export$133fc36489ac9add = $320a7c24a9146d2f$export$aaac0b8b429cef5.create;
const $320a7c24a9146d2f$export$fc37fe19dfda43ee = $320a7c24a9146d2f$export$a60af00cc0ce2582.createWithPreprocess;
const $320a7c24a9146d2f$export$43f28b24e1eb8181 = $320a7c24a9146d2f$export$a3c3ef8a0e95c6da.create;
const $320a7c24a9146d2f$export$3b3d07727c5b702c = ()=>$320a7c24a9146d2f$export$22b082955e083ec3().optional();
const $320a7c24a9146d2f$export$eb150471a61fced6 = ()=>$320a7c24a9146d2f$export$98e628dec113755e().optional();
const $320a7c24a9146d2f$export$269251733cdcbbf1 = ()=>$320a7c24a9146d2f$export$4a21f16c33752377().optional();
const $320a7c24a9146d2f$export$8c14e57e778d3873 = {
    string: (arg)=>$320a7c24a9146d2f$export$1230eb29b8d3b502.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>$320a7c24a9146d2f$export$5b070a55c0c43e09.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>$320a7c24a9146d2f$export$723d146f80596191.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>$320a7c24a9146d2f$export$67d741fd70ff98f4.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>$320a7c24a9146d2f$export$e974be33bdc55521.create({
            ...arg,
            coerce: true
        })
};
const $320a7c24a9146d2f$export$96c94437c95d7862 = $320a7c24a9146d2f$export$9a105a556e65c2c0;
var $320a7c24a9146d2f$export$2e2bcd8739ae039 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    defaultErrorMap: $320a7c24a9146d2f$export$341b0b6e0a6f5099,
    setErrorMap: $320a7c24a9146d2f$export$1097a8289cfd22d7,
    getErrorMap: $320a7c24a9146d2f$export$32f27c719778d4c4,
    makeIssue: $320a7c24a9146d2f$export$244a85fde9c419ed,
    EMPTY_PATH: $320a7c24a9146d2f$export$1526d2e05f74572,
    addIssueToContext: $320a7c24a9146d2f$export$db7caee60e5d514d,
    ParseStatus: $320a7c24a9146d2f$export$5b20a5c3d05c1f6f,
    INVALID: $320a7c24a9146d2f$export$9a105a556e65c2c0,
    DIRTY: $320a7c24a9146d2f$export$325a211da9693fcf,
    OK: $320a7c24a9146d2f$export$c6813a8d51f77eaf,
    isAborted: $320a7c24a9146d2f$export$afa861e3c5730743,
    isDirty: $320a7c24a9146d2f$export$910b6cdd390341b3,
    isValid: $320a7c24a9146d2f$export$1ea939691cdc45b8,
    isAsync: $320a7c24a9146d2f$export$aefee5ebe1dcfd9e,
    get util () {
        return $320a7c24a9146d2f$export$7debb50ef11d5e0b;
    },
    get objectUtil () {
        return $320a7c24a9146d2f$export$4aa2142c225fd5c7;
    },
    ZodParsedType: $320a7c24a9146d2f$export$5716da67bfaa244d,
    getParsedType: $320a7c24a9146d2f$export$3e9057828ebd5c7a,
    ZodType: $320a7c24a9146d2f$export$19342e026b58ebb7,
    datetimeRegex: $320a7c24a9146d2f$export$a4b563879add27a,
    ZodString: $320a7c24a9146d2f$export$1230eb29b8d3b502,
    ZodNumber: $320a7c24a9146d2f$export$5b070a55c0c43e09,
    ZodBigInt: $320a7c24a9146d2f$export$67d741fd70ff98f4,
    ZodBoolean: $320a7c24a9146d2f$export$723d146f80596191,
    ZodDate: $320a7c24a9146d2f$export$e974be33bdc55521,
    ZodSymbol: $320a7c24a9146d2f$export$bcc3b40f6b638044,
    ZodUndefined: $320a7c24a9146d2f$export$4e780e961c30340d,
    ZodNull: $320a7c24a9146d2f$export$a96281f914484f2d,
    ZodAny: $320a7c24a9146d2f$export$b9d1edb536b4e4eb,
    ZodUnknown: $320a7c24a9146d2f$export$ef3b1bb1630977ae,
    ZodNever: $320a7c24a9146d2f$export$1e576a20c3ce9fb5,
    ZodVoid: $320a7c24a9146d2f$export$7d39f5df85f21031,
    ZodArray: $320a7c24a9146d2f$export$7acfc3e64785411,
    ZodObject: $320a7c24a9146d2f$export$736315c5b55efbad,
    ZodUnion: $320a7c24a9146d2f$export$a8b236cb5070a311,
    ZodDiscriminatedUnion: $320a7c24a9146d2f$export$5ef2424805ac76a3,
    ZodIntersection: $320a7c24a9146d2f$export$c02deaf0bb5203d4,
    ZodTuple: $320a7c24a9146d2f$export$e2a18bb771d8e6a3,
    ZodRecord: $320a7c24a9146d2f$export$a2acc09968cb4b7f,
    ZodMap: $320a7c24a9146d2f$export$163b6a2b712d9542,
    ZodSet: $320a7c24a9146d2f$export$977057706f816712,
    ZodFunction: $320a7c24a9146d2f$export$d4602ba55673f53c,
    ZodLazy: $320a7c24a9146d2f$export$378d0cfce37406e6,
    ZodLiteral: $320a7c24a9146d2f$export$7e44096782a165d3,
    ZodEnum: $320a7c24a9146d2f$export$d325d1f0e1c20179,
    ZodNativeEnum: $320a7c24a9146d2f$export$370b2e8d6d6f5c56,
    ZodPromise: $320a7c24a9146d2f$export$3f196b0127d6e50a,
    ZodEffects: $320a7c24a9146d2f$export$a60af00cc0ce2582,
    ZodTransformer: $320a7c24a9146d2f$export$a60af00cc0ce2582,
    ZodOptional: $320a7c24a9146d2f$export$aa56fec1e9d629b8,
    ZodNullable: $320a7c24a9146d2f$export$aaac0b8b429cef5,
    ZodDefault: $320a7c24a9146d2f$export$bb19b37874861e7e,
    ZodCatch: $320a7c24a9146d2f$export$75a44ec6249ac76b,
    ZodNaN: $320a7c24a9146d2f$export$26ccfa0145e8511f,
    BRAND: $320a7c24a9146d2f$export$cf2deea74cde46b4,
    ZodBranded: $320a7c24a9146d2f$export$66b0c798a395271f,
    ZodPipeline: $320a7c24a9146d2f$export$a3c3ef8a0e95c6da,
    ZodReadonly: $320a7c24a9146d2f$export$5d1f7ef05c4e493a,
    custom: $320a7c24a9146d2f$export$4c00f665f0d4b443,
    Schema: $320a7c24a9146d2f$export$19342e026b58ebb7,
    ZodSchema: $320a7c24a9146d2f$export$19342e026b58ebb7,
    late: $320a7c24a9146d2f$export$1ee8ee30835eab8b,
    get ZodFirstPartyTypeKind () {
        return $320a7c24a9146d2f$export$558106ce543bd011;
    },
    coerce: $320a7c24a9146d2f$export$8c14e57e778d3873,
    any: $320a7c24a9146d2f$export$4154a199d7d90455,
    array: $320a7c24a9146d2f$export$2f23118c22fb2630,
    bigint: $320a7c24a9146d2f$export$a0f65b52274bcc00,
    boolean: $320a7c24a9146d2f$export$4a21f16c33752377,
    date: $320a7c24a9146d2f$export$324d90190a8b822a,
    discriminatedUnion: $320a7c24a9146d2f$export$4b888e40c4ee26dd,
    effect: $320a7c24a9146d2f$export$dc573d8a6576cdb3,
    "enum": $320a7c24a9146d2f$export$78a99c8d44d72635,
    "function": $320a7c24a9146d2f$export$44e51c8aac7c2deb,
    "instanceof": $320a7c24a9146d2f$export$3d916e7c22dbd8b5,
    intersection: $320a7c24a9146d2f$export$bc86dfbf7795668c,
    lazy: $320a7c24a9146d2f$export$488013bae63b21da,
    literal: $320a7c24a9146d2f$export$c8ec6e1ec9fefcb0,
    map: $320a7c24a9146d2f$export$871de8747c9eaa88,
    nan: $320a7c24a9146d2f$export$9e06de0973666692,
    nativeEnum: $320a7c24a9146d2f$export$6fe7eca19ebe5199,
    never: $320a7c24a9146d2f$export$b3e22bcfd64c1022,
    "null": $320a7c24a9146d2f$export$7b1b591b262c240,
    nullable: $320a7c24a9146d2f$export$133fc36489ac9add,
    number: $320a7c24a9146d2f$export$98e628dec113755e,
    object: $320a7c24a9146d2f$export$be5493f9613cbbe,
    oboolean: $320a7c24a9146d2f$export$269251733cdcbbf1,
    onumber: $320a7c24a9146d2f$export$eb150471a61fced6,
    optional: $320a7c24a9146d2f$export$516e28dec6a4b6d4,
    ostring: $320a7c24a9146d2f$export$3b3d07727c5b702c,
    pipeline: $320a7c24a9146d2f$export$43f28b24e1eb8181,
    preprocess: $320a7c24a9146d2f$export$fc37fe19dfda43ee,
    promise: $320a7c24a9146d2f$export$c957ef27a0ebfd4,
    record: $320a7c24a9146d2f$export$e5185e241753e543,
    set: $320a7c24a9146d2f$export$adaa4cf7ef1b65be,
    strictObject: $320a7c24a9146d2f$export$8fb0df5f40d0b477,
    string: $320a7c24a9146d2f$export$22b082955e083ec3,
    symbol: $320a7c24a9146d2f$export$8f701197936bc2a6,
    transformer: $320a7c24a9146d2f$export$dc573d8a6576cdb3,
    tuple: $320a7c24a9146d2f$export$65e3907585753458,
    "undefined": $320a7c24a9146d2f$export$1db45310990710a5,
    union: $320a7c24a9146d2f$export$971dd5b0dfd021b6,
    unknown: $320a7c24a9146d2f$export$19282c40b967aec6,
    "void": $320a7c24a9146d2f$export$490e536ee7389aeb,
    NEVER: $320a7c24a9146d2f$export$96c94437c95d7862,
    ZodIssueCode: $320a7c24a9146d2f$export$5ba560653e4a1035,
    quotelessJson: $320a7c24a9146d2f$export$913eddeaf297cfea,
    ZodError: $320a7c24a9146d2f$export$f98dac4b251ab333
});


const $b8300621f0035581$var$PersonAdded = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    person_id: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().uuid(),
    name: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string(),
    timestamp: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().datetime({
        offset: true
    })
}).passthrough();
const $b8300621f0035581$var$PersonRenamed = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    person_id: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().uuid(),
    name: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string(),
    timestamp: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().datetime({
        offset: true
    })
}).passthrough();
const $b8300621f0035581$var$PersonRemoved = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    person_id: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().uuid(),
    timestamp: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().datetime({
        offset: true
    })
}).passthrough();
const $b8300621f0035581$var$WebhookPayload = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    payload_type: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).enum([
        "PersonAdded",
        "PersonRenamed",
        "PersonRemoved"
    ]),
    payload_content: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).union([
        $b8300621f0035581$var$PersonAdded,
        $b8300621f0035581$var$PersonRenamed,
        $b8300621f0035581$var$PersonRemoved
    ])
}).passthrough();
const $b8300621f0035581$var$GetNameResponse = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    name: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string().nullable()
}).partial().passthrough();
const $b8300621f0035581$var$GetNameQuery = (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).object({
    person_id: (0, $320a7c24a9146d2f$export$2e2bcd8739ae039).string()
}).passthrough();
const $b8300621f0035581$export$18d37e8b6241fb97 = {
    PersonAdded: $b8300621f0035581$var$PersonAdded,
    PersonRenamed: $b8300621f0035581$var$PersonRenamed,
    PersonRemoved: $b8300621f0035581$var$PersonRemoved,
    WebhookPayload: $b8300621f0035581$var$WebhookPayload,
    GetNameResponse: $b8300621f0035581$var$GetNameResponse,
    GetNameQuery: $b8300621f0035581$var$GetNameQuery
};


const $d2d350681eba934f$var$adminInstance = (0, ($parcel$interopDefault($7hYnT$firebaseadmin)));
const $d2d350681eba934f$var$arrayUnion = (0, ($parcel$interopDefault($7hYnT$firebaseadmin))).firestore.FieldValue.arrayUnion;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const $d2d350681eba934f$var$payloadHandlerMap = new Map([
    [
        "PersonAdded",
        async (payload)=>{
            return await (0, $6723f10ebf982aaa$export$c562c31bf17d291e)(payload, $d2d350681eba934f$var$adminInstance);
        }
    ],
    [
        "PersonRenamed",
        async (payload)=>{
            return await (0, $6723f10ebf982aaa$export$b54adde4327eb137)(payload, $d2d350681eba934f$var$adminInstance, $d2d350681eba934f$var$arrayUnion);
        }
    ],
    [
        "PersonRemoved",
        async (payload)=>{
            return await (0, $6723f10ebf982aaa$export$a62f0f85c7a9c2e8)(payload, $d2d350681eba934f$var$adminInstance);
        }
    ]
]);
const $d2d350681eba934f$export$c3c52e219617878 = async (req, res)=>{
    try {
        const webhookPayload = (0, $b8300621f0035581$export$18d37e8b6241fb97).WebhookPayload.safeParse(req.body);
        if (!webhookPayload.success) return res.status((0, $52899a3cb135ca77$exports.HttpStatus).BAD_REQUEST).send({
            error: webhookPayload.error
        });
        const actionHandler = $d2d350681eba934f$var$payloadHandlerMap.get(webhookPayload.data.payload_type);
        if (!actionHandler) return res.status((0, $52899a3cb135ca77$exports.HttpStatus).BAD_REQUEST).send({
            error: "Invalid payload type"
        });
        const result = await actionHandler(webhookPayload.data.payload_content);
        return res.status((0, $52899a3cb135ca77$exports.HttpStatus).OK).send({
            status: "success",
            processed: result
        });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
        console.error(`Unable to accept request. Unknown error: ${JSON.stringify(e)}`);
        return res.status((0, $52899a3cb135ca77$exports.HttpStatus).INTERNAL_SERVER_ERROR).send({
            error: e.message
        });
    }
};


//# sourceMappingURL=index.js.map
