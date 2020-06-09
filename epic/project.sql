DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS glossary;
DROP TABLE IF EXISTS news;

CREATE TABLE media(
    imgId varchar(255) not null,
    mediaIsVideo tinyint not null,
    mediaDescription varchar(512) not null,
    mediaDate datetime(3) not null,
    primary key (imgId)
);

CREATE TABLE glossary(
    glossaryId varchar(255) not null,
    glossaryName varchar(255) not null,
    glossaryDefinition varchar(255) not null,
    primary key (glossaryId)
);

CREATE TABLE news(
    newsId varchar(255) not null,
    newsImg varchar(255) not null,
    newsDescription varchar(255) not null,
    newsUrl varchar(255) not null,
    newsTitle varchar(255) not null,
    unique(newsTitle),
    primary key(newsId)
);