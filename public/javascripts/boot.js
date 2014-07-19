require.config({
  paths: {
    jQuery: '/bower_components/jquery/dist/jquery.min.js',
    Underscore: '/bower_components/underscore/underscore.js',
    Backbone: '/bower_components/backbone/backbone.js',
    text: '/bower_components/text/text.js',
    template: '../templates'
  },
  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'SocialNet': ['Backbone']
  },
});

require(['SocialNet'], function(SocialNet){
  SocialNet.initialize();
});