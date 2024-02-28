class UserController {
  // vlad controller
  static vladController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Vladyslav",
      userDescription: `<br>Студент групи ІП-23<br>
      Донець Владислав Віталійович`,
      userImage: "/images/vlad.jpg",
      github: "https://github.com/vladd4",
    });
  };

  // kolya controller
  static kolyaController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Mykola",
      userDescription: `<br>Студент групи ІП-23<br>
      Волокита Микола Артемович<br>
      Добряк здоровяк`,
      userImage: "/images/kolya.jpg",
      github: "https://github.com/mykolavolokyta",
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
      github: "https://github.com/rzhadkpi",
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
      github: "https://github.com/maxtereshchuk",
    });
  };
}

module.exports = UserController;
