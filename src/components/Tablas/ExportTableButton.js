import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import './style.css';

function ExportTableButton(props) {
    const csvData = props.csvData;
    const fileName = props.fileName;
    const buttonText = props.buttonText;
    const buttonClass = props.buttonClass;
    const position = props.position;
    const icon = props.icon;
    const iconClass = props.iconClass;

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    let arr_2;
    arr_2 = csvData.map(e => Object.assign({}, e))
    csvData.forEach(elm => delete elm.id)

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        position ?
            <a href="#!" onClick={(e) => exportToCSV(csvData, fileName)} className={buttonClass} style={{ float: position }}>{buttonText}<i className={iconClass}>{icon}</i></a> :
            <a href="#!" onClick={(e) => exportToCSV(csvData, fileName)} className={buttonClass} >{buttonText}<i className={iconClass}>{icon}</i></a>
    )
}
export default ExportTableButton;