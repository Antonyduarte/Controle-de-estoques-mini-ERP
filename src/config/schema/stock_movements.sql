CREATE TABLE `stock_movements` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`product_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`type` VARCHAR(255) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`quantity` INT UNSIGNED NOT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT (now()),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;