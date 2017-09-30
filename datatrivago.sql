-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2017 at 09:02 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datatrivago`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblbinhluan`
--

CREATE TABLE `tblbinhluan` (
  `idKS` int(11) NOT NULL,
  `idNguoi` int(11) NOT NULL,
  `NoiDung` text NOT NULL,
  `Ngay` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblbinhluan`
--

INSERT INTO `tblbinhluan` (`idKS`, `idNguoi`, `NoiDung`, `Ngay`, `id`) VALUES
(1, 1, 'Chất lượng tốt, View Đẹp', '2017-09-21 09:54:10', 1),
(1, 1, 'Lần 2 đến đây chất lượng tăng lên', '2017-09-21 10:01:34', 3),
(2, 1, 'View đẹp, tiện nghi đầy đủ', '2017-09-21 10:05:57', 5),
(5, 3, 'Đồ ăn khá ngon, giá tốt', '2017-09-21 10:05:57', 6),
(5, 4, 'Tiện nghi khá đầy đủ', '2017-09-21 10:05:57', 7),
(5, 5, 'Phòng có mùi hôi', '2017-09-21 10:05:57', 8),
(6, 6, 'Bể bơi rất thích', '2017-09-21 10:05:57', 9),
(7, 8, 'Phục vụ có thái độ lịch sự', '2017-09-21 10:05:57', 10),
(7, 9, 'Rất tuyệt', '2017-09-21 10:05:57', 11),
(1, 10, 'Like', '2017-09-21 10:05:57', 12),
(2, 10, 'Đẹp', '2017-09-21 10:05:57', 13),
(1, 5, 'Đẹp tuyệt vớif', '2017-09-27 17:47:15', 14),
(1, 6, 'Nem chua rán ngon, chiên vừa miệng luôn, sốt chấm cũng vậy \r\nMón chân gà là đỉnh nhất, ăn hoài không ngán mà 1 phần cũng vừa', '2017-09-27 17:50:04', 15),
(1, 8, 'View đẹp ', '2017-09-27 17:50:04', 16),
(1, 9, 'Bữa mình thèm chân gà muối chiên nên quyết định order trên deliverynow 1 phần chân gà muối chiên vag 1 phần mực chiên nước mắm.', '2017-09-27 17:50:04', 17),
(1, 4, 'Quán lúc nào cũng đông, nhưng nhân viên rất nhanh nhẹn', '2017-09-27 17:50:04', 18),
(1, 2, 'Đồ ăn món thích món không. Chắc ko hợp khẩu vị.', '2017-09-27 17:50:04', 19),
(1, 3, 'Quán nổi tiếng nên lúc nào cũng thấy kín bàn', '2017-09-27 17:50:04', 20);

-- --------------------------------------------------------

--
-- Table structure for table `tbldanhgia`
--

CREATE TABLE `tbldanhgia` (
  `idKS` int(11) NOT NULL,
  `idNguoi` int(11) NOT NULL,
  `danhgia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbldanhgia`
--

INSERT INTO `tbldanhgia` (`idKS`, `idNguoi`, `danhgia`) VALUES
(1, 1, 5),
(1, 2, 5),
(1, 3, 4),
(1, 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tblimage`
--

CREATE TABLE `tblimage` (
  `id` int(11) NOT NULL,
  `idks` int(11) NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblimage`
--

INSERT INTO `tblimage` (`id`, `idks`, `link`) VALUES
(1, 1, 'https://imgec.trivago.com/partnerimages/13/67/136724066_x.jpeg'),
(3, 1, 'https://imgec.trivago.com/partnerimages/13/67/136724158_x.jpeg'),
(4, 1, 'https://imgec.trivago.com/partnerimages/13/67/136724128_x.jpeg'),
(5, 1, 'https://imgec.trivago.com/partnerimages/13/67/136724200_x.jpeg'),
(6, 1, 'https://imgec.trivago.com/partnerimages/13/67/136724116_x.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `tblkhachsan`
--

CREATE TABLE `tblkhachsan` (
  `id` int(11) NOT NULL,
  `ten` text NOT NULL,
  `gia` float NOT NULL,
  `hinhanh` text NOT NULL,
  `diachi` text NOT NULL,
  `loai` text NOT NULL,
  `website` text NOT NULL,
  `sosao` int(11) NOT NULL,
  `sdt` text NOT NULL,
  `tiennghihangdau` text NOT NULL,
  `ngaycapnhat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblkhachsan`
--

INSERT INTO `tblkhachsan` (`id`, `ten`, `gia`, `hinhanh`, `diachi`, `loai`, `website`, `sosao`, `sdt`, `tiennghihangdau`, `ngaycapnhat`) VALUES
(1, 'Lakeview Villas And Viet Nam', 2455600, 'https://imgec.trivago.com/partnerimages/18/02/180235620_x.jpeg', '15 Tran Phu Street, 670000, Đà Lạt, Việt Nam', 'Khách sạn', 'lakeviewvillas.com', 1, '0969340321', '1100101100', '2017-09-29 16:39:44'),
(5, 'Ngoc Phat', 1336300, 'https://imgec.trivago.com/partnerimages/22/00/220066432_x.jpeg', '10 Hồ Tùng Mậu, 670000, Đà Lạt, Việt Nam', '', '', 2, '', '', '2017-09-29 15:38:48'),
(6, 'The Sailing Bay Beach Resort', 1603400, 'https://imgec.trivago.com/partnerimages/19/00/190043264_x.jpeg', '170 Ho Xuan Huong, 800000, Mũi Né, Việt Nam', '', '', 4, '', '', '2017-09-29 14:37:44'),
(7, 'Sea Links Beach', 2375900, 'https://imgec.trivago.com/partnerimages/11/09/110997336_x.jpeg', 'Km 9 Nguyen Thong, 800000, Mũi Né, Việt Nam', '', '', 3, '', '', '2017-09-29 14:37:44'),
(8, 'Binh An Village Dalat', 3614000, 'https://imgec.trivago.com/partnerimages/14/44/144493300_x.jpeg', 'Plot Number 6, Area 162,Tuyen Lam Lake, 670000, Đà Lạt, Việt Nam', 'Khách sạn', 'binhanvillage.com.vn', 4, '08999999999', '1110010110', '2017-09-29 15:09:07'),
(9, 'Six Senses Ninh Van Bay', 8139500, 'https://imgec.trivago.com/gtximages/partnerimages/11/04/110484146_y@2x.jpeg', 'Ninh Van bay, Ninh Hoa, Khanh Hoa, 650000, Nha Trang, Việt Nam', 'Resort', 'SixSensesNinhVanBay.com', 5, '+109845933920', '1100101110', '2017-09-30 17:19:12'),
(10, 'Lavender Nha Trangy', 577000, 'https://imgec.trivago.com/partnerimages/14/50/145036042_x.jpeg', '98C/4 Tran Phu St. Loc Tho Ward, 62000, Nha Trang, Việt Nam', 'Khách sạn', 'LavenderNhaTrang.com', 5, '+109845933920', '1110101110', '2017-09-30 17:27:23'),
(11, 'Mia Resort Nha Trang', 5377000, 'https://imgec.trivago.com/partnerimages/14/42/144280106_x.jpeg', 'Bai Dong, Cam Hai Dong, 650000, Nha Trang, Việt Nam', 'Resort', 'MiaResortNhaTrang.com', 1, '+109845933920', '1111101110', '2017-09-30 17:27:23'),
(12, 'Riverside', 979000, 'https://imgec.trivago.com/partnerimages/13/87/138768540_x.jpeg', '18-19-20 Ton Duc Thang Street, District 1, 700000, TP. Hồ Chí Minh, Việt Nam', 'Khách sạn', 'Riverside.com', 1, '+109845933920', '1100101110', '2017-09-30 17:27:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `hoten` text NOT NULL,
  `diachi` text NOT NULL,
  `quyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`id`, `username`, `password`, `hoten`, `diachi`, `quyen`) VALUES
(1, 'user1', 'user1', 'Trần Văn A', 'Quận 9, TPHCM', 1),
(4, 'user2', 'user2', 'Nguyễn Trần Thị A', 'Quận Thủ Đức, TPHCM', 0),
(5, 'user3', 'user3', 'Lương Văn C', 'Quận Bình Thạnh, TPHCM', 0),
(6, 'user4', 'user4', 'Lương Văn D', 'Quận Bình Thạnh, TPHCM', 0),
(7, 'user5', 'user5', 'Lương Văn ED', 'Quận Gò Vấp, TPHCM', 0),
(8, 'user6', 'user6', 'Lương Văn EAZ', 'Quận Bình Tân, TPHCM', 0),
(9, 'user7', 'user7', 'Lương Bổng', 'Quận Bình Thạnh, TPHCM', 0),
(10, 'user8', 'user8', 'Thế Chột', 'Quận 1, TPHCM', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblbinhluan`
--
ALTER TABLE `tblbinhluan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblimage`
--
ALTER TABLE `tblimage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblkhachsan`
--
ALTER TABLE `tblkhachsan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblbinhluan`
--
ALTER TABLE `tblbinhluan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `tblimage`
--
ALTER TABLE `tblimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tblkhachsan`
--
ALTER TABLE `tblkhachsan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
