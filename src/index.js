import 'font-awesome/scss/font-awesome.scss';
import 'socicon/css/socicon.css';
import 'theme/icons/main.scss';

import 'tether/dist/css/tether.css';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import 'bootstrap-datetime-picker/css/bootstrap-datetimepicker.min.css';
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';
import 'chartist/dist/chartist.css';
import 'morris.js/morris.css';
import 'jstree/dist/themes/default/style.css';
import 'bootstrap-markdown/css/bootstrap-markdown.min.css';
import 'summernote/dist/summernote.css';
import 'dropzone/dist/dropzone.css';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinFlat.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-select/dist/css/bootstrap-select.css';


import 'bootstrap/dist/js/bootstrap.min.js';
// import 'popper.js';
import 'js-cookie/src/js.cookie.js';
import 'jquery-smooth-scroll/jquery.smooth-scroll.js';
import 'moment/min/moment.min.js';
import 'wnumb/wNumb.js';
import 'jquery.repeater';
import 'jquery-form/dist/jquery.form.min.js';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import 'block-ui/jquery.blockUI.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js';
import 'bootstrap-timepicker/js/bootstrap-timepicker.min.js';
import 'bootstrap-daterangepicker/daterangepicker.js';
import 'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js';
import 'bootstrap-maxlength/src/bootstrap-maxlength.js';
import 'bootstrap-switch/dist/js/bootstrap-switch.js';
import 'waypoints/lib/jquery.waypoints.js';
import 'counterup/jquery.counterup.js';
// bootstrap-multiselectsplitter
// jquery-idletimer
// bootstrap-session-timeout
import 'chart.js/dist/Chart.bundle.js';
import 'chartist/dist/chartist.js';
import 'morris.js/morris.js';
import 'raphael/raphael.js';
import 'jstree/dist/jstree.js';
import 'bootstrap-notify/bootstrap-notify.min.js';
import 'jquery-validation/dist/jquery.validate.js';
import 'jquery-validation/dist/additional-methods.js';
import 'bootstrap-markdown/js/bootstrap-markdown.js';
import 'summernote/dist/summernote.js';
import 'dropzone/dist/dropzone.js';
import 'ion-rangeslider/js/ion.rangeSlider.js';
import 'clipboard/dist/clipboard.min.js';
import 'autosize/dist/autosize.js';
import 'nouislider/distribute/nouislider.js';
import 'inputmask';
import 'handlebars/dist/handlebars.js';
import 'typeahead.js/dist/typeahead.bundle.js';
import 'select2/dist/js/select2.js';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'sweetalert';


import 'theme/style.bundle.css';
import 'theme/scripts.bundle.js';
import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components';
import {store} from 'reducers';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
