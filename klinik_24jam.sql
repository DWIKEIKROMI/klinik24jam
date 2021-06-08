-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2021 at 08:39 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `klinik_24jam`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftar`
--

CREATE TABLE `daftar` (
  `idDaftar` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idDokter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dokter`
--

CREATE TABLE `dokter` (
  `idDokter` int(1) NOT NULL,
  `namaDokter` varchar(24) NOT NULL,
  `alamatDokter` varchar(50) NOT NULL,
  `spesialis` varchar(24) NOT NULL,
  `id_waktuHarian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dokter`
--

INSERT INTO `dokter` (`idDokter`, `namaDokter`, `alamatDokter`, `spesialis`, `id_waktuHarian`) VALUES
(25, 'dr. RUDY ARINDRA WIJAYA', 'Jl. Soekarno Hatta No. 73', 'Umum', 1),
(26, 'dr. WIJAYA KUSUMA', 'Jl. Panglima Sudirman No. 33', 'Umum', 2),
(27, 'dr. SANI ASTUTI, Sp.KK', 'Perum. Grand Royal No. 09', 'Kulit dan Kelamin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `idUser` int(8) NOT NULL,
  `namaUser` varchar(24) NOT NULL,
  `alamatUser` varchar(50) NOT NULL,
  `tgl_lahirUser` date NOT NULL,
  `goldahUser` enum('A','B','AB','O') NOT NULL,
  `userId` varchar(12) NOT NULL,
  `pwUser` varchar(12) NOT NULL,
  `level` enum('Admin','Pasien') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `namaUser`, `alamatUser`, `tgl_lahirUser`, `goldahUser`, `userId`, `pwUser`, `level`) VALUES
(1, 'Minggar Putra Dhea Ramad', 'Jl. Yos Sudarso Gg. III', '1999-12-24', 'B', 'minggarputra', 'e880b3eeaf6a', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `waktuharian`
--

CREATE TABLE `waktuharian` (
  `id_waktuHarian` int(11) NOT NULL,
  `waktuBuka` time NOT NULL,
  `waktuTutup` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `waktuharian`
--

INSERT INTO `waktuharian` (`id_waktuHarian`, `waktuBuka`, `waktuTutup`) VALUES
(1, '08:00:00', '15:00:00'),
(2, '16:00:00', '20:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftar`
--
ALTER TABLE `daftar`
  ADD PRIMARY KEY (`idDaftar`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idDokter` (`idDokter`);

--
-- Indexes for table `dokter`
--
ALTER TABLE `dokter`
  ADD PRIMARY KEY (`idDokter`),
  ADD KEY `id_waktuHarian` (`id_waktuHarian`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- Indexes for table `waktuharian`
--
ALTER TABLE `waktuharian`
  ADD PRIMARY KEY (`id_waktuHarian`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daftar`
--
ALTER TABLE `daftar`
  MODIFY `idDaftar` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dokter`
--
ALTER TABLE `dokter`
  MODIFY `idDokter` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `waktuharian`
--
ALTER TABLE `waktuharian`
  MODIFY `id_waktuHarian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `daftar`
--
ALTER TABLE `daftar`
  ADD CONSTRAINT `daftar_ibfk_2` FOREIGN KEY (`idDokter`) REFERENCES `dokter` (`idDokter`);

--
-- Constraints for table `dokter`
--
ALTER TABLE `dokter`
  ADD CONSTRAINT `dokter_ibfk_1` FOREIGN KEY (`id_waktuHarian`) REFERENCES `waktuharian` (`id_waktuHarian`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
