import React, { Component } from 'react'
import API from '../service/index'

class Register extends Component {
    state = {
        insertRegister: {
            idUser: 1,
            namaUser: "",
            alamatUser: "",
            tgl_lahirUser: "",
            noHp: "",
            userId: "",
            pwUser: "",
            level: "Pasien"
        }
    }
    handleTambahRegister = (event) => {
        let formInsertRegister = { ...this.state.insertRegister };
        let timestamp = new Date().getTime();
        formInsertRegister['id'] = timestamp;
        formInsertRegister[event.target.name] = event.target.value;
        this.setState({
            insertRegister: formInsertRegister
        });
    }
    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertRegister)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }
    render() {
        return (
            <div>
                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                            <div class="login100-pic js-tilt" data-tilt>
                                <img src="images/415.png" alt="IMG" />
                            </div>

                            <form class="login100-form validate-form">
                                <span class="login100-form-title">
                                    Daftar Anggota
                            </span>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="namaUser" placeholder="Nama" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="AlamatUser" placeholder="Jalan, Kecamatan, Kota" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <label htmlFor="date">Select Date</label>
                                    <input type="date" name="tgl_lahirUser" defaultValue className="form-control" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="number" name="nohp" placeholder="Nomor Telepon" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" name="userId" placeholder="Email" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Password is required">
                                    <input class="input100" type="password" name="pwUser" placeholder="Password" onChange={this.handleTambahRegister} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn" onClick={this.handleTombolSimpan}>
                                        Daftar
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register
