document.getElementById('createBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('cancelBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('createProjectBtn').addEventListener('click', function() {
  var projectName = document.getElementById('projectName').value;

  if (projectName) {
    var projectList = document.getElementById('projectList');
    var newProject = document.createElement('li');
    newProject.textContent = projectName;

    newProject.addEventListener('click', function() {
      // Redireciona para workspace.html com o nome do projeto
      window.location.href = 'workspace.html?project=' + projectName;
    });

    projectList.appendChild(newProject);
    document.getElementById('popup').style.display = 'none';
  }
});