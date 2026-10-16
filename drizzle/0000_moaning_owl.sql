CREATE TABLE `registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`email` text NOT NULL,
	`warranty_type` text NOT NULL,
	`marketing_consent` integer DEFAULT false NOT NULL,
	`marketing_consent_at` text,
	`warranty_terms_consent` integer DEFAULT false NOT NULL,
	`language` text DEFAULT 'cs' NOT NULL,
	`source` text DEFAULT 'direct' NOT NULL,
	`guide_version` text DEFAULT '1.0' NOT NULL
);
