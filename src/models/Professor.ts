/**
 * Representa um personagem da batalha.
 * Cada Professor possui atributos de combate e pode atacar outros professores.
 */
export class Professor {
  /** Nome do professor */
  nome: string;
  /** Pontos de vida atuais */
  hp: number = 100;
  /** Valor de ataque */
  ataque: number;
  /** Valor de defesa */
  defesa: number;
  /** Velocidade (define frequência de ataque) */
  velocidade: number;
  /** Indica se o professor está vivo */
  vivo: boolean = true;
  /** Caminho da imagem/sprite do professor */
  sprite: string;
  /**
   * Cria um novo Professor.
   *
   * @param nome Nome do professor
   * @param ataque Poder de ataque
   * @param defesa Poder de defesa
   * @param velocidade Velocidade de ataque
   * @param sprite Caminho da imagem do personagem
   */
  constructor(
    nome: string,
    ataque: number,
    defesa: number,
    velocidade: number,
    sprite: string
  ) {
    this.nome = nome;
    this.ataque = ataque;
    this.defesa = defesa;
    this.velocidade = velocidade;
    this.sprite = sprite;
  }

  /**
   * Recebe dano levando em consideração a defesa.
   * Caso o HP chegue a zero, o professor morre.
   *
   * @param dano Dano recebido
   */
  receberDano(dano: number) {
    const danoFinal = dano - this.defesa;

    if (danoFinal > 0) {
      this.hp -= danoFinal;
    }

    if (this.hp <= 0) {
      this.hp = 0;
      this.vivo = false;
    }
  }
  /**
   * Ataca outro professor, se ambos estiverem vivos.
   *
   * @param alvo Professor que será atacado
   */
  atacar(alvo: Professor) {
    if (this.vivo && alvo.vivo) {
      alvo.receberDano(this.ataque);
    }
  }
}
