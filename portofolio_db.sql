-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2025 at 06:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portofolio_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `referenceLink` varchar(255) DEFAULT NULL,
  `referenceTitle` varchar(255) DEFAULT NULL,
  `referenceDescription` text DEFAULT NULL,
  `referenceImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `summary`, `content`, `image`, `createdAt`, `updatedAt`, `referenceLink`, `referenceTitle`, `referenceDescription`, `referenceImage`) VALUES
(2, 'Publikasi Animasi: [SFM] Aurelleah - On Wings of Moonlight', 'Video publikasi animasi pertama saya di YouTube', 'Menjalani tugas proyek \'tahun pertama\' yang ditugaskan oleh dosen pembimbing saya, yaitu Pak Tekad, saya berhasil membuat video 3D menggunakan software SFM (Source Film Maker) dengan unsur My Little Pony.', 'assets/owom.jpg', '2025-06-28 05:32:44', '2025-06-28 05:32:44', 'https://www.equestriadaily.com/2023/05/sfm-animation-on-wings-of-moonlight.html', 'SFM Animation: On Wings of Moonlight by Sethisto', 'Time for more Celestia and Luna feels. The concept is still explored even all these years later.\r\n\r\nGo get the moon and sun being sisterly below.', 'assets/owom.jpg'),
(4, 'Publikasi Animasi: [Animation] Ponies With Hats 3', 'Video publikasi animasi kedua saya di YouTube\r\n', 'Membuat video \"parody\" terhadap video fan made dari Ponies With Hats dari BogyleBronies', 'assets/pwh.jpg', '2025-06-28 09:06:43', '2025-06-28 09:06:43', 'https://www.equestriadaily.com/2023/08/animation-ponies-with-hats-3.html', 'Animation: Ponies With Hats 3 by Sethisto', 'A fan animation of a fan animation has arrived! The oldschool Ponies With Hats videos were always a fun parody of their Llama counterparts, so it\'s good to see someone continuing it.', 'assets/pwh.jpg'),
(5, 'Publikasi Animasi:  [Animation] A Day of Appreciation (Celestium)', 'Video publikasi animasi ketiga saya di YouTube', 'Hasil perjuangan membuat kreasi animasi selama 1 tahun, atau 3 semester studi saya selama di UMRAH, yang pastinya membuahkan hasil yang sangat memuaskan!', 'assets/celestium.jpg', '2025-06-28 09:16:36', '2025-06-28 09:16:36', 'https://www.equestriadaily.com/2025/06/animation-day-of-appreciation-celestium.html', 'Animation: A Day of Appreciation (Celestium) by Sethisto', 'For everyone out there that isn\'t into that tamers style from earlier, we\'ve got a show style animation from Raca Pinang. Go check it out below starring Celestia going about her day.', 'assets/celestium.jpg'),
(6, 'Animasi Kolaborasi:  Healing the Wounds - Part 3 (Official)', 'Animasi kolaborasi pertama saya dengan kreator luar negeri!', 'Seorang kreator asal Meksiko, yaitu GeorgeGarzaProduction mengajak saya berkolaborasi pada video animasi nya, yang mana saya lakukan dengan senang hati!', 'assets/htw.jpg', '2025-06-28 09:30:49', '2025-06-28 09:30:49', 'https://www.youtube.com/watch?v=310G6XNI6cY', 'Healing the Wounds - Part 3 (Official)', 'Thomas is task to apologize to Rarity and Spike for his actions, but things took an unexpected turn  Finally Part 3 is here! To me long enough huh, Well you might as well know on why is tha case, so far this is my biggest work yet with a huge team behind it! I sure hope you all enjoy it!', 'assets/htw.jpg'),
(7, 'Animasi Kolaborasi:  Who\'s Cleaning Tonight? - A \"Who\'s Cooking Tonight?\" MLP Parody | The Comediverse', 'Animasi kolaborasi kedua saya dengan kreator luar negeri!', 'Dan lagi, seorang kreator asal Kanada bernama Yennie86YT mengajak saya untuk berkolaborasi dengan animator animator lainnya yang tersebar di penjuru negara untuk membuat sebuah video animasi unik!', 'assets/wct.jpg', '2025-06-28 09:32:24', '2025-06-28 09:32:24', 'https://www.youtube.com/watch?v=Q2FsxNSMi4Q', 'Who\'s Cleaning Tonight? - A \"Who\'s Cooking Tonight?\" MLP Parody | The Comediverse', 'As you can tell from the title and video itself, this is a parody of the \"Who\'s Cleaning Tonight?\" video by Raikujo, where Nick and Coach get into a brawl over who\'s going to cook food tonight. In this version, I have Applejack and Rainbow Dash as Nick and Coach themselves, and instead of them cooking something, it\'s all about cleaning, as I feel like it suits them more. So that\'s why it\'s titled \"Who\'s Cleaning Tonight\" rather than \"Who\'s Cooking Tonight\".', 'assets/wct.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'David', 'davis@gmail.com', 'Euy', '2025-06-28 04:45:26', '2025-06-28 04:45:26');

-- --------------------------------------------------------

--
-- Table structure for table `landings`
--

CREATE TABLE `landings` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `xdotcom` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `resumeLink` varchar(255) DEFAULT NULL,
  `tentangText` text DEFAULT NULL,
  `pengalaman` varchar(255) DEFAULT NULL,
  `proyekCount` varchar(255) DEFAULT NULL,
  `layanan` varchar(255) DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `landings`
--

INSERT INTO `landings` (`id`, `title`, `subtitle`, `description`, `github`, `linkedin`, `xdotcom`, `youtube`, `resumeLink`, `tentangText`, `pengalaman`, `proyekCount`, `layanan`, `skills`, `createdAt`, `updatedAt`) VALUES
(1, 'Dave Travis', 'Art Enthusiast', 'Music lovers, reader & art creator.', 'https://github.com/davietraviso', 'https://linkedin.com/in/dave-travis-9777b3172', 'https://x.com/racapinang', 'https://youtube.com/@racapinang', '/assets/cv.pdf', 'Seorang penyuka seni yang menempuh jalan hidup sebagai seorang Engineer...', '3 Tahun Berkarya', '5 Proyek', 'Aktif Konsultasi', '\"[{\\\"name\\\":\\\"JavaScript\\\",\\\"level\\\":\\\"70%\\\",\\\"color\\\":\\\"#f0db4f\\\"},{\\\"name\\\":\\\"ReactJS\\\",\\\"level\\\":\\\"65%\\\",\\\"color\\\":\\\"#61dafb\\\"},{\\\"name\\\":\\\"CSS\\\",\\\"level\\\":\\\"80%\\\",\\\"color\\\":\\\"#264de4\\\"},{\\\"name\\\":\\\"Animation\\\",\\\"level\\\":\\\"75%\\\",\\\"color\\\":\\\"#68a063\\\"},{\\\"name\\\":\\\"UI/UX Design\\\",\\\"level\\\":\\\"70%\\\",\\\"color\\\":\\\"#ff66cc\\\"}]\"', '2025-06-27 19:46:06', '2025-06-28 09:39:37');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `image`, `link`, `createdAt`, `updatedAt`) VALUES
(1, 'Map Generator', 'Python Coded Randomized Map', 'assets/map.png', 'https://github.com/Afiefanugrah/PAA_Random_Map', '2025-06-27 19:46:48', '2025-06-27 19:46:48'),
(2, '3D World', 'Python Coded 3D Graphic World', 'assets/3d.png', 'https://github.com/davietraviso/Grafika_Komputer_3D-World', '2025-06-27 19:46:56', '2025-06-27 19:46:56'),
(4, 'SFM Movie', 'Music Video Animation', 'assets/sfm.jpg', 'https://www.youtube.com/watch?v=HWI7znEBKmc', '2025-06-28 07:35:15', '2025-06-28 07:35:15'),
(5, '2D Flash Animation', 'Fan made of Ponies with Hats', 'assets/pwh.jpg', 'https://www.youtube.com/watch?v=qLplS5ta0jw', '2025-06-28 07:36:29', '2025-06-28 07:36:29'),
(6, '2D Flash Animation', 'Self made of Celestium song', 'assets/celestium.jpg', 'https://youtu.be/kTgzUrgpqYc', '2025-06-28 07:37:13', '2025-06-28 07:37:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `landings`
--
ALTER TABLE `landings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `landings`
--
ALTER TABLE `landings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
