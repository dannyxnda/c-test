const userList = new Array(20)
  .fill({
    name: 'Annie',
    email: 'annie@gmail.com',
    position: 'Developer',
  })
  .map((u, i) => ({
    id: Math.random().toString().replace(/\d\./, ''),
    name: u.name.concat('_', i),
    email: 'mail'.concat('_', u.email),
    position: u.position,
  }))

const getList = ({ page = 1, pagination = 5 }) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList.slice((page - 1) * pagination, page * pagination))
    }, 1500)
  })

const addUser = (userinfo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const { name, email, position } = userinfo
      if (!name || !email || !position) {
        reject('Not enough info to create user!')
      }
      if (userList.some((u) => u.email === email)) {
        reject('Email is existed!')
      }

      const newUser = {
        id: Math.random().toString().replace(/\d\./, ''),
        name,
        email,
        position,
      }
      userList.push(newUser)
      resolve(newUser)
    }, 1500)
  })

export { getList, addUser }
