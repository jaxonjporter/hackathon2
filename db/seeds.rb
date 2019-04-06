5.times do
  user = User.create(
    name: Faker::Name.last_name,
    email: 'test@test.com',
    password: 'password',
    admin: true
  )