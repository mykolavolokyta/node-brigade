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
    });
  };

  // kolya controller
  static kolyaController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Kolya",
      userDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      userImage: "vlad.jpg",
    });
  };

  // ruslan controller
  static ruslanController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Ruslan",
      userDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      userImage: path.join(__dirname, "../public/assets/vlad.jpg"),
    });
  };

  // max controller
  static maxController = (req, res, next) => {
    res.render("../views/user", {
      userName: "Max",
      userDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      userImage: "vlad.jpg",
    });
  };
}

module.exports = UserController;
