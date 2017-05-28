import React from "react";

export default class App extends React.Component {

    render() {
        return (
            <div className="app container">
                <h2>Bootstrap Alert Box and Table Example</h2>
                <div className="alert alert-success" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <strong>Well done!</strong> You successfully read this important alert message.</div>
                <div className="alert alert-info" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.</div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
