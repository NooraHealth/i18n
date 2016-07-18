Package.describe({
  name: 'noorahealth:i18n',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Noora Health internationalization package',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/noorahealth/i18n',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('tap:i18n@1.8.2');
  api.use('tap:i18n-bundler@0.3.0');

  api.addFiles([
    'i18n/english.i18n.json',
    'i18n/hindi.i18n.json',
    'i18n/kannada.i18n.json'
  ]);

  api.mainModule('i18n.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tap:i18n@1.8.2');
  api.use('tap:i18n-bundler@0.3.0');
  api.use('mocha');
  api.use('chai');

  api.addFiles([
    "i18n-tests.js"
  ], "server");

});
