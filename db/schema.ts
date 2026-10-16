import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const registrations = sqliteTable("registrations", {
  id: text("id").primaryKey(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  email: text("email").notNull(),
  warrantyType: text("warranty_type").notNull(),
  socialProof: text("social_proof"),
  marketingConsent: integer("marketing_consent", { mode: "boolean" }).notNull().default(false),
  marketingConsentAt: text("marketing_consent_at"),
  warrantyTermsConsent: integer("warranty_terms_consent", { mode: "boolean" }).notNull().default(false),
  language: text("language").notNull().default("cs"),
  source: text("source").notNull().default("direct"),
  guideVersion: text("guide_version").notNull().default("1.0"),
});
