INSERT INTO locations (name, coordinates) VALUES 
('mountains', '37.782956, -122.409465'),
('lavender field', '37.780195, -122.447158'),
('dock', '37.710318, -122.494732'),
('street art 1', '38.320745, -122.295253'),
('street art 2', '37.905197, -122.565637'),
('streets', '37.794757, -122.460072');

INSERT INTO users (username) VALUES 
('sebastian'),
('farrah'),
('milos');

INSERT INTO photos (location_id, user_id, uri, date) VALUES 
(1, 1, 'https://static.pexels.com/photos/27403/pexels-photo-27403.jpg', CURRENT_TIMESTAMP),
(2, 1, 'http://sympathink.com/wp-content/uploads/astrophotography-camera-settings-380x253.jpg', CURRENT_TIMESTAMP),
(3, 2, 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg', CURRENT_TIMESTAMP),
(6, 2, 'http://www.imgbase.info/images/safe-wallpapers/photography/cityscape/7250_cityscape_city_streets.jpg', CURRENT_TIMESTAMP),
(6, 3, 'http://eskipaper.com/images/cityscape-16.jpg', CURRENT_TIMESTAMP),
(4, 3, 'http://static3.businessinsider.com/image/56f020c09105842b008b7af5-1200/3dasicfernandezrubin415greenpoint-street-art-yoav-litvin.jpg', CURRENT_TIMESTAMP),
(5, 1, 'http://i.amz.mshcdn.com/EfIk8e1MhGGwjlDaTcic1UpYRQA=/1200x627/2014%2F10%2F13%2Fe0%2FStreetArt.dad09.jpg', CURRENT_TIMESTAMP),
(1, 1, 'https://drscdn.500px.org/photo/15660849/m%3D900/6d16343fcbb1d8998e1635e83de6482a', CURRENT_TIMESTAMP),
(6, 2, 'https://isl.co.ke/wp-content/uploads/2017/01/Reed-Hoffmann-Night-Photography-amusement-park-1.jpg', CURRENT_TIMESTAMP);

INSERT INTO comments (location_id, user_id, content, date) VALUES 
(1, 1, 'I can see my house from here!', CURRENT_DATE),
(2, 1, 'Cool Lavender farm. Very purple.', CURRENT_DATE),
(3, 2, 'Beautiful around sunset.', CURRENT_DATE),
(4, 3, 'Had a great fashion shoot here!', CURRENT_DATE),
(5, 1, 'Got mugged and didn''t even notice. This mural is awesome.', CURRENT_DATE),
(6, 2, 'Great vantage point.', CURRENT_DATE),
(1, 3, 'Bring oxygen tanks.', CURRENT_DATE),
(2, 3, 'Smelly', CURRENT_DATE),
(3, 3, 'Awesome for night shots', CURRENT_DATE);

INSERT INTO likes (target_class, target_id, user_id) VALUES 
('photo', 1, 1), 
('photo', 4, 1), 
('photo', 3, 1), 
('photo', 4, 2), 
('photo', 7, 2), 
('photo', 1, 2),
('comment', 1, 1), 
('comment', 2, 1), 
('comment', 3, 1), 
('location', 1, 1), 
('location', 2, 1), 
('location', 3, 1);

INSERT INTO quotes (content) VALUES 
('"Sebastian is an incredible engineer and you should hire him" -Everyone');

INSERT INTO landing_images (name, uri) VALUES 
('some pic', 'https://static.pexels.com/photos/27403/pexels-photo-27403.jpg');
