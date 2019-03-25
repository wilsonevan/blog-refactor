20.times do
	Post.create(
		title: Faker::TvShows::GameOfThrones.character, 
		content: Faker::Lorem.paragraph(4),
	)
end