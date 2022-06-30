module.exports = Object.freeze({
    COMING_SOON_MESSAGE: "coming soon",

    INTERNAL_SERVER_ERROR_MESSAGE: "the server has encountered an internal server error",
    INTERNAL_SERVER_ERROR_CODE: 500,

    MEDIA_TYPE_ERROR_MESSAGE: "unsupported media type",
    MEDIA_TYPE_ERROR_CODE: 415,

    METHOD_TYPE_ERROR_MESSAGE: "method not allowed",
    METHOD_TYPE_ERROR_CODE: 405,

    FOUND_MESSAGE: "resource was found",
    NOT_FOUND_ERROR_MESSAGE: "resource not found",
    NOT_FOUND_ERROR_CODE: 404,

    FORBIDDEN_ERROR_MESSAGE: "forbidden",
    FORBIDDEN_ERROR_CODE: 403,

    AUTH_ERROR_MESSAGE: "authorization required",
    AUTH_USERNAME_ERROR_MESSAGE: "missing username",
    AUTH_ERROR_CODE: 401,

    GENERAL_ERROR_MESSAGE: "an error has occurred",
    GENERAL_ERROR_CODE: 400,

    CREATE_SUCCESS_MESSAGE: "successfully created",
    CREATE_ERROR_MESSAGE: "not created",
    CREATE_SUCCESS_CODE: 201,

    GENERAL_SUCCESS_MESSAGE: "processed successfully",
    GENERAL_SUCCESS_CODE: 200,

    VERSION_ERROR_MESSAGE: "version not allowed",

    UPDATE_SUCCESS_MESSAGE: "successfully updated",
    UPDATE_ERROR_MESSAGE: "not updated",

    DELETE_SUCCESS_MESSAGE: "successfully deleted",
    DELETE_ERROR_MESSAGE: "not deleted",

    CORS_HEADER: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization, Key, Content-Type, typeform-signature",
      "Access-Control-Allow-Credentials": "true",
    }
});