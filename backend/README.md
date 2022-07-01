# Serverless Rest Api using Cloudflare Workers 

Sample serverless Rest Api using Cloudflare Workers, Fauna DB and Web3 / JWT Authentication. 
This example is a fully distributed architecture that is highly scalable and highly available.

This is a sample back-end that's provided for your convenience. It's optional.

Cloudflare and FaunaDB are free for developers. 

### Inspiration & Attribution
This rest api was inspired by the following [project](https://github.com/rajtatata/cloudflare-worker-example-rest-api)

### Rest API
The supported methods are POST, GET, DELETE and PUT.  HTTP methods are handled in the routers.

### CORS
Rest api is fully CORS compatible. It works well with Cloudflare Pages.

### Authentication
All routes are secured with no public routes. Authentication uses JYT, Web3Tokens and Web3 Signed Messages for authentication. It's managed in the auth middleware and in the auth controller. Here is the auth flow.

![Auth Image](https://imagedelivery.net/ph5-WnG_BHVkS1XMMlyMeg/7bd24f20-98c1-4512-f255-6c7ebf115300/public "Auth Image")

### Project Structure

The project is divided into models, controllers, middlewares and routers in order for it to look like something closer to real world applications.
These are then imported on the `index.js` file and connected with our app.

### Installing and Deploying Cloudflare Worker

1. The first thing you should do is go and [create a Cloudflare Account](https://developers.cloudflare.com/fundamentals/get-started/) if you have not done so
2. Next, create a worker
    - From main CF dashboard page, click `Workers`
    - From workers dashboard page, click `Create a Service`
    - Name your worker, select `HTTP Router` and click `Create Service`
    - Copy your worker name and route for later use *(click on worker name - it's at the top of the page)*
3. Next up we need to setup our machine in order to deploy our build to cloudflare
    - [Click Here](https://developers.cloudflare.com/workers/quickstart/) if you want to follow official setup docs
4. Start by installing wrangler globaly on your system

```
npm i @cloudflare/wrangler -g
```
4. After that, make sure to configure the global user for wrangler
    - Follow on-screen instructions to get your api key
```
wrangler config
Enter API token:
superlongapitoken
```
5. Rename `wrangler.toml.example` to `wrangler.toml`
6. Edit `wrangler.toml` file with the following information
    - fill `account_id` [with your account id](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)
    - fill `zone_id` [with your zone id](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)
    - fill `name` with your worker name we saved earlier
7. Don't forget to install necessary project packages
```
npm install
```
8. Create Dev Env for testing our project with wrangler
    - it will install packages, build, and deploy locally for testing
```
npm run dev
```
9. Publish the project with wrangler
    - it will install packages, build, and deploy to cloudflare
```
npm run publish
```

### Setup Fauna DB
note: this is free, easy and takes <10 min

1. The first thing you should do is go and create a [FaunaDB Account](https://dashboard.fauna.com/accounts/register) if you have not done so
2. Next up we need to setup our database and wire it into our cloudflare worker
    - [Click Here](https://docs.fauna.com/fauna/current/learn/tutorials/) if you want to follow official setup docs
3. After logging in, let's start by creating our database
   - Click `Create Database` from Dashboard
   - Name your database `Waitlist`
   - Select `United States` Region Group
4. Let's create our `Collections`
   - From the `DB Overview` screen *(click on database name from dashboard)*, click on `New Collection`.
   - Name the first collection `Users`. Leave TTL and History alone.
   - Create a second collection called `Waitlist`. Leave TTL and History alone.
5. Let's create an `index`
   - From the `DB Overview` screen *(click on database name from dashboard)*, click on `Indexes`.
   - Click on `New Index`.
   - Select `Users` as your Source Collection
   - Add `user_by_public_address` to the index name field
   - Add `data.public_address` to the terms field
   - Leave `values` field empty
   - Check the `Unique` box
   - Check the `Serialized` box
   - Save
6. Create your credentials
   - From the `DB Overview` screen *(click on database name from dashboard)*, click on `Security`.
   - Click on `New Key`.
   - Select `Waitlist` as your database
   - Select the `Server` Role
   - Name your key
   - Save & Copy your key
7. Store your new key
   - Open your wrangler.toml file and add your `New Key` to `CF_FAUNADB_SECRET`.