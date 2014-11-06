# Sample email sending with Parse and Sendgrid

Copy `grunt.hooks.coffee`, and `cloud/main.js` in your project.
Feel free to edit the files if you need.

Run

```sh
$ npm install --save-dev fs-extra
```

as it is used in the Parse `hook`.

Then, edit `.leavesrc.local` to make it look like this.

```json
{
  "parse": { CONTENT OF global.json },
  "sendgrid": {
    "username": "SENDGRID_USERNAME",
    "password": "SENDGRID_PASSWORD"
  }
}
```

`CONTENT OF global.json` is the file generated with `parse new command`.
It should be valid JSON.

Then, when running `leaves build`, a `parse` directory should be generated.

You just need to `cd` in it and run `parse deploy` to deploy your poject.
