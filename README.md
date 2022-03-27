## G7 Waiting List & NFT Presale Manager
An easily deployable wait-list for game developers that wish to create and manage player waiting lists or NFT pre-sale lists using web 3.0 technologies.
### G7 Project Specification:

[IEEE 830 System Requirements Specification](https://testdriven.io/blog/flask-and-celery/).

### Technologies:
 - Docker
 - Flask
 - Celery
 - Redis
 - Flower
 - Pandas
 - BeautifulSoup

### Dependencies:
Required to run this program
 - Docker
 - Docker Compose
 - Scraperapi.com account (free)


### Building this project?
_Add Scraperapi.com API KEY to docker-compose file_

**Using the Makefile:** 

 - start (start for the first time)
 - rebuild (apply changes)
 - teardown (tear down project)


**Commandline:**
 - $ docker-compose up -d --build

### Running this project?
**Browser:**

 - Open browser to [http://localhost:5004](http://localhost:5004) to view the app
 - Open browser to [http://localhost:5556](http://localhost:5556) to view the Flower dashboard.


**Commandline:**

Trigger a new task:
 - $ curl http://localhost:5004/tasks -H "Content-Type: application/json" --data '{"topic": "gig"}'


Check the status:
 - $ curl http://localhost:5004/tasks/<TASK_ID>/

**Reports & Logs**
 - reports can be found under reports folder created once you run the app
 - logs can be found in the logs folder in the project directory 

**TODO**
 - complete tests
 - add crawlers for GH search page

