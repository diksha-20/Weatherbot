var restify = require('restify');
var builder = require('botbuilder');
var read = require('jsonfile');
var tolower = require('to-lower-case')
var request = require('request');

var apiKey = '5e58007bc9e74e99fa85a61330beecd5';
var parsedBody;




// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3535, function () {
   console.log('%s listening to %s', server.name, server.url); 
  /* console.log(url);*/
});


// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users +
server.post('/api/messages', connector.listen());


var bot = new builder.UniversalBot(connector);

const LuisModelUrl='  https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/10767e9e-bfae-4aa6-b551-83d67058fc39?subscription-key=7488942c87594eccbf5738afcdd38187&verbose=true&timezoneOffset=0&q=';
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
var intents = new builder.IntentDialog({ recognizers: [recognizer] })


.matches('Weather.GetForecast', function(session,args){
console.log('Weather.GetForecast');
var entity_city = builder.EntityRecognizer.findEntity(args.entities, 'Weather.Location');
console.log(entity_city.entity);
var url='http://api.openweathermap.org/data/2.5/weather?q=' + entity_city.entity + '&appid='  + apiKey+''
/*var url='http://api.openweathermap.org/data/2.5/weather?q=' +entity_city.entity + '&lang=fr&units=metric&appid='''*/
session.send('%s',entity_city.entity);
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
    console.log(url);
  } else {
    

    parsedBody = JSON.parse(body);
    console.log('body:', body.main);

    session.send('It is  %s degrees in %s with %s percent humidity !! The wind speed is %s ',parsedBody.main.temp,entity_city.entity,parsedBody.main.humidity,parsedBody.wind.speed * 3.6);
    session.send('The minimum temperature for %s is %s and the maximum is %s',parsedBody.main.temp_min,entity_city.entity,parsedBody.main.temp_max);

    /*session.send('%s',parsedBody.main.temp);
    session.send('%s',parsedBody.main.humidity);
    session.send('%s',parsedBody.wind.speed * 3.6);*/
  }
});

})


.onDefault((session) => {
    session.send('Please enter some relevant data.');
});

bot.dialog('getWeather',[function(session,results){			
	
},function(session,results){
	session.endDialog();
}
])
bot.dialog('/', intents);





