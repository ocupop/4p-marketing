// https://www.npmjs.com/package/webfontloader
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:100,300,400','Spectral:400,400i,500i,600,600i']
  },
  // typekit: { id: '' },
  loading: function() {
    window.console.log('LOADING FONTS');
  },
  active: function() {
    window.console.log('ACTIVE FONTS');
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});
