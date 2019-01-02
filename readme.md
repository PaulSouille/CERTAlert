# Get mail when new security alert is reported

By using the RSS of this website : https://www.cert.ssi.gouv.fr/
## Setup

Git clone this project

run : 

```bash
npm install
```

```bash
node index.js
```
Don't forget to fill config.js :
```js
config.email = '';
config.password = '';
```
And mail options from index.js : 
```js
const mailOptions = {
                from: '<email sender>',
                to: '<your email>',
                subject: 'New security alert',
                };
```

You can host this script by using <a href="http://pm2.keymetrics.io/">PM2</a>

