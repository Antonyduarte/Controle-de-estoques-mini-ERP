CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`role` ENUM('estoquista','admin','gerencia') NOT NULL DEFAULT 'estoquista' COLLATE 'utf8mb4_0900_ai_ci',
	`created_at` DATETIME NOT NULL DEFAULT (now()),
	`updated_at` DATETIME NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`user_id`) USING BTREE,
	UNIQUE INDEX `username` (`username`) USING BTREE,
	UNIQUE INDEX `email` (`email`) USING BTREE,
	UNIQUE INDEX `user_id` (`user_id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=20
;
