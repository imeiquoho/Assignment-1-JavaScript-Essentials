/* staff.js */
document.addEventListener('DOMContentLoaded', function() {
    // Sample array of staff objects.
    let staffData = [
      { name: "Alice Smith", salary: 50000, position: "Developer" },
      { name: "Bob Johnson", salary: 60000, position: "Designer" },
      { name: "Charlie Davis", salary: 55000, position: "Manager" },
      { name: "Diana Ross", salary: 70000, position: "Developer" },
      { name: "Edward King", salary: 65000, position: "Tester" }
    ];
  
    // Function to display staff data in a table.
    function displayStaff(data) {
      let html = '<table><thead><tr><th>Name</th><th>Salary</th><th>Position</th></tr></thead><tbody>';
      for (let i = 0; i < data.length; i++) {
        html += '<tr>' +
                  '<td class="staff-name">' + data[i].name + '</td>' +
                  '<td>' + data[i].salary + '</td>' +
                  '<td>' + data[i].position + '</td>' +
                '</tr>';
      }
      html += '</tbody></table>';
      document.getElementById('staffList').innerHTML = html;
    }
  
    // Initial display of staff data.
    displayStaff(staffData);
  
    // Sort by Name
    document.getElementById('sortName').addEventListener('click', function() {
      staffData.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      displayStaff(staffData);
    });
  
    // Sort by Salary
    document.getElementById('sortSalary').addEventListener('click', function() {
      staffData.sort(function(a, b) {
        return a.salary - b.salary;
      });
      displayStaff(staffData);
    });
  });
  