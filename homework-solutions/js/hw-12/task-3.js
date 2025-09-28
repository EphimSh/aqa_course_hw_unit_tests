const STATUSES = {
  OK: 200,
};
function isOK(status) {
  return status === STATUSES.OK;
}
const baseUrl = 'https://jsonplaceholder.typicode.com';

async function getUserList() {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    if (!isOK(response.status)) {
      throw new Error(`Unknown error, status-code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}

async function getAlbumList() {
  try {
    const response = await fetch(`${baseUrl}/albums`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    if (!isOK(response.status)) {
      throw new Error(`Unknown error, status-code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}

async function getPhotosList() {
  try {
    const response = await fetch(`${baseUrl}/photos`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    if (!isOK(response.status)) {
      throw new Error(`Unknown error, status-code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}

function getPhotoCountByAlbum(photos) {
  return photos.reduce((count, { albumId }) => {
    count[albumId] = (count[albumId] ?? 0) + 1;
    return count;
  }, {});
}

function formatUserAlbums(albums, photoCountByAlbum, userId) {
  return albums
    .filter((album) => album.userId === userId)
    .map((album) => `      ${album.title} (${photoCountByAlbum[album.id] || 0} photos)`)
    .join('\n');
}

function formatUserInfo(user, albums, photoCountByAlbum) {
  return (
    `${user.id}.  name: ${user.name}\n` +
    `    email: ${user.email}\n` +
    `    phone: ${user.phone}\n` +
    `    company: ${user.company['name']}\n` +
    `    albums:\n` +
    formatUserAlbums(albums, photoCountByAlbum, user.id)
  );
}

async function printUserInfo() {
  const [users, albums, photos] = await Promise.all([getUserList(), getAlbumList(), getPhotosList()]);
  const photoCountByAlbum = getPhotoCountByAlbum(photos);

  users
    .sort((a, b) => a.id - b.id)
    .forEach((user, index, array) => {
      console.log(formatUserInfo(user, albums, photoCountByAlbum));
      if (index !== array.length - 1) console.log(`_____________________________________________________________\n`);
    });
}
printUserInfo();
