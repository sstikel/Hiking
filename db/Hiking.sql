--Create hikes table
  --columns of id, name, length, and comment
create table hikes(
     id int unsigned not null auto_increment,
     name varchar(120) not null,
     length int not null,
     comment varchar(500) not null,
     primary key (id));

--alter hikes table
  --insert location column
alter table hikes add location varchar(120) after name;

--insert rows/data into hikes
insert into hikes (name, location, length, comment) values
  ("Hunter Trail", "Picacho, AZ", 3.2, "A fun trail to the top of Picacho Peak with a view of the I-10 Interstate and the surrounding valley. Little shade on the trail."),
  ("Jug Trail #61", "Salome Wilderness, AZ", 2, "Super fun hike. Follow the trail in for 2 miles then drop into the canyon. Follow the water downstream (1 - 2 miles) while swimming, splashing, and riding the natural water slides until you come to the big jump off. From there it's either jump into the water below or repel. Swim the 1/4 mile out then hike back."),
  ("Old Baldy Trail", "Mt. Wrightson, AZ", 8, "A reasonably steep hike to the top of the mountian where you get an unobstructed 360 degree view."),
  ("West Clear Creak", "Camp Verde, AZ", 25, "This is an in-water backpacking trip. Be prepared to soak everything and generally be wet the whole time.");

--create user for api to use
create user 'hiking'@'localhost'
  identified by 'hiking';
grant select, insert, update, delete
  on hiking.hikes
  to 'hiking'@'localhost';