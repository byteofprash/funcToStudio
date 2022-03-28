exports.handler = function(context, event, callback) {
  let client = context.getTwilioClient();
  console.log(client, event, event.toNumber, event.fromNumber)
	client.studio.flows(event.flowSid)
    .executions
    .create({to: event.toNumber, from: event.fromNumber})
    .then((execution) => {
      console.log(execution.sid);
      return callback();
    });
};
