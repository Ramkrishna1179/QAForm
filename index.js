let table = document.getElementById("tbl")[0];
let tbody = document.getElementById("tbody");
let count1 = 0
let count = 1;
function Add_More() {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = count++;

  let td2 = document.createElement("td");
  let inp = document.createElement("input");
  inp.setAttribute("class", "form-control");
  inp.setAttribute("id", `input${count1++}`);
  // inp.setAttribute("checked","checked")

  let edt_btn = document.createElement("button");
  edt_btn.setAttribute("id", `${count++}`);
  edt_btn.setAttribute("class", "edt_btn");
  let i = document.createElement("i");
  i.setAttribute("class", "fa fa-pencil");
  edt_btn.appendChild(i);

  edt_btn.addEventListener("click", (event) => {
    event.target.parentElement.previousElementSibling.focus();
  });

  td2.append(inp, edt_btn);
  let td3 = document.createElement("td");
  let select = document.createElement("select");
  select.setAttribute("id", "city");

  let option = document.createElement("option");
  option.text = "Indore";
  option.value = "in";

  let option1 = document.createElement("option");
  option1.text = "Bhopal";
  option1.value = "bh";

  let option2 = document.createElement("option");
  option2.text = "Ujjain";
  option2.value = "uj";

  let option3 = document.createElement("option");
  option3.text = "Jabalpur";
  option3.value = "ja";
  select.append(option, option1, option2, option3);

  // select.setAttribute("name","Choose_city");
  // select.innerHTML = document.createElement("option");
  // // opt1.setAttribute("value","Indore");
  // // opt1.innerHTML = "Indore"

  // let opt2 = document.createElement("option");
  // opt2.setAttribute("value","Bhopal");
  // opt2.innerHTML = "Indore"

  // let opt3 = document.createElement("option");
  // opt3.setAttribute("value","Ujjain");
  // opt3.innerHTML = "Indore"
  // select.append(opt1);
  td3.appendChild(select);
  let td4 = document.createElement("td");

  let div = document.createElement("div");

  div.setAttribute("class", "form-check");
  div.setAttribute("class", "form-switch");

  let on_off = document.createElement("input");
  on_off.setAttribute("type", "checkbox");
  on_off.setAttribute("class", "form-check-input");
  on_off.setAttribute("role", "switch");
  // on_off.setAttribute("checked","checked")
  on_off.setAttribute("id", "flexSwitchCheckChecked");

  let label = document.createElement("label");
  label.setAttribute("for", "flexSwitchCheckChecked");
  label.setAttribute("class", "form-check-label");

  div.append(on_off);
  td4.append(div);
  tr.append(td1, td2, td3, td4);

  tbody.append(tr);
}

function Save(y) {
  // debugger
  // let val = document.getElementsByClassName("inp_value");
  // let x = val.value;
  let z = document.querySelectorAll(".form-check-input");
  for (let i = 0; i < z.length; i++) {
    ((z[i].checked = true));
  }
  // let a = document.getElementById("city").value;
  // document.getElementById("flexSwitchCheckChecked").value = "on";
  // document.getElementsByClassName("form-check-input").checked = true;
}


