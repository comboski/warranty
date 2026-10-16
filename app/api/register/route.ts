import { getDb } from "../../../db";
import { registrations } from "../../../db/schema";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  if (origin && origin !== requestUrl.origin) {
    return Response.json({ error: "Neplatný původ požadavku." }, { status: 403 });
  }

  try {
    const payload = (await request.json()) as {
      email?: string;
      warrantyType?: string;
      marketingConsent?: boolean;
      warrantyTermsConsent?: boolean;
      language?: string;
      source?: string;
      website?: string;
    };

    if (payload.website) {
      return Response.json({ ok: true, id: crypto.randomUUID() }, { status: 201 });
    }

    const email = payload.email?.trim().toLowerCase() ?? "";
    const warrantyType = payload.warrantyType === "extended" ? "extended" : payload.warrantyType === "standard" ? "standard" : "";
    const marketingConsent = payload.marketingConsent === true;
    const warrantyTermsConsent = payload.warrantyTermsConsent === true;

    if (!emailPattern.test(email) || email.length > 254) {
      return Response.json({ error: "Zadejte platný e-mail." }, { status: 400 });
    }
    if (!warrantyType) {
      return Response.json({ error: "Vyberte typ registrace." }, { status: 400 });
    }
    if (warrantyType === "extended" && (!marketingConsent || !warrantyTermsConsent)) {
      return Response.json({ error: "Pro tříletou záruku potvrďte oba souhlasy." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    await getDb().insert(registrations).values({
      id,
      email,
      warrantyType,
      marketingConsent: warrantyType === "extended" && marketingConsent,
      marketingConsentAt: warrantyType === "extended" && marketingConsent ? now : null,
      warrantyTermsConsent: warrantyType === "extended" && warrantyTermsConsent,
      language: payload.language === "en" ? "en" : "cs",
      source: (payload.source ?? "direct").slice(0, 60),
      guideVersion: "1.0",
    });

    return Response.json({ ok: true, id }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Registration failed", error);
    return Response.json({ error: "Registraci se nepodařilo uložit. Zkuste to prosím znovu." }, { status: 500 });
  }
}
