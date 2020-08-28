IF EXISTS (
		SELECT 1
		FROM sys.procedures
		WHERE Name = 'usp_GetDateRangeList'
		)
BEGIN
	DROP PROCEDURE dbo.[usp_GetDateRangeList]
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--use [blackrock_db]
--exec sp_executesql N'usp_GetDateRangeList @p1,@p2',N'@p1 nvarchar(10),@p2 nvarchar(10)',@p1=N'12/01/2020',@p2=N'11/09/2020'
CREATE PROCEDURE [dbo].[usp_GetDateRangeList] (
	@p1 VARCHAR(10) = NULL
	,@p2 VARCHAR(10) = NULL
	)
AS
BEGIN
	SET @p1 = convert(VARCHAR, cast(@p1 AS DATE), 112)
	SET @p2 = convert(VARCHAR, cast(@p2 AS DATE), 112)

	print @p1
	print @p2

	DECLARE @transtate BIT

	IF @@TRANCOUNT = 0
	BEGIN
		SET @transtate = 1

		BEGIN TRANSACTION transtate
	END

	BEGIN TRY
		SELECT id
			,company_name
			,CONVERT(VARCHAR(10), stock_date, 103) AS stock_date
			,stock_open
			,stock_high
			,stock_low
			,stock_close
			,stock_adj_close
			,stock_volume
			,stock_net
		INTO #T1
		FROM [dbo].[blackrock_db.stock]




		SELECT 
			id
			,company_name
			,stock_date
			,stock_open
			,stock_high
			,stock_low
			,stock_close
			,stock_adj_close
			,stock_volume
			,stock_net

		FROM #T1
	--	WHERE convert(VARCHAR, cast(stock_date AS DATE) ,112) BETWEEN @p1 and @p2
		




		DROP TABLE #T1

		IF @transtate = 1
			AND XACT_STATE() = 1
			COMMIT TRANSACTION transtate
	END TRY

	BEGIN CATCH
		DECLARE @Error_Message VARCHAR(5000)
		DECLARE @Error_Severity INT
		DECLARE @Error_State INT

		SELECT @Error_Message = ERROR_MESSAGE()

		SELECT @Error_Severity = ERROR_SEVERITY()

		SELECT @Error_State = ERROR_STATE()

		IF @transtate = 1
			AND XACT_STATE() <> 0
			ROLLBACK TRANSACTION

		RAISERROR (
				@Error_Message
				,@Error_Severity
				,@Error_State
				)
	END CATCH
END

SET ANSI_NULLS OFF
GO

SET QUOTED_IDENTIFIER OFF
GO

