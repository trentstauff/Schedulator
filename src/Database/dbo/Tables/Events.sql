CREATE TABLE [dbo].[Events] (
    [EventId]              BIGINT             IDENTITY (1, 1) NOT NULL,
    [UserId]               NVARCHAR (450)     NOT NULL,
    [StartDatetime]        DATETIMEOFFSET (7) NULL,
    [EndDatetime]          DATETIMEOFFSET (7) NOT NULL,
    [Title]                NVARCHAR (100)     NOT NULL,
    [Description]          NVARCHAR (1000)    NULL,
    [Reminder]             DATETIMEOFFSET (7) NULL,
    [Priority]             TINYINT            NOT NULL,
    [TimeRequired]         DATETIME2 (7)      NULL,
    [Difficulty]           TINYINT            NULL,
    [CreationDatetime]     DATETIMEOFFSET (7) NOT NULL,
    [ModificationDatetime] DATETIMEOFFSET (7) NOT NULL,
    PRIMARY KEY CLUSTERED ([EventId] ASC),
    CONSTRAINT [FK_Events_AspNetUsers] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id])
);


