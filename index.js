const colors = {
    'Vermelho': '#FF0000',  // Red
    'Azul': '#0000FF',  // Blue
    'Amarelo': '#FFFF00',  // Yellow
    'Roxo': '#800080',  // Purple
    'Cinza': '#808080',  // Gray
    'Verde': '#008000',  // Green
    'Laranja': '#FFA500',  // Orange
    'Rosa': '#FFC0CB',  // Pink
    'Marrom': '#A52A2A',  // Brown
    'Preto': '#000000',  // Black
    'Branco': '#FFFFFF',  // White
    'Dourado': '#FFD700',  // Gold
    'Prata': '#C0C0C0',  // Silver
    'Turquesa': '#40E0D0',  // Turquoise
    'Violeta': '#8A2BE2',  // Violet
    'Magenta': '#FF00FF',  // Magenta
    'Ciano': '#00FFFF',  // Cyan
    'Lima': '#00FF00',  // Lime
    'Bege': '#F5F5DC',  // Beige
    'Lavanda': '#E6E6FA',  // Lavender
    'Pêssego': '#FFDAB9',  // Peach
    'Caramelo': '#FFD700',  // Caramel
    'Azeitona': '#808000',  // Olive
    'Bronze': '#CD7F32',  // Bronze
    'Azul-marinho': '#000080',  // Navy
    'Verde-escuro': '#006400',  // DarkGreen
    'Cinza-claro': '#D3D3D3',  // LightGray
    'Creme': '#FFF5EE',  // Cream
    'Indigo': '#4B0082',  // Indigo
    'Menta': '#98FF98',  // Mint
    'Mostarda': '#FFDB58',  // Mustard
    'Pistache': '#93C572',  // Pistachio
    'Salmão': '#FA8072',  // Salmon
    'Azul-claro': '#ADD8E6',  // LightBlue
    'Verde-claro': '#90EE90',  // LightGreen
    'Fúcsia': '#FF00FF',  // Fuchsia
    'Lilás': '#C8A2C8'  // Lilac
}


const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const colorNames = Object.keys(colors) // Pega apenas os nomes em português
    const randomColor = colorNames[Math.floor(Math.random() * colorNames.length)]
    
    document.body.style.background = colors[randomColor] // Usa a cor em inglês
    color.textContent = randomColor // Mostra a cor em português
})
