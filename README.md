# loopback-next-example
In Loopback (2.x/3.x), models were responsible for both accessing data in other systems (databases, SOAP services, etc.) and providing the application's external REST API. This made it easy to quickly build a REST interface for an existing database, but difficult to customize the REST API and fine-tune it to the needs of application clients.

LoopBack v4 is moving to the well-known Model-(View-)Controller pattern, where the code responsible for data access and manipulation is separated from the code responsible for implementing the REST API.

In this example the facade uses a set of repositories one corresponding to each of the Account, Customer & Transaction microservice. These repositories are nothing but swagger connectors to the corresponding services running locally on the given ports, defined in swagger configurations of the services. These ports are 3001, 3002 & 3003 for Account, Customer and Transaction services respectively. The services folder is the one where all the services as well facade recides. The services all use the in memory database connector, to connect to the in memory db.

### Download and run the code

**Install loopback-next**
```
$ git clone git@github.com:strongloop/loopback-next
$ cd loopback-next
$ npm i
$ npm i -g lerna
$ lerna bootstrap
$ npm link
```

**Install loopback-next-example**
```
$ cd ..
$ git clone git@github.com:strongloop/loopback-next-example
$ cd loopback-next-example
$ npm i
$ npm link loopback-next
$ bin/start.sh
```

### Make a request to get the account summary screen data, and get account.

```
$ bin/get-account-summary.sh
$ bin/get-account.sh
```

### To stop the facade and all micro-services

```
$ bin/stop.sh
```

### Working

 - The services folder contains 3 microservices which include [account](https://github.com/strongloop/loopback-next-example/tree/master/services/account), [customer](https://github.com/strongloop/loopback-next-example/tree/master/services/customer), [transaction](https://github.com/strongloop/loopback-next-example/tree/master/services/transaction)
 - Loopback-next-example returns the summary of the above 3 entities in form of json.