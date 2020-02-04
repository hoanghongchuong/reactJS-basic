import React from 'react';
import './App.css';
import Product from '../Product/Product';
import Modal from '../Modal/Modal';

function App() {
  return (
    <div>
        <div className="container">
            <Product price="20000000" image="images/woman9.png" hot={true}>Áo 1</Product>
            <Product price="190000" image="images/woman7.png" hot={false}>Áo 2</Product>
            <Product price="130000" image="images/woman6.png" hot={true}>Áo 3</Product>
            <Product price="120000" image="images/woman8.png" hot={false}>Áo 4</Product>
        </div>
        <Modal></Modal>
        {/* <main className="my-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                                <form name="my-form">
                                    <div className="form-group row">
                                        <label htmlFor="full_name" className="col-md-4 col-form-label text-md-right">Full Name</label>
                                        <div className="col-md-6">
                                        <input type="text" id="full_name" className="form-control" name="full-name" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                        <input type="text" id="email_address" className="form-control" name="email-address" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="user_name" className="col-md-4 col-form-label text-md-right">User Name</label>
                                        <div className="col-md-6">
                                        <input type="text" id="user_name" className="form-control" name="username" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="phone_number" className="col-md-4 col-form-label text-md-right">Phone Number</label>
                                        <div className="col-md-6">
                                        <input type="text" id="phone_number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="present_address" className="col-md-4 col-form-label text-md-right">Present Address</label>
                                        <div className="col-md-6">
                                        <input type="text" id="present_address" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="permanent_address" className="col-md-4 col-form-label text-md-right">Permanent Address</label>
                                        <div className="col-md-6">
                                        <input type="text" id="permanent_address" className="form-control" name="permanent-address" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="nid_number" className="col-md-4 col-form-label text-md-right"><abbr title="National Id Card">NID</abbr> Number</label>
                                        <div className="col-md-6">
                                        <input type="text" id="nid_number" className="form-control" name="nid-number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 offset-md-4">
                                        <button className="btn btn-primary">
                                        Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> */}
    </div>
  );
}

export default App;
