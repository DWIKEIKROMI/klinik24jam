import React, {Component} from 'react';

class EditDokter extends Component {
    render() {
        return(
            <div>
                {/* <a href="/mahasiswa" className="btn btn-danger">Kembali</a> */}
                {/* <br />
                <br /> */}
                {/* <form action="/mahasiswa/update/{{ $mahasiswa->id }}" method="post"> */}
                <form method="post">
                {/* {'{'}{'{'} csrf_field() {'}'}{'}'} */}
                {/* <input type="hidden" name="id" defaultValue="{{ $mahasiswa->id }}" /> <br /> */}
                <div className="form-group">
                    <label htmlFor="namaDokter">Nama Dokter</label>
                    {/* <input type="text" className="form-control" required="required" name="namaDokter" defaultValue="{{ $mahasiswa->nama }}" /> <br /> */}
                    <input type="text" className="form-control" required="required" name="namaDokter"/> <br />
                </div>
                <div className="form-group">
                    <label htmlFor="alamatDokter">Alamat Dokter</label>
                    {/* <input type="number" className="form-control" required="required" name="alamatDokter" defaultValue="{{ $mahasiswa->nim }}" /> <br /> */}
                    <input type="text" className="form-control" required="required" name="alamatDokter"/> <br />
                </div>
                <div className="form-group">
                    <label htmlFor="spesialis">Spesialis</label>
                    {/* <input type="text" className="form-control" required="required" name="spesialis" defaultValue="{{ $mahasiswa->email }}" /> <br /> */}
                    <input type="text" className="form-control" required="required" name="spesialis"/> <br />
                </div>
                <div className="form-group">
                    <label htmlFor="id">Waktu Praktek</label>
                    {/* <input type="text" className="form-control" required="required" name="jurusanmhs" defaultValue="{{ $mahasiswa->jurusan }}" /> <br /> */}
                    {/* <Form.Label>Waktu Prakter</Form.Label> */}
                        <Form.Control as="select">
                        <option>Jam ... - ...</option>
                        <option>Jam ... - ...</option>
                        </Form.Control>
                    {/* </Form.Group> */}
                </div>
                <button type="submit" name="edit" className="btn btn-primary float-right">Simpan Data</button>
                </form>
            </div>
        );
    }
}