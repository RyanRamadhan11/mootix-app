import { Link } from 'react-router-dom';

function Join() {
    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Beranda</Link>
                        <span>Join Us</span>
                    </div>

                    <div className="content">
                        <h2 className="section-title">Jelajahi dan Pesan Tiket Film Favorit Anda</h2>
                        <p>Selamat datang di Mootix App, tujuan utama Anda untuk menjelajahi dan memesan tiket untuk film terbaru. Temukan dunia hiburan di ujung jari Anda.</p>

                        <h2 className="section-title">Cara Kerjanya</h2>
                        <p>Di Mootix, kami telah membuat pemesanan tiket menjadi sangat mudah. Ikuti langkah-langkah sederhana ini untuk menikmati film favorit Anda:</p>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <h3 className="feature-title">Jelajahi Film</h3>
                                    <small className="feature-subtitle">Telusuri Koleksi Kami</small>
                                    <p>Temukan berbagai film dari berbagai genre. Baik Anda menyukai aksi, drama, fantasi, atau petualangan, kami punya semuanya.</p>
                                    <Link to="/movies" className="button">Jelajahi Film</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <h3 className="feature-title">Pilih Waktu Tayang</h3>
                                    <small className="feature-subtitle">Pilih Jadwal yang Anda Inginkan</small>
                                    <p>Pilih waktu tayang yang sesuai dengan jadwal Anda. Kami menawarkan opsi waktu yang fleksibel untuk membuatnya nyaman bagi Anda.</p>
                                    <Link to="/showtimes" className="button">Lihat Jadwal</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <h3 className="feature-title">Pesan Tiket Anda</h3>
                                    <small className="feature-subtitle">Amankan Kursi Anda</small>
                                    <p>Setelah menemukan film dan waktu tayang yang sempurna, pesan tiket Anda dengan mudah. Kursi Anda akan tereservasi untuk pengalaman sinematik yang luar biasa.</p>
                                    <Link to="/booking" className="button">Pesan Tiket</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Join;
