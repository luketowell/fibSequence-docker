const keys = require("./keys");
const redis = require("redis");
const fib = require("./fib");

//create the redis client with the provided connection params
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

//subscribes to the redisclient that has been created above
const sub = redisClient.duplicate();

/*from the subscribe when a new message is received we want to add the
 new value into the redis db with the value and the worked out fib sequence.*/
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib.fib(parseInt(message)));
});

sub.subscribe('insert');