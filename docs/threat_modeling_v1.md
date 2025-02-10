# Threat Modeling - Arquitetura do Projeto

## 1. Identificação de Ameaças (STRIDE)

### 🛑 Spoofing (Falsificação de Identidade)
- Risco: Acesso não autorizado ao sistema através de credenciais comprometidas.
- Mitigações:
  - Uso de **JWT seguro com Refresh Tokens**.
  - **Autenticação forte** (OAuth2).

### 🔧 Tampering (Manipulação de Dados)
- Risco: Modificação maliciosa de dados ou código-fonte.
- Mitigações:
  - **Uso de HTTPS/TLS** para proteção na comunicação.

###  Repudiation (Repúdio de Ações)
- Risco: Usuários negarem ações maliciosas sem registro adequado.
- Mitigações:
  - **Logging centralizado e imutável**

###  Information Disclosure (Exposição de Informações)
- Risco: Vazamento de dados sensíveis do banco de dados ou IA.
- Mitigações:
  - **Configuração correta de CORS**.
  - **Restrição de acesso a informações críticas**.

###  Denial of Service (Negação de Serviço)
- Risco: Sobrecarregar servidores, tornando o serviço indisponível.
- Mitigações:
  - Implementação de **Rate Limiting (Throttling)**.
  - **Proteção contra DDoS com WAF**.
  - **Otimização de consultas no banco de dados**.

###  Elevation of Privilege (Elevação de Privilégios)
- Não se aplica ao contexto dessa arquitetura
 
