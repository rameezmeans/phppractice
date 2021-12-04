<html>
<head>
<title>Here I am.</title>
<style>
    .ui-datepicker-calendar {
        display: none;
    }
</style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js" integrity="sha512-RCgrAvvoLpP7KVgTkTctrUdv7C6t7Un3p1iaoPr1++3pybCyCsCZZN7QEHMZTcJTmcJ7jzexTO+eFpHk4OCFAg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
</head>
<body>
<div>
    <label>Date:</label>
    <input id="datepicker" type="text" class="datepicker" value="2003-12-20"> 
</div>
</body>
<script type="text/javascript">
    let element = $('.datepicker');
     element.datepicker();
//    let date_format = "yy-mm-dd";
//    let date_element = element.hasClass('datepicker');
//    var clone = element.clone();
//    let date_range = "1900:2030";
//    let this_value = element.val();
//        let date_format_mapping = {
//            'YYYY-MM-DD' : 'yy-mm-dd',
//            'DD/MM/YYYY' : 'dd/mm/yy',
//            'MM/DD/YYYY' : 'mm/dd/yy'
//        };
//        let datepicker_date_format = 'yy-mm-dd';
//        if(date_format_mapping[date_format]!=undefined){
//            datepicker_date_format = date_format_mapping[date_format];
//        }
//        element.datepicker();
//            dateFormat: datepicker_date_format,
//            yearRange: date_range,
//            changeMonth: true,
//            changeYear: true,
//            beforeShow: function (input, inst) {
//                // adjust position of datepicker
//                var rect = input.getBoundingClientRect();
//                setTimeout(function () {
//                    inst.dpDiv.css({ top: rect.top + 40, left: rect.left + 0 });
//                }, 0);
//            }
//        });
//        let alt_id = element.attr('id') + '-alt';
//        clone.attr('id', alt_id);
//        if (!date_element) {
//            clone.insertAfter(org_element);
//            clone.hide();
//        }
//        element.datepicker( "option", "altField", "#" + alt_id);
//        element.datepicker( "option", "altFormat", "yy-mm-dd");
//        if (this_value!=""){
//            let check_date_format =  moment(this_value, 'YYYY-MM-DD', true).isValid()
//            if (check_date_format){
//                var myDate = moment(this_value, 'YYYY-MM-DD').toDate();
//                element.datepicker("setDate", new Date(myDate));
//            }
//        }
</script>
</html>
