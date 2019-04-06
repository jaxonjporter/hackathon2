5.times do
  user = User.create(
    name: Faker::Name.name,
    nickname: Faker::Name.middle_name,
    email: Faker::Internet.email,
    password: 'password',
  )
  2.times do
    v = Video.create(
      title: Faker::Music::RockBand.name,
      video_url: 'https://youtu.be/dQw4w9WgXcQ',
      user_id: user.id
    )
    3.times do
      c = Comment.create(
        title: Faker::Movies::Hobbit.location,
        body: Faker::TvShows::MichaelScott.quote,
        user_id: user.id,
        video_id: v.id
      )
    end
  end
end

1.times do
  user = User.create(
    name: Faker::Name.name,
    nickname: Faker::Name.middle_name,
    email: 'test@test.com',
    password: 'password',
  )
  2.times do
    v = Video.create(
      title: Faker::Music::RockBand.name,
      video_url: 'https://youtu.be/dQw4w9WgXcQ',
      user_id: user.id
    )
    3.times do
      c = Comment.create(
        title: Faker::Movies::Hobbit.location,
        body: Faker::TvShows::MichaelScott.quote,
        user_id: user.id,
        video_id: v.id
      )
    end
  end
end

puts 'seeds planted'