const path = require("path");

// заповніть для себе userDescription
// додайте своє фото в public/images і змініть назву картинки в userImage

class UserController {
  // vlad controller
  static vladController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Vladyslav",
      userDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      userImage: "/images/vlad.jpg",
      github: "https://github.com/vladd4"
    });
  };

  // kolya controller
  static kolyaController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Mykola",
      userDescription: `Добряк здоровяк.`,
      userImage: "/images/kolya.jpg",
      github: "https://github.com/mykolavolokyta"
    });
  };

  // ruslan controller
  static ruslanController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Ruslan",
      userDescription: `<br>Студент групи ІП-23<br>
        Жадько Руслан Андрійович<br>
        Дата народження: 08.08.2005<br>
        Трейдер криптовалют (безхатько)`,
      userImage: "/images/ruslan.jpg",
      github: "https://github.com/rzhadkpi"
    });
  };

  // max controller
  static maxController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Max",
      userDescription: `<br>Студент групи ІП-23<br>
      Терещук Максим Русланович<br> 
      Фанат Динамо Київ`,
      userImage: "/images/max.jpg",
      github: "https://github.com/maxtereshchuk"
    });
  };
}

module.exports = UserController;
