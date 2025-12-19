import { Professor } from "../models/Professor";
/**
 * Cria um atraso assíncrono por um determinado tempo.
 *
 * @param ms Tempo de espera em milissegundos
 * @returns Promise que resolve após o tempo definido
 */
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Executa a lógica de batalha de um professor específico.
 *
 * Enquanto o professor estiver vivo, ele:
 * - Aguarda um tempo baseado em sua velocidade
 * - Escolhe um alvo vivo aleatório
 * - Ataca o alvo
 * - Notifica a interface via onUpdate
 *
 * @param professor Professor que está executando a thread
 * @param professores Lista de todos os professores da batalha
 * @param onUpdate Função chamada após cada ação
 */
export async function batalhaThread(
  professor: Professor,
  professores: Professor[],
  onUpdate: () => void
) {
  while (professor.vivo) {
    await delay(2000 / professor.velocidade);

    const alvos = professores.filter(p => p.vivo && p !== professor);
    if (alvos.length === 0) break;

    const alvo = alvos[Math.floor(Math.random() * alvos.length)];
    professor.atacar(alvo);

    onUpdate();
  }
}
