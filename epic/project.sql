DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS glossary;
DROP TABLE IF EXISTS gallery;

CREATE TABLE gallery(
    galleryId binary(16) not null,
    galleryDate date not null,
    primary key (galleryId)
);

CREATE TABLE glossary(
    glossaryId binary(16) not null,
    glossaryName binary(16) not null,
    primary key (glossaryId)
);

CREATE TABLE video(
    videoId binary(16) not null,
    videoImgId binary(16) not null,
    videoDateId date not null
    foreign key(videoImgId) references gallery(galleryId),
    primary key(videoId)
);

CREATE TABLE news(
    newsId binary(16) not null,
    newsImgId binary(16) not null,
    newsDate date not null,
    newsEvent varchar(32) not null,
    unique(newsEvent),
    foreign key(newsImgId) references gallery(galleryId),
    primary key(newsId)
);