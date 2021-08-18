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
