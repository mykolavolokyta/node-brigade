use e_commerce;

INSERT INTO category (id, category, parentCategoryId) VALUES
(1, 'Apple Iphone', NULL),
(2, 'Apple TV', NULL),
(3, 'Apple Macbook', NULL),
(4, 'Apple iPad', NULL),
(5, 'Airpods', NULL),
(6, 'Apple Watch', NULL),
(7, 'Iphone 12 pro', 1),
(8, 'Iphone 13 pro', 1),
(9, 'Iphone 14 pro', 1),
(10, 'Macbook M1', 3),
(11, 'Macbook Pro M2', 3),
(12, 'iPad 15', 4),
(13, 'iPad 16', 4),
(14, 'iPad 17', 4);

INSERT INTO admin (id, email, password) VALUES
	(1, 'admin@gmail.com', 'Admin2024');
    
INSERT INTO product (categoryID, title, description, price, quantity, imageUrl) VALUES
(1, 'title 1', 'description 1', 10, 5, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(2, 'title 2', 'description 2', 20, 5, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(3, 'title 3', 'description 3', 30, 5, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(4, 'title 4', 'description 4', 40, 5, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(5, 'title 5', 'description 5', 50, 5, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(6, 'title 6', 'description 6', 60, 6, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(7, 'title 7', 'description 7', 70, 7, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(8, 'title 8', 'description 8', 80, 8, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(9, 'title 9', 'description 9', 90, 9, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(10, 'title 10', 'description 10', 100, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(11, 'title 11', 'description 11', 110, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(12, 'title 12', 'description 12', 120, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(13, 'title 13', 'description 13', 130, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(14, 'title 14', 'description 14', 140, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(1, 'title 15', 'description 15', 150, 10, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png'),
(7, 'title 16', 'description 16', 1270, 7, 'https://www.istore.ua/upload/iblock/1b4/kir2acngziae43e6gpsdw28rgk6q8mld/15_pro_max_white_titan_4_is.png');
