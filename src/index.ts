// Define o formato de um professor
type Professor = {
  nome: string
  vida: number
  ataque: number
  velocidade: number // chance de desvio (0 a 1)
}

// Lista de professores do jogo
const professores: Professor[] = [
  { nome: "Maykol", vida: 100, ataque: 15, velocidade: 0.2 },
  { nome: "Sekeff", vida: 100, ataque: 18, velocidade: 0.15 },
  { nome: "Iallen", vida: 100, ataque: 14, velocidade: 0.3 },
  { nome: "Jivago", vida: 100, ataque: 20, velocidade: 0.1 },
  { nome: "Mayllon", vida: 100, ataque: 16, velocidade: 0.25 },
  { nome: "Jefferson", vida: 100, ataque: 17, velocidade: 0.2 },
  { nome: "Marcos", vida: 100, ataque: 19, velocidade: 0.15 },
]

// Função responsável pelo ataque entre dois professores
function atacar(atacante: Professor, defensor: Professor) {
  // Sorteia se o defensor desviou do ataque
  const desviou = Math.random() < defensor.velocidade

  // Se desviou, não recebe dano
  if (desviou) {
    console.log(`${defensor.nome} desviou do ataque de ${atacante.nome} 🏃‍♂️`)
    return
  }

  // Aplica o dano do atacante no defensor
  defensor.vida -= atacante.ataque

  console.log(
    `${atacante.nome} atacou ${defensor.nome} causando ${atacante.ataque} de dano 💥`
  )
}

// Executa o jogo em rodadas a cada 1 segundo
const intervalo = setInterval(() => {
  // Filtra apenas os professores que ainda estão vivos
  const vivos = professores.filter(p => p.vida > 0)

  // Verifica se o jogo acabou
  if (vivos.length <= 1) {
    clearInterval(intervalo) // Para o jogo

    if (vivos.length === 1) {
      console.log(`\n🏆 O vencedor é ${vivos[0].nome} com ${vivos[0].vida} de vida!`)
    } else {
      console.log("\n😵 Todos morreram!")
    }

    return
  }

  // Cada professor vivo realiza um ataque por rodada
  vivos.forEach(atacante => {
    // Remove o próprio atacante da lista de alvos
    const alvos = vivos.filter(p => p !== atacante)

    if (alvos.length === 0) return

    // Escolhe um alvo aleatório
    const alvo = alvos[Math.floor(Math.random() * alvos.length)]

    // Executa o ataque
    atacar(atacante, alvo)
  })

  console.log("\n--- Próximo round ---\n")
}, 1000)
