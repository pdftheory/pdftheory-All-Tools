/**
 * Conteúdo das ferramentas em Português para SEO
 * Contém descrições detalhadas, passos, casos de uso e FAQs
 */

import { ToolContent } from '@/types/tool';

/**
 * Mapa de conteúdo das ferramentas em Português
 */
export const toolContentPt: Record<string, ToolContent> = {
  // ==================== FERRAMENTAS POPULARES ====================
  'pdf-multi-tool': {
    title: 'Multi-Ferramenta PDF',
    metaDescription: 'Editor PDF tudo-em-um: juntar, dividir, organizar, excluir, girar e extrair páginas em uma única ferramenta poderosa.',
    keywords: ['multi ferramenta pdf', 'editor pdf online', 'juntar pdf', 'dividir pdf', 'organizar pdf', 'tudo em um pdf'],
    description: `
      <p>A Multi-Ferramenta PDF é sua solução completa para todas as tarefas de gerenciamento de páginas PDF. Esta poderosa ferramenta combina múltiplas operações em uma interface única e intuitiva, economizando seu tempo e esforço.</p>
      <p>Seja para mesclar vários documentos, dividir um PDF grande em arquivos menores, reorganizar páginas, excluir conteúdo indesejado, girar páginas ou extrair seções específicas, esta ferramenta faz tudo sem que você precise alternar entre diferentes aplicativos.</p>
      <p>Todo o processamento acontece diretamente no seu navegador, garantindo que seus documentos permaneçam privados e seguros. Nenhum arquivo é carregado em nossos servidores.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Arraste e solte seu arquivo PDF na área de upload ou clique para navegar e selecionar arquivos do seu dispositivo.' },
      { step: 2, title: 'Escolha a Operação', description: 'Selecione entre as operações disponíveis: mesclar, dividir, organizar, excluir páginas, girar ou extrair.' },
      { step: 3, title: 'Configure as Opções', description: 'Ajuste as configurações específicas, como intervalos de páginas, ângulos de rotação ou a ordem de mesclagem.' },
      { step: 4, title: 'Processar e Baixar', description: 'Clique no botão de processar e baixe seu PDF modificado assim que a operação for concluída.' },
    ],
    useCases: [
      { title: 'Preparação de Documentos', description: 'Prepare documentos para envio removendo páginas desnecessárias e combinando vários arquivos.', icon: 'file-check' },
      { title: 'Montagem de Relatórios', description: 'Combine seções de relatórios, adicione capas e organize capítulos em um único documento profissional.', icon: 'book-open' },
      { title: 'Gerenciamento de Arquivos', description: 'Divida arquivos grandes em seções gerenciáveis e extraia apenas as páginas relevantes.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quantos PDFs posso processar de uma vez?', answer: 'Você pode carregar e processar até 10 arquivos PDF simultaneamente, com um tamanho máximo combinado de 500MB.' },
      { question: 'Meus marcadores serão preservados?', answer: 'Sim, ao mesclar PDFs, a ferramenta preserva os marcadores existentes e pode combiná-los em uma estrutura unificada.' },
      { question: 'Existe um limite de páginas?', answer: 'Não há um limite estrito. A ferramenta lida com documentos de centenas de páginas, embora arquivos muito grandes possam demorar mais para processar.' },
    ],
  },

  'merge-pdf': {
    title: 'Juntar PDF',
    metaDescription: 'Combine vários arquivos PDF em um único documento. Mesclador de PDF online gratuito com reordenação por arrastar e soltar.',
    keywords: ['juntar pdf', 'combinar pdf', 'mesclar pdf', 'unir pdf', 'agrupar pdf'],
    description: `
      <p>Juntar PDF permite combinar vários documentos PDF em um único arquivo de forma rápida e fácil. Seja para consolidar relatórios ou montar uma apresentação, esta ferramenta torna o processo perfeito.</p>
      <p>Basta carregar seus arquivos, organizá-los na ordem desejada e mesclá-los. A ferramenta preserva a qualidade original e mantém os marcadores de cada documento fonte.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de Arquivos', description: 'Arraste e solte vários arquivos PDF ou clique para selecionar do seu dispositivo.' },
      { step: 2, title: 'Organize a Ordem', description: 'Arraste as miniaturas dos arquivos para organizá-los na ordem que você deseja que apareçam.' },
      { step: 3, title: 'Mesclar e Baixar', description: 'Clique no botão Mesclar e baixe seu PDF unificado.' },
    ],
    useCases: [
      { title: 'Combinar Relatórios', description: 'Mescle relatórios mensais ou trimestrais em um único documento anual.', icon: 'file-text' },
      { title: 'Montar Portfólios', description: 'Reuna certificados, amostras de trabalho e currículo em um portfólio profissional.', icon: 'briefcase' },
      { title: 'Consolidar Notas Fiscais', description: 'Agrupe várias faturas ou recibos em um único arquivo para contabilidade.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Quantos PDFs posso juntar?', answer: 'Você pode mesclar até 100 arquivos PDF de uma só vez, com um tamanho total de até 500MB.' },
      { question: 'A qualidade original será mantida?', answer: 'Sim, o processo de mesclagem preserva a qualidade original sem qualquer compressão adicional.' },
      { question: 'Posso juntar PDFs protegidos por senha?', answer: 'Eles precisam ser descriptografados primeiro. Use nossa ferramenta "Descriptografar PDF" antes de tentar mesclá-los.' },
    ],
  },

  'split-pdf': {
    title: 'Dividir PDF',
    metaDescription: 'Divida arquivos PDF em vários documentos. Extraia páginas específicas ou divida por intervalos.',
    keywords: ['dividir pdf', 'separar pdf', 'extrair páginas pdf', 'cortar pdf'],
    description: `
      <p>Dividir PDF permite separar um único documento em vários arquivos menores. Perfeito para extrair capítulos específicos ou separar documentos que foram digitalizados juntos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo que deseja dividir.' },
      { step: 2, title: 'Escolha o Método', description: 'Escolha entre extrair páginas individuais, intervalos específicos ou dividir em partes iguais.' },
      { step: 3, title: 'Dividir e Baixar', description: 'Clique em Dividir e baixe os arquivos resultantes (geralmente em um arquivo ZIP).' },
    ],
    useCases: [
      { title: 'Extrair Capítulos', description: 'Divida um livro ou manual em capítulos individuais para facilitar a leitura.', icon: 'book' },
      { title: 'Separar Digitalizações', description: 'Divida um lote de documentos digitalizados em arquivos individuais.', icon: 'copy' },
      { title: 'Criar Material de Apoio', description: 'Extraia apenas os slides relevantes de uma apresentação para seus alunos.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Posso salvar cada página como um PDF separado?', answer: 'Sim, basta escolher a opção "Dividir todas as páginas".' },
      { question: 'O que acontece com os marcadores?', answer: 'Os marcadores que apontam para as páginas extraídas são preservados no novo arquivo.' },
      { question: 'Posso dividir PDFs com senha?', answer: 'Você deve remover a senha usando nossa ferramenta de descriptografia antes de realizar a divisão.' },
    ],
  },

  'compress-pdf': {
    title: 'Comprimir PDF',
    metaDescription: 'Reduza o tamanho do arquivo PDF mantendo a qualidade. Compressor de PDF online gratuito para arquivos menores.',
    keywords: ['comprimir pdf', 'reduzir tamanho pdf', 'otimizar pdf', 'diminuir arquivo pdf'],
    description: `
      <p>Comprimir PDF reduz o tamanho dos seus documentos, ideal para anexos de e-mail ou uploads na web. Oferecemos vários níveis de compressão para equilibrar tamanho e qualidade.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo que você deseja diminuir.' },
      { step: 2, title: 'Escolha o Nível', description: 'Selecione: Baixa (Melhor qualidade), Média (Equilibrada) ou Alta (Menor tamanho).' },
      { step: 3, title: 'Comprimir', description: 'Inicie o processo e baixe seu PDF otimizado.' },
    ],
    useCases: [
      { title: 'Anexos de E-mail', description: 'Reduza o PDF para caber nos limites de tamanho dos provedores de e-mail.', icon: 'mail' },
      { title: 'Publicação na Web', description: 'Melhore a velocidade de carregamento do seu site com PDFs menores.', icon: 'globe' },
      { title: 'Economia de Espaço', description: 'Arquive documentos ocupando menos espaço no seu disco rígido.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Quanto o tamanho será reduzido?', answer: 'Depende do conteúdo. PDFs com muitas imagens podem reduzir de 50% a 80%, enquanto PDFs só de texto reduzem menos.' },
      { question: 'A qualidade do texto será afetada?', answer: 'Não, o texto permanece nítido. A compressão foca principalmente em imagens e gráficos.' },
      { question: 'É seguro?', answer: 'Sim, a compressão é feita localmente no seu navegador; seus dados não saem do seu computador.' },
    ],
  },

  'edit-pdf': {
    title: 'Editar PDF',
    metaDescription: 'Edite arquivos PDF online. Adicione texto, imagens, anotações e formas aos seus documentos.',
    keywords: ['editar pdf', 'editor pdf online gratuito', 'escrever no pdf', 'anotar pdf'],
    description: `
      <p>Nosso editor de PDF oferece ferramentas para modificar e anotar seus documentos sem software caro. Adicione texto, imagens, formas e destaques facilmente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento que deseja editar.' },
      { step: 2, title: 'Use as Ferramentas', description: 'Use a barra de ferramentas para inserir texto, realces ou imagens.' },
      { step: 3, title: 'Editar e Salvar', description: 'Posicione os elementos e baixe a versão editada.' },
    ],
    useCases: [
      { title: 'Revisão de Documentos', description: 'Adicione comentários e marcações em rascunhos de equipe.', icon: 'message-square' },
      { title: 'Preencher Formulários', description: 'Escreva em PDFs e adicione assinaturas digitais.', icon: 'edit-3' },
      { title: 'Ocultar Informações', description: 'Cubra dados sensíveis com formas antes de compartilhar.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Posso alterar o texto original?', answer: 'Esta ferramenta foca em adicionar conteúdo. Para alterar o texto original, geralmente é necessário o arquivo fonte (ex: Word).' },
      { question: 'As alterações são permanentes?', answer: 'Sim, ao salvar, as edições são incorporadas às camadas do PDF.' },
      { question: 'Posso desfazer ações?', answer: 'Sim, o editor suporta as funções de desfazer e refazer durante a edição.' },
    ],
  },// ==================== VISUALS & COLORS ====================
  'invert-colors': {
    title: 'Inverter Cores',
    metaDescription: 'Inverta as cores do PDF para o modo escuro. Transforme documentos em cores negativas para facilitar a leitura.',
    keywords: ['inverter cores pdf', 'modo escuro pdf', 'pdf negativo', 'reduzir fadiga ocular'],
    description: `
      <p>Inverta as cores de seus documentos PDF para criar um efeito de negativo. Isso é extremamente útil para leitura em ambientes com pouca luz (Modo Escuro), ajudando a reduzir a fadiga ocular.</p>
      <p>A ferramenta permite inverter todas as cores ou preservar elementos específicos, como imagens. Perfeito para quem passa horas lendo documentos técnicos ou acadêmicos na tela.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Escolha o PDF que deseja transformar.' },
      { step: 2, title: 'Configurar Opções', description: 'Decida se deseja inverter todo o conteúdo ou apenas textos e fundos.' },
      { step: 3, title: 'Processar e Baixar', description: 'Baixe a versão com cores invertidas para uma leitura mais confortável.' },
    ],
    useCases: [
      { title: 'Leitura Noturna', description: 'Crie versões em modo escuro para ler à noite sem cansar os olhos.', icon: 'moon' },
      { title: 'Acessibilidade', description: 'Ajude usuários com sensibilidade à luz ou deficiência visual através do alto contraste.', icon: 'eye' },
      { title: 'Economia de Tinta', description: 'Inverta documentos com fundo escuro antes de imprimir para economizar cartucho.', icon: 'printer' },
    ],
    faq: [
      { question: 'As imagens também serão invertidas?', answer: 'Por padrão, sim. No entanto, você pode optar por manter as imagens originais enquanto inverte o restante.' },
      { question: 'Posso inverter apenas algumas páginas?', answer: 'Sim, você tem a opção de selecionar páginas específicas para a inversão.' },
      { question: 'O processo é reversível?', answer: 'Sim, basta passar o arquivo resultante pela ferramenta novamente para voltar às cores originais.' },
    ],
  },

  'background-color': {
    title: 'Cor de Fundo',
    metaDescription: 'Altere a cor de fundo do PDF. Adicione fundos coloridos às páginas do seu documento.',
    keywords: ['cor de fundo pdf', 'mudar cor pdf', 'fundo colorido pdf', 'personalizar pdf'],
    description: `
      <p>Altere ou adicione uma cor de fundo às suas páginas PDF. Isso pode melhorar a legibilidade, adicionar um toque visual profissional ou alinhar o documento à sua identidade visual.</p>
      <p>Escolha qualquer cor e aplique-a a todo o documento. A ferramenta preserva todo o conteúdo existente enquanto adiciona a camada de cor por baixo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo que deseja colorir.' },
      { step: 2, title: 'Escolher Cor', description: 'Use o seletor de cores ou insira um código hexadecimal.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Aplique a cor de fundo e baixe o PDF atualizado.' },
    ],
    useCases: [
      { title: 'Melhorar Legibilidade', description: 'Adicione um fundo creme ou sépia para reduzir o cansaço visual ao ler.', icon: 'eye' },
      { title: 'Identidade Visual', description: 'Aplique cores da sua marca em apresentações ou propostas.', icon: 'palette' },
      { title: 'Destaque de Seções', description: 'Use cores diferentes para distinguir capítulos ou seções do documento.', icon: 'layers' },
    ],
    faq: [
      { question: 'A cor vai cobrir meu texto?', answer: 'Não, a cor é adicionada como uma camada de fundo, mantendo textos e imagens visíveis.' },
      { question: 'Posso usar cores diferentes em cada página?', answer: 'Atualmente, a ferramenta aplica uma cor por vez. Para cores variadas, processe os intervalos de páginas separadamente.' },
      { question: 'Como remover uma cor de fundo existente?', answer: 'Esta ferramenta foca em adicionar. Para remover, utilize o nosso editor de PDF.' },
    ],
  },

  'text-color': {
    title: 'Mudar Cor do Texto',
    metaDescription: 'Altere a cor do texto em documentos PDF. Modifique a cor de todo o conteúdo de texto globalmente.',
    keywords: ['mudar cor texto pdf', 'cor da fonte pdf', 'alterar texto pdf', 'recolorir pdf'],
    description: `
      <p>Modifique a cor de todo o texto no seu PDF de uma só vez. Útil para melhorar o contraste, alinhar com diretrizes de marca ou preparar documentos para apresentações visuais.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue seu documento PDF.' },
      { step: 2, title: 'Selecionar Cor', description: 'Escolha a nova cor desejada para o texto.' },
      { step: 3, title: 'Converter e Baixar', description: 'Baixe o documento com as cores de texto atualizadas.' },
    ],
    useCases: [
      { title: 'Aumentar Contraste', description: 'Mude cores claras para preto para garantir uma leitura perfeita.', icon: 'contrast' },
      { title: 'Padronização de Marca', description: 'Atualize as cores das fontes para as cores oficiais da sua empresa.', icon: 'palette' },
      { title: 'Acessibilidade Web', description: 'Ajuste cores para atender aos padrões de contraste para deficientes visuais.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Todo o texto será alterado?', answer: 'Sim, a ferramenta detecta elementos de texto e aplica a cor globalmente.' },
      { question: 'O formato (negrito/itálico) é mantido?', answer: 'Sim, todas as formatações originais são preservadas, apenas o valor da cor é alterado.' },
      { question: 'Funciona em textos dentro de imagens?', answer: 'Não, textos que fazem parte de uma imagem (rastreados) não podem ser recoloridos por esta ferramenta.' },
    ],
  },

  'add-stamps': {
    title: 'Adicionar Carimbos',
    metaDescription: 'Adicione carimbos a documentos PDF. Use modelos predefinidos ou carimbos personalizados.',
    keywords: ['carimbo pdf', 'carimbos prontos pdf', 'marcar pdf', 'carimbo digital'],
    description: `
      <p>Coloque carimbos digitais em seus PDFs. Utilize modelos clássicos como "APROVADO", "REPROVADO", "RASCUNHO" ou envie sua própria imagem para carimbar o documento.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo que deseja carimbar.' },
      { step: 2, title: 'Escolher Carimbo', description: 'Selecione um modelo pronto ou envie seu próprio logo/imagem.' },
      { step: 3, title: 'Posicionar e Salvar', description: 'Clique onde deseja o carimbo, ajuste o tamanho e baixe o arquivo.' },
    ],
    useCases: [
      { title: 'Fluxos de Aprovação', description: 'Marque faturas ou contratos como "Pago" ou "Revisado".', icon: 'check-circle' },
      { title: 'Status do Documento', description: 'Sinalize claramente documentos como "Final" ou "Obsoleto".', icon: 'tag' },
      { title: 'Controle de Qualidade', description: 'Adicione selos de inspeção em relatórios técnicos.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'Quais modelos estão disponíveis?', answer: 'Aprovado, Rejeitado, Rascunho, Confidencial, Cópia e muitos outros.' },
      { question: 'Posso usar meu próprio logo?', answer: 'Sim, você pode carregar qualquer imagem PNG ou JPG para usar como carimbo personalizado.' },
      { question: 'Posso colocar vários carimbos?', answer: 'Sim, você pode adicionar quantos carimbos desejar em páginas diferentes.' },
    ],
  },

  'remove-annotations': {
    title: 'Remover Anotações',
    metaDescription: 'Remova anotações de arquivos PDF. Limpe comentários, realces e marcações.',
    keywords: ['remover comentários pdf', 'limpar anotações pdf', 'pdf limpo', 'excluir marcações'],
    description: `
      <p>Remova todos os comentários, destaques e notas adesivas de seu PDF. Crie uma versão "limpa" para publicação final ou compartilhamento externo sem marcas de revisão.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue o documento com as anotações.' },
      { step: 2, title: 'Selecionar Tipos', description: 'Escolha se deseja remover apenas comentários, apenas realces ou tudo.' },
      { step: 3, title: 'Limpar e Baixar', description: 'Baixe o PDF sem as marcas de edição.' },
    ],
    useCases: [
      { title: 'Finalização', description: 'Remova notas de revisão interna antes de enviar ao cliente final.', icon: 'file-check' },
      { title: 'Privacidade', description: 'Exclua comentários que possam conter informações sensíveis do processo de revisão.', icon: 'shield' },
      { title: 'Distribuição Limpa', description: 'Gere cópias para leitura sem distrações de marcações coloridas.', icon: 'copy' },
    ],
    faq: [
      { question: 'O que exatamente é removido?', answer: 'Destaques, sublinhados, notas, carimbos e desenhos à mão livre.' },
      { question: 'O texto original é apagado?', answer: 'Não, apenas as camadas de anotação por cima do texto são removidas.' },
      { question: 'A remoção é permanente?', answer: 'No arquivo baixado, sim. Recomendamos sempre manter uma cópia original.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Remover Páginas Brancas',
    metaDescription: 'Detecte e remova automaticamente páginas em branco de documentos PDF.',
    keywords: ['remover páginas vazias pdf', 'deletar páginas em branco', 'limpar scan pdf'],
    description: `
      <p>Esta ferramenta inteligente detecta e elimina automaticamente páginas vazias. Ideal para limpar digitalizações ou remover divisores após mesclar vários documentos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento que deseja limpar.' },
      { step: 2, title: 'Ajustar Sensibilidade', description: 'Defina o nível de detecção (útil para ignorar pequenos pontos de poeira no scan).' },
      { step: 3, title: 'Remover e Baixar', description: 'Baixe seu PDF otimizado e sem páginas inúteis.' },
    ],
    useCases: [
      { title: 'Otimizar Digitalizações', description: 'Remova versos em branco de documentos que foram escaneados em lote.', icon: 'scan' },
      { title: 'Reduzir Tamanho', description: 'Economize espaço removendo páginas que não contêm informação.', icon: 'minimize-2' },
      { title: 'Limpeza de Arquivos', description: 'Delete divisores de página após unir vários documentos.', icon: 'minus' },
    ],
    faq: [
      { question: 'Como a detecção funciona?', answer: 'A ferramenta analisa o conteúdo da página. Se quase não houver pixels visíveis, ela é marcada como branca.' },
      { question: 'E se a página tiver uma pequena mancha?', answer: 'Você pode ajustar o "limiar" de detecção para que páginas com pequenas sujeiras de scan ainda sejam consideradas brancas.' },
      { question: 'Posso ver o que será deletado?', answer: 'Sim, as páginas detectadas são mostradas em uma prévia antes da confirmação.' },
    ],
  },// ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Imagem para PDF',
    metaDescription: 'Converta qualquer imagem em PDF. Suporte para JPG, PNG, WebP, BMP, TIFF, SVG e HEIC.',
    keywords: ['imagem para pdf', 'converter foto em pdf', 'transformar imagem em pdf', 'unir fotos em pdf'],
    description: `
      <p>Transforme fotos e gráficos de qualquer formato em documentos PDF profissionais. Com suporte para JPG, PNG, WebP, BMP, TIFF, SVG e HEIC, esta é a sua ferramenta universal de conversão de imagem.</p>
      <p>Combine várias imagens em um único arquivo PDF, organize-as na ordem que desejar e personalize o tamanho da página e a orientação conforme sua necessidade.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de Imagens', description: 'Arraste as imagens para a área de upload ou selecione arquivos do seu dispositivo.' },
      { step: 2, title: 'Organizar e Configurar', description: 'Reordene as fotos e escolha o tamanho da página (como A4 ou tamanho original).' },
      { step: 3, title: 'Converter', description: 'Gere seu PDF e baixe o resultado imediatamente.' },
    ],
    useCases: [
      { title: 'Álbuns de Fotos', description: 'Reúna fotos de viagens ou eventos em um único álbum em formato PDF.', icon: 'images' },
      { title: 'Arquivamento de Documentos', description: 'Digitalize documentos físicos transformando fotos de scans em PDFs arquiváveis.', icon: 'archive' },
      { title: 'Portfólios', description: 'Crie uma apresentação profissional com seus trabalhos de design ou fotografia.', icon: 'file-stack' },
    ],
    faq: [
      { question: 'Quais formatos são aceitos?', answer: 'JPG, PNG, WebP, BMP, TIFF, SVG e o formato HEIC da Apple.' },
      { question: 'A qualidade da imagem é mantida?', answer: 'Sim, por padrão as imagens são incorporadas em sua resolução original.' },
      { question: 'Posso mudar a ordem das fotos?', answer: 'Sim, você pode arrastar e soltar as imagens para ordenar antes de gerar o PDF.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG para PDF',
    metaDescription: 'Converta imagens PNG em PDF. Preserve transparências e combine vários arquivos PNG.',
    keywords: ['png para pdf', 'converter png em pdf', 'imagem transparente para pdf', 'print para pdf'],
    description: `
      <p>Converta arquivos PNG para PDF mantendo a transparência. Ideal para gráficos, logotipos e capturas de tela (screenshots) que possuem fundo transparente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de PNGs', description: 'Selecione seus arquivos PNG.' },
      { step: 2, title: 'Escolher Layout', description: 'Determine o tamanho da página e a disposição das imagens.' },
      { step: 3, title: 'Baixar', description: 'Baixe o documento PDF finalizado.' },
    ],
    useCases: [
      { title: 'Portfólios de Gráficos', description: 'Apresente logotipos e designs de interface em um documento limpo.', icon: 'palette' },
      { title: 'Documentação de Software', description: 'Reúna capturas de tela de programas em um manual de instruções.', icon: 'monitor' },
      { title: 'Catálogos de Logos', description: 'Crie uma visão geral dos assets da sua marca.', icon: 'award' },
    ],
    faq: [
      { question: 'A transparência é mantida?', answer: 'Sim, as áreas transparentes do PNG serão exibidas corretamente no PDF.' },
      { question: 'O que acontece com PNGs animados?', answer: 'Eles serão convertidos como uma imagem estática (o primeiro quadro).' },
      { question: 'Posso definir uma cor de fundo?', answer: 'Sim, você pode optar por preencher áreas transparentes com uma cor específica no PDF.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP para PDF',
    metaDescription: 'Converter imagens WebP para PDF. Transforme o formato moderno do Google para impressão e arquivamento.',
    keywords: ['webp para pdf', 'converter webp em pdf', 'transformar webp', 'formato webp pdf'],
    description: `
      <p>Converta imagens modernas no formato WebP para o padrão universal PDF. Ideal para preparar imagens baixadas da web para impressão ou arquivamento de longo prazo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de WebP', description: 'Selecione os arquivos WebP da sua pasta.' },
      { step: 2, title: 'Ajustar Opções', description: 'Escolha orientação Retrato ou Paisagem para suas páginas.' },
      { step: 3, title: 'Salvar', description: 'Gere o PDF a partir de seus gráficos WebP.' },
    ],
    useCases: [
      { title: 'Arquivar Conteúdo Web', description: 'Salve imagens de sites permanentemente em formato PDF.', icon: 'globe' },
      { title: 'Preparação para Impressão', description: 'Torne imagens modernas de web acessíveis para impressoras comuns.', icon: 'printer' },
      { title: 'Padronização de Formato', description: 'Converta WebP para o formato PDF multiplataforma.', icon: 'file-check' },
    ],
    faq: [
      { question: 'O que é WebP?', answer: 'Um formato desenvolvido pelo Google para alta compressão na web.' },
      { question: 'A conversão perde qualidade?', answer: 'Não, a qualidade da imagem original WebP é mantida no PDF.' },
      { question: 'Funciona com WebPs animados?', answer: 'Eles serão convertidos como imagens estáticas.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG para PDF',
    metaDescription: 'Converter gráficos vetoriais SVG para PDF. Preserve a escalabilidade e a qualidade sem perdas.',
    keywords: ['svg para pdf', 'vetor para pdf', 'converter svg em pdf', 'logo vetorial pdf'],
    description: `
      <p>Converta gráficos vetoriais escaláveis (SVG) em PDF sem perder a nitidez. Como o PDF também suporta vetores, seu design permanecerá nítido em qualquer nível de zoom.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de SVG', description: 'Selecione seus arquivos vetoriais SVG.' },
      { step: 2, title: 'Configurar Página', description: 'Escolha o formato ideal para seus gráficos.' },
      { step: 3, title: 'Converter', description: 'Baixe o PDF vetorial.' },
    ],
    useCases: [
      { title: 'Impressão de Logos', description: 'Prepare logotipos vetoriais para impressão profissional.', icon: 'award' },
      { title: 'Plantas Técnicas', description: 'Converta exportações de CAD ou diagramas em PDF.', icon: 'ruler' },
      { title: 'Ilustrações', description: 'Crie documentos de alta resolução a partir de artes vetoriais.', icon: 'grid' },
    ],
    faq: [
      { question: 'A qualidade vetorial é mantida?', answer: 'Sim, o PDF preserva os caminhos matemáticos, mantendo o conteúdo infinitamente escalável.' },
      { question: 'As fontes são incorporadas corretamente?', answer: 'Geralmente sim. Para melhores resultados, as fontes no SVG devem ser convertidas em curvas.' },
      { question: 'Suporta filtros complexos?', answer: 'A maioria dos filtros e gradientes padrão do SVG é suportada.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC para PDF',
    metaDescription: 'Converter fotos HEIC do iPhone para PDF. Torne fotos da Apple compatíveis com Windows e Android.',
    keywords: ['heic para pdf', 'converter foto iphone', 'heic em pdf', 'apple heic converter'],
    description: `
      <p>Converta fotos HEIC do seu iPhone ou iPad diretamente para PDF. Embora o HEIC ofereça boa compressão, ele não é legível em todos os lugares — o PDF, por outro lado, sim.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de HEIC', description: 'Selecione suas fotos da Apple.' },
      { step: 2, title: 'Ordenar', description: 'Coloque suas fotos na ordem desejada.' },
      { step: 3, title: 'Baixar', description: 'Baixe o documento PDF universal.' },
    ],
    useCases: [
      { title: 'Álbuns Mobile', description: 'Crie PDFs de suas fotos de celular para compartilhar com usuários de Windows ou Android.', icon: 'smartphone' },
      { title: 'Scans de iPhone', description: 'Transforme documentos fotografados com o celular em PDFs limpos.', icon: 'scan' },
      { title: 'Compatibilidade', description: 'Torne imagens HEIC utilizáveis em PCs e outros dispositivos não Apple.', icon: 'share-2' },
    ],
    faq: [
      { question: 'O que é HEIC?', answer: 'O formato padrão de imagem da Apple para armazenamento eficiente.' },
      { question: 'Suporta Live Photos?', answer: 'A ferramenta converte a imagem principal da Live Photo para o PDF.' },
      { question: 'Os metadados (Exif) são mantidos?', answer: 'Você pode escolher se deseja manter informações de local e data no documento.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Texto para PDF',
    metaDescription: 'Converter arquivos de texto (TXT) em PDF formatado. Personalize fontes e layout.',
    keywords: ['txt para pdf', 'converter texto em pdf', 'texto para documento', 'arquivo txt pdf'],
    description: `
      <p>Transforme arquivos de texto simples (.txt) em documentos PDF formatados. Personalize fontes, margens e layout para transformar notas simples em documentos profissionais.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de Arquivo TXT', description: 'Selecione seu arquivo .txt.' },
      { step: 2, title: 'Formatação', description: 'Escolha a fonte (ex: Monospace para código) e as margens.' },
      { step: 3, title: 'Salvar', description: 'Baixe o documento PDF formatado.' },
    ],
    useCases: [
      { title: 'Documentação de Código', description: 'Converta arquivos de código-fonte em PDFs legíveis.', icon: 'code' },
      { title: 'Arquivamento de Logs', description: 'Salve logs de servidor em um formato de documento fixo.', icon: 'file-text' },
      { title: 'Manuscritos', description: 'Transforme rascunhos de texto simples em PDFs prontos para impressão.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'Suporta caracteres especiais?', answer: 'Sim, a ferramenta suporta codificação UTF-8 para caracteres internacionais.' },
      { question: 'Há quebra de linha automática?', answer: 'Sim, linhas muito longas são ajustadas automaticamente à largura da página.' },
      { question: 'Posso mudar o tamanho da fonte?', answer: 'Sim, você pode ajustar o tamanho para uma leitura ideal.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON para PDF',
    metaDescription: 'Converter arquivos JSON em PDF formatado. Com realce de sintaxe e saída estruturada.',
    keywords: ['json para pdf', 'visualizar json', 'converter dados api', 'formatar json pdf'],
    description: `
      <p>Transforme dados JSON em um PDF legível e bem formatado. A ferramenta oferece realce de sintaxe automático e recuos para visualizar estruturas de dados complexas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de JSON', description: 'Selecione seu arquivo .json.' },
      { step: 2, title: 'Escolher Estilo', description: 'Configure o esquema de cores para o realce de sintaxe.' },
      { step: 3, title: 'Gerar', description: 'Baixe o PDF de dados estruturados.' },
    ],
    useCases: [
      { title: 'Documentação de API', description: 'Apresente respostas de exemplo em um documento limpo.', icon: 'code' },
      { title: 'Backups de Configuração', description: 'Arquive configurações em um formato legível por humanos.', icon: 'settings' },
      { title: 'Relatórios de Dados', description: 'Crie relatórios a partir de exportações de dados JSON.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'O código é colorido?', answer: 'Sim, chaves, valores e tipos de dados são destacados para facilitar a visualização.' },
      { question: 'Como lida com arquivos grandes?', answer: 'Estruturas JSON longas são distribuídas automaticamente por várias páginas.' },
      { question: 'Preciso de conhecimentos de programação?', answer: 'Não, basta carregar o arquivo e a ferramenta cuida do layout.' },
    ],
  },// ==================== CONVERT FROM PDF ====================
  'pdf-to-jpg': {
    title: 'PDF para JPG',
    metaDescription: 'Converta páginas de PDF em imagens JPG. Extração de alta qualidade com resolução personalizável.',
    keywords: ['pdf para jpg', 'pdf em jpeg', 'converter pdf para imagem', 'extrair páginas pdf'],
    description: `
      <p>Converta as páginas do seu documento PDF em imagens JPG de alta qualidade. Você pode converter todas as páginas ou selecionar páginas específicas, ajustando a resolução (DPI) e a qualidade da imagem conforme necessário.</p>
      <p>Ideal para criar prévias de documentos, compartilhar conteúdos em redes sociais ou utilizar páginas de PDF em editores de imagem.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo PDF que deseja converter.' },
      { step: 2, title: 'Escolher Qualidade', description: 'Defina a resolução (DPI) desejada e o nível de compressão.' },
      { step: 3, title: 'Converter e Baixar', description: 'Baixe as imagens individualmente ou todas juntas em um arquivo ZIP.' },
    ],
    useCases: [
      { title: 'Publicação na Web', description: 'Crie versões de imagem das páginas do seu PDF para o seu site.', icon: 'globe' },
      { title: 'Redes Sociais', description: 'Compartilhe conteúdos de documentos no Instagram, LinkedIn ou Facebook como imagens simples.', icon: 'share-2' },
      { title: 'Apresentações', description: 'Insira slides ou páginas de PDF como imagens no PowerPoint ou Keynote.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Qual resolução é suportada?', answer: 'Você pode escolher entre 72 DPI (web) até 300 DPI (qualidade de impressão).' },
      { question: 'Posso converter apenas algumas páginas?', answer: 'Sim, é possível selecionar páginas individuais ou intervalos específicos.' },
      { question: 'Como recebo os arquivos?', answer: 'Se o documento tiver várias páginas, a ferramenta gera automaticamente um arquivo ZIP prático.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF para PNG',
    metaDescription: 'Converta páginas de PDF em imagens PNG. Qualidade sem perdas com suporte a transparência.',
    keywords: ['pdf para png', 'pdf para imagem sem perda', 'extração de gráficos pdf', 'transparência pdf'],
    description: `
      <p>Converta documentos PDF para o formato PNG sem perda de qualidade. Ao contrário do JPG, o PNG oferece uma qualidade de imagem perfeita, sem artefatos de compressão, e suporta fundos transparentes.</p>
      <p>Especialmente indicado para PDFs que contêm diagramas, logotipos ou textos que precisam permanecer extremamente nítidos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue seu documento.' },
      { step: 2, title: 'Configurar Opções', description: 'Selecione as páginas e a densidade de pixels desejada.' },
      { step: 3, title: 'Salvar PNGs', description: 'Extraia as páginas como arquivos PNG de alta fidelidade.' },
    ],
    useCases: [
      { title: 'Extração de Gráficos', description: 'Salve gráficos vetoriais de PDFs como imagens rasterizadas limpas.', icon: 'image' },
      { title: 'Assets de Design', description: 'Converta rascunhos de PDF em PNG para softwares de edição gráfica.', icon: 'palette' },
      { title: 'Documentação Técnica', description: 'Crie ilustrações nítidas para manuais e guias.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Por que usar PNG em vez de JPG?', answer: 'O PNG não tem perdas e é melhor para textos e gráficos com bordas nítidas.' },
      { question: 'A transparência é mantida?', answer: 'Sim, se o PDF tiver camadas transparentes, elas serão preservadas no arquivo PNG.' },
      { question: 'Qual DPI devo usar?', answer: '150 DPI para telas e 300 DPI para máxima nitidez de detalhes.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF para WebP',
    metaDescription: 'Converta páginas de PDF em imagens WebP. Formato moderno com excelente compressão para web.',
    keywords: ['pdf para webp', 'formato de imagem moderno', 'imagens otimizadas para web', 'pdf converter'],
    description: `
      <p>Transforme páginas de PDF no formato WebP da Google. O WebP oferece uma compressão significativamente melhor que JPG ou PNG, mantendo uma qualidade comparável.</p>
      <p>Esta é a melhor escolha se você deseja exibir conteúdos de PDF em um site moderno com carregamento rápido.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento PDF.' },
      { step: 2, title: 'Escolher Compressão', description: 'Defina o equilíbrio entre tamanho do arquivo e qualidade visual.' },
      { step: 3, title: 'Baixar', description: 'Baixe as imagens WebP otimizadas para a internet.' },
    ],
    useCases: [
      { title: 'Otimização Web', description: 'Reduza o tempo de carregamento do seu site usando imagens WebP.', icon: 'globe' },
      { title: 'Economia de Banda', description: 'Ideal para aplicações móveis com planos de dados limitados.', icon: 'zap' },
      { title: 'Design Web Moderno', description: 'Utilize formatos de imagem prontos para o futuro em seus projetos.', icon: 'layout' },
    ],
    faq: [
      { question: 'O WebP é compatível com todos os navegadores?', answer: 'Sim, todos os navegadores modernos como Chrome, Firefox, Edge e Safari suportam WebP.' },
      { question: 'Quanto os arquivos ficam menores?', answer: 'Arquivos WebP costumam ser 25-35% menores que arquivos JPG equivalentes.' },
      { question: 'Há perda de qualidade?', answer: 'O WebP oferece opções de compressão com e sem perdas (lossy e lossless).' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF para BMP',
    metaDescription: 'Converta páginas de PDF em imagens BMP (Bitmap). Formato não compactado para máxima compatibilidade.',
    keywords: ['pdf para bmp', 'converter bitmap', 'imagem sem compressão', 'formato legado'],
    description: `
      <p>Converta páginas de PDF no formato clássico BMP (Windows Bitmap). O BMP é um formato não compactado que garante compatibilidade universal com sistemas antigos e aplicações específicas do Windows.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Escolha seu arquivo.' },
      { step: 2, title: 'Selecionar Páginas', description: 'Determine quais páginas serão salvas como bitmap.' },
      { step: 3, title: 'Gerar BMP', description: 'Converta e baixe as imagens bitmap.' },
    ],
    useCases: [
      { title: 'Sistemas Antigos', description: 'Crie imagens para softwares que não suportam formatos modernos.', icon: 'history' },
      { title: 'Aplicações Windows', description: 'Gere arquivos compatíveis para ferramentas específicas do Windows.', icon: 'monitor' },
      { title: 'Arquivamento sem Perdas', description: 'Salve imagens sem nenhum artefato de compressão.', icon: 'archive' },
    ],
    faq: [
      { question: 'Por que ainda usar BMP?', answer: 'Principalmente para compatibilidade com softwares legados ou aplicações industriais.' },
      { question: 'Os arquivos BMP são muito grandes?', answer: 'Sim, como não são compactados, são significativamente maiores que JPG ou PNG.' },
      { question: 'Qual profundidade de cor é suportada?', answer: 'A ferramenta suporta bitmaps padrão de 24 bits e 32 bits.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF para TIFF',
    metaDescription: 'Converta PDF em imagens TIFF. Qualidade profissional com suporte a arquivos TIFF de múltiplas páginas.',
    keywords: ['pdf para tiff', 'impressão profissional tiff', 'tiff multipágina', 'arquivamento'],
    description: `
      <p>Converta PDFs para o formato de alta qualidade TIFF. O TIFF é o padrão na impressão profissional e no arquivamento de longo prazo, pois suporta profundidade de cor extrema e compressão sem perdas (LZW/ZIP).</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue o documento.' },
      { step: 2, title: 'Escolher Formato', description: 'Escolha entre TIFFs individuais por página ou um único arquivo TIFF de múltiplas páginas.' },
      { step: 3, title: 'Baixar', description: 'Baixe os arquivos de imagem profissionais.' },
    ],
    useCases: [
      { title: 'Impressão Profissional', description: 'Crie arquivos TIFF prontos para gráficas e editoras.', icon: 'printer' },
      { title: 'Arquivamento Digital', description: 'Segure documentos em um formato de arquivo estável e de alta qualidade.', icon: 'archive' },
      { title: 'Publicações', description: 'Converta PDFs para processamento em softwares de diagramação.', icon: 'book' },
    ],
    faq: [
      { question: 'Suporta TIFF de múltiplas páginas?', answer: 'Sim, você pode converter o PDF inteiro em um único arquivo TIFF multipágina.' },
      { question: 'Qual compressão é utilizada?', answer: 'Você pode escolher entre LZW, ZIP ou saída totalmente sem compressão.' },
      { question: 'Qual DPI é necessário para impressão?', answer: 'Para resultados profissionais, recomendamos pelo menos 300 DPI.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF para Tons de Cinza',
    metaDescription: 'Converta PDFs coloridos para preto e branco (escala de cinza). Reduza o tamanho do arquivo e economize na impressão.',
    keywords: ['pdf escala de cinza', 'pdf preto e branco', 'economizar tinta pdf', 'remover cor'],
    description: `
      <p>Transforme um PDF colorido em uma versão em escala de cinza (preto e branco). Isso é ideal para reduzir o tamanho do arquivo e preparar documentos para impressão econômica.</p>
      <p>Os textos permanecem nítidos e as imagens mantêm seus detalhes, enquanto todas as informações de cor são removidas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento colorido.' },
      { step: 2, title: 'Verificar Prévia', description: 'Veja como ficará a conversão para escala de cinza.' },
      { step: 3, title: 'Baixar', description: 'Baixe o PDF otimizado em preto e branco.' },
    ],
    useCases: [
      { title: 'Economia de Impressão', description: 'Evite gastos desnecessários com tinta colorida em rascunhos.', icon: 'printer' },
      { title: 'Redução de Tamanho', description: 'Diminua o peso do arquivo removendo os canais de cor.', icon: 'minimize-2' },
      { title: 'Estética Profissional', description: 'Dê aos documentos um visual clássico em preto e branco.', icon: 'file-text' },
    ],
    faq: [
      { question: 'O texto continuará legível?', answer: 'Sim. A ferramenta otimiza os contrastes para que os textos continuem perfeitamente legíveis.' },
      { question: 'Quanto espaço eu economizo?', answer: 'Em documentos com muitas imagens, o tamanho pode cair entre 20% e 50%.' },
      { question: 'Posso converter apenas algumas páginas?', answer: 'Sim, você pode selecionar especificamente quais páginas deseja converter.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF para JSON',
    metaDescription: 'Extraia o conteúdo do PDF para o formato JSON. Obtenha dados estruturados para suas aplicações.',
    keywords: ['pdf para json', 'extração de dados pdf', 'parser pdf', 'dados estruturados'],
    description: `
      <p>Extraia texto, metadados e a estrutura do seu documento PDF para o formato JSON, legível por máquinas. Esta é a ferramenta perfeita para desenvolvedores e analistas de dados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo PDF de origem.' },
      { step: 2, title: 'Escolher Dados', description: 'Determine quais informações (texto, layout, metadados) deseja extrair.' },
      { step: 3, title: 'Exportar JSON', description: 'Baixe o arquivo JSON pronto para sua programação.' },
    ],
    useCases: [
      { title: 'Análise de Dados', description: 'Analise conteúdos de texto de PDFs de forma automatizada.', icon: 'database' },
      { title: 'Integração de Sistemas', description: 'Importe conteúdos de PDF diretamente para seu banco de dados ou app.', icon: 'plug' },
      { title: 'Auditoria de Metadados', description: 'Analise os detalhes técnicos de um grande volume de PDFs.', icon: 'search' },
    ],
    faq: [
      { question: 'O que exatamente é salvo no JSON?', answer: 'Conteúdos de texto, dados de posição, fontes, dimensões das páginas e metadados.' },
      { question: 'Funciona com documentos escaneados?', answer: 'Apenas se eles tiverem passado anteriormente por nossa ferramenta de OCR.' },
      { question: 'O formato é padronizado?', answer: 'Sim, utilizamos um esquema padronizado para facilitar o processamento posterior.' },
    ],
  },// ==================== ORGANIZE & MANAGE ====================
  'alternate-merge': {
    title: 'Mesclagem Alternada',
    metaDescription: 'Combine PDFs alternando páginas. Perfeito para unir scans de frente e verso realizados separadamente.',
    keywords: ['mesclagem alternada pdf', 'combinar frente e verso', 'intercalar páginas pdf', 'unir scans'],
    description: `
      <p>Com a "Mesclagem Alternada", você combina dois arquivos PDF intercalando suas páginas (uma de cada arquivo). Esta é a solução ideal para quem digitalizou as frentes e os versos de um documento em arquivos separados.</p>
      <p>Basta carregar o arquivo das frentes e o das costas. A ferramenta os une automaticamente em um único documento lógico. Você também pode inverter a ordem de um dos arquivos, caso ele tenha sido digitalizado de trás para frente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de dois PDFs', description: 'Selecione o PDF com as páginas ímpares (frentes) e o com as páginas pares (versos).' },
      { step: 2, title: 'Configurar Ordem', description: 'Se necessário, selecione "Inverter ordem" para o segundo documento (comum em scans de baixo para cima).' },
      { step: 3, title: 'Mesclar', description: 'Clique em mesclar para intercalar as páginas e baixar o resultado.' },
    ],
    useCases: [
      { title: 'Digitalização Duplex', description: 'Combine scans de dispositivos que não possuem alimentador automático frente e verso.', icon: 'copy' },
      { title: 'Montagem de Documentos', description: 'Intercale páginas de dois relatórios complementares.', icon: 'layers' },
      { title: 'Scans de Livros', description: 'Una scans de páginas esquerdas e direitas de um livro em um fluxo contínuo.', icon: 'book' },
    ],
    faq: [
      { question: 'O que acontece se o número de páginas for diferente?', answer: 'As páginas excedentes do documento mais longo serão simplesmente anexadas ao final.' },
      { question: 'Posso inverter a ordem das páginas?', answer: 'Sim, a ferramenta oferece a opção de inverter um dos arquivos antes da intercalação.' },
      { question: 'É melhor que a mesclagem normal?', answer: 'Sim, a mesclagem normal apenas anexa um arquivo ao outro; esta ferramenta mistura as páginas como um baralho de cartas.' },
    ],
  },

  'add-attachments': {
    title: 'Adicionar Anexos',
    metaDescription: 'Incorpore arquivos em documentos PDF. Adicione qualquer tipo de arquivo como anexo ao seu PDF.',
    keywords: ['anexos pdf', 'embutir arquivo no pdf', 'portfólio pdf', 'anexar ao pdf'],
    description: `
      <p>Incorpore qualquer arquivo diretamente em seus documentos PDF. Seja uma planilha, imagem ou código-fonte – crie pacotes PDF completos contendo todos os dados relevantes.</p>
      <p>Os anexos tornam-se parte do arquivo PDF e podem ser extraídos pelo destinatário usando qualquer leitor de PDF comum.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento PDF principal.' },
      { step: 2, title: 'Adicionar Arquivos', description: 'Escolha os arquivos que deseja embutir dentro do PDF.' },
      { step: 3, title: 'Salvar', description: 'Baixe o PDF com os anexos integrados.' },
    ],
    useCases: [
      { title: 'Pacotes de Projeto', description: 'Agrupe arquivos de design ou cálculos diretamente na documentação.', icon: 'package' },
      { title: 'Distribuição de Relatórios', description: 'Anexe dados brutos em Excel a um relatório analítico em PDF.', icon: 'paperclip' },
      { title: 'Documentação Contratual', description: 'Anexe documentos de apoio diretamente ao contrato principal.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Quais tipos de arquivo são suportados?', answer: 'Você pode embutir qualquer tipo de arquivo dentro de um PDF.' },
      { question: 'Existe limite de tamanho?', answer: 'O tamanho total do PDF com anexos não deve exceder 500 MB para garantir o desempenho.' },
      { question: 'Os destinatários conseguirão ver os arquivos?', answer: 'Sim, leitores de PDF modernos mostram os anexos em uma barra lateral específica.' },
    ],
  },

  'extract-attachments': {
    title: 'Extrair Anexos',
    metaDescription: 'Extraia arquivos embutidos de PDFs. Baixe todos os anexos de um documento PDF.',
    keywords: ['extrair anexos pdf', 'baixar arquivos do pdf', 'extrair arquivos embutidos'],
    description: `
      <p>Recupere todos os arquivos incorporados em um documento PDF. Você pode baixar os anexos individualmente ou todos juntos em um arquivo ZIP prático.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o PDF que contém os anexos.' },
      { step: 2, title: 'Visualizar Anexos', description: 'Veja a lista de todos os arquivos ocultos dentro do PDF.' },
      { step: 3, title: 'Baixar', description: 'Salve os arquivos individualmente ou o pacote completo.' },
    ],
    useCases: [
      { title: 'Recuperar Dados', description: 'Extraia dados originais de relatórios científicos em PDF.', icon: 'download' },
      { title: 'Descompactar Portfólios', description: 'Acesse documentos que lhe foram enviados como um portfólio PDF.', icon: 'folder-open' },
      { title: 'Extração em Lote', description: 'Recupere anexos de vários PDFs simultaneamente.', icon: 'layers' },
    ],
    faq: [
      { question: 'E se não houver anexos?', answer: 'A ferramenta informará imediatamente se o documento contém ou não arquivos embutidos.' },
      { question: 'O PDF original é danificado?', answer: 'Não, os anexos são copiados; o PDF original permanece inalterado.' },
      { question: 'Todos os formatos são suportados?', answer: 'Sim, a ferramenta extrai qualquer tipo de arquivo que tenha sido armazenado no PDF.' },
    ],
  },

  'divide-pages': {
    title: 'Dividir Páginas',
    metaDescription: 'Divida páginas de PDF em várias seções. Corte páginas horizontalmente ou verticalmente.',
    keywords: ['cortar página pdf', 'dividir seção pdf', 'cortar scan', 'divisão em grade'],
    description: `
      <p>Esta ferramenta corta páginas individuais de um PDF em várias partes. Você pode dividir páginas horizontalmente, verticalmente ou em grade para transformar uma única página em várias novas páginas.</p>
      <p>Especialmente útil para scans onde vários documentos (ex: recibos) estão na mesma página, ou para tornar plantas de grande formato mais manejáveis.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue o documento PDF.' },
      { step: 2, title: 'Definir Divisão', description: 'Escolha entre divisão horizontal/vertical ou uma grade (ex: 2x2).' },
      { step: 3, title: 'Cortar', description: 'Baixe o PDF com as páginas individuais agora subdivididas.' },
    ],
    useCases: [
      { title: 'Separar Scans', description: 'Divida uma página com vários recibos digitalizados em imagens individuais.', icon: 'scissors' },
      { title: 'Ajustar Grandes Formatos', description: 'Corte um documento A3 em duas páginas A4.', icon: 'maximize-2' },
      { title: 'Criar Cartões', description: 'Subdivida páginas em seções do tamanho de cartões de visita.', icon: 'grid' },
    ],
    faq: [
      { question: 'Os cortes são precisos?', answer: 'Sim, a ferramenta divide a página exatamente conforme as suas especificações.' },
      { question: 'O que acontece com o texto na linha de corte?', answer: 'Conteúdos sobre a linha serão separados; certifique-se de deixar margens adequadas.' },
      { question: 'Posso dividir apenas algumas páginas?', answer: 'Sim, você pode aplicar a divisão a todo o documento ou a seleções específicas.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up (Múltiplas páginas por folha)',
    metaDescription: 'Imprima várias páginas de PDF em uma única folha. Crie layouts 2-Up, 4-Up ou personalizados.',
    keywords: ['n-up pdf', 'várias páginas por folha', 'imposição pdf', 'criar apostilas'],
    description: `
      <p>O N-Up PDF organiza várias páginas do seu documento em uma única folha (ex: 2, 4, 6 ou 9 páginas por folha). Isso economiza papel na impressão e é ideal para criar apostilas e resumos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento que deseja imprimir.' },
      { step: 2, title: 'Escolher Layout', description: 'Decida por uma grade (ex: 2x2 para 4 páginas por folha).' },
      { step: 3, title: 'Gerar', description: 'Baixe o layout otimizado.' },
    ],
    useCases: [
      { title: 'Economizar Papel', description: 'Reduza o consumo de papel ao fazer revisões ou rascunhos.', icon: 'leaf' },
      { title: 'Apostilas de Apresentação', description: 'Crie visões gerais compactas dos seus slides.', icon: 'file-text' },
      { title: 'Preparação de Brochuras', description: 'Organize páginas para formatos de impressão específicos.', icon: 'eye' },
    ],
    faq: [
      { question: 'A ordem é mantida?', answer: 'Sim, as páginas são organizadas por padrão da esquerda para a direita e de cima para baixo.' },
      { question: 'Posso adicionar margens?', answer: 'Sim, você pode definir o espaçamento entre cada miniatura de página.' },
      { question: 'A qualidade diminui?', answer: 'Não, as páginas são apenas reduzidas; os detalhes permanecem nítidos.' },
    ],
  },

  'grid-combine': {
    title: 'Combinar em Grade',
    metaDescription: 'Combine vários arquivos PDF em um único layout de grade. Crie planilhas de contatos, galerias de fotos e muito mais.',
    keywords: ['combinar em grade', 'mosaico pdf', 'galeria pdf', 'unir pdfs em grade'],
    description: `
      <p>"Combinar em Grade" permite mesclar vários arquivos PDF (ou imagens convertidas em PDF) em um layout de grade estruturado. Ideal para criar galerias de fotos, portfólios visuais ou planilhas de contatos a partir de várias fontes.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Arquivos', description: 'Selecione ou arraste seus arquivos PDF.' },
      { step: 2, title: 'Configurar Grade', description: 'Escolha a estrutura da grade (ex: 2x2, 3x3), tamanho da página e opções de margem.' },
      { step: 3, title: 'Mesclar', description: 'Combine os arquivos em um único PDF formatado.' },
    ],
    useCases: [
      { title: 'Criar Portfólios', description: 'Exiba vários designs ou exemplos em uma única página.', icon: 'grid' },
      { title: 'Planilhas de Contatos', description: 'Crie visões gerais rápidas de grandes coleções de documentos.', icon: 'users' },
      { title: 'Impressão Econômica', description: 'Combine vários recibos ou pequenos documentos em uma folha para imprimir.', icon: 'printer' },
    ],
    faq: [
      { question: 'Posso misturar tamanhos de arquivo?', answer: 'Sim, a ferramenta redimensiona automaticamente cada página para caber na célula da grade.' },
      { question: 'Quantos arquivos posso combinar?', answer: 'Você pode combinar dezenas de arquivos, limitado apenas pela memória do seu navegador.' },
    ],
  },

  'reverse-pages': {
    title: 'Inverter Ordem das Páginas',
    metaDescription: 'Inverta a ordem das páginas do PDF. Espelhe o documento do fim para o começo.',
    keywords: ['inverter pdf', 'espelhar páginas', 'ordem reversa', 'corrigir scan'],
    description: `
      <p>Esta ferramenta inverte toda a ordem das páginas do seu PDF. A última página torna-se a primeira, a penúltima a segunda, e assim por diante. Ideal para documentos que foram digitalizados na ordem errada.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo.' },
      { step: 2, title: 'Escolher Intervalo', description: 'Selecione o documento inteiro ou apenas uma parte para inverter.' },
      { step: 3, title: 'Inverter', description: 'Salve o PDF com a nova ordenação.' },
    ],
    useCases: [
      { title: 'Corrigir Erros de Scan', description: 'Conserte digitalizações em lote que foram lidas na ordem inversa.', icon: 'refresh-cw' },
      { title: 'Preparação de Impressão', description: 'Prepare documentos para impressoras que ejetam páginas em ordem inversa.', icon: 'printer' },
      { title: 'Processos de Revisão', description: 'Visualize documentos rapidamente a partir de uma perspectiva diferente.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Os marcadores são ajustados?', answer: 'Sim, os links internos e marcadores são atualizados automaticamente para as novas posições das páginas.' },
      { question: 'É o mesmo que girar?', answer: 'Não, girar altera a orientação da página; inverter altera sua posição no documento.' },
      { question: 'Posso inverter apenas o final?', answer: 'Sim, você pode definir um intervalo específico (ex: páginas 10-20).' },
    ],
  },

  'compare-pdfs': {
    title: 'Comparar PDFs',
    metaDescription: 'Compare dois documentos PDF. Destaque as diferenças entre as versões com cores.',
    keywords: ['comparar pdf', 'diff de documentos', 'controle de versão pdf', 'encontrar alterações'],
    description: `
      <p>Analise duas versões de um documento rapidamente. A ferramenta marca alterações de texto, adições e exclusões com cores, permitindo que você revise revisões instantaneamente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload de dois PDFs', description: 'Carregue o original e a versão editada.' },
      { step: 2, title: 'Iniciar Comparação', description: 'A ferramenta analisa ambos os arquivos em busca de diferenças de texto e layout.' },
      { step: 3, title: 'Revisar Resultados', description: 'Visualize os destaques diretamente no navegador ou baixe um relatório.' },
    ],
    useCases: [
      { title: 'Revisão de Contratos', description: 'Encontre alterações ocultas em novas minutas de contrato.', icon: 'file-text' },
      { title: 'Edição de Textos', description: 'Controle se todos os pedidos de correção foram implementados corretamente.', icon: 'git-compare' },
      { title: 'Garantia de Qualidade', description: 'Certifique-se de que nenhum conteúdo foi perdido durante a conversão.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'O que é detectado?', answer: 'Alterações de texto, seções deletadas e, frequentemente, imagens movidas.' },
      { question: 'Funciona com scans?', answer: 'Para isso, os scans devem ser primeiro tornados legíveis via OCR.' },
      { question: 'Como as diferenças são mostradas?', answer: 'Geralmente através de realces coloridos (Vermelho para deletado, Verde para novo).' },
    ],
  },// ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Padronizar Tamanho das Páginas',
    metaDescription: 'Padronize as dimensões das páginas do seu PDF. Converta todas as páginas para um formato uniforme.',
    keywords: ['ajustar tamanho pdf', 'padronizar pdf', 'corrigir formato página', 'pdf para a4'],
    description: `
      <p>Traga consistência ao seu PDF padronizando todas as páginas para uma dimensão única. Esta ferramenta converte documentos com tamanhos de página mistos em um formato uniforme para uma apresentação profissional ou impressão sem erros.</p>
      <p>Escolha entre tamanhos padrão como A4 e Carta (US-Letter) ou defina dimensões personalizadas. O conteúdo é redimensionado ou centralizado de forma inteligente para caber no novo formato.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o PDF que possui formatos de página variados.' },
      { step: 2, title: 'Escolher Formato', description: 'Selecione A4, Carta ou insira dimensões personalizadas em mm ou polegadas.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Baixe o PDF com todas as páginas no tamanho padronizado.' },
    ],
    useCases: [
      { title: 'Preparação para Impressão', description: 'Garanta que todas as páginas sejam impressas corretamente sem erros de escala.', icon: 'printer' },
      { title: 'Limpeza de Documentos', description: 'Corrija layouts irregulares após mesclar arquivos de diferentes fontes.', icon: 'file-check' },
      { title: 'Dossiês Profissionais', description: 'Crie documentos uniformes para clientes ou órgãos governamentais.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'O conteúdo será distorcido?', answer: 'Não, você pode optar por redimensionar o conteúdo proporcionalmente ou apenas centralizá-lo.' },
      { question: 'Posso manter a proporção?', answer: 'Sim, a ferramenta oferece opções para ajuste inteligente sem deformar imagens ou textos.' },
      { question: 'Quais tamanhos estão disponíveis?', answer: 'Todos os formatos ISO (A0-A5), formatos americanos e medidas customizadas.' },
    ],
  },

  'linearize-pdf': {
    title: 'Otimizar PDF para Web',
    metaDescription: 'Otimize seu PDF para visualização rápida na internet. Ative o carregamento progressivo (Fast Web View).',
    keywords: ['linearizar pdf', 'fast web view', 'otimizar pdf web', 'carregamento rápido pdf'],
    description: `
      <p>Linearize seus documentos para uma exibição instantânea na web. PDFs linearizados (também conhecidos como "Fast Web View") permitem que o navegador comece a exibir o conteúdo antes mesmo de terminar o download do arquivo completo.</p>
      <p>Isso melhora drasticamente a experiência do usuário em documentos grandes, pois a primeira página aparece imediatamente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Carregue o documento que você deseja publicar online.' },
      { step: 2, title: 'Otimizar', description: 'Clique em "Linearizar" para reorganizar a estrutura interna do arquivo.' },
      { step: 3, title: 'Salvar', description: 'Baixe o PDF otimizado para a internet.' },
    ],
    useCases: [
      { title: 'Publicações Online', description: 'Otimize e-books ou catálogos para o seu site.', icon: 'globe' },
      { title: 'Anexos de E-mail', description: 'Permita que os destinatários abram documentos sem atrasos de carregamento.', icon: 'mail' },
      { title: 'Documentos em Nuvem', description: 'Melhor performance para arquivos lidos diretamente de serviços de armazenamento.', icon: 'cloud' },
    ],
    faq: [
      { question: 'O que é linearização?', answer: 'É uma forma especial de estruturar os dados do PDF para permitir o "streaming" do conteúdo.' },
      { question: 'O arquivo fica menor?', answer: 'Não necessariamente; às vezes ele aumenta um pouco, mas a percepção de velocidade de abertura é muito maior.' },
      { question: 'É compatível com todos os leitores?', answer: 'Sim, PDFs linearizados funcionam em qualquer leitor padrão.' },
    ],
  },

  'repair-pdf': {
    title: 'Reparar PDF',
    metaDescription: 'Recupere arquivos PDF corrompidos ou danificados. Tente restaurar conteúdos de documentos com erro.',
    keywords: ['reparar pdf', 'consertar pdf corrompido', 'recuperar pdf', 'fix pdf error'],
    description: `
      <p>Tente recuperar arquivos PDF que apresentam erros ou estão corrompidos. Esta ferramenta analisa a estrutura do documento e tenta reconstruí-la para salvar o máximo de conteúdo possível.</p>
      <p>Muito útil para arquivos que não abrem, mostram mensagens de erro ou foram danificados durante um download incompleto.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF Danificado', description: 'Selecione o arquivo que está apresentando problemas.' },
      { step: 2, title: 'Iniciar Reparo', description: 'A ferramenta tentará corrigir a tabela de referência cruzada e a estrutura de objetos.' },
      { step: 3, title: 'Verificar Resultado', description: 'Baixe a versão recuperada e verifique a integridade do conteúdo.' },
    ],
    useCases: [
      { title: 'Resgate de Arquivos', description: 'Recupere dados importantes de PDFs que não abrem mais.', icon: 'refresh-cw' },
      { title: 'Correção de Erros', description: 'Conserte arquivos que aparecem distorcidos em alguns visualizadores.', icon: 'wrench' },
      { title: 'Recuperação de Dados', description: 'Tente restaurar conteúdos de downloads incompletos ou falhas de transferência.', icon: 'file-check' },
    ],
    faq: [
      { question: 'O reparo funciona sempre?', answer: 'O sucesso depende do nível de corrupção. Em casos de perda severa de dados binários, a recuperação total pode não ser possível.' },
      { question: 'As imagens são mantidas?', answer: 'A ferramenta tenta salvar tudo; se um objeto estiver muito danificado, ele pode ser perdido no processo.' },
      { question: 'Meu arquivo original está seguro?', answer: 'Sim, processamos uma cópia; seu arquivo original em seu computador permanece intocado.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'Criptografar PDF',
    metaDescription: 'Proteja seu PDF com senha. Adicione criptografia e defina permissões de uso.',
    keywords: ['proteger pdf com senha', 'criptografar pdf', 'segurança pdf', 'bloquear pdf'],
    description: `
      <p>Proteja seus documentos confidenciais com criptografia forte. Defina uma senha de usuário para abertura e uma senha de proprietário para controlar permissões como impressão e cópia de texto.</p>
      <p>Escolha entre criptografia AES de 128 ou 256 bits para garantir os mais altos padrões de segurança.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o arquivo que deseja proteger.' },
      { step: 2, title: 'Definir Senhas', description: 'Insira uma senha forte e escolha as permissões (ex: permitir ou não impressão).' },
      { step: 3, title: 'Sinalizar e Baixar', description: 'Baixe o PDF criptografado e seguro.' },
    ],
    useCases: [
      { title: 'Dados Confidenciais', description: 'Proteja relatórios financeiros ou documentos pessoais.', icon: 'lock' },
      { title: 'Envio Seguro', description: 'Envie contratos protegidos por e-mail para evitar acessos indevidos.', icon: 'shield' },
      { title: 'Controle de Uso', description: 'Impeça que terceiros copiem seu conteúdo ou imprimam o arquivo.', icon: 'key' },
    ],
    faq: [
      { question: 'Qual a diferença entre as senhas?', answer: 'A senha de usuário é para abrir o arquivo; a de proprietário é para alterar as restrições e direitos.' },
      { question: 'Quão segura é a criptografia?', answer: 'Utilizamos o padrão AES, reconhecido mundialmente como extremamente seguro e difícil de quebrar.' },
      { question: 'Posso mudar a senha depois?', answer: 'Sim, usando a senha de proprietário, você pode alterar ou remover a proteção quando quiser.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Descriptografar PDF',
    metaDescription: 'Remova senhas de arquivos PDF. Desbloqueie documentos protegidos permanentemente.',
    keywords: ['remover senha pdf', 'desbloquear pdf', 'tirar proteção pdf', 'pdf decrypt'],
    description: `
      <p>Remova a proteção por senha de seus PDFs permanentemente. Ao inserir a senha correta uma vez, a ferramenta gera uma cópia desbloqueada para acesso livre.</p>
      <p>Nota: Você deve conhecer a senha atual. Esta ferramenta não foi feita para quebrar senhas de terceiros sem autorização.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF Protegido', description: 'Selecione o arquivo que possui senha.' },
      { step: 2, title: 'Inserir Senha', description: 'Digite a senha válida para autorizar a remoção da proteção.' },
      { step: 3, title: 'Desbloquear', description: 'Baixe a versão do PDF totalmente livre de senhas.' },
    ],
    useCases: [
      { title: 'Remover Proteção', description: 'Facilite o acesso a documentos de uso frequente.', icon: 'unlock' },
      { title: 'Arquivamento', description: 'Remova senhas antes de arquivar para evitar a perda de acesso no futuro.', icon: 'archive' },
      { title: 'Simplificar Workflow', description: 'Crie cópias abertas para compartilhamento com sua equipe.', icon: 'share-2' },
    ],
    faq: [
      { question: 'A ferramenta descobre senhas desconhecidas?', answer: 'Não, por segurança, você precisa fornecer a senha para poder removê-la.' },
      { question: 'O original é alterado?', answer: 'Não, uma nova versão desbloqueada é gerada para download.' },
      { question: 'Os dados são mantidos?', answer: 'Sim, o conteúdo permanece exatamente igual, apenas a barreira de segurança é removida.' },
    ],
  },

  'edit-metadata': {
    title: 'Editar Metadados',
    metaDescription: 'Altere as propriedades do documento PDF. Edite título, autor, assunto e palavras-chave.',
    keywords: ['editar metadados pdf', 'mudar autor pdf', 'alterar título pdf', 'info documento'],
    description: `
      <p>Personalize as informações ocultas do seu PDF. Edite ou remova título, autor, assunto e palavras-chave para apresentar seus documentos de forma profissional ou proteger sua privacidade.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione seu documento.' },
      { step: 2, title: 'Preencher Campos', description: 'Insira as novas informações desejadas para cada metadado.' },
      { step: 3, title: 'Salvar', description: 'Baixe o PDF com os metadados atualizados.' },
    ],
    useCases: [
      { title: 'Otimização SEO', description: 'Insira palavras-chave e descrições para que seu PDF seja melhor indexado pelo Google.', icon: 'search' },
      { title: 'Identificação Profissional', description: 'Defina o nome correto da empresa ou autor do documento.', icon: 'user' },
      { title: 'Privacidade de Arquivo', description: 'Limpe propriedades do documento antes de publicá-lo na internet.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Quais campos posso editar?', answer: 'Título, autor, assunto, palavras-chave, criador e produtor.' },
      { question: 'Posso limpar todos os dados?', answer: 'Sim, basta deixar os campos em branco para remover essas informações.' },
      { question: 'Altera dados XMP?', answer: 'Sim, a ferramenta atualiza tanto os metadados padrão quanto os dados XMP modernos.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF para Word',
    metaDescription: 'Converta PDF para documentos Word (DOCX) editáveis. Mantenha a formatação e o layout original.',
    keywords: ['pdf para word', 'converter pdf em docx', 'pdf editável', 'pdf word converter'],
    description: `
      <p>Transforme seus documentos PDF em arquivos Microsoft Word (DOCX) totalmente editáveis. Graças a algoritmos avançados, layouts, fontes e tabelas são mantidos com a maior precisão possível.</p>
      <p>Edite seus textos diretamente no Word sem precisar digitar tudo do zero. Ideal para contratos, currículos e relatórios acadêmicos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload do PDF', description: 'Selecione o documento que deseja converter.' },
      { step: 2, title: 'Processamento', description: 'Aguarde enquanto a estrutura do documento é analisada e convertida.' },
      { step: 3, title: 'Baixar', description: 'Baixe o arquivo Word pronto para edição.' },
    ],
    useCases: [
      { title: 'Edição de Contratos', description: 'Converta minutas em PDF para Word para realizar revisões e negociações.', icon: 'file-text' },
      { title: 'Atualização de Currículo', description: 'Atualize currículos antigos em PDF sem perder a formatação original.', icon: 'user' },
      { title: 'Reuso de Conteúdo', description: 'Extraia parágrafos de relatórios para utilizá-los em novos documentos.', icon: 'copy' },
    ],
    faq: [
      { question: 'O layout será idêntico?', answer: 'Buscamos a máxima precisão. Em designs extremamente complexos, pequenos ajustes manuais podem ser necessários.' },
      { question: 'Funciona com PDFs escaneados?', answer: 'Para melhores resultados em scans, recomendamos usar nossa ferramenta de OCR antes da conversão.' },
      { question: 'É compatível com Google Docs?', answer: 'Sim, o arquivo DOCX gerado funciona perfeitamente no Microsoft Word, Google Docs e LibreOffice.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email para PDF',
    metaDescription: 'Converta arquivos de email (.eml, .msg) em documentos PDF. Preserva formatação, imagens inline, links clicáveis e anexos.',
    keywords: ['email para pdf', 'eml para pdf', 'msg para pdf', 'converter email', 'outlook para pdf'],
    description: `
      <p>Email para PDF converte seus arquivos de email (formatos .eml e .msg) em documentos PDF bem formatados. A ferramenta preserva as informações do cabeçalho do email, conteúdo do corpo, imagens inline com substituição CID, links clicáveis e incorpora anexos diretamente no PDF.</p>
      <p>Personalize as opções de saída incluindo tamanho de página (A4, Letter, Legal), formato de data com suporte a fuso horário, e se deseja incluir campos CC/BCC e informações de anexos.</p>
      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus emails permaneçam privados e seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Enviar Arquivo de Email', description: 'Envie seu arquivo de email .eml ou .msg.' },
      { step: 2, title: 'Configurar Opções', description: 'Defina o tamanho da página, formato de data, fuso horário e escolha quais campos incluir.' },
      { step: 3, title: 'Converter e Baixar', description: 'Converta para PDF com anexos incorporados e baixe o resultado.' },
    ],
    useCases: [
      { title: 'Registros Legais', description: 'Arquive emails importantes como PDF com anexos incorporados para documentação legal.', icon: 'scale' },
      { title: 'Arquivos Empresariais', description: 'Converta correspondência empresarial para PDF para conservação a longo prazo.', icon: 'briefcase' },
      { title: 'Preservação de Evidências', description: 'Salve evidências de email com imagens inline e anexos em formato PDF não editável.', icon: 'shield' },
    ],
    faq: [
      { question: 'Quais formatos de email são suportados?', answer: 'Tanto arquivos .eml (RFC 822) quanto .msg (Microsoft Outlook) são totalmente suportados.' },
      { question: 'Os anexos são incluídos?', answer: 'Sim! Os anexos são incorporados diretamente no arquivo PDF. Você pode extraí-los do PDF usando um leitor PDF compatível.' },
      { question: 'As imagens inline são exibidas?', answer: 'Sim, imagens inline referenciadas via CID (Content-ID) são automaticamente convertidas para URIs de dados base64 e exibidas no PDF.' },
      { question: 'Os links são clicáveis?', answer: 'Sim, todos os links HTML (tags <a>) e URLs em emails de texto simples são convertidos em links clicáveis no PDF.' },
      { question: 'A formatação do email é preservada?', answer: 'Sim, emails HTML mantêm sua formatação o máximo possível, incluindo estilos, imagens e links.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU para PDF',
    metaDescription: 'Converta arquivos de documentos DJVU para PDF. Renderização de alta qualidade para documentos e livros digitalizados.',
    keywords: ['djvu para pdf', 'converter djvu', 'conversor djvu', 'djvu pdf', 'djv para pdf'],
    description: `
      <p>DJVU para PDF converte arquivos de documentos DjVu em documentos PDF de alta qualidade. DjVu é um formato de arquivo de computador projetado principalmente para armazenar documentos digitalizados, especialmente aqueles que contêm uma combinação de texto, desenhos em linha e fotografias.</p>
      <p>Esta ferramenta renderiza cada página do seu arquivo DJVU no DPI escolhido (pontos por polegada) e os combina em um documento PDF pesquisável. Perfeito para converter livros digitalizados, manuais técnicos e documentos de arquivo.</p>
      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Enviar Arquivo DJVU', description: 'Arraste e solte seu arquivo .djvu ou .djv, ou clique para selecionar do seu dispositivo.' },
      { step: 2, title: 'Configurar Opções', description: 'Escolha o DPI de saída (72, 150 ou 300) e a qualidade da imagem para o PDF.' },
      { step: 3, title: 'Converter e Baixar', description: 'Clique em Converter para PDF e baixe seu documento convertido.' },
    ],
    useCases: [
      { title: 'Documentos de Arquivo', description: 'Converta arquivos DJVU para formato PDF universal.', icon: 'archive' },
      { title: 'Compartilhar Livros Digitalizados', description: 'Compartilhe livros digitalizados em formato PDF para maior compatibilidade.', icon: 'share-2' },
      { title: 'Imprimir Documentos', description: 'Converta DJVU para PDF de alta qualidade para impressão.', icon: 'printer' },
    ],
    faq: [
      { question: 'O que é o formato DJVU?', answer: 'DjVu é um formato de arquivo projetado para armazenar documentos digitalizados, especialmente aqueles com texto, desenhos e imagens. Oferece melhor compressão que PDF para conteúdo digitalizado.' },
      { question: 'Qual DPI devo escolher?', answer: '72 DPI é adequado para visualização na web, 150 DPI para documentos padrão e 300 DPI para impressão de alta qualidade.' },
      { question: 'O texto será pesquisável?', answer: 'O texto será renderizado como imagens. Se você precisar de texto pesquisável, considere usar nossa ferramenta OCR PDF após a conversão.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 para PDF',
    metaDescription: 'Converta livros eletrônicos FictionBook (FB2) para PDF. Suporta vários arquivos com renderização de alta qualidade.',
    keywords: ['fb2 para pdf', 'converter fb2', 'fictionbook para pdf', 'conversor fb2', 'fb2.zip para pdf'],
    description: `
      <p>FB2 para PDF converte arquivos de livros eletrônicos FictionBook (FB2) em documentos PDF de alta qualidade. FB2 é um formato popular de livro eletrônico baseado em XML amplamente usado na Rússia e no Leste Europeu.</p>
      <p>Esta ferramenta suporta tanto arquivos .fb2 quanto .fb2.zip, e pode processar vários arquivos de uma vez. Preserva a formatação de texto, imagens e a estrutura de capítulos dos seus livros eletrônicos.</p>
      <p>Toda a conversão acontece localmente no seu navegador usando tecnologia de renderização avançada, garantindo que seus livros permaneçam privados e a conversão seja rápida.</p>
    `,
    howToUse: [
      { step: 1, title: 'Enviar Arquivos FB2', description: 'Arraste e solte um ou mais arquivos .fb2 ou .fb2.zip, ou clique para selecionar do seu dispositivo.' },
      { step: 2, title: 'Selecionar Qualidade', description: 'Escolha a qualidade de saída: Baixa (72 DPI), Média (150 DPI) ou Alta (300 DPI).' },
      { step: 3, title: 'Converter e Baixar', description: 'Clique em Converter para PDF e baixe seu(s) documento(s) convertido(s).' },
    ],
    useCases: [
      { title: 'Imprimir Livros Eletrônicos', description: 'Converta livros eletrônicos FB2 para PDF para impressão física.', icon: 'printer' },
      { title: 'Conversão em Lote', description: 'Converta vários arquivos FB2 para PDF de uma vez.', icon: 'layers' },
      { title: 'Formato Universal', description: 'Compartilhe livros eletrônicos em formato PDF que funciona em qualquer dispositivo.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Posso converter vários arquivos FB2 de uma vez?', answer: 'Sim! Esta ferramenta suporta conversão em lote de até 20 arquivos FB2 simultaneamente.' },
      { question: 'Arquivos .fb2.zip são suportados?', answer: 'Sim, a ferramenta extrai e converte automaticamente arquivos FB2 de arquivos .fb2.zip.' },
      { question: 'A formatação é preservada?', answer: 'Sim! A ferramenta usa renderização nativa FB2, preservando formatação de texto, imagens e estrutura de capítulos com alta fidelidade.' },
    ],
  },

  'deskew-pdf': {
    title: 'Endireitar PDF',
    metaDescription: 'Endireite automaticamente páginas PDF digitalizadas ou inclinadas. Corrija documentos distorcidos com detecção precisa de ângulo.',
    keywords: ['endireitar pdf', 'corrigir pdf inclinado', 'corrigir digitalização inclinada', 'rotacionar pdf automático', 'corrigir ângulo pdf'],
    description: `
      <p>Endireitar PDF detecta e corrige automaticamente páginas inclinadas ou distorcidas nos seus documentos PDF usando análise avançada de variância de perfil de projeção. Isso é essencial para documentos digitalizados que foram inseridos no scanner em um ângulo.</p>
      <p>A ferramenta analisa o alinhamento de texto e conteúdo em diferentes ângulos para encontrar a rotação ótima, depois aplica a correção. Você pode ajustar o limite de sensibilidade (1-30) e as configurações DPI (72-300) para resultados ótimos.</p>
      <p>Todo o processamento acontece localmente no seu navegador usando tecnologia WebAssembly, garantindo que seus documentos permaneçam privados e seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Enviar seu PDF', description: 'Arraste e solte seu arquivo PDF digitalizado ou clique para selecionar.' },
      { step: 2, title: 'Configurar Ajustes', description: 'Ajuste a sensibilidade do limite e DPI se necessário para melhor detecção.' },
      { step: 3, title: 'Processar e Baixar', description: 'Clique em Endireitar para endireitar as páginas e baixar o PDF corrigido.' },
    ],
    useCases: [
      { title: 'Documentos Digitalizados', description: 'Corrija páginas que foram digitalizadas em um ângulo de alimentadores de documentos.', icon: 'scan' },
      { title: 'Digitalizações Móveis', description: 'Corrija fotos inclinadas de documentos tiradas com smartphones.', icon: 'smartphone' },
      { title: 'Restauração de Arquivo', description: 'Endireite arquivos digitalizados antigos para melhor legibilidade.', icon: 'archive' },
    ],
    faq: [
      { question: 'Quão precisa é a detecção de ângulo?', answer: 'A ferramenta usa análise de variância de perfil de projeção para detectar ângulos de distorção de até ±10 graus com alta precisão. Ignora automaticamente páginas com ângulos menores que 0,3 graus.' },
      { question: 'A qualidade do texto será afetada?', answer: 'Para rotações em múltiplos de 90 graus, não ocorre perda de qualidade. Para outros ângulos, a ferramenta arredonda para o grau mais próximo e mantém boa qualidade.' },
      { question: 'Posso endireitar apenas páginas específicas?', answer: 'A ferramenta analisa todas as páginas, mas corrige apenas aquelas com distorção detectada acima do limite de sensibilidade. Páginas com distorção mínima são deixadas inalteradas.' },
      { question: 'O que é o limite de sensibilidade?', answer: 'Valores 1-10 corrigem apenas inclinações óbvias, 11-20 detectam distorção moderada e 21-30 capturam ângulos sutis. O padrão é 10 para detecção equilibrada.' },
      { question: 'Quanto tempo leva o processamento?', answer: 'O tempo de processamento depende do tamanho do arquivo e DPI. 150 DPI (padrão) fornece um bom equilíbrio entre velocidade e precisão. DPI mais alto é mais preciso, mas mais lento.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF para PDF/A',
    metaDescription: 'Converta PDF para formato de arquivo PDF/A. Garanta preservação de documentos de longo prazo com padrões ISO.',
    keywords: ['pdf para pdfa', 'conversor pdfa', 'arquivar pdf', 'arquivo pdf', 'preservação de longo prazo'],
    description: `
      <p>PDF para PDF/A converte seus documentos PDF para o formato PDF/A, o padrão ISO para arquivamento de documentos de longo prazo. PDF/A garante que os documentos serão visualizáveis e reproduzíveis por décadas.</p>
      <p>Escolha entre PDF/A-1b (conformidade básica), PDF/A-2b (recomendado, suporta transparência) ou PDF/A-3b (permite arquivos incorporados). A ferramenta incorpora fontes e achata transparência conforme necessário.</p>
      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Enviar seu PDF', description: 'Envie o PDF que deseja converter para PDF/A.' },
      { step: 2, title: 'Selecionar Nível PDF/A', description: 'Escolha o nível de conformidade PDF/A-1b, PDF/A-2b ou PDF/A-3b.' },
      { step: 3, title: 'Converter e Baixar', description: 'Converta para PDF/A e baixe o documento de arquivo.' },
    ],
    useCases: [
      { title: 'Arquivos Legais', description: 'Converta documentos legais para PDF/A para armazenamento de longo prazo admissível em tribunal.', icon: 'scale' },
      { title: 'Registros Governamentais', description: 'Cumpra requisitos de arquivo governamental usando PDF/A.', icon: 'building' },
      { title: 'Arquivos Empresariais', description: 'Preserve documentos empresariais importantes para acessibilidade futura.', icon: 'archive' },
    ],
    faq: [
      { question: 'Qual nível PDF/A devo usar?', answer: 'PDF/A-2b é recomendado para a maioria dos usos. Use 1b para máxima compatibilidade ou 3b se precisar de arquivos incorporados.' },
      { question: 'O que torna PDF/A diferente?', answer: 'PDF/A incorpora fontes, desabilita criptografia e garante que todos os elementos sejam autocontidos para visualização futura.' },
      { question: 'Posso converter de volta de PDF/A?', answer: 'Arquivos PDF/A são PDFs padrão e podem ser abertos normalmente. As características de arquivo adicionam restrições, não limitações.' },
    ],
  },

  'rotate-custom': {
    title: 'Girar PDF Personalizado',
    metaDescription: 'Gire as páginas do PDF em qualquer ângulo personalizado. Controle total sobre a orientação das páginas.',
    keywords: ['girar pdf personalizado', 'ângulo rotação pdf', 'girar páginas pdf', 'rotação manual pdf'],
    description: `
      <p>O Girar PDF Personalizado permite que você gire as páginas do seu documento em qualquer ângulo exato. Ao contrário da rotação padrão de 90 graus, esta ferramenta oferece controle total para corrigir inclinações ou criar efeitos visuais específicos.</p>
      <p>Basta carregar o PDF, selecionar as páginas e definir o ângulo de rotação desejado. A ferramenta processa tudo localmente em seu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDF', description: 'Selecione o arquivo PDF que deseja girar.' },
      { step: 2, title: 'Definir Ângulo', description: 'Escolha o ângulo exato de rotação para cada página ou para todo o documento.' },
      { step: 3, title: 'Girar e Baixar', description: 'Aplique a rotação e baixe o PDF atualizado.' },
    ],
    useCases: [
      { title: 'Corrigir Scans', description: 'Endireite documentos que foram digitalizados levemente inclinados.', icon: 'rotate-cw' },
      { title: 'Design Criativo', description: 'Crie layouts de página dinâmicos com orientações não convencionais.', icon: 'palette' },
      { title: 'Ajuste de Conteúdo', description: 'Alinhe perfeitamente o conteúdo da página com a visualização desejada.', icon: 'maximize' },
    ],
    faq: [
      { question: 'Posso girar em qualquer ângulo?', answer: 'Sim, você pode definir qualquer ângulo de 0 a 360 graus.' },
      { question: 'A qualidade da imagem é afetada?', answer: 'Não, a rotação é feita de forma vetorial sempre que possível, preservando a nitidez.' },
      { question: 'Posso girar apenas uma página?', answer: 'Sim, você tem controle total sobre quais páginas rotacionar individualmente.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG para PDF',
    metaDescription: 'Converta imagens JPG em PDF. Combine vários arquivos JPG em um único documento PDF.',
    keywords: ['jpg para pdf', 'jpeg para pdf', 'converter jpg', 'imagem para pdf', 'foto para pdf'],
    description: `
      <p>Converta suas imagens JPEG em documentos PDF de forma rápida e fácil. Se você tem uma única foto ou várias imagens, esta ferramenta cria arquivos PDF profissionais.</p>
      <p>Você pode combinar vários arquivos JPG em um único PDF, organizá-los em qualquer ordem e configurar o tamanho e orientação da página. A conversão preserva a qualidade da imagem enquanto cria arquivos PDF compactos e compartilháveis.</p>
      <p>Toda a conversão acontece no seu navegador, garantindo que suas fotos permaneçam privadas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Imagens JPG', description: 'Arraste e solte seus arquivos JPG ou clique para selecionar imagens do seu dispositivo.' },
      { step: 2, title: 'Organizar e Configurar', description: 'Reordene as imagens arrastando-as e selecione as opções de tamanho e orientação da página.' },
      { step: 3, title: 'Converter e Baixar', description: 'Clique em Converter para criar seu PDF e baixar o resultado.' },
    ],
    useCases: [
      { title: 'Álbuns de Fotos', description: 'Crie álbuns de fotos PDF de viagens ou eventos para facilitar o compartilhamento.', icon: 'image' },
      { title: 'Digitalização de Documentos', description: 'Converta fotos de documentos tiradas com a câmera do celular em arquivos PDF adequados.', icon: 'camera' },
      { title: 'Criação de Portfólio', description: 'Reúna trabalhos de fotografia ou amostras de design em um portfólio PDF profissional.', icon: 'folder' },
    ],
    faq: [
      { question: 'Quantas imagens posso converter?', answer: 'Você pode converter até 100 imagens JPG em um único documento PDF.' },
      { question: 'A qualidade da imagem será preservada?', answer: 'Sim, as imagens são incorporadas em sua qualidade original. Você pode opcionalmente comprimi-las para reduzir o tamanho do arquivo.' },
      { question: 'Posso definir tamanhos de página diferentes para imagens diferentes?', answer: 'A ferramenta aplica um tamanho de página uniforme a todas as páginas. Cada imagem é dimensionada para caber no tamanho de página selecionado, mantendo a proporção.' },
    ],
  },

  'sign-pdf': {
    title: 'Assinar PDF',
    metaDescription: 'Adicione assinaturas eletrônicas a documentos PDF. Desenhe, digite ou carregue sua assinatura.',
    keywords: ['assinar pdf', 'assinatura eletrônica', 'e-signature', 'assinatura digital pdf'],
    description: `
      <p>Assinar PDF permite que você adicione assinaturas eletrônicas aos seus documentos PDF de forma rápida e segura. Crie sua assinatura desenhando, digitando ou carregando uma imagem, e depois coloque-a em qualquer lugar do seu documento.</p>
      <p>Você pode adicionar várias assinaturas a um único documento, redimensioná-las e posicioná-las com precisão. A ferramenta é perfeita para contratos, acordos, formulários e qualquer documento que exija sua assinatura.</p>
      <p>Toda a assinatura acontece localmente no seu navegador, garantindo que seus documentos e assinatura permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar the documento que você precisa assinar.' },
      { step: 2, title: 'Criar sua Assinatura', description: 'Desenhe sua assinatura com o mouse ou toque, digite seu nome para gerar uma assinatura ou carregue uma imagem de assinatura.' },
      { step: 3, title: 'Posicionar e Ajustar', description: 'Clique no documento para colocar sua assinatura, depois arraste para posicionar e redimensione conforme necessário.' },
      { step: 4, title: 'Salvar e Baixar', description: 'Clique em Salvar para aplicar sua assinatura e baixar o PDF assinado.' },
    ],
    useCases: [
      { title: 'Assinatura de Contratos', description: 'Assine contratos e acordos eletronicamente sem imprimir e digitalizar.', icon: 'file-signature' },
      { title: 'Preenchimento de Formulários', description: 'Adicione sua assinatura a formulários de inscrição, termos de consentimento e documentos oficiais.', icon: 'clipboard' },
      { title: 'Fluxos de Aprovação', description: 'Assine documentos como parte dos processos de revisão e aprovação.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Uma assinatura eletrônica é legalmente vinculativa?', answer: 'As assinaturas eletrônicas são legalmente reconhecidas na maioria dos países. No entanto, alguns documentos podem exigir tipos específicos de assinaturas digitais. Verifique as regulamentações locais.' },
      { question: 'Posso salvar minha assinatura para uso futuro?', answer: 'Sim, você pode salvar sua assinatura no armazenamento local do seu navegador para acesso rápido ao assinar documentos futuros.' },
      { question: 'Posso adicionar várias assinaturas a um documento?', answer: 'Sim, você pode adicionar quantas assinaturas forem necessárias, posicionando cada uma independentemente em qualquer página.' },
    ],
  },

  'crop-pdf': {
    title: 'Cortar PDF',
    metaDescription: 'Corte as páginas do PDF para remover margens e áreas indesejadas. Ajuste documentos PDF com precisão.',
    keywords: ['cortar pdf', 'ajustar margens pdf', 'redimensionar páginas pdf', 'cortador de pdf'],
    description: `
      <p>Cortar PDF permite que você ajuste as margens e remova áreas indesejadas das páginas do seu PDF. Isso é útil para remover espaços em branco excessivos, focar em áreas específicas de conteúdo ou padronizar as dimensões das páginas.</p>
      <p>Você pode cortar todas as páginas uniformemente ou ajustar cada página individualmente. A interface visual mostra exatamente o que será mantido, facilitando resultados precisos.</p>
      <p>Todo o corte acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja cortar.' },
      { step: 2, title: 'Definir Área de Corte', description: 'Arraste as alças de corte para definir a área que deseja manter ou insira medidas precisas.' },
      { step: 3, title: 'Aplicar às Páginas', description: 'Escolha aplicar o corte a todas as páginas ou selecione páginas específicas para cortar.' },
      { step: 4, title: 'Cortar e Baixar', description: 'Clique em Cortar para aplicar as alterações e baixar seu PDF cortado.' },
    ],
    useCases: [
      { title: 'Remover Margens', description: 'Corte margens excessivas de documentos digitalizados ou PDFs com bordas grandes.', icon: 'maximize-2' },
      { title: 'Focar no Conteúdo', description: 'Corte para destacar áreas específicas de conteúdo, removendo cabeçalhos, rodapés ou barras laterais.', icon: 'target' },
      { title: 'Padronizar Páginas', description: 'Deixe todas as páginas do mesmo tamanho cortando para dimensões uniformes.', icon: 'square' },
    ],
    faq: [
      { question: 'O corte remove permanentemente o conteúdo?', answer: 'Sim, o corte remove o conteúdo fora da área selecionada. Certifique-se de manter um backup do seu arquivo original.' },
      { question: 'Posso cortar páginas diferentes de forma diferente?', answer: 'Sim, você pode aplicar diferentes configurações de corte a páginas individuais ou grupos de páginas.' },
      { question: 'O corte afetará a qualidade do texto?', answer: 'Não, o corte apenas remove áreas fora do limite definido. O conteúdo restante mantém sua qualidade original.' },
    ],
  },

  'extract-pages': {
    title: 'Extrair Páginas',
    metaDescription: 'Extraia páginas específicas de arquivos PDF. Selecione e salve páginas individuais como novos documentos.',
    keywords: ['extrair páginas pdf', 'salvar páginas pdf', 'copiar páginas pdf', 'extrator de páginas pdf'],
    description: `
      <p>Extrair Páginas permite que você selecione e salve páginas específicas de um documento PDF como novos arquivos. Isso é perfeito para retirar seções relevantes, criar trechos ou separar documentos combinados.</p>
      <p>Você pode extrair páginas individuais, intervalos de páginas ou várias páginas não consecutivas. A visualização prévia facilita a identificação et seleção exata das páginas que você precisa.</p>
      <p>Toda a extração acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento do qual deseja extrair as páginas.' },
      { step: 2, title: 'Selecionar Páginas', description: 'Clique nas miniaturas das páginas para selecioná-las ou insira os números e intervalos das páginas no campo de entrada.' },
      { step: 3, title: 'Extrair e Baixar', description: 'Clique em Extrair para criar um novo PDF com as páginas selecionadas et faça o download.' },
    ],
    useCases: [
      { title: 'Criar Trechos', description: 'Extraia páginas relevantes de relatórios ou livros para criar documentos de referência focados.', icon: 'file-minus' },
      { title: 'Compartilhar Conteúdo Específico', description: 'Retire páginas específicas para compartilhar sem enviar o documento inteiro.', icon: 'share-2' },
      { title: 'Arquivar Páginas Importantes', description: 'Extraia e salve páginas essenciais de documentos para arquivamento de longo prazo.', icon: 'archive' },
    ],
    faq: [
      { question: 'Posso extrair páginas não consecutivas?', answer: 'Sim, você pode selecionar qualquer combinação de páginas, sejam elas consecutivas ou espalhadas pelo documento.' },
      { question: 'Os marcadores serão preservados?', answer: 'Os marcadores que apontam para as páginas extraídas são preservados no novo documento.' },
      { question: 'Posso extrair páginas de vários PDFs?', answer: 'Esta ferramenta trabalha com um PDF por vez. Para combinar páginas de vários PDFs, use a ferramenta Juntar PDF.' },
    ],
  },

  'organize-pdf': {
    title: 'Organizar PDF',
    metaDescription: 'Reordene, duplique e exclua páginas de PDF. Arraste e solte para reorganizar seus documentos.',
    keywords: ['organizar pdf', 'reordenar páginas pdf', 'reorganizar pdf', 'organizador de páginas pdf'],
    description: `
      <p>Organizar PDF oferece uma interface intuitiva de arrastar e soltar para reorganizar as páginas em seus documentos PDF. Reordene páginas, duplique seções importantes ou remova páginas indesejadas com facilidade.</p>
      <p>As miniaturas visuais facilitam a identificação do conteúdo e a organização das páginas conforme necessário. Perfeito para reestruturar documentos ou limpar arquivos digitalizados.</p>
      <p>Toda a organização acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja organizar.' },
      { step: 2, title: 'Reorganizar Páginas', description: 'Arraste as miniaturas das páginas para reordená-las. Clique nos botões de duplicar ou excluir conforme necessário.' },
      { step: 3, title: 'Salvar e Baixar', description: 'Clique em Salvar para aplicar as alterações e baixar o PDF reorganizado.' },
    ],
    useCases: [
      { title: 'Corrigir Ordem das Páginas', description: 'Corrija a ordem das páginas que foram digitalizadas ou combinadas incorretamente.', icon: 'arrow-up-down' },
      { title: 'Criar Ordem Personalizada', description: 'Organize as páginas em uma sequência específica para apresentações ou relatórios.', icon: 'list' },
      { title: 'Remover Páginas Indesejadas', description: 'Exclua páginas em branco, duplicadas ou conteúdo irrelevante dos documentos.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Posso duplicar páginas?', answer: 'Sim, você pode duplicar qualquer página e colocar a cópia em qualquer lugar do documento.' },
      { question: 'Existe uma função de desfazer?', answer: 'Sim, você pode desfazer e refazer as alterações. Também pode resetar para a ordem original a qualquer momento.' },
      { question: 'Posso organizar vários PDFs juntos?', answer: 'Esta ferramenta trabalha com um PDF por vez. Para combinar e organizar vários PDFs, primeiro junte-os usando a ferramenta Juntar PDF.' },
    ],
  },

  'delete-pages': {
    title: 'Excluir Páginas',
    metaDescription: 'Remova páginas indesejadas de arquivos PDF. Selecione e exclua páginas específicas facilmente.',
    keywords: ['excluir páginas pdf', 'remover páginas pdf', 'removedor de páginas pdf', 'deletar páginas de pdf'],
    description: `
      <p>Excluir Páginas permite que você remova páginas indesejadas de seus documentos PDF de forma rápida e fácil. Quer precise remover páginas em branco ou conteúdo desatualizado, esta ferramenta torna tudo simples.</p>
      <p>As miniaturas visuais ajudam você a identificar exatamente quais páginas remover. Você pode excluir páginas individuais ou várias páginas de uma só vez.</p>
      <p>Todo o processamento acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento do qual deseja excluir páginas.' },
      { step: 2, title: 'Selecionar Páginas para Excluir', description: 'Clique nas miniaturas das páginas para marcá-las para exclusão ou insira os números das páginas no campo de entrada.' },
      { step: 3, title: 'Excluir e Baixar', description: 'Clique em Excluir para remover as páginas selecionadas e baixe seu PDF atualizado.' },
    ],
    useCases: [
      { title: 'Remover Páginas em Branco', description: 'Limpe documentos removendo páginas em branco incluídas acidentalmente.', icon: 'file-x' },
      { title: 'Remover Conteúdo Sensível', description: 'Exclua páginas que contenham informações confidenciais antes de compartilhar documentos.', icon: 'shield' },
      { title: 'Simplificar Documentos', description: 'Remova páginas desatualizadas ou irrelevantes para criar documentos mais focados.', icon: 'filter' },
    ],
    faq: [
      { question: 'Posso recuperar páginas excluídas?', answer: 'A exclusão é permanente no arquivo gerado. Mantenha um backup do documento original se puder precisar das páginas mais tarde.' },
      { question: 'Posso excluir várias páginas de uma vez?', answer: 'Sim, você pode selecionar e excluir várias páginas simultaneamente.' },
      { question: 'Excluir páginas afetará os marcadores?', answer: 'Marcadores que apontam para páginas excluídas serão removidos. Marcadores para as páginas restantes são preservados.' },
    ],
  },

  'bookmark': {
    title: 'Editar Marcadores',
    metaDescription: 'Adicione, edite e gerencie marcadores de PDF. Crie uma estrutura de navegação para seus documentos.',
    keywords: ['marcadores pdf', 'editar marcadores', 'adicionar marcadores', 'navegação pdf', 'sumário'],
    description: `
      <p>Editar Marcadores permite que você crie, modifique e organize marcadores em seus documentos PDF. Os marcadores oferecem navegação rápida para seções específicas, facilitando o uso de documentos longos.</p>
      <p>Você pode adicionar novos marcadores, editar os existentes, reorganizar a hierarquia ou importar marcadores de fontes externas.</p>
      <p>Toda a edição acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento que deseja editar.' },
      { step: 2, title: 'Gerenciar Marcadores', description: 'Adicione novos marcadores, edite os existentes ou arraste para reorganizar a hierarquia.' },
      { step: 3, title: 'Salvar e Baixar', description: 'Clique em Salvar para aplicar as alterações e baixar o PDF com os marcadores atualizados.' },
    ],
    useCases: [
      { title: 'Criar Navegação', description: 'Adicione marcadores a documentos longos para ajudar os leitores a navegar rapidamente por seções específicas.', icon: 'navigation' },
      { title: 'Organizar Capítulos', description: 'Crie uma estrutura hierárquica que reflita a organização de capítulos do seu documento.', icon: 'book-open' },
      { title: 'Melhorar Acessibilidade', description: 'Adicione marcadores para tornar os documentos mais acessíveis e fáceis de usar.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Posso criar marcadores aninhados?', answer: 'Sim, você pode criar uma estrutura hierárquica com marcadores principais e secundários.' },
      { question: 'Posso importar marcadores de um arquivo?', answer: 'Sim, você pode importar estruturas de marcadores de arquivos JSON ou de texto.' },
      { question: 'Os marcadores funcionarão em todos os leitores de PDF?', answer: 'Sim, os marcadores são um recurso padrão do PDF suportado por todos os principais leitores.' },
    ],
  },

  'table-of-contents': {
    title: 'Sumário',
    metaDescription: 'Gere um sumário para o seu PDF. Crie navegação clicável a partir de marcadores.',
    keywords: ['sumário pdf', 'gerador de sumário', 'índice pdf', 'navegação de documento'],
    description: `
      <p>Sumário gera uma página de sumário navegável para seus documentos PDF. O sumário pode ser criado a partir de marcadores existentes ou entradas personalizadas, oferecendo aos leitores uma visão geral e navegação rápida.</p>
      <p>Personalize a aparência com diferentes estilos, fontes e layouts. O sumário gerado inclui links clicáveis que saltam diretamente para as páginas referenciadas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento.' },
      { step: 2, title: 'Configurar Sumário', description: 'Escolha gerar a partir de marcadores ou criar entradas personalizadas. Selecione as opções de estilo e posicionamento.' },
      { step: 3, title: 'Gerar e Baixar', description: 'Clique em Gerar para criar o sumário e baixe seu PDF atualizado.' },
    ],
    useCases: [
      { title: 'Trabalhos Acadêmicos', description: 'Adicione um sumário profissional a teses, dissertações e artigos de pesquisa.', icon: 'graduation-cap' },
      { title: 'Relatórios de Negócios', description: 'Crie relatórios navegáveis com listagens de seções claras para os interessados.', icon: 'bar-chart' },
      { title: 'Manuais do Usuário', description: 'Gere sumários abrangentes para documentação técnica e guias do usuário.', icon: 'book' },
    ],
    faq: [
      { question: 'Posso personalizar a aparência do sumário?', answer: 'Sim, você pode escolher entre diferentes estilos, fontes e layouts para o seu sumário.' },
      { question: 'Onde o sumário é inserido?', answer: 'Por padrão, o sumário é inserido no início do documento, mas você pode escolher um local diferente.' },
      { question: 'As entradas do sumário são clicáveis?', answer: 'Sim, cada entrada é um link clicável que navega para a página correspondente.' },
    ],
  },

  'page-numbers': {
    title: 'Números de Página',
    metaDescription: 'Adicione números de página a documentos PDF. Personalize posição, formato e número inicial.',
    keywords: ['adicionar números de página', 'numeração pdf', 'numerar páginas pdf', 'paginação pdf'],
    description: `
      <p>Números de Página adiciona numeração personalizável aos seus documentos PDF. Escolha entre vários formatos, posições e estilos para combinar com o design do seu documento.</p>
      <p>Você pode definir o número inicial, pular certas páginas e usar diferentes formatos de numeração (1, 2, 3 ou i, ii, iii).</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento.' },
      { step: 2, title: 'Configurar Numeração', description: 'Escolha posição, formato, número inicial e quais páginas numerar.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Clique em Aplicar para adicionar os números de página e baixe seu PDF atualizado.' },
    ],
    useCases: [
      { title: 'Documentos Profissionais', description: 'Adicione números de página a relatórios, propostas e documentos comerciais.', icon: 'file-text' },
      { title: 'Trabalhos Acadêmicos', description: 'Numere as páginas de acordo com os requisitos de formatação acadêmica.', icon: 'graduation-cap' },
      { title: 'Documentos Legais', description: 'Adicione paginação adequada a contratos e processos judiciais.', icon: 'scale' },
    ],
    faq: [
      { question: 'Posso pular a primeira página?', answer: 'Sim, vous pode especificar quais páginas numerar e quais pular, como páginas de título ou capas.' },
      { question: 'Quais formatos de numeração estão disponíveis?', answer: 'Você pode usar algarismos arábicos (1, 2, 3), algarismos romanos (i, ii, iii ou I, II, III) ou letras (a, b, c).' },
      { question: 'Posso adicionar o formato "Página X de Y"?', answer: 'Sim, você pode incluir a contagem total de páginas no seu formato de numeração.' },
    ],
  },

  'add-watermark': {
    title: 'Adicionar Marca d\'Água',
    metaDescription: 'Adicione marcas d\'água de texto ou imagem a arquivos PDF. Proteja e identifique seus documentos.',
    keywords: ['adicionar marca d\'água', 'marca d\'água pdf', 'carimbar pdf', 'proteger pdf'],
    description: `
      <p>Adicionar Marca d'Água permite colocar marcas d'água de texto ou imagem em seus documentos PDF. Marcas d'água podem indicar o status do documento (Rascunho, Confidencial), adicionar branding ou coibir cópias não autorizadas.</p>
      <p>Personalize a posição, tamanho, opacidade, rotação e cor da marca d'água. Aplique a todas as páginas ou selecione páginas específicas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento.' },
      { step: 2, title: 'Criar Marca d\'Água', description: 'Insira texto ou carregue uma imagem para sua marca d\'água. Ajuste posição, tamanho, opacidade e rotação.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Clique em Aplicar para adicionar a marca d\'água e baixe seu PDF atualizado.' },
    ],
    useCases: [
      { title: 'Proteção de Documentos', description: 'Adicione marcas d\'água "Confidencial" ou "Rascunho" para indicar o status do documento.', icon: 'shield' },
      { title: 'Branding de Documentos', description: 'Adicione logotipos ou nomes de empresas a documentos oficiais.', icon: 'award' },
      { title: 'Aviso de Copyright', description: 'Adicione informações de direitos autorais para proteger a propriedade intelectual.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Posso usar uma imagem como marca d\'água?', answer: 'Sim, você pode carregar imagens PNG, JPG ou SVG para usar como marcas d\'água.' },
      { question: 'Posso tornar a marca d\'água semitransparente?', answer: 'Sim, você pode ajustar a opacidade de totalmente transparente a totalmente opaca.' },
      { question: 'Posso aplicar marcas d\'água diferentes em páginas diferentes?', answer: 'A ferramenta aplica a mesma marca d\'água às páginas selecionadas. Para marcas d\'água diferentes, processe o documento várias vezes.' },
    ],
  },

  'header-footer': {
    title: 'Cabeçalho e Rodapé',
    metaDescription: 'Adicione cabeçalhos e rodapés a documentos PDF. Inclua números de página, datas e texto personalizado.',
    keywords: ['cabeçalho pdf', 'rodapé pdf', 'adicionar cabeçalho rodapé', 'papel timbrado pdf'],
    description: `
      <p>Cabeçalho e Rodapé adiciona cabeçalhos e rodapés personalizáveis aos seus documentos PDF. Inclua números de página, datas, títulos de documentos ou qualquer texto personalizado.</p>
      <p>Posicione o conteúdo à esquerda, no centro ou à direita. Use conteúdos diferentes para páginas ímpares e pares, se necessário.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste e solte seu arquivo PDF ou clique para selecionar o documento.' },
      { step: 2, title: 'Configurar Cabeçalho/Rodapé', description: 'Insira o texto para as áreas de cabeçalho e rodapé. Adicione números de página, datas ou texto personalizado.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Clique em Aplicar para adicionar cabeçalhos/rodapés e baixe seu PDF atualizado.' },
    ],
    useCases: [
      { title: 'Documentos Comerciais', description: 'Adicione o nome da empresa e números de página a documentos profissionais.', icon: 'briefcase' },
      { title: 'Documentos Legais', description: 'Inclua números de processos, datas e referências de página em documentos judiciais.', icon: 'scale' },
      { title: 'Artigos Acadêmicos', description: 'Adicione cabeçalhos com o título do artigo e o nome do autor.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Posso ter cabeçalhos diferentes em páginas ímpares e pares?', answer: 'Sim, você pode configurar conteúdos diferentes para páginas ímpares e pares.' },
      { question: 'Posso incluir a data atual?', answer: 'Sim, você pode inserir campos de data dinâmicos que mostram a data atual.' },
      { question: 'Posso pular o cabeçalho/rodapé em certas páginas?', answer: 'Sim, você pode especificar quais páginas devem ter cabeçalhos/rodapés e quais devem ser ignoradas.' },
    ],
  },

  'form-filler': {
    title: 'Preencher Formulário',
    metaDescription: 'Preencha formulários PDF online. Complete formulários PDF interativos sem imprimir.',
    keywords: ['preencher formulário pdf', 'formulário interativo pdf', 'escrever no formulário pdf', 'preenchimento de pdf'],
    description: `
      <p>Preencher Formulário permite que você carregue e complete formulários PDF interativos diretamente no seu navegador. Chega de imprimir, preencher à mão e digitalizar novamente.</p>
      <p>A ferramenta detecta campos de formulário, caixas de seleção e botões de opção, permitindo um preenchimento rápido e organizado.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Formulário PDF', description: 'Selecione o arquivo de formulário que deseja preencher.' },
      { step: 2, title: 'Preencher os Campos', description: 'Clique nos campos interativos para digitar texto ou selecionar opções.' },
      { step: 3, title: 'Salvar e Baixar', description: 'Clique em Finalizar para aplicar os dados do formulário e baixe o PDF preenchido.' },
    ],
    useCases: [
      { title: 'Candidaturas', description: 'Preencha formulários de emprego e inscrições eletronicamente.', icon: 'file-text' },
      { title: 'Formulários Fiscais', description: 'Complete declarações e formulários oficiais com facilidade.', icon: 'landmark' },
      { title: 'Pesquisas e Questionários', description: 'Responda a formulários de pesquisa de forma digital e rápida.', icon: 'clipboard-list' },
    ],
    faq: [
      { question: 'Posso preencher PDFs não interativos?', answer: 'Para PDFs que não possuem campos interativos, use nossa ferramenta "Editar PDF" para adicionar texto manualmente.' },
      { question: 'Os dados do formulário são salvos?', answer: 'Os dados são incorporados ao PDF baixado. Por privacidade, não armazenamos as informações preenchidas em nossos servidores.' },
      { question: 'Posso adicionar uma assinatura?', answer: 'Sim, você pode usar nossa ferramenta integrada de assinatura para assinar o formulário preenchido.' },
    ],
  },

  'form-creator': {
    title: 'Criar Formulário',
    metaDescription: 'Crie formulários PDF interativos. Adicione campos de texto, caixas de seleção e botões de opção.',
    keywords: ['criar formulário pdf', 'formulário interativo pdf', 'campos de formulário pdf', 'gerador de formulário pdf'],
    description: `
      <p>Criar Formulário permite que você transforme seus documentos PDF estáticos em formulários interativos. Adicione campos de preenchimento, caixas de seleção, botões de opção e menus suspensos com facilidade.</p>
      <p>A interface intuitiva permite arrastar e soltar elementos de formulário, definir propriedades de campo e criar formulários profissionais prontos para serem preenchidos digitalmente.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o documento que deseja transformar em um formulário interativo.' },
      { step: 2, title: 'Adicionar Elementos', description: 'Arraste campos de texto, caixas de seleção ou outros elementos da barra de ferramentas.' },
      { step: 3, title: 'Configurar e Baixar', description: 'Defina os nomes e propriedades dos campos e baixe seu formulário PDF final.' },
    ],
    useCases: [
      { title: 'Inscrições e Termos', description: 'Crie formulários de inscrição profissionais que podem ser preenchidos no computador.', icon: 'clipboard' },
      { title: 'Pesquisas e Questionários', description: 'Desenvolva formulários de feedback e pesquisas com caixas de seleção e botões.', icon: 'check-square' },
      { title: 'Automatização de Dados', description: 'Crie campos padronizados para facilitar a extração de dados posteriormente.', icon: 'database' },
    ],
    faq: [
      { question: 'Os formulários funcionam em qualquer leitor de PDF?', answer: 'Sim, os formulários criados seguem o padrão PDF e funcionam no Adobe Acrobat, navegadores e outros leitores compatíveis.' },
      { question: 'Posso tornar campos obrigatórios?', answer: 'Sim, você pode definir as propriedades de cada campo, incluindo se o preenchimento é obrigatório.' },
      { question: 'Posso adicionar validação de campo?', answer: 'Sim, você pode configurar validações básicas como formato de número ou data para os campos de texto.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP para PDF',
    metaDescription: 'Converta imagens BMP em PDF. Combine vários arquivos BMP em um único documento PDF.',
    keywords: ['bmp para pdf', 'converter bmp', 'imagem bmp para pdf', 'bitmap para pdf'],
    description: `
      <p>BMP para PDF converte suas imagens bitmap (.bmp) em documentos PDF de alta qualidade. Ideal para preservar a clareza de imagens não comprimidas em um formato universalmente aceito.</p>
      <p>Você pode converter um único arquivo BMP ou combinar vários arquivos em um só PDF, ajustando a ordem das páginas e o tamanho do papel.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivos BMP', description: 'Selecione as imagens BMP que deseja converter.' },
      { step: 2, title: 'Ajustar Configurações', description: 'Organize as imagens e escolha o tamanho da página desejado.' },
      { step: 3, title: 'Converter e Baixar', description: 'Clique em Converter para gerar seu PDF e faça o download.' },
    ],
    useCases: [
      { title: 'Preservar Gráficos', description: 'Converta imagens bitmap legadas para PDF para melhor compatibilidade e visualização.', icon: 'image' },
      { title: 'Documentação Técnica', description: 'Integre capturas de tela BMP em relatórios e manuais PDF.', icon: 'file-text' },
      { title: 'Arquivamento de Imagens', description: 'Agrupe coleções de imagens BMP em arquivos PDF compactos para fácil armazenamento.', icon: 'archive' },
    ],
    faq: [
      { question: 'A qualidade da imagem BMP será mantida?', answer: 'Sim, o PDF preservará a resolução total da imagem bitmap original.' },
      { question: 'Posso converter arquivos BMP grandes?', answer: 'Sim, a ferramenta lida com arquivos BMP de vários tamanhos, processando-os localmente.' },
      { question: 'Posso combinar BMP com outros formatos?', answer: 'Para melhores resultados, converta seus BMPs e depois use a ferramenta Juntar PDF para combiná-los com outros documentos.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD para PDF',
    metaDescription: 'Converta arquivos Photoshop (PSD) em documentos PDF. Compartilhe seus designs com facilidade.',
    keywords: ['psd para pdf', 'photoshop para pdf', 'converter psd', 'design para pdf'],
    description: `
      <p>PSD para PDF transforma seus arquivos do Adobe Photoshop em documentos PDF de alta fidelidade. Perfeito para compartilhar prévias de design com clientes ou preparar arquivos para impressão sem exigir o Photoshop.</p>
      <p>A ferramenta preserva a nitidez visual das suas camadas e elementos gráficos, criando um PDF que representa fielmente a sua criação original.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo PSD', description: 'Selecione o arquivo Photoshop .psd do seu computador.' },
      { step: 2, title: 'Processar Conversão', description: 'A ferramenta analisará o arquivo e preparará o PDF.' },
      { step: 3, title: 'Baixar PDF', description: 'Clique para baixar sua versão PDF pronta para compartilhamento.' },
    ],
    useCases: [
      { title: 'Aprovação de Clientes', description: 'Envie designs complexos para revisão em um formato que qualquer pessoa possa abrir.', icon: 'eye' },
      { title: 'Pronto para Impressão', description: 'Converta seus layouts do Photoshop em PDFs de alta qualidade para gráficas.', icon: 'printer' },
      { title: 'Apresentação de Portfólio', description: 'Inclua seus trabalhos em camadas em um portfólio PDF digital unificado.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'As camadas do PSD são mantidas no PDF?', answer: 'O arquivo é processado para exibir o design final; as camadas individuais não são editáveis no PDF, mas a aparência é preservada exatamente.' },
      { question: 'Preciso ter o Photoshop para usar esta ferramenta?', answer: 'Não, você pode converter arquivos PSD mesmo sem o Adobe Photoshop instalado.' },
      { question: 'Qual o tamanho máximo de arquivo PSD suportado?', answer: 'Suportamos a maioria dos arquivos PSD padrão; arquivos extremamente grandes podem depender da memória do seu navegador.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF para PDF',
    metaDescription: 'Converta imagens TIFF em PDF. Suporte para TIFF de múltiplas páginas e alta resolução.',
    keywords: ['tiff para pdf', 'tif para pdf', 'converter tiff', 'imagem para pdf'],
    description: `
      <p>TIFF para PDF converte suas imagens de alta qualidade (Tagged Image File Format) em documentos PDF estáveis. Especialmente útil para scans de alta resolução e fotografias profissionais.</p>
      <p>A ferramenta suporta TIFFs de várias páginas, convertendo cada quadro em uma página separada no PDF resultante.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivos TIFF', description: 'Selecione suas imagens .tiff ou .tif.' },
      { step: 2, title: 'Visualizar e Organizar', description: 'Verifique as páginas extraídas e escolha a orientação.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o PDF e salve o arquivo convertido.' },
    ],
    useCases: [
      { title: 'Documentos Digitalizados', description: 'Converta scans TIFF volumosos em PDFs mais práticos para compartilhamento.', icon: 'camera' },
      { title: 'Fotografia Profissional', description: 'Agrupe imagens TIFF de alta fidelidade em portfólios PDF para clientes.', icon: 'image' },
      { title: 'Arquivos Médicos e Legais', description: 'Transforme registros armazenados em TIFF no formato PDF padrão da indústria.', icon: 'archive' },
    ],
    faq: [
      { question: 'O TIFF de múltiplas páginas é suportado?', answer: 'Sim, todas as páginas contidas em um único arquivo TIFF serão convertidas em páginas individuais do PDF.' },
      { question: 'A profundidade de cor é preservada?', answer: 'Sim, a alta fidelidade das cores do TIFF é mantida durante o processo de conversão.' },
      { question: 'Posso converter TIFFs com compressão LZW?', answer: 'Sim, suportamos os tipos de compressão mais comuns usados em arquivos TIFF.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word para PDF',
    metaDescription: 'Converta documentos Word (DOCX ou DOC) em PDF com perfeição. Rápido, seguro e gratuito.',
    keywords: ['word para pdf', 'converter docx para pdf', 'docx em pdf', 'doc para pdf'],
    description: `
      <p>Word para PDF transforma seus documentos do Microsoft Word em arquivos PDF profissionais. Nossa tecnologia de renderização garante que a formatação, as fontes e as tabelas permaneçam exatamente iguais ao original.</p>
      <p>É a maneira mais rápida e segura de converter seus escritos para um formato não editável e universalmente compatível.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Documento Word', description: 'Selecione seu arquivo .docx ou .doc do seu dispositivo.' },
      { step: 2, title: 'Ajustar e Converter', description: 'A ferramenta processará o documento para garantir a fidelidade visual.' },
      { step: 3, title: 'Baixar PDF', description: 'Clique em baixar para obter seu novo arquivo PDF profissional.' },
    ],
    useCases: [
      { title: 'Envio de CV', description: 'Garanta que sua formatação permaneça intacta ao enviar currículos para recrutadores.', icon: 'user' },
      { title: 'Propostas Oficiais', description: 'Envie orçamentos e propostas comerciais em um formato que não pode ser facilmente alterado.', icon: 'file-text' },
      { title: 'Trabalhos Acadêmicos', description: 'Converta monografias e teses seguindo as normas exigidas pelas instituições.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Minhas fórmulas e tabelas serão mantidas?', answer: 'Sim, a conversão é projetada para manter toda a estrutura organizacional do seu arquivo Word.' },
      { question: 'Suporta o formato .doc antigo?', answer: 'Sim, você pode converter tanto o formato moderno .docx quanto o formato antigo .doc.' },
      { question: 'As imagens perdem qualidade?', answer: 'Não, as imagens são incorporadas no PDF mantendo a resolução do documento original.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel para PDF',
    metaDescription: 'Converta planilhas Excel (XLSX) em documentos PDF. Transforme dados em relatórios profissionais.',
    keywords: ['excel para pdf', 'xlsx para pdf', 'converter excel', 'planilha para pdf'],
    description: `
      <p>Excel para PDF converte suas planilhas do Microsoft Excel em documentos PDF de fácil leitura. Perfeito para compartilhar relatórios financeiros, inventários ou qualquer conjunto de dados sem preocupações com a visualização.</p>
      <p>A ferramenta converte todas as abas da sua planilha, mantendo o layout e as tabelas organizadas conforme definido no Excel.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo Excel', description: 'Selecione sua planilha .xlsx do seu computador.' },
      { step: 2, title: 'Processar Relatório', description: 'A ferramenta converterá as tabelas e dados para o formato PDF.' },
      { step: 3, title: 'Baixar PDF', description: 'Faça o download do seu relatório PDF pronto para impressão ou envio.' },
    ],
    useCases: [
      { title: 'Relatórios Financeiros', description: 'Compartilhe balanços e orçamentos em um formato profissional e estável.', icon: 'bar-chart' },
      { title: 'Listas de Preços', description: 'Envie tabelas de preços legíveis para clientes em qualquer dispositivo.', icon: 'tag' },
      { title: 'Arquivamento de Dados', description: 'Salve instantâneos de planilhas para registros históricos permanentes.', icon: 'archive' },
    ],
    faq: [
      { question: 'Várias abas são suportadas?', answer: 'Sim, todas as abas (planilhas) contidas no arquivo Excel serão incluídas no PDF final.' },
      { question: 'As fórmulas são mantidas?', answer: 'O PDF exibe os valores calculados finais; as fórmulas não são funcionais em PDF.' },
      { question: 'Posso converter arquivos .xls antigos?', answer: 'No momento, suportamos o formato .xlsx. Por favor, salve arquivos .xls como .xlsx antes de converter.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint para PDF',
    metaDescription: 'Converta apresentações PowerPoint (PPTX) em PDF. Preserve seus slides para compartilhamento.',
    keywords: ['powerpoint para pdf', 'pptx para pdf', 'converter pptx', 'slides para pdf'],
    description: `
      <p>PowerPoint para PDF transforma suas apresentações de slides em documentos PDF de alta qualidade. Ideal para compartilhar seu trabalho com pessoas que não possuem o PowerPoint instalado.</p>
      <p>Cada slide é convertido em uma página do PDF, mantendo fielmente o design, as imagens e o texto da sua apresentação original.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Apresentação', description: 'Selecione seu arquivo .pptx para conversão.' },
      { step: 2, title: 'Preparar Slides', description: 'A ferramenta extrairá o conteúdo de cada slide para o PDF.' },
      { step: 3, title: 'Baixar PDF', description: 'Baixe sua apresentação em um formato estável e fácil de compartilhar.' },
    ],
    useCases: [
      { title: 'Distribuição de Slides', description: 'Envie o material da sua aula ou reunião para participantes sem erros de compatibilidade.', icon: 'users' },
      { title: 'Criação de Apostilas', description: 'Transforme seus slides em guias PDF para estudo ou referência.', icon: 'book' },
      { title: 'Apresentações Digitais', description: 'Exiba seu trabalho em qualquer dispositivo usando um leitor de PDF comum.', icon: 'monitor' },
    ],
    faq: [
      { question: 'As animações funcionam no PDF?', answer: 'Não, o PDF é um formato estático. Cada slide será representado como uma imagem fixa no PDF final.' },
      { question: 'As notas do orador são incluídas?', answer: 'Atualmente, apenas o conteúdo visual dos slides é convertido para o PDF.' },
      { question: 'Suporta o formato .ppt antigo?', answer: 'Suportamos principalmente o formato modernizado .pptx. Salve seus arquivos antigos como .pptx para melhores resultados.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS para PDF',
    metaDescription: 'Converta documentos XPS para PDF. Alta fidelidade na conversão de layout e gráficos.',
    keywords: ['xps para pdf', 'converter xps', 'xps em pdf', 'microsoft xps'],
    description: `
      <p>XPS para PDF converte documentos no formato XML Paper Specification (XPS) da Microsoft para o padrão universal PDF. Preserva o layout original, texto e gráficos vetoriais com precisão.</p>
      <p>XPS é comum em fluxos de trabalho de impressão no Windows, e esta ferramenta facilita a visualização desses arquivos em qualquer plataforma através do PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo XPS', description: 'Arraste e solte seu arquivo .xps para o conversor.' },
      { step: 2, title: 'Conversão Nativa', description: 'A ferramenta processa o XPS localmente para garantir fidelidade total.' },
      { step: 3, title: 'Baixar PDF', description: 'Obtenha seu novo documento PDF pronto para uso universal.' },
    ],
    useCases: [
      { title: 'Compatibilidade de Arquivos', description: 'Visualize documentos XPS em dispositivos que não possuem o visualizador nativo do Windows.', icon: 'smartphone' },
      { title: 'Migração de Arquivo', description: 'Atualize seus registros antigos em XPS para o formato PDF mais moderno e suportado.', icon: 'history' },
      { title: 'Intercâmbio de Documentos', description: 'Compartilhe arquivos de impressão estáveis com usuários de Mac ou Linux.', icon: 'share-2' },
    ],
    faq: [
      { question: 'O que é o formato XPS?', answer: 'XPS é o formato de documento fixo da Microsoft, concorrente do PDF, muito usado para drivers de impressão "Print to XPS".' },
      { question: 'A conversão perde qualidade?', answer: 'Não, a conversão é de alta fidelidade, mantendo texto, imagens e vetores exatamente como no original.' },
      { question: 'Suporta arquivos multi-página?', answer: 'Sim, documentos XPS com qualquer número de páginas são convertidos integralmente para PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF para PDF',
    metaDescription: 'Converta arquivos RTF (Rich Text Format) em PDF. Preserve a formatação do seu texto.',
    keywords: ['rtf para pdf', 'converter rtf', 'rich text em pdf', 'texto formatado para pdf'],
    description: `
      <p>RTF para PDF transforma seus arquivos de texto rico (Rich Text Format) em documentos PDF limpos e estáveis. O RTF é um formato versátil que inclui cores, fontes e estilos básicos.</p>
      <p>Nossa ferramenta garante que a legibilidade e a estrutura do seu documento RTF sejam preservadas ao migrar para o formato PDF, ideal para arquivamento e compartilhamento profissional.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo RTF', description: 'Selecione seu documento .rtf para converter.' },
      { step: 2, title: 'Processar Texto', description: 'A ferramenta converterá as fontes e estilos para o padrão PDF.' },
      { step: 3, title: 'Baixar PDF', description: 'Baixe sua versão PDF finalizada.' },
    ],
    useCases: [
      { title: 'Documentos Legados', description: 'Converta arquivos RTF antigos para o padrão moderno PDF.', icon: 'file-text' },
      { title: 'Envio de Manuscritos', description: 'Prepare seus textos escritos em editores simples para submissão profissional.', icon: 'feather' },
      { title: 'Arquivamento Seguro', description: 'Transforme textos editáveis em documentos PDF protegidos contra alterações acidentais.', icon: 'shield' },
    ],
    faq: [
      { question: 'A formatação complexa é mantida?', answer: 'Formatos básicos como negrito, itálico, fontes e parágrafos são mantidos. Elementos extremamente complexos podem ser simplificados.' },
      { question: 'Posso converter vários RTFs de uma vez?', answer: 'No momento, a ferramenta processa um arquivo por vez para garantir a melhor qualidade.' },
      { question: 'As imagens inseridas no RTF são suportadas?', answer: 'A ferramenta foca no conteúdo textual e formatação. Imagens embutidas de forma não padrão podem não aparecer.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB para PDF',
    metaDescription: 'Converta e-books EPUB para PDF. Preserve a formatação, imagens e estrutura de capítulos.',
    keywords: ['epub para pdf', 'converter epub', 'ebook para pdf', 'e-book em pdf'],
    description: `
      <p>EPUB para PDF converte seus livros digitais em documentos PDF de alta qualidade. EPUB é o padrão mais popular para e-readers, mas o PDF é ideal para impressão e visualização em computadores.</p>
      <p>Esta ferramenta preserva a estrutura de capítulos, imagens e a formatação básica do seu e-book, proporcionando uma experiência de leitura consistente em qualquer tela.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar E-book EPUB', description: 'Selecione seu arquivo de livro digital .epub.' },
      { step: 2, title: 'Renderizar Páginas', description: 'A ferramenta converterá o layout fluido do EPUB em páginas fixas de PDF.' },
      { step: 3, title: 'Baixar Livro PDF', description: 'Baixe seu e-book pronto para ler ou imprimir.' },
    ],
    useCases: [
      { title: 'Leitura em Computador', description: 'Leia seus e-books favoritos em qualquer leitor de PDF comum sem software especial.', icon: 'monitor' },
      { title: 'Impressão de Livros', description: 'Prepare o conteúdo de um EPUB para ser impresso em papel de forma organizada.', icon: 'printer' },
      { title: 'Estudo e Anotação', description: 'Converta e-books para PDF para facilitar o uso de ferramentas de realce e comentários.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'A estrutura de capítulos é mantida?', answer: 'Sim, tentamos preservar a organização e a ordem das seções originais do livro.' },
      { question: 'Posso converter livros protegidos por DRM?', answer: 'Não, esta ferramenta funciona apenas com arquivos EPUB livres de proteção digital (DRM).' },
      { question: 'Como fica o tamanho do texto no PDF?', answer: 'O texto é renderizado em um tamanho legível padrão adaptado ao tamanho de página do PDF.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI para PDF',
    metaDescription: 'Converta e-books MOBI para PDF. Ideal para transformar livros do Kindle em formato universal.',
    keywords: ['mobi para pdf', 'converter mobi', 'kindle para pdf', 'ebook em pdf'],
    description: `
      <p>MOBI para PDF permite converter seus e-books do Kindle e outros arquivos MOBI/AZW para o formato PDF universalmente compatível. Perfeito para quando você quer ler seus livros em dispositivos que não suportam formatos nativos da Amazon.</p>
      <p>A conversão foca em manter a integridade do texto e as imagens do seu e-book para que nada se perca na mudança de formato.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo MOBI', description: 'Selecione o e-book .mobi do seu dispositivo.' },
      { step: 2, title: 'Processar Conversão', description: 'A ferramenta converterá o conteúdo do livro para o padrão de página PDF.' },
      { step: 3, title: 'Baixar PDF', description: 'Obtenha seu livro no formato PDF pronto para leitura.' },
    ],
    useCases: [
      { title: 'Arquivamento de E-books', description: 'Mantenha uma cópia de segurança dos seus livros Kindle no formato estável PDF.', icon: 'archive' },
      { title: 'Visualização Offline', description: 'Leia seus livros MOBI em qualquer dispositivo sem precisar de aplicativos Kindle ou específicos.', icon: 'book' },
      { title: 'Compatibilidade de Dispositivos', description: 'Transfira sua biblioteca para leitores que suportam apenas PDF.', icon: 'repeat' },
    ],
    faq: [
      { question: 'Suporta arquivos protegidos?', answer: 'Não, a ferramenta não pode converter arquivos Kindle protegidos por DRM proprietário.' },
      { question: 'As imagens originais são mantidas?', answer: 'Sim, as imagens contidas no arquivo MOBI são preservadas e ajustadas ao layout do PDF.' },
      { question: 'A conversão é rápida?', answer: 'Sim, a maioria dos livros é convertida em poucos segundos diretamente no seu navegador.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF para SVG',
    metaDescription: 'Converta páginas de PDF em imagens vetoriais SVG. Ideal para designers e web developers.',
    keywords: ['pdf para svg', 'converter pdf em vetor', 'imagem vetorial pdf', 'pdf para svg online'],
    description: `
      <p>PDF para SVG extrai as páginas do seu documento e as transforma em gráficos vetoriais escaláveis (Scalable Vector Graphics). Ao contrário de formatos de imagem comuns, o SVG mantém a nitidez em qualquer tamanho.</p>
      <p>Esta ferramenta é perfeita para designers que precisam editar elementos de um PDF em softwares vetoriais ou para desenvolvedores que desejam incluir conteúdo de PDF em websites de forma nativa e leve.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o arquivo que deseja converter para vetor.' },
      { step: 2, title: 'Processar Páginas', description: 'A ferramenta converterá cada página em um gráfico SVG independente.' },
      { step: 3, title: 'Baixar SVG', description: 'Obtenha seus arquivos SVG (em um arquivo ZIP se forem várias páginas).' },
    ],
    useCases: [
      { title: 'Design Gráfico', description: 'Abra elementos de PDF em editores vetoriais para modificação e criação artística.', icon: 'palette' },
      { title: 'Desenvolvimento Web', description: 'Use gráficos de alta qualidade e escaláveis em sites sem perder resolução.', icon: 'code' },
      { title: 'Impressão de Grande Formato', description: 'Converta logotipos em PDFs para SVG para garantir bordas perfeitas em grandes ampliações.', icon: 'maximize' },
    ],
    faq: [
      { question: 'O texto continua sendo texto?', answer: 'Sim, sempre que possível, o texto no SVG é mantido como caminhos vetoriais ou glifos de texto para preservar a aparência exata.' },
      { question: 'Posso converter várias páginas?', answer: 'Sim, cada página do seu PDF se tornará um arquivo SVG separado.' },
      { question: 'Qual a vantagem do SVG sobre o JPG?', answer: 'O SVG não pixeliza quando ampliado e geralmente tem um tamanho de arquivo menor para gráficos e diagramas.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF para PowerPoint',
    metaDescription: 'Converta PDFs em apresentações PowerPoint (PPTX) editáveis. Recupere seus slides com facilidade.',
    keywords: ['pdf para powerpoint', 'pdf para pptx', 'converter pdf em slides', 'pdf para pptx editável'],
    description: `
      <p>PDF para PowerPoint transforma seus documentos PDF de volta em apresentações PPTX. Ideal para quando você perdeu o arquivo original da sua apresentação e precisa fazer edições ou apresentá-la novamente.</p>
      <p>A ferramenta tenta identificar a estrutura dos slides e reconstruir os elementos de texto e imagem para facilitar a edição no PowerPoint ou Google Slides.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Envie o arquivo PDF que deseja transformar em slides.' },
      { step: 2, title: 'Reconstruir Slides', description: 'A ferramenta analisará o layout do PDF para criar uma apresentação PPTX.' },
      { step: 3, title: 'Baixar PPTX', description: 'Baixe sua nova apresentação e abra-a no PowerPoint para edição.' },
    ],
    useCases: [
      { title: 'Edição de Apresentações', description: 'Recupere a capacidade de editar slides que só estavam disponíveis em formato PDF.', icon: 'edit' },
      { title: 'Reutilização de Conteúdo', description: 'Transforme relatórios PDF em slides para reuniões de forma rápida.', icon: 'refresh-cw' },
      { title: 'Preparação de Aulas', description: 'Transforme apostilas PDF em apresentações de slides dinâmicas para o ensino.', icon: 'book-open' },
    ],
    faq: [
      { question: 'O texto será editável no PowerPoint?', answer: 'Tentamos reconstruir os blocos de texto como elementos editáveis sempre que a estrutura do PDF permitir.' },
      { question: 'As imagens são mantidas separadas?', answer: 'Sim, as imagens são extraídas e colocadas nos slides como objetos independentes.' },
      { question: 'Suporta PDFs escaneados?', answer: 'Para melhores resultados com scannings, recomendamos usar nossa ferramenta de OCR antes da conversão.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF para Excel',
    metaDescription: 'Converta PDF em planilhas Excel. Extraia tabelas para o formato XLSX.',
    keywords: ['pdf para excel', 'pdf para xlsx', 'extrair tabelas pdf', 'converter tabelas'],
    description: `
      <p>PDF para Excel permite converter seus documentos PDF em planilhas do Microsoft Excel (.xlsx) editáveis. A ferramenta detecta automaticamente tabelas no seu PDF e as extrai de forma organizada.</p>
      <p>Ideal para análise de dados, relatórios financeiros e faturas. Cada página é processada para garantir que a estrutura das tabelas seja mantida na planilha final.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o arquivo PDF que contém as tabelas que deseja extrair.' },
      { step: 2, title: 'Processar Dados', description: 'A ferramenta analisará o layout para identificar e extrair as tabelas.' },
      { step: 3, title: 'Baixar Excel', description: 'Faça o download do arquivo .xlsx com as tabelas prontas para edição.' },
    ],
    useCases: [
      { title: 'Análise Financeira', description: 'Converta extratos e faturas para análise no Excel.', icon: 'trending-up' },
      { title: 'Extração de Dados', description: 'Extraia tabelas de relatórios técnicos ou acadêmicos.', icon: 'database' },
      { title: 'Gestão de Inventário', description: 'Transforme listas de produtos em formato PDF em planilhas de controle.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'As tabelas perdem a formatação?', answer: 'Tentamos manter a estrutura de linhas e colunas; formatação visual complexa pode ser simplificada.' },
      { question: 'O que acontece se não houver tabelas?', answer: 'A ferramenta tentará extrair o texto de forma estruturada, mas os melhores resultados são com tabelas claras.' },
      { question: 'Suporta PDFs escaneados?', answer: 'Sim, a ferramenta utiliza tecnologia de OCR para reconhecer dados em documentos escaneados.' },
    ],
  },

  'pdf-to-txt': {
    title: 'PDF para Texto',
    metaDescription: 'Extraia texto de PDFs instantaneamente. Conversor de PDF para TXT com suporte a OCR para arquivos escaneados.',
    keywords: ['pdf para txt', 'pdf para texto', 'extrair texto de pdf', 'converter pdf em texto', 'ocr pdf para texto'],
    description: `
      <p>Precisa extrair o texto de um PDF? Nosso conversor de PDF para Texto torna simples puxar todo o conteúdo escrito de qualquer arquivo PDF. É perfeito para análise de dados ou para obter texto editável de documentos apenas para leitura.</p>
      <p>A ferramenta conta com OCR integrado para lidar automaticamente com documentos escaneados ou imagens, garantindo que nenhum conteúdo seja perdido.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDF', description: 'Selecione o arquivo do seu dispositivo.' },
      { step: 2, title: 'Extrair Texto', description: 'A ferramenta processará o arquivo e extrairá todo o texto disponível.' },
      { step: 3, title: 'Copiar ou Baixar', description: 'Copie para a área de transferência ou baixe como um arquivo .txt.' },
    ],
    useCases: [
      { title: 'Migração de Conteúdo', description: 'Mova rapidamente textos de documentos antigos para outros sistemas.', icon: 'arrow-right-circle' },
      { title: 'Análise de Texto', description: 'Extraia texto bruto para processamento de linguagem natural.', icon: 'bar-chart-2' },
      { title: 'Digitalização de Notas', description: 'Transforme anotações escaneadas em texto digital editável.', icon: 'scan' },
    ],
    faq: [
      { question: 'Funciona com PDFs escaneados?', answer: 'Sim, usamos OCR para reconhecer e extrair texto de imagens contidas no PDF.' },
      { question: 'A formatação é mantida?', answer: 'Esta ferramenta foca no texto bruto (plain text) para máxima compatibilidade.' },
      { question: 'Meus dados estão seguros?', answer: 'Sim, todo o processamento é feito localmente no seu navegador.' },
    ],
  },

  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Torne PDFs escaneados pesquisáveis com OCR. Extraia texto de imagens e documentos digitalizados.',
    keywords: ['ocr pdf', 'pdf pesquisável', 'reconhecimento de texto', 'digitalizar para texto'],
    description: `
      <p>OCR PDF utiliza Reconhecimento Óptico de Caracteres para transformar PDFs escaneados em documentos com texto pesquisável e selecionável. Converta imagens estáticas em arquivos funcionais.</p>
      <p>Com suporte a múltiplos idiomas, a ferramenta garante precisão no reconhecimento sem alterar o layout original do seu documento.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDF Escaneado', description: 'Selecione o arquivo que deseja tornar pesquisável.' },
      { step: 2, title: 'Ecolher Idioma', description: 'Selecione o idioma principal do documento para maior precisão.' },
      { step: 3, title: 'Processar e Baixar', description: 'Clique em Processar para aplicar o OCR e baixe o novo PDF.' },
    ],
    useCases: [
      { title: 'Arquivos Digitais', description: 'Torne grandes bibliotecas de scans fáceis de pesquisar por palavras-chave.', icon: 'archive' },
      { title: 'Busca em Documentos', description: 'Encontre informações rapidamente em contratos escaneados.', icon: 'search' },
      { title: 'Extração para Edição', description: 'Transforme imagens de texto em conteúdo que você pode copiar e colar.', icon: 'type' },
    ],
    faq: [
      { question: 'Quais idiomas são suportados?', answer: 'Suportamos mais de 100 idiomas, incluindo Português, Inglês, Espanhol e outros.' },
      { question: 'O layout original muda?', answer: 'Não, adicionamos uma camada de texto invisível sobre a imagem, mantendo a aparência original.' },
      { question: 'Qual a precisão do OCR?', answer: 'Em documentos nítidos, a precisão costuma ser superior a 95%.' },
    ],
  },

  'extract-images': {
    title: 'Extrair Imagens de PDF',
    metaDescription: 'Extraia todas as imagens embutidas de arquivos PDF. Baixe individualmente ou em um arquivo ZIP.',
    keywords: ['extrair imagens pdf', 'pegar imagens de pdf', 'download imagens pdf', 'pdf para imagens'],
    description: `
      <p>Extrair Imagens de PDF recupera todos os elementos gráficos e fotos embutidos em seus documentos. Economize tempo baixando todas as fotos de uma só vez em alta qualidade.</p>
      <p>A ferramenta permite filtrar imagens pequenas (como ícones) para que você obtenha apenas o que realmente importa. Tudo processado de forma rápida e segura.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDFs', description: 'Selecione um ou mais arquivos de onde deseja extrair as imagens.' },
      { step: 2, title: 'Configurar Filtros', description: 'Defina o tamanho mínimo para ignorar ícones e logotipos pequenos.' },
      { step: 3, title: 'Extrair e Baixar', description: 'Inicie a extração e baixe as imagens individualmente ou em um arquivo ZIP.' },
    ],
    useCases: [
      { title: 'Recuperação de Fotos', description: 'Recupere fotos originais guardadas dentro de relatórios em PDF.', icon: 'image' },
      { title: 'Coleção de Ativos', description: 'Reúna gráficos de apresentações para usar em outros projetos.', icon: 'folder' },
      { title: 'Designers', description: 'Extraia elementos visuais de manuais e catálogos para edição.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Em qual formato as imagens são salvas?', answer: 'Sempre que possível, mantemos o formato original (JPG ou PNG); caso contrário, convertemos para PNG.' },
      { question: 'Por que algumas imagens não aparecem?', answer: 'Se forem muito pequenas, podem ter sido ignoradas pelo filtro de tamanho.' },
      { question: 'Extrai imagens de PDFs escaneados?', answer: 'Geralmente scans são uma única imagem grande por página. Use "PDF para JPG" para esse caso.' },
    ],
  },

  'edit-attachments': {
    title: 'Editar Anexos',
    metaDescription: 'Gerencie anexos em documentos PDF. Visualize, renomeie e remova arquivos embutidos.',
    keywords: ['editar anexos pdf', 'gerenciar arquivos pdf', 'remover anexos', 'renomear anexos'],
    description: `
      <p>Editar Anexos permite gerenciar os arquivos embutidos dentro do seu PDF. Visualize todos os anexos, mude seus nomes ou remova aqueles que não são mais necessários.</p>
      <p>Perfeito para limpar documentos antes do envio ou organizar pacotes de arquivos PDFs profissionais.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o arquivo que contém os anexos.' },
      { step: 2, title: 'Gerenciar Arquivos', description: 'Renomeie ou delete os anexos conforme necessário.' },
      { step: 3, title: 'Salvar Alterações', description: 'Baixe a nova versão do PDF com os anexos atualizados.' },
    ],
    useCases: [
      { title: 'Limpeza de Arquivos', description: 'Remova anexos desnecessários para reduzir o tamanho do arquivo.', icon: 'trash-2' },
      { title: 'Organização Profissional', description: 'Dê nomes mais claros aos arquivos embutidos.', icon: 'edit' },
      { title: 'Auditoria de Conteúdo', description: 'Verifique quais arquivos estão ocultos no PDF antes de compartilhar.', icon: 'eye' },
    ],
    faq: [
      { question: 'Posso adicionar novos anexos aqui?', answer: 'Use a ferramenta "Adicionar Anexos" para incluir novos arquivos.' },
      { question: 'A remoção é permanente?', answer: 'Sim, uma vez removido e salvo, o anexo não pode ser recuperado daquele arquivo.' },
      { question: 'Posso ver o conteúdo dos anexos?', answer: 'Esta ferramenta foca no gerenciamento; use "Extrair Anexos" para visualizar o conteúdo.' },
    ],
  },

  'add-blank-page': {
    title: 'Adicionar Página em Branco',
    metaDescription: 'Insira páginas vazias em documentos PDF. Adicione páginas em qualquer posição.',
    keywords: ['adicionar página em branco', 'inserir página vazia', 'espaço no pdf', 'pdf página em branco'],
    description: `
      <p>Adicionar Página em Branco permite inserir páginas vazias no seu PDF em qualquer lugar. Perfeito para criar divisórias, adicionar espaço para anotações manuais ou ajustar o layout para impressão frente e verso.</p>
      <p>Você pode escolher o local exato entre as páginas existentes e a quantidade de páginas a serem inseridas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o documento onde deseja inserir a página.' },
      { step: 2, title: 'Escolher Posição', description: 'Defina após qual página a nova página em branco deve aparecer.' },
      { step: 3, title: 'Adicionar e Baixar', description: 'Gere o novo PDF com a página inserida e faça o download.' },
    ],
    useCases: [
      { title: 'Espaço para Notas', description: 'Adicione páginas vazias para que os alunos possam fazer anotações.', icon: 'edit-3' },
      { title: 'Divisórias de Seção', description: 'Use páginas em branco para separar capítulos de forma clara.', icon: 'minus' },
      { title: 'Ajuste de Impressão', description: 'Garanta que novos capítulos comecem na página direita em impressões duplex.', icon: 'printer' },
    ],
    faq: [
      { question: 'Qual o tamanho da página inserida?', answer: 'Por padrão, a página terá o mesmo tamanho das demais páginas do documento.' },
      { question: 'Posso adicionar várias páginas de uma vez?', answer: 'Sim, você pode especificar a quantidade desejada de páginas em branco.' },
      { question: 'Posso mudar a cor da página?', answer: 'Esta ferramenta cria páginas brancas puras; use ferramentas de edição para mudar cores de fundo.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotacionar PDF',
    metaDescription: 'Gire páginas de PDF. Gire 90, 180 ou 270 graus para corrigir a orientação.',
    keywords: ['rotacionar pdf', 'girar pdf', 'corrigir orientação pdf', 'virar página pdf'],
    description: `
      <p>Rotacionar PDF corrige a orientação do seu documento girando páginas em incrementos de 90 graus. Ideal para corrigir scans que ficaram de lado ou de cabeça para baixo.</p>
      <p>Você pode girar todas as páginas simultaneamente ou selecionar apenas aquelas que precisam de ajuste, preservando toda a qualidade original.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o arquivo ou selecione do seu computador.' },
      { step: 2, title: 'Ajustar Rotação', description: 'Use os botões para girar as páginas para a posição correta.' },
      { step: 3, title: 'Salvar e Baixar', description: 'Aplique as rotações e baixe o arquivo corrigido.' },
    ],
    useCases: [
      { title: 'Correção de Scans', description: 'Vire documentos digitalizados na orientação errada.', icon: 'rotate-cw' },
      { title: 'Páginas em Paisagem', description: 'Gire páginas específicas para facilitar a leitura no monitor.', icon: 'monitor' },
      { title: 'Padronização', description: 'Deixe todas as páginas do documento com a mesma orientação visual.', icon: 'layout' },
    ],
    faq: [
      { question: 'Posso girar páginas individualmente?', answer: 'Sim, você pode selecionar e girar cada página de forma independente.' },
      { question: 'A qualidade da imagem diminui?', answer: 'Não, a rotação é feita de forma técnica preservando os dados originais.' },
      { question: 'Posso girar 180 graus?', answer: 'Sim, basta clicar duas vezes no botão de 90 graus para inverter a página.' },
    ],
  },

  'combine-single-page': {
    title: 'Combinar em Página Única',
    metaDescription: 'Junte todas as páginas do PDF em uma única página longa e contínua.',
    keywords: ['combinar páginas', 'pdf página única', 'pdf contínuo', 'scroll pdf'],
    description: `
      <p>Combinar em Página Única costura todas as páginas do seu documento em uma única tira vertical longa. Ideal para visualização contínua na web ou para ler documentos sem interrupções de quebra de página.</p>
      <p>Você pode ajustar o espaçamento entre as páginas originais para criar um fluxo visual perfeito.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o arquivo que deseja unir.' },
      { step: 2, title: 'Ajustar Espaçamento', description: 'Defina a margem entre o final de uma página e o início da próxima.' },
      { step: 3, title: 'Combinar e Baixar', description: 'Gere o PDF de página infinita e faça o download.' },
    ],
    useCases: [
      { title: 'Documentos Web', description: 'Crie layouts de scroll perfeitos para sites e portfólios online.', icon: 'globe' },
      { title: 'Leitura Contínua', description: 'Leia manuais ou livros sem saltos entre as páginas.', icon: 'scroll' },
      { title: 'Formatos Longos', description: 'Transforme apresentações em um único Infográfico vertical.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Existe limite de páginas?', answer: 'Documentos extremamente longos podem ser limitados pela memória do seu navegador.' },
      { question: 'Isso é bom para imprimir?', answer: 'Não recomendado para impressão comum, pois cria uma página fora dos padrões de papel.' },
      { question: 'Posso adicionar linhas divisórias?', answer: 'Sim, você pode configurar o estilo da transição entre as páginas.' },
    ],
  },

  'view-metadata': {
    title: 'Visualizar Metadados',
    metaDescription: 'Veja as propriedades e metadados de documentos PDF. Verifique autor, datas e informações ocultas.',
    keywords: ['metadados pdf', 'propriedades documento', 'ver info pdf', 'detalhes pdf'],
    description: `
      <p>Visualizar Metadados exibe todas as informações técnicas e ocultas dos seus arquivos PDF. Descubra quem é o autor, quando foi criado, qual software foi usado e muito mais.</p>
      <p>Ferramenta essencial para auditoria de documentos e para verificar a integridade e origem de arquivos recebidos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o arquivo para ver suas informações.' },
      { step: 2, title: 'Ver Propriedades', description: 'Explore a lista completa de metadados padrão e avançados.' },
      { step: 3, title: 'Exportar Relatório', description: 'Se desejar, você pode baixar esses dados em formato JSON.' },
    ],
    useCases: [
      { title: 'Auditoria de Arquivos', description: 'Verifique se as propriedades do documento estão corretas antes de publicar.', icon: 'clipboard-check' },
      { title: 'Segurança', description: 'Confirme a data real de criação e modificação de um arquivo.', icon: 'shield' },
      { title: 'Informação Técnica', description: 'Saiba qual versão do PDF e produtor foram usados no arquivo.', icon: 'info' },
    ],
    faq: [
      { question: 'Quais dados são mostrados?', answer: 'Título, autor, assunto, palavras-chave, produtor e datas de criação/modificação.' },
      { question: 'Posso editar aqui?', answer: 'Esta ferramenta é apenas para visualização; use "Editar Metadados" para fazer alterações.' },
      { question: 'Metadados XMP são mostrados?', answer: 'Sim, exibimos tanto metadados clássicos quanto os modernos padrões XMP.' },
    ],
  },

  'add-metadata': {
    title: 'Adicionar Metadados',
    metaDescription: 'Adicione metadados a documentos PDF. Insira título, autor, assunto e palavras-chave.',
    keywords: ['adicionar metadados pdf', 'propriedades pdf', 'info documento', 'autor pdf'],
    description: `
      <p>Adicionar Metadados permite preencher ou atualizar as propriedades de identificação do seu PDF. Adicione informações como título oficial, nome do autor e palavras-chave para melhor organização.</p>
      <p>Metadados bem preenchidos ajudam na indexação em buscadores e na gestão de bibliotecas digitais.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o documento que deseja etiquetar.' },
      { step: 2, title: 'Inserir Informações', description: 'Preencha os campos de Autor, Título, Assunto e Palavras-chave.' },
      { step: 3, title: 'Salvar e Baixar', description: 'Aplique os novos metadados e baixe o PDF atualizado.' },
    ],
    useCases: [
      { title: 'Organização de Biblioteca', description: 'Facilite a busca de seus documentos por autor e título em seu computador.', icon: 'folder' },
      { title: 'Atribuição de Autoria', description: 'Garanta que seu nome esteja registrado como criador do arquivo PDF.', icon: 'user' },
      { title: 'SEO para PDFs', description: 'Melhore a visibilidade de seus relatórios em motores de busca como o Google.', icon: 'search' },
    ],
    faq: [
      { question: 'Quais campos posso adicionar?', answer: 'Título, Autor, Assunto, Palavras-chave, Criador e Produtor.' },
      { question: 'Sobrescreve dados antigos?', answer: 'Sim, se o campo já tiver uma informação, ela será substituída pela nova.' },
      { question: 'Os dados ficam visíveis no texto?', answer: 'Não, os metadados ficam embutidos no código do arquivo, visíveis apenas nas propriedades.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs para ZIP',
    metaDescription: 'Agrupe vários arquivos PDF em um arquivo ZIP comprimido. Facilite o envio de múltiplos documentos.',
    keywords: ['pdf para zip', 'comprimir pdfs', 'agrupar pdfs', 'arquivo zip pdf'],
    description: `
      <p>PDFs para ZIP empacota vários documentos PDF em um único arquivo comprimido (.zip). É a maneira mais eficiente de enviar dezenas de arquivos por e-mail ou economizar espaço de armazenamento.</p>
      <p>A ferramenta cria um pacote organizado contendo todos os seus arquivos, mantendo os nomes originais e reduzindo o volume total de dados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDFs', description: 'Selecione todos os arquivos que deseja agrupar.' },
      { step: 2, title: 'Configurar Arquivo', description: 'Dê um nome para o seu pacote ZIP.' },
      { step: 3, title: 'Criar e Baixar', description: 'Gere o arquivo ZIP e faça o download instantaneamente.' },
    ],
    useCases: [
      { title: 'Envio por E-mail', description: 'Envie 50 documentos como um único anexo leve.', icon: 'share-2' },
      { title: 'Backups Rápidos', description: 'Crie arquivos comprimidos para guardar versões antigas de seus PDFs.', icon: 'archive' },
      { title: 'Transferência de Arquivos', description: 'Facilite o upload de grandes volumes de documentos para a nuvem.', icon: 'mail' },
    ],
    faq: [
      { question: 'Qual a taxa de compressão?', answer: 'O ZIP costuma reduzir de 10% a 30% do tamanho total, dependendo do conteúdo dos PDFs.' },
      { question: 'Quantos arquivos posso colocar?', answer: 'Você pode agrupar até 100 documentos em um único arquivo ZIP.' },
      { question: 'Posso colocar senha no ZIP?', answer: 'No momento, geramos arquivos ZIP padrão sem senha.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterizar PDF',
    metaDescription: 'Divida páginas grandes de PDF em ladrilhos imprimíveis. Crie pôsteres gigantes a partir de páginas comuns.',
    keywords: ['posterizar pdf', 'ladrilho pdf', 'impressão grande formato', 'pôster pdf'],
    description: `
      <p>Posterizar PDF divide páginas de tamanho grande em pequenos quadrados (ladrilhos) que podem ser impressos em papel comum A4. Ao juntar as folhas, você terá um pôster gigante.</p>
      <p>Perfeito para imprimir mapas, esquemas técnicos ou obras de arte que não caberiam em uma única folha de impressora doméstica.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Selecione o arquivo de grande formato ou imagem que deseja ampliar.' },
      { step: 2, title: 'Configurar Ladrilhos', description: 'Defina o tamanho do pôster final e a margem de sobreposição para colagem.' },
      { step: 3, title: 'Criar e Baixar', description: 'Gere o PDF com todas as folhas numeradas para impressão e montagem.' },
    ],
    useCases: [
      { title: 'Decoração e Pôsteres', description: 'Crie murais e decorações grandes usando sua impressora de casa.', icon: 'image' },
      { title: 'Mapas e Plantas', description: 'Imprima plantas arquitetônicas em tamanho real divididas em folhas menores.', icon: 'map' },
      { title: 'Trabalhos Escolares', description: 'Faça banners informativos gigantes para apresentações em murais.', icon: 'maximize-2' },
    ],
    faq: [
      { question: 'O que é margem de sobreposição?', answer: 'É uma pequena área repetida nas bordas das folhas para ajudar você a colar uma folha na outra com perfeição.' },
      { question: 'As folhas são numeradas?', answer: 'Sim, as páginas do PDF resultante seguem a ordem correta para montagem.' },
      { question: 'Qual papel devo usar?', answer: 'Funciona melhor com papel A4 comum ou Carta.' },
    ],
  },

  'page-dimensions': {
    title: 'Dimensões da Página',
    metaDescription: 'Analise os tamanhos das páginas de um PDF. Veja as medidas exatas de cada folha do documento.',
    keywords: ['tamanho página pdf', 'dimensões pdf', 'medir pdf', 'tamanho folha pdf'],
    description: `
      <p>Dimensões da Página analisa e mostra o tamanho real de cada folha dentro do seu arquivo PDF. Veja medidas em polegadas, milímetros ou pontos de forma instantânea.</p>
      <p>Ideal para verificar se um documento está no formato A4, Carta ou algum formato personalizado antes de enviar para a gráfica.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o arquivo para ver o tamanho das páginas.' },
      { step: 2, title: 'Ver Medidas', description: 'Confira a tabela com as dimensões de cada página individualmente.' },
      { step: 3, title: 'Exportar Relatório', description: 'Baixe as dimensões em um arquivo para referência futura.' },
    ],
    useCases: [
      { title: 'Planejamento de Impressão', description: 'Evite erros na gráfica conferindo se as páginas têm o tamanho correto.', icon: 'printer' },
      { title: 'Análise de Documentos', description: 'Identifique páginas que estão fora do padrão em documentos mistos.', icon: 'search' },
      { title: 'Controle de Qualidade', description: 'Garanta que manuais e livros sigam as medidas especificadas no projeto.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Quais unidades de medida são usadas?', answer: 'Polegadas (in), Milímetros (mm), Centímetros (cm) e Pontos (pt).' },
      { question: 'Mostra orientação vertical/horizontal?', answer: 'Sim, a ferramenta indica claramente se a página está em Retrato ou Paisagem.' },
      { question: 'Posso corrigir o tamanho?', answer: 'Esta ferramenta é para análise; para mudar o tamanho, use "Corrigir Tamanho da Página".' },
    ],
  },

  'remove-restrictions': {
    title: 'Remover Restrições',
    metaDescription: 'Remova restrições de PDF. Desbloqueie permissões de impressão, cópia e edição.',
    keywords: ['remover restrições pdf', 'desbloquear pdf', 'permissões pdf', 'pdf sem restrição'],
    description: `
      <p>Remover Restrições desbloqueia PDFs que possuem restrições de permissão que impedem a impressão, cópia ou edição. Esta ferramenta remove as restrições de senha do proprietário, preservando o conteúdo do documento.</p>
      <p>Nota: Esta ferramenta não pode remover senhas de usuário que impedem a abertura do documento. Use "Descriptografar PDF" para arquivos protegidos por senha.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDF Restrito', description: 'Arraste o seu PDF restrito ou clique para selecionar.' },
      { step: 2, title: 'Remover Restrições', description: 'Clique em Remover para desbloquear o documento.' },
      { step: 3, title: 'Baixar', description: 'Baixe o PDF sem restrições.' },
    ],
    useCases: [
      { title: 'Habilitar Impressão', description: 'Desbloqueie PDFs que impedem a impressão.', icon: 'printer' },
      { title: 'Habilitar Cópia', description: 'Permita a seleção e cópia de texto.', icon: 'copy' },
      { title: 'Habilitar Edição', description: 'Remova restrições na edição do documento.', icon: 'edit' },
    ],
    faq: [
      { question: 'Isso é legal?', answer: 'Remover restrições de documentos que você possui ou tem direitos é geralmente legal.' },
      { question: 'Pode remover senhas de abertura?', answer: 'Não, use "Descriptografar PDF" para documentos protegidos por senha.' },
      { question: 'O conteúdo será afetado?', answer: 'Não, apenas as restrições são removidas; o conteúdo permanece inalterado.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ para PDF',
    metaDescription: 'Converta arquivos de quadrinhos (CBZ) para PDF. Preserve a ordem e a qualidade das imagens para quadrinhos digitais.',
    keywords: ['cbz para pdf', 'quadrinhos para pdf', 'converter cbz', 'conversor de quadrinhos', 'conversor cbz'],
    description: `
      <p>CBZ para PDF converte arquivos Comic Book Archive em documentos PDF. A ferramenta extrai todas as imagens do arquivo CBZ e as compila em um PDF, mantendo a ordem de leitura correta.</p>
      <p>Escolha entre várias opções de tamanho de página, incluindo dimensões originais da imagem ou tamanhos padronizados de quadrinhos. Perfeito para ler quadrinhos em dispositivos que suportam PDF, mas não CBZ.</p>
      <p>Toda a conversão acontece localmente no seu navegador, garantindo que seus quadrinhos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo CBZ', description: 'Carregue seu arquivo de quadrinhos .cbz.' },
      { step: 2, title: 'Selecionar Opções', description: 'Escolha o tamanho da página e as configurações de qualidade da imagem.' },
      { step: 3, title: 'Converter e Baixar', description: 'Converta para PDF e baixe seu quadrinho.' },
    ],
    useCases: [
      { title: 'Compatibilidade com E-Reader', description: 'Converta CBZ para PDF para e-readers que suportam apenas PDF.', icon: 'book' },
      { title: 'Arquivos de Quadrinhos', description: 'Crie arquivos PDF da sua coleção de quadrinhos digitais.', icon: 'archive' },
      { title: 'Preparação para Impressão', description: 'Converta quadrinhos digitais para PDF para impressão.', icon: 'printer' },
    ],
    faq: [
      { question: 'O que é o formato CBZ?', answer: 'CBZ é um arquivo ZIP contendo páginas de quadrinhos como arquivos de imagem, renomeado com a extensão .cbz.' },
      { question: 'A qualidade da imagem é preservada?', answer: 'Sim, as imagens são incorporadas em sua qualidade original no PDF.' },
      { question: 'Pastas aninhadas são suportadas?', answer: 'Sim, imagens de todas as pastas dentro do arquivo são extraídas e ordenadas.' },
    ],
  },

  'font-to-outline': {
    title: 'Fonte para Contorno',
    metaDescription: 'Remova dependências de fontes de documentos PDF convertendo páginas em imagens de alta qualidade. Garante compatibilidade em todos os sistemas.',
    keywords: ['fonte para contorno', 'contornar fontes', 'remover fontes', 'compatibilidade de fontes', 'achatar fontes pdf', 'remoção de fontes pdf'],
    description: `
      <p>Fonte para Contorno remove todas as dependências de fontes do seu PDF convertendo cada página em conteúdo rasterizado de alta qualidade. Isso garante que seu documento tenha a mesma aparência em qualquer sistema, mesmo que as fontes originais não estejam instaladas.</p>
      <p>A ferramenta renderiza cada página no DPI escolhido (150-600), removendo fontes incorporadas e preservando a aparência visual exata. Opcionalmente, você pode adicionar uma camada de texto invisível para manter a pesquisabilidade.</p>
      <p>Essencial para preparação de impressão, compatibilidade entre plataformas e evitar problemas de licenciamento de fontes ao compartilhar documentos. Todo o processamento acontece localmente no seu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Carregue o PDF contendo fontes que deseja remover.' },
      { step: 2, title: 'Configurar Qualidade', description: 'Escolha o DPI (300 recomendado para impressão, 150 para tela). Ative o texto pesquisável, se necessário.' },
      { step: 3, title: 'Converter e Baixar', description: 'Processe o arquivo e baixe o PDF independente de fontes.' },
    ],
    useCases: [
      { title: 'Preparação para Impressão', description: 'Elimine problemas de fontes em impressoras comerciais removendo todas as dependências de fontes.', icon: 'printer' },
      { title: 'Compartilhamento Multiplataforma', description: 'Compartilhe documentos que ficam idênticos em qualquer dispositivo, independentemente das fontes instaladas.', icon: 'share-2' },
      { title: 'Licenciamento de Fontes', description: 'Remova fontes incorporadas para evitar preocupações com licenciamento ao distribuir documentos.', icon: 'shield' },
    ],
    faq: [
      { question: 'Como isso funciona?', answer: 'A ferramenta renderiza cada página em alta resolução (no DPI escolhido) e recria o PDF a partir dessas imagens, removendo todas as dependências de fontes e preservando a aparência visual.' },
      { question: 'Posso selecionar texto após a conversão?', answer: 'Por padrão, não. O texto se torna parte da imagem. No entanto, você pode ativar "Preservar texto pesquisável" para adicionar uma camada de texto invisível para pesquisa e cópia.' },
      { question: 'Qual DPI devo usar?', answer: '300 DPI é recomendado para saída com qualidade de impressão. 150 DPI é suficiente para visualização em tela e produz arquivos menores. 600 DPI é para a mais alta qualidade, mas cria arquivos grandes.' },
      { question: 'O tamanho do arquivo aumentará?', answer: 'O tamanho depende do DPI e do conteúdo. 150 DPI geralmente produz arquivos menores, 300 DPI pode aumentar o tamanho, 600 DPI aumenta significativamente. A compressão é aplicada automaticamente.' },
      { question: 'Isso é reversível?', answer: 'Não, os dados das fontes são removidos permanentemente. Mantenha um backup do original se precisar de texto editável com as fontes originais.' },
      { question: 'E quanto aos gráficos vetoriais?', answer: 'Gráficos vetoriais (formas, linhas) no PDF original serão convertidos em raster junto com o texto. A qualidade visual é preservada no DPI escolhido.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitizar PDF',
    metaDescription: 'Remova dados ocultos de PDFs. Limpe metadados, scripts e informações confidenciais.',
    keywords: ['sanitizar pdf', 'limpar pdf', 'remover dados ocultos', 'privacidade pdf'],
    description: `
      <p>Sanitizar PDF remove dados ocultos e informações potencialmente sensíveis de seus documentos. Remova metadados, scripts incorporados, anexos, comentários e outros conteúdos ocultos.</p>
      <p>Essencial para preparar documentos para distribuição pública ou quando a privacidade é uma preocupação.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Selecionar o que remover', description: 'Escolha quais tipos de dados ocultos deseja remover.' },
      { step: 3, title: 'Sanitizar e Baixar', description: 'Clique em Sanitizar para limpar o PDF e faça o download.' },
    ],
    useCases: [
      { title: 'Lançamento Público', description: 'Prepare documentos para distribuição pública.', icon: 'globe' },
      { title: 'Proteção de Privacidade', description: 'Remova informações pessoais antes de compartilhar.', icon: 'shield' },
      { title: 'Conformidade de Segurança', description: 'Atenda aos requisitos de segurança para o manuseio de documentos.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Quais dados ocultos são removidos?', answer: 'Metadados, scripts, anexos, comentários, dados de formulário e camadas ocultas.' },
      { question: 'O conteúdo visível será afetado?', answer: 'Não, apenas os dados ocultos são removidos; o conteúdo visível permanece.' },
      { question: 'Isso é reversível?', answer: 'Não, os dados removidos não podem ser recuperados. Mantenha um backup do original.' },
    ],
  },

  'extract-tables': {
    title: 'Extrair Tabelas do PDF',
    metaDescription: 'Detecte e extraia tabelas de documentos PDF. Exporte para formatos JSON, Markdown ou CSV.',
    keywords: ['extrair tabelas', 'extração de tabelas pdf', 'pdf para csv', 'pdf para excel', 'detecção de tabelas'],
    description: `
      <p>Extrair Tabelas do PDF detecta dados tabulares em seus documentos PDF e os exporta em formatos estruturados. Escolha JSON para integração de dados, Markdown para documentação ou CSV para planilhas.</p>
      <p>A ferramenta usa algoritmos de detecção inteligentes para identificar estruturas de tabelas mesmo em documentos complexos. Especifique intervalos de páginas e ajuste os parâmetros de detecção para obter resultados ideais.</p>
      <p>Todo o processamento acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Carregue o PDF contendo tabelas que deseja extrair.' },
      { step: 2, title: 'Configurar Detecção', description: 'Defina o intervalo de páginas e os limites mínimos de colunas/linhas.' },
      { step: 3, title: 'Exportar e Baixar', description: 'Escolha o formato de saída (JSON/Markdown/CSV) e baixe.' },
    ],
    useCases: [
      { title: 'Análise de Dados', description: 'Extraia dados de tabelas para análise em planilhas ou bancos de dados.', icon: 'bar-chart' },
      { title: 'Processamento de Relatórios', description: 'Extraia tabelas de relatórios em PDF para processamento posterior.', icon: 'file-text' },
      { title: 'Documentação', description: 'Converta tabelas de PDF para Markdown para documentação técnica.', icon: 'book' },
    ],
    faq: [
      { question: 'Pode detectar tabelas complexas?', answer: 'A ferramenta funciona melhor com tabelas de grade simples. Células mescladas complexas podem exigir ajuste manual.' },
      { question: 'E se nenhuma tabela for encontrada?', answer: 'Tente ajustar o limite mínimo de colunas/linhas ou verifique se o PDF contém estruturas de tabelas reais.' },
      { question: 'Posso extrair de páginas específicas?', answer: 'Sim, especifique um intervalo de páginas para limitar a extração a determinadas páginas.' },
    ],
  },

  'flatten-pdf': {
    title: 'Achatar PDF',
    metaDescription: 'Achate formulários e anotações de PDF. Torne o conteúdo não editável.',
    keywords: ['achatar pdf', 'achatar formulários', 'achatar anotações', 'pdf não editável'],
    description: `
      <p>Achatar PDF converte elementos interativos como campos de formulário e anotações em conteúdo estático. O PDF achatado mantém a mesma aparência, mas não pode mais ser editado.</p>
      <p>Perfeito para finalizar formulários preenchidos, preservar anotações ou criar versões de documentos não editáveis.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste seu PDF com formulários ou anotações.' },
      { step: 2, title: 'Selecionar o que achatar', description: 'Escolha achatar formulários, anotações ou ambos.' },
      { step: 3, title: 'Achatar e Baixar', description: 'Clique em Achatar para criar o PDF estático.' },
    ],
    useCases: [
      { title: 'Finalizar Formulários', description: 'Bloqueie os dados do formulário preenchido para evitar alterações.', icon: 'lock' },
      { title: 'Preservar Anotações', description: 'Torne as anotações permanentes no documento.', icon: 'check-circle' },
      { title: 'Arquivar Documentos', description: 'Crie versões não editáveis para arquivamento.', icon: 'archive' },
    ],
    faq: [
      { question: 'O achatamento é reversível?', answer: 'Não, o achatamento é permanente. Mantenha um backup do original.' },
      { question: 'A aparência mudará?', answer: 'Não, o documento mantém a mesma aparência, mas não é mais interativo.' },
      { question: 'Isso reduz o tamanho do arquivo?', answer: 'Às vezes, pois elementos interativos são convertidos em conteúdo mais simples.' },
    ],
  },

  'remove-metadata': {
    title: 'Remover Metadados',
    metaDescription: 'Remova metadados de arquivos PDF. Remova autor, datas e propriedades do documento.',
    keywords: ['remover metadados pdf', 'limpar metadados', 'privacidade pdf', 'pdf anônimo'],
    description: `
      <p>Remover Metadados elimina todas as propriedades e metadados de seus arquivos PDF. Remova nomes de autores, datas de criação, informações de software e outros dados de identificação.</p>
      <p>Essencial para a privacidade ao compartilhar documentos ou quando os metadados podem revelar informações sensíveis.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Remover Metadados', description: 'Clique em Remover para eliminar todos os metadados.' },
      { step: 3, title: 'Baixar', description: 'Baixe o PDF sem metadados.' },
    ],
    useCases: [
      { title: 'Proteção de Privacidade', description: 'Remova informações pessoais antes de compartilhar.', icon: 'shield' },
      { title: 'Documentos Anônimos', description: 'Crie documentos sem atribuição de autor.', icon: 'user-x' },
      { title: 'Distribuição Limpa', description: 'Distribua documentos sem metadados internos.', icon: 'send' },
    ],
    faq: [
      { question: 'Quais metadados são removidos?', answer: 'Autor, título, assunto, palavras-chave, datas, criador e informações do produtor.' },
      { question: 'Os metadados XMP são removidos?', answer: 'Sim, tanto os metadados padrão quanto os XMP são eliminados.' },
      { question: 'O conteúdo será afetado?', answer: 'Não, apenas os metadados são removidos; o conteúdo do documento permanece inalterado.' },
    ],
  },

  'change-permissions': {
    title: 'Alterar Permissões',
    metaDescription: 'Modifique as permissões de PDF. Controle o acesso à impressão, cópia e edição.',
    keywords: ['permissões pdf', 'alterar acesso pdf', 'restringir pdf', 'segurança pdf'],
    description: `
      <p>Alterar Permissões modifica os controles de acesso em seus documentos PDF. Habilite ou desabilite permissões de impressão, cópia, edição e anotação.</p>
      <p>Defina uma senha de proprietário para impor essas restrições. Os destinatários podem visualizar o documento, mas ficam limitados nas ações que podem realizar.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Definir Permissões', description: 'Habilite ou desabilite impressão, cópia, edição e anotações.' },
      { step: 3, title: 'Aplicar e Baixar', description: 'Defina a senha do proprietário e baixe o PDF restrito.' },
    ],
    useCases: [
      { title: 'Impedir Cópia', description: 'Desive a cópia de texto para proteger o conteúdo.', icon: 'copy' },
      { title: 'Controlar Impressão', description: 'Restrinja ou permita a impressão de documentos.', icon: 'printer' },
      { title: 'Limitar Edição', description: 'Impeça modificações no documento.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Preciso de uma senha?', answer: 'Uma senha de proprietário é necessária para impor permissões.' },
      { question: 'As permissões podem ser removidas?', answer: 'Sim, com a senha do proprietário ou usando a ferramenta "Remover Restrições".' },
      { question: 'Todos os leitores de PDF são compatíveis?', answer: 'A maioria dos leitores de PDF respeita as permissões, mas alguns podem não as impor.' },
    ],
  },

  'ocg-manager': {
    title: 'Gerenciador de Camadas PDF (OCG)',
    metaDescription: 'Gerencie camadas de PDF (Grupos de Conteúdo Opcional). Visualize, alterne, adicione, exclua e renomeie camadas em seus documentos PDF.',
    keywords: ['camadas pdf', 'gerenciador ocg', 'grupos de conteúdo opcional', 'visibilidade de camadas pdf', 'gerenciar camadas pdf'],
    description: `
      <p>O Gerenciador de Camadas PDF permite visualizar e gerenciar Grupos de Conteúdo Opcional (OCG) em seus documentos PDF. As camadas OCG são usadas em desenhos técnicos, mapas e documentos complexos para organizar o conteúdo em camadas alternáveis.</p>
      <p>Visualize todas as camadas do seu PDF, alterne sua visibilidade, adicione novas camadas, exclua as indesejadas ou renomeie as existentes. Esta ferramenta é essencial para trabalhar com PDFs em camadas, como plantas arquitetônicas, exportações CAD e documentos prontos para impressão.</p>
      <p>Todo o processamento acontece localmente no seu navegador, garantindo que seus documentos permaneçam privados e seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Carregue um arquivo PDF que contenha camadas (OCG) ou ao qual deseja adicionar camadas.' },
      { step: 2, title: 'Visualizar Camadas', description: 'A ferramenta lista automaticamente todas as camadas encontradas no documento com seu status de visibilidade.' },
      { step: 3, title: 'Gerenciar Camadas', description: 'Alterne a visibilidade das camadas, renomeie, adicione novas ou exclua as indesejadas.' },
      { step: 4, title: 'Salvar e Baixar', description: 'Baixe seu PDF modificado com as alterações de camadas aplicadas.' },
    ],
    useCases: [
      { title: 'Desenhos Técnicos', description: 'Gerencie camadas em exportações CAD para mostrar/ocultar dimensões, anotações ou diferentes visualizações.', icon: 'ruler' },
      { title: 'Edição de Mapas', description: 'Alterne diferentes camadas de mapa, como topografia, estradas e rótulos, para impressões personalizadas.', icon: 'map' },
      { title: 'Preparação para Impressão', description: 'Prepare PDFs em camadas para impressão alternando as camadas apropriadas para diferentes versões.', icon: 'printer' },
    ],
    faq: [
      { question: 'O que são camadas de PDF (OCG)?', answer: 'Grupos de Conteúdo Opcional (OCG) são camadas em um PDF que podem ser mostradas ou ocultadas. São comumente usados em desenhos CAD, mapas e documentos complexos.' },
      { question: 'Por que meu PDF não mostra camadas?', answer: 'Nem todos os PDFs contêm camadas. As camadas são tipicamente adicionadas durante a criação do PDF a partir de software de design ou aplicativos CAD.' },
      { question: 'As alterações de camadas afetarão o conteúdo original?', answer: 'As alterações de visibilidade das camadas afetam apenas o que é exibido ou impresso. O conteúdo real permanece no documento.' },
    ],
  },

  'pdf-booklet': {
    title: 'Criador de Livretos PDF',
    metaDescription: 'Crie layouts de livreto a partir de PDF para impressão. Organize páginas para encadernação em canoa com múltiplas opções de grade.',
    keywords: ['livreto pdf', 'criador de livreto', 'imprimir livreto', 'encadernação em canoa', 'imposição'],
    description: `
      <p>O Criador de Livretos PDF organiza suas páginas de PDF em layouts de livreto prontos para impressão e dobra. Perfeito para criar brochuras, zines, livretos e publicações com encadernação em canoa.</p>
      <p>Escolha entre vários modos de grade (1x2, 2x2, 2x4, 4x4), tamanhos de papel e opções de orientação. A ferramenta lida automaticamente com a imposição de páginas para a sequência de dobra correta.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Carregue o documento PDF que deseja converter em um livreto.' },
      { step: 2, title: 'Escolher Layout', description: 'Selecione o modo de grade, tamanho do papel, orientação e opções de rotação.' },
      { step: 3, title: 'Criar e Baixar', description: 'Gere o layout do livreto e faça o download para impressão.' },
    ],
    useCases: [
      { title: 'Brochuras', description: 'Crie brochuras prontas para dobrar a partir de documentos PDF padrão.', icon: 'book-open' },
      { title: 'Zines', description: 'Produza zines independentes com a imposição de páginas correta.', icon: 'book' },
      { title: 'Programas de Eventos', description: 'Crie livretos de programas profissionais para eventos.', icon: 'calendar' },
    ],
    faq: [
      { question: 'O que é encadernação em canoa?', answer: 'É um método de encadernação onde as folhas dobradas são encaixadas umas nas outras e grampeadas pela dobra.' },
      { question: 'Qual modo de grade devo usar?', answer: '1x2 é o padrão para livretos. Use 2x2 ou maior para impressão múltipla para economizar papel.' },
      { question: 'Posso visualizar o layout?', answer: 'Sim, a ferramenta fornece uma visualização antes de gerar o livreto final.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterizar PDF',
    metaDescription: 'Converta páginas de PDF em imagens de alta qualidade. Exporte como PNG, JPEG ou WebP com configurações de DPI personalizadas.',
    keywords: ['rasterizar pdf', 'pdf para imagem', 'pdf para png', 'pdf para jpeg', 'converter páginas pdf'],
    description: `
      <p>Rasterizar PDF converte suas páginas de PDF em imagens rasterizadas de alta qualidade. Escolha entre os formatos de saída PNG, JPEG ou WebP com controle total sobre as configurações de DPI e qualidade.</p>
      <p>Perfeito para criar miniaturas, gráficos para mídias sociais ou arquivar conteúdo de PDF como imagens. Suporta seleção de intervalo de páginas e processamento em lote.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Configurar Saída', description: 'Selecione o DPI, o formato de saída (PNG/JPEG/WebP), a qualidade e o intervalo de páginas.' },
      { step: 3, title: 'Converter e Baixar', description: 'Processe as páginas e baixe as imagens individualmente ou como um arquivo ZIP.' },
    ],
    useCases: [
      { title: 'Mídias Sociais', description: 'Converta slides de PDF em imagens para postagem em mídias sociais.', icon: 'share-2' },
      { title: 'Miniaturas', description: 'Gere miniaturas de visualização para documentos PDF.', icon: 'image' },
      { title: 'Publicação na Web', description: 'Converta conteúdo de PDF em formatos de imagem amigáveis para a web.', icon: 'globe' },
    ],
    faq: [
      { question: 'Qual DPI devo usar?', answer: '72 DPI para tela, 150 DPI para uso geral, 300 DPI para qualidade de impressão.' },
      { question: 'Qual formato é o melhor?', answer: 'PNG para qualidade/transparência, JPEG para tamanho pequeno, WebP para uso moderno na web.' },
      { question: 'Posso converter páginas específicas?', answer: 'Sim, especifique intervalos de páginas como "1-5, 8, 10-15" para converter apenas essas páginas.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown para PDF',
    metaDescription: 'Converta arquivos Markdown em documentos PDF lindamente formatados. Suporte para GitHub Flavored Markdown e realce de sintaxe.',
    keywords: ['markdown para pdf', 'md para pdf', 'converter markdown', 'gfm para pdf', 'conversor markdown'],
    description: `
      <p>Markdown para PDF converte seus arquivos Markdown em documentos PDF com estilo profissional. Suporte para CommonMark e GitHub Flavored Markdown (GFM), incluindo tabelas, listas de tarefas e blocos de código.</p>
      <p>Escolha entre vários temas (claro, escuro, GitHub) e personalize o tamanho da página e as margens. Os blocos de código possuem realce de sintaxe para uma melhor leitura.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar Arquivo Markdown', description: 'Carregue seu arquivo .md ou .markdown.' },
      { step: 2, title: 'Escolher Tema', description: 'Selecione um tema visual e configure as definições de página.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o PDF estilizado e faça o download.' },
    ],
    useCases: [
      { title: 'Documentação', description: 'Converta arquivos README e documentos em PDFs compartilháveis.', icon: 'file-text' },
      { title: 'Exportação de Notas', description: 'Exporte notas em Markdown para PDF para impressão ou compartilhamento.', icon: 'edit-3' },
      { title: 'Relatórios', description: 'Crie relatórios a partir de Markdown com estilo profissional.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'O GitHub Flavored Markdown é suportado?', answer: 'Sim, tabelas, listas de tarefas, tachado e outros recursos do GFM são suportados.' },
      { question: 'Posso personalizar o estilo?', answer: 'Escolha entre temas predefinidos ou adicione CSS personalizado para controle total.' },
      { question: 'Os blocos de código são realçados?', answer: 'Sim, os blocos de código incluem realce de sintaxe para as linguagens mais comuns.' },
    ],
  },

  'pdf-reader': {
    title: 'Leitor de PDF',
    metaDescription: 'Leitor de PDF online gratuito. Visualize, navegue, amplie, rotacione e imprima documentos PDF diretamente no seu navegador.',
    keywords: ['leitor de pdf', 'visualizador de pdf', 'ver pdf online', 'ler pdf', 'visualizador de pdf no navegador'],
    description: `
      <p>O Leitor de PDF é um visualizador de PDF completo que permite ler e navegar em documentos PDF diretamente no seu navegador. Nenhuma instalação de software é necessária - basta carregar o seu PDF e começar a ler.</p>
      <p>Navegue entre as páginas, aplique zoom, rotacione a visualização e use o modo de tela cheia para uma leitura sem distrações. Você também pode imprimir documentos ou baixá-los para acesso offline.</p>
    `,
    howToUse: [
      { step: 1, title: 'Abrir seu PDF', description: 'Clique para carregar ou arraste e solte um arquivo PDF para abri-lo no leitor.' },
      { step: 2, title: 'Navegar nas Páginas', description: 'Use os controles de página para ir para a anterior ou próxima, ou saltar para uma página específica.' },
      { step: 3, title: 'Ajustar Visualização', description: 'Amplie ou reduza, rotacione a visualização ou entre no modo de tela cheia para uma leitura confortável.' },
      { step: 4, title: 'Imprimir ou Baixar', description: 'Imprima o documento ou faça o download para acesso offline quando necessário.' },
    ],
    useCases: [
      { title: 'Revisão de Documentos', description: 'Revise rapidamente documentos PDF sem instalar nenhum software.', icon: 'book-open' },
      { title: 'Leitura Móvel', description: 'Leia documentos PDF em qualquer dispositivo com um navegador web.', icon: 'smartphone' },
      { title: 'Visualização Rápida', description: 'Visualize PDFs antes de decidir baixá-los ou imprimi-los.', icon: 'eye' },
    ],
    faq: [
      { question: 'Meu documento está seguro?', answer: 'Sim, seu documento é processado inteiramente no seu navegador e nunca é carregado em nenhum servidor.' },
      { question: 'Posso anotar ou editar o PDF?', answer: 'Esta ferramenta é apenas para visualização. Use nossas ferramentas "Assinar PDF" ou "Anotar PDF" para editar.' },
      { question: 'Funciona em dispositivos móveis?', answer: 'Sim, o Leitor de PDF funciona em todos os dispositivos com um navegador web moderno.' },
    ],
  },

  'pdf-workflow': {
    title: 'Fluxo de Trabalho PDF',
    metaDescription: 'Crie fluxos de trabalho de PDF automatizados. Construa, salve e execute pipelines complexos de processamento de PDF no seu navegador.',
    keywords: ['fluxo de trabalho pdf', 'pdf automatizado', 'pipeline pdf', 'automação pdf', 'processamento em lote pdf'],
    description: `
      <p>O Fluxo de Trabalho PDF permite criar pipelines de processamento personalizados e automatizados para seus documentos PDF. Em vez de realizar várias etapas manualmente, você pode construir um fluxo visual que combina mesclagem, divisão, compressão e muito mais em uma única execução.</p>
      <p>Construa seu fluxo usando nosso construtor intuitivo de arrastar e soltar, salve-o para uso futuro e processe centenas de documentos de forma consistente e rápida. Seja para preparar relatórios mensais ou processar um lote de faturas, o Fluxo de Trabalho PDF agiliza suas tarefas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Abrir Construtor de Fluxo', description: 'Acesse o construtor visual para começar a criar seu pipeline de processamento de PDF.' },
      { step: 2, title: 'Adicionar e Conectar Ferramentas', description: 'Selecione as ferramentas necessárias (ex: Mesclar, Comprimir, Marca d\'água) e conecte-as na ordem desejada.' },
      { step: 3, title: 'Configurar Ajustes', description: 'Defina parâmetros para cada ferramenta no pipeline, como nível de compressão ou texto da marca d\'água.' },
      { step: 4, title: 'Executar e Salvar', description: 'Execute seu fluxo com seus documentos e salve o modelo para uso futuro.' },
    ],
    useCases: [
      { title: 'Automação de Relatórios', description: 'Automatize a montagem, branding e otimização de relatórios financeiros mensais.', icon: 'file-bar-chart' },
      { title: 'Otimização em Lote', description: 'Comprima e linearize arquivos inteiros de documentos PDF para distribuição na web.', icon: 'archive' },
      { title: 'Branding Consistente', description: 'Aplique marcas d\'água, cabeçalhos e rodapés de forma consistente em todos os documentos da empresa.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'Existe um limite para as etapas do fluxo?', answer: 'Você pode adicionar até 20 etapas de processamento a um único pipeline de fluxo de trabalho.' },
      { question: 'Posso salvar meus fluxos de trabalho?', answer: 'Sim, os fluxos podem ser salvos como modelos no seu navegador para tarefas recorrentes.' },
      { question: 'Meus dados permanecerão privados?', answer: 'Com certeza. Todo o processamento é feito localmente no seu navegador e nenhum arquivo sai do seu dispositivo.' },
    ],
  },

  'html-to-pdf': {
    title: 'HTML para PDF',
    metaDescription: 'Converta arquivos HTML e código HTML bruto em documentos PDF profissionais. A conversão no lado do cliente garante total privacidade.',
    keywords: ['html para pdf', 'converter html', 'página web para pdf', 'conversor html', 'código para pdf'],
    description: `
      <p>HTML para PDF converte seus arquivos HTML ou código HTML bruto em documentos PDF de alta qualidade. Se você tem um arquivo HTML no seu computador ou deseja escrever código HTML diretamente, esta ferramenta cria PDFs profissionais instantaneamente.</p>
      <p>Os recursos incluem visualização ao vivo, vários tamanhos de página (A4, Carta, Ofício), orientações retrato e paisagem e configurações de qualidade ajustáveis. Perfeito para converter páginas da web, relatórios, faturas ou qualquer conteúdo HTML.</p>
    `,
    howToUse: [
      { step: 1, title: 'Escolher Modo de Entrada', description: 'Selecione se deseja escrever o código HTML diretamente ou carregar um arquivo HTML do seu dispositivo.' },
      { step: 2, title: 'Inserir ou Carregar HTML', description: 'Escreva seu código HTML no editor com visualização ao vivo ou carregue um arquivo .html existente.' },
      { step: 3, title: 'Configurar Opções', description: 'Selecione o tamanho da página (A4, Carta, Ofício), orientação (Retrato/Paisagem) e nível de qualidade.' },
      { step: 4, title: 'Converter e Baixar', description: 'Clique em Converter para PDF para gerar seu documento e baixe o resultado.' },
    ],
    useCases: [
      { title: 'Arquivamento de Páginas Web', description: 'Converta páginas da web e conteúdo HTML em PDF para armazenamento e compartilhamento offline.', icon: 'globe' },
      { title: 'Geração de Relatórios', description: 'Crie relatórios profissionais em PDF a partir de modelos HTML com estilo personalizado.', icon: 'file-text' },
      { title: 'Criação de Faturas', description: 'Converta faturas e recibos em HTML para o formato PDF para clientes.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Suporta estilização CSS?', answer: 'Sim, o suporte completo ao estilo CSS está incluído, incluindo cores, fontes, layouts, tabelas e gradientes.' },
      { question: 'Meu código HTML é mantido em sigilo?', answer: 'Com certeza. Toda a conversão acontece no seu navegador. O seu HTML nunca sai do seu dispositivo.' },
      { question: 'Posso incluir imagens no meu HTML?', answer: 'Sim, imagens incorporadas (base64) e estilos em linha são totalmente suportados.' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF para HTML',
    metaDescription: 'Converta documentos PDF em código HTML limpo e semântico. Preserve o layout e a estilização.',
    keywords: ['pdf para html', 'converter pdf para html', 'conversor pdf', 'pdf para código', 'extrair html de pdf'],
    description: `
      <p>PDF para HTML converte seus documentos PDF em código HTML limpo e semântico que você pode usar em sites ou outras aplicações. A ferramenta extrai texto e estrutura enquanto preserva o layout original o máximo possível.</p>
      <p>Escolha entre três modos de saída: Estilizado (preserva o layout visual), Estruturado (HTML semântico com estrutura básica) ou Simples (conteúdo bruto).</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar PDF', description: 'Arraste o seu arquivo PDF ou clique para carregar o documento que deseja converter.' },
      { step: 2, title: 'Escolher Estilo de Saída', description: 'Selecione "Estilizado" para fidelidade visual, "Estruturado" para semântica limpa ou "Simples" para texto bruto.' },
      { step: 3, title: 'Configurar Opções', description: 'Alterne opções como "Preservar layout", "Incluir quebras de página" e "Incluir estilos CSS".' },
      { step: 4, title: 'Converter e Baixar', description: 'Clique em Converter para gerar o código HTML, depois baixe o arquivo ou copie o código.' },
    ],
    useCases: [
      { title: 'Extração de Conteúdo Web', description: 'Extraia conteúdo de relatórios ou artigos em PDF para publicação em sites.', icon: 'layout' },
      { title: 'Migração de Documentos', description: 'Converta documentação legada em PDF para o formato HTML moderno e pesquisável.', icon: 'database' },
      { title: 'Criação de E-books', description: 'Converta livros em PDF em HTML fluido para criação de EPUB ou aplicativos de leitura.', icon: 'book' },
    ],
    faq: [
      { question: 'O HTML é responsivo?', answer: 'O modo "Estruturado" produz HTML semântico que flui naturalmente, enquanto o modo "Estilizado" tenta preservar o layout fixo do PDF.' },
      { question: 'As imagens são extraídas?', answer: 'Atualmente, a ferramenta foca na extração de texto e estrutura. Estamos trabalhando no suporte à extração de imagens.' },
      { question: 'Suporta PDFs de várias páginas?', answer: 'Sim, a ferramenta processa todas as páginas e pode incluir marcadores de quebra de página entre elas.' },
    ],
  },

  'pdf-to-heic': {
    title: 'PDF para HEIC',
    metaDescription: 'Converta páginas de PDF em imagens HEIC de alta qualidade. Preserve detalhes com o formato de imagem eficiente da Apple.',
    keywords: ['pdf para heic', 'converter pdf para heif', 'pdf para imagem apple', 'exportar pdf como heic'],
    description: `
      <p>PDF para HEIC converte suas páginas de PDF no formato de imagem HEIC de alta eficiência da Apple. O HEIC oferece qualidade de imagem superior em tamanhos de arquivo menores em comparação com o JPEG.</p>
      <p>Personalize a qualidade de saída e o DPI para atender às suas necessidades. Perfeito para economizar espaço enquanto mantém a alta resolução de fotos e gráficos extraídos de PDFs.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Configurar Ajustes', description: 'Selecione o intervalo de páginas, qualidade e DPI para a saída HEIC.' },
      { step: 3, title: 'Converter e Baixar', description: 'Processe as páginas e baixe suas imagens HEIC.' },
    ],
    useCases: [
      { title: 'Eficiência de Armazenamento', description: 'Salve imagens de alta qualidade com tamanhos de arquivo muito menores que o JPG.', icon: 'hard-drive' },
      { title: 'Ecossistema Apple', description: 'Converta PDFs em um formato nativo para dispositivos e software Apple.', icon: 'smartphone' },
      { title: 'Alta Qualidade', description: 'Mantenha melhor profundidade de cor e detalhes do que o JPEG padrão.', icon: 'image' },
    ],
    faq: [
      { question: 'O que é HEIC?', answer: 'HEIC é um contêiner de imagem de alta eficiência que fornece melhor compressão do que o JPEG.' },
      { question: 'Funcionará no Windows?', answer: 'A maioria dos sistemas Windows 10/11 modernos suporta HEIC, ou você pode precisar da extensão HEVC.' },
      { question: 'Posso converter várias páginas?', answer: 'Sim, todas as páginas selecionadas são convertidas e podem ser baixadas como um ZIP.' },
    ],
  },

  'pdf-to-psd': {
    title: 'PDF para PSD',
    metaDescription: 'Converta PDF em arquivos Adobe Photoshop (PSD). Mantenha camadas e gráficos de alta fidelidade para edição.',
    keywords: ['pdf para psd', 'converter pdf para photoshop', 'pdf para camadas', 'exportar pdf como psd'],
    description: `
      <p>PDF para PSD converte seus documentos PDF em arquivos do Adobe Photoshop. Esta ferramenta tenta preservar camadas e a estrutura do texto, facilitando a edição de designs de PDF no Photoshop.</p>
      <p>A conversão de alta fidelidade garante que os gráficos e o texto permaneçam nítidos para trabalhos de design profissional. Perfeito para designers que precisam retrabalhar ativos de PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Configurar PSD', description: 'Selecione a resolução e se deseja tentar a preservação de camadas.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo PSD e faça o download para edição.' },
    ],
    useCases: [
      { title: 'Edição de Design', description: 'Abra designs de PDF no Photoshop com camadas editáveis.', icon: 'palette' },
      { title: 'Recuperação de Gráficos', description: 'Extraia gráficos de alta qualidade para uso em novos projetos de design.', icon: 'image' },
      { title: 'Impressão Profissional', description: 'Prepare ativos de PDF para fluxos de trabalho de impressão profissional em PSD.', icon: 'printer' },
    ],
    faq: [
      { question: 'Todas as camadas são preservadas?', answer: 'A ferramenta tenta preservar camadas lógicas, mas estruturas complexas de PDF podem ser achatadas.' },
      { question: 'O PSD é compatível?', answer: 'Sim, a saída é um arquivo PSD padrão compatível com Adobe Photoshop e GIMP.' },
      { question: 'Tamanho máximo do arquivo?', answer: 'Suportamos PDFs de até 100MB para a transição para PSD.' },
    ],
  },

  'pdf-to-xps': {
    title: 'PDF para XPS',
    metaDescription: 'Converta PDF para o formato XML Paper Specification (XPS). Mantenha a precisão vetorial e o layout do documento.',
    keywords: ['pdf para xps', 'converter pdf para oxps', 'pdf para arquivo microsoft', 'exportar pdf como xps'],
    description: `
      <p>PDF para XPS converte seus documentos PDF no formato XML Paper Specification da Microsoft. O XPS é um padrão aberto e livre de royalties para documentos de layout fixo.</p>
      <p>Mantém a precisão vetorial e o layout exato para arquivamento de documentos e impressão em ambientes Windows. Perfeito para armazenamento de longo prazo de documentos comerciais.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Selecionar Opções', description: 'Escolha entre os formatos XPS padrão ou OpenXPS.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo XPS e faça o download.' },
    ],
    useCases: [
      { title: 'Arquivamento no Windows', description: 'Salve documentos no formato de arquivamento nativo do Windows.', icon: 'archive' },
      { title: 'Fidelidade de Impressão', description: 'Garanta a impressão de alta fidelidade em fluxos de trabalho baseados em Windows.', icon: 'printer' },
      { title: 'Conformidade com Padrões', description: 'Converta para padrões abertos como OpenXPS para troca de documentos.', icon: 'file-check' },
    ],
    faq: [
      { question: 'O que é XPS?', answer: 'O XPS é a alternativa da Microsoft ao PDF, usada para impressão e arquivamento de documentos com layout fixo.' },
      { question: 'Posso ver XPS no Mac?', answer: 'Visualizar XPS no macOS requer software de terceiros ou conversão de volta para PDF.' },
      { question: 'Diferença entre PDF e XPS?', answer: 'Ambos são de layout fixo; o XPS é baseado em XML e é nativo à impressão do Windows.' },
    ],
  },

  'pdf-to-rtf': {
    title: 'PDF para RTF',
    metaDescription: 'Converta PDF para o Formato Rich Text (RTF). Extraia texto e formatação básica para facilitar o processamento de texto.',
    keywords: ['pdf para rtf', 'converter pdf para rich text', 'extrair texto de pdf', 'conversor pdf para rtf'],
    description: `
      <p>PDF para RTF extrai o conteúdo do seu PDF e o salva como um arquivo Rich Text Format. O RTF é altamente compatível com quase todos os softwares de processamento de texto.</p>
      <p>A ferramenta preserva a formatação básica, os estilos de fonte e o alinhamento, tornando o conteúdo facilmente editável. Perfeito para quando você não precisa da complexidade total de um arquivo DOCX.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Extrair', description: 'A ferramenta analisará e transformará o conteúdo do PDF em RTF.' },
      { step: 3, title: 'Baixar RTF', description: 'Baixe seu documento Rich Text editável.' },
    ],
    useCases: [
      { title: 'Edição Simples', description: 'Extraia e edite rapidamente o texto em qualquer processador de texto.', icon: 'edit' },
      { title: 'Suporte Multi-App', description: 'Use o texto extraído em softwares de escrita mais antigos ou especializados.', icon: 'copy' },
      { title: 'Limpeza de Layout', description: 'Extraia o conteúdo de texto enquanto remove elementos de layout complexos de PDF.', icon: 'type' },
    ],
    faq: [
      { question: 'Suporta imagens?', answer: 'O suporte básico a RTF inclui imagens, mas documentos com foco em texto produzem melhores resultados.' },
      { question: 'As fontes serão preservadas?', answer: 'Fontes padrão são preservadas; fontes incorporadas personalizadas podem ser mapeadas para fontes de sistema semelhantes.' },
      { question: 'RTF é melhor que TXT?', answer: 'Sim, o RTF mantém negrito, itálico e o layout básico, ao contrário do texto simples.' },
    ],
  },

  'pdf-to-epub': {
    title: 'PDF para EPUB',
    metaDescription: 'Converta PDF em e-books EPUB. Texto fluido para uma leitura confortável em e-readers e dispositivos móveis.',
    keywords: ['pdf para epub', 'converter pdf para ebook', 'pdf para kindle', 'pdf fluido'],
    description: `
      <p>PDF para EPUB converte PDFs de layout fixo em e-books fluidos. Isso torna a leitura em telas pequenas, como telefones e e-readers, muito mais confortável, pois o texto se ajusta à tela.</p>
      <p>A ferramenta tenta identificar cabeçalhos, capítulos e imagens para criar um e-book estruturado. Perfeito para converter livros em PDF e documentos longos para leitura móvel.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu livro em PDF ou clique para selecionar.' },
      { step: 2, title: 'Ajustes', description: 'Insira metadados do livro, como Título e Autor para o EPUB.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo EPUB e faça o download para o seu e-reader.' },
    ],
    useCases: [
      { title: 'Leitura Móvel', description: 'Leia conteúdo de PDF confortavelmente em smartphones e tablets.', icon: 'smartphone' },
      { title: 'Suporte a E-Reader', description: 'Converta PDFs para Kindle, Kobo e outros dispositivos de leitura eletrônica.', icon: 'book' },
      { title: 'Acessibilidade', description: 'Melhore a legibilidade com fontes e tamanhos de texto ajustáveis no EPUB.', icon: 'user-check' },
    ],
    faq: [
      { question: 'A formatação mudará?', answer: 'Sim, o EPUB é fluido, então layouts fixos de PDF são convertidos em uma estrutura flexível.' },
      { question: 'Suporta Kindle?', answer: 'Sim, a maioria dos Kindles modernos suporta EPUB diretamente, ou você pode usar nosso conversor de MOBI.' },
      { question: 'Pode converter PDFs digitalizados?', answer: 'PDFs digitalizados exigem OCR primeiro para extrair o texto para a conversão de e-book.' },
    ],
  },

  'pdf-to-mobi': {
    title: 'PDF para MOBI',
    metaDescription: 'Converta PDF em e-books MOBI. Otimizado para dispositivos Kindle com formatação adequada.',
    keywords: ['pdf para mobi', 'converter pdf para kindle', 'conversor mobi', 'ebook pdf'],
    description: `
      <p>PDF para MOBI converte seus documentos no formato MOBI/AZW usado pelos dispositivos Amazon Kindle. Isso proporciona uma experiência de leitura nativa em modelos de Kindle mais antigos e especializados.</p>
      <p>A ferramenta otimiza o fluxo de texto e o posicionamento de imagens para telas de Kindle. Ideal para documentos longos, manuais e livros armazenados em formato PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Meta Info', description: 'Adicione título do livro, autor e imagem de capa opcional.' },
      { step: 3, title: 'Converter e Baixar', description: 'Crie o arquivo MOBI e faça o download para o seu Kindle.' },
    ],
    useCases: [
      { title: 'Leitura no Kindle', description: 'Aproveite livros em PDF no Kindle com suporte a recursos nativos.', icon: 'book-open' },
      { title: 'Leitura Offline', description: 'Converta documentos para leitura em dispositivos dedicados de tinta eletrônica.', icon: 'wifi-off' },
      { title: 'Suporte Legado', description: 'Suporte para e-readers mais antigos que preferem MOBI em vez de EPUB.', icon: 'history' },
    ],
    faq: [
      { question: 'O que é MOBI?', answer: 'MOBI é um formato de e-book originalmente usado pelo Mobipocket e adotado pela Amazon para o Kindle.' },
      { question: 'Diferença do EPUB?', answer: 'MOBI é proprietário da Amazon/Kindle; EPUB é o padrão aberto da indústria.' },
      { question: 'Como transferir para o Kindle?', answer: 'Conecte via USB ou use o serviço "Send to Kindle" da Amazon.' },
    ],
  },

  'pdf-to-djvu': {
    title: 'PDF para DJVU',
    metaDescription: 'Converta PDF para o formato DJVU. Compressão especializada para documentos digitalizados de alta resolução.',
    keywords: ['pdf para djvu', 'converter pdf para scan', 'documentos de alta compressão', 'conversor djvu'],
    description: `
      <p>PDF para DJVU converte seus documentos para o formato DjVu, que foi projetado cientificamente para documentos digitalizados. O DjVu oferece taxas de compressão extremas para páginas coloridas de alta resolução.</p>
      <p>Perfeito para bibliotecas digitais e arquivos de livros digitalizados onde você precisa de alta qualidade, mas tamanhos de arquivo muito pequenos. Mantém a estrutura do documento e as camadas de texto.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu PDF (idealmente digitalizado) ou clique para selecionar.' },
      { step: 2, title: 'Selecionar Qualidade', description: 'Escolha o nível de compressão e a resolução para a saída DJVU.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo DJVU e faça o download para arquivamento.' },
    ],
    useCases: [
      { title: 'Bibliotecas Digitais', description: 'Obtenha economias de espaço significativas para grandes coleções digitalizadas.', icon: 'library' },
      { title: 'Arquivos Históricos', description: 'Armazene imagens de alta resolução de documentos históricos de forma eficiente.', icon: 'archive' },
      { title: 'Compartilhamento de Digitalizações', description: 'Envie documentos digitalizados de alta qualidade através de largura de banda limitada.', icon: 'share' },
    ],
    faq: [
      { question: 'O que é DJVU?', answer: 'O DjVu é um formato de documento que usa segmentação avançada para comprimir imagens digitalizadas muito bem.' },
      { question: 'É melhor que PDF?', answer: 'Para documentos digitalizados, o DjVu frequentemente fornece uma compressão 5-10x melhor que o PDF padrão.' },
      { question: 'Como visualizar DJVU?', answer: 'Use visualizadores dedicados como o DjView ou extensões de navegador.' },
    ],
  },

  'pdf-to-fb2': {
    title: 'PDF para FB2',
    metaDescription: 'Converta PDF em FictionBook (FB2). Formato de e-book baseado em XML semântico para leitura estruturada.',
    keywords: ['pdf para fb2', 'conversor fictionbook', 'ebook pdf xml', 'converter pdf para texto estruturado'],
    description: `
      <p>PDF para FB2 converte documentos no formato FictionBook (XML). O FB2 é um formato semântico que descreve a estrutura de um livro em vez de sua aparência, tornando-o altamente versátil para aplicativos de leitura.</p>
      <p>Esta ferramenta extrai texto, metadados e imagens enquanto mantém a estrutura lógica. Amplamente utilizado em várias comunidades de leitura eletrônica por sua natureza aberta e semântica.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Info do Livro', description: 'Verifique metadados como gênero, autor e título do livro.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo FB2 e faça o download para o seu leitor favorito.' },
    ],
    useCases: [
      { title: 'Leitura Semântica', description: 'Use leitores que estilizam livros com base em suas preferências pessoais.', icon: 'settings' },
      { title: 'Formatos Abertos', description: 'Mantenha sua biblioteca em um formato semântico totalmente aberto e baseado em XML.', icon: 'unlock' },
      { title: 'Sync Entre Dispositivos', description: 'Arquivos FB2 são leves e fáceis de sincronizar em vários dispositivos de leitura.', icon: 'refresh-ccw' },
    ],
    faq: [
      { question: 'O que é FB2?', answer: 'O FictionBook (FB2) é um formato de e-book baseado em XML que se concentra na marcação semântica.' },
      { question: 'Onde é popular?', answer: 'O FB2 é muito popular na Europa Oriental e entre fãs de padrões de documentos abertos.' },
      { question: 'Posso adicionar uma capa?', answer: 'Sim, você pode especificar ou extrair uma imagem de capa durante a conversão.' },
    ],
  },

  'pdf-to-email': {
    title: 'PDF para E-mail (EML)',
    metaDescription: 'Converta PDF em arquivos de e-mail EML. Extraia texto e imagens para um formato de rascunho de e-mail.',
    keywords: ['pdf para e-mail', 'pdf para eml', 'extrair pdf para mail', 'conversor de rascunho pdf'],
    description: `
      <p>PDF para E-mail converte o conteúdo do seu PDF em um arquivo de rascunho de e-mail (.eml). Ele extrai o texto como o corpo e tenta colocar imagens como ativos em linha ou anexos.</p>
      <p>Perfeito para transformar newsletters, relatórios ou memorandos em PDF em rascunhos de e-mail que você pode abrir no Outlook, Gmail ou Apple Mail.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu arquivo PDF ou clique para selecionar.' },
      { step: 2, title: 'Ajustes de Rascunho', description: 'Adicione assunto padrão e informações do remetente, se desejar.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo EML e abra-o no seu cliente de e-mail.' },
    ],
    useCases: [
      { title: 'Migração de Newsletter', description: 'Transforme newsletters em PDF em campanhas de e-mail rapidamente.', icon: 'mail' },
      { title: 'Compartilhamento de Briefing', description: 'Compartilhe briefings em PDF como o corpo real de um e-mail.', icon: 'send' },
      { title: 'Extração de Conteúdo', description: 'Converta relatórios em PDF em relatórios de e-mail editáveis.', icon: 'file-text' },
    ],
    faq: [
      { question: 'O que é um arquivo EML?', answer: 'O EML é um formato padrão de arquivo para mensagens de e-mail contendo cabeçalhos e o corpo do conteúdo.' },
      { question: 'Quais apps de e-mail o abrem?', answer: 'Outlook, Apple Mail, Thunderbird e quase todos os clientes de e-mail de desktop suportam EML.' },
      { question: 'Como a formatação é tratada?', answer: 'A ferramenta converte blocos de PDF em seções HTML para manter o layout básico no corpo do e-mail.' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF para CBZ',
    metaDescription: 'Converta PDF para Comic Book Archive (CBZ). Empacote as páginas do documento como um arquivo de imagem para leitores de quadrinhos.',
    keywords: ['pdf para cbz', 'documento para quadrinhos', 'arquivo de imagem pdf', 'criador de quadrinhos'],
    description: `
      <p>PDF para CBZ converte seus documentos em um Comic Book Archive. Cada página de PDF é renderizada como uma imagem de alta qualidade e empacotada em um arquivo ZIP com uma extensão .cbz.</p>
      <p>Ideal para converter quadrinhos digitais, livros de arte ou manuais armazenados como PDF para uso em aplicativos especializados de leitura de quadrinhos como Chunky ou CDisplayEx.</p>
    `,
    howToUse: [
      { step: 1, title: 'Carregar seu PDF', description: 'Arraste o seu PDF ou clique para selecionar.' },
      { step: 2, title: 'Ajustes de Qualidade', description: 'Selecione o formato da imagem (JPG/PNG) e a resolução para as páginas de quadrinhos.' },
      { step: 3, title: 'Converter e Baixar', description: 'Gere o arquivo CBZ e faça o download para o seu leitor de quadrinhos.' },
    ],
    useCases: [
      { title: 'Leitura de Quadrinhos', description: 'Veja PDFs em apps otimizados para navegação de imagens de alto desempenho.', icon: 'image' },
      { title: 'Portfólios de Arte', description: 'Converta PDFs de livros de arte em coleções de imagens gerenciáveis.', icon: 'palette' },
      { title: 'Empacotamento de Ativos', description: 'Extraia todas as páginas como imagens organizadas em um único arquivo.', icon: 'package' },
    ],
    faq: [
      { question: 'O que é CBZ?', answer: 'Um arquivo CBZ é estritamente um arquivo ZIP contendo imagens, usado principalmente por leitores de histórias em quadrinhos.' },
      { question: 'Qual formato é o melhor?', answer: 'JPG para tamanho de arquivo menor, PNG para qualidade máxima e sem artefatos de compressão.' },
      { question: 'Posso selecionar páginas?', answer: 'Sim, você pode converter todas as páginas ou um intervalo específico para o arquivo CBZ.' },
    ],
  },
};