-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 18. Jun 2014 um 17:11
-- Server Version: 5.6.16
-- PHP-Version: 5.5.11

--
-- Datenbank: `zeiterfassungsbogen`
--

CREATE DATABASE IF NOT EXISTS zeiterfassungsbogen;
USE zeiterfassungsbogen;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `arbeitsfrei`
--

CREATE TABLE IF NOT EXISTS `arbeitsfrei` (
  `aid` int(20) NOT NULL AUTO_INCREMENT,
  `bezeichnung` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='Abwesenheitsgruende' AUTO_INCREMENT=100 ;

--
-- Daten für Tabelle `arbeitsfrei`
--

INSERT INTO `arbeitsfrei` (`aid`, `bezeichnung`) VALUES
(1, 'Gleittag'),
(2, 'Urlaub'),
(3, 'krank'),
(88, 'nicht erfasst'),
(99, 'anwesend');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `behoerde`
--

CREATE TABLE IF NOT EXISTS `behoerde` (
  `bid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Behoerden ID',
  `art` varchar(30) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `verantwortlich` char(30) DEFAULT NULL,
  `rahmenzeit_beginn` time NOT NULL,
  `rahmenzeit_ende` time NOT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Daten für Tabelle `behoerde`
--

INSERT INTO `behoerde` (`bid`, `art`, `name`, `verantwortlich`, `rahmenzeit_beginn`, `rahmenzeit_ende`) VALUES
(1, 'Senatsverwaltung', 'Finanzen', 'Hr. Nussbaum', '06:00:00', '19:30:00'),
(2, 'Senatsverwaltung', 'Inneres und Sport', 'Hr. Henkel', '06:00:00', '19:30:00'),
(3, 'Senatsverwaltung', 'Arbeit, Integration und Frauen', 'Fr. Kolat', '06:00:00', '19:30:00'),
(4, 'Senatsverwaltung', 'Justiz und Verbraucherschutz', 'Hr. Heilmann', '06:00:00', '20:00:00'),
(5, 'Senatsverwaltung', 'Wirtschaft, Technologie und Forschung', 'Fr. Yzer', '06:00:00', '19:30:00'),
(6, 'Senatsverwaltung', 'Bildung, Jugend und Wissenschaft', 'Fr. Scheeres', '06:00:00', '19:30:00'),
(7, 'Senatsverwaltung', 'Gesundheit und Soziales', 'Hr. Czaja', '06:00:00', '19:30:00'),
(8, 'Senatsverwaltung', 'Stadtentwicklung und Umwelt', 'Hr. Müller', '06:00:00', '19:00:00'),
(9, 'Bezirksamt', 'Charlottenburg-Wilmersdorf', 'Hr. Naumann', '06:00:00', '20:00:00'),
(10, 'Bezirksamt', 'Friedrichshain-Kreuzberg', 'Fr. Herrmann', '06:00:00', '20:00:00'),
(11, 'Bezirksamt', 'Lichtenberg', 'Hr. Geisel', '06:00:00', '19:00:00'),
(12, 'Bezirksamt', 'Neukölln', 'Hr. Buschkowsky', '06:30:00', '20:00:00'),
(13, 'Bezirksamt', 'Pankow', 'Hr. Köhne', '06:00:00', '19:30:00'),
(14, 'Bezirksamt', 'Spandau', 'Hr. Kleebank', '06:00:00', '19:30:00'),
(15, 'Bezirksamt', 'Treptow-Köpenick', 'Hr. Igel', '06:00:00', '20:00:00'),
(16, 'Bezirksamt', 'Mitte', 'Hr. Hanke', '06:00:00', '20:00:00'),
(17, 'Bezirksamt', 'Marzahn-Hellersdorf', 'Hr. Komoß', '06:00:00', '19:30:00'),
(18, 'Bezirksamt', 'Reinickendorf', 'Hr. Balzer', '06:00:00', '19:00:00'),
(19, 'Bezirksamt', 'Tempelhof-Schöneberg', 'Fr. Schöttler', '06:00:00', '19:30:00'),
(20, 'Bezirksamt', 'Steglitz-Zehlendorf', 'Hr. Kopp', '06:00:00', '20:30:00'),
(21, 'Nachgeordnete/Sonderbehörde', 'Polizei', 'Hr. Kandt', '06:00:00', '19:30:00'),
(22, 'Nachgeordnete/Sonderbehörde', 'Landesamt für Bürger- und Ordnungsangelegenheiten', 'Fr. Langenheide', '06:00:00', '19:30:00'),
(23, 'Nachgeordnete/Sonderbehörde', 'Landesamt für Gesundheit und Soziales', 'Hr. Allert', '06:00:00', '19:30:00');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `erfassung`
--

CREATE TABLE IF NOT EXISTS `erfassung` (
  `eid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Erfassungs ID',
  `maid` int(11) DEFAULT NULL,
  `datum` date DEFAULT NULL,
  `beginn` time DEFAULT NULL,
  `ende` time DEFAULT NULL,
  `maneintrag` int(11) DEFAULT NULL,
  `bemerkung` varchar(50) DEFAULT NULL,
  `aid` int(11) DEFAULT NULL COMMENT 'Arbeitsfrei ID',
  PRIMARY KEY (`eid`),
  KEY `maid` (`maid`),
  KEY `aid` (`aid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Daten für Tabelle `erfassung`
--

INSERT INTO `erfassung` (`eid`, `maid`, `datum`, `beginn`, `ende`, `maneintrag`, `bemerkung`, `aid`) VALUES
(2, 112, '2014-06-11', '06:00:00', '12:00:00', NULL, '', 2),
(6, 112, '2014-06-10', '07:00:00', '14:20:00', NULL, '', 1),
(8, 112, '2014-06-02', '05:33:00', '12:00:00', NULL, '', 2),
(9, 112, '2014-06-06', '00:00:00', '14:20:00', NULL, '', 99),
(11, 112, '2014-06-12', '08:52:00', '12:44:00', NULL, '', 99),
(12, 112, '2014-06-09', '08:00:00', '16:00:00', NULL, 'Homeoffice', 99),
(13, 112, '2014-06-17', '00:00:00', '00:00:00', NULL, '', 3),
(15, 112, '2014-06-16', '05:33:00', '13:23:00', NULL, '', 99),
(16, 112, '2014-06-03', '06:00:00', '14:20:00', NULL, '', 99);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `feiertage`
--

CREATE TABLE IF NOT EXISTS `feiertage` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `bezeichnung` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Daten für Tabelle `feiertage`
--

INSERT INTO `feiertage` (`fid`, `datum`, `bezeichnung`) VALUES
(1, '2014-05-01', 'Tag der Arbeit'),
(2, '2014-05-29', 'Christi Himmelfahrt'),
(3, '2014-01-01', 'Neujahr'),
(4, '2014-04-18', 'Karfreitag'),
(5, '2014-04-21', 'Ostermontag'),
(6, '2014-06-09', 'Pfingstmontag'),
(7, '2014-10-03', 'Tag der deutschen Einheit'),
(8, '2014-12-25', '1. Weihnachtsfeiertag'),
(9, '2014-12-26', '2. Weihnachtsfeiertag');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE IF NOT EXISTS `mitarbeiter` (
  `maid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mitarbeiter ID',
  `vname` char(30) NOT NULL,
  `nname` char(50) NOT NULL,
  `stez` char(10) DEFAULT NULL COMMENT 'stellenzeichen des Mitarbeiters',
  `sollstd` double DEFAULT NULL,
  `bid` int(11) DEFAULT NULL COMMENT 'Behoerden ID',
  `sid` int(11) DEFAULT NULL COMMENT 'Status ID',
  `usern` varchar(20) NOT NULL,
  `passwort` varchar(32) DEFAULT NULL,
  `rechte` int(11) NOT NULL,
  PRIMARY KEY (`maid`),
  KEY `sid` (`sid`),
  KEY `bid` (`bid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='Nutzerdaten und Einstellungen zu Nutzern' AUTO_INCREMENT=114 ;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`maid`, `vname`, `nname`, `stez`, `sollstd`, `bid`, `sid`, `usern`, `passwort`, `rechte`) VALUES
(2, 'Hans', 'Honka', 'IA25', 40, 1, 1, 'Honki', '', 0),
(3, 'Karl', 'Käfer', 'IVA2', 39, 1, 1, 'Kaeferkarl', NULL, 0),
(112, 'Sheldon', 'Cooper', 'IA25', 40, 1, 1, 'Shelly', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(113, 'Maxi', 'Muster', 'P0815', 40, 1, 1, 'maxim', '81dc9bdb52d04dc20036dbd8313ed055', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `status`
--

CREATE TABLE IF NOT EXISTS `status` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `bezeichnung` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Daten für Tabelle `status`
--

INSERT INTO `status` (`sid`, `bezeichnung`) VALUES
(1, 'Beamter'),
(2, 'Angestellter'),
(3, 'Azubi');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `urlaub`
--

CREATE TABLE IF NOT EXISTS `urlaub` (
  `maid` int(11) NOT NULL AUTO_INCREMENT,
  `tage` int(3) DEFAULT 30,
  PRIMARY KEY (`maid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=114 ;

--
-- Daten für Tabelle `urlaub`
--

INSERT INTO `urlaub` (`maid`, `tage`) VALUES
(2, '30'),
(3, '30'),
(112, '30'),
(113, '30');
