import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('abcde', 10),
    isAdmin: true
  },
  {
    name: 'Lewis John',
    email: 'Lewis@example.com',
    password: bcrypt.hashSync('abcde', 10),
    isAdmin: true
  },
  {
    name: 'Mike Mont',
    email: 'Mike@example.com',
    password: bcrypt.hashSync('abcde', 10),
    isAdmin: true
  }
]

export default users