const users = document.querySelector('#users');

fetch('https://randomuser.me/api/?results=10')
  .then((resp) => {
    if (!resp.ok) {
      throw new Error('API ERROR');
    }

    return resp.json();
  })
  .then(({ results }) => {
    console.log(results);
    results.forEach((result) => {
      const { name, picture } = result;
      const user = document.createElement('article');
      user.className = 'user';
      const figure = document.createElement('figure');
      figure.className = 'user__figure';
      const image = document.createElement('img');
      image.className = 'user__img';
      image.src = picture.thumbnail;
      image.alt = 'user profile';

      figure.append(image);
      user.append(figure);

      const userContent = document.createElement('div');
      userContent.className = 'user__content';
      const username = document.createElement('h2');
      username.className = 'user__username';
      username.innerText = `${name.first} ${name.last}`;
      userContent.append(username);
      user.append(userContent);

      users.append(user);
    });
  })
  .catch((e) => {
    console.error(e);
  });

function product(list) {
  if (list.length === 1) {
    return list[0];
  }
  const num = list[0];
  const rest = [];

  for (let i = 1; i < list.length; i++) {
    rest.push(list[i]);
  }
  return num * product(rest);
}

function getEven(list) {
  if (list.length === 0) {
    return [];
  }

  let head = list[0];

  if (list[0] % 2 === 0) {
    head = [head];
  } else {
    head = [];
  }
  const rest = list.slice(1);

  return head.concat(getEven(rest));
}

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

function isEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }
  const headOne = arrayOne[0];
  const headTwo = arrayTwo[0];

  if (headOne === headTwo) {
    return isEqual(arrayOne.slice(1), arrayTwo.slice(1));
  } else {
    return false;
  }
}
