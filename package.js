Package.describe({
  summary: "underscore.inflection repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use('underscore', where);
  api.add_files('lib/underscore.inflection.js', where);
});
