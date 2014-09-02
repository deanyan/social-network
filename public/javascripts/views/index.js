define(['text!templates/index.html'], function(indexTemplate){
  var indexView = Backbone.view.extend({
    el: $('#content'),
    
    render: function(){
      this.$el.html(indexTemmplate);
    }
  });
  
  return new indexView;
});