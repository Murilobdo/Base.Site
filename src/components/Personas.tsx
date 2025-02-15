export default function Personas() {
  return (
    <div className="relative h-64 md:h-96">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background da dashboard */}
        <rect width="800" height="600" fill="#F0FDFA" />

        {/* Cabeçalho da dashboard */}
        <rect width="800" height="60" fill="#0D9488" />
        <text x="20" y="38" fontSize="24" fill="white" fontWeight="bold">
          Dashboard de Controle de Ponto
        </text>

        {/* Foto do usuário */}
        <circle cx="60" cy="130" r="40" fill="#115E59" />
        <circle cx="60" cy="120" r="12" fill="white" />
        <path d="M40 150 Q60 170 80 150" stroke="white" strokeWidth="4" />

        {/* Informações do usuário */}
        <text x="120" y="120" fontSize="20" fill="#134E4A" fontWeight="bold">
          João Silva
        </text>
        <text x="120" y="150" fontSize="16" fill="#115E59">
          Segunda-feira, 09:00
        </text>

        {/* Cartão de registro de ponto */}
        <rect x="40" y="200" width="240" height="120" rx="8" fill="white" stroke="#5EEAD4" />
        <text x="60" y="230" fontSize="18" fill="#115E59" fontWeight="bold">
          Registro de Hoje
        </text>
        <text x="60" y="260" fontSize="14" fill="#0F766E">
          Entrada: 09:00
        </text>
        <text x="60" y="290" fontSize="14" fill="#0F766E">
          Saída para almoço: --:--
        </text>

        {/* Gráfico de horas trabalhadas na semana */}
        <rect x="320" y="80" width="440" height="240" rx="8" fill="white" stroke="#5EEAD4" />
        <text x="340" y="110" fontSize="18" fill="#115E59" fontWeight="bold">
          Horas Trabalhadas na Semana
        </text>
        <line x1="340" y1="280" x2="740" y2="280" stroke="#5EEAD4" />
        <line x1="340" y1="280" x2="340" y2="140" stroke="#5EEAD4" />

        {/* Barras do gráfico */}
        <rect x="380" y="220" width="40" height="60" fill="#14B8A6" />
        <rect x="460" y="200" width="40" height="80" fill="#14B8A6" />
        <rect x="540" y="180" width="40" height="100" fill="#14B8A6" />
        <rect x="620" y="240" width="40" height="40" fill="#14B8A6" />
        <rect x="700" y="200" width="40" height="80" fill="#14B8A6" />

        {/* Dias da semana */}
        <text x="390" y="300" fontSize="12" fill="#115E59">
          Seg
        </text>
        <text x="470" y="300" fontSize="12" fill="#115E59">
          Ter
        </text>
        <text x="550" y="300" fontSize="12" fill="#115E59">
          Qua
        </text>
        <text x="630" y="300" fontSize="12" fill="#115E59">
          Qui
        </text>
        <text x="710" y="300" fontSize="12" fill="#115E59">
          Sex
        </text>

        {/* Relatório de horas extras */}
        <rect x="40" y="360" width="340" height="200" rx="8" fill="white" stroke="#5EEAD4" />
        <text x="60" y="390" fontSize="18" fill="#115E59" fontWeight="bold">
          Horas Extras do Mês
        </text>
        <text x="60" y="420" fontSize="14" fill="#0F766E">
          Total: 12h30min
        </text>
        <rect x="60" y="440" width="300" height="100" rx="4" fill="#F0FDFA" />
        <text x="70" y="460" fontSize="12" fill="#115E59">
          02/05 - 2h15min
        </text>
        <text x="70" y="480" fontSize="12" fill="#115E59">
          15/05 - 1h45min
        </text>
        <text x="70" y="500" fontSize="12" fill="#115E59">
          22/05 - 3h00min
        </text>
        <text x="70" y="520" fontSize="12" fill="#115E59">
          29/05 - 5h30min
        </text>

        {/* Relatório de faltas e atrasos */}
        <rect x="420" y="360" width="340" height="200" rx="8" fill="white" stroke="#5EEAD4" />
        <text x="440" y="390" fontSize="18" fill="#115E59" fontWeight="bold">
          Faltas e Atrasos
        </text>
        <text x="440" y="420" fontSize="14" fill="#0F766E">
          Mês atual
        </text>
        <rect x="440" y="440" width="300" height="100" rx="4" fill="#F0FDFA" />
        <text x="450" y="460" fontSize="12" fill="#115E59">
          Faltas: 1 dia
        </text>
        <text x="450" y="480" fontSize="12" fill="#115E59">
          Atrasos: 3 ocorrências
        </text>
        <text x="450" y="500" fontSize="12" fill="#115E59">
          Tempo total de atrasos: 45min
        </text>
      </svg>
    </div>
  )
}

