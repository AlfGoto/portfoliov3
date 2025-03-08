import { NextRequest, NextResponse } from "next/server";
import AdminMailer from "lowback-admin-mailer";

export const config = {
  runtime: "nodejs22.x",
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const contenu = searchParams.get("contenu");
    const sujet = searchParams.get("sujet");

    const mailer = new AdminMailer(process.env.ADMIN_MAILER_KEY);

    const token = await mailer.generateToken("alfgoto@gmail.com", sujet, contenu);
    await fetch("https://mail.basalf.fr/" + token);

    if (!contenu || !sujet) {
      return NextResponse.json(
        { error: "Contenu et sujet sont requis" },
        { status: 400 }
      );
    }

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
