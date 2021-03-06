USE [master]
GO
/****** Object:  Database [TamarChadad_BruriaGreenwald_FinalProject]    Script Date: 03/10/2021 00:58:32 ******/
CREATE DATABASE [TamarChadad_BruriaGreenwald_FinalProject]
 CONTAINMENT = NONE

GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TamarChadad_BruriaGreenwald_FinalProject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ARITHABORT OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET RECOVERY FULL 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET  MULTI_USER 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TamarChadad_BruriaGreenwald_FinalProject', N'ON'
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET QUERY_STORE = OFF
GO
USE [TamarChadad_BruriaGreenwald_FinalProject]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Cid] [int] IDENTITY(1,1) NOT NULL,
	[Cname] [nvarchar](50) NOT NULL,
	[Cdescription] [nvarchar](50) NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Cid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[File]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[File](
	[Fid] [int] IDENTITY(1,1) NOT NULL,
	[Fname] [nvarchar](50) NOT NULL,
	[Fpath] [nvarchar](200) NOT NULL,
	[FtypeId] [int] NOT NULL,
	[FprogramId] [int] NOT NULL,
 CONSTRAINT [PK_File] PRIMARY KEY CLUSTERED 
(
	[Fid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FileType]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FileType](
	[FTid] [int] IDENTITY(1,1) NOT NULL,
	[FTname] [nvarchar](50) NOT NULL,
	[FTdescription] [nvarchar](300) NULL,
 CONSTRAINT [PK_FileType] PRIMARY KEY CLUSTERED 
(
	[FTid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Program]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Program](
	[Pid] [int] IDENTITY(1,1) NOT NULL,
	[Pname] [nvarchar](50) NOT NULL,
	[PcategoryId] [int] NOT NULL,
	[Pprice] [int] NOT NULL,
	[PextraPriceForAdditionalScreening] [int] NOT NULL,
	[PproductionDate] [date] NOT NULL,
	[Ptype] [nvarchar](50) NULL,
	[PtargetAudience] [nvarchar](50) NULL,
	[Ptime] [int] NULL,
	[Pdescription] [nvarchar](max) NULL,
 CONSTRAINT [PK_Program] PRIMARY KEY CLUSTERED 
(
	[Pid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rent]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rent](
	[Rid] [int] IDENTITY(1,1) NOT NULL,
	[RuserId] [int] NOT NULL,
	[RfromDate] [datetime] NOT NULL,
	[RtoDate] [datetime] NOT NULL,
	[Rprice] [int] NOT NULL,
	[Rpassword] [nvarchar](15) NOT NULL,
	[Ractive] [bit] NOT NULL,
	[RprogramId] [int] NOT NULL,
	[Rstatus] [bit] NOT NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[Rid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Response]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Response](
	[RSid] [int] IDENTITY(1,1) NOT NULL,
	[RSprogramId] [int] NOT NULL,
	[RSuserId] [int] NOT NULL,
	[RSdescription] [nvarchar](max) NOT NULL,
	[RSshown] [bit] NOT NULL,
 CONSTRAINT [PK_Response] PRIMARY KEY CLUSTERED 
(
	[RSid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 03/10/2021 00:58:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Uid] [int] IDENTITY(1,1) NOT NULL,
	[UfirstName] [nvarchar](50) NOT NULL,
	[UlastName] [nvarchar](50) NOT NULL,
	[Uaddress] [nvarchar](50) NULL,
	[Uemail] [nvarchar](50) NOT NULL,
	[Uphone] [nvarchar](10) NOT NULL,
	[Upassword] [nvarchar](15) NOT NULL,
	[UuserName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Uid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([Cid], [Cname], [Cdescription]) VALUES (1, N'ערבי גיבוש', N'')
INSERT [dbo].[Category] ([Cid], [Cname], [Cdescription]) VALUES (2, N'בת מצוה', NULL)
INSERT [dbo].[Category] ([Cid], [Cname], [Cdescription]) VALUES (3, N'צוותי הוראה', NULL)
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[File] ON 

INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (3, N'climax', N'videos/trailer', 1, 3)
INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (5, N'crown', N'videos/trailer', 1, 4)
INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (7, N'feeling', N'videos/trailer', 1, 5)
INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (10, N'climax', N'images', 4, 3)
INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (11, N'crown', N'images', 4, 4)
INSERT [dbo].[File] ([Fid], [Fname], [Fpath], [FtypeId], [FprogramId]) VALUES (12, N'feeling', N'images', 4, 5)
SET IDENTITY_INSERT [dbo].[File] OFF
SET IDENTITY_INSERT [dbo].[FileType] ON 

INSERT [dbo].[FileType] ([FTid], [FTname], [FTdescription]) VALUES (1, N'trailer', NULL)
INSERT [dbo].[FileType] ([FTid], [FTname], [FTdescription]) VALUES (2, N'extended', NULL)
INSERT [dbo].[FileType] ([FTid], [FTname], [FTdescription]) VALUES (3, N'final', NULL)
INSERT [dbo].[FileType] ([FTid], [FTname], [FTdescription]) VALUES (4, N'image', NULL)
SET IDENTITY_INSERT [dbo].[FileType] OFF
SET IDENTITY_INSERT [dbo].[Program] ON 

INSERT [dbo].[Program] ([Pid], [Pname], [PcategoryId], [Pprice], [PextraPriceForAdditionalScreening], [PproductionDate], [Ptype], [PtargetAudience], [Ptime], [Pdescription]) VALUES (3, N'שעת השיא', 1, 350, 300, CAST(N'2019-01-01' AS Date), N'הפעלה', N'נשים ובנות', 1, N'הי תכנית קצבית, מגבשת וחוויתית במיוחד, למי שמחפשת אווירה כיפית וקלילה מצד אחד, אך רמה גבוהה ומסר מחזק מצד שני.')
INSERT [dbo].[Program] ([Pid], [Pname], [PcategoryId], [Pprice], [PextraPriceForAdditionalScreening], [PproductionDate], [Ptype], [PtargetAudience], [Ptime], [Pdescription]) VALUES (4, N'אל הכתר', 2, 350, 300, CAST(N'2019-01-02' AS Date), N'הפעלה', N'נשים ובנות', 1, N'התכנית פעילה וחגיגית כאחד קולעת מאד לבת מצוה! מצד אחד מאד פעילה, חוויתית ומגבשת מצד שני מעניקה לארוע אויירה מרוממת ותוכן יהודי.')
INSERT [dbo].[Program] ([Pid], [Pname], [PcategoryId], [Pprice], [PextraPriceForAdditionalScreening], [PproductionDate], [Ptype], [PtargetAudience], [Ptime], [Pdescription]) VALUES (5, N'להרגיש', 3, 350, 300, CAST(N'2020-01-01' AS Date), N'הפעלה', N'צוותי הוראה', 1, N'הפעלה אינטראקטיבית שתעניק התנסות בלתי נשכחת ותותיר את הצוות שלך עם כלים של רגישות והכלה שילכו איתן רחוק.')
SET IDENTITY_INSERT [dbo].[Program] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Uid], [UfirstName], [UlastName], [Uaddress], [Uemail], [Uphone], [Upassword], [UuserName]) VALUES (1, N'Bruria', N'Greenwald', N'Hoshea', N'bruria5460@gmail.com', N'0556785460', N'317813152', N'bruriag')
SET IDENTITY_INSERT [dbo].[User] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_User]    Script Date: 03/10/2021 00:58:33 ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_User] ON [dbo].[User]
(
	[UuserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[File]  WITH CHECK ADD  CONSTRAINT [FK_File_FileType] FOREIGN KEY([FtypeId])
REFERENCES [dbo].[FileType] ([FTid])
GO
ALTER TABLE [dbo].[File] CHECK CONSTRAINT [FK_File_FileType]
GO
ALTER TABLE [dbo].[File]  WITH CHECK ADD  CONSTRAINT [FK_File_Program] FOREIGN KEY([FprogramId])
REFERENCES [dbo].[Program] ([Pid])
GO
ALTER TABLE [dbo].[File] CHECK CONSTRAINT [FK_File_Program]
GO
ALTER TABLE [dbo].[Program]  WITH CHECK ADD  CONSTRAINT [FK_Program_Category] FOREIGN KEY([PcategoryId])
REFERENCES [dbo].[Category] ([Cid])
GO
ALTER TABLE [dbo].[Program] CHECK CONSTRAINT [FK_Program_Category]
GO
ALTER TABLE [dbo].[Rent]  WITH CHECK ADD  CONSTRAINT [FK_Renting_Renting] FOREIGN KEY([RprogramId])
REFERENCES [dbo].[Program] ([Pid])
GO
ALTER TABLE [dbo].[Rent] CHECK CONSTRAINT [FK_Renting_Renting]
GO
ALTER TABLE [dbo].[Rent]  WITH CHECK ADD  CONSTRAINT [FK_Table_1_User] FOREIGN KEY([RuserId])
REFERENCES [dbo].[User] ([Uid])
GO
ALTER TABLE [dbo].[Rent] CHECK CONSTRAINT [FK_Table_1_User]
GO
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_Response] FOREIGN KEY([RSprogramId])
REFERENCES [dbo].[Program] ([Pid])
GO
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_Response]
GO
ALTER TABLE [dbo].[Response]  WITH CHECK ADD  CONSTRAINT [FK_Response_User] FOREIGN KEY([RSuserId])
REFERENCES [dbo].[User] ([Uid])
GO
ALTER TABLE [dbo].[Response] CHECK CONSTRAINT [FK_Response_User]
GO
USE [master]
GO
ALTER DATABASE [TamarChadad_BruriaGreenwald_FinalProject] SET  READ_WRITE 
GO
