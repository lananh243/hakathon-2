let tabList = JSON.parse(localStorage.getItem("projects"));
let tbody = document.getElementById("tableBody");
console.log(tabList);

function render() {
  let myProject = tabList.map(function (projects, index) {
    return `
            <tr>
                <td>${index + 1}</td>
                <td>${projects.projectName}</td>
                <td>${projects.imgUrl}</td>
                <td>${projects.subTitle}</td>
                <td>${projects.description}</td>
                <td>${projects.date}</td>
                <td>${projects.client}</td>
                <td>${projects.type}</td>
                <td>${projects.techs}</td>
                <td>${projects.url}</td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-success">Update</button>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = myProject.join("");
}

render();
