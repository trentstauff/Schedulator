CREATE TABLE [dbo].[Events]
(
	[EventId] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] NVARCHAR(450) NOT NULL, 
    [StartDatetime] DATETIMEOFFSET NULL, 
    [EndDatetime] DATETIMEOFFSET NOT NULL, 
    [Title] NVARCHAR(100) NOT NULL, 
    [Description] NVARCHAR(1000) NULL, 
    [Reminder] DATETIMEOFFSET NULL, 
    [Priority] TINYINT NOT NULL, 
    [TimeRequired] DATETIME2 NULL, 
    [Difficulty] TINYINT NULL, 
    [CreationDatetime] DATETIMEOFFSET NOT NULL, 
    [ModificationDatetime] DATETIMEOFFSET NOT NULL, 
    CONSTRAINT [FK_Events_AspNetUsers] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers]([Id])
)
