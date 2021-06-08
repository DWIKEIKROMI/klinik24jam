import React, { Component, Form } from 'react';

class TambahDokter extends Component {
    render() {
        return (
            <div>
                {/* <form action="/mahasiswa/simpan" method="post"> */}
                <div className="card-body">
                    <form method="post">
                        {/* {'{'}{'{'} csrf_field() {'}'}{'}'} */}
                        <div className="form-group">
                            <label htmlFor="namaDoketer">Nama Doketer</label>
                            <input type="text" className="form-control" required="required" name="namaDoketer" /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alamatDokter">Alamat Dokter</label>
                            <input type="number" className="form-control" required="required" name="alamatDokter" /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="spesialis">Spesialis</label>
                            <input type="text" className="form-control" required="required" name="spesialis" /> <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_waktu">Waktu Praktek</label>
                            {/* <input type="text" className="form-control" required="required" name="id_waktu" /> <br /> */}
                            <Form.Control as="select">
                                <option>Jam ... - ...</option>
                                <option>Jam ... - ...</option>
                            </Form.Control>
                        </div>
                        <button type="submit" name="tambah" className="btn btn-primary float-right">Tambah Data Dokter</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default TambahDokter;