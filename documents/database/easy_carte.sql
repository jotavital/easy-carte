-- MySQL Script generated by MySQL Workbench
-- Wed Mar 30 21:15:55 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema easy_carte
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `easy_carte` ;

-- -----------------------------------------------------
-- Schema easy_carte
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `easy_carte` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `easy_carte` ;

-- -----------------------------------------------------
-- Table `easy_carte`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easy_carte`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(50) NOT NULL,
  `birth_date` DATE NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easy_carte`.`companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easy_carte`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easy_carte`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easy_carte`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_pedidos_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_pedidos`
    FOREIGN KEY (`users_id`)
    REFERENCES `easy_carte`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `easy_carte`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `easy_carte`;
INSERT INTO `easy_carte`.`users` (`id`, `full_name`, `birth_date`, `email`, `password`, `created_at`, `updated_at`) VALUES (DEFAULT, 'João Pedro Lisboa Vital', '2000-07-21', 'piclesshow@gmail.com', '123', NULL, NULL);

COMMIT;

