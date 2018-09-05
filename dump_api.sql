-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(150) NOT NULL,
  `CPF` char(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=234 ;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`ID`, `Nome`, `CPF`) VALUES
(2, 'Juvenal', '09876543211');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(299) NOT NULL,
  `Descricao` varchar(599) NOT NULL,
  `Preco` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`ID`, `Nome`, `Descricao`, `Preco`) VALUES
(1, 'Manopla do Infinito', 'Uma luva muito show! ', 200);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
