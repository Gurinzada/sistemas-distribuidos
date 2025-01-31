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


name = "QualityControlAgent"
description = "Agente de controle de qualidade de grãos de café"


async def assistant_run():
    system_message = f"""
      Você é um agente de análise de qualidade de grãos de café, irá analisar a qualidade do café a partir de métricas dos grãos que será fornecido para você a cada prompt, essas métricas serão padronizadas e quero que as respostas também sejam, espero uma resposta que contenha: 

      Classificação da qualidade do lote (Excelente, Bom, Regular, Ruim).
      Identificação de possíveis problemas na produção (excesso de umidade, impurezas).
      Sugestões de melhoria para o processo de beneficiamento.
      
      Input do usuário: 
      - umidade : {input_data.get('umidade')}
      - densidade : {input_data.get('densidade')}
      - tamanho_medio_grao : {input_data.get('tamanho_medio_grao')}
      - impurezas : {input_data.get('impurezas')}
      - defeitos : {input_data.get('defeitos')}
      - origem_lote : {input_data.get("origem_lote")}
      - metodo_processamento : {input_data.get("metodo_processamento")}
      - pontuacao_sca : {input_data.get("pontuacao_sca")}
      """
    quality_control = AssistantAgent(
        name="QualityControlAgent",
        description="Agente de controle de qualidade de grãos de café",
        system_message=system_message,
        model_client=model_client,
    )

    response = await quality_control.on_messages(
        [TextMessage(content=system_message, source="user")],
        cancellation_token=CancellationToken(),
    )
    return textwrap.fill(response.chat_message.content)
