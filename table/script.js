let users = null;
let columns = [{
  label: 'First Name',
  value: 'firstName'
}, {
  label: 'Last Name',
  value: 'lastName'
}, {
  label: 'Email',
  value: 'email'
}];

const loadBtn = document.querySelector('.load-btn');
const container = document.querySelector('.container');



  loadBtn.addEventListener('click', function() {
    fetch('https://randomuser.me/api?results=50')
    .then(resp => resp.json())
    .then(json => {
      users = json.results.map((user) => {
        return {
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email
        }
      });
      generateTable();
    })
    .catch(err => {
      console.log(err);
    });
  });

  function generateTable() {
    const table = document.createElement('table');
    generateHeader(table);
    generateRows(table);
    container.append(table);
  }

  function generateHeader(table) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    columns.forEach((col) => {
      const td = document.createElement('td');
      td.innerText = col.label;
      tr.append(td);
    });
    thead.append(tr);
    table.append(thead);
  }

  function generateRows(table) {
    const tbody = document.createElement('tbody');

    users.forEach((user) => {
      const tr = document.createElement('tr');
      columns.forEach((col) => {
        const td = document.createElement('td');
        td.innerText = user[col.value];
        tr.append(td);
      });
      tbody.append(tr)
    });
    table.append(tbody);
  }

