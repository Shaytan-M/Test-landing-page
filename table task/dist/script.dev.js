"use strict";

var modalWrapper = document.querySelector('.modal_window_wrapper');
var modalWindow = document.querySelector('.modal_window');
var buttonEdit = document.querySelector('#edit');
var secondModal = document.querySelector('.second_form_wrapper');
var buttonSave = document.querySelector('#save');
var secondForm = document.querySelector('.second_form');
var tbody = document.querySelector('.table_wrapper>table>tbody');
var listboxInp = document.querySelectorAll('#checkboxes>label>input');
var firstInputValue;
var secondInputValue;
var expanded = false;
var objForData = []; // Відкриття першого модального вікна

function showModal(event) {
  modalWrapper.classList.add('active');
} // Закриття першого модального вікна без змін в таблиці


modalWrapper.addEventListener('click', function (e) {
  modalWrapper.classList.remove('active');
});
modalWindow.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
}); //  Відкриття другого модального вікна

buttonEdit.addEventListener('click', function (e) {
  e.preventDefault();
  secondInputValue = document.querySelectorAll('.second_main_inp > label > input');
  firstInputValue = document.querySelectorAll('.main_inp > label > input');
  secondInputValue.forEach(function (item) {
    firstInputValue.forEach(function (inp) {
      if (item.getAttribute('data-name') == inp.getAttribute('data-name')) {
        item.value = inp.value;
      }
    });
  });
  secondModal.classList.add('active');
}); // Закриття першого модального вікна без змін в першому

secondModal.addEventListener('click', function (e) {
  secondModal.classList.remove('active');
}); // збереження другого модального вікна

buttonSave.addEventListener('click', function (e) {
  e.preventDefault();
  secondInputValue = document.querySelectorAll('.second_main_inp > label > input');
  firstInputValue = document.querySelectorAll('.main_inp > label > input');
  secondInputValue.forEach(function (item) {
    firstInputValue.forEach(function (inp) {
      if (item.getAttribute('data-name') == inp.getAttribute('data-name')) {
        inp.value = item.value;
      }
    });
  });
  secondModal.classList.remove('active');
});
secondForm.addEventListener('click', function (e) {
  e.stopPropagation();
}); // Функція для лістБоксу

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");

  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
} // Збереження першого модального вікна


first_save.addEventListener('click', function (e) {
  var lstbox = '';
  listboxInp.forEach(function (item) {
    item.checked ? lstbox += item.value + ';' : '';
    item.checked = false;
  });
  var formInp = e.path[1].elements;
  var obj = {
    number: formInp[0].value,
    date: formInp[1].value,
    name: formInp[2].value,
    reason: lstbox,
    address: formInp[3].value
  };
  localStorage.setItem("".concat(JSON.stringify(obj)), JSON.stringify(obj));
});

function sumKvtFunc(event) {
  sumKVT.value = +firstKVT.value + +secondKVT.value + +threeKVT.value;
}

function getData(url) {
  var resp;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          resp = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(resp.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function printData() {
  var arrLocal = Object.values(localStorage);
  arrLocal.forEach(function (item) {
    tbody.innerHTML += "<tr><td>".concat(JSON.parse(item).number, "</td><td>").concat(JSON.parse(item).date, "</td><td>").concat(JSON.parse(item).name, "</td> <td>").concat(JSON.parse(item).reason, "</td><td>").concat(JSON.parse(item).address, "</td></tr>");
  });
}

printData();