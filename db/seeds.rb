Movie.destroy_all
User.destroy_all
Favorite.destroy_all

panda = Movie.create({
    title: "Kung Fu Panda 2",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxOTY1NjUyN15BMl5BanBnXkFtZTcwMjMxMDk1MQ@@._V1_SX300.jpg",
    released: "06 Jun 2008",
    rated: "PG",
    genre: "Animation, Action, Adventure",
    plot: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts."
     })

green = User.create({
    f_name: "Jon",
    l_name: "Strickland",
    email: "Strick@google.com",
    password: null,
    photo_url: "https://i.imgur.com/QBAPygx.png",
})

Favorite.create({
    title: "Cartoon Fav",
    user_id: green.id,
    movie_id: panda.id,
})