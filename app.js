var express = require("express");
const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
var client = new Client();
var Canvas = require("canvas")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const opus = require("node-opus");
const fetchVideoInfo = require('youtube-info');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const request = require("request");
const snekfetch = require('snekfetch');
const getYouTubeID = require("get-youtube-id");
const simpleytapi = require('simple-youtube-api')
var prefix = "$"
const passport = require('passport');
const session = require('express-session');

const MemoryStore = require('memorystore')(session);
const Strategy = require('passport-discord').Strategy;
const url = require('url');
const helmet = require('helmet');
const moment = require('moment');
const fs = require('fs');

const buys = JSON.parse(fs.readFileSync("./buys.json","utf8"))



var app = express();
var https = require('https');
app.use(express.static("public"));

app.set("view engine", "ejs");







 


app.listen(process.env.PORT);
setInterval(() => {// لالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالالا
  https.get(`https://special-host.glitch.me`);
}, 280000); 
console.log("on");
app.get("/", (req, res) => {
res.render("home", {
  client: client
})

});
app.get("/donators", (req, res) => {
    res.render("Donators", {
        client: client
    });
});



passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});

passport.use(new Strategy({
	clientID: "583776455650050059",
	clientSecret: "I-Lgf8672EfuPkYpxWzb1Hdjn9P8MEKx",
	callbackURL: 'http://www.special-host.tk/auth',
	scope: ['identify', 'guilds']
},
(accessToken, refreshToken, profile, done) => {
	process.nextTick(() => done(null, profile));
}));
app.use(session({
	store: new MemoryStore({
		checkPeriod: 86400000
	}),
	secret: 'clientsessiosabayrosecret123123123',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.locals.domain = 'localhost:88';
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

function checkAuth(req, res, next) {
	if (req.isAuthenticated()) return next();
	req.session.backURL = req.url;
	res.redirect('/login');
}
app.get('/login', (req, res, next) => {
	if (req.session.backURL) {
		req.session.backURL = 'http://www.special-host.tk/auth';
	} else if (req.headers.referer) {
		const parsed = url.parse(req.headers.referer);
		if (parsed.hostname === app.locals.domain) {
			req.session.backURL = parsed.path;
		}
	} else {
		req.session.backURL = '/user';
	}
	next();
},
passport.authenticate('discord'));
app.get('/auth', passport.authenticate('discord', {
	failureRedirect: '/autherror'
}), (req, res) => {
	if (req.session.backURL) {
		const refurl = req.session.backURL;
		req.session.backURL = null;
		res.redirect(refurl);
	} else {
		res.redirect('/user');
	}
});

  
app.get('/user', async (req, res) => {
   const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('user', {
		bot: botStats, user, client: client, buys:buys
	});
  
  });


  


  



app.get('/terms', async (req, res) => {
   const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('terms', {
		bot: botStats, user, client: client, buys:buys
	});
  
  });


app.get("/about",async (req,res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('about', {
		bot: botStats, user, client: client, buys:buys
	});
})

app.get("/clients",async (req,res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('clients', {
		bot: botStats, user, client: client, buys:buys
	});
})

app.get("/minecraft",async (req,res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('minecraft', {
		bot: botStats, user, client: client, buys:buys
	});
})
app.get("/netflix",async (req,res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('netflix', {
		bot: botStats, user, client: client, buys:buys
	});
})
app.get("/fortnite",async (req,res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('fortnite', {
		bot: botStats, user, client: client, buys:buys
	});
})
app.get("/discord",async (req, res) => {
   const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('discord', {
		bot: botStats, user, client: client, buys: buys
	});
});
app.get("/designes",async (req, res) => {
      const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('designes', {
		bot: botStats, user, client: client, buys: buys
	});
});

app.get("/Spotify",async (req, res) => {
       const user = req.isAuthenticated() ? req.user : null;
    if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('Spotify', {
		bot: botStats, user, client: client, buys: buys
	});
});


app.get("/home",async (req, res) => {
    const user = req.isAuthenticated() ? req.user : null;
  if(!user) return res.redirect('/login');
	const botStats = [{
		botty: client,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('user', {
		bot: botStats, user, client: client, s: buys
	});
});

app.get("/done", (req, res) => {
    res.render("done", {
        client: client
    });
});

client.on("ready", () => {
  console.log("h")
})



app.get("/sendMessage", (req, res) => {
  var email = req.query.email;      
  var orders = req.query.orders;
 
  var channel = client.channels.get("589251666738675719");
  if (!email || !orders || !channel) return;
  

  
channel.send(`
 <@&588976901792464906>
<@&594627685003689984>
**New Order!!**

**Account** :

<@${email}>

***Orders*** : 

**\`${orders}\`**
`)
  
var u = client.users.get(email)

if(u) {
  u.send("**Done send ur order join us for talk with u : https://discord.gg/mQXBrYh **")
  
}else{
  return;
}
  

  
});



client.login("NTgzNzc2NDU1NjUwMDUwMDU5.XRrX4Q.TDPQ0HDWN4rqBu_zmzUm1TqsOuE");
//<span class="bbadge badge-pill"></span> <a id="inviteBtn"><button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-outline-light btn-lg" style="margin-top: 10px; width: 150px; font-size: 15px;">اطلبها الان</button></a>
//   <span class="badge badge-danger"> Not available </span>    

    app.set("view engine", "ejs");


    app.get("*", (req, res) => {
       res.render("404", {
            client: client
        });
    });
  