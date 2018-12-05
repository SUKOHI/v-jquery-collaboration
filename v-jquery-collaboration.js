Vue.directive('jquery-collaboration', {
    inserted: function(el, binding) {

        var value = binding.value;
        var package = (typeof value === 'string') ? value : value[0];
        var options = (typeof value === 'string') ? {} : value[1];

        if(package === 'select2') {

            $(el).select2(options).on('select2:select', function() {

                el.dispatchEvent(new Event('change'));

            })

        } else if(package === 'datepicker') {

            $(el).datepicker(options).on('change', function() {

                el.dispatchEvent(new Event('input'));

            });

        } else if(package === 'timepicker') {

            $(el).timepicker(options).on('change', function() {

                el.dispatchEvent(new Event('input'));

            });

        } else if(package === 'datatable') {

            $(el).DataTable(options);

        } else if(package === 'icheck') {

            $(el).iCheck(options).on('ifChanged', function(){

                el.dispatchEvent(new Event('change'));

            });

        }

    }
});