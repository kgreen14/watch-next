User.destroy_all
Favorite.destroy_all

green = User.create({
    f_name: "Kris",
    l_name: "Green",
    email: "Kris@google.com",
    password: "merica14",
    photo_url: "https://i.imgur.com/VbeWDYn.jpg",
    id: 1
})

Favorite.create({
    title: "Cartoon Favs",
    user_id: green.id,
})