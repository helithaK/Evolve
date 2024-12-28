CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS shop (
  name varchar(20) NOT NULL,
  address varchar(255) NOT NULL,
  phone_number varchar(10),
  logo_link varchar(255) NOT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS product (
  id UUID DEFAULT Uuid_generate_v4 (),
  title varchar(255) NOT NULL,
  shop_name varchar(20) NOT NULL,
  price varchar(50) NOT NULL,
  availability bool NOT NULL,
  description text NOT NULL,
  link varchar(255) NOT NULL,
  sizes varchar[],
  images varchar[],
  PRIMARY KEY (id),
  FOREIGN KEY (shop_name) REFERENCES shop(name)
);

CREATE TABLE IF NOT EXISTS new (
  product_id UUID NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);

INSERT INTO shop (name, address, phone_number, logo_link)
VALUES ('cherri', 'No. 37 Lauries Place, Duplication Road, Colombo 04, Sri Lanka', '0117160909', 'https://cherri.lk/assets/img/headerLogo.png') ON CONFLICT (name) DO NOTHING;



