# Back-end

*******
Sumário 
 1. [Instalação](#install)
 2. [Iniciar Servidor](#start-server)
 3. [Rotas](#.env)
    - 3.1. [Cost Control](#cost-control-routes)
    - 3.2. [Quality Control](#quality-control-routes)
 4. [Rotas](#routes)
*******

<div id='install'/>  

## Instalação
```
npm install
```
<div id='start-server'/>

## Iniciar Servidor
```
npm run start:dev
```

<div id='.env'/>

## Arquivo .env
No arquivo .env é importante declarar as duas variáveis de ambiente que reprensentam as URLs das APIs dos Agentes Inteligêntes:

```
URL_QUALITY_AGENT_API=http://localhost:5000/cost-control
URL_COST_AGENT_API=http://localhost:5001/cost-control
```

O número da porta dependerá do valor definido na execução dos containers Docker dos agentes. É importante executar cada container em uma porta diferente.

<div id='routes'/>

## Rotas

<div id='cost-control-routes'/>

### Cost Control

#### POST cost-control/
Faz a requisição para consumo do Agente Inteligênte.

Body Params Exemplo:
```
{
    "custo_producao": "12000",
    "produtividade": "30",
    "custo_por_saca": "400",
    "preco_venda": "700",
    "gastos_fertilizantes": "3500",
    "mao_de_obra": "4000",
    "despesas_irrigacao": "1500",
    "custo_transporte": "20"
}
```

#### GET cost-control/
Retorna todos os inputs salvos no banco de dados.

#### GET cost-control/:id
Retorna um input pelo ID

#### PATCH cost-control/:id
Atualiza um ou mais campos do input do ID passado.

Body Params Exemplo:
```
{
    "preco_venda": "1000",
    "gastos_fertilizantes": "60"
}
```

#### DELETE cost-control/:id
Remove do banco de dados o input do ID passado.

<div id='quality-control-routes'/>

### Quality Control

#### POST quality-control/
Faz a requisição para consumo do Agente Inteligênte.

Body Params Exemplo:
```
{
    "umidade": 10.5,
    "densidade": 800,
    "tamanho_medio_grao": 6.2,
    "impurezas": 2,
    "defeitos": ["grãos quebrados", "verdes", "ardidos"],
    "origem_lote": "Sul de Minas, Brasil",
    "metodo_processamento": "Natural",
    "pontuacao_sca": 85
}
```

#### GET quality-control/
Retorna todos os inputs salvos no banco de dados.

#### GET quality-control/:id
Retorna um input pelo ID

#### PATCH cost-control/:id
Atualiza um ou mais campos do input do ID passado.

Body Params Exemplo:
```
{
    "umidade": 50,
    "pontuacao_sca": 75
}
```

#### DELETE cost-control/:id
Remove do banco de dados o input do ID passado.
