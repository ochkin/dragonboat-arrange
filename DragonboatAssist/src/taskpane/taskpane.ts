/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import { dummy, random, backtrack } from "../backend";

/* global console, document, Excel, Office */

const TABLE_NAME = "Input";

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("startButton").onclick = prepare;
    document.getElementById("runButton").onclick = arrange;
  }
});

export async function prepare() {
  try {
    await Excel.run(async (context) => {
      /**
       * Insert your Excel code here
       */
      const range = context.workbook.getSelectedRange();
      // const topCell = range.getCell(0, 0)
      // const topRow = range.getRow(0)
      const topThree = range.getAbsoluteResizedRange( 1, 3 );
      // range.load("rowIndex,columnIndex")
      topThree.load("address");
      await context.sync();
      const sheet = range.worksheet;

      const table = sheet.tables.getItemOrNullObject( TABLE_NAME );
      await context.sync();

      if (table.isNullObject)
      {
        let expensesTable = sheet.tables.add( topThree.address, true );
        expensesTable.name = TABLE_NAME;
        expensesTable.getHeaderRowRange().values = [[ "Name", "Weight", "Side" ]];
        expensesTable.rows.add(null, [
          [ "Raymark", 65, "Left" ],
          [ "Roly", 63, "Both" ],
          [ "Iya", 54, "Right" ],
          [ "John", 67.6, "Both" ],
          [ "Leo", 59, "Both" ],

          [ "Doc Pat", 60, "Right" ],
          [ "LGrace", 63, "Left" ],
          [ "Joshua", 85, "Right" ],
          [ "Yormi", 66, "Left" ],
          [ "Jesus", 70, "Both" ],

          [ "Shin", 50, "Left" ],
          [ "Nanz", 91.0, "Right" ],
          [ "Sergey", 84.7, "Both" ],
          [ "Brandon", 89.1, "Right" ],
          [ "Eugene", 95, "Both" ],

          [ "Prashant", 64, "Right" ],
          [ "Kalesh", 70, "Right" ],
          [ "Kristoffer", 74, "Both" ],
          [ "Jenna", 60, "Right" ],
          [ "Norelee", 53, "Left" ]
        ]);

        if (Office.context.requirements.isSetSupported("ExcelApi", "1.2")) {
          sheet.getUsedRange().format.autofitColumns();
          sheet.getUsedRange().format.autofitRows();
        }
        sheet.activate();

        // await context.sync();
      }
      else
      {
        console.error(`Table ${TABLE_NAME} already exists!.`);
      }
    });
  } catch (error) {
    console.error(error);
  }
}


export async function arrange()
{
  try
  {
    await Excel.run( async (context) => {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const table = sheet.tables.getItemOrNullObject( TABLE_NAME );
      await context.sync();
      if (table.isNullObject)
      {
        console.error( "Input table not found." );
      }
      else
      {
        let input = table.getDataBodyRange().load("values,rowCount,columnCount");
        await context.sync();
        let output = backtrack( input.values )

        const header = table.getHeaderRowRange().load("rowIndex,columnIndex,rowCount,columnCount");
        await context.sync();
        let target = sheet.getRangeByIndexes(
          header.rowIndex,                 header.columnIndex + header.columnCount + 2,
          output.length + 1, output[0].length
          ).load( "rowIndex,columnIndex,rowCount,columnCount" );
        await context.sync();

        // clean up old data first
        let extendedRange = target.getExtendedRange( Excel.KeyboardDirection.down ).load(
          "address");
        extendedRange.clear();
        await context.sync();

        // now it is ok to write new data
        let lefts = sheet.getRangeByIndexes(
          target.rowIndex + 1, target.columnIndex, target.rowCount, 1
        ).load("address");
        let rights = sheet.getRangeByIndexes(
          target.rowIndex + 1, target.columnIndex + 1, target.rowCount, 1
        ).load("address");
        await context.sync();
        let formattedBoat = [
          [`=SUMPRODUCT(COUNTIF(${lefts.address},${TABLE_NAME}[Name]),${TABLE_NAME}[Weight]) / SUM(${TABLE_NAME}[Weight])`,
           `=SUMPRODUCT(COUNTIF(${rights.address},${TABLE_NAME}[Name]),${TABLE_NAME}[Weight]) / SUM(${TABLE_NAME}[Weight])`],
          ...output.slice(0)
        ];
        target.values = formattedBoat;

        let summaryHeader = target.getAbsoluteResizedRange(1,2);
        summaryHeader.numberFormat = [ ["0.0%"] ];
        await context.sync();
      }
    });
  }
  catch (error) {  console.error(error);  }
}