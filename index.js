// // буду комментировать вообще все
// // потому что знаю что забуду всё нахуй
// // а технология новая
// // для кого я это пишу?
// // для себя которая найдет это когда будет писать свою социальную сеть
// // и поржет над этим кодом
// // ржешь?
// // а я вот нихуя не понимаю
// const express = require("express");
// const bodyParser = require("body-parser");
//
// // создвем прилодение
// const app = express();
//
// // для использованию метода Post
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
//
// // срздаем базу данных
// const posts = [
//     {
//         title: "Hello, World!",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non varius ipsum, eu rhoncus risus. Ut lacinia diam purus, a venenatis velit pretium vitae. Vivamus interdum metus eros, sed ultrices ipsum rutrum sit amet. Morbi vulputate nec tellus ut gravida. Aenean quis orci massa. Proin sollicitudin, quam eget pretium viverra, quam leo mattis diam, sit amet pretium orci lacus eu mi. Curabitur eu ex sapien. Donec odio enim, tempor quis turpis vel, interdum faucibus mi. Phasellus pulvinar, est eget molestie consectetur, odio sapien sollicitudin sem, vitae condimentum magna purus vel ligula. Sed vel mi turpis. Suspendisse lacus lorem, interdum sed luctus rhoncus, consequat in erat. Duis vitae justo non neque finibus ornare eget a libero. Vestibulum cursus in velit ac gravida. Sed pharetra sodales ex molestie venenatis. Etiam porta magna ac augue egestas, sit amet blandit libero cursus. Proin accumsan ornare cursus."
//     },
//     {
//         title: "Balda",
//         text: "Nulla id molestie eros. Suspendisse auctor iaculis ligula, sit amet luctus massa porttitor at. Aenean efficitur, enim ullamcorper ullamcorper lobortis, sapien tortor accumsan quam, sit amet placerat ex nisi ac neque. Cras commodo est eget libero blandit bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pharetra luctus neque, sed faucibus dolor hendrerit ac. Sed a ante magna. Maecenas malesuada enim a dictum varius. Aliquam velit leo, facilisis non metus non, vehicula cursus mi. Aenean sit amet magna quis lacus euismod scelerisque. Suspendisse potenti. Ut at sem porttitor, tempus eros vitae, viverra risus. Morbi consectetur erat quis turpis porttitor porttitor. Ut et lectus gravida, euismod mauris vitae, lobortis leo. Duis rutrum purus id arcu fringilla interdum."
//     },
//     {
//         title: "Lol",
//         text: "Curabitur ultricies magna eros, non aliquam eros hendrerit a. Donec consequat luctus dolor, eget elementum dolor posuere in. Vivamus in odio vel metus lacinia interdum ornare sit amet velit. Phasellus venenatis metus non ligula molestie, in vestibulum tellus aliquam. Duis imperdiet lacus sit amet nunc laoreet convallis. Phasellus ac scelerisque sapien. Sed sit amet enim ac mauris tempus consectetur non sed erat. Vestibulum fermentum tincidunt hendrerit. Nullam sit amet magna sed diam rhoncus dignissim eget et tortor. Suspendisse congue imperdiet tempor. Ut porta efficitur nisi, vel pellentesque orci placerat ut. Quisque sagittis nunc lobortis justo dignissim tincidunt. Duis non diam ac ipsum feugiat consequat quis et arcu."
//     }
// ]
//
// // получаем данные
// // передаем в get - маршрут и анонимную функцию
// // req - хранит всю инфу о запросе
// // res - используется для отправки ответа
// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });
//
// app.get('/posts/:id', function(req, res) {
//     const id = req.params.id;
//     return res.send(posts[id]);
// });
//
// app.post('/posts', function (req, res) {
//     const data = req.body;
//     posts.push(data);
//     console.log(data);
//
//     return res.send(posts);
// })
//
// // будет выполнятся после успешного запуска сервера
// app.listen(3333, function() {
//     console.log('SERVER WORK!');
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));