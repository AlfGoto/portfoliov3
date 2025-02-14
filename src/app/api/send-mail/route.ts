import { NextRequest, NextResponse } from "next/server";
import AdminMailer from "lowback-admin-mailer";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const contenu = searchParams.get("contenu");
    const sujet = searchParams.get("sujet");

    if (!contenu || !sujet) {
      return NextResponse.json(
        { error: "Contenu et sujet sont requis" },
        { status: 400 }
      );
    }

    console.log("ADMIN_MAILER_KEY is present:", !!process.env.ADMIN_MAILER_KEY);
    console.log("Contenu:", contenu);
    console.log("Sujet:", sujet);

    const mailer = new AdminMailer(process.env.ADMIN_MAILER_KEY);
    console.log("Mailer instance created");

    mailer.to("alfgoto@mail.com").subject(sujet).send(contenu);

    console.log("E-mail envoyé");

    return NextResponse.json({
      success: true,
      message: "E-mail envoyé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
