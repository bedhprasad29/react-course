// AJAX Calls

// https://reqres.in/api/users?page=2

var results = null;
function loadData1(url) {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', url)
    xhttp.onload = () => {
        if (xhttp.status === 200) {
            results = JSON.parse(xhttp.responseText);
            results.data.forEach((data) => {
                console.log(data);
                // document.getElementById('table').appendChild(
                //     <tr>
                //         <td>${data.first_name} ${data.last_name}</td>
                //         <td>${data.email}</td>
                //         <td><img src="${data.avatar}" /></td>
                //     </tr>)
                const row = document.createElement('tr');

                const imageCell = document.createElement('td')
                const imgTag = document.createElement('img')
                imgTag.src = `${data.avatar}`;
                imageCell.appendChild(imgTag)
                row.appendChild(imageCell)

                const nameCell = document.createElement('td');
                nameCell.textContent = `${data.first_name} ${data.last_name}`
                row.appendChild(nameCell)

                const emailCell = document.createElement('td');
                emailCell.textContent = `${data.email}`;
                row.appendChild(emailCell)

                document.getElementById('table').appendChild(row)
            })
        };
    }

    xhttp.send();

    return results;
}

loadData1('https://reqres.in/api/users?page=2')
