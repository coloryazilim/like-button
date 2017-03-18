Package.describe({
  name: 'color:like-button',
  version: '0.0.1',
  summary: 'Like button for meteorjs.',
  git: 'git@github.com:coloryazilim/like-button.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use([
    'ecmascript',
    'templating',
    'underscore',
    'mongo',
    'less'
  ]);

  api.addFiles([
    './client/templates.html',
    './client/rendered.js',
    './client/events.js',
    './client/helpers.js',
    './client/styles.less'
  ], 'client');

  api.addFiles([
    './server/publications.js',
    './server/methods.js'
  ], 'server');

  // import { LikeButton } from 'meteor/color:like-button';
  api.mainModule('like-button.js');
});
