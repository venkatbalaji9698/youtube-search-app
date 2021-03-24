let headers = {
  'Content-Type': 'application/json'
};

export async function get(url) {
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const options = {
          method: 'GET',
          headers: headers
        };
        fetch(url, options)
          .then(res => res.json())
          .then(res => {
            resolve(res);
          })
          .catch(error => reject(error));
      }
    } catch (error) {
      reject(error)
    }
  });
}
