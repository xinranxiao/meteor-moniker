Package.describe({
  name: 'xinranxiao:moniker',
  summary: 'Meteor package for Moniker - A random name generator:',
  version: '1.0.0',
  git: 'https://github.com/xinranxiao/meteor-moniker'
});

Npm.depends({
  moniker: '0.1.2'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.export('Moniker');
  api.addFiles('.npm/package/node_modules/moniker/lib/moniker.js', ['client']);
  api.addFiles('lib/moniker.js', 'server');
});