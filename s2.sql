IF EXISTS (
		SELECT 1
		FROM sys.procedures
		WHERE Name = 'usp_GetMarketStats'
		)
BEGIN
	DROP PROCEDURE dbo.[usp_GetMarketStats]
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




--use [blackrock_db]
--exec [usp_GetMarketStats] default
CREATE PROCEDURE [dbo].[usp_GetMarketStats]
	(
	@p1 INT = NULL
	--,@p2 INT = NULL
	)
AS
BEGIN
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
		FROM [dbo].[blackrock_db.stock]

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

