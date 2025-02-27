
import { registerAction } from "../../../../actions/register";


export async function POST(request: Request) {
  const { data } = await request.json();

  try {
    const register = await registerAction(data);
    if (register.status === 201) {
      return Response.json({ message: "ok" }, { status: 201 });
    }
    return Response.json(
      { message: register.error || "Erro desconhecido ao criar o usuário." },
      { status: 400 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Erro desconhecido tente novamente mais tarde" },
      { status: 404 }
    );
  }
}
