export async function fetchUser(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const json = await res.json();
  return json;
}

export async function fetchRepos(userName){
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const json = await res.json();
  return json;
}

export async function fetchPulls(token, userName, repos){
  const pulls = await Promise.all(
    repos.map(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/${userName}/${repo.name}/pulls?state=all`,
        {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
          }
        });
      const pulls = await res.json();
      return pulls;
    }));
      
  return pulls.flat();
}
