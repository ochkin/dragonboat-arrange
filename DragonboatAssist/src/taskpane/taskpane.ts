/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import { dummy } from "../backend";

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
          [ "Alice", 65.0, "Left"],
          [ "Bob", 72.1, "Right"],
          [ "Chad", 85.6, "Both"],
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

        let output = dummy( input.values )

        const header = table.getHeaderRowRange().load("rowIndex,columnIndex,rowCount,columnCount");
        await context.sync();
        let target = sheet.getRangeByIndexes(
          header.rowIndex,                 header.columnIndex + header.columnCount + 2,
          output.length, output[0].length
          ).load( "rowCount,columnCount" );
        await context.sync();

        console.log(`Source: ${output.length}, ${output[0].length} `)
        console.log(`Target: ${target.rowCount}, ${target.columnCount} `)
        

        target.values = output;
        await context.sync()
      }
    });
  }
  catch (error) {  console.error(error);  }
}