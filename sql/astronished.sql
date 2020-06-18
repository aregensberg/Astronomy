DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS glossary;
DROP TABLE IF EXISTS news;

CREATE TABLE media(
    mediaId binary(16) not null,
    mediaAlt varchar(128) not null,
    mediaDescription varchar(512) not null,
    mediaIsVideo tinyint not null,
    mediaUrl varchar(300) not null ,
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

INSERT INTO glossary(glossaryId, glossaryName, glossaryDefinition) VALUES(UUID_TO_BIN(UUID()), "glossaryPlaceholderName", "glossaryPlaceholderDef");
INSERT INTO glossary(glossaryId, glossaryName, glossaryDefinition) VALUES(UUID_TO_BIN(UUID()), "Cool glossary entry", "Cool definitionf");
INSERT INTO news(newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate) VALUES(UUID_TO_BIN(UUID()), "newsPlaceholderImg", "newsPlaceholderDesc", "newsPlaceholderUrl", "newsPlaceholderTitle", Now());
INSERT INTO news(newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate) VALUES(UUID_TO_BIN(UUID()), "Awesome news picture", "Awesome news description", "https://thisisa.url", "Awesome title", Now());