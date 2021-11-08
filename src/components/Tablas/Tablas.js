import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';
import { render } from '@testing-library/react';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import ExportTableButton from './ExportTableButton';


function Tablas(props) {
    let data = props.data;
    const title = props.title;
    const columns = props.columns;
    const keyField = props.keyField;
    const buttons = props.buttons;
    const filter = props.filter;
    const customFilter = props.customFilter;
    const buttonsSearchLevel = props.buttonsSearchLevel;
    const haveDownloadButton = props.haveDownloadButton;
    const rowEvents = props.rowEvents;
    const { SearchBar } = Search;

    const sizePerPageOptionRenderer = ({
        text,
        page,
        onSizePerPageChange
    }) => (
        <li
            key={text}
            role="presentation"
            className="dropdown-item"
        >
            <a
                href="#"
                tabIndex="-1"
                role="menuitem"
                data-page={page}
                onMouseDown={(e) => {
                    e.preventDefault();
                    onSizePerPageChange(page);
                }}
                style={{
                    position: 'absolute !important',
                    color: '#999999',
                    fontSize: '0.71rem',
                    textAlign: 'center !important',
                    width: 'fit-content !important',
                    minWidth: '3rem !important'
                }}
            >
                {text}
            </a>
        </li>
    );

    const options = {
        custom: true,
        totalSize: data.length,
        sizePerPageOptionRenderer,
    };

    const listButtons = [];
    if (buttons) {
        for (let index = 0; index < buttons.length; index++) {
            {
                buttons[index].position ?
                    listButtons.push(<a href={buttons[index].link} className={buttons[index].buttonClass} style={{ float: buttons[index].position }}> {buttons[index].name} <i className={buttons[index].iconClass}>{buttons[index].icon}</i></a>) :
                    listButtons.push(<a href={buttons[index].link} className={buttons[index].buttonClass}> {buttons[index].name} <i className={buttons[index].iconClass}>{buttons[index].icon}</i></a>)
            }
        }
    }

    const listButtonsSearchLevel = [];
    if (buttonsSearchLevel) {
        if (haveDownloadButton) {
            listButtonsSearchLevel.push(< ExportTableButton
                csvData={data}
                fileName={typeof title === 'undefined' ? 'table' : title}
                buttonClass="sega_button-secondary sega_button-icon-right"
                position="right"
                icon="download"
                iconClass="material-icons-outlined sega_icon"
            />);
        }
        for (let index = 0; index < buttonsSearchLevel.length; index++) {
            {
                buttonsSearchLevel[index].position ?
                    listButtonsSearchLevel.push(<a href={buttonsSearchLevel[index].link} className={buttonsSearchLevel[index].buttonClass} style={{ float: buttonsSearchLevel[index].position }}> {buttonsSearchLevel[index].name} <i className={buttonsSearchLevel[index].iconClass}>{buttonsSearchLevel[index].icon}</i></a>) :
                    listButtonsSearchLevel.push(<a href={buttonsSearchLevel[index].link} className={buttonsSearchLevel[index].buttonClass}> {buttonsSearchLevel[index].name} <i className={buttonsSearchLevel[index].iconClass}>{buttonsSearchLevel[index].icon}</i></a>)
            }
        }
    }

    return (
        <ToolkitProvider
            keyField={keyField}
            data={data}
            columns={columns}
            search
        >
            {
                props => (
                    <div>
                        <PaginationProvider
                            pagination={paginationFactory(options)}
                        >{
                                ({
                                    paginationProps,
                                    paginationTableProps
                                }) => (
                                    <div className="sega_table sega_elevation-depth4">
                                        <table>
                                            {title ? <thead>
                                                <tr>
                                                    <th className="sega_table-title" colSpan="8">{title}</th>
                                                </tr>
                                            </thead> : null
                                            }
                                            <tbody>
                                                <tr>
                                                    <td className="sega_table-top-buttons">
                                                        {
                                                            customFilter ? customFilter : null
                                                        }
                                                        <div className="right-inner-addon sega_input">
                                                            <SearchBar {...props.searchProps}
                                                                style={{ backgroundColor: 'white' }}
                                                                className='sega_bootstrapInput'
                                                                srText=''
                                                                placeholder="Buscar..." />
                                                            <i className="material-icons-outlined sega_secondaryTypoColor-text">search</i>
                                                        </div>
                                                        {listButtonsSearchLevel}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    {buttons ? <td className="sega_table-top-buttons" colSpan="8">
                                                        {listButtons}
                                                    </td> : null}
                                                </tr>
                                                <div style={{ marginTop: '1.35rem' }} className="sega_bootstrapTable">
                                                    <BootstrapTable keyField={keyField}
                                                        data={data}
                                                        columns={columns}
                                                        filter={filter}
                                                        headerClasses="sega_table-headers"
                                                        bodyClasses="sega_table-content"
                                                        footerClasses="sega_table-footer"
                                                        cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
                                                        selectRow={{ mode: 'checkbox', clickToSelect: true }}
                                                        rowEvents={rowEvents}
                                                        {...paginationTableProps}
                                                        {...props.baseProps}
                                                    />
                                                </div>
                                                <tr>
                                                    <td className='sega_table-footer' colSpan='8'>
                                                        <div className='sega_pagination_wrapper'>
                                                            <div className='sega_rows'>
                                                                <div className="sega_h6 sega_secondaryTypoColor-text" style={{ margin: "0.5rem", fontWeight: 400 }}>filas por página</div>
                                                                <SizePerPageDropdownStandalone
                                                                    {...paginationProps}
                                                                />
                                                            </div>
                                                            <div className='sega_pages'><div className='sega_text sega_secondaryTypoColor-text'><span className='sega_secondaryTypoColor-text'></span></div></div>
                                                            <div className='sega_pagination'>
                                                                <PaginationListStandalone
                                                                    {...paginationProps}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                )}
                        </PaginationProvider>
                    </div>
                )
            }
        </ToolkitProvider>



    )
}

export default Tablas