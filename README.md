# Asaas Payment - Guia de Instalação

## Requisitos do Sistema

Para instalar e executar com sucesso a aplicação Asaas Payment, certifique-se de que seu ambiente atenda aos seguintes requisitos:

-   **APIs Asaas Payment**: [Configuração](https://github.com/deniscury/api.asaas-payments.com.br)
-   **PHP**: Versão 8.3.12 ou superior
-   **Composer**: Gerenciador de dependências para PHP
-   **Configuração do php.ini**: Certifique-se de que as seguintes extensões estejam habilitadas:
    -   `curl`
    -   `ftp`
    -   `fileinfo`
    -   `intl`
    -   `mbstring`
    -   `exif`
    -   `mysqli`
    -   `pdo_mysql`
    -   `openssl`
    -   `zip`
-   **Diretório de Extensão**: Defina o diretório de extensão no seu arquivo `php.ini`:
    ```
    extension_dir = "ext"
    ```

## Passos de Instalação

Siga estes passos para configurar o projeto Asaas Payment:

1. **Clonar o Repositório**:

    ```bash
    git clone <url-do-repositorio>
    ```

2. **Navegar até a Pasta Raiz do Projeto**:
   Certifique-se de que você está na pasta raiz do projeto clonado.

    ```bash
        cd <pasta-do-projeto>
    ```

3. **Configurar o Arquivo de Ambiente**:
   Renomeie o arquivo de exemplo de ambiente:

    ```bash
    mv .env.example .env
    ```

4. **Instalar Dependências**:
   Abra seu terminal ou prompt de comando e execute:

    ```bash
    composer install
    ```

5. **Alterar hosts**:
   Abra o arquivo hosts (C:\Windows\System32\drivers\etc\hosts) e adicione o DNS:

    ```bash
    127.0.0.1       asaas-payments.local
    ```

6. **Executar a Aplicação**:
   Inicie o servidor de desenvolvimento local com:
    ```bash
    php artisan serve --host=asaas-payments.local --port=8081
    ```

6. **Acessar Aplicação**:
   No seu navegador entre no link http://asaas-payments.local:8081

## Observações Adicionais

-   Certifique-se de ter as permissões necessárias para os diretórios e arquivos dentro do projeto.
-   Se você encontrar algum problema, verifique suas instalações do PHP e Composer, e assegure-se de que todas as extensões necessárias estão habilitadas.
-   Para mais assistência, consulte a documentação oficial do [Laravel](https://laravel.com/docs).

---

Essa versão é estruturada, fornece comandos claros e inclui notas adicionais para melhor clareza e usabilidade.

```

```
