var restify = require('restify');
var builder = require('botbuilder');
var read = require('jsonfile');
var tolower = require('to-lower-case')
var synonym = require('synonym-js')
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

var contents = read.readFileSync('data_fetch8.0.json');
var StoreLoc;
var StoreResponse;
var StoreResult;
var StoreResult2;
var StoreDesignation;
var StoreSub;
var StoreSkill;
var StoreDes;
var StoreCountry;
var StoreAcc;
var StoreDiv;




// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users +
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
/*var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});*/
function GetValues(session,args, args1){
	//console.log(31)
	var count=0;
	console.log(args1.entity)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('hi')
		for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].Skill[j])==tolower(args)) && (tolower(contents[i].Location)==tolower(args1))) {
							count++;
		}
	}
}
if(count>1)
	{
		session.beginDialog('getDes');	// begin a dialog: getSkill ** Navigate to Line: 173
	}

	else if(count==0){
		    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}
	else{

for(var i=0; i<contents.length;i++){  
		console.log('hey')
		for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].Location)==tolower(args1)) && (tolower(contents[i].Skill[j])==tolower(args))) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',args1,args,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		session.beginDialog('getMessage');
		}
	}
}
	}
}


function GetValuesForSubSkill(session,sub, skill){
	//console.log(31)
	console.log(sub)
	console.log(skill)
	var count=0
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('hi')
		for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Skill[j])==tolower(skill))) {
			count++;
			//session.send('Here are the details you were looking for:  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)				
		
		}
	}
}

if(count>0){
for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('hi')
		for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Skill[j])==tolower(skill))) {
			//count++;
			session.send('Here are the details you were looking for:  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)				
		
		}
	}
}
}
else if(count==0){
		    session.send('We will reach back to you with the information that you are looking for.');
		//session.beginDialog('getMessage');
}
session.beginDialog('getMessage');
}


function GetValuesForSubDes(session,sub, des){
	//console.log(31)
	var count=0;
	console.log(des.entity)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		//console.log('hi')
	if ((tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Designation)==tolower(des))) {
							count++;
		}
	}

if(count>1)
	{
		//session.send('count is high')
		session.beginDialog('getLoc');	// begin a dialog: getSkill ** Navigate to Line: 173
	}
	else{

for(var i=0; i<contents.length;i++){  
		//console.log('hey')
		//console.log(args)
		//console.log(args1)
	if ((tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Designation)==tolower(des))) {
			//session.send('output')
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',des,sub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		
		}
	}
	}
	session.beginDialog('getMessage');
}


function GetValues3(session,args,args1,args2){
	//console.log(31)
	var count=0;
	//console.log(args1.entity)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		//console.log('hi')
	if ((tolower(contents[i].Location)==tolower(args)) && (tolower(contents[i].Designation)==tolower(args1)) && (tolower(contents[i].SubPractice)==tolower(args2))) {
							count++;
		}
	}

if(count>1)
	{
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		//console.log('hi')
	if ((tolower(contents[i].Location)==tolower(args)) && (tolower(contents[i].Designation)==tolower(args1)) && (tolower(contents[i].SubPractice)==tolower(args2))) {
							session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',args1.entity,args,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		
		}
	}session.beginDialog('getMessage');
		//session.send('count is high......')
		//session.beginDialog('getLoc');	// begin a dialog: getSkill ** Navigate to Line: 173
	}
	else{

for(var i=0; i<contents.length;i++){  
		//console.log('hey')
		//console.log(args)
		//console.log(args1)
	if ((tolower(contents[i].Location)==tolower(args)) && (tolower(contents[i].Designation)==tolower(args1)) && (tolower(contents[i].SubPractice)==tolower(args2))) {
			session.send('output')
			//session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',args1.entity,args,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
	}
	}
}


//GetValuesForDesSubCountry
function GetValuesForDesSubCountry(session,skill,country,sub,des){
	//console.log(57)
	var count=0;
	console.log(des)
	console.log(sub.entity)
	console.log(des)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubCountry')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Designation)==tolower(des)) &&(tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Country)==tolower(country)) ) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubCountrylll')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Designation)==tolower(des)) &&(tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Country)==tolower(country)) ) {
			console.log('ggggg');
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',country,sub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}

//GetValuesForSubCountry
function GetValuesForSubCountry(session,skill,country,sub){
	//console.log(57)
	var count=0;
	console.log(sub.entity)
	console.log(country.entity)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubCountry')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Country)==tolower(country)) ) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubCountrylll')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Country)==tolower(country)) ) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',country.entity,sub.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
    session.send('We will reach back to you with the information that you are looking for.');

}
}



function GetMessage(session,message){
	//console.log(57)
	console.log(message)
	
	if (tolower(message)=='yes') {
			session.send('What information do you need?');	
		}
		else if(tolower(message)=='no'){
			session.send('Goodbye. Have a nice day.');

		}

}


//GetValuesForSubLocSkill
function GetValuesForSubLocSkill(session,sub,loc,skill){
	//console.log(57)
	var count=0;
	//console.log(sub.entity)
	//console.log(div.entity)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubLocSkill')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].Location)==tolower(loc)) && (tolower(contents[i].SubPractice)==tolower(sub))) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubLocSkill')
		for(var j=0;j<contents[i].Skill.length;j++){
if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].Location)==tolower(loc)) && (tolower(contents[i].SubPractice)==tolower(sub))) {
			session.send('Here are the details of people working in \'%s\' with skill \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',loc,skill,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}


function GetValuesSkillLoc(session,loc,skill){
	//console.log(57)
	var count=0;
	//console.log(sub.entity)
	//console.log(div.entity)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('LocFilterOnSkill')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].Location)==tolower(loc))) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('LocFilterOnSkilllll')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].Location)==tolower(loc))) {
			session.send('Here are the details of people working in \'%s\' with skill \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',loc,skill,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}



function GetValuesForLocAcc(session,loc,acc){
	//console.log(57)
	var count=0;
	//console.log(sub.entity)
	//console.log(div.entity)
	//console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('LocFilterOnSkill')
		for(var j=0;j<contents[i].Account.length;j++){
		if ((tolower(contents[i].Account[j])==tolower(acc)) && (tolower(contents[i].Location)==tolower(loc))) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('LocFilterOnSkilllll')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Account[j])==tolower(acc)) && (tolower(contents[i].Location)==tolower(loc))) {
			session.send('Here are the details of people working in \'%s\' with skill \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',loc,acc,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}



// SubAccSkill
function GetValuesForSubDiv(session,skill,div,sub){
	//console.log(57)
	var count=0;
	//console.log(sub.entity)
	//console.log(div.entity)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubDiv')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Division)==tolower(div)) ) {
			count++;	
		}
}
}
if(count>0){
		for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('GetValuesForSubDivlll')
		for(var j=0;j<contents[i].Skill.length;j++){
		if ((tolower(contents[i].Skill[j])==tolower(skill)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Division)==tolower(div)) ) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',div,sub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}

session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}

//SubCountryLoc
function SubAccSkill(session,sub,acc,skill){
	//console.log(57)
	var count=0;
	console.log(sub.entity)
	console.log(acc)
	console.log(skill)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('SubAccSkill')
		for(var j=0;j<contents[i].Skill[j].length;j++){
			for(var k=0;k<contents[i].Account[j].length;k++){
	if ((tolower(contents[i].Account[k])==tolower(acc)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Skill[j])==tolower(skill)) ) {
			count++;	
		}
}
}
if(count>=1){
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('kkkkk')
		for(var j=0;j<contents[i].Skill[j].length;j++){
			for(var k=0;k<contents[i].Account[j].length;k++){
if ((tolower(contents[i].Account)==tolower(acc.entity)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Skill[j])==tolower(skill)) ) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',acc,sub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
}
}
session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
session.beginDialog('getMessage');
}
}
}



function SubCountryLoc(session,sub,cont,loc){
	//console.log(57)
	var count=0;
	console.log(sub.entity)
	console.log(cont)
	console.log(loc)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('SubCountryLoc')
	if ((tolower(contents[i].Country)==tolower(cont)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Location)==tolower(loc)) ) {
			count++;	
		}
}
if(count>=1){
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('jjjjjjj')
	if ((tolower(contents[i].Country)==tolower(cont)) && (tolower(contents[i].SubPractice)==tolower(sub)) && (tolower(contents[i].Location)==tolower(loc)) ) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',cont,sub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}
}
session.beginDialog('getMessage');
}
else if(count==0){
	    session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}
}

function GetValues1(session,args,args1,args2){
	//console.log(57)
	var count=0;
	console.log(args1.entity)
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('get values 1')
	for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].Location)==tolower(args1)) && (tolower(contents[i].Skill[j])==tolower(args)) && (tolower(contents[i].Designation)==tolower(args2)) ) {
			count++;	
		}

	}
}
if(count>=1){
	for(var i=0; i<contents.length;i++){  // Write the File logic here
		console.log('get values 1')
	for(var j=0; j<contents[i].Skill.length;j++){
	if ((tolower(contents[i].Location)==tolower(args1)) && (tolower(contents[i].Skill[j])==tolower(args)) && (tolower(contents[i].Designation)==tolower(args2)) ) {
			session.send('Here are the details of people working in \'%s\' with practice \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',args1.entity,args,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)	
		
		}

	}
}
session.beginDialog('getMessage');
}
else if(count==0){
    session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}
}

var bot = new builder.UniversalBot(connector);

bot.on('conversationUpdate', function (message) {
  if (message.membersAdded) {
      message.membersAdded.forEach(function (identity) {
          if (identity.id === message.address.bot.id) {
              var reply = new builder.Message()
                  .address(message.address)
                  .text('I am Anna, the cap sales chatbot. And, I can help you to find right contact from I&D. Say "Hi"');
                  
              bot.send(reply);
              
          }
      });
  }
});

const LuisModelUrl='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/55b3e88f-e29f-406c-894c-7bd924314803?subscription-key=172d62ca2f9d4fd88544266d936bd24f&verbose=true&timezoneOffset=0&q='
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
//bot.recognizer(recognizer);
//console.log(recognizer);
//console.log('baahubali')
var intents = new builder.IntentDialog({ recognizers: [recognizer] })

.matches('greet', function(session,args){
 //var entityName = builder.EntityRecognizer.findEntity(args.entities, 'Designation');
//console.log(entityName);
session.send('Hello.')
session.beginDialog('getUsername');

})

.matches('AskUser', function(session,args){
 var entityresp = builder.EntityRecognizer.findEntity(args.entities, 'askuser');
//console.log(entityName);
if(tolower(entityresp.entity)=='do something'||tolower(entityresp.entity)=='search'||tolower(entityresp.entity)=='yeah'||tolower(entityresp.entity)=='yes')
{
	session.send('What information are you looking for?')
}
//session.beginDialog('getUsername');
if(tolower(entityresp.entity)=='no'||tolower(entityresp.entity)=='nothing'){
	session.send('Goodbye. Have a nice day.')
}

if(tolower(entityresp.entity)=='need help'||tolower(entityresp.entity)=='help me'||tolower(entityresp.entity)=='help'){

	session.send('I can help you find contacts from I&D. for example: \n  Hadoop contact from New York  \n  Wells Fargo contact  \n  etc. ')

}
})

.matches('end_greet', function(session,args){
 //var entityName = builder.EntityRecognizer.findEntity(args.entities, 'Designation');
//console.log(entityName);
session.send('Bye')
})

/*.matches('help', function(session,args){
session.send('right now I am unable to find that option, please put your note here, I will connect with right person')
})*/

.matches('getEmail', function(session,args){
	var entity_fname = builder.EntityRecognizer.findEntity(args.entities, 'first_name');
console.log(entity_fname.entity);
var count=0;
for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].FirstName)==tolower(entity_fname.entity)) {
		session.send(contents[i].Email)
		count++;
			session.beginDialog('getMessage');
	}
}
	if(count==0)
	{    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}
})


.matches('getContactInformation', function(session,args){
	var entity_fname = builder.EntityRecognizer.findEntity(args.entities, 'first_name');
console.log(entity_fname.entity);
var count=0;
for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].FirstName)==tolower(entity_fname.entity)) {
		
		count=1;
	}
}
	if(count==0)
	{    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}
	else{
		for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].FirstName)==tolower(entity_fname.entity)) {
		session.send('Here are the details of \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'  \n Phone: \'%s\'.',contents[i].FirstName,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email,contents[i].phone)
	session.beginDialog('getMessage');
	}
	}
}
})



.matches('getPhone', function(session,args){
	var entity_fname = builder.EntityRecognizer.findEntity(args.entities, 'first_name');
console.log(entity_fname.entity);
var count=0;
for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].FirstName)==tolower(entity_fname.entity)) {
		count++;
		console.log('hello')
	}
}
	if(count==0)
	{
		    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}
	else{

		for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].FirstName)==tolower(entity_fname.entity)) {
		session.send(contents[i].phone)
		
	}
}
session.beginDialog('getMessage');
	}
})


.matches('getEmail_l', function(session,args){
	var entity_lname = builder.EntityRecognizer.findEntity(args.entities, 'last_name');
//console.log(entity_fname.entity);
var count=0;
for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].LastName)==tolower(entity_lname.entity)) {
		session.send(contents[i].Email)
		count=1;
	}
}
session.beginDialog('getMessage');
	/*if(count==0)
	{
		session.send('No data found for \'%s\'',entity_fname.entity)
	}*/
})


.matches('ContactsWorkingFor', function(session,args){
	//console.log(contents);
var count=0
var entity_account = builder.EntityRecognizer.findEntity(args.entities, 'account');
for(var j=0;j<entity_account.resolution.values.length;j++){
			StoreAcc=entity_account.resolution.values[j]
		}
console.log(StoreAcc);
//session.send('Can you add more filters to the data')
for(var i=0; i<contents.length;i++){
//	console.log(contents[i].Account);
	for(var j=0; j<contents[i].Account.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Account[j])==tolower(StoreAcc)) {
		console.log('hello')
	    //session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreAcc,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	count++
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}

if(count>1){
	console.log('More than 1')
	session.beginDialog('LocFilterOnAcc');
	//session.beginDialog('getMessage');
}
else if(count==1){
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Account.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Account[j])==tolower(StoreAcc)) {
		console.log('hello')
		//count++;
	   session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreAcc,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		//session.send('output')
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}
session.beginDialog('getMessage');
}
else{
	session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}




})



.matches('skill_loc', function(session,args){
	//console.log(contents);

var entity_skill = builder.EntityRecognizer.findEntity(args.entities, 'skillset');
var entity_loc = builder.EntityRecognizer.findEntity(args.entities, 'location');
var count=0
for(var j=0;j<entity_skill.resolution.values.length;j++){
			StoreSkill=entity_skill.resolution.values[j]
		}
		for(var j=0;j<entity_loc.resolution.values.length;j++){
			StoreLoc=entity_loc.resolution.values[j]
		}
		console.log(StoreLoc)
		console.log(StoreSkill)
//console.log(entity_account.entity);
//session.send('Can you add more filters to the data')
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Skill.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Skill[j])==tolower(StoreSkill) && tolower(contents[i].Location)==tolower(StoreLoc)) {
		console.log('hello')
		count++;
	   //session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_skill.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		//session.send('output')
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}

if(count>1){
	console.log('More than 1')
	session.beginDialog('SubFilterOnSkillLoc');
	//session.beginDialog('getMessage');
}
else if(count==1){
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Skill.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Skill[j])==tolower(StoreSkill) && tolower(contents[i].Location)==tolower(StoreLoc)){
		console.log('hello')
		//count++;
	   session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreSkill,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		//session.send('output')
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}
session.beginDialog('getMessage');
}
else{
	session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}



})


.matches('account_skill', function(session,args){
	//console.log(contents);

var entity_skill = builder.EntityRecognizer.findEntity(args.entities, 'skillset');
var entity_acc = builder.EntityRecognizer.findEntity(args.entities, 'account');
//console.log(entity_account.entity);
//session.send('Can you add more filters to the data')

for(var j=0;j<entity_skill.resolution.values.length;j++){
			StoreSkill=entity_skill.resolution.values[j]
		}
		for(var j=0;j<entity_acc.resolution.values.length;j++){
			StoreAcc=entity_acc.resolution.values[j]
		}
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Skill.length;j++){
		for(var k=0;k<contents[i].Account.length;k++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Skill[j])==tolower(StoreSkill) && tolower(contents[i].Account[k])==tolower(StoreAcc)) {
	    session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_skill.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
}
	/*else
	{
		session.send('no such information found')
	}*/
}
}

session.beginDialog('getMessage');
})


.matches('GetBySkillset', function(session,args){
	console.log('149');
var count=0;
var entity_skill = builder.EntityRecognizer.findEntity(args.entities, 'skillset');
console.log(entity_skill.resolution);
for(var j=0;j<entity_skill.resolution.values.length;j++){
			StoreSkill=entity_skill.resolution.values[j]
		}
		console.log(StoreSkill)
//session.send('Can you add more filters to the data')
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Account.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Skill[j])==tolower(StoreSkill)) {
		console.log('hello')
		count++;
	   //session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_skill.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		//session.send('output')
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}

if(count>1){
	console.log('More than 1')
	session.beginDialog('LocFilterOnSkill');
	//session.beginDialog('getMessage');
}
else if(count==1){
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	for(var j=0; j<contents[i].Account.length;j++){
		//console.log(contents[i].Account[j]);
	if (tolower(contents[i].Skill[j])==tolower(StoreSkill)) {
		console.log('hello')
		//count++;
	   session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_skill.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		//session.send('output')
	}
	/*else
	{
		session.send('no such information found')
	}*/
}
}
session.beginDialog('getMessage');
}
else{
	session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}




})





/*.matches('GetBySkillset ', function(session,args){
	//console.log(contents);

var entity_skill = builder.EntityRecognizer.findEntity(args.entities, 'skillset');
console.log('153');
//session.send('Can you add more filters to the data')
for(var i=0; i<contents.length;i++){
	console.log('156');
	for(var j=0; j<contents[i].Skill.length;j++){
		//console.log(contents[i].Skill[j]);
	if (tolower(contents[i].Skill[j])==tolower(entity_skill.entity)) {
	   session.send('test')
	   // session.send('Here are the details of people who know \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_skill.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	}
	
}
}
})*/


.matches('subpractice_account', function(session,args){
 var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
 var entity_acc = builder.EntityRecognizer.findEntity(args.entities, 'account');
StoreSub=entity_sub
StoreAcc=entity_acc
console.log(entity_sub);
console.log(entity_acc);
var count = 0;
for(var j=0;j<entity_acc.resolution.values.length;j++){
			StoreAcc=entity_acc.resolution.values[j]
		}
		for(var j=0;j<entity_sub.resolution.values.length;j++){
			StoreSub=entity_sub.resolution.values[j]
		}
	for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		for(var j=0;j<contents[i].Account.length;j++){
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Account[j])==tolower(StoreAcc))
		{
			count++
			//session.send('Hi')
			//session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_acc.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
		/*else{
			session.send('no such information found')
		}*/
	}
	}	
if (count>1){
	session.beginDialog('getSkillfilter');

}
else if(count==1){
	for(var i =0;i<contents.length;i++)
	{
		for(var j=0;j<contents[i].Account.length;j++){
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Account[j])==tolower(StoreAcc))
		{
			session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_acc.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		
		}
	}
}
session.beginDialog('getMessage');
}
else{

    session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}
})


.matches('Designation_sub_country', function(session,args){
 var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
  var entity_des = builder.EntityRecognizer.findEntity(args.entities, 'designation'); 
 var entity_cont = builder.EntityRecognizer.findEntity(args.entities, 'Country');



console.log(entity_sub);
console.log(entity_cont);
console.log(entity_des.type)
console.log(entity_des.resolution.values);
console.log(entity_cont.resolution.values);

	
		for(var j=0;j<entity_des.resolution.values.length;j++){
			StoreDesignation=entity_des.resolution.values[j]
		}

for(var i=0;i<entity_cont.resolution.values.length;i++){
			StoreCountry=entity_cont.resolution.values[i]
		}
for(var k=0;k<entity_sub.resolution.values.length;k++){
			StoreSub=entity_sub.resolution.values[k]
		}


console.log(StoreDesignation)
console.log(StoreCountry)
var count=0;
for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Country)==tolower(StoreCountry) && tolower(contents[i].Designation)==tolower(StoreDesignation))
		{
		count++;
			//session.send('Hi')
			//session.send('Here are the details of people working as \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_des.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
			//session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_acc.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	}
		
	}if(count>1){
		session.beginDialog('getSkillfordes');
	}
	else if(count==1){
		for(var i =0;i<contents.length;i++)
	{
	//	session.send('Hello')
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Country)==tolower(StoreCountry) && tolower(contents[i].Designation)==tolower(StoreDesignation))
		{
		
			//session.send('Hi')
			//session.send('Here are the details of people working as \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_des.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
			session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreSub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	
	}
		
	}
	session.beginDialog('getMessage');
	}
	else{
	    session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
	}

})


.matches('subcountry', function(session,args){
 var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
 var entity_cont = builder.EntityRecognizer.findEntity(args.entities, 'Country');

console.log(entity_sub);
console.log(entity_cont);
var count = 0;

for(var i=0;i<entity_cont.resolution.values.length;i++){
			StoreCountry=entity_cont.resolution.values[i]
		}
		for(var i=0;i<entity_sub.resolution.values.length;i++){
			StoreSub=entity_sub.resolution.values[i]
		}
	for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Country)==tolower(StoreCountry))
		{
			count++
			//session.send('Hi')
			//session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_acc.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
		/*else{
			session.send('no such information found')
		}*/
	}
		
if (count>1){
	session.beginDialog('getSkillset');

}
else if(count==1){
	for(var i =0;i<contents.length;i++)
	{
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Country)==tolower(StoreCountry))
		{
			session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_acc.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		session.beginDialog('getMessage');
		}
	}
session.beginDialog('getMessage');
}
else{

    session.send('We will reach back to you with the information that you are looking for.');
	session.beginDialog('getMessage');
}
})

.matches('getName', function(session,args){
 var entity_first = builder.EntityRecognizer.findEntity(args.entities, 'first_name');
 var entity_acc = builder.EntityRecognizer.findEntity(args.entities, 'account');
console.log(entity_first);
console.log(entity_acc);

for(var i=0;i<entity_acc.resolution.values.length;i++){
			StoreAcc=entity_acc.resolution.values[i]
		}
	for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		for(var j=0; j<contents[i].Account.length;j++){
		if(tolower(contents[i].FirstName)==tolower(entity_first.entity) && tolower(contents[i].Account[j])==tolower(StoreAcc))
		{
			//session.send('Hi')
			session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreAcc,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	
		}
		/*else{
			session.send('no such information found')
		}*/
	}
	}	
	session.beginDialog('getMessage');
})

/*.matches('final_intent', function(session,args){
 var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
 var entity_des = builder.EntityRecognizer.findEntity(args.entities, 'designation');
  var entity_loc = builder.EntityRecognizer.findEntity(args.entities, 'location');
var count=0;
	for(var i =0;i<contents.length;i++)
	{
		session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(entity_sub.entity) && tolower(contents[i].Designation)==tolower(entity_des.entity) && tolower(contents[i].Location)==tolower(entity_loc.entity))
		{
count++;

			//session.send('Here are the details of people working as \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_des.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
			session.send('Hello')
			
	}
		
}

if(count>0){
for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(entity_sub.entity) && tolower(contents[i].Designation)==tolower(entity_des.entity) && tolower(contents[i].Location)==tolower(entity_loc.entity))
		{

			session.send('Here are the details of people working as \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_des.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
			//session.send('Hi')
			//session.send('Hi')
		
		
	}
		
}
	session.beginDialog('getMessage');
}
else{
	session.send("No employee was found with the credentials you entered.")
	
		session.beginDialog('getMessage');
}
})*/

/*.matches('getDesignation', function(session,args){
	console.log(contents);

var entity_desg = builder.EntityRecognizer.findEntity(args.entities, 'designation');
console.log(entity_desg.entity);
var count=0;
for(var i=0; i<contents.length;i++){
	if (tolower(contents[i].Designation)==tolower(entity_desg.entity)) {
		session.send('\'%s\' \'%s\'',contents[i].FirstName,contents[i].LastName)
		//count=1;
	}
}
	
})*/


.matches('getDesignation', function(session,args,results,next){
	//console.log(contents);

var entity_des = builder.EntityRecognizer.findEntity(args.entities, 'designation');
console.log(entity_des);
var count=0;

for(var i=0;i<entity_des.resolution.values.length;i++){
			StoreDesignation=entity_des.resolution.values[i]
		}
for(var i=0; i<contents.length;i++){
	//session.send('HI')
	if (tolower(contents[i].Designation)==tolower(StoreDesignation)) {
		count++;

	}
	console.log(count)
	
}

if(count>1)
	{
		session.beginDialog('getSub');	// begin a dialog: getSkill ** Navigate to Line: 173
	}
}
)                


.matches('sub_division', function(session,args){
 var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
 var entity_div = builder.EntityRecognizer.findEntity(args.entities, 'division');


for(var i=0;i<entity_sub.resolution.values.length;i++){
			StoreSub=entity_sub.resolution.values[i]
		}
		for(var i=0;i<entity_div.resolution.values.length;i++){
			StoreDiv=entity_div.resolution.values[i]
		}
//StoreCountry=entity_cont
console.log(entity_sub);
console.log(entity_div.entity);
console.log('something')
var count = 0;
	for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Division)==tolower(StoreDiv))
		{
		count++
			
			//session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_sub.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
		/*else{
			session.send('no such information found')
		}*/
	}

	if(count>1){
		session.beginDialog('getSkill2');
	
	}
	else if(count==1){

for(var i =0;i<contents.length;i++)
	{
		//session.send('Hi')
		
		if(tolower(contents[i].SubPractice)==tolower(StoreSub) && tolower(contents[i].Division)==tolower(StoreDiv))
		{
			
			session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',StoreSub,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
		}
		/*else{
			session.send('no such information found')
		}*/
	}
	session.beginDialog('getMessage');
	}
	else{

		    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}	

})



.matches('GetBySubpractice', function(session,args){
	//console.log(contents);

var entity_sub = builder.EntityRecognizer.findEntity(args.entities, 'sub_practice');
console.log(entity_sub.entity);
StoreSub=entity_sub;
var count=0;
for(var i=0;i<entity_sub.resolution.values.length;i++){
			StoreSub=entity_sub.resolution.values[i]
		}
//session.send('Can you add more filters to the data')
for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	if (tolower(contents[i].SubPractice)==tolower(StoreSub)) {
	   // session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_account.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	//session.send('\'%s\' \'%s\' ',contents[i].FirstName,contents[i].LastName)
count++;
	}
}
if(count>1){
session.beginDialog('filterSkill');
}
else{
	for(var i=0; i<contents.length;i++){
	//console.log(contents[i].Account);
	if (tolower(contents[i].SubPractice)==tolower(StoreSub)) {
	   // session.send('Here are the details of people working for \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',entity_account.entity,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	session.send('\'%s\' \'%s\' ',contents[i].FirstName,contents[i].LastName)
	
	}
}
session.beginDialog('getMessage');
}
	/*else
	{
		session.send('no such information found')
	}*/

})


.matches('GetByLocation', function(session,args,results,next){
	//console.log(contents);

var entity_loc = builder.EntityRecognizer.findEntity(args.entities, 'location');
console.log(entity_loc.entity);
var count=0;
for(var i=0;i<entity_loc.resolution.values.length;i++){
			StoreLoc=entity_loc.resolution.values[i]
		}
StoreLoc=entity_loc;
for(var i=0; i<contents.length;i++){
	//session.send('HI')
	if (tolower(contents[i].Location)==tolower(entity_loc.entity)) {
		count++;

	}
	console.log(count)
	
}

if(count>1)
	{
		session.beginDialog('getSkill');
		}	// begin a dialog: getSkill ** Navigate to Line: 173
else if(count==1){
	for(var i=0; i<contents.length;i++){
	//session.send('HI')
	if (tolower(contents[i].Location)==tolower(StoreLoc)) 
	{
		session.send('Here are the details of people working in \'%s\'  \n Name: \'%s\' \'%s\'  \n Position: \'%s\'  \n Location: \'%s\'  \n  Practice: \'%s\'  \n Email: \'%s\'.',contents[i].Location,contents[i].FirstName,contents[i].LastName,contents[i].Designation,contents[i].Location,contents[i].Practice,contents[i].Email)
	
	}

}
session.beginDialog('getMessage');
}
else{
		    session.send('We will reach back to you with the information that you are looking for.');
		session.beginDialog('getMessage');
	}	
}
)                                    



.onDefault((session) => {
    session.send('We will reach back to you with the information that you are looking for.');
    session.beginDialog('getMessage');
});





bot.dialog('getSkill',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a skill:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
	//var entity_first = builder.EntityRecognizer.findEntity(args.entities, 'first_name');
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetValues(session,StoreResponse, StoreLoc);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

//SubFilterOnSkillLoc

bot.dialog('SubFilterOnSkillLoc',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a subpractice:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetValuesForSubLocSkill(session,StoreResponse, StoreLoc, StoreSkill);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])


bot.dialog('LocFilterOnAcc',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a Location:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreLoc= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreLoc)
	GetValuesForLocAcc(session, StoreLoc, StoreAcc);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])



bot.dialog('getSkillset',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a skill:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetValuesForSubCountry(session,StoreResponse, StoreCountry, StoreSub);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('getSkillfordes',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a skill:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetValuesForDesSubCountry(session,StoreResponse, StoreCountry, StoreSub, StoreDesignation);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])



bot.dialog('getSkill2',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a skill:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetValuesForSubDiv(session,StoreResponse, StoreDiv, StoreSub);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])



bot.dialog('getMessage',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Do you need anything else?')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResponse= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResponse)
	GetMessage(session,StoreResponse);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('getDes',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a designation:')	//Get skill from user
},function(session,results){
	

	//session.send(`${results.response}`)
StoreDesignation= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreDesignation)
	console.log(StoreResponse)


	GetValues1(session,StoreResponse, StoreLoc, StoreDesignation);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('filterSkill',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'There are multiple people who fit the criteria provided by you. What skills are you looking for?')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreSkill= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreSkill)
	GetValuesForSubSkill(session,StoreSub, StoreSkill);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('LocFilterOnSkill',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a Location:')	//Get skill from user
},function(session,results){
	//console.log(results)
	//session.send(`${results.response}`)
 StoreLoc= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreLoc)
	GetValuesSkillLoc(session,StoreLoc,StoreSkill);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])



bot.dialog('getSub',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a subpractice:')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreResult= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResult)
	GetValuesForSubDes(session,StoreResult, StoreDesignation);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])


bot.dialog('getUsername',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'What is your name?')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
	var StoreName= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreName)
	session.send('Hi, \'%s\'. What information do you want?',StoreName)									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('getLoc',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'Please enter a Location:')	//Get skill from user
},function(session,results){
	//console.log(results)
	//session.send(`${results.response}`)
 StoreResult2= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreResult2)
	GetValues3(session,StoreResult2,StoreDesignation,StoreResult);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])


bot.dialog('getLocation',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'There are multiple people who fit the criteria provided by you. What Location are you looking for?')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreCity= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreCity)
	SubCountryLoc(session,StoreSub, StoreCountry ,StoreCity);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

bot.dialog('getSkillfilter',[function(session,results){			// Start dialog: getSkill
	builder.Prompts.text(session,'There are multiple people who fit the criteria provided by you. What skill are you looking for?')	//Get skill from user
},function(session,results){
	//session.send(`${results.response}`)
 StoreSkill= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreCity)
	SubAccSkill(session,StoreSub, StoreAcc ,StoreSkill);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])

/*bot.dialog('getDes',[function(session,results){			
	builder.Prompts.text(session,'Please enter a designation:')	
},function(session,results){
	//session.send(`${results.response}`)
    StoreDesignation= results.response;						//{results.response} stores user response from builder.Prompt() 
	console.log(StoreDesignation)
	console.log('Get Des Test')
	GetValues1(session,StoreResponse, StoreLoc, StoreDesignation);									//Call function to handle file logic Line: 28
	session.endDialog();
}
])*/

bot.dialog('/', intents);




