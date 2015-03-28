Package.describe({
    name: 'risul:moment-timezone',
    summary: 'Timezone support for moment.js, packaged for Meteor',
    version: '0.3.0',
    git: 'https://github.com/risul/meteor-moment-timezone'
});

Package.on_use(function (api, where) {
    both = ['client', 'server']
    api.add_files('pre.js', both);
    api.add_files('lib/moment-timezone-with-data.min.js', both);
    api.add_files('post.js', both);
});
