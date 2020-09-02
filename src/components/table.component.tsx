import React, { Component } from 'react';
import '../css/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SimpleOptions } from 'types';


library.add(faTrash, faEdit)

export class TableComponent extends Component {
    state: any;
    options: SimpleOptions;
    constructor(props: SimpleOptions) {
        super(props);
        this.options = props;
        this.state = {

            data: []
        }

        this.setState({
            data: []
        });

    }

    componentDidMount() {
        this.loadTableData();
    }


    loadTableData() {

        const apiUrl = `${this.options.apiHost}${this.options.apiPath}?format=json`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {

                this.setState({
                    data: data
                });
            });
    }



    editRow(ev: any) {
        const id = ev.currentTarget.dataset.id;
        alert('Edit Row' + id)
    }
    deleteRow(ev: any) {
        const id = ev.currentTarget.dataset.id;
        alert('Delete Row' + id)
    }

    getBadge(status: number) {
        if (status == 1) {
            return (
                <span className="custom-badge active">Active</span>
            );
        }
        else if (status == 2) {
            return (
                <span className="custom-badge pending">Pending</span>
            );
        }
        else if (status == 3) {
            return (
                <span className="custom-badge inactive">Inactive</span>
            );
        }
        else {
            return (<span>-</span>)
        }

    }

    render() {


        return (
            <div>
                <table id="dataRecords">
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Alert Id</th>
                            <th>Created At</th>
                            <th>Updated At</th>

                            <th>Url</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item: any, index: number) => {
                                return (

                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name || '-'}</td>

                                        <td>{item.alert_id}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at}</td>
                                        <td>{item.url}</td>
                                        <td>{this.getBadge(item.status)}</td>
                                        <td>
                                            <span className="action-icons edit" data-id={item.id} onClick={this.editRow}><a href="#"><FontAwesomeIcon icon="edit" /></a></span>
                                            <span className="action-icons delete" data-id={item.id} onClick={this.deleteRow}><a href="#"><FontAwesomeIcon icon="trash" /></a></span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>


            </div>
        );
    }
}

// Exporting the component 
export default TableComponent; 