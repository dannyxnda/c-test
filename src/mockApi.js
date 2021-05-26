const userList = new Array(20)
  .fill({
    name: 'Danny',
    email: 'danny@gmail.com',
    position: 'Developer',
  })
  .map((u, i) => ({
    id: Math.random().toString().replace(/\d\./, ''),
    name: u.name.concat('_', i),
    email: 'mail'.concat(u.email, '_', i),
    position: u.position,
  }))

const getList = ({ page = 1, pagination = 5 }) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        page,
        totalPages: Math.ceil(userList.length / pagination),
        items: userList.slice((page - 1) * pagination, page * pagination),
      })
    }, 600)
  })

const addUser = (userinfo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const { name, email, position } = userinfo
      if (!name || !email || !position) {
        reject('Not enough info to create user!')
      } else if (userList.some((u) => u.email === email)) {
        reject('Email is existed!')
      } else {
        const newUser = {
          id: Math.random().toString().replace(/\d\./, ''),
          name,
          email,
          position,
        }
        userList.push(newUser)
        resolve(newUser)
      }
    }, 600)
  })

export { getList, addUser }
