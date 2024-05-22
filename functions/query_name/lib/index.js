var $7hYnT$firebaseadmin = require("firebase-admin");
var $7hYnT$googlecloudsecretmanager = require("@google-cloud/secret-manager");

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

parcelRequire.register("5xUcU", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AzureOpenAI = exports.fileFromPath = exports.toFile = exports.UnprocessableEntityError = exports.PermissionDeniedError = exports.InternalServerError = exports.AuthenticationError = exports.BadRequestError = exports.RateLimitError = exports.ConflictError = exports.NotFoundError = exports.APIUserAbortError = exports.APIConnectionTimeoutError = exports.APIConnectionError = exports.APIError = exports.OpenAIError = exports.OpenAI = void 0;

const Core = __importStar((parcelRequire("8peXx")));

const Errors = __importStar((parcelRequire("2CkQ4")));

const Uploads = __importStar((parcelRequire("2N2K2")));

const Pagination = __importStar((parcelRequire("77nbt")));

const API = __importStar((parcelRequire("3DTo5")));
/** API Client for interfacing with the OpenAI API. */ class OpenAI extends Core.APIClient {
    /**
     * API Client for interfacing with the OpenAI API.
     *
     * @param {string | undefined} [opts.apiKey=process.env['OPENAI_API_KEY'] ?? undefined]
     * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
     * @param {string | null | undefined} [opts.project=process.env['OPENAI_PROJECT_ID'] ?? null]
     * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL'] ?? https://api.openai.com/v1] - Override the default base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     */ constructor({ baseURL = Core.readEnv("OPENAI_BASE_URL"), apiKey = Core.readEnv("OPENAI_API_KEY"), organization = Core.readEnv("OPENAI_ORG_ID") ?? null, project = Core.readEnv("OPENAI_PROJECT_ID") ?? null, ...opts } = {}){
        if (apiKey === undefined) throw new Errors.OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
        const options = {
            apiKey: apiKey,
            organization: organization,
            project: project,
            ...opts,
            baseURL: baseURL || `https://api.openai.com/v1`
        };
        if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) throw new Errors.OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
        super({
            baseURL: options.baseURL,
            timeout: options.timeout ?? 600000 /* 10 minutes */ ,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch
        });
        this.completions = new API.Completions(this);
        this.chat = new API.Chat(this);
        this.embeddings = new API.Embeddings(this);
        this.files = new API.Files(this);
        this.images = new API.Images(this);
        this.audio = new API.Audio(this);
        this.moderations = new API.Moderations(this);
        this.models = new API.Models(this);
        this.fineTuning = new API.FineTuning(this);
        this.beta = new API.Beta(this);
        this.batches = new API.Batches(this);
        this._options = options;
        this.apiKey = apiKey;
        this.organization = organization;
        this.project = project;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            "OpenAI-Organization": this.organization,
            "OpenAI-Project": this.project,
            ...this._options.defaultHeaders
        };
    }
    authHeaders(opts) {
        return {
            Authorization: `Bearer ${this.apiKey}`
        };
    }
}
exports.OpenAI = OpenAI;
_a = OpenAI;
OpenAI.OpenAI = _a;
OpenAI.OpenAIError = Errors.OpenAIError;
OpenAI.APIError = Errors.APIError;
OpenAI.APIConnectionError = Errors.APIConnectionError;
OpenAI.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
OpenAI.APIUserAbortError = Errors.APIUserAbortError;
OpenAI.NotFoundError = Errors.NotFoundError;
OpenAI.ConflictError = Errors.ConflictError;
OpenAI.RateLimitError = Errors.RateLimitError;
OpenAI.BadRequestError = Errors.BadRequestError;
OpenAI.AuthenticationError = Errors.AuthenticationError;
OpenAI.InternalServerError = Errors.InternalServerError;
OpenAI.PermissionDeniedError = Errors.PermissionDeniedError;
OpenAI.UnprocessableEntityError = Errors.UnprocessableEntityError;
OpenAI.toFile = Uploads.toFile;
OpenAI.fileFromPath = Uploads.fileFromPath;
exports.OpenAIError = Errors.OpenAIError, exports.APIError = Errors.APIError, exports.APIConnectionError = Errors.APIConnectionError, exports.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError, exports.APIUserAbortError = Errors.APIUserAbortError, exports.NotFoundError = Errors.NotFoundError, exports.ConflictError = Errors.ConflictError, exports.RateLimitError = Errors.RateLimitError, exports.BadRequestError = Errors.BadRequestError, exports.AuthenticationError = Errors.AuthenticationError, exports.InternalServerError = Errors.InternalServerError, exports.PermissionDeniedError = Errors.PermissionDeniedError, exports.UnprocessableEntityError = Errors.UnprocessableEntityError;
exports.toFile = Uploads.toFile;
exports.fileFromPath = Uploads.fileFromPath;
(function(OpenAI) {
    OpenAI.Page = Pagination.Page;
    OpenAI.CursorPage = Pagination.CursorPage;
    OpenAI.Completions = API.Completions;
    OpenAI.Chat = API.Chat;
    OpenAI.Embeddings = API.Embeddings;
    OpenAI.Files = API.Files;
    OpenAI.FileObjectsPage = API.FileObjectsPage;
    OpenAI.Images = API.Images;
    OpenAI.Audio = API.Audio;
    OpenAI.Moderations = API.Moderations;
    OpenAI.Models = API.Models;
    OpenAI.ModelsPage = API.ModelsPage;
    OpenAI.FineTuning = API.FineTuning;
    OpenAI.Beta = API.Beta;
    OpenAI.Batches = API.Batches;
    OpenAI.BatchesPage = API.BatchesPage;
})(OpenAI = exports.OpenAI || (exports.OpenAI = {}));
/** API Client for interfacing with the Azure OpenAI API. */ class AzureOpenAI extends OpenAI {
    /**
     * API Client for interfacing with the Azure OpenAI API.
     *
     * @param {string | undefined} [opts.apiVersion=process.env['OPENAI_API_VERSION'] ?? undefined]
     * @param {string | undefined} [opts.endpoint=process.env['AZURE_OPENAI_ENDPOINT'] ?? undefined] - Your Azure endpoint, including the resource, e.g. `https://example-resource.azure.openai.com/`
     * @param {string | undefined} [opts.apiKey=process.env['AZURE_OPENAI_API_KEY'] ?? undefined]
     * @param {string | undefined} opts.deployment - A model deployment, if given, sets the base client URL to include `/deployments/{deployment}`.
     * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
     * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL']] - Sets the base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     */ constructor({ baseURL = Core.readEnv("OPENAI_BASE_URL"), apiKey = Core.readEnv("AZURE_OPENAI_API_KEY"), apiVersion = Core.readEnv("OPENAI_API_VERSION"), endpoint, deployment, azureADTokenProvider, dangerouslyAllowBrowser, ...opts } = {}){
        if (!apiVersion) throw new Errors.OpenAIError("The OPENAI_API_VERSION environment variable is missing or empty; either provide it, or instantiate the AzureOpenAI client with an apiVersion option, like new AzureOpenAI({ apiVersion: 'My API Version' }).");
        if (typeof azureADTokenProvider === "function") dangerouslyAllowBrowser = true;
        if (!azureADTokenProvider && !apiKey) throw new Errors.OpenAIError("Missing credentials. Please pass one of `apiKey` and `azureADTokenProvider`, or set the `AZURE_OPENAI_API_KEY` environment variable.");
        if (azureADTokenProvider && apiKey) throw new Errors.OpenAIError("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
        // define a sentinel value to avoid any typing issues
        apiKey ?? (apiKey = API_KEY_SENTINEL);
        opts.defaultQuery = {
            ...opts.defaultQuery,
            "api-version": apiVersion
        };
        if (!baseURL) {
            if (!endpoint) endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
            if (!endpoint) throw new Errors.OpenAIError("Must provide one of the `baseURL` or `endpoint` arguments, or the `AZURE_OPENAI_ENDPOINT` environment variable");
            baseURL = `${endpoint}/openai`;
        } else {
            if (endpoint) throw new Errors.OpenAIError("baseURL and endpoint are mutually exclusive");
        }
        super({
            apiKey: apiKey,
            baseURL: baseURL,
            ...opts,
            ...dangerouslyAllowBrowser !== undefined ? {
                dangerouslyAllowBrowser: dangerouslyAllowBrowser
            } : {}
        });
        this.apiVersion = "";
        this._azureADTokenProvider = azureADTokenProvider;
        this.apiVersion = apiVersion;
        this._deployment = deployment;
    }
    buildRequest(options) {
        if (_deployments_endpoints.has(options.path) && options.method === "post" && options.body !== undefined) {
            if (!Core.isObj(options.body)) throw new Error("Expected request body to be an object");
            const model = this._deployment || options.body["model"];
            delete options.body["model"];
            if (model !== undefined && !this.baseURL.includes("/deployments")) options.path = `/deployments/${model}${options.path}`;
        }
        return super.buildRequest(options);
    }
    async _getAzureADToken() {
        if (typeof this._azureADTokenProvider === "function") {
            const token = await this._azureADTokenProvider();
            if (!token || typeof token !== "string") throw new Errors.OpenAIError(`Expected 'azureADTokenProvider' argument to return a string but it returned ${token}`);
            return token;
        }
        return undefined;
    }
    authHeaders(opts) {
        return {};
    }
    async prepareOptions(opts) {
        if (opts.headers?.["Authorization"] || opts.headers?.["api-key"]) return super.prepareOptions(opts);
        const token = await this._getAzureADToken();
        opts.headers ?? (opts.headers = {});
        if (token) opts.headers["Authorization"] = `Bearer ${token}`;
        else if (this.apiKey !== API_KEY_SENTINEL) opts.headers["api-key"] = this.apiKey;
        else throw new Errors.OpenAIError("Unable to handle auth");
        return super.prepareOptions(opts);
    }
}
exports.AzureOpenAI = AzureOpenAI;
const _deployments_endpoints = new Set([
    "/completions",
    "/chat/completions",
    "/embeddings",
    "/audio/transcriptions",
    "/audio/translations",
    "/audio/speech",
    "/images/generations",
    "/batches"
]);
const API_KEY_SENTINEL = "<Missing Key>";
// ---------------------- End Azure ----------------------
exports = module.exports = OpenAI;
module.exports.AzureOpenAI = AzureOpenAI;
exports.default = OpenAI;

});
parcelRequire.register("8peXx", function(module, exports) {
"use strict";
var $61ec4324a11ea618$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $61ec4324a11ea618$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $61ec4324a11ea618$var$_AbstractPage_client;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isObj = module.exports.toBase64 = module.exports.getRequiredHeader = module.exports.isHeadersProtocol = module.exports.isRunningInBrowser = module.exports.debug = module.exports.hasOwn = module.exports.isEmptyObj = module.exports.maybeCoerceBoolean = module.exports.maybeCoerceFloat = module.exports.maybeCoerceInteger = module.exports.coerceBoolean = module.exports.coerceFloat = module.exports.coerceInteger = module.exports.readEnv = module.exports.ensurePresent = module.exports.castToError = module.exports.sleep = module.exports.safeJSON = module.exports.isRequestOptions = module.exports.createResponseHeaders = module.exports.PagePromise = module.exports.AbstractPage = module.exports.APIClient = module.exports.APIPromise = module.exports.createForm = module.exports.multipartFormRequestOptions = module.exports.maybeMultipartFormRequestOptions = void 0;

var $7ud3Q = parcelRequire("7ud3Q");

var $bDHYA = parcelRequire("bDHYA");

var $2CkQ4 = parcelRequire("2CkQ4");

var $jhyJY = parcelRequire("jhyJY");

var $2N2K2 = parcelRequire("2N2K2");

var $2N2K2 = parcelRequire("2N2K2");
Object.defineProperty(module.exports, "maybeMultipartFormRequestOptions", {
    enumerable: true,
    get: function() {
        return $2N2K2.maybeMultipartFormRequestOptions;
    }
});
Object.defineProperty(module.exports, "multipartFormRequestOptions", {
    enumerable: true,
    get: function() {
        return $2N2K2.multipartFormRequestOptions;
    }
});
Object.defineProperty(module.exports, "createForm", {
    enumerable: true,
    get: function() {
        return $2N2K2.createForm;
    }
});
async function $61ec4324a11ea618$var$defaultParseResponse(props) {
    const { response: response } = props;
    if (props.options.stream) {
        $61ec4324a11ea618$var$debug("response", response.status, response.url, response.headers, response.body);
        // Note: there is an invariant here that isn't represented in the type system
        // that if you set `stream: true` the response type must also be `Stream<T>`
        if (props.options.__streamClass) return props.options.__streamClass.fromSSEResponse(response, props.controller);
        return $bDHYA.Stream.fromSSEResponse(response, props.controller);
    }
    // fetch refuses to read the body when the status code is 204.
    if (response.status === 204) return null;
    if (props.options.__binaryResponse) return response;
    const contentType = response.headers.get("content-type");
    const isJSON = contentType?.includes("application/json") || contentType?.includes("application/vnd.api+json");
    if (isJSON) {
        const json = await response.json();
        $61ec4324a11ea618$var$debug("response", response.status, response.url, response.headers, json);
        return json;
    }
    const text = await response.text();
    $61ec4324a11ea618$var$debug("response", response.status, response.url, response.headers, text);
    // TODO handle blob, arraybuffer, other content types, etc.
    return text;
}
/**
 * A subclass of `Promise` providing additional helper methods
 * for interacting with the SDK.
 */ class $61ec4324a11ea618$var$APIPromise extends Promise {
    constructor(responsePromise, parseResponse = $61ec4324a11ea618$var$defaultParseResponse){
        super((resolve)=>{
            // this is maybe a bit weird but this has to be a no-op to not implicitly
            // parse the response body; instead .then, .catch, .finally are overridden
            // to parse the response
            resolve(null);
        });
        this.responsePromise = responsePromise;
        this.parseResponse = parseResponse;
    }
    _thenUnwrap(transform) {
        return new $61ec4324a11ea618$var$APIPromise(this.responsePromise, async (props)=>transform(await this.parseResponse(props)));
    }
    /**
     * Gets the raw `Response` instance instead of parsing the response
     * data.
     *
     * If you want to parse the response body but still get the `Response`
     * instance, you can use {@link withResponse()}.
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */ asResponse() {
        return this.responsePromise.then((p)=>p.response);
    }
    /**
     * Gets the parsed response data and the raw `Response` instance.
     *
     * If you just want to get the raw `Response` instance without parsing it,
     * you can use {@link asResponse()}.
     *
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */ async withResponse() {
        const [data, response] = await Promise.all([
            this.parse(),
            this.asResponse()
        ]);
        return {
            data: data,
            response: response
        };
    }
    parse() {
        if (!this.parsedPromise) this.parsedPromise = this.responsePromise.then(this.parseResponse);
        return this.parsedPromise;
    }
    then(onfulfilled, onrejected) {
        return this.parse().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this.parse().catch(onrejected);
    }
    finally(onfinally) {
        return this.parse().finally(onfinally);
    }
}
module.exports.APIPromise = $61ec4324a11ea618$var$APIPromise;
class $61ec4324a11ea618$var$APIClient {
    constructor({ baseURL: baseURL, maxRetries: maxRetries = 2, timeout: timeout = 600000, httpAgent: httpAgent, fetch: overridenFetch }){
        this.baseURL = baseURL;
        this.maxRetries = $61ec4324a11ea618$var$validatePositiveInteger("maxRetries", maxRetries);
        this.timeout = $61ec4324a11ea618$var$validatePositiveInteger("timeout", timeout);
        this.httpAgent = httpAgent;
        this.fetch = overridenFetch ?? $jhyJY.fetch;
    }
    authHeaders(opts) {
        return {};
    }
    /**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */ defaultHeaders(opts) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...$61ec4324a11ea618$var$getPlatformHeaders(),
            ...this.authHeaders(opts)
        };
    }
    /**
     * Override this to add your own headers validation:
     */ validateHeaders(headers, customHeaders) {}
    defaultIdempotencyKey() {
        return `stainless-node-retry-${$61ec4324a11ea618$var$uuid4()}`;
    }
    get(path, opts) {
        return this.methodRequest("get", path, opts);
    }
    post(path, opts) {
        return this.methodRequest("post", path, opts);
    }
    patch(path, opts) {
        return this.methodRequest("patch", path, opts);
    }
    put(path, opts) {
        return this.methodRequest("put", path, opts);
    }
    delete(path, opts) {
        return this.methodRequest("delete", path, opts);
    }
    methodRequest(method, path, opts) {
        return this.request(Promise.resolve(opts).then((opts)=>({
                method: method,
                path: path,
                ...opts
            })));
    }
    getAPIList(path, Page, opts) {
        return this.requestAPIList(Page, {
            method: "get",
            path: path,
            ...opts
        });
    }
    calculateContentLength(body) {
        if (typeof body === "string") {
            if (typeof Buffer !== "undefined") return Buffer.byteLength(body, "utf8").toString();
            if (typeof TextEncoder !== "undefined") {
                const encoder = new TextEncoder();
                const encoded = encoder.encode(body);
                return encoded.length.toString();
            }
        }
        return null;
    }
    buildRequest(options) {
        const { method: method, path: path, query: query, headers: headers = {} } = options;
        const body = (0, $2N2K2.isMultipartBody)(options.body) ? options.body.body : options.body ? JSON.stringify(options.body, null, 2) : null;
        const contentLength = this.calculateContentLength(body);
        const url = this.buildURL(path, query);
        if ("timeout" in options) $61ec4324a11ea618$var$validatePositiveInteger("timeout", options.timeout);
        const timeout = options.timeout ?? this.timeout;
        const httpAgent = options.httpAgent ?? this.httpAgent ?? (0, $jhyJY.getDefaultAgent)(url);
        const minAgentTimeout = timeout + 1000;
        if (typeof httpAgent?.options?.timeout === "number" && minAgentTimeout > (httpAgent.options.timeout ?? 0)) // Allow any given request to bump our agent active socket timeout.
        // This may seem strange, but leaking active sockets should be rare and not particularly problematic,
        // and without mutating agent we would need to create more of them.
        // This tradeoff optimizes for performance.
        httpAgent.options.timeout = minAgentTimeout;
        if (this.idempotencyHeader && method !== "get") {
            if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
            headers[this.idempotencyHeader] = options.idempotencyKey;
        }
        const reqHeaders = this.buildHeaders({
            options: options,
            headers: headers,
            contentLength: contentLength
        });
        const req = {
            method: method,
            ...body && {
                body: body
            },
            headers: reqHeaders,
            ...httpAgent && {
                agent: httpAgent
            },
            // @ts-ignore node-fetch uses a custom AbortSignal type that is
            // not compatible with standard web types
            signal: options.signal ?? null
        };
        return {
            req: req,
            url: url,
            timeout: timeout
        };
    }
    buildHeaders({ options: options, headers: headers, contentLength: contentLength }) {
        const reqHeaders = {};
        if (contentLength) reqHeaders["content-length"] = contentLength;
        const defaultHeaders = this.defaultHeaders(options);
        $61ec4324a11ea618$var$applyHeadersMut(reqHeaders, defaultHeaders);
        $61ec4324a11ea618$var$applyHeadersMut(reqHeaders, headers);
        // let builtin fetch set the Content-Type for multipart bodies
        if ((0, $2N2K2.isMultipartBody)(options.body) && $jhyJY.kind !== "node") delete reqHeaders["content-type"];
        this.validateHeaders(reqHeaders, headers);
        return reqHeaders;
    }
    /**
     * Used as a callback for mutating the given `FinalRequestOptions` object.
     */ async prepareOptions(options) {}
    /**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */ async prepareRequest(request, { url: url, options: options }) {}
    parseHeaders(headers) {
        return !headers ? {} : Symbol.iterator in headers ? Object.fromEntries(Array.from(headers).map((header)=>[
                ...header
            ])) : {
            ...headers
        };
    }
    makeStatusError(status, error, message, headers) {
        return $2CkQ4.APIError.generate(status, error, message, headers);
    }
    request(options, remainingRetries = null) {
        return new $61ec4324a11ea618$var$APIPromise(this.makeRequest(options, remainingRetries));
    }
    async makeRequest(optionsInput, retriesRemaining) {
        const options = await optionsInput;
        if (retriesRemaining == null) retriesRemaining = options.maxRetries ?? this.maxRetries;
        await this.prepareOptions(options);
        const { req: req, url: url, timeout: timeout } = this.buildRequest(options);
        await this.prepareRequest(req, {
            url: url,
            options: options
        });
        $61ec4324a11ea618$var$debug("request", url, options, req.headers);
        if (options.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        const controller = new AbortController();
        const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(module.exports.castToError);
        if (response instanceof Error) {
            if (options.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
            if (retriesRemaining) return this.retryRequest(options, retriesRemaining);
            if (response.name === "AbortError") throw new $2CkQ4.APIConnectionTimeoutError();
            throw new $2CkQ4.APIConnectionError({
                cause: response
            });
        }
        const responseHeaders = (0, module.exports.createResponseHeaders)(response.headers);
        if (!response.ok) {
            if (retriesRemaining && this.shouldRetry(response)) {
                const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
                $61ec4324a11ea618$var$debug(`response (error; ${retryMessage})`, response.status, url, responseHeaders);
                return this.retryRequest(options, retriesRemaining, responseHeaders);
            }
            const errText = await response.text().catch((e)=>(0, module.exports.castToError)(e).message);
            const errJSON = (0, module.exports.safeJSON)(errText);
            const errMessage = errJSON ? undefined : errText;
            const retryMessage = retriesRemaining ? `(error; no more retries left)` : `(error; not retryable)`;
            $61ec4324a11ea618$var$debug(`response (error; ${retryMessage})`, response.status, url, responseHeaders, errMessage);
            const err = this.makeStatusError(response.status, errJSON, errMessage, responseHeaders);
            throw err;
        }
        return {
            response: response,
            options: options,
            controller: controller
        };
    }
    requestAPIList(Page, options) {
        const request = this.makeRequest(options, null);
        return new $61ec4324a11ea618$var$PagePromise(this, request, Page);
    }
    buildURL(path, query) {
        const url = $61ec4324a11ea618$var$isAbsoluteURL(path) ? new URL(path) : new URL(this.baseURL + (this.baseURL.endsWith("/") && path.startsWith("/") ? path.slice(1) : path));
        const defaultQuery = this.defaultQuery();
        if (!$61ec4324a11ea618$var$isEmptyObj(defaultQuery)) query = {
            ...defaultQuery,
            ...query
        };
        if (typeof query === "object" && query && !Array.isArray(query)) url.search = this.stringifyQuery(query);
        return url.toString();
    }
    stringifyQuery(query) {
        return Object.entries(query).filter(([_, value])=>typeof value !== "undefined").map(([key, value])=>{
            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            if (value === null) return `${encodeURIComponent(key)}=`;
            throw new $2CkQ4.OpenAIError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
        }).join("&");
    }
    async fetchWithTimeout(url, init, ms, controller) {
        const { signal: signal, ...options } = init || {};
        if (signal) signal.addEventListener("abort", ()=>controller.abort());
        const timeout = setTimeout(()=>controller.abort(), ms);
        return this.getRequestClient()// use undefined this binding; fetch errors if bound to something else in browser/cloudflare
        .fetch.call(undefined, url, {
            signal: controller.signal,
            ...options
        }).finally(()=>{
            clearTimeout(timeout);
        });
    }
    getRequestClient() {
        return {
            fetch: this.fetch
        };
    }
    shouldRetry(response) {
        // Note this is not a standard header.
        const shouldRetryHeader = response.headers.get("x-should-retry");
        // If the server explicitly says whether or not to retry, obey.
        if (shouldRetryHeader === "true") return true;
        if (shouldRetryHeader === "false") return false;
        // Retry on request timeouts.
        if (response.status === 408) return true;
        // Retry on lock timeouts.
        if (response.status === 409) return true;
        // Retry on rate limits.
        if (response.status === 429) return true;
        // Retry internal errors.
        if (response.status >= 500) return true;
        return false;
    }
    async retryRequest(options, retriesRemaining, responseHeaders) {
        let timeoutMillis;
        // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
        const retryAfterMillisHeader = responseHeaders?.["retry-after-ms"];
        if (retryAfterMillisHeader) {
            const timeoutMs = parseFloat(retryAfterMillisHeader);
            if (!Number.isNaN(timeoutMs)) timeoutMillis = timeoutMs;
        }
        // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
        const retryAfterHeader = responseHeaders?.["retry-after"];
        if (retryAfterHeader && !timeoutMillis) {
            const timeoutSeconds = parseFloat(retryAfterHeader);
            if (!Number.isNaN(timeoutSeconds)) timeoutMillis = timeoutSeconds * 1000;
            else timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
        }
        // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
        // just do what it says, but otherwise calculate a default
        if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60000)) {
            const maxRetries = options.maxRetries ?? this.maxRetries;
            timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
        }
        await (0, module.exports.sleep)(timeoutMillis);
        return this.makeRequest(options, retriesRemaining - 1);
    }
    calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
        const initialRetryDelay = 0.5;
        const maxRetryDelay = 8.0;
        const numRetries = maxRetries - retriesRemaining;
        // Apply exponential backoff, but not more than the max.
        const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
        // Apply some jitter, take up to at most 25 percent of the retry time.
        const jitter = 1 - Math.random() * 0.25;
        return sleepSeconds * jitter * 1000;
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${$7ud3Q.VERSION}`;
    }
}
module.exports.APIClient = $61ec4324a11ea618$var$APIClient;
class $61ec4324a11ea618$var$AbstractPage {
    constructor(client, response, body, options){
        $61ec4324a11ea618$var$_AbstractPage_client.set(this, void 0);
        $61ec4324a11ea618$var$__classPrivateFieldSet(this, $61ec4324a11ea618$var$_AbstractPage_client, client, "f");
        this.options = options;
        this.response = response;
        this.body = body;
    }
    hasNextPage() {
        const items = this.getPaginatedItems();
        if (!items.length) return false;
        return this.nextPageInfo() != null;
    }
    async getNextPage() {
        const nextInfo = this.nextPageInfo();
        if (!nextInfo) throw new $2CkQ4.OpenAIError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
        const nextOptions = {
            ...this.options
        };
        if ("params" in nextInfo && typeof nextOptions.query === "object") nextOptions.query = {
            ...nextOptions.query,
            ...nextInfo.params
        };
        else if ("url" in nextInfo) {
            const params = [
                ...Object.entries(nextOptions.query || {}),
                ...nextInfo.url.searchParams.entries()
            ];
            for (const [key, value] of params)nextInfo.url.searchParams.set(key, value);
            nextOptions.query = undefined;
            nextOptions.path = nextInfo.url.toString();
        }
        return await $61ec4324a11ea618$var$__classPrivateFieldGet(this, $61ec4324a11ea618$var$_AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
    }
    async *iterPages() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let page = this;
        yield page;
        while(page.hasNextPage()){
            page = await page.getNextPage();
            yield page;
        }
    }
    async *[($61ec4324a11ea618$var$_AbstractPage_client = new WeakMap(), Symbol.asyncIterator)]() {
        for await (const page of this.iterPages())for (const item of page.getPaginatedItems())yield item;
    }
}
module.exports.AbstractPage = $61ec4324a11ea618$var$AbstractPage;
/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */ class $61ec4324a11ea618$var$PagePromise extends $61ec4324a11ea618$var$APIPromise {
    constructor(client, request, Page){
        super(request, async (props)=>new Page(client, props.response, await $61ec4324a11ea618$var$defaultParseResponse(props), props.options));
    }
    /**
     * Allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */ async *[Symbol.asyncIterator]() {
        const page = await this;
        for await (const item of page)yield item;
    }
}
module.exports.PagePromise = $61ec4324a11ea618$var$PagePromise;
const $61ec4324a11ea618$var$createResponseHeaders = (headers)=>{
    return new Proxy(Object.fromEntries(// @ts-ignore
    headers.entries()), {
        get (target, name) {
            const key = name.toString();
            return target[key.toLowerCase()] || target[key];
        }
    });
};
module.exports.createResponseHeaders = $61ec4324a11ea618$var$createResponseHeaders;
// This is required so that we can determine if a given object matches the RequestOptions
// type at runtime. While this requires duplication, it is enforced by the TypeScript
// compiler such that any missing / extraneous keys will cause an error.
const $61ec4324a11ea618$var$requestOptionsKeys = {
    method: true,
    path: true,
    query: true,
    body: true,
    headers: true,
    maxRetries: true,
    stream: true,
    timeout: true,
    httpAgent: true,
    signal: true,
    idempotencyKey: true,
    __binaryResponse: true,
    __streamClass: true
};
const $61ec4324a11ea618$var$isRequestOptions = (obj)=>{
    return typeof obj === "object" && obj !== null && !$61ec4324a11ea618$var$isEmptyObj(obj) && Object.keys(obj).every((k)=>$61ec4324a11ea618$var$hasOwn($61ec4324a11ea618$var$requestOptionsKeys, k));
};
module.exports.isRequestOptions = $61ec4324a11ea618$var$isRequestOptions;
const $61ec4324a11ea618$var$getPlatformProperties = ()=>{
    if (typeof Deno !== "undefined" && Deno.build != null) return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": $7ud3Q.VERSION,
        "X-Stainless-OS": $61ec4324a11ea618$var$normalizePlatform(Deno.build.os),
        "X-Stainless-Arch": $61ec4324a11ea618$var$normalizeArch(Deno.build.arch),
        "X-Stainless-Runtime": "deno",
        "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
    if (typeof EdgeRuntime !== "undefined") return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": $7ud3Q.VERSION,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": `other:${EdgeRuntime}`,
        "X-Stainless-Runtime": "edge",
        "X-Stainless-Runtime-Version": process.version
    };
    // Check if Node.js
    if (Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]") return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": $7ud3Q.VERSION,
        "X-Stainless-OS": $61ec4324a11ea618$var$normalizePlatform(process.platform),
        "X-Stainless-Arch": $61ec4324a11ea618$var$normalizeArch(process.arch),
        "X-Stainless-Runtime": "node",
        "X-Stainless-Runtime-Version": process.version
    };
    const browserInfo = $61ec4324a11ea618$var$getBrowserInfo();
    if (browserInfo) return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": $7ud3Q.VERSION,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": `browser:${browserInfo.browser}`,
        "X-Stainless-Runtime-Version": browserInfo.version
    };
    // TODO add support for Cloudflare workers, etc.
    return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": $7ud3Q.VERSION,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": "unknown",
        "X-Stainless-Runtime-Version": "unknown"
    };
};
// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function $61ec4324a11ea618$var$getBrowserInfo() {
    if (typeof navigator === "undefined" || !navigator) return null;
    // NOTE: The order matters here!
    const browserPatterns = [
        {
            key: "edge",
            pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "ie",
            pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "ie",
            pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "chrome",
            pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "firefox",
            pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "safari",
            pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
        }
    ];
    // Find the FIRST matching browser
    for (const { key: key, pattern: pattern } of browserPatterns){
        const match = pattern.exec(navigator.userAgent);
        if (match) {
            const major = match[1] || 0;
            const minor = match[2] || 0;
            const patch = match[3] || 0;
            return {
                browser: key,
                version: `${major}.${minor}.${patch}`
            };
        }
    }
    return null;
}
const $61ec4324a11ea618$var$normalizeArch = (arch)=>{
    // Node docs:
    // - https://nodejs.org/api/process.html#processarch
    // Deno docs:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    if (arch === "x32") return "x32";
    if (arch === "x86_64" || arch === "x64") return "x64";
    if (arch === "arm") return "arm";
    if (arch === "aarch64" || arch === "arm64") return "arm64";
    if (arch) return `other:${arch}`;
    return "unknown";
};
const $61ec4324a11ea618$var$normalizePlatform = (platform)=>{
    // Node platforms:
    // - https://nodejs.org/api/process.html#processplatform
    // Deno platforms:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    // - https://github.com/denoland/deno/issues/14799
    platform = platform.toLowerCase();
    // NOTE: this iOS check is untested and may not work
    // Node does not work natively on IOS, there is a fork at
    // https://github.com/nodejs-mobile/nodejs-mobile
    // however it is unknown at the time of writing how to detect if it is running
    if (platform.includes("ios")) return "iOS";
    if (platform === "android") return "Android";
    if (platform === "darwin") return "MacOS";
    if (platform === "win32") return "Windows";
    if (platform === "freebsd") return "FreeBSD";
    if (platform === "openbsd") return "OpenBSD";
    if (platform === "linux") return "Linux";
    if (platform) return `Other:${platform}`;
    return "Unknown";
};
let $61ec4324a11ea618$var$_platformHeaders;
const $61ec4324a11ea618$var$getPlatformHeaders = ()=>{
    return $61ec4324a11ea618$var$_platformHeaders ?? ($61ec4324a11ea618$var$_platformHeaders = $61ec4324a11ea618$var$getPlatformProperties());
};
const $61ec4324a11ea618$var$safeJSON = (text)=>{
    try {
        return JSON.parse(text);
    } catch (err) {
        return undefined;
    }
};
module.exports.safeJSON = $61ec4324a11ea618$var$safeJSON;
// https://stackoverflow.com/a/19709846
const $61ec4324a11ea618$var$startsWithSchemeRegexp = new RegExp("^(?:[a-z]+:)?//", "i");
const $61ec4324a11ea618$var$isAbsoluteURL = (url)=>{
    return $61ec4324a11ea618$var$startsWithSchemeRegexp.test(url);
};
const $61ec4324a11ea618$var$sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
module.exports.sleep = $61ec4324a11ea618$var$sleep;
const $61ec4324a11ea618$var$validatePositiveInteger = (name, n)=>{
    if (typeof n !== "number" || !Number.isInteger(n)) throw new $2CkQ4.OpenAIError(`${name} must be an integer`);
    if (n < 0) throw new $2CkQ4.OpenAIError(`${name} must be a positive integer`);
    return n;
};
const $61ec4324a11ea618$var$castToError = (err)=>{
    if (err instanceof Error) return err;
    return new Error(err);
};
module.exports.castToError = $61ec4324a11ea618$var$castToError;
const $61ec4324a11ea618$var$ensurePresent = (value)=>{
    if (value == null) throw new $2CkQ4.OpenAIError(`Expected a value to be given but received ${value} instead.`);
    return value;
};
module.exports.ensurePresent = $61ec4324a11ea618$var$ensurePresent;
/**
 * Read an environment variable.
 *
 * Trims beginning and trailing whitespace.
 *
 * Will return undefined if the environment variable doesn't exist or cannot be accessed.
 */ const $61ec4324a11ea618$var$readEnv = (env)=>{
    if (typeof process !== "undefined") return process.env?.[env]?.trim() ?? undefined;
    if (typeof Deno !== "undefined") return Deno.env?.get?.(env)?.trim();
    return undefined;
};
module.exports.readEnv = $61ec4324a11ea618$var$readEnv;
const $61ec4324a11ea618$var$coerceInteger = (value)=>{
    if (typeof value === "number") return Math.round(value);
    if (typeof value === "string") return parseInt(value, 10);
    throw new $2CkQ4.OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
module.exports.coerceInteger = $61ec4324a11ea618$var$coerceInteger;
const $61ec4324a11ea618$var$coerceFloat = (value)=>{
    if (typeof value === "number") return value;
    if (typeof value === "string") return parseFloat(value);
    throw new $2CkQ4.OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
module.exports.coerceFloat = $61ec4324a11ea618$var$coerceFloat;
const $61ec4324a11ea618$var$coerceBoolean = (value)=>{
    if (typeof value === "boolean") return value;
    if (typeof value === "string") return value === "true";
    return Boolean(value);
};
module.exports.coerceBoolean = $61ec4324a11ea618$var$coerceBoolean;
const $61ec4324a11ea618$var$maybeCoerceInteger = (value)=>{
    if (value === undefined) return undefined;
    return (0, module.exports.coerceInteger)(value);
};
module.exports.maybeCoerceInteger = $61ec4324a11ea618$var$maybeCoerceInteger;
const $61ec4324a11ea618$var$maybeCoerceFloat = (value)=>{
    if (value === undefined) return undefined;
    return (0, module.exports.coerceFloat)(value);
};
module.exports.maybeCoerceFloat = $61ec4324a11ea618$var$maybeCoerceFloat;
const $61ec4324a11ea618$var$maybeCoerceBoolean = (value)=>{
    if (value === undefined) return undefined;
    return (0, module.exports.coerceBoolean)(value);
};
module.exports.maybeCoerceBoolean = $61ec4324a11ea618$var$maybeCoerceBoolean;
// https://stackoverflow.com/a/34491287
function $61ec4324a11ea618$var$isEmptyObj(obj) {
    if (!obj) return true;
    for(const _k in obj)return false;
    return true;
}
module.exports.isEmptyObj = $61ec4324a11ea618$var$isEmptyObj;
// https://eslint.org/docs/latest/rules/no-prototype-builtins
function $61ec4324a11ea618$var$hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
module.exports.hasOwn = $61ec4324a11ea618$var$hasOwn;
/**
 * Copies headers from "newHeaders" onto "targetHeaders",
 * using lower-case for all properties,
 * ignoring any keys with undefined values,
 * and deleting any keys with null values.
 */ function $61ec4324a11ea618$var$applyHeadersMut(targetHeaders, newHeaders) {
    for(const k in newHeaders){
        if (!$61ec4324a11ea618$var$hasOwn(newHeaders, k)) continue;
        const lowerKey = k.toLowerCase();
        if (!lowerKey) continue;
        const val = newHeaders[k];
        if (val === null) delete targetHeaders[lowerKey];
        else if (val !== undefined) targetHeaders[lowerKey] = val;
    }
}
function $61ec4324a11ea618$var$debug(action, ...args) {
    if (typeof process !== "undefined" && process?.env?.["DEBUG"] === "true") console.log(`OpenAI:DEBUG:${action}`, ...args);
}
module.exports.debug = $61ec4324a11ea618$var$debug;
/**
 * https://stackoverflow.com/a/2117523
 */ const $61ec4324a11ea618$var$uuid4 = ()=>{
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const $61ec4324a11ea618$var$isRunningInBrowser = ()=>{
    return(// @ts-ignore
    typeof window !== "undefined" && // @ts-ignore
    typeof window.document !== "undefined" && // @ts-ignore
    typeof navigator !== "undefined");
};
module.exports.isRunningInBrowser = $61ec4324a11ea618$var$isRunningInBrowser;
const $61ec4324a11ea618$var$isHeadersProtocol = (headers)=>{
    return typeof headers?.get === "function";
};
module.exports.isHeadersProtocol = $61ec4324a11ea618$var$isHeadersProtocol;
const $61ec4324a11ea618$var$getRequiredHeader = (headers, header)=>{
    const lowerCasedHeader = header.toLowerCase();
    if ((0, module.exports.isHeadersProtocol)(headers)) {
        // to deal with the case where the header looks like Stainless-Event-Id
        const intercapsHeader = header[0]?.toUpperCase() + header.substring(1).replace(/([^\w])(\w)/g, (_m, g1, g2)=>g1 + g2.toUpperCase());
        for (const key of [
            header,
            lowerCasedHeader,
            header.toUpperCase(),
            intercapsHeader
        ]){
            const value = headers.get(key);
            if (value) return value;
        }
    }
    for (const [key, value] of Object.entries(headers))if (key.toLowerCase() === lowerCasedHeader) {
        if (Array.isArray(value)) {
            if (value.length <= 1) return value[0];
            console.warn(`Received ${value.length} entries for the ${header} header, using the first entry.`);
            return value[0];
        }
        return value;
    }
    throw new Error(`Could not find ${header} header`);
};
module.exports.getRequiredHeader = $61ec4324a11ea618$var$getRequiredHeader;
/**
 * Encodes a string to Base64 format.
 */ const $61ec4324a11ea618$var$toBase64 = (str)=>{
    if (!str) return "";
    if (typeof Buffer !== "undefined") return Buffer.from(str).toString("base64");
    if (typeof btoa !== "undefined") return btoa(str);
    throw new $2CkQ4.OpenAIError("Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined");
};
module.exports.toBase64 = $61ec4324a11ea618$var$toBase64;
function $61ec4324a11ea618$var$isObj(obj) {
    return obj != null && typeof obj === "object" && !Array.isArray(obj);
}
module.exports.isObj = $61ec4324a11ea618$var$isObj;

});
parcelRequire.register("7ud3Q", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.VERSION = void 0;
module.exports.VERSION = "4.47.1"; // x-release-please-version

});

parcelRequire.register("bDHYA", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.readableStreamAsyncIterable = module.exports._decodeChunks = module.exports._iterSSEMessages = module.exports.Stream = void 0;

var $jhyJY = parcelRequire("jhyJY");

var $2CkQ4 = parcelRequire("2CkQ4");

var $2CkQ4 = parcelRequire("2CkQ4");
class $879572fd88b6a3a3$var$Stream {
    constructor(iterator, controller){
        this.iterator = iterator;
        this.controller = controller;
    }
    static fromSSEResponse(response, controller) {
        let consumed = false;
        async function* iterator() {
            if (consumed) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            consumed = true;
            let done = false;
            try {
                for await (const sse of $879572fd88b6a3a3$var$_iterSSEMessages(response, controller)){
                    if (done) continue;
                    if (sse.data.startsWith("[DONE]")) {
                        done = true;
                        continue;
                    }
                    if (sse.event === null) {
                        let data;
                        try {
                            data = JSON.parse(sse.data);
                        } catch (e) {
                            console.error(`Could not parse message into JSON:`, sse.data);
                            console.error(`From chunk:`, sse.raw);
                            throw e;
                        }
                        if (data && data.error) throw new $2CkQ4.APIError(undefined, data.error, undefined, undefined);
                        yield data;
                    } else {
                        let data;
                        try {
                            data = JSON.parse(sse.data);
                        } catch (e) {
                            console.error(`Could not parse message into JSON:`, sse.data);
                            console.error(`From chunk:`, sse.raw);
                            throw e;
                        }
                        // TODO: Is this where the error should be thrown?
                        if (sse.event == "error") throw new $2CkQ4.APIError(undefined, data.error, data.message, undefined);
                        yield {
                            event: sse.event,
                            data: data
                        };
                    }
                }
                done = true;
            } catch (e) {
                // If the user calls `stream.controller.abort()`, we should exit without throwing.
                if (e instanceof Error && e.name === "AbortError") return;
                throw e;
            } finally{
                // If the user `break`s, abort the ongoing request.
                if (!done) controller.abort();
            }
        }
        return new $879572fd88b6a3a3$var$Stream(iterator, controller);
    }
    /**
     * Generates a Stream from a newline-separated ReadableStream
     * where each item is a JSON value.
     */ static fromReadableStream(readableStream, controller) {
        let consumed = false;
        async function* iterLines() {
            const lineDecoder = new $879572fd88b6a3a3$var$LineDecoder();
            const iter = $879572fd88b6a3a3$var$readableStreamAsyncIterable(readableStream);
            for await (const chunk of iter)for (const line of lineDecoder.decode(chunk))yield line;
            for (const line of lineDecoder.flush())yield line;
        }
        async function* iterator() {
            if (consumed) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            consumed = true;
            let done = false;
            try {
                for await (const line of iterLines()){
                    if (done) continue;
                    if (line) yield JSON.parse(line);
                }
                done = true;
            } catch (e) {
                // If the user calls `stream.controller.abort()`, we should exit without throwing.
                if (e instanceof Error && e.name === "AbortError") return;
                throw e;
            } finally{
                // If the user `break`s, abort the ongoing request.
                if (!done) controller.abort();
            }
        }
        return new $879572fd88b6a3a3$var$Stream(iterator, controller);
    }
    [Symbol.asyncIterator]() {
        return this.iterator();
    }
    /**
     * Splits the stream into two streams which can be
     * independently read from at different speeds.
     */ tee() {
        const left = [];
        const right = [];
        const iterator = this.iterator();
        const teeIterator = (queue)=>{
            return {
                next: ()=>{
                    if (queue.length === 0) {
                        const result = iterator.next();
                        left.push(result);
                        right.push(result);
                    }
                    return queue.shift();
                }
            };
        };
        return [
            new $879572fd88b6a3a3$var$Stream(()=>teeIterator(left), this.controller),
            new $879572fd88b6a3a3$var$Stream(()=>teeIterator(right), this.controller)
        ];
    }
    /**
     * Converts this stream to a newline-separated ReadableStream of
     * JSON stringified values in the stream
     * which can be turned back into a Stream with `Stream.fromReadableStream()`.
     */ toReadableStream() {
        const self = this;
        let iter;
        const encoder = new TextEncoder();
        return new $jhyJY.ReadableStream({
            async start () {
                iter = self[Symbol.asyncIterator]();
            },
            async pull (ctrl) {
                try {
                    const { value: value, done: done } = await iter.next();
                    if (done) return ctrl.close();
                    const bytes = encoder.encode(JSON.stringify(value) + "\n");
                    ctrl.enqueue(bytes);
                } catch (err) {
                    ctrl.error(err);
                }
            },
            async cancel () {
                await iter.return?.();
            }
        });
    }
}
module.exports.Stream = $879572fd88b6a3a3$var$Stream;
async function* $879572fd88b6a3a3$var$_iterSSEMessages(response, controller) {
    if (!response.body) {
        controller.abort();
        throw new $2CkQ4.OpenAIError(`Attempted to iterate over a response with no body`);
    }
    const sseDecoder = new $879572fd88b6a3a3$var$SSEDecoder();
    const lineDecoder = new $879572fd88b6a3a3$var$LineDecoder();
    const iter = $879572fd88b6a3a3$var$readableStreamAsyncIterable(response.body);
    for await (const sseChunk of $879572fd88b6a3a3$var$iterSSEChunks(iter))for (const line of lineDecoder.decode(sseChunk)){
        const sse = sseDecoder.decode(line);
        if (sse) yield sse;
    }
    for (const line of lineDecoder.flush()){
        const sse = sseDecoder.decode(line);
        if (sse) yield sse;
    }
}
module.exports._iterSSEMessages = $879572fd88b6a3a3$var$_iterSSEMessages;
/**
 * Given an async iterable iterator, iterates over it and yields full
 * SSE chunks, i.e. yields when a double new-line is encountered.
 */ async function* $879572fd88b6a3a3$var$iterSSEChunks(iterator) {
    let data = new Uint8Array();
    for await (const chunk of iterator){
        if (chunk == null) continue;
        const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk;
        let newData = new Uint8Array(data.length + binaryChunk.length);
        newData.set(data);
        newData.set(binaryChunk, data.length);
        data = newData;
        let patternIndex;
        while((patternIndex = $879572fd88b6a3a3$var$findDoubleNewlineIndex(data)) !== -1){
            yield data.slice(0, patternIndex);
            data = data.slice(patternIndex);
        }
    }
    if (data.length > 0) yield data;
}
function $879572fd88b6a3a3$var$findDoubleNewlineIndex(buffer) {
    // This function searches the buffer for the end patterns (\r\r, \n\n, \r\n\r\n)
    // and returns the index right after the first occurrence of any pattern,
    // or -1 if none of the patterns are found.
    const newline = 0x0a; // \n
    const carriage = 0x0d; // \r
    for(let i = 0; i < buffer.length - 2; i++){
        if (buffer[i] === newline && buffer[i + 1] === newline) // \n\n
        return i + 2;
        if (buffer[i] === carriage && buffer[i + 1] === carriage) // \r\r
        return i + 2;
        if (buffer[i] === carriage && buffer[i + 1] === newline && i + 3 < buffer.length && buffer[i + 2] === carriage && buffer[i + 3] === newline) // \r\n\r\n
        return i + 4;
    }
    return -1;
}
class $879572fd88b6a3a3$var$SSEDecoder {
    constructor(){
        this.event = null;
        this.data = [];
        this.chunks = [];
    }
    decode(line) {
        if (line.endsWith("\r")) line = line.substring(0, line.length - 1);
        if (!line) {
            // empty line and we didn't previously encounter any messages
            if (!this.event && !this.data.length) return null;
            const sse = {
                event: this.event,
                data: this.data.join("\n"),
                raw: this.chunks
            };
            this.event = null;
            this.data = [];
            this.chunks = [];
            return sse;
        }
        this.chunks.push(line);
        if (line.startsWith(":")) return null;
        let [fieldname, _, value] = $879572fd88b6a3a3$var$partition(line, ":");
        if (value.startsWith(" ")) value = value.substring(1);
        if (fieldname === "event") this.event = value;
        else if (fieldname === "data") this.data.push(value);
        return null;
    }
}
/**
 * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
 * reading lines from text.
 *
 * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
 */ class $879572fd88b6a3a3$var$LineDecoder {
    constructor(){
        this.buffer = [];
        this.trailingCR = false;
    }
    decode(chunk) {
        let text = this.decodeText(chunk);
        if (this.trailingCR) {
            text = "\r" + text;
            this.trailingCR = false;
        }
        if (text.endsWith("\r")) {
            this.trailingCR = true;
            text = text.slice(0, -1);
        }
        if (!text) return [];
        const trailingNewline = $879572fd88b6a3a3$var$LineDecoder.NEWLINE_CHARS.has(text[text.length - 1] || "");
        let lines = text.split($879572fd88b6a3a3$var$LineDecoder.NEWLINE_REGEXP);
        // if there is a trailing new line then the last entry will be an empty
        // string which we don't care about
        if (trailingNewline) lines.pop();
        if (lines.length === 1 && !trailingNewline) {
            this.buffer.push(lines[0]);
            return [];
        }
        if (this.buffer.length > 0) {
            lines = [
                this.buffer.join("") + lines[0],
                ...lines.slice(1)
            ];
            this.buffer = [];
        }
        if (!trailingNewline) this.buffer = [
            lines.pop() || ""
        ];
        return lines;
    }
    decodeText(bytes) {
        if (bytes == null) return "";
        if (typeof bytes === "string") return bytes;
        // Node:
        if (typeof Buffer !== "undefined") {
            if (bytes instanceof Buffer) return bytes.toString();
            if (bytes instanceof Uint8Array) return Buffer.from(bytes).toString();
            throw new $2CkQ4.OpenAIError(`Unexpected: received non-Uint8Array (${bytes.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
        }
        // Browser
        if (typeof TextDecoder !== "undefined") {
            if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
                this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8"));
                return this.textDecoder.decode(bytes);
            }
            throw new $2CkQ4.OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${bytes.constructor.name}) in a web platform. Please report this error.`);
        }
        throw new $2CkQ4.OpenAIError(`Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.`);
    }
    flush() {
        if (!this.buffer.length && !this.trailingCR) return [];
        const lines = [
            this.buffer.join("")
        ];
        this.buffer = [];
        this.trailingCR = false;
        return lines;
    }
}
// prettier-ignore
$879572fd88b6a3a3$var$LineDecoder.NEWLINE_CHARS = new Set([
    "\n",
    "\r"
]);
$879572fd88b6a3a3$var$LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
/** This is an internal helper function that's just used for testing */ function $879572fd88b6a3a3$var$_decodeChunks(chunks) {
    const decoder = new $879572fd88b6a3a3$var$LineDecoder();
    const lines = [];
    for (const chunk of chunks)lines.push(...decoder.decode(chunk));
    return lines;
}
module.exports._decodeChunks = $879572fd88b6a3a3$var$_decodeChunks;
function $879572fd88b6a3a3$var$partition(str, delimiter) {
    const index = str.indexOf(delimiter);
    if (index !== -1) return [
        str.substring(0, index),
        delimiter,
        str.substring(index + delimiter.length)
    ];
    return [
        str,
        "",
        ""
    ];
}
/**
 * Most browsers don't yet have async iterable support for ReadableStream,
 * and Node has a very different way of reading bytes from its "ReadableStream".
 *
 * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */ function $879572fd88b6a3a3$var$readableStreamAsyncIterable(stream) {
    if (stream[Symbol.asyncIterator]) return stream;
    const reader = stream.getReader();
    return {
        async next () {
            try {
                const result = await reader.read();
                if (result?.done) reader.releaseLock(); // release lock when stream becomes closed
                return result;
            } catch (e) {
                reader.releaseLock(); // release lock when stream becomes errored
                throw e;
            }
        },
        async return () {
            const cancelPromise = reader.cancel();
            reader.releaseLock();
            await cancelPromise;
            return {
                done: true,
                value: undefined
            };
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
module.exports.readableStreamAsyncIterable = $879572fd88b6a3a3$var$readableStreamAsyncIterable;

});
parcelRequire.register("jhyJY", function(module, exports) {
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */ 
var $gvP2l = parcelRequire("gvP2l");

var $7VjK0 = parcelRequire("7VjK0");
if (!$gvP2l.kind) $gvP2l.setShims($7VjK0.getRuntime(), {
    auto: true
});
for (const property of Object.keys($gvP2l))Object.defineProperty(module.exports, property, {
    get () {
        return $gvP2l[property];
    }
});

});
parcelRequire.register("gvP2l", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.setShims = module.exports.isFsReadStream = module.exports.fileFromPath = module.exports.getDefaultAgent = module.exports.getMultipartRequestOptions = module.exports.ReadableStream = module.exports.File = module.exports.Blob = module.exports.FormData = module.exports.Headers = module.exports.Response = module.exports.Request = module.exports.fetch = module.exports.kind = module.exports.auto = void 0;
module.exports.auto = false;
module.exports.kind = undefined;
module.exports.fetch = undefined;
module.exports.Request = undefined;
module.exports.Response = undefined;
module.exports.Headers = undefined;
module.exports.FormData = undefined;
module.exports.Blob = undefined;
module.exports.File = undefined;
module.exports.ReadableStream = undefined;
module.exports.getMultipartRequestOptions = undefined;
module.exports.getDefaultAgent = undefined;
module.exports.fileFromPath = undefined;
module.exports.isFsReadStream = undefined;
function $c0572172dceb4bb1$var$setShims(shims, options = {
    auto: false
}) {
    if (module.exports.auto) throw new Error(`you must \`import 'openai/shims/${shims.kind}'\` before importing anything else from openai`);
    if (module.exports.kind) throw new Error(`can't \`import 'openai/shims/${shims.kind}'\` after \`import 'openai/shims/${module.exports.kind}'\``);
    module.exports.auto = options.auto;
    module.exports.kind = shims.kind;
    module.exports.fetch = shims.fetch;
    module.exports.Request = shims.Request;
    module.exports.Response = shims.Response;
    module.exports.Headers = shims.Headers;
    module.exports.FormData = shims.FormData;
    module.exports.Blob = shims.Blob;
    module.exports.File = shims.File;
    module.exports.ReadableStream = shims.ReadableStream;
    module.exports.getMultipartRequestOptions = shims.getMultipartRequestOptions;
    module.exports.getDefaultAgent = shims.getDefaultAgent;
    module.exports.fileFromPath = shims.fileFromPath;
    module.exports.isFsReadStream = shims.isFsReadStream;
}
module.exports.setShims = $c0572172dceb4bb1$var$setShims;

});

parcelRequire.register("7VjK0", function(module, exports) {
"use strict";
var $5c4d2b6c505c0ce0$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $5c4d2b6c505c0ce0$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $5c4d2b6c505c0ce0$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */ $5c4d2b6c505c0ce0$var$__exportStar((parcelRequire("26moJ")), module.exports);

});
parcelRequire.register("26moJ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getRuntime = void 0;

var $92Jaz = parcelRequire("92Jaz");
function $187d84159487c034$var$getRuntime({ manuallyImported: manuallyImported } = {}) {
    const recommendation = manuallyImported ? `You may need to use polyfills` : `Add one of these imports before your first \`import … from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;
    let _fetch, _Request, _Response, _Headers;
    try {
        // @ts-ignore
        _fetch = fetch;
        // @ts-ignore
        _Request = Request;
        // @ts-ignore
        _Response = Response;
        // @ts-ignore
        _Headers = Headers;
    } catch (error) {
        throw new Error(`this environment is missing the following Web Fetch API type: ${error.message}. ${recommendation}`);
    }
    return {
        kind: "web",
        fetch: _fetch,
        Request: _Request,
        Response: _Response,
        Headers: _Headers,
        FormData: // @ts-ignore
        typeof FormData !== "undefined" ? FormData : class FormData1 {
            // @ts-ignore
            constructor(){
                throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${recommendation}`);
            }
        },
        Blob: typeof Blob !== "undefined" ? Blob : class Blob1 {
            constructor(){
                throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${recommendation}`);
            }
        },
        File: // @ts-ignore
        typeof File !== "undefined" ? File : class File1 {
            // @ts-ignore
            constructor(){
                throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${recommendation}`);
            }
        },
        ReadableStream: // @ts-ignore
        typeof ReadableStream !== "undefined" ? ReadableStream : class ReadableStream1 {
            // @ts-ignore
            constructor(){
                throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${recommendation}`);
            }
        },
        getMultipartRequestOptions: async (// @ts-ignore
        form, opts)=>({
                ...opts,
                body: new $92Jaz.MultipartBody(form)
            }),
        getDefaultAgent: (url)=>undefined,
        fileFromPath: ()=>{
            throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads");
        },
        isFsReadStream: (value)=>false
    };
}
module.exports.getRuntime = $187d84159487c034$var$getRuntime;

});
parcelRequire.register("92Jaz", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.MultipartBody = void 0;
/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */ class $695756b35abd6a39$var$MultipartBody {
    constructor(body){
        this.body = body;
    }
    get [Symbol.toStringTag]() {
        return "MultipartBody";
    }
}
module.exports.MultipartBody = $695756b35abd6a39$var$MultipartBody;

});




parcelRequire.register("2CkQ4", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.InternalServerError = module.exports.RateLimitError = module.exports.UnprocessableEntityError = module.exports.ConflictError = module.exports.NotFoundError = module.exports.PermissionDeniedError = module.exports.AuthenticationError = module.exports.BadRequestError = module.exports.APIConnectionTimeoutError = module.exports.APIConnectionError = module.exports.APIUserAbortError = module.exports.APIError = module.exports.OpenAIError = void 0;

var $8peXx = parcelRequire("8peXx");
class $1e7f4b85e6fcc9ab$var$OpenAIError extends Error {
}
module.exports.OpenAIError = $1e7f4b85e6fcc9ab$var$OpenAIError;
class $1e7f4b85e6fcc9ab$var$APIError extends $1e7f4b85e6fcc9ab$var$OpenAIError {
    constructor(status, error, message, headers){
        super(`${$1e7f4b85e6fcc9ab$var$APIError.makeMessage(status, error, message)}`);
        this.status = status;
        this.headers = headers;
        this.request_id = headers?.["x-request-id"];
        const data = error;
        this.error = data;
        this.code = data?.["code"];
        this.param = data?.["param"];
        this.type = data?.["type"];
    }
    static makeMessage(status, error, message) {
        const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
        if (status && msg) return `${status} ${msg}`;
        if (status) return `${status} status code (no body)`;
        if (msg) return msg;
        return "(no status code or body)";
    }
    static generate(status, errorResponse, message, headers) {
        if (!status) return new $1e7f4b85e6fcc9ab$var$APIConnectionError({
            cause: (0, $8peXx.castToError)(errorResponse)
        });
        const error = errorResponse?.["error"];
        if (status === 400) return new $1e7f4b85e6fcc9ab$var$BadRequestError(status, error, message, headers);
        if (status === 401) return new $1e7f4b85e6fcc9ab$var$AuthenticationError(status, error, message, headers);
        if (status === 403) return new $1e7f4b85e6fcc9ab$var$PermissionDeniedError(status, error, message, headers);
        if (status === 404) return new $1e7f4b85e6fcc9ab$var$NotFoundError(status, error, message, headers);
        if (status === 409) return new $1e7f4b85e6fcc9ab$var$ConflictError(status, error, message, headers);
        if (status === 422) return new $1e7f4b85e6fcc9ab$var$UnprocessableEntityError(status, error, message, headers);
        if (status === 429) return new $1e7f4b85e6fcc9ab$var$RateLimitError(status, error, message, headers);
        if (status >= 500) return new $1e7f4b85e6fcc9ab$var$InternalServerError(status, error, message, headers);
        return new $1e7f4b85e6fcc9ab$var$APIError(status, error, message, headers);
    }
}
module.exports.APIError = $1e7f4b85e6fcc9ab$var$APIError;
class $1e7f4b85e6fcc9ab$var$APIUserAbortError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor({ message: message } = {}){
        super(undefined, undefined, message || "Request was aborted.", undefined);
        this.status = undefined;
    }
}
module.exports.APIUserAbortError = $1e7f4b85e6fcc9ab$var$APIUserAbortError;
class $1e7f4b85e6fcc9ab$var$APIConnectionError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor({ message: message, cause: cause }){
        super(undefined, undefined, message || "Connection error.", undefined);
        this.status = undefined;
        // in some environments the 'cause' property is already declared
        // @ts-ignore
        if (cause) this.cause = cause;
    }
}
module.exports.APIConnectionError = $1e7f4b85e6fcc9ab$var$APIConnectionError;
class $1e7f4b85e6fcc9ab$var$APIConnectionTimeoutError extends $1e7f4b85e6fcc9ab$var$APIConnectionError {
    constructor({ message: message } = {}){
        super({
            message: message ?? "Request timed out."
        });
    }
}
module.exports.APIConnectionTimeoutError = $1e7f4b85e6fcc9ab$var$APIConnectionTimeoutError;
class $1e7f4b85e6fcc9ab$var$BadRequestError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 400;
    }
}
module.exports.BadRequestError = $1e7f4b85e6fcc9ab$var$BadRequestError;
class $1e7f4b85e6fcc9ab$var$AuthenticationError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 401;
    }
}
module.exports.AuthenticationError = $1e7f4b85e6fcc9ab$var$AuthenticationError;
class $1e7f4b85e6fcc9ab$var$PermissionDeniedError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 403;
    }
}
module.exports.PermissionDeniedError = $1e7f4b85e6fcc9ab$var$PermissionDeniedError;
class $1e7f4b85e6fcc9ab$var$NotFoundError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 404;
    }
}
module.exports.NotFoundError = $1e7f4b85e6fcc9ab$var$NotFoundError;
class $1e7f4b85e6fcc9ab$var$ConflictError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 409;
    }
}
module.exports.ConflictError = $1e7f4b85e6fcc9ab$var$ConflictError;
class $1e7f4b85e6fcc9ab$var$UnprocessableEntityError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 422;
    }
}
module.exports.UnprocessableEntityError = $1e7f4b85e6fcc9ab$var$UnprocessableEntityError;
class $1e7f4b85e6fcc9ab$var$RateLimitError extends $1e7f4b85e6fcc9ab$var$APIError {
    constructor(){
        super(...arguments);
        this.status = 429;
    }
}
module.exports.RateLimitError = $1e7f4b85e6fcc9ab$var$RateLimitError;
class $1e7f4b85e6fcc9ab$var$InternalServerError extends $1e7f4b85e6fcc9ab$var$APIError {
}
module.exports.InternalServerError = $1e7f4b85e6fcc9ab$var$InternalServerError;

});


parcelRequire.register("2N2K2", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createForm = module.exports.multipartFormRequestOptions = module.exports.maybeMultipartFormRequestOptions = module.exports.isMultipartBody = module.exports.toFile = module.exports.isUploadable = module.exports.isBlobLike = module.exports.isFileLike = module.exports.isResponseLike = module.exports.fileFromPath = void 0;

var $jhyJY = parcelRequire("jhyJY");

var $jhyJY = parcelRequire("jhyJY");
Object.defineProperty(module.exports, "fileFromPath", {
    enumerable: true,
    get: function() {
        return $jhyJY.fileFromPath;
    }
});
const $208248ce9df61019$var$isResponseLike = (value)=>value != null && typeof value === "object" && typeof value.url === "string" && typeof value.blob === "function";
module.exports.isResponseLike = $208248ce9df61019$var$isResponseLike;
const $208248ce9df61019$var$isFileLike = (value)=>value != null && typeof value === "object" && typeof value.name === "string" && typeof value.lastModified === "number" && (0, module.exports.isBlobLike)(value);
module.exports.isFileLike = $208248ce9df61019$var$isFileLike;
/**
 * The BlobLike type omits arrayBuffer() because @types/node-fetch@^2.6.4 lacks it; but this check
 * adds the arrayBuffer() method type because it is available and used at runtime
 */ const $208248ce9df61019$var$isBlobLike = (value)=>value != null && typeof value === "object" && typeof value.size === "number" && typeof value.type === "string" && typeof value.text === "function" && typeof value.slice === "function" && typeof value.arrayBuffer === "function";
module.exports.isBlobLike = $208248ce9df61019$var$isBlobLike;
const $208248ce9df61019$var$isUploadable = (value)=>{
    return (0, module.exports.isFileLike)(value) || (0, module.exports.isResponseLike)(value) || (0, $jhyJY.isFsReadStream)(value);
};
module.exports.isUploadable = $208248ce9df61019$var$isUploadable;
/**
 * Helper for creating a {@link File} to pass to an SDK upload method from a variety of different data formats
 * @param value the raw content of the file.  Can be an {@link Uploadable}, {@link BlobLikePart}, or {@link AsyncIterable} of {@link BlobLikePart}s
 * @param {string=} name the name of the file. If omitted, toFile will try to determine a file name from bits if possible
 * @param {Object=} options additional properties
 * @param {string=} options.type the MIME type of the content
 * @param {number=} options.lastModified the last modified timestamp
 * @returns a {@link File} with the given properties
 */ async function $208248ce9df61019$var$toFile(value, name, options) {
    // If it's a promise, resolve it.
    value = await value;
    // Use the file's options if there isn't one provided
    options ?? (options = (0, module.exports.isFileLike)(value) ? {
        lastModified: value.lastModified,
        type: value.type
    } : {});
    if ((0, module.exports.isResponseLike)(value)) {
        const blob = await value.blob();
        name || (name = new URL(value.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
        return new $jhyJY.File([
            blob
        ], name, options);
    }
    const bits = await $208248ce9df61019$var$getBytes(value);
    name || (name = $208248ce9df61019$var$getName(value) ?? "unknown_file");
    if (!options.type) {
        const type = bits[0]?.type;
        if (typeof type === "string") options = {
            ...options,
            type: type
        };
    }
    return new $jhyJY.File(bits, name, options);
}
module.exports.toFile = $208248ce9df61019$var$toFile;
async function $208248ce9df61019$var$getBytes(value) {
    let parts = [];
    if (typeof value === "string" || ArrayBuffer.isView(value) || // includes Uint8Array, Buffer, etc.
    value instanceof ArrayBuffer) parts.push(value);
    else if ((0, module.exports.isBlobLike)(value)) parts.push(await value.arrayBuffer());
    else if ($208248ce9df61019$var$isAsyncIterableIterator(value) // includes Readable, ReadableStream, etc.
    ) for await (const chunk of value)parts.push(chunk); // TODO, consider validating?
    else throw new Error(`Unexpected data type: ${typeof value}; constructor: ${value?.constructor?.name}; props: ${$208248ce9df61019$var$propsForError(value)}`);
    return parts;
}
function $208248ce9df61019$var$propsForError(value) {
    const props = Object.getOwnPropertyNames(value);
    return `[${props.map((p)=>`"${p}"`).join(", ")}]`;
}
function $208248ce9df61019$var$getName(value) {
    return $208248ce9df61019$var$getStringFromMaybeBuffer(value.name) || $208248ce9df61019$var$getStringFromMaybeBuffer(value.filename) || // For fs.ReadStream
    $208248ce9df61019$var$getStringFromMaybeBuffer(value.path)?.split(/[\\/]/).pop();
}
const $208248ce9df61019$var$getStringFromMaybeBuffer = (x)=>{
    if (typeof x === "string") return x;
    if (typeof Buffer !== "undefined" && x instanceof Buffer) return String(x);
    return undefined;
};
const $208248ce9df61019$var$isAsyncIterableIterator = (value)=>value != null && typeof value === "object" && typeof value[Symbol.asyncIterator] === "function";
const $208248ce9df61019$var$isMultipartBody = (body)=>body && typeof body === "object" && body.body && body[Symbol.toStringTag] === "MultipartBody";
module.exports.isMultipartBody = $208248ce9df61019$var$isMultipartBody;
/**
 * Returns a multipart/form-data request if any part of the given request body contains a File / Blob value.
 * Otherwise returns the request as is.
 */ const $208248ce9df61019$var$maybeMultipartFormRequestOptions = async (opts)=>{
    if (!$208248ce9df61019$var$hasUploadableValue(opts.body)) return opts;
    const form = await (0, module.exports.createForm)(opts.body);
    return (0, $jhyJY.getMultipartRequestOptions)(form, opts);
};
module.exports.maybeMultipartFormRequestOptions = $208248ce9df61019$var$maybeMultipartFormRequestOptions;
const $208248ce9df61019$var$multipartFormRequestOptions = async (opts)=>{
    const form = await (0, module.exports.createForm)(opts.body);
    return (0, $jhyJY.getMultipartRequestOptions)(form, opts);
};
module.exports.multipartFormRequestOptions = $208248ce9df61019$var$multipartFormRequestOptions;
const $208248ce9df61019$var$createForm = async (body)=>{
    const form = new $jhyJY.FormData();
    await Promise.all(Object.entries(body || {}).map(([key, value])=>$208248ce9df61019$var$addFormValue(form, key, value)));
    return form;
};
module.exports.createForm = $208248ce9df61019$var$createForm;
const $208248ce9df61019$var$hasUploadableValue = (value)=>{
    if ((0, module.exports.isUploadable)(value)) return true;
    if (Array.isArray(value)) return value.some($208248ce9df61019$var$hasUploadableValue);
    if (value && typeof value === "object") for(const k in value){
        if ($208248ce9df61019$var$hasUploadableValue(value[k])) return true;
    }
    return false;
};
const $208248ce9df61019$var$addFormValue = async (form, key, value)=>{
    if (value === undefined) return;
    if (value == null) throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
    // TODO: make nested formats configurable
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") form.append(key, String(value));
    else if ((0, module.exports.isUploadable)(value)) {
        const file = await $208248ce9df61019$var$toFile(value);
        form.append(key, file);
    } else if (Array.isArray(value)) await Promise.all(value.map((entry)=>$208248ce9df61019$var$addFormValue(form, key + "[]", entry)));
    else if (typeof value === "object") await Promise.all(Object.entries(value).map(([name, prop])=>$208248ce9df61019$var$addFormValue(form, `${key}[${name}]`, prop)));
    else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
};

});


parcelRequire.register("77nbt", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CursorPage = module.exports.Page = void 0;

var $8peXx = parcelRequire("8peXx");
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */ class $52eb2bb54299fda6$var$Page extends $8peXx.AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
        this.object = body.object;
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    // @deprecated Please use `nextPageInfo()` instead
    /**
     * This page represents a response that isn't actually paginated at the API level
     * so there will never be any next page params.
     */ nextPageParams() {
        return null;
    }
    nextPageInfo() {
        return null;
    }
}
module.exports.Page = $52eb2bb54299fda6$var$Page;
class $52eb2bb54299fda6$var$CursorPage extends $8peXx.AbstractPage {
    constructor(client, response, body, options){
        super(client, response, body, options);
        this.data = body.data || [];
    }
    getPaginatedItems() {
        return this.data ?? [];
    }
    // @deprecated Please use `nextPageInfo()` instead
    nextPageParams() {
        const info = this.nextPageInfo();
        if (!info) return null;
        if ("params" in info) return info.params;
        const params = Object.fromEntries(info.url.searchParams);
        if (!Object.keys(params).length) return null;
        return params;
    }
    nextPageInfo() {
        const data = this.getPaginatedItems();
        if (!data.length) return null;
        const id = data[data.length - 1]?.id;
        if (!id) return null;
        return {
            params: {
                after: id
            }
        };
    }
}
module.exports.CursorPage = $52eb2bb54299fda6$var$CursorPage;

});

parcelRequire.register("3DTo5", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $2a6ffa65c6f32887$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $2a6ffa65c6f32887$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $2a6ffa65c6f32887$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Moderations = module.exports.Models = module.exports.ModelsPage = module.exports.Images = module.exports.FineTuning = module.exports.Files = module.exports.FileObjectsPage = module.exports.Embeddings = module.exports.Completions = module.exports.Beta = module.exports.Batches = module.exports.BatchesPage = module.exports.Audio = void 0;

$2a6ffa65c6f32887$var$__exportStar((parcelRequire("emeNF")), module.exports);

$2a6ffa65c6f32887$var$__exportStar((parcelRequire("i3URX")), module.exports);

var $799jr = parcelRequire("799jr");
Object.defineProperty(module.exports, "Audio", {
    enumerable: true,
    get: function() {
        return $799jr.Audio;
    }
});

var $jZ8pz = parcelRequire("jZ8pz");
Object.defineProperty(module.exports, "BatchesPage", {
    enumerable: true,
    get: function() {
        return $jZ8pz.BatchesPage;
    }
});
Object.defineProperty(module.exports, "Batches", {
    enumerable: true,
    get: function() {
        return $jZ8pz.Batches;
    }
});

var $kat0p = parcelRequire("kat0p");
Object.defineProperty(module.exports, "Beta", {
    enumerable: true,
    get: function() {
        return $kat0p.Beta;
    }
});

var $3y613 = parcelRequire("3y613");
Object.defineProperty(module.exports, "Completions", {
    enumerable: true,
    get: function() {
        return $3y613.Completions;
    }
});

var $4biaG = parcelRequire("4biaG");
Object.defineProperty(module.exports, "Embeddings", {
    enumerable: true,
    get: function() {
        return $4biaG.Embeddings;
    }
});

var $dq3zV = parcelRequire("dq3zV");
Object.defineProperty(module.exports, "FileObjectsPage", {
    enumerable: true,
    get: function() {
        return $dq3zV.FileObjectsPage;
    }
});
Object.defineProperty(module.exports, "Files", {
    enumerable: true,
    get: function() {
        return $dq3zV.Files;
    }
});

var $84FLp = parcelRequire("84FLp");
Object.defineProperty(module.exports, "FineTuning", {
    enumerable: true,
    get: function() {
        return $84FLp.FineTuning;
    }
});

var $lklpD = parcelRequire("lklpD");
Object.defineProperty(module.exports, "Images", {
    enumerable: true,
    get: function() {
        return $lklpD.Images;
    }
});

var $cwYZ0 = parcelRequire("cwYZ0");
Object.defineProperty(module.exports, "ModelsPage", {
    enumerable: true,
    get: function() {
        return $cwYZ0.ModelsPage;
    }
});
Object.defineProperty(module.exports, "Models", {
    enumerable: true,
    get: function() {
        return $cwYZ0.Models;
    }
});

var $iaper = parcelRequire("iaper");
Object.defineProperty(module.exports, "Moderations", {
    enumerable: true,
    get: function() {
        return $iaper.Moderations;
    }
});

});
parcelRequire.register("emeNF", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Chat = module.exports.Completions = void 0;

var $lUEyz = parcelRequire("lUEyz");
Object.defineProperty(module.exports, "Completions", {
    enumerable: true,
    get: function() {
        return $lUEyz.Completions;
    }
});

var $3qL8d = parcelRequire("3qL8d");
Object.defineProperty(module.exports, "Chat", {
    enumerable: true,
    get: function() {
        return $3qL8d.Chat;
    }
});

});
parcelRequire.register("lUEyz", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Completions = void 0;

var $67bwB = parcelRequire("67bwB");
class $ff3e49a22526acc6$var$Completions extends $67bwB.APIResource {
    create(body, options) {
        return this._client.post("/chat/completions", {
            body: body,
            ...options,
            stream: body.stream ?? false
        });
    }
}
module.exports.Completions = $ff3e49a22526acc6$var$Completions;
$ff3e49a22526acc6$var$Completions = module.exports.Completions || (module.exports.Completions = {});

});
parcelRequire.register("67bwB", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.APIResource = void 0;
class $473c561bd31ff80d$var$APIResource {
    constructor(client){
        this._client = client;
    }
}
module.exports.APIResource = $473c561bd31ff80d$var$APIResource;

});


parcelRequire.register("3qL8d", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $27f85c2724987b33$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $27f85c2724987b33$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $27f85c2724987b33$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $27f85c2724987b33$var$__createBinding(result, mod, k);
    }
    $27f85c2724987b33$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Chat = void 0;

var $67bwB = parcelRequire("67bwB");

const $27f85c2724987b33$var$CompletionsAPI = $27f85c2724987b33$var$__importStar((parcelRequire("lUEyz")));
class $27f85c2724987b33$var$Chat extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.completions = new $27f85c2724987b33$var$CompletionsAPI.Completions(this._client);
    }
}
module.exports.Chat = $27f85c2724987b33$var$Chat;
(function(Chat) {
    Chat.Completions = $27f85c2724987b33$var$CompletionsAPI.Completions;
})($27f85c2724987b33$var$Chat = module.exports.Chat || (module.exports.Chat = {}));

});


parcelRequire.register("i3URX", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

});

parcelRequire.register("799jr", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $534098f0cececa44$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $534098f0cececa44$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $534098f0cececa44$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $534098f0cececa44$var$__createBinding(result, mod, k);
    }
    $534098f0cececa44$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Audio = void 0;

var $67bwB = parcelRequire("67bwB");

const $534098f0cececa44$var$SpeechAPI = $534098f0cececa44$var$__importStar((parcelRequire("4ECuu")));

const $534098f0cececa44$var$TranscriptionsAPI = $534098f0cececa44$var$__importStar((parcelRequire("jw7DM")));

const $534098f0cececa44$var$TranslationsAPI = $534098f0cececa44$var$__importStar((parcelRequire("4nKjv")));
class $534098f0cececa44$var$Audio extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.transcriptions = new $534098f0cececa44$var$TranscriptionsAPI.Transcriptions(this._client);
        this.translations = new $534098f0cececa44$var$TranslationsAPI.Translations(this._client);
        this.speech = new $534098f0cececa44$var$SpeechAPI.Speech(this._client);
    }
}
module.exports.Audio = $534098f0cececa44$var$Audio;
(function(Audio) {
    Audio.Transcriptions = $534098f0cececa44$var$TranscriptionsAPI.Transcriptions;
    Audio.Translations = $534098f0cececa44$var$TranslationsAPI.Translations;
    Audio.Speech = $534098f0cececa44$var$SpeechAPI.Speech;
})($534098f0cececa44$var$Audio = module.exports.Audio || (module.exports.Audio = {}));

});
parcelRequire.register("4ECuu", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Speech = void 0;

var $67bwB = parcelRequire("67bwB");
class $3638c14f9553fc0e$var$Speech extends $67bwB.APIResource {
    /**
     * Generates audio from the input text.
     */ create(body, options) {
        return this._client.post("/audio/speech", {
            body: body,
            ...options,
            __binaryResponse: true
        });
    }
}
module.exports.Speech = $3638c14f9553fc0e$var$Speech;
$3638c14f9553fc0e$var$Speech = module.exports.Speech || (module.exports.Speech = {});

});

parcelRequire.register("jw7DM", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Transcriptions = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");
class $e356eec50b643756$var$Transcriptions extends $67bwB.APIResource {
    /**
     * Transcribes audio into the input language.
     */ create(body, options) {
        return this._client.post("/audio/transcriptions", (0, $8peXx.multipartFormRequestOptions)({
            body: body,
            ...options
        }));
    }
}
module.exports.Transcriptions = $e356eec50b643756$var$Transcriptions;
$e356eec50b643756$var$Transcriptions = module.exports.Transcriptions || (module.exports.Transcriptions = {});

});

parcelRequire.register("4nKjv", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Translations = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");
class $330d3c4fb3e29ab9$var$Translations extends $67bwB.APIResource {
    /**
     * Translates audio into English.
     */ create(body, options) {
        return this._client.post("/audio/translations", (0, $8peXx.multipartFormRequestOptions)({
            body: body,
            ...options
        }));
    }
}
module.exports.Translations = $330d3c4fb3e29ab9$var$Translations;
$330d3c4fb3e29ab9$var$Translations = module.exports.Translations || (module.exports.Translations = {});

});


parcelRequire.register("jZ8pz", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $e8ca3d25632cbeff$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $e8ca3d25632cbeff$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e8ca3d25632cbeff$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e8ca3d25632cbeff$var$__createBinding(result, mod, k);
    }
    $e8ca3d25632cbeff$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.BatchesPage = module.exports.Batches = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $e8ca3d25632cbeff$var$BatchesAPI = $e8ca3d25632cbeff$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $e8ca3d25632cbeff$var$Batches extends $67bwB.APIResource {
    /**
     * Creates and executes a batch from an uploaded file of requests
     */ create(body, options) {
        return this._client.post("/batches", {
            body: body,
            ...options
        });
    }
    /**
     * Retrieves a batch.
     */ retrieve(batchId, options) {
        return this._client.get(`/batches/${batchId}`, options);
    }
    list(query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list({}, query);
        return this._client.getAPIList("/batches", $e8ca3d25632cbeff$var$BatchesPage, {
            query: query,
            ...options
        });
    }
    /**
     * Cancels an in-progress batch.
     */ cancel(batchId, options) {
        return this._client.post(`/batches/${batchId}/cancel`, options);
    }
}
module.exports.Batches = $e8ca3d25632cbeff$var$Batches;
class $e8ca3d25632cbeff$var$BatchesPage extends $77nbt.CursorPage {
}
module.exports.BatchesPage = $e8ca3d25632cbeff$var$BatchesPage;
(function(Batches) {
    Batches.BatchesPage = $e8ca3d25632cbeff$var$BatchesAPI.BatchesPage;
})($e8ca3d25632cbeff$var$Batches = module.exports.Batches || (module.exports.Batches = {}));

});

parcelRequire.register("kat0p", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $eaeb3dbde2006204$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $eaeb3dbde2006204$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $eaeb3dbde2006204$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $eaeb3dbde2006204$var$__createBinding(result, mod, k);
    }
    $eaeb3dbde2006204$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Beta = void 0;

var $67bwB = parcelRequire("67bwB");

const $eaeb3dbde2006204$var$AssistantsAPI = $eaeb3dbde2006204$var$__importStar((parcelRequire("bfcPm")));

const $eaeb3dbde2006204$var$ChatAPI = $eaeb3dbde2006204$var$__importStar((parcelRequire("8VSWv")));

const $eaeb3dbde2006204$var$ThreadsAPI = $eaeb3dbde2006204$var$__importStar((parcelRequire("jJmxr")));

const $eaeb3dbde2006204$var$VectorStoresAPI = $eaeb3dbde2006204$var$__importStar((parcelRequire("hfLee")));
class $eaeb3dbde2006204$var$Beta extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.vectorStores = new $eaeb3dbde2006204$var$VectorStoresAPI.VectorStores(this._client);
        this.chat = new $eaeb3dbde2006204$var$ChatAPI.Chat(this._client);
        this.assistants = new $eaeb3dbde2006204$var$AssistantsAPI.Assistants(this._client);
        this.threads = new $eaeb3dbde2006204$var$ThreadsAPI.Threads(this._client);
    }
}
module.exports.Beta = $eaeb3dbde2006204$var$Beta;
(function(Beta) {
    Beta.VectorStores = $eaeb3dbde2006204$var$VectorStoresAPI.VectorStores;
    Beta.VectorStoresPage = $eaeb3dbde2006204$var$VectorStoresAPI.VectorStoresPage;
    Beta.Chat = $eaeb3dbde2006204$var$ChatAPI.Chat;
    Beta.Assistants = $eaeb3dbde2006204$var$AssistantsAPI.Assistants;
    Beta.AssistantsPage = $eaeb3dbde2006204$var$AssistantsAPI.AssistantsPage;
    Beta.Threads = $eaeb3dbde2006204$var$ThreadsAPI.Threads;
})($eaeb3dbde2006204$var$Beta = module.exports.Beta || (module.exports.Beta = {}));

});
parcelRequire.register("bfcPm", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $82fb0bac75581940$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $82fb0bac75581940$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $82fb0bac75581940$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $82fb0bac75581940$var$__createBinding(result, mod, k);
    }
    $82fb0bac75581940$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AssistantsPage = module.exports.Assistants = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $82fb0bac75581940$var$AssistantsAPI = $82fb0bac75581940$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $82fb0bac75581940$var$Assistants extends $67bwB.APIResource {
    /**
     * Create an assistant with a model and instructions.
     */ create(body, options) {
        return this._client.post("/assistants", {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieves an assistant.
     */ retrieve(assistantId, options) {
        return this._client.get(`/assistants/${assistantId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Modifies an assistant.
     */ update(assistantId, body, options) {
        return this._client.post(`/assistants/${assistantId}`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list({}, query);
        return this._client.getAPIList("/assistants", $82fb0bac75581940$var$AssistantsPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Delete an assistant.
     */ del(assistantId, options) {
        return this._client.delete(`/assistants/${assistantId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
}
module.exports.Assistants = $82fb0bac75581940$var$Assistants;
class $82fb0bac75581940$var$AssistantsPage extends $77nbt.CursorPage {
}
module.exports.AssistantsPage = $82fb0bac75581940$var$AssistantsPage;
(function(Assistants) {
    Assistants.AssistantsPage = $82fb0bac75581940$var$AssistantsAPI.AssistantsPage;
})($82fb0bac75581940$var$Assistants = module.exports.Assistants || (module.exports.Assistants = {}));

});

parcelRequire.register("8VSWv", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $680e440e6fa4fc14$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $680e440e6fa4fc14$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $680e440e6fa4fc14$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $680e440e6fa4fc14$var$__createBinding(result, mod, k);
    }
    $680e440e6fa4fc14$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Chat = void 0;

var $67bwB = parcelRequire("67bwB");

const $680e440e6fa4fc14$var$CompletionsAPI = $680e440e6fa4fc14$var$__importStar((parcelRequire("4p0by")));
class $680e440e6fa4fc14$var$Chat extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.completions = new $680e440e6fa4fc14$var$CompletionsAPI.Completions(this._client);
    }
}
module.exports.Chat = $680e440e6fa4fc14$var$Chat;
(function(Chat) {
    Chat.Completions = $680e440e6fa4fc14$var$CompletionsAPI.Completions;
})($680e440e6fa4fc14$var$Chat = module.exports.Chat || (module.exports.Chat = {}));

});
parcelRequire.register("4p0by", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Completions = module.exports.ChatCompletionStream = module.exports.ParsingToolFunction = module.exports.ParsingFunction = module.exports.ChatCompletionStreamingRunner = module.exports.ChatCompletionRunner = void 0;

var $67bwB = parcelRequire("67bwB");

var $eelG6 = parcelRequire("eelG6");

var $eelG6 = parcelRequire("eelG6");
Object.defineProperty(module.exports, "ChatCompletionRunner", {
    enumerable: true,
    get: function() {
        return $eelG6.ChatCompletionRunner;
    }
});

var $dB8rE = parcelRequire("dB8rE");

var $dB8rE = parcelRequire("dB8rE");
Object.defineProperty(module.exports, "ChatCompletionStreamingRunner", {
    enumerable: true,
    get: function() {
        return $dB8rE.ChatCompletionStreamingRunner;
    }
});

var $4hrh8 = parcelRequire("4hrh8");
Object.defineProperty(module.exports, "ParsingFunction", {
    enumerable: true,
    get: function() {
        return $4hrh8.ParsingFunction;
    }
});
Object.defineProperty(module.exports, "ParsingToolFunction", {
    enumerable: true,
    get: function() {
        return $4hrh8.ParsingToolFunction;
    }
});

var $4ByJ4 = parcelRequire("4ByJ4");

var $4ByJ4 = parcelRequire("4ByJ4");
Object.defineProperty(module.exports, "ChatCompletionStream", {
    enumerable: true,
    get: function() {
        return $4ByJ4.ChatCompletionStream;
    }
});
class $3349a40ce16a6672$var$Completions extends $67bwB.APIResource {
    runFunctions(body, options) {
        if (body.stream) return $dB8rE.ChatCompletionStreamingRunner.runFunctions(this._client.chat.completions, body, options);
        return $eelG6.ChatCompletionRunner.runFunctions(this._client.chat.completions, body, options);
    }
    runTools(body, options) {
        if (body.stream) return $dB8rE.ChatCompletionStreamingRunner.runTools(this._client.chat.completions, body, options);
        return $eelG6.ChatCompletionRunner.runTools(this._client.chat.completions, body, options);
    }
    /**
     * Creates a chat completion stream
     */ stream(body, options) {
        return $4ByJ4.ChatCompletionStream.createChatCompletion(this._client.chat.completions, body, options);
    }
}
module.exports.Completions = $3349a40ce16a6672$var$Completions;

});
parcelRequire.register("eelG6", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ChatCompletionRunner = void 0;

var $bn9G7 = parcelRequire("bn9G7");

var $6UcuG = parcelRequire("6UcuG");
class $a5c3304aaeee8cbf$var$ChatCompletionRunner extends $bn9G7.AbstractChatCompletionRunner {
    /** @deprecated - please use `runTools` instead. */ static runFunctions(completions, params, options) {
        const runner = new $a5c3304aaeee8cbf$var$ChatCompletionRunner();
        const opts = {
            ...options,
            headers: {
                ...options?.headers,
                "X-Stainless-Helper-Method": "runFunctions"
            }
        };
        runner._run(()=>runner._runFunctions(completions, params, opts));
        return runner;
    }
    static runTools(completions, params, options) {
        const runner = new $a5c3304aaeee8cbf$var$ChatCompletionRunner();
        const opts = {
            ...options,
            headers: {
                ...options?.headers,
                "X-Stainless-Helper-Method": "runTools"
            }
        };
        runner._run(()=>runner._runTools(completions, params, opts));
        return runner;
    }
    _addMessage(message) {
        super._addMessage(message);
        if ((0, $6UcuG.isAssistantMessage)(message) && message.content) this._emit("content", message.content);
    }
}
module.exports.ChatCompletionRunner = $a5c3304aaeee8cbf$var$ChatCompletionRunner;

});
parcelRequire.register("bn9G7", function(module, exports) {
"use strict";
var $8479599de4eefa35$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $8479599de4eefa35$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, $8479599de4eefa35$var$_AbstractChatCompletionRunner_connectedPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveConnectedPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveEndPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended, $8479599de4eefa35$var$_AbstractChatCompletionRunner_errored, $8479599de4eefa35$var$_AbstractChatCompletionRunner_aborted, $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalContent, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalMessage, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCall, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCallResult, $8479599de4eefa35$var$_AbstractChatCompletionRunner_calculateTotalUsage, $8479599de4eefa35$var$_AbstractChatCompletionRunner_handleError, $8479599de4eefa35$var$_AbstractChatCompletionRunner_validateParams, $8479599de4eefa35$var$_AbstractChatCompletionRunner_stringifyFunctionCallResult;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AbstractChatCompletionRunner = void 0;

var $2CkQ4 = parcelRequire("2CkQ4");

var $4hrh8 = parcelRequire("4hrh8");

var $6UcuG = parcelRequire("6UcuG");
const $8479599de4eefa35$var$DEFAULT_MAX_CHAT_COMPLETIONS = 10;
class $8479599de4eefa35$var$AbstractChatCompletionRunner {
    constructor(){
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances.add(this);
        this.controller = new AbortController();
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_connectedPromise.set(this, void 0);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveConnectedPromise.set(this, ()=>{});
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise.set(this, ()=>{});
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise.set(this, void 0);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveEndPromise.set(this, ()=>{});
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise.set(this, ()=>{});
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners.set(this, {});
        this._chatCompletions = [];
        this.messages = [];
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended.set(this, false);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_errored.set(this, false);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_aborted.set(this, false);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated.set(this, false);
        $8479599de4eefa35$var$_AbstractChatCompletionRunner_handleError.set(this, (error)=>{
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_errored, true, "f");
            if (error instanceof Error && error.name === "AbortError") error = new $2CkQ4.APIUserAbortError();
            if (error instanceof $2CkQ4.APIUserAbortError) {
                $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_aborted, true, "f");
                return this._emit("abort", error);
            }
            if (error instanceof $2CkQ4.OpenAIError) return this._emit("error", error);
            if (error instanceof Error) {
                const openAIError = new $2CkQ4.OpenAIError(error.message);
                // @ts-ignore
                openAIError.cause = error;
                return this._emit("error", openAIError);
            }
            return this._emit("error", new $2CkQ4.OpenAIError(String(error)));
        });
        $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_connectedPromise, new Promise((resolve, reject)=>{
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveConnectedPromise, resolve, "f");
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise, reject, "f");
        }), "f");
        $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise, new Promise((resolve, reject)=>{
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveEndPromise, resolve, "f");
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise, reject, "f");
        }), "f");
        // Don't let these promises cause unhandled rejection errors.
        // we will manually cause an unhandled rejection error later
        // if the user hasn't registered any error listener or called
        // any promise-returning method.
        $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_connectedPromise, "f").catch(()=>{});
        $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise, "f").catch(()=>{});
    }
    _run(executor) {
        // Unfortunately if we call `executor()` immediately we get runtime errors about
        // references to `this` before the `super()` constructor call returns.
        setTimeout(()=>{
            executor().then(()=>{
                this._emitFinal();
                this._emit("end");
            }, $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_handleError, "f"));
        }, 0);
    }
    _addChatCompletion(chatCompletion) {
        this._chatCompletions.push(chatCompletion);
        this._emit("chatCompletion", chatCompletion);
        const message = chatCompletion.choices[0]?.message;
        if (message) this._addMessage(message);
        return chatCompletion;
    }
    _addMessage(message, emit = true) {
        if (!("content" in message)) message.content = null;
        this.messages.push(message);
        if (emit) {
            this._emit("message", message);
            if (((0, $6UcuG.isFunctionMessage)(message) || (0, $6UcuG.isToolMessage)(message)) && message.content) // Note, this assumes that {role: 'tool', content: …} is always the result of a call of tool of type=function.
            this._emit("functionCallResult", message.content);
            else if ((0, $6UcuG.isAssistantMessage)(message) && message.function_call) this._emit("functionCall", message.function_call);
            else if ((0, $6UcuG.isAssistantMessage)(message) && message.tool_calls) {
                for (const tool_call of message.tool_calls)if (tool_call.type === "function") this._emit("functionCall", tool_call.function);
            }
        }
    }
    _connected() {
        if (this.ended) return;
        $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveConnectedPromise, "f").call(this);
        this._emit("connect");
    }
    get ended() {
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended, "f");
    }
    get errored() {
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_errored, "f");
    }
    get aborted() {
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_aborted, "f");
    }
    abort() {
        this.controller.abort();
    }
    /**
     * Adds the listener function to the end of the listeners array for the event.
     * No checks are made to see if the listener has already been added. Multiple calls passing
     * the same combination of event and listener will result in the listener being added, and
     * called, multiple times.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ on(event, listener) {
        const listeners = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event] || ($8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event] = []);
        listeners.push({
            listener: listener
        });
        return this;
    }
    /**
     * Removes the specified listener from the listener array for the event.
     * off() will remove, at most, one instance of a listener from the listener array. If any single
     * listener has been added multiple times to the listener array for the specified event, then
     * off() must be called multiple times to remove each instance.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ off(event, listener) {
        const listeners = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event];
        if (!listeners) return this;
        const index = listeners.findIndex((l)=>l.listener === listener);
        if (index >= 0) listeners.splice(index, 1);
        return this;
    }
    /**
     * Adds a one-time listener function for the event. The next time the event is triggered,
     * this listener is removed and then invoked.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ once(event, listener) {
        const listeners = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event] || ($8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event] = []);
        listeners.push({
            listener: listener,
            once: true
        });
        return this;
    }
    /**
     * This is similar to `.once()`, but returns a Promise that resolves the next time
     * the event is triggered, instead of calling a listener callback.
     * @returns a Promise that resolves the next time given event is triggered,
     * or rejects if an error is emitted.  (If you request the 'error' event,
     * returns a promise that resolves with the error).
     *
     * Example:
     *
     *   const message = await stream.emitted('message') // rejects if the stream errors
     */ emitted(event) {
        return new Promise((resolve, reject)=>{
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated, true, "f");
            if (event !== "error") this.once("error", reject);
            this.once(event, resolve);
        });
    }
    async done() {
        $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated, true, "f");
        await $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise, "f");
    }
    /**
     * @returns a promise that resolves with the final ChatCompletion, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletion.
     */ async finalChatCompletion() {
        await this.done();
        const completion = this._chatCompletions[this._chatCompletions.length - 1];
        if (!completion) throw new $2CkQ4.OpenAIError("stream ended without producing a ChatCompletion");
        return completion;
    }
    /**
     * @returns a promise that resolves with the content of the final ChatCompletionMessage, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */ async finalContent() {
        await this.done();
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalContent).call(this);
    }
    /**
     * @returns a promise that resolves with the the final assistant ChatCompletionMessage response,
     * or rejects if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */ async finalMessage() {
        await this.done();
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalMessage).call(this);
    }
    /**
     * @returns a promise that resolves with the content of the final FunctionCall, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */ async finalFunctionCall() {
        await this.done();
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
    }
    async finalFunctionCallResult() {
        await this.done();
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
    }
    async totalUsage() {
        await this.done();
        return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_calculateTotalUsage).call(this);
    }
    allChatCompletions() {
        return [
            ...this._chatCompletions
        ];
    }
    _emit(event, ...args) {
        // make sure we don't emit any events after end
        if ($8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended, "f")) return;
        if (event === "end") {
            $8479599de4eefa35$var$__classPrivateFieldSet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended, true, "f");
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveEndPromise, "f").call(this);
        }
        const listeners = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event];
        if (listeners) {
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners, "f")[event] = listeners.filter((l)=>!l.once);
            listeners.forEach(({ listener: listener })=>listener(...args));
        }
        if (event === "abort") {
            const error = args[0];
            if (!$8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated, "f") && !listeners?.length) Promise.reject(error);
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise, "f").call(this, error);
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise, "f").call(this, error);
            this._emit("end");
            return;
        }
        if (event === "error") {
            // NOTE: _emit('error', error) should only be called from #handleError().
            const error = args[0];
            if (!$8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated, "f") && !listeners?.length) // Trigger an unhandled rejection if the user hasn't registered any error handlers.
            // If you are seeing stack traces here, make sure to handle errors via either:
            // - runner.on('error', () => ...)
            // - await runner.done()
            // - await runner.finalChatCompletion()
            // - etc.
            Promise.reject(error);
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise, "f").call(this, error);
            $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise, "f").call(this, error);
            this._emit("end");
        }
    }
    _emitFinal() {
        const completion = this._chatCompletions[this._chatCompletions.length - 1];
        if (completion) this._emit("finalChatCompletion", completion);
        const finalMessage = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalMessage).call(this);
        if (finalMessage) this._emit("finalMessage", finalMessage);
        const finalContent = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalContent).call(this);
        if (finalContent) this._emit("finalContent", finalContent);
        const finalFunctionCall = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
        if (finalFunctionCall) this._emit("finalFunctionCall", finalFunctionCall);
        const finalFunctionCallResult = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
        if (finalFunctionCallResult != null) this._emit("finalFunctionCallResult", finalFunctionCallResult);
        if (this._chatCompletions.some((c)=>c.usage)) this._emit("totalUsage", $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_calculateTotalUsage).call(this));
    }
    async _createChatCompletion(completions, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_validateParams).call(this, params);
        const chatCompletion = await completions.create({
            ...params,
            stream: false
        }, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        return this._addChatCompletion(chatCompletion);
    }
    async _runChatCompletion(completions, params, options) {
        for (const message of params.messages)this._addMessage(message, false);
        return await this._createChatCompletion(completions, params, options);
    }
    async _runFunctions(completions, params, options) {
        const role = "function";
        const { function_call: function_call = "auto", stream: stream, ...restParams } = params;
        const singleFunctionToCall = typeof function_call !== "string" && function_call?.name;
        const { maxChatCompletions: maxChatCompletions = $8479599de4eefa35$var$DEFAULT_MAX_CHAT_COMPLETIONS } = options || {};
        const functionsByName = {};
        for (const f of params.functions)functionsByName[f.name || f.function.name] = f;
        const functions = params.functions.map((f)=>({
                name: f.name || f.function.name,
                parameters: f.parameters,
                description: f.description
            }));
        for (const message of params.messages)this._addMessage(message, false);
        for(let i = 0; i < maxChatCompletions; ++i){
            const chatCompletion = await this._createChatCompletion(completions, {
                ...restParams,
                function_call: function_call,
                functions: functions,
                messages: [
                    ...this.messages
                ]
            }, options);
            const message = chatCompletion.choices[0]?.message;
            if (!message) throw new $2CkQ4.OpenAIError(`missing message in ChatCompletion response`);
            if (!message.function_call) return;
            const { name: name, arguments: args } = message.function_call;
            const fn = functionsByName[name];
            if (!fn) {
                const content = `Invalid function_call: ${JSON.stringify(name)}. Available options are: ${functions.map((f)=>JSON.stringify(f.name)).join(", ")}. Please try again`;
                this._addMessage({
                    role: role,
                    name: name,
                    content: content
                });
                continue;
            } else if (singleFunctionToCall && singleFunctionToCall !== name) {
                const content = `Invalid function_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
                this._addMessage({
                    role: role,
                    name: name,
                    content: content
                });
                continue;
            }
            let parsed;
            try {
                parsed = (0, $4hrh8.isRunnableFunctionWithParse)(fn) ? await fn.parse(args) : args;
            } catch (error) {
                this._addMessage({
                    role: role,
                    name: name,
                    content: error instanceof Error ? error.message : String(error)
                });
                continue;
            }
            // @ts-expect-error it can't rule out `never` type.
            const rawContent = await fn.function(parsed, this);
            const content = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
            this._addMessage({
                role: role,
                name: name,
                content: content
            });
            if (singleFunctionToCall) return;
        }
    }
    async _runTools(completions, params, options) {
        const role = "tool";
        const { tool_choice: tool_choice = "auto", stream: stream, ...restParams } = params;
        const singleFunctionToCall = typeof tool_choice !== "string" && tool_choice?.function?.name;
        const { maxChatCompletions: maxChatCompletions = $8479599de4eefa35$var$DEFAULT_MAX_CHAT_COMPLETIONS } = options || {};
        const functionsByName = {};
        for (const f of params.tools)if (f.type === "function") functionsByName[f.function.name || f.function.function.name] = f.function;
        const tools = "tools" in params ? params.tools.map((t)=>t.type === "function" ? {
                type: "function",
                function: {
                    name: t.function.name || t.function.function.name,
                    parameters: t.function.parameters,
                    description: t.function.description
                }
            } : t) : undefined;
        for (const message of params.messages)this._addMessage(message, false);
        for(let i = 0; i < maxChatCompletions; ++i){
            const chatCompletion = await this._createChatCompletion(completions, {
                ...restParams,
                tool_choice: tool_choice,
                tools: tools,
                messages: [
                    ...this.messages
                ]
            }, options);
            const message = chatCompletion.choices[0]?.message;
            if (!message) throw new $2CkQ4.OpenAIError(`missing message in ChatCompletion response`);
            if (!message.tool_calls) return;
            for (const tool_call of message.tool_calls){
                if (tool_call.type !== "function") continue;
                const tool_call_id = tool_call.id;
                const { name: name, arguments: args } = tool_call.function;
                const fn = functionsByName[name];
                if (!fn) {
                    const content = `Invalid tool_call: ${JSON.stringify(name)}. Available options are: ${tools.map((f)=>JSON.stringify(f.function.name)).join(", ")}. Please try again`;
                    this._addMessage({
                        role: role,
                        tool_call_id: tool_call_id,
                        content: content
                    });
                    continue;
                } else if (singleFunctionToCall && singleFunctionToCall !== name) {
                    const content = `Invalid tool_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
                    this._addMessage({
                        role: role,
                        tool_call_id: tool_call_id,
                        content: content
                    });
                    continue;
                }
                let parsed;
                try {
                    parsed = (0, $4hrh8.isRunnableFunctionWithParse)(fn) ? await fn.parse(args) : args;
                } catch (error) {
                    const content = error instanceof Error ? error.message : String(error);
                    this._addMessage({
                        role: role,
                        tool_call_id: tool_call_id,
                        content: content
                    });
                    continue;
                }
                // @ts-expect-error it can't rule out `never` type.
                const rawContent = await fn.function(parsed, this);
                const content = $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
                this._addMessage({
                    role: role,
                    tool_call_id: tool_call_id,
                    content: content
                });
                if (singleFunctionToCall) return;
            }
        }
        return;
    }
}
module.exports.AbstractChatCompletionRunner = $8479599de4eefa35$var$AbstractChatCompletionRunner;
$8479599de4eefa35$var$_AbstractChatCompletionRunner_connectedPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveConnectedPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectConnectedPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_endPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_resolveEndPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_rejectEndPromise = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_listeners = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_ended = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_errored = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_aborted = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_catchingPromiseCreated = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_handleError = new WeakMap(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances = new WeakSet(), $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalContent = function _AbstractChatCompletionRunner_getFinalContent() {
    return $8479599de4eefa35$var$__classPrivateFieldGet(this, $8479599de4eefa35$var$_AbstractChatCompletionRunner_instances, "m", $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalMessage).call(this).content ?? null;
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalMessage = function _AbstractChatCompletionRunner_getFinalMessage() {
    let i = this.messages.length;
    while(i-- > 0){
        const message = this.messages[i];
        if ((0, $6UcuG.isAssistantMessage)(message)) return {
            ...message,
            content: message.content ?? null
        };
    }
    throw new $2CkQ4.OpenAIError("stream ended without producing a ChatCompletionMessage with role=assistant");
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCall = function _AbstractChatCompletionRunner_getFinalFunctionCall() {
    for(let i = this.messages.length - 1; i >= 0; i--){
        const message = this.messages[i];
        if ((0, $6UcuG.isAssistantMessage)(message) && message?.function_call) return message.function_call;
        if ((0, $6UcuG.isAssistantMessage)(message) && message?.tool_calls?.length) return message.tool_calls.at(-1)?.function;
    }
    return;
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_getFinalFunctionCallResult = function _AbstractChatCompletionRunner_getFinalFunctionCallResult() {
    for(let i = this.messages.length - 1; i >= 0; i--){
        const message = this.messages[i];
        if ((0, $6UcuG.isFunctionMessage)(message) && message.content != null) return message.content;
        if ((0, $6UcuG.isToolMessage)(message) && message.content != null && this.messages.some((x)=>x.role === "assistant" && x.tool_calls?.some((y)=>y.type === "function" && y.id === message.tool_call_id))) return message.content;
    }
    return;
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_calculateTotalUsage = function _AbstractChatCompletionRunner_calculateTotalUsage() {
    const total = {
        completion_tokens: 0,
        prompt_tokens: 0,
        total_tokens: 0
    };
    for (const { usage: usage } of this._chatCompletions)if (usage) {
        total.completion_tokens += usage.completion_tokens;
        total.prompt_tokens += usage.prompt_tokens;
        total.total_tokens += usage.total_tokens;
    }
    return total;
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_validateParams = function _AbstractChatCompletionRunner_validateParams(params) {
    if (params.n != null && params.n > 1) throw new $2CkQ4.OpenAIError("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
}, $8479599de4eefa35$var$_AbstractChatCompletionRunner_stringifyFunctionCallResult = function _AbstractChatCompletionRunner_stringifyFunctionCallResult(rawContent) {
    return typeof rawContent === "string" ? rawContent : rawContent === undefined ? "undefined" : JSON.stringify(rawContent);
};

});
parcelRequire.register("4hrh8", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ParsingToolFunction = module.exports.ParsingFunction = module.exports.isRunnableFunctionWithParse = void 0;
function $31dde8491018e822$var$isRunnableFunctionWithParse(fn) {
    return typeof fn.parse === "function";
}
module.exports.isRunnableFunctionWithParse = $31dde8491018e822$var$isRunnableFunctionWithParse;
/**
 * This is helper class for passing a `function` and `parse` where the `function`
 * argument type matches the `parse` return type.
 *
 * @deprecated - please use ParsingToolFunction instead.
 */ class $31dde8491018e822$var$ParsingFunction {
    constructor(input){
        this.function = input.function;
        this.parse = input.parse;
        this.parameters = input.parameters;
        this.description = input.description;
        this.name = input.name;
    }
}
module.exports.ParsingFunction = $31dde8491018e822$var$ParsingFunction;
/**
 * This is helper class for passing a `function` and `parse` where the `function`
 * argument type matches the `parse` return type.
 */ class $31dde8491018e822$var$ParsingToolFunction {
    constructor(input){
        this.type = "function";
        this.function = input;
    }
}
module.exports.ParsingToolFunction = $31dde8491018e822$var$ParsingToolFunction;

});

parcelRequire.register("6UcuG", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isPresent = module.exports.isToolMessage = module.exports.isFunctionMessage = module.exports.isAssistantMessage = void 0;
const $5071aa0ea614e99e$var$isAssistantMessage = (message)=>{
    return message?.role === "assistant";
};
module.exports.isAssistantMessage = $5071aa0ea614e99e$var$isAssistantMessage;
const $5071aa0ea614e99e$var$isFunctionMessage = (message)=>{
    return message?.role === "function";
};
module.exports.isFunctionMessage = $5071aa0ea614e99e$var$isFunctionMessage;
const $5071aa0ea614e99e$var$isToolMessage = (message)=>{
    return message?.role === "tool";
};
module.exports.isToolMessage = $5071aa0ea614e99e$var$isToolMessage;
function $5071aa0ea614e99e$var$isPresent(obj) {
    return obj != null;
}
module.exports.isPresent = $5071aa0ea614e99e$var$isPresent;

});



parcelRequire.register("dB8rE", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ChatCompletionStreamingRunner = void 0;

var $4ByJ4 = parcelRequire("4ByJ4");
class $9e65480dcbbfdee3$var$ChatCompletionStreamingRunner extends $4ByJ4.ChatCompletionStream {
    static fromReadableStream(stream) {
        const runner = new $9e65480dcbbfdee3$var$ChatCompletionStreamingRunner();
        runner._run(()=>runner._fromReadableStream(stream));
        return runner;
    }
    /** @deprecated - please use `runTools` instead. */ static runFunctions(completions, params, options) {
        const runner = new $9e65480dcbbfdee3$var$ChatCompletionStreamingRunner();
        const opts = {
            ...options,
            headers: {
                ...options?.headers,
                "X-Stainless-Helper-Method": "runFunctions"
            }
        };
        runner._run(()=>runner._runFunctions(completions, params, opts));
        return runner;
    }
    static runTools(completions, params, options) {
        const runner = new $9e65480dcbbfdee3$var$ChatCompletionStreamingRunner();
        const opts = {
            ...options,
            headers: {
                ...options?.headers,
                "X-Stainless-Helper-Method": "runTools"
            }
        };
        runner._run(()=>runner._runTools(completions, params, opts));
        return runner;
    }
}
module.exports.ChatCompletionStreamingRunner = $9e65480dcbbfdee3$var$ChatCompletionStreamingRunner;

});
parcelRequire.register("4ByJ4", function(module, exports) {
"use strict";
var $35a58dfe399d9994$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $35a58dfe399d9994$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $35a58dfe399d9994$var$_ChatCompletionStream_instances, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, $35a58dfe399d9994$var$_ChatCompletionStream_beginRequest, $35a58dfe399d9994$var$_ChatCompletionStream_addChunk, $35a58dfe399d9994$var$_ChatCompletionStream_endRequest, $35a58dfe399d9994$var$_ChatCompletionStream_accumulateChatCompletion;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ChatCompletionStream = void 0;

var $2CkQ4 = parcelRequire("2CkQ4");

var $bn9G7 = parcelRequire("bn9G7");

var $bDHYA = parcelRequire("bDHYA");
class $35a58dfe399d9994$var$ChatCompletionStream extends $bn9G7.AbstractChatCompletionRunner {
    constructor(){
        super(...arguments);
        $35a58dfe399d9994$var$_ChatCompletionStream_instances.add(this);
        $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot.set(this, void 0);
    }
    get currentChatCompletionSnapshot() {
        return $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, "f");
    }
    /**
     * Intended for use on the frontend, consuming a stream produced with
     * `.toReadableStream()` on the backend.
     *
     * Note that messages sent to the model do not appear in `.on('message')`
     * in this context.
     */ static fromReadableStream(stream) {
        const runner = new $35a58dfe399d9994$var$ChatCompletionStream();
        runner._run(()=>runner._fromReadableStream(stream));
        return runner;
    }
    static createChatCompletion(completions, params, options) {
        const runner = new $35a58dfe399d9994$var$ChatCompletionStream();
        runner._run(()=>runner._runChatCompletion(completions, {
                ...params,
                stream: true
            }, {
                ...options,
                headers: {
                    ...options?.headers,
                    "X-Stainless-Helper-Method": "stream"
                }
            }));
        return runner;
    }
    async _createChatCompletion(completions, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_beginRequest).call(this);
        const stream = await completions.create({
            ...params,
            stream: true
        }, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        for await (const chunk of stream)$35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_addChunk).call(this, chunk);
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addChatCompletion($35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_endRequest).call(this));
    }
    async _fromReadableStream(readableStream, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_beginRequest).call(this);
        this._connected();
        const stream = $bDHYA.Stream.fromReadableStream(readableStream, this.controller);
        let chatId;
        for await (const chunk of stream){
            if (chatId && chatId !== chunk.id) // A new request has been made.
            this._addChatCompletion($35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_endRequest).call(this));
            $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_addChunk).call(this, chunk);
            chatId = chunk.id;
        }
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addChatCompletion($35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_endRequest).call(this));
    }
    [($35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot = new WeakMap(), $35a58dfe399d9994$var$_ChatCompletionStream_instances = new WeakSet(), $35a58dfe399d9994$var$_ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest() {
        if (this.ended) return;
        $35a58dfe399d9994$var$__classPrivateFieldSet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
    }, $35a58dfe399d9994$var$_ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk(chunk) {
        if (this.ended) return;
        const completion = $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_instances, "m", $35a58dfe399d9994$var$_ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
        this._emit("chunk", chunk, completion);
        const delta = chunk.choices[0]?.delta?.content;
        const snapshot = completion.choices[0]?.message;
        if (delta != null && snapshot?.role === "assistant" && snapshot?.content) this._emit("content", delta, snapshot.content);
    }, $35a58dfe399d9994$var$_ChatCompletionStream_endRequest = function _ChatCompletionStream_endRequest() {
        if (this.ended) throw new $2CkQ4.OpenAIError(`stream has ended, this shouldn't happen`);
        const snapshot = $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, "f");
        if (!snapshot) throw new $2CkQ4.OpenAIError(`request ended without sending any chunks`);
        $35a58dfe399d9994$var$__classPrivateFieldSet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
        return $35a58dfe399d9994$var$finalizeChatCompletion(snapshot);
    }, $35a58dfe399d9994$var$_ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion(chunk) {
        var _a, _b, _c;
        let snapshot = $35a58dfe399d9994$var$__classPrivateFieldGet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, "f");
        const { choices: choices, ...rest } = chunk;
        if (!snapshot) snapshot = $35a58dfe399d9994$var$__classPrivateFieldSet(this, $35a58dfe399d9994$var$_ChatCompletionStream_currentChatCompletionSnapshot, {
            ...rest,
            choices: []
        }, "f");
        else Object.assign(snapshot, rest);
        for (const { delta: delta, finish_reason: finish_reason, index: index, logprobs: logprobs = null, ...other } of chunk.choices){
            let choice = snapshot.choices[index];
            if (!choice) choice = snapshot.choices[index] = {
                finish_reason: finish_reason,
                index: index,
                message: {},
                logprobs: logprobs,
                ...other
            };
            if (logprobs) {
                if (!choice.logprobs) choice.logprobs = Object.assign({}, logprobs);
                else {
                    const { content: content, ...rest } = logprobs;
                    Object.assign(choice.logprobs, rest);
                    if (content) {
                        (_a = choice.logprobs).content ?? (_a.content = []);
                        choice.logprobs.content.push(...content);
                    }
                }
            }
            if (finish_reason) choice.finish_reason = finish_reason;
            Object.assign(choice, other);
            if (!delta) continue; // Shouldn't happen; just in case.
            const { content: content, function_call: function_call, role: role, tool_calls: tool_calls, ...rest } = delta;
            Object.assign(choice.message, rest);
            if (content) choice.message.content = (choice.message.content || "") + content;
            if (role) choice.message.role = role;
            if (function_call) {
                if (!choice.message.function_call) choice.message.function_call = function_call;
                else {
                    if (function_call.name) choice.message.function_call.name = function_call.name;
                    if (function_call.arguments) {
                        (_b = choice.message.function_call).arguments ?? (_b.arguments = "");
                        choice.message.function_call.arguments += function_call.arguments;
                    }
                }
            }
            if (tool_calls) {
                if (!choice.message.tool_calls) choice.message.tool_calls = [];
                for (const { index: index, id: id, type: type, function: fn, ...rest } of tool_calls){
                    const tool_call = (_c = choice.message.tool_calls)[index] ?? (_c[index] = {});
                    Object.assign(tool_call, rest);
                    if (id) tool_call.id = id;
                    if (type) tool_call.type = type;
                    if (fn) tool_call.function ?? (tool_call.function = {
                        arguments: ""
                    });
                    if (fn?.name) tool_call.function.name = fn.name;
                    if (fn?.arguments) tool_call.function.arguments += fn.arguments;
                }
            }
        }
        return snapshot;
    }, Symbol.asyncIterator)]() {
        const pushQueue = [];
        const readQueue = [];
        let done = false;
        this.on("chunk", (chunk)=>{
            const reader = readQueue.shift();
            if (reader) reader.resolve(chunk);
            else pushQueue.push(chunk);
        });
        this.on("end", ()=>{
            done = true;
            for (const reader of readQueue)reader.resolve(undefined);
            readQueue.length = 0;
        });
        this.on("abort", (err)=>{
            done = true;
            for (const reader of readQueue)reader.reject(err);
            readQueue.length = 0;
        });
        this.on("error", (err)=>{
            done = true;
            for (const reader of readQueue)reader.reject(err);
            readQueue.length = 0;
        });
        return {
            next: async ()=>{
                if (!pushQueue.length) {
                    if (done) return {
                        value: undefined,
                        done: true
                    };
                    return new Promise((resolve, reject)=>readQueue.push({
                            resolve: resolve,
                            reject: reject
                        })).then((chunk)=>chunk ? {
                            value: chunk,
                            done: false
                        } : {
                            value: undefined,
                            done: true
                        });
                }
                const chunk = pushQueue.shift();
                return {
                    value: chunk,
                    done: false
                };
            },
            return: async ()=>{
                this.abort();
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
    toReadableStream() {
        const stream = new $bDHYA.Stream(this[Symbol.asyncIterator].bind(this), this.controller);
        return stream.toReadableStream();
    }
}
module.exports.ChatCompletionStream = $35a58dfe399d9994$var$ChatCompletionStream;
function $35a58dfe399d9994$var$finalizeChatCompletion(snapshot) {
    const { id: id, choices: choices, created: created, model: model, system_fingerprint: system_fingerprint, ...rest } = snapshot;
    return {
        ...rest,
        id: id,
        choices: choices.map(({ message: message, finish_reason: finish_reason, index: index, logprobs: logprobs, ...choiceRest })=>{
            if (!finish_reason) throw new $2CkQ4.OpenAIError(`missing finish_reason for choice ${index}`);
            const { content: content = null, function_call: function_call, tool_calls: tool_calls, ...messageRest } = message;
            const role = message.role; // this is what we expect; in theory it could be different which would make our types a slight lie but would be fine.
            if (!role) throw new $2CkQ4.OpenAIError(`missing role for choice ${index}`);
            if (function_call) {
                const { arguments: args, name: name } = function_call;
                if (args == null) throw new $2CkQ4.OpenAIError(`missing function_call.arguments for choice ${index}`);
                if (!name) throw new $2CkQ4.OpenAIError(`missing function_call.name for choice ${index}`);
                return {
                    ...choiceRest,
                    message: {
                        content: content,
                        function_call: {
                            arguments: args,
                            name: name
                        },
                        role: role
                    },
                    finish_reason: finish_reason,
                    index: index,
                    logprobs: logprobs
                };
            }
            if (tool_calls) return {
                ...choiceRest,
                index: index,
                finish_reason: finish_reason,
                logprobs: logprobs,
                message: {
                    ...messageRest,
                    role: role,
                    content: content,
                    tool_calls: tool_calls.map((tool_call, i)=>{
                        const { function: fn, type: type, id: id, ...toolRest } = tool_call;
                        const { arguments: args, name: name, ...fnRest } = fn || {};
                        if (id == null) throw new $2CkQ4.OpenAIError(`missing choices[${index}].tool_calls[${i}].id\n${$35a58dfe399d9994$var$str(snapshot)}`);
                        if (type == null) throw new $2CkQ4.OpenAIError(`missing choices[${index}].tool_calls[${i}].type\n${$35a58dfe399d9994$var$str(snapshot)}`);
                        if (name == null) throw new $2CkQ4.OpenAIError(`missing choices[${index}].tool_calls[${i}].function.name\n${$35a58dfe399d9994$var$str(snapshot)}`);
                        if (args == null) throw new $2CkQ4.OpenAIError(`missing choices[${index}].tool_calls[${i}].function.arguments\n${$35a58dfe399d9994$var$str(snapshot)}`);
                        return {
                            ...toolRest,
                            id: id,
                            type: type,
                            function: {
                                ...fnRest,
                                name: name,
                                arguments: args
                            }
                        };
                    })
                }
            };
            return {
                ...choiceRest,
                message: {
                    ...messageRest,
                    content: content,
                    role: role
                },
                finish_reason: finish_reason,
                index: index,
                logprobs: logprobs
            };
        }),
        created: created,
        model: model,
        object: "chat.completion",
        ...system_fingerprint ? {
            system_fingerprint: system_fingerprint
        } : {}
    };
}
function $35a58dfe399d9994$var$str(x) {
    return JSON.stringify(x);
}

});




parcelRequire.register("jJmxr", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $e5d3b3ec44d55223$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $e5d3b3ec44d55223$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e5d3b3ec44d55223$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e5d3b3ec44d55223$var$__createBinding(result, mod, k);
    }
    $e5d3b3ec44d55223$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Threads = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

var $e7WDp = parcelRequire("e7WDp");

const $e5d3b3ec44d55223$var$MessagesAPI = $e5d3b3ec44d55223$var$__importStar((parcelRequire("ehgwy")));

const $e5d3b3ec44d55223$var$RunsAPI = $e5d3b3ec44d55223$var$__importStar((parcelRequire("lbrmo")));
class $e5d3b3ec44d55223$var$Threads extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.runs = new $e5d3b3ec44d55223$var$RunsAPI.Runs(this._client);
        this.messages = new $e5d3b3ec44d55223$var$MessagesAPI.Messages(this._client);
    }
    create(body = {}, options) {
        if ((0, $8peXx.isRequestOptions)(body)) return this.create({}, body);
        return this._client.post("/threads", {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieves a thread.
     */ retrieve(threadId, options) {
        return this._client.get(`/threads/${threadId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Modifies a thread.
     */ update(threadId, body, options) {
        return this._client.post(`/threads/${threadId}`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Delete a thread.
     */ del(threadId, options) {
        return this._client.delete(`/threads/${threadId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    createAndRun(body, options) {
        return this._client.post("/threads/runs", {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            },
            stream: body.stream ?? false
        });
    }
    /**
     * A helper to create a thread, start a run and then poll for a terminal state.
     * More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */ async createAndRunPoll(body, options) {
        const run = await this.createAndRun(body, options);
        return await this.runs.poll(run.thread_id, run.id, options);
    }
    /**
     * Create a thread and stream the run back
     */ createAndRunStream(body, options) {
        return $e7WDp.AssistantStream.createThreadAssistantStream(body, this._client.beta.threads, options);
    }
}
module.exports.Threads = $e5d3b3ec44d55223$var$Threads;
(function(Threads) {
    Threads.Runs = $e5d3b3ec44d55223$var$RunsAPI.Runs;
    Threads.RunsPage = $e5d3b3ec44d55223$var$RunsAPI.RunsPage;
    Threads.Messages = $e5d3b3ec44d55223$var$MessagesAPI.Messages;
    Threads.MessagesPage = $e5d3b3ec44d55223$var$MessagesAPI.MessagesPage;
})($e5d3b3ec44d55223$var$Threads = module.exports.Threads || (module.exports.Threads = {}));

});
parcelRequire.register("e7WDp", function(module, exports) {
"use strict";
var $a48f33c45a33e5e8$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $a48f33c45a33e5e8$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $a48f33c45a33e5e8$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $a48f33c45a33e5e8$var$__createBinding(result, mod, k);
    }
    $a48f33c45a33e5e8$var$__setModuleDefault(result, mod);
    return result;
};
var $a48f33c45a33e5e8$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $a48f33c45a33e5e8$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $a48f33c45a33e5e8$var$_AssistantStream_instances, $a48f33c45a33e5e8$var$_AssistantStream_events, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshots, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCallIndex, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, $a48f33c45a33e5e8$var$_AssistantStream_currentEvent, $a48f33c45a33e5e8$var$_AssistantStream_currentRunSnapshot, $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot, $a48f33c45a33e5e8$var$_AssistantStream_addEvent, $a48f33c45a33e5e8$var$_AssistantStream_endRequest, $a48f33c45a33e5e8$var$_AssistantStream_handleMessage, $a48f33c45a33e5e8$var$_AssistantStream_handleRunStep, $a48f33c45a33e5e8$var$_AssistantStream_handleEvent, $a48f33c45a33e5e8$var$_AssistantStream_accumulateRunStep, $a48f33c45a33e5e8$var$_AssistantStream_accumulateMessage, $a48f33c45a33e5e8$var$_AssistantStream_accumulateContent, $a48f33c45a33e5e8$var$_AssistantStream_handleRun;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AssistantStream = void 0;

const $a48f33c45a33e5e8$var$Core = $a48f33c45a33e5e8$var$__importStar((parcelRequire("8peXx")));

var $7hUb7 = parcelRequire("7hUb7");

var $bDHYA = parcelRequire("bDHYA");

var $2CkQ4 = parcelRequire("2CkQ4");
class $a48f33c45a33e5e8$var$AssistantStream extends $7hUb7.AbstractAssistantStreamRunner {
    constructor(){
        super(...arguments);
        $a48f33c45a33e5e8$var$_AssistantStream_instances.add(this);
        //Track all events in a single list for reference
        $a48f33c45a33e5e8$var$_AssistantStream_events.set(this, []);
        //Used to accumulate deltas
        //We are accumulating many types so the value here is not strict
        $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots.set(this, {});
        $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshots.set(this, {});
        $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_finalRun.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentContent.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentToolCallIndex.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall.set(this, void 0);
        //For current snapshot methods
        $a48f33c45a33e5e8$var$_AssistantStream_currentEvent.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentRunSnapshot.set(this, void 0);
        $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot.set(this, void 0);
    }
    [($a48f33c45a33e5e8$var$_AssistantStream_events = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshots = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_finalRun = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentContent = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentToolCallIndex = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentEvent = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentRunSnapshot = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot = new WeakMap(), $a48f33c45a33e5e8$var$_AssistantStream_instances = new WeakSet(), Symbol.asyncIterator)]() {
        const pushQueue = [];
        const readQueue = [];
        let done = false;
        //Catch all for passing along all events
        this.on("event", (event)=>{
            const reader = readQueue.shift();
            if (reader) reader.resolve(event);
            else pushQueue.push(event);
        });
        this.on("end", ()=>{
            done = true;
            for (const reader of readQueue)reader.resolve(undefined);
            readQueue.length = 0;
        });
        this.on("abort", (err)=>{
            done = true;
            for (const reader of readQueue)reader.reject(err);
            readQueue.length = 0;
        });
        this.on("error", (err)=>{
            done = true;
            for (const reader of readQueue)reader.reject(err);
            readQueue.length = 0;
        });
        return {
            next: async ()=>{
                if (!pushQueue.length) {
                    if (done) return {
                        value: undefined,
                        done: true
                    };
                    return new Promise((resolve, reject)=>readQueue.push({
                            resolve: resolve,
                            reject: reject
                        })).then((chunk)=>chunk ? {
                            value: chunk,
                            done: false
                        } : {
                            value: undefined,
                            done: true
                        });
                }
                const chunk = pushQueue.shift();
                return {
                    value: chunk,
                    done: false
                };
            },
            return: async ()=>{
                this.abort();
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
    static fromReadableStream(stream) {
        const runner = new $a48f33c45a33e5e8$var$AssistantStream();
        runner._run(()=>runner._fromReadableStream(stream));
        return runner;
    }
    async _fromReadableStream(readableStream, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        this._connected();
        const stream = $bDHYA.Stream.fromReadableStream(readableStream, this.controller);
        for await (const event of stream)$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_addEvent).call(this, event);
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addRun($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_endRequest).call(this));
    }
    toReadableStream() {
        const stream = new $bDHYA.Stream(this[Symbol.asyncIterator].bind(this), this.controller);
        return stream.toReadableStream();
    }
    static createToolAssistantStream(threadId, runId, runs, body, options) {
        const runner = new $a48f33c45a33e5e8$var$AssistantStream();
        runner._run(()=>runner._runToolAssistantStream(threadId, runId, runs, body, {
                ...options,
                headers: {
                    ...options?.headers,
                    "X-Stainless-Helper-Method": "stream"
                }
            }));
        return runner;
    }
    async _createToolAssistantStream(run, threadId, runId, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        const body = {
            ...params,
            stream: true
        };
        const stream = await run.submitToolOutputs(threadId, runId, body, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        for await (const event of stream)$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_addEvent).call(this, event);
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addRun($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_endRequest).call(this));
    }
    static createThreadAssistantStream(body, thread, options) {
        const runner = new $a48f33c45a33e5e8$var$AssistantStream();
        runner._run(()=>runner._threadAssistantStream(body, thread, {
                ...options,
                headers: {
                    ...options?.headers,
                    "X-Stainless-Helper-Method": "stream"
                }
            }));
        return runner;
    }
    static createAssistantStream(threadId, runs, params, options) {
        const runner = new $a48f33c45a33e5e8$var$AssistantStream();
        runner._run(()=>runner._runAssistantStream(threadId, runs, params, {
                ...options,
                headers: {
                    ...options?.headers,
                    "X-Stainless-Helper-Method": "stream"
                }
            }));
        return runner;
    }
    currentEvent() {
        return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentEvent, "f");
    }
    currentRun() {
        return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentRunSnapshot, "f");
    }
    currentMessageSnapshot() {
        return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f");
    }
    currentRunStepSnapshot() {
        return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot, "f");
    }
    async finalRunSteps() {
        await this.done();
        return Object.values($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f"));
    }
    async finalMessages() {
        await this.done();
        return Object.values($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshots, "f"));
    }
    async finalRun() {
        await this.done();
        if (!$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, "f")) throw Error("Final run was not received.");
        return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, "f");
    }
    async _createThreadAssistantStream(thread, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        const body = {
            ...params,
            stream: true
        };
        const stream = await thread.createAndRun(body, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        for await (const event of stream)$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_addEvent).call(this, event);
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addRun($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_endRequest).call(this));
    }
    async _createAssistantStream(run, threadId, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        const body = {
            ...params,
            stream: true
        };
        const stream = await run.create(threadId, body, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        for await (const event of stream)$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_addEvent).call(this, event);
        if (stream.controller.signal?.aborted) throw new $2CkQ4.APIUserAbortError();
        return this._addRun($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_endRequest).call(this));
    }
    static accumulateDelta(acc, delta) {
        for (const [key, deltaValue] of Object.entries(delta)){
            if (!acc.hasOwnProperty(key)) {
                acc[key] = deltaValue;
                continue;
            }
            let accValue = acc[key];
            if (accValue === null || accValue === undefined) {
                acc[key] = deltaValue;
                continue;
            }
            // We don't accumulate these special properties
            if (key === "index" || key === "type") {
                acc[key] = deltaValue;
                continue;
            }
            // Type-specific accumulation logic
            if (typeof accValue === "string" && typeof deltaValue === "string") accValue += deltaValue;
            else if (typeof accValue === "number" && typeof deltaValue === "number") accValue += deltaValue;
            else if ($a48f33c45a33e5e8$var$Core.isObj(accValue) && $a48f33c45a33e5e8$var$Core.isObj(deltaValue)) accValue = this.accumulateDelta(accValue, deltaValue);
            else if (Array.isArray(accValue) && Array.isArray(deltaValue)) {
                if (accValue.every((x)=>typeof x === "string" || typeof x === "number")) {
                    accValue.push(...deltaValue); // Use spread syntax for efficient addition
                    continue;
                }
            } else throw Error(`Unhandled record type: ${key}, deltaValue: ${deltaValue}, accValue: ${accValue}`);
            acc[key] = accValue;
        }
        return acc;
    }
}
module.exports.AssistantStream = $a48f33c45a33e5e8$var$AssistantStream;
$a48f33c45a33e5e8$var$_AssistantStream_addEvent = function _AssistantStream_addEvent(event) {
    if (this.ended) return;
    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentEvent, event, "f");
    $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_handleEvent).call(this, event);
    switch(event.event){
        case "thread.created":
            break;
        case "thread.run.created":
        case "thread.run.queued":
        case "thread.run.in_progress":
        case "thread.run.requires_action":
        case "thread.run.completed":
        case "thread.run.failed":
        case "thread.run.cancelling":
        case "thread.run.cancelled":
        case "thread.run.expired":
            $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_handleRun).call(this, event);
            break;
        case "thread.run.step.created":
        case "thread.run.step.in_progress":
        case "thread.run.step.delta":
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
            $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_handleRunStep).call(this, event);
            break;
        case "thread.message.created":
        case "thread.message.in_progress":
        case "thread.message.delta":
        case "thread.message.completed":
        case "thread.message.incomplete":
            $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_handleMessage).call(this, event);
            break;
        case "error":
            //This is included for completeness, but errors are processed in the SSE event processing so this should not occur
            throw new Error("Encountered an error event in event processing - errors should be processed earlier");
    }
}, $a48f33c45a33e5e8$var$_AssistantStream_endRequest = function _AssistantStream_endRequest() {
    if (this.ended) throw new $2CkQ4.OpenAIError(`stream has ended, this shouldn't happen`);
    if (!$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, "f")) throw Error("Final run has not been received");
    return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, "f");
}, $a48f33c45a33e5e8$var$_AssistantStream_handleMessage = function _AssistantStream_handleMessage(event) {
    const [accumulatedMessage, newContent] = $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_accumulateMessage).call(this, event, $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f"));
    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, accumulatedMessage, "f");
    $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshots, "f")[accumulatedMessage.id] = accumulatedMessage;
    for (const content of newContent){
        const snapshotContent = accumulatedMessage.content[content.index];
        if (snapshotContent?.type == "text") this._emit("textCreated", snapshotContent.text);
    }
    switch(event.event){
        case "thread.message.created":
            this._emit("messageCreated", event.data);
            break;
        case "thread.message.in_progress":
            break;
        case "thread.message.delta":
            this._emit("messageDelta", event.data.delta, accumulatedMessage);
            if (event.data.delta.content) for (const content of event.data.delta.content){
                //If it is text delta, emit a text delta event
                if (content.type == "text" && content.text) {
                    let textDelta = content.text;
                    let snapshot = accumulatedMessage.content[content.index];
                    if (snapshot && snapshot.type == "text") this._emit("textDelta", textDelta, snapshot.text);
                    else throw Error("The snapshot associated with this text delta is not text or missing");
                }
                if (content.index != $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex, "f")) {
                    //See if we have in progress content
                    if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, "f")) switch($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, "f").type){
                        case "text":
                            this._emit("textDone", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, "f").text, $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f"));
                            break;
                        case "image_file":
                            this._emit("imageFileDone", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, "f").image_file, $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f"));
                            break;
                    }
                    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex, content.index, "f");
                }
                $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContent, accumulatedMessage.content[content.index], "f");
            }
            break;
        case "thread.message.completed":
        case "thread.message.incomplete":
            //We emit the latest content we were working on on completion (including incomplete)
            if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex, "f") !== undefined) {
                const currentContent = event.data.content[$a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentContentIndex, "f")];
                if (currentContent) switch(currentContent.type){
                    case "image_file":
                        this._emit("imageFileDone", currentContent.image_file, $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f"));
                        break;
                    case "text":
                        this._emit("textDone", currentContent.text, $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f"));
                        break;
                }
            }
            if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, "f")) this._emit("messageDone", event.data);
            $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_messageSnapshot, undefined, "f");
    }
}, $a48f33c45a33e5e8$var$_AssistantStream_handleRunStep = function _AssistantStream_handleRunStep(event) {
    const accumulatedRunStep = $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_accumulateRunStep).call(this, event);
    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot, accumulatedRunStep, "f");
    switch(event.event){
        case "thread.run.step.created":
            this._emit("runStepCreated", event.data);
            break;
        case "thread.run.step.delta":
            const delta = event.data.delta;
            if (delta.step_details && delta.step_details.type == "tool_calls" && delta.step_details.tool_calls && accumulatedRunStep.step_details.type == "tool_calls") {
                for (const toolCall of delta.step_details.tool_calls)if (toolCall.index == $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCallIndex, "f")) this._emit("toolCallDelta", toolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index]);
                else {
                    if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f")) this._emit("toolCallDone", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f"));
                    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCallIndex, toolCall.index, "f");
                    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index], "f");
                    if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f")) this._emit("toolCallCreated", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f"));
                }
            }
            this._emit("runStepDelta", event.data.delta, accumulatedRunStep);
            break;
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
            $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentRunStepSnapshot, undefined, "f");
            const details = event.data.step_details;
            if (details.type == "tool_calls") {
                if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f")) {
                    this._emit("toolCallDone", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f"));
                    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, undefined, "f");
                }
            }
            this._emit("runStepDone", event.data, accumulatedRunStep);
            break;
        case "thread.run.step.in_progress":
            break;
    }
}, $a48f33c45a33e5e8$var$_AssistantStream_handleEvent = function _AssistantStream_handleEvent(event) {
    $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_events, "f").push(event);
    this._emit("event", event);
}, $a48f33c45a33e5e8$var$_AssistantStream_accumulateRunStep = function _AssistantStream_accumulateRunStep(event) {
    switch(event.event){
        case "thread.run.step.created":
            $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
            return event.data;
        case "thread.run.step.delta":
            let snapshot = $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id];
            if (!snapshot) throw Error("Received a RunStepDelta before creation of a snapshot");
            let data = event.data;
            if (data.delta) {
                const accumulated = $a48f33c45a33e5e8$var$AssistantStream.accumulateDelta(snapshot, data.delta);
                $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id] = accumulated;
            }
            return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id];
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
        case "thread.run.step.in_progress":
            $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
            break;
    }
    if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id]) return $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_runStepSnapshots, "f")[event.data.id];
    throw new Error("No snapshot available");
}, $a48f33c45a33e5e8$var$_AssistantStream_accumulateMessage = function _AssistantStream_accumulateMessage(event, snapshot) {
    let newContent = [];
    switch(event.event){
        case "thread.message.created":
            //On creation the snapshot is just the initial message
            return [
                event.data,
                newContent
            ];
        case "thread.message.delta":
            if (!snapshot) throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
            let data = event.data;
            //If this delta does not have content, nothing to process
            if (data.delta.content) {
                for (const contentElement of data.delta.content)if (contentElement.index in snapshot.content) {
                    let currentContent = snapshot.content[contentElement.index];
                    snapshot.content[contentElement.index] = $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_instances, "m", $a48f33c45a33e5e8$var$_AssistantStream_accumulateContent).call(this, contentElement, currentContent);
                } else {
                    snapshot.content[contentElement.index] = contentElement;
                    // This is a new element
                    newContent.push(contentElement);
                }
            }
            return [
                snapshot,
                newContent
            ];
        case "thread.message.in_progress":
        case "thread.message.completed":
        case "thread.message.incomplete":
            //No changes on other thread events
            if (snapshot) return [
                snapshot,
                newContent
            ];
            else throw Error("Received thread message event with no existing snapshot");
    }
    throw Error("Tried to accumulate a non-message event");
}, $a48f33c45a33e5e8$var$_AssistantStream_accumulateContent = function _AssistantStream_accumulateContent(contentElement, currentContent) {
    return $a48f33c45a33e5e8$var$AssistantStream.accumulateDelta(currentContent, contentElement);
}, $a48f33c45a33e5e8$var$_AssistantStream_handleRun = function _AssistantStream_handleRun(event) {
    $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentRunSnapshot, event.data, "f");
    switch(event.event){
        case "thread.run.created":
            break;
        case "thread.run.queued":
            break;
        case "thread.run.in_progress":
            break;
        case "thread.run.requires_action":
        case "thread.run.cancelled":
        case "thread.run.failed":
        case "thread.run.completed":
        case "thread.run.expired":
            $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_finalRun, event.data, "f");
            if ($a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f")) {
                this._emit("toolCallDone", $a48f33c45a33e5e8$var$__classPrivateFieldGet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, "f"));
                $a48f33c45a33e5e8$var$__classPrivateFieldSet(this, $a48f33c45a33e5e8$var$_AssistantStream_currentToolCall, undefined, "f");
            }
            break;
        case "thread.run.cancelling":
            break;
    }
};

});
parcelRequire.register("7hUb7", function(module, exports) {
"use strict";
var $54e5b2ca88ceb90d$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $54e5b2ca88ceb90d$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_connectedPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveConnectedPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveEndPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_errored, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_aborted, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_handleError;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AbstractAssistantStreamRunner = void 0;

var $2CkQ4 = parcelRequire("2CkQ4");
class $54e5b2ca88ceb90d$var$AbstractAssistantStreamRunner {
    constructor(){
        this.controller = new AbortController();
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_connectedPromise.set(this, void 0);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveConnectedPromise.set(this, ()=>{});
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise.set(this, ()=>{});
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise.set(this, void 0);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveEndPromise.set(this, ()=>{});
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise.set(this, ()=>{});
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners.set(this, {});
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended.set(this, false);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_errored.set(this, false);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_aborted.set(this, false);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated.set(this, false);
        $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_handleError.set(this, (error)=>{
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_errored, true, "f");
            if (error instanceof Error && error.name === "AbortError") error = new $2CkQ4.APIUserAbortError();
            if (error instanceof $2CkQ4.APIUserAbortError) {
                $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_aborted, true, "f");
                return this._emit("abort", error);
            }
            if (error instanceof $2CkQ4.OpenAIError) return this._emit("error", error);
            if (error instanceof Error) {
                const openAIError = new $2CkQ4.OpenAIError(error.message);
                // @ts-ignore
                openAIError.cause = error;
                return this._emit("error", openAIError);
            }
            return this._emit("error", new $2CkQ4.OpenAIError(String(error)));
        });
        $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_connectedPromise, new Promise((resolve, reject)=>{
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveConnectedPromise, resolve, "f");
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise, reject, "f");
        }), "f");
        $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise, new Promise((resolve, reject)=>{
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveEndPromise, resolve, "f");
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise, reject, "f");
        }), "f");
        // Don't let these promises cause unhandled rejection errors.
        // we will manually cause an unhandled rejection error later
        // if the user hasn't registered any error listener or called
        // any promise-returning method.
        $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_connectedPromise, "f").catch(()=>{});
        $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise, "f").catch(()=>{});
    }
    _run(executor) {
        // Unfortunately if we call `executor()` immediately we get runtime errors about
        // references to `this` before the `super()` constructor call returns.
        setTimeout(()=>{
            executor().then(()=>{
                // this._emitFinal();
                this._emit("end");
            }, $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_handleError, "f"));
        }, 0);
    }
    _addRun(run) {
        return run;
    }
    _connected() {
        if (this.ended) return;
        $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveConnectedPromise, "f").call(this);
        this._emit("connect");
    }
    get ended() {
        return $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended, "f");
    }
    get errored() {
        return $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_errored, "f");
    }
    get aborted() {
        return $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_aborted, "f");
    }
    abort() {
        this.controller.abort();
    }
    /**
     * Adds the listener function to the end of the listeners array for the event.
     * No checks are made to see if the listener has already been added. Multiple calls passing
     * the same combination of event and listener will result in the listener being added, and
     * called, multiple times.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ on(event, listener) {
        const listeners = $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event] || ($54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event] = []);
        listeners.push({
            listener: listener
        });
        return this;
    }
    /**
     * Removes the specified listener from the listener array for the event.
     * off() will remove, at most, one instance of a listener from the listener array. If any single
     * listener has been added multiple times to the listener array for the specified event, then
     * off() must be called multiple times to remove each instance.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ off(event, listener) {
        const listeners = $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event];
        if (!listeners) return this;
        const index = listeners.findIndex((l)=>l.listener === listener);
        if (index >= 0) listeners.splice(index, 1);
        return this;
    }
    /**
     * Adds a one-time listener function for the event. The next time the event is triggered,
     * this listener is removed and then invoked.
     * @returns this ChatCompletionStream, so that calls can be chained
     */ once(event, listener) {
        const listeners = $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event] || ($54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event] = []);
        listeners.push({
            listener: listener,
            once: true
        });
        return this;
    }
    /**
     * This is similar to `.once()`, but returns a Promise that resolves the next time
     * the event is triggered, instead of calling a listener callback.
     * @returns a Promise that resolves the next time given event is triggered,
     * or rejects if an error is emitted.  (If you request the 'error' event,
     * returns a promise that resolves with the error).
     *
     * Example:
     *
     *   const message = await stream.emitted('message') // rejects if the stream errors
     */ emitted(event) {
        return new Promise((resolve, reject)=>{
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated, true, "f");
            if (event !== "error") this.once("error", reject);
            this.once(event, resolve);
        });
    }
    async done() {
        $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated, true, "f");
        await $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise, "f");
    }
    _emit(event, ...args) {
        // make sure we don't emit any events after end
        if ($54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended, "f")) return;
        if (event === "end") {
            $54e5b2ca88ceb90d$var$__classPrivateFieldSet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended, true, "f");
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveEndPromise, "f").call(this);
        }
        const listeners = $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event];
        if (listeners) {
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners, "f")[event] = listeners.filter((l)=>!l.once);
            listeners.forEach(({ listener: listener })=>listener(...args));
        }
        if (event === "abort") {
            const error = args[0];
            if (!$54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated, "f") && !listeners?.length) Promise.reject(error);
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise, "f").call(this, error);
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise, "f").call(this, error);
            this._emit("end");
            return;
        }
        if (event === "error") {
            // NOTE: _emit('error', error) should only be called from #handleError().
            const error = args[0];
            if (!$54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated, "f") && !listeners?.length) // Trigger an unhandled rejection if the user hasn't registered any error handlers.
            // If you are seeing stack traces here, make sure to handle errors via either:
            // - runner.on('error', () => ...)
            // - await runner.done()
            // - await runner.finalChatCompletion()
            // - etc.
            Promise.reject(error);
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise, "f").call(this, error);
            $54e5b2ca88ceb90d$var$__classPrivateFieldGet(this, $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise, "f").call(this, error);
            this._emit("end");
        }
    }
    async _threadAssistantStream(body, thread, options) {
        return await this._createThreadAssistantStream(thread, body, options);
    }
    async _runAssistantStream(threadId, runs, params, options) {
        return await this._createAssistantStream(runs, threadId, params, options);
    }
    async _runToolAssistantStream(threadId, runId, runs, params, options) {
        return await this._createToolAssistantStream(runs, threadId, runId, params, options);
    }
    async _createThreadAssistantStream(thread, body, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        // this.#validateParams(params);
        const runResult = await thread.createAndRun({
            ...body,
            stream: false
        }, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        return this._addRun(runResult);
    }
    async _createToolAssistantStream(run, threadId, runId, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        const runResult = await run.submitToolOutputs(threadId, runId, {
            ...params,
            stream: false
        }, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        return this._addRun(runResult);
    }
    async _createAssistantStream(run, threadId, params, options) {
        const signal = options?.signal;
        if (signal) {
            if (signal.aborted) this.controller.abort();
            signal.addEventListener("abort", ()=>this.controller.abort());
        }
        // this.#validateParams(params);
        const runResult = await run.create(threadId, {
            ...params,
            stream: false
        }, {
            ...options,
            signal: this.controller.signal
        });
        this._connected();
        return this._addRun(runResult);
    }
}
module.exports.AbstractAssistantStreamRunner = $54e5b2ca88ceb90d$var$AbstractAssistantStreamRunner;
$54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_connectedPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveConnectedPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectConnectedPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_endPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_resolveEndPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_rejectEndPromise = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_listeners = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_ended = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_errored = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_aborted = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_catchingPromiseCreated = new WeakMap(), $54e5b2ca88ceb90d$var$_AbstractAssistantStreamRunner_handleError = new WeakMap();

});


parcelRequire.register("ehgwy", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $a64f78881464266b$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $a64f78881464266b$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $a64f78881464266b$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $a64f78881464266b$var$__createBinding(result, mod, k);
    }
    $a64f78881464266b$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.MessagesPage = module.exports.Messages = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $a64f78881464266b$var$MessagesAPI = $a64f78881464266b$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $a64f78881464266b$var$Messages extends $67bwB.APIResource {
    /**
     * Create a message.
     */ create(threadId, body, options) {
        return this._client.post(`/threads/${threadId}/messages`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieve a message.
     */ retrieve(threadId, messageId, options) {
        return this._client.get(`/threads/${threadId}/messages/${messageId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Modifies a message.
     */ update(threadId, messageId, body, options) {
        return this._client.post(`/threads/${threadId}/messages/${messageId}`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(threadId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list(threadId, {}, query);
        return this._client.getAPIList(`/threads/${threadId}/messages`, $a64f78881464266b$var$MessagesPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Deletes a message.
     */ del(threadId, messageId, options) {
        return this._client.delete(`/threads/${threadId}/messages/${messageId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
}
module.exports.Messages = $a64f78881464266b$var$Messages;
class $a64f78881464266b$var$MessagesPage extends $77nbt.CursorPage {
}
module.exports.MessagesPage = $a64f78881464266b$var$MessagesPage;
(function(Messages) {
    Messages.MessagesPage = $a64f78881464266b$var$MessagesAPI.MessagesPage;
})($a64f78881464266b$var$Messages = module.exports.Messages || (module.exports.Messages = {}));

});

parcelRequire.register("lbrmo", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $f6bfd938d2db19ec$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $f6bfd938d2db19ec$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f6bfd938d2db19ec$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $f6bfd938d2db19ec$var$__createBinding(result, mod, k);
    }
    $f6bfd938d2db19ec$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.RunsPage = module.exports.Runs = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

var $e7WDp = parcelRequire("e7WDp");

var $8peXx = parcelRequire("8peXx");

const $f6bfd938d2db19ec$var$RunsAPI = $f6bfd938d2db19ec$var$__importStar(module.exports);

const $f6bfd938d2db19ec$var$StepsAPI = $f6bfd938d2db19ec$var$__importStar((parcelRequire("7nUe9")));

var $77nbt = parcelRequire("77nbt");
class $f6bfd938d2db19ec$var$Runs extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.steps = new $f6bfd938d2db19ec$var$StepsAPI.Steps(this._client);
    }
    create(threadId, body, options) {
        return this._client.post(`/threads/${threadId}/runs`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            },
            stream: body.stream ?? false
        });
    }
    /**
     * Retrieves a run.
     */ retrieve(threadId, runId, options) {
        return this._client.get(`/threads/${threadId}/runs/${runId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Modifies a run.
     */ update(threadId, runId, body, options) {
        return this._client.post(`/threads/${threadId}/runs/${runId}`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(threadId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list(threadId, {}, query);
        return this._client.getAPIList(`/threads/${threadId}/runs`, $f6bfd938d2db19ec$var$RunsPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Cancels a run that is `in_progress`.
     */ cancel(threadId, runId, options) {
        return this._client.post(`/threads/${threadId}/runs/${runId}/cancel`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * A helper to create a run an poll for a terminal state. More information on Run
     * lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */ async createAndPoll(threadId, body, options) {
        const run = await this.create(threadId, body, options);
        return await this.poll(threadId, run.id, options);
    }
    /**
     * Create a Run stream
     *
     * @deprecated use `stream` instead
     */ createAndStream(threadId, body, options) {
        return $e7WDp.AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
    }
    /**
     * A helper to poll a run status until it reaches a terminal state. More
     * information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */ async poll(threadId, runId, options) {
        const headers = {
            ...options?.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        if (options?.pollIntervalMs) headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
        while(true){
            const { data: run, response: response } = await this.retrieve(threadId, runId, {
                ...options,
                headers: {
                    ...options?.headers,
                    ...headers
                }
            }).withResponse();
            switch(run.status){
                //If we are in any sort of intermediate state we poll
                case "queued":
                case "in_progress":
                case "cancelling":
                    let sleepInterval = 5000;
                    if (options?.pollIntervalMs) sleepInterval = options.pollIntervalMs;
                    else {
                        const headerInterval = response.headers.get("openai-poll-after-ms");
                        if (headerInterval) {
                            const headerIntervalMs = parseInt(headerInterval);
                            if (!isNaN(headerIntervalMs)) sleepInterval = headerIntervalMs;
                        }
                    }
                    await (0, $8peXx.sleep)(sleepInterval);
                    break;
                //We return the run in any terminal state.
                case "requires_action":
                case "incomplete":
                case "cancelled":
                case "completed":
                case "failed":
                case "expired":
                    return run;
            }
        }
    }
    /**
     * Create a Run stream
     */ stream(threadId, body, options) {
        return $e7WDp.AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
    }
    submitToolOutputs(threadId, runId, body, options) {
        return this._client.post(`/threads/${threadId}/runs/${runId}/submit_tool_outputs`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            },
            stream: body.stream ?? false
        });
    }
    /**
     * A helper to submit a tool output to a run and poll for a terminal run state.
     * More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */ async submitToolOutputsAndPoll(threadId, runId, body, options) {
        const run = await this.submitToolOutputs(threadId, runId, body, options);
        return await this.poll(threadId, run.id, options);
    }
    /**
     * Submit the tool outputs from a previous run and stream the run to a terminal
     * state. More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */ submitToolOutputsStream(threadId, runId, body, options) {
        return $e7WDp.AssistantStream.createToolAssistantStream(threadId, runId, this._client.beta.threads.runs, body, options);
    }
}
module.exports.Runs = $f6bfd938d2db19ec$var$Runs;
class $f6bfd938d2db19ec$var$RunsPage extends $77nbt.CursorPage {
}
module.exports.RunsPage = $f6bfd938d2db19ec$var$RunsPage;
(function(Runs) {
    Runs.RunsPage = $f6bfd938d2db19ec$var$RunsAPI.RunsPage;
    Runs.Steps = $f6bfd938d2db19ec$var$StepsAPI.Steps;
    Runs.RunStepsPage = $f6bfd938d2db19ec$var$StepsAPI.RunStepsPage;
})($f6bfd938d2db19ec$var$Runs = module.exports.Runs || (module.exports.Runs = {}));

});
parcelRequire.register("7nUe9", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $016332c6009daf86$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $016332c6009daf86$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $016332c6009daf86$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $016332c6009daf86$var$__createBinding(result, mod, k);
    }
    $016332c6009daf86$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.RunStepsPage = module.exports.Steps = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $016332c6009daf86$var$StepsAPI = $016332c6009daf86$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $016332c6009daf86$var$Steps extends $67bwB.APIResource {
    /**
     * Retrieves a run step.
     */ retrieve(threadId, runId, stepId, options) {
        return this._client.get(`/threads/${threadId}/runs/${runId}/steps/${stepId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(threadId, runId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list(threadId, runId, {}, query);
        return this._client.getAPIList(`/threads/${threadId}/runs/${runId}/steps`, $016332c6009daf86$var$RunStepsPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
}
module.exports.Steps = $016332c6009daf86$var$Steps;
class $016332c6009daf86$var$RunStepsPage extends $77nbt.CursorPage {
}
module.exports.RunStepsPage = $016332c6009daf86$var$RunStepsPage;
(function(Steps) {
    Steps.RunStepsPage = $016332c6009daf86$var$StepsAPI.RunStepsPage;
})($016332c6009daf86$var$Steps = module.exports.Steps || (module.exports.Steps = {}));

});



parcelRequire.register("hfLee", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $c8f878fe9a4f8765$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $c8f878fe9a4f8765$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $c8f878fe9a4f8765$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $c8f878fe9a4f8765$var$__createBinding(result, mod, k);
    }
    $c8f878fe9a4f8765$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.VectorStoresPage = module.exports.VectorStores = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $c8f878fe9a4f8765$var$VectorStoresAPI = $c8f878fe9a4f8765$var$__importStar(module.exports);

const $c8f878fe9a4f8765$var$FileBatchesAPI = $c8f878fe9a4f8765$var$__importStar((parcelRequire("eUz1B")));

const $c8f878fe9a4f8765$var$FilesAPI = $c8f878fe9a4f8765$var$__importStar((parcelRequire("9HYdD")));

var $77nbt = parcelRequire("77nbt");
class $c8f878fe9a4f8765$var$VectorStores extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.files = new $c8f878fe9a4f8765$var$FilesAPI.Files(this._client);
        this.fileBatches = new $c8f878fe9a4f8765$var$FileBatchesAPI.FileBatches(this._client);
    }
    /**
     * Create a vector store.
     */ create(body, options) {
        return this._client.post("/vector_stores", {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieves a vector store.
     */ retrieve(vectorStoreId, options) {
        return this._client.get(`/vector_stores/${vectorStoreId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Modifies a vector store.
     */ update(vectorStoreId, body, options) {
        return this._client.post(`/vector_stores/${vectorStoreId}`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list({}, query);
        return this._client.getAPIList("/vector_stores", $c8f878fe9a4f8765$var$VectorStoresPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Delete a vector store.
     */ del(vectorStoreId, options) {
        return this._client.delete(`/vector_stores/${vectorStoreId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
}
module.exports.VectorStores = $c8f878fe9a4f8765$var$VectorStores;
class $c8f878fe9a4f8765$var$VectorStoresPage extends $77nbt.CursorPage {
}
module.exports.VectorStoresPage = $c8f878fe9a4f8765$var$VectorStoresPage;
(function(VectorStores) {
    VectorStores.VectorStoresPage = $c8f878fe9a4f8765$var$VectorStoresAPI.VectorStoresPage;
    VectorStores.Files = $c8f878fe9a4f8765$var$FilesAPI.Files;
    VectorStores.VectorStoreFilesPage = $c8f878fe9a4f8765$var$FilesAPI.VectorStoreFilesPage;
    VectorStores.FileBatches = $c8f878fe9a4f8765$var$FileBatchesAPI.FileBatches;
})($c8f878fe9a4f8765$var$VectorStores = module.exports.VectorStores || (module.exports.VectorStores = {}));

});
parcelRequire.register("eUz1B", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.VectorStoreFilesPage = module.exports.FileBatches = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

var $8peXx = parcelRequire("8peXx");

var $ksi7D = parcelRequire("ksi7D");

var $9HYdD = parcelRequire("9HYdD");
Object.defineProperty(module.exports, "VectorStoreFilesPage", {
    enumerable: true,
    get: function() {
        return $9HYdD.VectorStoreFilesPage;
    }
});
class $adb176df5a0368b1$var$FileBatches extends $67bwB.APIResource {
    /**
     * Create a vector store file batch.
     */ create(vectorStoreId, body, options) {
        return this._client.post(`/vector_stores/${vectorStoreId}/file_batches`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieves a vector store file batch.
     */ retrieve(vectorStoreId, batchId, options) {
        return this._client.get(`/vector_stores/${vectorStoreId}/file_batches/${batchId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Cancel a vector store file batch. This attempts to cancel the processing of
     * files in this batch as soon as possible.
     */ cancel(vectorStoreId, batchId, options) {
        return this._client.post(`/vector_stores/${vectorStoreId}/file_batches/${batchId}/cancel`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Create a vector store batch and poll until all files have been processed.
     */ async createAndPoll(vectorStoreId, body, options) {
        const batch = await this.create(vectorStoreId, body);
        return await this.poll(vectorStoreId, batch.id, options);
    }
    listFiles(vectorStoreId, batchId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.listFiles(vectorStoreId, batchId, {}, query);
        return this._client.getAPIList(`/vector_stores/${vectorStoreId}/file_batches/${batchId}/files`, $9HYdD.VectorStoreFilesPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Wait for the given file batch to be processed.
     *
     * Note: this will return even if one of the files failed to process, you need to
     * check batch.file_counts.failed_count to handle this case.
     */ async poll(vectorStoreId, batchId, options) {
        const headers = {
            ...options?.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        if (options?.pollIntervalMs) headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
        while(true){
            const { data: batch, response: response } = await this.retrieve(vectorStoreId, batchId, {
                ...options,
                headers: headers
            }).withResponse();
            switch(batch.status){
                case "in_progress":
                    let sleepInterval = 5000;
                    if (options?.pollIntervalMs) sleepInterval = options.pollIntervalMs;
                    else {
                        const headerInterval = response.headers.get("openai-poll-after-ms");
                        if (headerInterval) {
                            const headerIntervalMs = parseInt(headerInterval);
                            if (!isNaN(headerIntervalMs)) sleepInterval = headerIntervalMs;
                        }
                    }
                    await (0, $8peXx.sleep)(sleepInterval);
                    break;
                case "failed":
                case "cancelled":
                case "completed":
                    return batch;
            }
        }
    }
    /**
     * Uploads the given files concurrently and then creates a vector store file batch.
     *
     * The concurrency limit is configurable using the `maxConcurrency` parameter.
     */ async uploadAndPoll(vectorStoreId, { files: files, fileIds: fileIds = [] }, options) {
        if (files === null || files.length == 0) throw new Error("No files provided to process.");
        const configuredConcurrency = options?.maxConcurrency ?? 5;
        //We cap the number of workers at the number of files (so we don't start any unnecessary workers)
        const concurrencyLimit = Math.min(configuredConcurrency, files.length);
        const client = this._client;
        const fileIterator = files.values();
        const allFileIds = [
            ...fileIds
        ];
        //This code is based on this design. The libraries don't accommodate our environment limits.
        // https://stackoverflow.com/questions/40639432/what-is-the-best-way-to-limit-concurrency-when-using-es6s-promise-all
        async function processFiles(iterator) {
            for (let item of iterator){
                const fileObj = await client.files.create({
                    file: item,
                    purpose: "assistants"
                }, options);
                allFileIds.push(fileObj.id);
            }
        }
        //Start workers to process results
        const workers = Array(concurrencyLimit).fill(fileIterator).map(processFiles);
        //Wait for all processing to complete.
        await (0, $ksi7D.allSettledWithThrow)(workers);
        return await this.createAndPoll(vectorStoreId, {
            file_ids: allFileIds
        });
    }
}
module.exports.FileBatches = $adb176df5a0368b1$var$FileBatches;
$adb176df5a0368b1$var$FileBatches = module.exports.FileBatches || (module.exports.FileBatches = {});

});
parcelRequire.register("ksi7D", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.allSettledWithThrow = void 0;
/**
 * Like `Promise.allSettled()` but throws an error if any promises are rejected.
 */ const $ee447ad80261646c$var$allSettledWithThrow = async (promises)=>{
    const results = await Promise.allSettled(promises);
    const rejected = results.filter((result)=>result.status === "rejected");
    if (rejected.length) {
        for (const result of rejected)console.error(result.reason);
        throw new Error(`${rejected.length} promise(s) failed - see the above errors`);
    }
    // Note: TS was complaining about using `.filter().map()` here for some reason
    const values = [];
    for (const result of results)if (result.status === "fulfilled") values.push(result.value);
    return values;
};
module.exports.allSettledWithThrow = $ee447ad80261646c$var$allSettledWithThrow;

});

parcelRequire.register("9HYdD", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $7116d76c8d7ee1f9$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $7116d76c8d7ee1f9$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $7116d76c8d7ee1f9$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $7116d76c8d7ee1f9$var$__createBinding(result, mod, k);
    }
    $7116d76c8d7ee1f9$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.VectorStoreFilesPage = module.exports.Files = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

var $8peXx = parcelRequire("8peXx");

const $7116d76c8d7ee1f9$var$FilesAPI = $7116d76c8d7ee1f9$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $7116d76c8d7ee1f9$var$Files extends $67bwB.APIResource {
    /**
     * Create a vector store file by attaching a
     * [File](https://platform.openai.com/docs/api-reference/files) to a
     * [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object).
     */ create(vectorStoreId, body, options) {
        return this._client.post(`/vector_stores/${vectorStoreId}/files`, {
            body: body,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Retrieves a vector store file.
     */ retrieve(vectorStoreId, fileId, options) {
        return this._client.get(`/vector_stores/${vectorStoreId}/files/${fileId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    list(vectorStoreId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list(vectorStoreId, {}, query);
        return this._client.getAPIList(`/vector_stores/${vectorStoreId}/files`, $7116d76c8d7ee1f9$var$VectorStoreFilesPage, {
            query: query,
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Delete a vector store file. This will remove the file from the vector store but
     * the file itself will not be deleted. To delete the file, use the
     * [delete file](https://platform.openai.com/docs/api-reference/files/delete)
     * endpoint.
     */ del(vectorStoreId, fileId, options) {
        return this._client.delete(`/vector_stores/${vectorStoreId}/files/${fileId}`, {
            ...options,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...options?.headers
            }
        });
    }
    /**
     * Attach a file to the given vector store and wait for it to be processed.
     */ async createAndPoll(vectorStoreId, body, options) {
        const file = await this.create(vectorStoreId, body, options);
        return await this.poll(vectorStoreId, file.id, options);
    }
    /**
     * Wait for the vector store file to finish processing.
     *
     * Note: this will return even if the file failed to process, you need to check
     * file.last_error and file.status to handle these cases
     */ async poll(vectorStoreId, fileId, options) {
        const headers = {
            ...options?.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        if (options?.pollIntervalMs) headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
        while(true){
            const fileResponse = await this.retrieve(vectorStoreId, fileId, {
                ...options,
                headers: headers
            }).withResponse();
            const file = fileResponse.data;
            switch(file.status){
                case "in_progress":
                    let sleepInterval = 5000;
                    if (options?.pollIntervalMs) sleepInterval = options.pollIntervalMs;
                    else {
                        const headerInterval = fileResponse.response.headers.get("openai-poll-after-ms");
                        if (headerInterval) {
                            const headerIntervalMs = parseInt(headerInterval);
                            if (!isNaN(headerIntervalMs)) sleepInterval = headerIntervalMs;
                        }
                    }
                    await (0, $8peXx.sleep)(sleepInterval);
                    break;
                case "failed":
                case "completed":
                    return file;
            }
        }
    }
    /**
     * Upload a file to the `files` API and then attach it to the given vector store.
     *
     * Note the file will be asynchronously processed (you can use the alternative
     * polling helper method to wait for processing to complete).
     */ async upload(vectorStoreId, file, options) {
        const fileInfo = await this._client.files.create({
            file: file,
            purpose: "assistants"
        }, options);
        return this.create(vectorStoreId, {
            file_id: fileInfo.id
        }, options);
    }
    /**
     * Add a file to a vector store and poll until processing is complete.
     */ async uploadAndPoll(vectorStoreId, file, options) {
        const fileInfo = await this.upload(vectorStoreId, file, options);
        return await this.poll(vectorStoreId, fileInfo.id, options);
    }
}
module.exports.Files = $7116d76c8d7ee1f9$var$Files;
class $7116d76c8d7ee1f9$var$VectorStoreFilesPage extends $77nbt.CursorPage {
}
module.exports.VectorStoreFilesPage = $7116d76c8d7ee1f9$var$VectorStoreFilesPage;
(function(Files) {
    Files.VectorStoreFilesPage = $7116d76c8d7ee1f9$var$FilesAPI.VectorStoreFilesPage;
})($7116d76c8d7ee1f9$var$Files = module.exports.Files || (module.exports.Files = {}));

});




parcelRequire.register("3y613", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Completions = void 0;

var $67bwB = parcelRequire("67bwB");
class $295936bffdd33512$var$Completions extends $67bwB.APIResource {
    create(body, options) {
        return this._client.post("/completions", {
            body: body,
            ...options,
            stream: body.stream ?? false
        });
    }
}
module.exports.Completions = $295936bffdd33512$var$Completions;
$295936bffdd33512$var$Completions = module.exports.Completions || (module.exports.Completions = {});

});

parcelRequire.register("4biaG", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Embeddings = void 0;

var $67bwB = parcelRequire("67bwB");
class $30b648f8e4bc2d8d$var$Embeddings extends $67bwB.APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */ create(body, options) {
        return this._client.post("/embeddings", {
            body: body,
            ...options
        });
    }
}
module.exports.Embeddings = $30b648f8e4bc2d8d$var$Embeddings;
$30b648f8e4bc2d8d$var$Embeddings = module.exports.Embeddings || (module.exports.Embeddings = {});

});

parcelRequire.register("dq3zV", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $9c507aaa5afc28b9$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $9c507aaa5afc28b9$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $9c507aaa5afc28b9$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $9c507aaa5afc28b9$var$__createBinding(result, mod, k);
    }
    $9c507aaa5afc28b9$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FileObjectsPage = module.exports.Files = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

var $8peXx = parcelRequire("8peXx");

var $2CkQ4 = parcelRequire("2CkQ4");

const $9c507aaa5afc28b9$var$FilesAPI = $9c507aaa5afc28b9$var$__importStar(module.exports);

var $8peXx = parcelRequire("8peXx");

var $77nbt = parcelRequire("77nbt");
class $9c507aaa5afc28b9$var$Files extends $67bwB.APIResource {
    /**
     * Upload a file that can be used across various endpoints. Individual files can be
     * up to 512 MB, and the size of all files uploaded by one organization can be up
     * to 100 GB.
     *
     * The Assistants API supports files up to 2 million tokens and of specific file
     * types. See the
     * [Assistants Tools guide](https://platform.openai.com/docs/assistants/tools) for
     * details.
     *
     * The Fine-tuning API only supports `.jsonl` files.
     *
     * The Batch API only supports `.jsonl` files up to 100 MB in size.
     *
     * Please [contact us](https://help.openai.com/) if you need to increase these
     * storage limits.
     */ create(body, options) {
        return this._client.post("/files", (0, $8peXx.multipartFormRequestOptions)({
            body: body,
            ...options
        }));
    }
    /**
     * Returns information about a specific file.
     */ retrieve(fileId, options) {
        return this._client.get(`/files/${fileId}`, options);
    }
    list(query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list({}, query);
        return this._client.getAPIList("/files", $9c507aaa5afc28b9$var$FileObjectsPage, {
            query: query,
            ...options
        });
    }
    /**
     * Delete a file.
     */ del(fileId, options) {
        return this._client.delete(`/files/${fileId}`, options);
    }
    /**
     * Returns the contents of the specified file.
     */ content(fileId, options) {
        return this._client.get(`/files/${fileId}/content`, {
            ...options,
            __binaryResponse: true
        });
    }
    /**
     * Returns the contents of the specified file.
     *
     * @deprecated The `.content()` method should be used instead
     */ retrieveContent(fileId, options) {
        return this._client.get(`/files/${fileId}/content`, {
            ...options,
            headers: {
                Accept: "application/json",
                ...options?.headers
            }
        });
    }
    /**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */ async waitForProcessing(id, { pollInterval: pollInterval = 5000, maxWait: maxWait = 1800000 } = {}) {
        const TERMINAL_STATES = new Set([
            "processed",
            "error",
            "deleted"
        ]);
        const start = Date.now();
        let file = await this.retrieve(id);
        while(!file.status || !TERMINAL_STATES.has(file.status)){
            await (0, $8peXx.sleep)(pollInterval);
            file = await this.retrieve(id);
            if (Date.now() - start > maxWait) throw new $2CkQ4.APIConnectionTimeoutError({
                message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`
            });
        }
        return file;
    }
}
module.exports.Files = $9c507aaa5afc28b9$var$Files;
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */ class $9c507aaa5afc28b9$var$FileObjectsPage extends $77nbt.Page {
}
module.exports.FileObjectsPage = $9c507aaa5afc28b9$var$FileObjectsPage;
(function(Files) {
    Files.FileObjectsPage = $9c507aaa5afc28b9$var$FilesAPI.FileObjectsPage;
})($9c507aaa5afc28b9$var$Files = module.exports.Files || (module.exports.Files = {}));

});

parcelRequire.register("84FLp", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $5e0f17d2382c3a13$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $5e0f17d2382c3a13$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $5e0f17d2382c3a13$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $5e0f17d2382c3a13$var$__createBinding(result, mod, k);
    }
    $5e0f17d2382c3a13$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FineTuning = void 0;

var $67bwB = parcelRequire("67bwB");

const $5e0f17d2382c3a13$var$JobsAPI = $5e0f17d2382c3a13$var$__importStar((parcelRequire("7LPws")));
class $5e0f17d2382c3a13$var$FineTuning extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.jobs = new $5e0f17d2382c3a13$var$JobsAPI.Jobs(this._client);
    }
}
module.exports.FineTuning = $5e0f17d2382c3a13$var$FineTuning;
(function(FineTuning) {
    FineTuning.Jobs = $5e0f17d2382c3a13$var$JobsAPI.Jobs;
    FineTuning.FineTuningJobsPage = $5e0f17d2382c3a13$var$JobsAPI.FineTuningJobsPage;
    FineTuning.FineTuningJobEventsPage = $5e0f17d2382c3a13$var$JobsAPI.FineTuningJobEventsPage;
})($5e0f17d2382c3a13$var$FineTuning = module.exports.FineTuning || (module.exports.FineTuning = {}));

});
parcelRequire.register("7LPws", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $5a84e379df442af3$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $5a84e379df442af3$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $5a84e379df442af3$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $5a84e379df442af3$var$__createBinding(result, mod, k);
    }
    $5a84e379df442af3$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FineTuningJobEventsPage = module.exports.FineTuningJobsPage = module.exports.Jobs = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $5a84e379df442af3$var$JobsAPI = $5a84e379df442af3$var$__importStar(module.exports);

const $5a84e379df442af3$var$CheckpointsAPI = $5a84e379df442af3$var$__importStar((parcelRequire("au1ea")));

var $77nbt = parcelRequire("77nbt");
class $5a84e379df442af3$var$Jobs extends $67bwB.APIResource {
    constructor(){
        super(...arguments);
        this.checkpoints = new $5a84e379df442af3$var$CheckpointsAPI.Checkpoints(this._client);
    }
    /**
     * Creates a fine-tuning job which begins the process of creating a new model from
     * a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */ create(body, options) {
        return this._client.post("/fine_tuning/jobs", {
            body: body,
            ...options
        });
    }
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */ retrieve(fineTuningJobId, options) {
        return this._client.get(`/fine_tuning/jobs/${fineTuningJobId}`, options);
    }
    list(query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list({}, query);
        return this._client.getAPIList("/fine_tuning/jobs", $5a84e379df442af3$var$FineTuningJobsPage, {
            query: query,
            ...options
        });
    }
    /**
     * Immediately cancel a fine-tune job.
     */ cancel(fineTuningJobId, options) {
        return this._client.post(`/fine_tuning/jobs/${fineTuningJobId}/cancel`, options);
    }
    listEvents(fineTuningJobId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.listEvents(fineTuningJobId, {}, query);
        return this._client.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/events`, $5a84e379df442af3$var$FineTuningJobEventsPage, {
            query: query,
            ...options
        });
    }
}
module.exports.Jobs = $5a84e379df442af3$var$Jobs;
class $5a84e379df442af3$var$FineTuningJobsPage extends $77nbt.CursorPage {
}
module.exports.FineTuningJobsPage = $5a84e379df442af3$var$FineTuningJobsPage;
class $5a84e379df442af3$var$FineTuningJobEventsPage extends $77nbt.CursorPage {
}
module.exports.FineTuningJobEventsPage = $5a84e379df442af3$var$FineTuningJobEventsPage;
(function(Jobs) {
    Jobs.FineTuningJobsPage = $5a84e379df442af3$var$JobsAPI.FineTuningJobsPage;
    Jobs.FineTuningJobEventsPage = $5a84e379df442af3$var$JobsAPI.FineTuningJobEventsPage;
    Jobs.Checkpoints = $5a84e379df442af3$var$CheckpointsAPI.Checkpoints;
    Jobs.FineTuningJobCheckpointsPage = $5a84e379df442af3$var$CheckpointsAPI.FineTuningJobCheckpointsPage;
})($5a84e379df442af3$var$Jobs = module.exports.Jobs || (module.exports.Jobs = {}));

});
parcelRequire.register("au1ea", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $7a1da8773463b6ba$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $7a1da8773463b6ba$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $7a1da8773463b6ba$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $7a1da8773463b6ba$var$__createBinding(result, mod, k);
    }
    $7a1da8773463b6ba$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FineTuningJobCheckpointsPage = module.exports.Checkpoints = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");

const $7a1da8773463b6ba$var$CheckpointsAPI = $7a1da8773463b6ba$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $7a1da8773463b6ba$var$Checkpoints extends $67bwB.APIResource {
    list(fineTuningJobId, query = {}, options) {
        if ((0, $8peXx.isRequestOptions)(query)) return this.list(fineTuningJobId, {}, query);
        return this._client.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/checkpoints`, $7a1da8773463b6ba$var$FineTuningJobCheckpointsPage, {
            query: query,
            ...options
        });
    }
}
module.exports.Checkpoints = $7a1da8773463b6ba$var$Checkpoints;
class $7a1da8773463b6ba$var$FineTuningJobCheckpointsPage extends $77nbt.CursorPage {
}
module.exports.FineTuningJobCheckpointsPage = $7a1da8773463b6ba$var$FineTuningJobCheckpointsPage;
(function(Checkpoints) {
    Checkpoints.FineTuningJobCheckpointsPage = $7a1da8773463b6ba$var$CheckpointsAPI.FineTuningJobCheckpointsPage;
})($7a1da8773463b6ba$var$Checkpoints = module.exports.Checkpoints || (module.exports.Checkpoints = {}));

});



parcelRequire.register("lklpD", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Images = void 0;

var $67bwB = parcelRequire("67bwB");

var $8peXx = parcelRequire("8peXx");
class $f86c134afc0de27f$var$Images extends $67bwB.APIResource {
    /**
     * Creates a variation of a given image.
     */ createVariation(body, options) {
        return this._client.post("/images/variations", (0, $8peXx.multipartFormRequestOptions)({
            body: body,
            ...options
        }));
    }
    /**
     * Creates an edited or extended image given an original image and a prompt.
     */ edit(body, options) {
        return this._client.post("/images/edits", (0, $8peXx.multipartFormRequestOptions)({
            body: body,
            ...options
        }));
    }
    /**
     * Creates an image given a prompt.
     */ generate(body, options) {
        return this._client.post("/images/generations", {
            body: body,
            ...options
        });
    }
}
module.exports.Images = $f86c134afc0de27f$var$Images;
$f86c134afc0de27f$var$Images = module.exports.Images || (module.exports.Images = {});

});

parcelRequire.register("cwYZ0", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var $91f7c72012c259b6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $91f7c72012c259b6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $91f7c72012c259b6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $91f7c72012c259b6$var$__createBinding(result, mod, k);
    }
    $91f7c72012c259b6$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ModelsPage = module.exports.Models = void 0;

var $67bwB = parcelRequire("67bwB");

const $91f7c72012c259b6$var$ModelsAPI = $91f7c72012c259b6$var$__importStar(module.exports);

var $77nbt = parcelRequire("77nbt");
class $91f7c72012c259b6$var$Models extends $67bwB.APIResource {
    /**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */ retrieve(model, options) {
        return this._client.get(`/models/${model}`, options);
    }
    /**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */ list(options) {
        return this._client.getAPIList("/models", $91f7c72012c259b6$var$ModelsPage, options);
    }
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */ del(model, options) {
        return this._client.delete(`/models/${model}`, options);
    }
}
module.exports.Models = $91f7c72012c259b6$var$Models;
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */ class $91f7c72012c259b6$var$ModelsPage extends $77nbt.Page {
}
module.exports.ModelsPage = $91f7c72012c259b6$var$ModelsPage;
(function(Models) {
    Models.ModelsPage = $91f7c72012c259b6$var$ModelsAPI.ModelsPage;
})($91f7c72012c259b6$var$Models = module.exports.Models || (module.exports.Models = {}));

});

parcelRequire.register("iaper", function(module, exports) {
"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Moderations = void 0;

var $67bwB = parcelRequire("67bwB");
class $d39cbbb249ffec00$var$Moderations extends $67bwB.APIResource {
    /**
     * Classifies if text is potentially harmful.
     */ create(body, options) {
        return this._client.post("/moderations", {
            body: body,
            ...options
        });
    }
}
module.exports.Moderations = $d39cbbb249ffec00$var$Moderations;
$d39cbbb249ffec00$var$Moderations = module.exports.Moderations || (module.exports.Moderations = {});

});




$parcel$export(module.exports, "handler", () => $d2d350681eba934f$export$c3c52e219617878);

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
        name: person.data().name,
        previous_names: [
            person.data().name,
            ...person.data().previous_names
        ],
        update_time: person.data().update_time,
        timestamp: person.data().timestamp
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


const $54edb487244bebe6$export$16a2e1e060ed5bd7 = async (secretName, client)=>{
    const response = await client.accessSecretVersion({
        name: `projects/${process.env.GCP_PROJECT}/secrets/${secretName}/versions/latest`
    });
    const [version] = response;
    const secretPayload = version.payload?.data?.toString();
    return secretPayload;
};


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



var $5xUcU = parcelRequire("5xUcU");

const $d2d350681eba934f$var$adminInstance = (0, ($parcel$interopDefault($7hYnT$firebaseadmin)));
const $d2d350681eba934f$var$secretManagerClient = new (0, $7hYnT$googlecloudsecretmanager.SecretManagerServiceClient)();
const $d2d350681eba934f$var$RETRY_TIMES = 3;
const $d2d350681eba934f$export$c3c52e219617878 = async (req, res)=>{
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.set("Access-Control-Max-Age", "3600");
        res.status(204).send("");
        return;
    }
    try {
        const userPrompt = req.body;
        // Generate the system prompt to guide the OpenAI API
        const systemPrompt = `
            You're an api assitant. 
            
            You need to convert user querys into data. 
            
            The user query should contain a uuid referring to a particular user. If not please return the json {error:'NO_UUID'}. 

            The reponse should allow the user to fetch the data of the user. The person object has the following structure:

            deleted: (boolean)
            name: "Renamed Person 7625" (string)
            previous_names: ["Person 7625"] (array of strings)
            person_id: "3d0ee3a3-1f62-447a-9c3a-44c346a99d99" (string)
            timestamp: "2024-05-21T15:56:50.879203Z" (string)
            update_time: "2024-05-21T18:25:12.444519Z"   

            Please return the following json structure {uuid: 'the uuid you found in the query', property: 'the property you found in the query, e.g. if the user asked for the name, this would be 'name'}

            Please do not return any markdown formatting. I want the raw json object as the result will be parsed with JSON.parse()
        `;
        const openApiKey = await (0, $54edb487244bebe6$export$16a2e1e060ed5bd7)("OPEN_API_KEY", $d2d350681eba934f$var$secretManagerClient);
        const openai = new (0, (/*@__PURE__*/$parcel$interopDefault($5xUcU)))({
            apiKey: openApiKey
        }); // would normally come from google secret manager
        // chat gpt doesn't always return valid json, give it a second try
        for (const tryCount of [
            ...Array($d2d350681eba934f$var$RETRY_TIMES).keys()
        ]){
            console.log(`Try count: ${tryCount}`);
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                model: "gpt-4o"
            });
            const query = chatCompletion.choices[0].message.content;
            if (!query) return res.status(400).send("Could not generate query from the given prompt.");
            const queryJson = JSON.parse(query);
            const uuid = queryJson.uuid;
            const property = queryJson.property;
            const result = await (0, $6723f10ebf982aaa$export$1935eb9cdd85a29d)(uuid, $d2d350681eba934f$var$adminInstance);
            if (!result) return res.status(400).send({
                error: `no matching user found ${uuid}`
            });
            if (!result[property]) return res.status(400).send({
                error: `no matching property found  ${property}`
            });
            return res.status((0, $52899a3cb135ca77$exports.HttpStatus).OK).send({
                queryResult: result[property]
            });
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
        console.error(`Unable to accept request. Unknown error: ${JSON.stringify(e)}`);
        return res.status((0, $52899a3cb135ca77$exports.HttpStatus).INTERNAL_SERVER_ERROR).send({
            error: e.message
        });
    }
};


//# sourceMappingURL=index.js.map
