DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS glossary;
DROP TABLE IF EXISTS news;

CREATE TABLE media(
    imgId binary(16) not null,
    mediaIsVideo binary(BOOLEAN) not null,
    videoDescriptionId binary(32) not null,
    videoDateId datetime(3) not null,
    primary key (imgId)
);

CREATE TABLE glossary(
    glossaryId binary(16) not null,
    glossaryName binary(16) not null,
    glossaryDefinition binary(32) not null,
    primary key (glossaryId)
);

CREATE TABLE news(
    newsId binary(16) not null,
    newsImg binary(16) not null,
    newsDescription binary(16) not null,
    newsUrl varchar(32) not null,
    newsTitle binary(16) not null,
    unique(newsTitle),
    primary key(newsId)
);