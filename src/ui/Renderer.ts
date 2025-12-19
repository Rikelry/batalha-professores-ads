import { Professor } from "../models/Professor";
/**
 * Responsável por renderizar os professores na arena.
 */
export class Renderer {
  /** Elemento HTML da arena */
  arena: HTMLElement;
  /**
   * Cria o renderizador da arena.
   *
   * @param arenaId ID do elemento HTML da arena
   */
  constructor(arenaId: string) {
    this.arena = document.getElementById(arenaId)!;
  }
  /**
   * Renderiza todos os professores na tela.
   *
   * @param professores Lista de professores a serem renderizados
   */
  render(professores: Professor[]) {
    this.arena.innerHTML = "";

    professores.forEach(p => {
      const card = document.createElement("div");
      card.className = `card ${!p.vivo ? "morto" : ""}`;

      const vida = (p.hp / 100) * 100;

      card.innerHTML = `
        <h3>${p.nome}</h3>

        <img src="${p.sprite}" class="sprite" alt="${p.nome}" />

        <div class="life-bar">
          <div class="life" style="width:${vida}%"></div>
        </div>

        <p>HP: ${p.hp}</p>
        <p>ATK: ${p.ataque} | DEF: ${p.defesa}</p>
        <p>VEL: ${p.velocidade}</p>
      `;

      this.arena.appendChild(card);
    });
  }
}
