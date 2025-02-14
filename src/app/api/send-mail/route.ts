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

    const mailer = new AdminMailer(process.env.ADMIN_MAILER_KEY);

    mailer.to("alfgoto@mail.com").subject(sujet).send(contenu);


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
