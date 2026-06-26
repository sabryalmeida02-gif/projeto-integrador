const dadosSimulador = {
            aco: {
                valor: "-1.500 kg",
                rotulo: "de emissões de CO₂",
                descricao: "A reciclagem de uma tonelada de aço economiza recursos naturais e evita a queima de combustível fóssil necessária para fundir novo minério."
            },
            niobio: {
                valor: "-20%",
                rotulo: "de peso estrutural",
                descricao: "Pequenas porções de nióbio tornam o aço incrivelmente mais forte. Estruturas usam menos material e carros ficam leves, consumindo menos combustível."
            },
            energia: {
                valor: "100%",
                rotulo: "de Matriz Energética Limpa",
                descricao: "Trocar fornos a carvão por matrizes eólicas e solares elimina a emissão direta de gases de efeito estufa na atmosfera no processo de manufatura."
            }
        };

function mostrarImpacto(tipo, elementoBotao) {
    const botoes = document.querySelectorAll('.sim-btn')
    console.log(botoes)
    botoes.forEach(btn => btn.classList.remove('active'))
    
    elementoBotao.classList.add('active');

    document.getElementById('metrica-valor').innerText = dadosSimulador[tipo].valor
    document.getElementById('metrica-rotulo').innerText = dadosSimulador[tipo].rotulo;
    document.getElementById('metrica-descricao').innerText = dadosSimulador[tipo].descricao;
        }