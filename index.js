function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/emilyyz92/repos');
  req.send();
}
