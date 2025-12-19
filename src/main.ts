import { Professor } from "./models/Professor";
import { iniciarBatalha } from "./game/Battle";
import { Renderer } from "./ui/Renderer";
/**
 * Lista inicial de professores da batalha.
 */
const professores = [
  new Professor("Maykol", 20, 10, 3, "./assets/sprites/maykol.png"),
  new Professor("Sekeff", 18, 12, 2, "./assets/sprites/sekeff.png"),
  new Professor("Iallen", 22, 8, 4, "./assets/sprites/iallen.png"),
  new Professor("Jivago", 17, 15, 2, "./assets/sprites/jivago.png"),
  new Professor("Mayllon", 19, 11, 3, "./assets/sprites/mayllon.png"),
  new Professor("Jefferson", 21, 9, 4, "./assets/sprites/jefferson.png"),
  new Professor("Marcos", 16, 14, 1, "./assets/sprites/marcos.png"),
];
/** Inicializa o renderizador */
const renderer = new Renderer("arena");
renderer.render(professores);
/**
 * Evento de início da batalha.
 */
document.getElementById("btnIniciar")!.addEventListener("click", () => {
  iniciarBatalha(
    professores,
    () => renderer.render(professores),
    vencedor => alert(`🏆 Vencedor: ${vencedor.nome}`)
  );
});
