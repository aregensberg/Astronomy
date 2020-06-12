DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS glossary;
DROP TABLE IF EXISTS news;

CREATE TABLE media(
    mediaId binary(16) not null,
    mediaIsVideo tinyint not null,
    mediaDescription varchar(512) not null,
    mediaDate datetime(3) not null,
    primary key (mediaId)
);

CREATE TABLE glossary(
    glossaryId binary(16) not null,
    glossaryName varchar(255) not null,
    glossaryDefinition varchar(255) not null,
    primary key (glossaryId)
);

CREATE TABLE news(
    newsId binary(16) not null,
    newsImg varchar(255) not null,
    newsDescription varchar(255) not null,
    newsUrl varchar(255) not null,
    newsTitle varchar(255) not null,
    newsDate datetime(3) not null,
    unique(newsTitle),
    primary key(newsId)
);