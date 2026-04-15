CREATE TABLE `products` (
	`product_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`product_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`quantity` INT NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT (now()),
	`updated_at` DATETIME NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`product_id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
