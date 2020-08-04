import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.udecForms.onCreated(function helloOnCreated() {

  this.activeFormWithCheck = () => {
    let checkbox = document.getElementById("myCheckBox");
    let hiddenForm = document.getElementsByClassName("cursoUDEC")[0];


    checkbox.addEventListener('change', function(event) {
        const isChecked = event.target.checked;

        if (isChecked) {
            hiddenForm.style.display = "block";
        } else {
            hiddenForm.style.display = "none";
        }
    })
  }

  this.showPlaceHolder = () => {
    let textarea = document.getElementById("textAreElement");

    textarea.addEventListener('blur', function(event) {
        textarea.placeholder = "";
    });
    textarea.addEventListener('click', function(event) {
        textarea.placeholder = "Si requieres asesoría tributaria puedes contactar a Leidy Duque Hoyos, egresada de Contaduría Pública y de la Especialización en NIIF-NIC de U DE COLOMBIA. Cuenta con 2 años de experiencia prestando sus servicios a empresas nacionales e internacionales. Contacto: WhatsApp +57 016793762.";
    });
  }

  this.getInformation = () => {
    let form = document.getElementById("form");
    let formValues = {
        fullname: "",
        document: "",
        email: "",
        phoneNumer: "",
        UDEC: false,
        title: "",
        address: "",
        location: "",
        profile: ""
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validTextAreaInput) {
            if (formValues.UDEC) formValues.title = document.getElementById("title").value.trim();
            formValues.fullname = document.getElementById("fullname").value.trim();
            formValues.document = document.getElementById("document").value.trim();
            formValues.email = document.getElementById("email").value.trim();
            formValues.phoneNumer = document.getElementById("phoneNumber").value.trim();
            formValues.UDEC = document.getElementById("myCheckBox").value.trim();
            formValues.address = document.getElementById("address").value.trim();
            formValues.location = document.getElementById("location").value.trim();
            formValues.profile = document.getElementById("textAreElement").value.trim();

            // Here goes code for success message
        } else {
            // code for error message about incorrect input text
        }
    });
  }

  this.validateFormLength = () => {
    let textarea = document.getElementById("textAreElement");
    let textInput = "";
    let errorBox;

    textarea.onkeyup = function(event) {
        errorBox = document.getElementById("errorMessage");
        textInput = document.getElementById("textAreElement").value;
        if (textInput.length > 700) {
            errorBox.style.display = "block";
            validTextAreaInput = false;
        } else {
            errorBox.style.display = "none";
            validTextAreaInput = true;
        }
    }
  }

  setTimeout(() => {
      this.activeFormWithCheck();
      this.showPlaceHolder();
      this.getInformation();
      this.validateFormLength();
  }, 500);
});
// 
Template.udecForms.helpers({

});

Template.udecForms.events({

});
