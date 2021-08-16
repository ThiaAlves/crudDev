DROP TABLE IF EXISTS `developers`;

CREATE TABLE `developers` (
  `id` bigint UNSIGNED NOT NULL auto,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idade` int NOT NULL,
  `hobbie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataNascimento` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `developers` (`id`, `nome`, `sexo`, `idade`, `hobbie`, `dataNascimento`, `created_at`, `updated_at`) VALUES
(5, 'Thiago Matteus Alves', 'Masculino', 19, 'Tocar Guitarra', '2001-08-23', '2021-08-14 02:46:33', '2021-08-14 04:54:47');



ALTER TABLE `developers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `developers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;
