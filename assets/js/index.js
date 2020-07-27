$( document ).ready(function() {
    new WOW().init();
  });


(function () {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
        form.classList.add('was-validated');
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            $('.alert-button').html('<span class="spinner-border spinner-border-md mr-2" role="status" aria-hidden="true"></span>Sending...').addClass('disabled');
            var formData = {
                'email'    : $('input[name=email]').val(),
                };
                
                
                $.ajax({
                url : "../../../Talent-Finder/assets/src/register.php",
                type: "POST",
                data : formData,
                success: function(data, textStatus, jqXHR)
                {   
                    var dparsed = JSON.parse(data);
                    console.log(dparsed);
                    console.log(textStatus);
                    // document.getElementById('status').textContent = dparsed.message;
                    $('.alert-button').html("Alert Me").removeClass('disabled');
                    $('.footer-alert').removeClass('d-none');
                // $('#status').text(data.message);
                if (data.code) //If mail was sent successfully, reset the form.
                $('#form2').closest('form').find("input[type=text], textarea").val("");
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                $('#status').text(jqXHR);
                }
                });

         }
        
    }, false);
        
    });
    }, false);
    })();