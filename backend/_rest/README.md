# Cloudflare Worker Rest Api

Serverless rest api designed for cloudflare workers

### Inspiration & Attribution

This rest api was inspired by the following [project](https://github.com/rajtatata/cloudflare-worker-rest-api)

### Rest API

The supported methods are POST, GET, DELETE and PUT.  HTTP methods are handled in the routers.

### CORS
Rest api is fully CORS compatible. It works well when used with Cloudflare Pages as well.

### Authentication
All routes are fully secured with no public routes. Authentication uses JYT and is managed in the auth middleware.

