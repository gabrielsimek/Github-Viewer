export async function fetchUser(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const json = await res.json();
  return json;
}
