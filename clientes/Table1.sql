CREATE TABLE [dbo].[Table1]
(
  [Name] NVARCHAR(50) NOT NULL,
  [Id] INT NOT NULL PRIMARY KEY
)

INSERT INTO [dbo].[Table1] ([Name], [Id]) 
VALUES ('John Doe', 1)
INSERT INTO [dbo].[Table1] ([Name], [Id]) 
VALUES ('Jane Smith', 2)


SELECT * FROM [dbo].[Table1];