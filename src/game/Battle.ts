import { Professor } from "../models/Professor";
import { batalhaThread } from "./ThreadSim";
/**
 * Inicia a batalha entre todos os professores.
 *
 * Cada professor executa sua lógica de batalha em paralelo.
 * Quando a batalha termina, o professor ainda vivo é declarado vencedor.
 *
 * @param professores Lista de professores participantes da batalha
 * @param onUpdate Função chamada a cada atualização da batalha
 * @param onFinish Função chamada quando a batalha termina, recebendo o vencedor
 */
export async function iniciarBatalha(
  professores: Professor[],
  onUpdate: () => void,
  onFinish: (vencedor: Professor) => void
) {
  await Promise.all(
    professores.map(p =>
      batalhaThread(p, professores, onUpdate)
    )
  );

  const vencedor = professores.find(p => p.vivo);
  if (vencedor) {
    onFinish(vencedor);
  }
}
