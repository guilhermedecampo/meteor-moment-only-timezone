Package.describe({
    name: 'guilherme:moment-only-timezone',
    summary: 'Only moment timezone support for moment.js, packaged for Meteor',
    version: '0.3.0',
    git: 'https://github.com/guilhermedecampo/meteor-moment-only-timezone'
});

Package.on_use(function (api, where) {
    both = ['client', 'server']
    api.add_files('pre.js', both);
    api.add_files('lib/moment-timezone-with-data.min.js', both);
    api.add_files('post.js', both);
});
