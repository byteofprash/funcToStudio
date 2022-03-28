# Twilio Function To Studio

This is a Twilio serverless project that will help you to call a twilio studio from a twilio function. 

### 1. Clone the project

```
git clone <this-repo>
```

### 2. Create .env file

Create your own .env file based on the .env.example file

More details on env vars [here](https://www.twilio.com/docs/labs/serverless-toolkit/general-usage#environment-variables)

### 2. To start a local developement envìironment
```
twilio serverless:start
```


### 3. Deploy it to your Twilio environment

```
twilio serverless:deploy
```

### flow.js

The Flow.js takes 3 parameters `fromNumber` `toNumber` and the `flowSID`




