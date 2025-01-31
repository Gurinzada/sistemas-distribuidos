import textwrap
from autogen_core import CancellationToken
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.messages import TextMessage
from autogen_ext.models.openai import OpenAIChatCompletionClient
from collections import defaultdict

model_client = OpenAIChatCompletionClient(
    model="llama3.2:3b",
    base_url="https://value-here.ngrok-free.app/v1",
    api_key="ollama",
    model_info={
        "vision": False,
        "function_calling": True,
        "json_output": False,
        "family": "unknown",
    },
)

input_data = defaultdict()


def set_input_data(data):
    input_data.update({key: data.get(key) for key in data.keys()})


async def assistant_run():
    system_message = f"""
      Você é um agente de controle de custos para a produção de grãos de café, irá analisar o custo do café a partir de métricas de produção dos grãos que será fornecido para você a cada prompt, essas métricas serão padronizadas e quero que as respostas também sejam, espero uma resposta que contenha: 

      Margem de lucro estimada por hectare e por saca.
      Identificação de custos elevados e sugestões de redução.
      Comparação com benchmarks da região.
      
      Input do usuário: 
      - custo de produção : {input_data.get('custo')}
      - produtividade : {input_data.get('produtividade')}
      - custo por saca : {input_data.get('custo_saca')}
      - preço de venda : {input_data.get('preco_venda')}
      - gastos com fertilizantes : {input_data.get('gastos_fertilizantes')}
      - mão de obra : {input_data.get("mao_de_obra")}
      - despesas com irrigação : {input_data.get("despesas_irrigacao")}
      - custo de transporte : {input_data.get("custo_transporte")}
      """
    quality_control = AssistantAgent(
        name="CostControlAgent",
        description="Agente de controle de custos de produção de grãos de café",
        system_message=system_message,
        model_client=model_client,
    )
    response = await quality_control.on_messages(
        [TextMessage(content="", source="user")],
        cancellation_token=CancellationToken(),
    )
    return textwrap.fill(response.chat_message.content)
