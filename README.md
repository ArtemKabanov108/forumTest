## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# For use...
The route for sending a message::
POST
## http://localhost:7900/massages/send

The route for getting all messages:
GET
## http://localhost:7900/massages/get-messages

Hello, dear user. If you want to use this app, you have to stick to the interface.
for sending message:
##{   
##"name": "Bob",
##"addressed": "John",
##"message": "Hi John!"
##}

for getting all messages for the user:
##{   
##"name": "Bob",
##}

Available users:
John
Bob
Bill

Enjoy it ;)