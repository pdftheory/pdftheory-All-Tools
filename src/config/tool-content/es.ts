/**
 * Spanish Tool Content / Contenido de Herramientas en Español
 * Requirements: 3.1 - Multi-language support
 * 
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Spanish tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEs: Record<string, ToolContent> = {
  // ==================== HERRAMIENTAS POPULARES ====================
  'pdf-multi-tool': {
    title: 'Herramienta Múltiple PDF',
    metaDescription: 'Editor PDF todo en uno: combina, divide, organiza, elimina, rota y extrae páginas en una sola herramienta.',
    keywords: ['herramienta múltiple pdf', 'editor pdf', 'combinar pdf', 'dividir pdf', 'organizar pdf'],
    description: '<p>La Herramienta Múltiple PDF es tu solución integral para todas las tareas de gestión de páginas PDF. Combina múltiples operaciones en una única interfaz intuitiva.</p><p>Todo el procesamiento ocurre en tu navegador, asegurando privacidad completa.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta tu archivo PDF o haz clic para seleccionar.' },
      { step: 2, title: 'Elige la Operación', description: 'Selecciona entre combinar, dividir, organizar, eliminar, rotar o extraer páginas.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Haz clic en procesar y descarga tu PDF modificado.' },
    ],
    useCases: [
      { title: 'Preparación de Documentos', description: 'Prepara documentos eliminando páginas innecesarias y reordenando contenido.', icon: 'file-check' },
      { title: 'Ensamblaje de Informes', description: 'Combina secciones de informes en un único documento profesional.', icon: 'book-open' },
      { title: 'Gestión de Archivos', description: 'Divide archivos grandes y extrae páginas relevantes.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo procesar?', answer: 'Puedes procesar hasta 10 archivos PDF simultáneamente, con un tamaño máximo de 500MB.' },
      { question: '¿Se conservan los marcadores?', answer: 'Sí, al combinar PDFs se conservan los marcadores existentes.' },
      { question: '¿Hay límite de páginas?', answer: 'No hay límite estricto. La herramienta maneja documentos con cientos de páginas.' },
    ],
  },

  'merge-pdf': {
    title: 'Combinar PDF',
    metaDescription: 'Combina múltiples archivos PDF en un solo documento. Combinador de PDF gratuito con reordenamiento.',
    keywords: ['combinar pdf', 'unir pdf', 'fusionar pdf', 'combinador pdf'],
    description: '<p>Combinar PDF te permite unir múltiples documentos PDF en un solo archivo. Sube tus archivos, ordénalos y combínalos en un documento cohesivo.</p><p>Todo ocurre localmente en tu navegador para máxima privacidad.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivos PDF', description: 'Arrastra y suelta múltiples archivos PDF o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena los Archivos', description: 'Arrastra las miniaturas para ordenarlos como desees.' },
      { step: 3, title: 'Combina y Descarga', description: 'Haz clic en Combinar y descarga tu PDF unificado.' },
    ],
    useCases: [
      { title: 'Combinar Informes', description: 'Une informes mensuales en un documento anual.', icon: 'file-text' },
      { title: 'Crear Portafolios', description: 'Combina documentos de proyectos en un portafolio profesional.', icon: 'briefcase' },
      { title: 'Consolidar Facturas', description: 'Une facturas para propósitos contables.', icon: 'receipt' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo combinar?', answer: 'Hasta 100 archivos PDF con un tamaño total de 500MB.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad original sin compresión.' },
      { question: '¿Puedo combinar PDFs protegidos?', answer: 'Necesitas descifrarlos primero con nuestra herramienta Descifrar PDF.' },
    ],
  },

  'rotate-custom': {
    title: 'Rotar por Grados Personalizados',
    metaDescription: 'Rota páginas PDF en cualquier ángulo. Rotación precisa para enderezar documentos escaneados.',
    keywords: ['rotar pdf ángulo personalizado', 'enderezar pdf', 'deskew pdf', 'rotación personalizada pdf'],
    description: '<p>Rotar por Grados Personalizados te da control preciso sobre la orientación de tus páginas PDF. A diferencia de las herramientas estándar que solo rotan en incrementos de 90 grados, esta herramienta te permite rotar páginas en cualquier ángulo específico.</p><p>Perfecto para enderezar documentos escaneados torcidos o ajustar diagramas. Puedes corregir páginas individuales o aplicar la misma rotación a todo el documento.</p><p>Todo el procesamiento ocurre localmente en tu navegador, asegurando privacidad total mientras logras una alineación perfecta.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Sube el archivo PDF con las páginas que necesitas rotar.' },
      { step: 2, title: 'Establece el Ángulo', description: 'Ingresa el grado exacto de rotación para cada página, o un ángulo para todas.' },
      { step: 3, title: 'Vista Previa y Ajuste', description: 'Usa la vista previa en tiempo real para asegurar una alineación perfecta.' },
      { step: 4, title: 'Aplica y Descarga', description: 'Haz clic en Rotar para aplicar los cambios y descargar tu PDF enderezado.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Endereza páginas escaneadas que quedaron torcidas.', icon: 'scan' },
      { title: 'Dibujos Técnicos', description: 'Ajusta la orientación de planos y diagramas con precisión.', icon: 'ruler' },
      { title: 'Diseños Creativos', description: 'Crea diseños únicos rotando páginas en ángulos artísticos.', icon: 'pen-tool' },
    ],
    faq: [
      { question: '¿Puedo rotar con decimales?', answer: 'Actualmente soporta grados enteros, pero estamos trabajando en precisión decimal.' },
      { question: '¿Afecta el contenido?', answer: 'El contenido se rota visualmente. El tamaño de página se ajusta automáticamente.' },
      { question: '¿Puedo rotar solo una página?', answer: 'Sí, puedes establecer un ángulo personalizado para cualquier página individual.' },
    ],
  },

  'grid-combine': {
    title: 'Combinar en Cuadrícula PDF',
    metaDescription: 'Combinar múltiples archivos PDF en páginas individuales con un diseño de cuadrícula flexible. Organice 2, 4, 6, 9 o más PDF por página con bordes y espaciado.',
    keywords: ['combinar cuadrícula', 'fusionar pdf cuadrícula', 'collage pdf', 'múltiples pdf una página', 'pdf n-up', 'cuadrícula pdf'],
    description: `
      <p>La herramienta Combinar en Cuadrícula ofrece una forma única de fusionar múltiples archivos PDF separados en páginas individuales. A diferencia de la herramienta estándar "Fusionar PDF" que simplemente añade páginas, o la herramienta "N-Up" que reorganiza páginas de un solo documento, Combinar en Cuadrícula toma múltiples archivos de entrada y los organiza uno al lado del otro en un diseño de cuadrícula personalizable.</p>
      <p>Puede elegir entre varias configuraciones de cuadrícula como 2x1, 2x2, 3x3, etc. Esto es perfecto para comparar múltiples documentos, crear folletos de diferentes fuentes o imprimir versiones compactas de varios archivos.</p>
      <p>Personalice la salida controlando el tamaño de página, la orientación, los márgenes, el espaciado y los bordes. Todo el procesamiento ocurre localmente en su navegador para máxima privacidad.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivos PDF', description: 'Suba dos o más archivos PDF que desee combinar. Puede reorganizarlos en el orden deseado.' },
      { step: 2, title: 'Elegir Diseño de Cuadrícula', description: 'Seleccione el diseño de cuadrícula deseado (ej: 2x2 para 4 archivos por página, 3x3 para 9 archivos por página).' },
      { step: 3, title: 'Personalizar Apariencia', description: 'Ajuste configuraciones como tamaño de página (A4, Carta), orientación, espaciado entre elementos y bordes.' },
      { step: 4, title: 'Combinar y Descargar', description: 'Haga clic en "Combinar PDFs" para generar su nuevo documento con diseño de cuadrícula y descargue el resultado.' },
    ],
    useCases: [
      { title: 'Comparación Visual', description: 'Coloque diferentes versiones de un diseño o documento una al lado de la otra en una sola página para una fácil comparación.', icon: 'layout-grid' },
      { title: 'Imprimir Folletos', description: 'Combine múltiples documentos cortos o diapositivas en una sola hoja para ahorrar costos de impresión.', icon: 'printer' },
      { title: 'Creación de Portafolios', description: 'Muestre múltiples archivos de proyecto en una vista general de cuadrícula limpia y organizada.', icon: 'image' },
    ],
    faq: [
      { question: '¿En qué se diferencia de N-Up?', answer: 'N-Up toma páginas de UN PDF y las pone en una hoja. Combinar en Cuadrícula toma MÚLTIPLES ARCHIVOS PDF DIFERENTES y los pone en una hoja.' },
      { question: '¿Cuántos archivos puedo combinar?', answer: 'Puede combinar hasta 100 archivos dependiendo de la memoria de su navegador, pero los diseños como 4x4 acomodan hasta 16 archivos por página.' },
      { question: '¿Puedo añadir bordes?', answer: 'Sí, puede añadir bordes alrededor de cada archivo PDF y personalizar el color del borde.' },
    ],
  },

  'split-pdf': {
    title: 'Dividir PDF',
    metaDescription: 'Divide archivos PDF en múltiples documentos. Extrae páginas específicas o divide por rangos.',
    keywords: ['dividir pdf', 'separar pdf', 'extraer páginas', 'divisor pdf'],
    description: '<p>Dividir PDF te permite separar un documento PDF en múltiples archivos. Perfecto para extraer capítulos o crear archivos individuales.</p><p>Procesamiento local para máxima seguridad.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el archivo a dividir.' },
      { step: 2, title: 'Define los Rangos', description: 'Ingresa los números de página o rangos (ej: 1-5, 8, 10-15).' },
      { step: 3, title: 'Divide y Descarga', description: 'Haz clic en Dividir y descarga los archivos resultantes.' },
    ],
    useCases: [
      { title: 'Extraer Capítulos', description: 'Divide libros en capítulos individuales.', icon: 'book' },
      { title: 'Separar Escaneos', description: 'Divide documentos escaneados en archivos individuales.', icon: 'copy' },
      { title: 'Crear Material', description: 'Extrae páginas específicas para material de apoyo.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Puedo dividir en páginas individuales?', answer: 'Sí, selecciona "Dividir cada página" para crear archivos de una página.' },
      { question: '¿Qué pasa con los marcadores?', answer: 'Los marcadores dentro del rango extraído se conservan.' },
      { question: '¿Puedo dividir PDFs protegidos?', answer: 'Primero descifra el PDF con nuestra herramienta Descifrar PDF.' },
    ],
  },


  'edit-pdf': {
    title: 'Editar PDF',
    metaDescription: 'Edita archivos PDF en línea. Añade texto, imágenes, anotaciones y formas.',
    keywords: ['editar pdf', 'editor pdf', 'anotar pdf', 'añadir texto pdf'],
    description: '<p>Editar PDF proporciona herramientas completas para modificar y anotar documentos. Añade texto, imágenes, formas y comentarios.</p><p>Edición local para privacidad total.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a editar.' },
      { step: 2, title: 'Selecciona Herramienta', description: 'Elige: texto, resaltado, formas, imágenes o comentarios.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF editado.' },
    ],
    useCases: [
      { title: 'Revisión de Documentos', description: 'Añade comentarios y marcas para revisión colaborativa.', icon: 'message-square' },
      { title: 'Completar Formularios', description: 'Rellena campos y añade firmas sin imprimir.', icon: 'edit-3' },
      { title: 'Redacción', description: 'Elimina información sensible antes de compartir.', icon: 'eye-off' },
    ],
    faq: [
      { question: '¿Puedo editar texto original?', answer: 'Esta herramienta añade anotaciones. Para editar texto existente, usa el documento fuente.' },
      { question: '¿Las ediciones son permanentes?', answer: 'Puedes aplanarlas para hacerlas permanentes o mantenerlas editables.' },
      { question: '¿Hay función deshacer?', answer: 'Sí, soporta deshacer/rehacer y restablecer al original.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG a PDF',
    metaDescription: 'Convierte imágenes JPG a PDF. Combina múltiples JPG en un documento PDF.',
    keywords: ['jpg a pdf', 'jpeg a pdf', 'convertir jpg', 'imagen a pdf'],
    description: '<p>JPG a PDF convierte tus imágenes JPEG en documentos PDF. Combina múltiples imágenes en un único PDF profesional.</p><p>Conversión local para privacidad.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes', description: 'Arrastra y suelta archivos JPG o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena y Configura', description: 'Reordena imágenes y selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Haz clic en Convertir y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Álbumes de Fotos', description: 'Crea álbumes PDF de fotos para compartir.', icon: 'image' },
      { title: 'Escaneo de Documentos', description: 'Convierte fotos de documentos en PDFs.', icon: 'camera' },
      { title: 'Portafolios', description: 'Compila trabajos fotográficos en un portafolio.', icon: 'folder' },
    ],
    faq: [
      { question: '¿Cuántas imágenes puedo convertir?', answer: 'Hasta 100 imágenes JPG en un único PDF.' },
      { question: '¿Se preserva la calidad?', answer: 'Sí, las imágenes se incrustan en calidad original.' },
      { question: '¿Puedo establecer diferentes tamaños?', answer: 'Se aplica un tamaño uniforme. Las imágenes se escalan manteniendo proporción.' },
    ],
  },

  'sign-pdf': {
    title: 'Firmar PDF',
    metaDescription: 'Añade firmas electrónicas a documentos PDF. Dibuja, escribe o sube tu firma.',
    keywords: ['firmar pdf', 'firma electrónica', 'e-firma', 'firma digital'],
    description: '<p>Firmar PDF te permite añadir firmas electrónicas a tus documentos. Crea tu firma dibujando, escribiendo o subiendo una imagen.</p><p>Firma local para seguridad.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a firmar.' },
      { step: 2, title: 'Crea tu Firma', description: 'Dibuja, escribe o sube una imagen de firma.' },
      { step: 3, title: 'Coloca y Descarga', description: 'Posiciona la firma y descarga el PDF firmado.' },
    ],
    useCases: [
      { title: 'Firma de Contratos', description: 'Firma contratos electrónicamente sin imprimir.', icon: 'file-signature' },
      { title: 'Completar Formularios', description: 'Añade firma a formularios y documentos oficiales.', icon: 'clipboard' },
      { title: 'Aprobaciones', description: 'Firma documentos en procesos de aprobación.', icon: 'check-circle' },
    ],
    faq: [
      { question: '¿Es legalmente vinculante?', answer: 'Las firmas electrónicas son reconocidas en la mayoría de países. Consulta regulaciones locales.' },
      { question: '¿Puedo guardar mi firma?', answer: 'Sí, se guarda en el almacenamiento local del navegador.' },
      { question: '¿Puedo añadir múltiples firmas?', answer: 'Sí, añade tantas firmas como necesites en cualquier página.' },
    ],
  },

  'crop-pdf': {
    title: 'Recortar PDF',
    metaDescription: 'Recorta páginas PDF para eliminar márgenes y áreas no deseadas.',
    keywords: ['recortar pdf', 'cortar pdf', 'eliminar márgenes', 'redimensionar pdf'],
    description: '<p>Recortar PDF elimina márgenes y áreas no deseadas de tus páginas. Útil para eliminar espacios en blanco o estandarizar dimensiones.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a recortar.' },
      { step: 2, title: 'Define el Área', description: 'Arrastra los controles o ingresa medidas precisas.' },
      { step: 3, title: 'Recorta y Descarga', description: 'Aplica el recorte y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Eliminar Márgenes', description: 'Recorta márgenes excesivos de documentos escaneados.', icon: 'maximize-2' },
      { title: 'Enfocar Contenido', description: 'Recorta para resaltar áreas específicas.', icon: 'target' },
      { title: 'Estandarizar Páginas', description: 'Haz que todas las páginas tengan el mismo tamaño.', icon: 'square' },
    ],
    faq: [
      { question: '¿El recorte es permanente?', answer: 'Sí, el contenido fuera del área se elimina. Guarda una copia de seguridad.' },
      { question: '¿Puedo recortar páginas diferentes?', answer: 'Sí, puedes aplicar diferentes configuraciones a cada página.' },
      { question: '¿Afecta la calidad del texto?', answer: 'No, el contenido restante mantiene su calidad original.' },
    ],
  },

  'extract-pages': {
    title: 'Extraer Páginas',
    metaDescription: 'Extrae páginas específicas de archivos PDF. Guarda páginas individuales como nuevos documentos.',
    keywords: ['extraer páginas pdf', 'guardar páginas', 'copiar páginas pdf'],
    description: '<p>Extraer Páginas te permite seleccionar y guardar páginas específicas de un PDF como nuevos archivos. Perfecto para crear extractos.</p><p>Extracción local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Páginas', description: 'Haz clic en miniaturas o ingresa números de página.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Crea el nuevo PDF con las páginas seleccionadas.' },
    ],
    useCases: [
      { title: 'Crear Extractos', description: 'Extrae páginas relevantes para documentos de referencia.', icon: 'file-minus' },
      { title: 'Compartir Contenido', description: 'Extrae páginas específicas para compartir.', icon: 'share-2' },
      { title: 'Archivar', description: 'Guarda páginas clave para archivo a largo plazo.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Puedo extraer páginas no consecutivas?', answer: 'Sí, selecciona cualquier combinación de páginas.' },
      { question: '¿Se conservan los marcadores?', answer: 'Los marcadores a páginas extraídas se conservan.' },
      { question: '¿Puedo extraer de múltiples PDFs?', answer: 'Esta herramienta trabaja con un PDF. Usa Combinar PDF para múltiples archivos.' },
    ],
  },

  'organize-pdf': {
    title: 'Organizar PDF',
    metaDescription: 'Reordena, duplica y elimina páginas PDF. Arrastra y suelta para reorganizar.',
    keywords: ['organizar pdf', 'reordenar páginas', 'reorganizar pdf'],
    description: '<p>Organizar PDF proporciona una interfaz de arrastrar y soltar para reorganizar páginas. Reordena, duplica o elimina páginas fácilmente.</p><p>Organización local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Reorganiza', description: 'Arrastra miniaturas para reordenar, duplicar o eliminar.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF reorganizado.' },
    ],
    useCases: [
      { title: 'Corregir Orden', description: 'Corrige el orden de páginas escaneadas incorrectamente.', icon: 'arrow-up-down' },
      { title: 'Orden Personalizado', description: 'Ordena páginas para presentaciones específicas.', icon: 'list' },
      { title: 'Eliminar Páginas', description: 'Elimina páginas en blanco o irrelevantes.', icon: 'trash-2' },
    ],
    faq: [
      { question: '¿Puedo duplicar páginas?', answer: 'Sí, duplica cualquier página y colócala donde quieras.' },
      { question: '¿Hay función deshacer?', answer: 'Sí, soporta deshacer/rehacer y restablecer al original.' },
      { question: '¿Puedo organizar múltiples PDFs?', answer: 'Trabaja con un PDF. Primero combínalos con Combinar PDF.' },
    ],
  },

  'delete-pages': {
    title: 'Eliminar Páginas',
    metaDescription: 'Elimina páginas no deseadas de archivos PDF. Selecciona y elimina páginas específicas.',
    keywords: ['eliminar páginas pdf', 'quitar páginas', 'borrar páginas pdf'],
    description: '<p>Eliminar Páginas te permite quitar páginas no deseadas de tus documentos PDF. Elimina páginas en blanco o contenido innecesario.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Páginas', description: 'Haz clic en miniaturas o ingresa números de página.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Elimina las páginas seleccionadas y descarga.' },
    ],
    useCases: [
      { title: 'Eliminar Páginas en Blanco', description: 'Limpia documentos eliminando páginas vacías.', icon: 'file-x' },
      { title: 'Eliminar Contenido Sensible', description: 'Elimina páginas confidenciales antes de compartir.', icon: 'shield' },
      { title: 'Optimizar Documentos', description: 'Elimina páginas desactualizadas o irrelevantes.', icon: 'filter' },
    ],
    faq: [
      { question: '¿Puedo recuperar páginas eliminadas?', answer: 'No, la eliminación es permanente. Guarda una copia de seguridad.' },
      { question: '¿Puedo eliminar múltiples páginas?', answer: 'Sí, selecciona y elimina múltiples páginas a la vez.' },
      { question: '¿Afecta los marcadores?', answer: 'Los marcadores a páginas eliminadas se remueven.' },
    ],
  },


  // ==================== EDITAR Y ANOTAR ====================
  'bookmark': {
    title: 'Editar Marcadores',
    metaDescription: 'Añade, edita y organiza marcadores en archivos PDF para navegación fácil.',
    keywords: ['marcadores pdf', 'editar marcadores', 'índice pdf', 'navegación pdf'],
    description: '<p>Editar Marcadores te permite crear y gestionar marcadores en tus documentos PDF para facilitar la navegación.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Gestiona Marcadores', description: 'Añade, edita, elimina o reorganiza marcadores.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Crear Índice', description: 'Añade marcadores para crear un índice navegable.', icon: 'bookmark' },
      { title: 'Organizar Documentos', description: 'Estructura documentos largos con marcadores.', icon: 'list' },
      { title: 'Mejorar Accesibilidad', description: 'Facilita la navegación en documentos extensos.', icon: 'navigation' },
    ],
    faq: [
      { question: '¿Puedo crear marcadores anidados?', answer: 'Sí, puedes crear jerarquías de marcadores.' },
      { question: '¿Los marcadores funcionan en todos los lectores?', answer: 'Sí, son compatibles con todos los lectores PDF estándar.' },
      { question: '¿Puedo importar marcadores?', answer: 'Puedes crear marcadores manualmente o desde el índice existente.' },
    ],
  },

  'table-of-contents': {
    title: 'Tabla de Contenidos',
    metaDescription: 'Genera automáticamente una tabla de contenidos para documentos PDF.',
    keywords: ['tabla de contenidos pdf', 'índice pdf', 'toc pdf', 'generar índice'],
    description: '<p>Tabla de Contenidos genera automáticamente un índice navegable para tus documentos PDF basado en encabezados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona niveles de encabezado y estilo.' },
      { step: 3, title: 'Genera y Descarga', description: 'Crea la tabla de contenidos y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Largos', description: 'Añade navegación a manuales y libros.', icon: 'book' },
      { title: 'Informes', description: 'Crea índices para informes profesionales.', icon: 'file-text' },
      { title: 'Documentación', description: 'Mejora la navegación en documentación técnica.', icon: 'file-code' },
    ],
    faq: [
      { question: '¿Cómo detecta los encabezados?', answer: 'Analiza el formato del texto para identificar encabezados.' },
      { question: '¿Puedo personalizar el estilo?', answer: 'Sí, puedes ajustar fuente, tamaño y formato.' },
      { question: '¿Dónde se inserta la tabla?', answer: 'Puedes elegir insertarla al inicio o en una página específica.' },
    ],
  },

  'page-numbers': {
    title: 'Números de Página',
    metaDescription: 'Añade números de página a documentos PDF con formato personalizable.',
    keywords: ['números de página pdf', 'numerar páginas', 'paginación pdf'],
    description: '<p>Números de Página te permite añadir numeración a tus documentos PDF con posición y formato personalizables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona posición, fuente, tamaño y formato.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade los números y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Documentos Profesionales', description: 'Añade numeración a informes y propuestas.', icon: 'file-text' },
      { title: 'Libros y Manuales', description: 'Numera páginas de publicaciones.', icon: 'book' },
      { title: 'Documentos Legales', description: 'Añade numeración requerida para documentos oficiales.', icon: 'scale' },
    ],
    faq: [
      { question: '¿Puedo excluir páginas?', answer: 'Sí, puedes excluir portadas u otras páginas específicas.' },
      { question: '¿Qué formatos están disponibles?', answer: 'Números arábigos, romanos, letras y formatos personalizados.' },
      { question: '¿Puedo cambiar la posición?', answer: 'Sí, elige entre 9 posiciones diferentes en la página.' },
    ],
  },

  'add-watermark': {
    title: 'Añadir Marca de Agua',
    metaDescription: 'Añade marcas de agua de texto o imagen a documentos PDF.',
    keywords: ['marca de agua pdf', 'watermark pdf', 'añadir marca', 'proteger pdf'],
    description: '<p>Añadir Marca de Agua te permite insertar marcas de agua de texto o imagen en tus documentos PDF para protección o branding.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Marca de Agua', description: 'Ingresa texto o sube imagen, ajusta posición y opacidad.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade la marca de agua y descarga.' },
    ],
    useCases: [
      { title: 'Proteger Documentos', description: 'Marca documentos como confidenciales o borradores.', icon: 'shield' },
      { title: 'Branding', description: 'Añade logo de empresa a documentos.', icon: 'image' },
      { title: 'Derechos de Autor', description: 'Protege contenido con marcas de copyright.', icon: 'copyright' },
    ],
    faq: [
      { question: '¿Puedo usar imágenes?', answer: 'Sí, soporta PNG, JPG y otros formatos de imagen.' },
      { question: '¿Puedo ajustar la opacidad?', answer: 'Sí, ajusta la transparencia de 0% a 100%.' },
      { question: '¿Se aplica a todas las páginas?', answer: 'Puedes aplicar a todas o seleccionar páginas específicas.' },
    ],
  },

  'header-footer': {
    title: 'Encabezado y Pie de Página',
    metaDescription: 'Añade encabezados y pies de página personalizados a documentos PDF.',
    keywords: ['encabezado pdf', 'pie de página pdf', 'header footer pdf'],
    description: '<p>Encabezado y Pie de Página te permite añadir texto personalizado en la parte superior e inferior de tus páginas PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Contenido', description: 'Ingresa texto para encabezado y/o pie de página.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade el contenido y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Documentos Corporativos', description: 'Añade nombre de empresa y fecha.', icon: 'building' },
      { title: 'Informes', description: 'Incluye título del documento y números de página.', icon: 'file-text' },
      { title: 'Documentos Legales', description: 'Añade información de confidencialidad.', icon: 'scale' },
    ],
    faq: [
      { question: '¿Puedo usar variables?', answer: 'Sí, incluye fecha, número de página y total de páginas.' },
      { question: '¿Puedo personalizar la fuente?', answer: 'Sí, ajusta fuente, tamaño, color y alineación.' },
      { question: '¿Puedo tener diferentes encabezados?', answer: 'Puedes configurar diferentes para páginas pares e impares.' },
    ],
  },

  'invert-colors': {
    title: 'Invertir Colores',
    metaDescription: 'Invierte los colores de documentos PDF para modo oscuro o efectos especiales.',
    keywords: ['invertir colores pdf', 'modo oscuro pdf', 'negativo pdf'],
    description: '<p>Invertir Colores cambia los colores de tu PDF a su negativo, útil para modo oscuro o efectos visuales.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona páginas y opciones de inversión.' },
      { step: 3, title: 'Invierte y Descarga', description: 'Aplica la inversión y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Modo Oscuro', description: 'Crea versiones de modo oscuro para lectura nocturna.', icon: 'moon' },
      { title: 'Accesibilidad', description: 'Mejora la legibilidad para usuarios con sensibilidad a la luz.', icon: 'eye' },
      { title: 'Efectos Visuales', description: 'Crea efectos de negativo para diseño.', icon: 'palette' },
    ],
    faq: [
      { question: '¿Afecta las imágenes?', answer: 'Sí, todos los elementos visuales se invierten.' },
      { question: '¿Puedo invertir páginas específicas?', answer: 'Sí, selecciona las páginas a invertir.' },
      { question: '¿Es reversible?', answer: 'Sí, invierte de nuevo para restaurar los colores originales.' },
    ],
  },

  'background-color': {
    title: 'Color de Fondo',
    metaDescription: 'Cambia el color de fondo de páginas PDF.',
    keywords: ['color de fondo pdf', 'fondo pdf', 'cambiar fondo'],
    description: '<p>Color de Fondo te permite cambiar el color de fondo de tus páginas PDF para mejorar la legibilidad o estética.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Color', description: 'Elige el color de fondo deseado.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Cambia el fondo y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Lectura Cómoda', description: 'Usa fondos crema o sepia para reducir fatiga visual.', icon: 'eye' },
      { title: 'Branding', description: 'Aplica colores corporativos a documentos.', icon: 'palette' },
      { title: 'Impresión', description: 'Prepara documentos con fondos específicos para impresión.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Puedo usar cualquier color?', answer: 'Sí, selecciona cualquier color del selector o ingresa código hex.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo cambia el fondo. El contenido permanece intacto.' },
      { question: '¿Puedo aplicar a páginas específicas?', answer: 'Sí, selecciona las páginas a modificar.' },
    ],
  },

  'text-color': {
    title: 'Cambiar Color de Texto',
    metaDescription: 'Cambia el color del texto en documentos PDF.',
    keywords: ['color de texto pdf', 'cambiar texto pdf', 'modificar texto'],
    description: '<p>Cambiar Color de Texto te permite modificar el color del texto en tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Colores', description: 'Elige el color original y el nuevo color.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Cambia el color y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Accesibilidad', description: 'Mejora el contraste para mejor legibilidad.', icon: 'eye' },
      { title: 'Branding', description: 'Aplica colores corporativos al texto.', icon: 'palette' },
      { title: 'Impresión', description: 'Prepara documentos para impresión en blanco y negro.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Puedo cambiar colores específicos?', answer: 'Sí, selecciona el color a reemplazar y el nuevo color.' },
      { question: '¿Afecta las imágenes?', answer: 'No, solo afecta el texto del documento.' },
      { question: '¿Funciona con todos los PDFs?', answer: 'Funciona mejor con PDFs que contienen texto real, no imágenes de texto.' },
    ],
  },

  'add-stamps': {
    title: 'Añadir Sellos',
    metaDescription: 'Añade sellos predefinidos o personalizados a documentos PDF.',
    keywords: ['sellos pdf', 'stamps pdf', 'añadir sello', 'marcar pdf'],
    description: '<p>Añadir Sellos te permite insertar sellos predefinidos como "Aprobado", "Confidencial" o sellos personalizados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Sello', description: 'Elige un sello predefinido o crea uno personalizado.' },
      { step: 3, title: 'Coloca y Descarga', description: 'Posiciona el sello y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Aprobación de Documentos', description: 'Marca documentos como aprobados o rechazados.', icon: 'check-circle' },
      { title: 'Confidencialidad', description: 'Añade sellos de confidencial o uso interno.', icon: 'lock' },
      { title: 'Estado de Documentos', description: 'Marca como borrador, final o revisado.', icon: 'tag' },
    ],
    faq: [
      { question: '¿Qué sellos predefinidos hay?', answer: 'Incluye Aprobado, Rechazado, Confidencial, Borrador, Final y más.' },
      { question: '¿Puedo crear sellos personalizados?', answer: 'Sí, crea sellos con texto e imagen personalizados.' },
      { question: '¿Puedo añadir múltiples sellos?', answer: 'Sí, añade tantos sellos como necesites.' },
    ],
  },

  'remove-annotations': {
    title: 'Eliminar Anotaciones',
    metaDescription: 'Elimina todas las anotaciones y comentarios de documentos PDF.',
    keywords: ['eliminar anotaciones pdf', 'quitar comentarios', 'limpiar pdf'],
    description: '<p>Eliminar Anotaciones quita todos los comentarios, resaltados, notas y otras anotaciones de tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Tipos', description: 'Elige qué tipos de anotaciones eliminar.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las anotaciones y descarga el PDF limpio.' },
    ],
    useCases: [
      { title: 'Limpiar Documentos', description: 'Elimina marcas de revisión antes de publicar.', icon: 'eraser' },
      { title: 'Privacidad', description: 'Quita comentarios antes de compartir externamente.', icon: 'shield' },
      { title: 'Versión Final', description: 'Crea versiones limpias de documentos revisados.', icon: 'file-check' },
    ],
    faq: [
      { question: '¿Qué tipos de anotaciones se eliminan?', answer: 'Comentarios, resaltados, notas adhesivas, dibujos y más.' },
      { question: '¿Puedo eliminar selectivamente?', answer: 'Sí, elige qué tipos de anotaciones eliminar.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia de seguridad antes de eliminar.' },
    ],
  },

  'form-filler': {
    title: 'Rellenar Formularios',
    metaDescription: 'Rellena formularios PDF interactivos en línea.',
    keywords: ['rellenar formularios pdf', 'completar pdf', 'formularios interactivos'],
    description: '<p>Rellenar Formularios te permite completar formularios PDF interactivos directamente en tu navegador.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el formulario.' },
      { step: 2, title: 'Completa Campos', description: 'Rellena los campos del formulario.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Guarda el formulario completado.' },
    ],
    useCases: [
      { title: 'Formularios Oficiales', description: 'Completa formularios gubernamentales o legales.', icon: 'file-text' },
      { title: 'Solicitudes', description: 'Rellena solicitudes de empleo o servicios.', icon: 'clipboard' },
      { title: 'Contratos', description: 'Completa contratos y acuerdos.', icon: 'file-signature' },
    ],
    faq: [
      { question: '¿Funciona con todos los formularios?', answer: 'Funciona con formularios PDF interactivos estándar.' },
      { question: '¿Puedo guardar y continuar después?', answer: 'Sí, guarda el progreso y continúa más tarde.' },
      { question: '¿Puedo añadir firma?', answer: 'Sí, usa la herramienta Firmar PDF para añadir firmas.' },
    ],
  },

  'form-creator': {
    title: 'Crear Formularios',
    metaDescription: 'Crea formularios PDF interactivos con campos rellenables.',
    keywords: ['crear formularios pdf', 'formularios interactivos', 'campos pdf'],
    description: '<p>Crear Formularios te permite añadir campos interactivos a documentos PDF para crear formularios rellenables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento base.' },
      { step: 2, title: 'Añade Campos', description: 'Inserta campos de texto, casillas, botones de radio, etc.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Guarda el formulario interactivo.' },
    ],
    useCases: [
      { title: 'Formularios de Empresa', description: 'Crea formularios internos rellenables.', icon: 'building' },
      { title: 'Encuestas', description: 'Diseña encuestas y cuestionarios.', icon: 'clipboard-list' },
      { title: 'Solicitudes', description: 'Crea formularios de solicitud profesionales.', icon: 'file-plus' },
    ],
    faq: [
      { question: '¿Qué tipos de campos puedo añadir?', answer: 'Texto, casillas, botones de radio, listas desplegables, fechas y más.' },
      { question: '¿Puedo hacer campos obligatorios?', answer: 'Sí, configura validación y campos requeridos.' },
      { question: '¿Los formularios funcionan en todos los lectores?', answer: 'Sí, son compatibles con lectores PDF estándar.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Eliminar Páginas en Blanco',
    metaDescription: 'Detecta y elimina automáticamente páginas en blanco de documentos PDF.',
    keywords: ['eliminar páginas en blanco', 'quitar páginas vacías', 'limpiar pdf'],
    description: '<p>Eliminar Páginas en Blanco detecta y elimina automáticamente las páginas vacías de tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Sensibilidad', description: 'Ajusta el umbral de detección de páginas en blanco.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las páginas en blanco y descarga.' },
    ],
    useCases: [
      { title: 'Limpiar Escaneos', description: 'Elimina páginas en blanco de documentos escaneados.', icon: 'file-minus' },
      { title: 'Optimizar Documentos', description: 'Reduce el tamaño eliminando páginas vacías.', icon: 'zap' },
      { title: 'Preparar para Impresión', description: 'Elimina páginas innecesarias antes de imprimir.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Cómo detecta páginas en blanco?', answer: 'Analiza el contenido de cada página para detectar vacías.' },
      { question: '¿Puedo revisar antes de eliminar?', answer: 'Sí, muestra las páginas detectadas para confirmación.' },
      { question: '¿Detecta páginas casi en blanco?', answer: 'Sí, ajusta la sensibilidad para incluir páginas con poco contenido.' },
    ],
  },


  // ==================== CONVERTIR A PDF ====================
  'image-to-pdf': {
    title: 'Imagen a PDF',
    metaDescription: 'Convierte múltiples formatos de imagen a PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG, HEIC.',
    keywords: ['imagen a pdf', 'convertir imagen', 'foto a pdf', 'múltiples imágenes pdf'],
    description: '<p>Imagen a PDF convierte varios formatos de imagen en documentos PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes', description: 'Arrastra y suelta imágenes o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena y Configura', description: 'Reordena y selecciona opciones de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Convierte capturas de pantalla en documentación.', icon: 'image' },
      { title: 'Portafolios', description: 'Crea portafolios de imágenes en PDF.', icon: 'folder' },
      { title: 'Archivos', description: 'Archiva imágenes en formato PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué formatos soporta?', answer: 'JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, las imágenes se incrustan en calidad original.' },
      { question: '¿Puedo combinar diferentes formatos?', answer: 'Sí, mezcla cualquier formato de imagen soportado.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG a PDF',
    metaDescription: 'Convierte imágenes PNG a documentos PDF con transparencia preservada.',
    keywords: ['png a pdf', 'convertir png', 'imagen png pdf'],
    description: '<p>PNG a PDF convierte imágenes PNG en documentos PDF, preservando la transparencia cuando es posible.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes PNG', description: 'Arrastra y suelta archivos PNG.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página y orientación.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Gráficos', description: 'Convierte gráficos PNG con transparencia.', icon: 'image' },
      { title: 'Logos', description: 'Crea PDFs de logos para impresión.', icon: 'star' },
      { title: 'Capturas', description: 'Convierte capturas de pantalla en PDF.', icon: 'monitor' },
    ],
    faq: [
      { question: '¿Se preserva la transparencia?', answer: 'La transparencia se preserva en el PDF resultante.' },
      { question: '¿Puedo convertir múltiples PNGs?', answer: 'Sí, combina múltiples PNGs en un PDF.' },
      { question: '¿Qué calidad tiene el resultado?', answer: 'Se mantiene la calidad original de las imágenes.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP a PDF',
    metaDescription: 'Convierte imágenes WebP a documentos PDF.',
    keywords: ['webp a pdf', 'convertir webp', 'imagen webp pdf'],
    description: '<p>WebP a PDF convierte imágenes en formato WebP a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes WebP', description: 'Arrastra y suelta archivos WebP.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Imágenes Web', description: 'Convierte imágenes descargadas de la web.', icon: 'globe' },
      { title: 'Archivos', description: 'Archiva imágenes WebP en formato PDF.', icon: 'archive' },
      { title: 'Documentación', description: 'Incluye imágenes WebP en documentos.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Qué es WebP?', answer: 'WebP es un formato de imagen moderno desarrollado por Google.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen original.' },
      { question: '¿Soporta WebP animado?', answer: 'Se convierte el primer fotograma de WebP animados.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG a PDF',
    metaDescription: 'Convierte gráficos vectoriales SVG a documentos PDF.',
    keywords: ['svg a pdf', 'convertir svg', 'vector a pdf'],
    description: '<p>SVG a PDF convierte gráficos vectoriales SVG en documentos PDF, manteniendo la escalabilidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivos SVG', description: 'Arrastra y suelta archivos SVG.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Logos', description: 'Convierte logos vectoriales para impresión.', icon: 'star' },
      { title: 'Ilustraciones', description: 'Crea PDFs de ilustraciones vectoriales.', icon: 'pen-tool' },
      { title: 'Diagramas', description: 'Convierte diagramas SVG a PDF.', icon: 'git-branch' },
    ],
    faq: [
      { question: '¿Se mantiene la calidad vectorial?', answer: 'Sí, los gráficos permanecen escalables en el PDF.' },
      { question: '¿Soporta SVG complejos?', answer: 'Sí, soporta la mayoría de características SVG.' },
      { question: '¿Puedo convertir múltiples SVGs?', answer: 'Sí, combina múltiples SVGs en un PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP a PDF',
    metaDescription: 'Convierte imágenes BMP a documentos PDF.',
    keywords: ['bmp a pdf', 'convertir bmp', 'bitmap a pdf'],
    description: '<p>BMP a PDF convierte imágenes en formato BMP (bitmap) a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes BMP', description: 'Arrastra y suelta archivos BMP.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Imágenes Antiguas', description: 'Convierte archivos BMP heredados.', icon: 'image' },
      { title: 'Capturas Windows', description: 'Convierte capturas en formato BMP.', icon: 'monitor' },
      { title: 'Archivos', description: 'Archiva imágenes BMP en PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué es BMP?', answer: 'BMP es un formato de imagen sin compresión de Windows.' },
      { question: '¿Se reduce el tamaño?', answer: 'Sí, el PDF resultante suele ser más pequeño que el BMP original.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC a PDF',
    metaDescription: 'Convierte imágenes HEIC de iPhone a documentos PDF.',
    keywords: ['heic a pdf', 'convertir heic', 'iphone foto pdf'],
    description: '<p>HEIC a PDF convierte imágenes HEIC (formato de iPhone) a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes HEIC', description: 'Arrastra y suelta archivos HEIC.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Fotos de iPhone', description: 'Convierte fotos de iPhone a PDF.', icon: 'smartphone' },
      { title: 'Álbumes', description: 'Crea álbumes PDF de fotos HEIC.', icon: 'image' },
      { title: 'Compartir', description: 'Convierte para compartir con usuarios sin soporte HEIC.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué es HEIC?', answer: 'HEIC es el formato de imagen predeterminado de iPhone desde iOS 11.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen original.' },
      { question: '¿Soporta Live Photos?', answer: 'Se convierte la imagen estática de Live Photos.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF a PDF',
    metaDescription: 'Convierte imágenes TIFF a documentos PDF.',
    keywords: ['tiff a pdf', 'convertir tiff', 'tif a pdf'],
    description: '<p>TIFF a PDF convierte imágenes TIFF de alta calidad a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes TIFF', description: 'Arrastra y suelta archivos TIFF.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Convierte escaneos TIFF a PDF.', icon: 'scan' },
      { title: 'Fotografía Profesional', description: 'Crea PDFs de fotos de alta calidad.', icon: 'camera' },
      { title: 'Archivos', description: 'Archiva imágenes TIFF en PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Soporta TIFF multipágina?', answer: 'Sí, cada página TIFF se convierte en una página PDF.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen.' },
      { question: '¿Soporta TIFF con capas?', answer: 'Se aplana el TIFF al convertir.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Texto a PDF',
    metaDescription: 'Convierte archivos de texto plano a documentos PDF.',
    keywords: ['texto a pdf', 'txt a pdf', 'convertir texto'],
    description: '<p>Texto a PDF convierte archivos de texto plano (.txt) en documentos PDF con formato personalizable.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivo de Texto', description: 'Arrastra y suelta o pega texto.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona fuente, tamaño y márgenes.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Convierte archivos README y documentación.', icon: 'file-text' },
      { title: 'Código', description: 'Crea PDFs de código fuente.', icon: 'code' },
      { title: 'Notas', description: 'Convierte notas de texto a PDF.', icon: 'sticky-note' },
    ],
    faq: [
      { question: '¿Puedo personalizar la fuente?', answer: 'Sí, selecciona fuente, tamaño y color.' },
      { question: '¿Soporta caracteres especiales?', answer: 'Sí, soporta Unicode y caracteres especiales.' },
      { question: '¿Puedo añadir encabezados?', answer: 'Sí, configura encabezados y pies de página.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON a PDF',
    metaDescription: 'Convierte datos JSON a documentos PDF formateados.',
    keywords: ['json a pdf', 'convertir json', 'datos a pdf'],
    description: '<p>JSON a PDF convierte datos JSON en documentos PDF con formato legible.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivo JSON', description: 'Arrastra y suelta o pega JSON.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona estilo de presentación.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación API', description: 'Crea documentación de respuestas API.', icon: 'code' },
      { title: 'Informes de Datos', description: 'Genera informes de datos JSON.', icon: 'bar-chart' },
      { title: 'Configuraciones', description: 'Documenta archivos de configuración.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Cómo se formatea el JSON?', answer: 'Se presenta con indentación y resaltado de sintaxis.' },
      { question: '¿Soporta JSON grandes?', answer: 'Sí, maneja archivos JSON de cualquier tamaño.' },
      { question: '¿Puedo personalizar colores?', answer: 'Sí, configura el esquema de colores del resaltado.' },
    ],
  },


  // ==================== CONVERTIR DESDE PDF ====================
  'pdf-to-jpg': {
    title: 'PDF a JPG',
    metaDescription: 'Convierte páginas PDF a imágenes JPG de alta calidad.',
    keywords: ['pdf a jpg', 'pdf a jpeg', 'convertir pdf imagen'],
    description: '<p>PDF a JPG convierte las páginas de tu documento PDF en imágenes JPG de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona calidad y páginas a convertir.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes JPG.' },
    ],
    useCases: [
      { title: 'Compartir en Redes', description: 'Convierte páginas para compartir en redes sociales.', icon: 'share-2' },
      { title: 'Presentaciones', description: 'Usa páginas PDF como imágenes en presentaciones.', icon: 'presentation' },
      { title: 'Web', description: 'Convierte para usar en sitios web.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué calidad tienen las imágenes?', answer: 'Configura la calidad de 1 a 100, con 100 siendo la máxima.' },
      { question: '¿Puedo convertir páginas específicas?', answer: 'Sí, selecciona las páginas a convertir.' },
      { question: '¿Cómo descargo múltiples imágenes?', answer: 'Se descargan como archivo ZIP.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF a PNG',
    metaDescription: 'Convierte páginas PDF a imágenes PNG con transparencia.',
    keywords: ['pdf a png', 'convertir pdf png', 'pdf imagen png'],
    description: '<p>PDF a PNG convierte las páginas de tu documento PDF en imágenes PNG de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes PNG.' },
    ],
    useCases: [
      { title: 'Gráficos', description: 'Extrae gráficos con transparencia.', icon: 'image' },
      { title: 'Diseño', description: 'Usa páginas en proyectos de diseño.', icon: 'palette' },
      { title: 'Documentación', description: 'Incluye páginas como imágenes en documentos.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Soporta transparencia?', answer: 'Sí, las áreas transparentes se preservan.' },
      { question: '¿Qué resolución tienen?', answer: 'Configura la resolución en DPI (72-600).' },
      { question: '¿Puedo convertir todas las páginas?', answer: 'Sí, convierte todas o selecciona específicas.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF a WebP',
    metaDescription: 'Convierte páginas PDF a imágenes WebP optimizadas para web.',
    keywords: ['pdf a webp', 'convertir pdf webp', 'pdf imagen web'],
    description: '<p>PDF a WebP convierte las páginas de tu documento PDF en imágenes WebP optimizadas para web.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona calidad y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes WebP.' },
    ],
    useCases: [
      { title: 'Sitios Web', description: 'Crea imágenes optimizadas para web.', icon: 'globe' },
      { title: 'Rendimiento', description: 'Reduce el tamaño de imágenes para carga rápida.', icon: 'zap' },
      { title: 'Blogs', description: 'Convierte páginas para artículos de blog.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Por qué WebP?', answer: 'WebP ofrece mejor compresión que JPG y PNG.' },
      { question: '¿Es compatible con todos los navegadores?', answer: 'Sí, todos los navegadores modernos soportan WebP.' },
      { question: '¿Puedo ajustar la compresión?', answer: 'Sí, configura el nivel de calidad.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF a BMP',
    metaDescription: 'Convierte páginas PDF a imágenes BMP sin compresión.',
    keywords: ['pdf a bmp', 'convertir pdf bmp', 'pdf bitmap'],
    description: '<p>PDF a BMP convierte las páginas de tu documento PDF en imágenes BMP sin compresión.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes BMP.' },
    ],
    useCases: [
      { title: 'Compatibilidad', description: 'Crea imágenes para software antiguo.', icon: 'monitor' },
      { title: 'Impresión', description: 'Genera imágenes sin pérdida para impresión.', icon: 'printer' },
      { title: 'Edición', description: 'Crea imágenes para edición sin pérdida.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Por qué BMP?', answer: 'BMP no tiene compresión, ideal para máxima calidad.' },
      { question: '¿Los archivos son grandes?', answer: 'Sí, BMP produce archivos más grandes que otros formatos.' },
      { question: '¿Puedo convertir múltiples páginas?', answer: 'Sí, se descargan como archivo ZIP.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF a TIFF',
    metaDescription: 'Convierte páginas PDF a imágenes TIFF de alta calidad.',
    keywords: ['pdf a tiff', 'convertir pdf tiff', 'pdf tif'],
    description: '<p>PDF a TIFF convierte las páginas de tu documento PDF en imágenes TIFF de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y compresión.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes TIFF.' },
    ],
    useCases: [
      { title: 'Impresión Profesional', description: 'Crea imágenes para impresión de alta calidad.', icon: 'printer' },
      { title: 'Archivos', description: 'Archiva documentos en formato TIFF.', icon: 'archive' },
      { title: 'Escaneo', description: 'Convierte para flujos de trabajo de escaneo.', icon: 'scan' },
    ],
    faq: [
      { question: '¿Soporta TIFF multipágina?', answer: 'Sí, puede crear un TIFF multipágina o archivos separados.' },
      { question: '¿Qué compresión usa?', answer: 'Soporta LZW, ZIP y sin compresión.' },
      { question: '¿Qué resolución recomiendas?', answer: '300 DPI para impresión, 150 DPI para pantalla.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF a Escala de Grises',
    metaDescription: 'Convierte documentos PDF a color a escala de grises.',
    keywords: ['pdf escala de grises', 'pdf blanco y negro', 'convertir pdf gris'],
    description: '<p>PDF a Escala de Grises convierte documentos PDF a color en versiones en escala de grises.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona páginas a convertir.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga el PDF en escala de grises.' },
    ],
    useCases: [
      { title: 'Ahorro de Tinta', description: 'Prepara documentos para impresión económica.', icon: 'printer' },
      { title: 'Documentos Formales', description: 'Crea versiones formales en blanco y negro.', icon: 'file-text' },
      { title: 'Accesibilidad', description: 'Mejora la legibilidad para algunos usuarios.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original a color.' },
      { question: '¿Afecta las imágenes?', answer: 'Sí, todas las imágenes se convierten a grises.' },
      { question: '¿Reduce el tamaño del archivo?', answer: 'Puede reducir ligeramente el tamaño.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF a JSON',
    metaDescription: 'Extrae datos estructurados de documentos PDF a formato JSON.',
    keywords: ['pdf a json', 'extraer datos pdf', 'pdf datos json'],
    description: '<p>PDF a JSON extrae el contenido y estructura de documentos PDF en formato JSON.</p><p>Extracción local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona qué datos extraer.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Descarga el archivo JSON.' },
    ],
    useCases: [
      { title: 'Procesamiento de Datos', description: 'Extrae datos para procesamiento automatizado.', icon: 'database' },
      { title: 'Integración', description: 'Integra contenido PDF en aplicaciones.', icon: 'plug' },
      { title: 'Análisis', description: 'Analiza estructura y contenido de PDFs.', icon: 'bar-chart' },
    ],
    faq: [
      { question: '¿Qué datos se extraen?', answer: 'Texto, metadatos, estructura de páginas y más.' },
      { question: '¿Extrae tablas?', answer: 'Intenta detectar y estructurar tablas.' },
      { question: '¿Funciona con PDFs escaneados?', answer: 'Para PDFs escaneados, usa primero OCR PDF.' },
    ],
  },


  // ==================== ORGANIZAR Y GESTIONAR ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Reconocimiento óptico de caracteres para hacer PDFs escaneados buscables.',
    keywords: ['ocr pdf', 'reconocimiento texto', 'pdf buscable', 'escaneo a texto'],
    description: '<p>OCR PDF aplica reconocimiento óptico de caracteres a PDFs escaneados para hacerlos buscables y editables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el PDF escaneado.' },
      { step: 2, title: 'Selecciona Idioma', description: 'Elige el idioma del documento.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Aplica OCR y descarga el PDF buscable.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Haz buscables documentos escaneados.', icon: 'scan' },
      { title: 'Archivos Históricos', description: 'Digitaliza documentos antiguos.', icon: 'archive' },
      { title: 'Accesibilidad', description: 'Permite lectores de pantalla en PDFs escaneados.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Qué idiomas soporta?', answer: 'Soporta más de 100 idiomas incluyendo español, inglés, chino y más.' },
      { question: '¿Qué precisión tiene?', answer: 'La precisión depende de la calidad del escaneo, típicamente 95%+.' },
      { question: '¿Modifica el aspecto del PDF?', answer: 'No, añade una capa de texto invisible sobre la imagen.' },
    ],
  },

  'alternate-merge': {
    title: 'Combinación Alternada',
    metaDescription: 'Combina dos PDFs alternando páginas de cada documento.',
    keywords: ['combinar alternado', 'intercalar pdf', 'mezclar páginas'],
    description: '<p>Combinación Alternada combina dos PDFs alternando páginas de cada documento, útil para documentos de doble cara.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Dos PDFs', description: 'Arrastra y suelta los dos documentos.' },
      { step: 2, title: 'Configura Orden', description: 'Selecciona el orden de alternancia.' },
      { step: 3, title: 'Combina y Descarga', description: 'Crea el PDF combinado.' },
    ],
    useCases: [
      { title: 'Escaneos Doble Cara', description: 'Combina escaneos de anverso y reverso.', icon: 'copy' },
      { title: 'Documentos Bilingües', description: 'Alterna páginas en dos idiomas.', icon: 'languages' },
      { title: 'Comparación', description: 'Alterna versiones para comparación.', icon: 'git-compare' },
    ],
    faq: [
      { question: '¿Qué pasa si tienen diferente número de páginas?', answer: 'Las páginas extra se añaden al final.' },
      { question: '¿Puedo invertir el orden de uno?', answer: 'Sí, puedes invertir el orden de cualquier documento.' },
      { question: '¿Puedo combinar más de dos PDFs?', answer: 'Esta herramienta es para dos PDFs. Usa Combinar PDF para más.' },
    ],
  },

  'add-attachments': {
    title: 'Añadir Adjuntos',
    metaDescription: 'Añade archivos adjuntos a documentos PDF.',
    keywords: ['adjuntos pdf', 'añadir archivos pdf', 'incrustar archivos'],
    description: '<p>Añadir Adjuntos te permite incrustar archivos dentro de documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Añade Archivos', description: 'Selecciona los archivos a adjuntar.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Descarga el PDF con adjuntos.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Incluye archivos de soporte en documentos.', icon: 'paperclip' },
      { title: 'Informes', description: 'Adjunta datos fuente a informes.', icon: 'file-text' },
      { title: 'Contratos', description: 'Incluye anexos en contratos.', icon: 'file-signature' },
    ],
    faq: [
      { question: '¿Qué tipos de archivos puedo adjuntar?', answer: 'Cualquier tipo de archivo: documentos, imágenes, hojas de cálculo, etc.' },
      { question: '¿Hay límite de tamaño?', answer: 'El tamaño total del PDF con adjuntos no debe exceder 500MB.' },
      { question: '¿Cómo se accede a los adjuntos?', answer: 'Los lectores PDF muestran los adjuntos en un panel lateral.' },
    ],
  },

  'extract-attachments': {
    title: 'Extraer Adjuntos',
    metaDescription: 'Extrae archivos adjuntos de documentos PDF.',
    keywords: ['extraer adjuntos pdf', 'descargar adjuntos', 'archivos incrustados'],
    description: '<p>Extraer Adjuntos te permite descargar los archivos incrustados en documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Adjuntos', description: 'Ve la lista de archivos adjuntos.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Descarga los adjuntos seleccionados.' },
    ],
    useCases: [
      { title: 'Recuperar Archivos', description: 'Extrae archivos de documentos recibidos.', icon: 'download' },
      { title: 'Organización', description: 'Separa adjuntos para organización.', icon: 'folder' },
      { title: 'Análisis', description: 'Extrae datos adjuntos para análisis.', icon: 'bar-chart' },
    ],
    faq: [
      { question: '¿Cómo sé si un PDF tiene adjuntos?', answer: 'La herramienta muestra todos los adjuntos encontrados.' },
      { question: '¿Puedo extraer adjuntos específicos?', answer: 'Sí, selecciona los adjuntos a extraer.' },
      { question: '¿Se modifica el PDF original?', answer: 'No, solo se extraen copias de los adjuntos.' },
    ],
  },

  'edit-attachments': {
    title: 'Editar Adjuntos',
    metaDescription: 'Gestiona los archivos adjuntos en documentos PDF.',
    keywords: ['editar adjuntos pdf', 'gestionar adjuntos', 'modificar adjuntos'],
    description: '<p>Editar Adjuntos te permite añadir, eliminar y renombrar archivos adjuntos en documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Gestiona Adjuntos', description: 'Añade, elimina o renombra adjuntos.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Descarga el PDF modificado.' },
    ],
    useCases: [
      { title: 'Actualizar Adjuntos', description: 'Reemplaza adjuntos desactualizados.', icon: 'refresh-cw' },
      { title: 'Limpiar PDFs', description: 'Elimina adjuntos innecesarios.', icon: 'trash-2' },
      { title: 'Organizar', description: 'Renombra adjuntos para mejor organización.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Puedo reemplazar un adjunto?', answer: 'Sí, elimina el existente y añade el nuevo.' },
      { question: '¿Puedo cambiar el nombre?', answer: 'Sí, renombra cualquier adjunto.' },
      { question: '¿Afecta el contenido del PDF?', answer: 'No, solo modifica los adjuntos.' },
    ],
  },

  'divide-pages': {
    title: 'Dividir Páginas',
    metaDescription: 'Divide páginas PDF grandes en múltiples páginas más pequeñas.',
    keywords: ['dividir páginas pdf', 'cortar páginas', 'separar páginas'],
    description: '<p>Dividir Páginas corta páginas PDF grandes en múltiples páginas más pequeñas.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura División', description: 'Selecciona cómo dividir las páginas.' },
      { step: 3, title: 'Divide y Descarga', description: 'Descarga el PDF con páginas divididas.' },
    ],
    useCases: [
      { title: 'Posters', description: 'Divide posters grandes para impresión en partes.', icon: 'layout-grid' },
      { title: 'Planos', description: 'Divide planos grandes en secciones.', icon: 'map' },
      { title: 'Presentaciones', description: 'Divide diapositivas anchas en páginas estándar.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Cómo se dividen las páginas?', answer: 'Puedes dividir horizontal, vertical o en cuadrícula.' },
      { question: '¿Puedo especificar el tamaño?', answer: 'Sí, define el tamaño de las páginas resultantes.' },
      { question: '¿Se pierde contenido?', answer: 'No, todo el contenido se preserva en las páginas divididas.' },
    ],
  },

  'add-blank-page': {
    title: 'Añadir Página en Blanco',
    metaDescription: 'Inserta páginas en blanco en documentos PDF.',
    keywords: ['añadir página blanco', 'insertar página pdf', 'página vacía'],
    description: '<p>Añadir Página en Blanco te permite insertar páginas vacías en cualquier posición de tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Posición', description: 'Elige dónde insertar la página en blanco.' },
      { step: 3, title: 'Añade y Descarga', description: 'Inserta la página y descarga.' },
    ],
    useCases: [
      { title: 'Separadores', description: 'Añade páginas en blanco como separadores de sección.', icon: 'file-plus' },
      { title: 'Impresión', description: 'Añade páginas para impresión a doble cara.', icon: 'printer' },
      { title: 'Notas', description: 'Inserta páginas para notas manuscritas.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Puedo añadir múltiples páginas?', answer: 'Sí, añade tantas páginas en blanco como necesites.' },
      { question: '¿Puedo elegir el tamaño?', answer: 'Las páginas en blanco coinciden con el tamaño del documento.' },
      { question: '¿Puedo añadir al inicio o final?', answer: 'Sí, inserta en cualquier posición.' },
    ],
  },

  'reverse-pages': {
    title: 'Invertir Páginas',
    metaDescription: 'Invierte el orden de las páginas en documentos PDF.',
    keywords: ['invertir páginas pdf', 'orden inverso', 'voltear pdf'],
    description: '<p>Invertir Páginas cambia el orden de las páginas de tu PDF, poniendo la última primero.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Confirma', description: 'Revisa la vista previa del orden invertido.' },
      { step: 3, title: 'Invierte y Descarga', description: 'Aplica la inversión y descarga.' },
    ],
    useCases: [
      { title: 'Corregir Escaneos', description: 'Corrige documentos escaneados en orden inverso.', icon: 'refresh-cw' },
      { title: 'Presentaciones', description: 'Invierte el orden para presentaciones inversas.', icon: 'presentation' },
      { title: 'Impresión', description: 'Prepara documentos para ciertos tipos de impresión.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Puedo invertir páginas específicas?', answer: 'Esta herramienta invierte todas las páginas. Usa Organizar PDF para reordenar específicas.' },
      { question: '¿Afecta el contenido de las páginas?', answer: 'No, solo cambia el orden, no el contenido.' },
      { question: '¿Es reversible?', answer: 'Sí, invierte de nuevo para restaurar el orden original.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotar PDF',
    metaDescription: 'Rota páginas PDF 90, 180 o 270 grados.',
    keywords: ['rotar pdf', 'girar páginas', 'orientación pdf'],
    description: '<p>Rotar PDF te permite girar páginas de tu documento 90, 180 o 270 grados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Rotación', description: 'Elige el ángulo y las páginas a rotar.' },
      { step: 3, title: 'Rota y Descarga', description: 'Aplica la rotación y descarga.' },
    ],
    useCases: [
      { title: 'Corregir Orientación', description: 'Corrige páginas escaneadas con orientación incorrecta.', icon: 'rotate-cw' },
      { title: 'Documentos Mixtos', description: 'Unifica orientación en documentos con páginas mixtas.', icon: 'file-text' },
      { title: 'Presentaciones', description: 'Ajusta orientación para presentaciones.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Puedo rotar páginas específicas?', answer: 'Sí, selecciona las páginas a rotar.' },
      { question: '¿Qué ángulos están disponibles?', answer: '90° (derecha), 180° (invertir), 270° (izquierda).' },
      { question: '¿Afecta la calidad?', answer: 'No, la rotación no afecta la calidad del contenido.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: 'Coloca múltiples páginas PDF en una sola página (2-up, 4-up, etc.).',
    keywords: ['n-up pdf', 'múltiples páginas', '2-up', '4-up', 'imprimir múltiple'],
    description: '<p>N-Up PDF coloca múltiples páginas de tu documento en una sola página, útil para ahorrar papel al imprimir.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Diseño', description: 'Elige 2-up, 4-up, 6-up o 9-up.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Crea el PDF N-up y descarga.' },
    ],
    useCases: [
      { title: 'Ahorro de Papel', description: 'Imprime múltiples páginas por hoja.', icon: 'file-minus' },
      { title: 'Resúmenes', description: 'Crea resúmenes visuales de documentos.', icon: 'layout-grid' },
      { title: 'Revisión', description: 'Revisa documentos con vista general.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Qué significa N-up?', answer: 'N páginas por hoja: 2-up = 2 páginas, 4-up = 4 páginas, etc.' },
      { question: '¿Puedo personalizar el orden?', answer: 'Sí, elige el orden de lectura (izquierda-derecha, arriba-abajo).' },
      { question: '¿Se reduce la calidad?', answer: 'Las páginas se escalan para ajustarse, pero mantienen legibilidad.' },
    ],
  },

  'combine-single-page': {
    title: 'Combinar en Página Única',
    metaDescription: 'Combina todas las páginas PDF en una sola página larga.',
    keywords: ['combinar página única', 'página continua', 'unir páginas'],
    description: '<p>Combinar en Página Única une todas las páginas de tu PDF en una sola página larga continua.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona orientación y espaciado.' },
      { step: 3, title: 'Combina y Descarga', description: 'Crea la página única y descarga.' },
    ],
    useCases: [
      { title: 'Infografías', description: 'Crea documentos de desplazamiento continuo.', icon: 'scroll' },
      { title: 'Impresión de Banners', description: 'Prepara documentos para impresión de banners.', icon: 'printer' },
      { title: 'Visualización', description: 'Crea vistas panorámicas de documentos.', icon: 'maximize' },
    ],
    faq: [
      { question: '¿Hay límite de páginas?', answer: 'No hay límite, pero documentos muy largos pueden ser difíciles de manejar.' },
      { question: '¿Puedo añadir espacio entre páginas?', answer: 'Sí, configura el espaciado entre páginas originales.' },
      { question: '¿Funciona con páginas de diferentes tamaños?', answer: 'Sí, las páginas se ajustan al ancho máximo.' },
    ],
  },

  'view-metadata': {
    title: 'Ver Metadatos',
    metaDescription: 'Visualiza los metadatos y propiedades de documentos PDF.',
    keywords: ['ver metadatos pdf', 'propiedades pdf', 'información pdf'],
    description: '<p>Ver Metadatos muestra toda la información de propiedades de tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Metadatos', description: 'Ve título, autor, fechas, palabras clave, etc.' },
      { step: 3, title: 'Exporta si Necesitas', description: 'Exporta los metadatos a JSON.' },
    ],
    useCases: [
      { title: 'Auditoría', description: 'Revisa información de documentos recibidos.', icon: 'search' },
      { title: 'Verificación', description: 'Verifica autor y fechas de documentos.', icon: 'check-circle' },
      { title: 'Catalogación', description: 'Extrae información para catalogar documentos.', icon: 'database' },
    ],
    faq: [
      { question: '¿Qué metadatos se muestran?', answer: 'Título, autor, asunto, palabras clave, fechas de creación y modificación, productor, etc.' },
      { question: '¿Puedo editar los metadatos?', answer: 'Usa la herramienta Editar Metadatos para modificarlos.' },
      { question: '¿Se modifica el PDF?', answer: 'No, solo se visualiza la información.' },
    ],
  },

  'edit-metadata': {
    title: 'Editar Metadatos',
    metaDescription: 'Edita los metadatos y propiedades de documentos PDF.',
    keywords: ['editar metadatos pdf', 'modificar propiedades', 'cambiar autor pdf'],
    description: '<p>Editar Metadatos te permite modificar las propiedades de tu documento PDF como título, autor y palabras clave.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Edita Metadatos', description: 'Modifica título, autor, asunto, palabras clave.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga.' },
    ],
    useCases: [
      { title: 'Branding', description: 'Añade información de empresa a documentos.', icon: 'building' },
      { title: 'SEO', description: 'Optimiza metadatos para búsqueda.', icon: 'search' },
      { title: 'Organización', description: 'Añade palabras clave para catalogación.', icon: 'tag' },
    ],
    faq: [
      { question: '¿Qué metadatos puedo editar?', answer: 'Título, autor, asunto, palabras clave, productor y más.' },
      { question: '¿Puedo eliminar metadatos?', answer: 'Sí, deja campos vacíos o usa Eliminar Metadatos.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo modifica las propiedades del documento.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs a ZIP',
    metaDescription: 'Empaqueta múltiples archivos PDF en un archivo ZIP.',
    keywords: ['pdf a zip', 'comprimir pdfs', 'empaquetar pdf'],
    description: '<p>PDFs a ZIP empaqueta múltiples archivos PDF en un único archivo ZIP comprimido.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube PDFs', description: 'Arrastra y suelta múltiples archivos PDF.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona nivel de compresión.' },
      { step: 3, title: 'Crea y Descarga', description: 'Genera el archivo ZIP y descarga.' },
    ],
    useCases: [
      { title: 'Envío por Correo', description: 'Empaqueta múltiples PDFs para enviar por email.', icon: 'mail' },
      { title: 'Archivos', description: 'Comprime documentos para almacenamiento.', icon: 'archive' },
      { title: 'Distribución', description: 'Prepara paquetes de documentos para distribución.', icon: 'package' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo empaquetar?', answer: 'Hasta 100 archivos PDF.' },
      { question: '¿Se comprimen los PDFs?', answer: 'El ZIP comprime el paquete, no los PDFs individuales.' },
      { question: '¿Puedo añadir otros archivos?', answer: 'Esta herramienta es específica para PDFs.' },
    ],
  },

  'compare-pdfs': {
    title: 'Comparar PDFs',
    metaDescription: 'Compara dos documentos PDF lado a lado y resalta diferencias.',
    keywords: ['comparar pdf', 'diferencias pdf', 'comparación documentos'],
    description: '<p>Comparar PDFs muestra dos documentos lado a lado y resalta las diferencias entre ellos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Dos PDFs', description: 'Arrastra y suelta los dos documentos a comparar.' },
      { step: 2, title: 'Revisa Diferencias', description: 'Ve las diferencias resaltadas.' },
      { step: 3, title: 'Exporta Resultados', description: 'Descarga el informe de comparación.' },
    ],
    useCases: [
      { title: 'Control de Versiones', description: 'Compara diferentes versiones de documentos.', icon: 'git-compare' },
      { title: 'Revisión de Contratos', description: 'Identifica cambios en contratos.', icon: 'file-signature' },
      { title: 'Auditoría', description: 'Verifica cambios en documentos oficiales.', icon: 'search' },
    ],
    faq: [
      { question: '¿Qué diferencias detecta?', answer: 'Cambios en texto, imágenes, formato y estructura.' },
      { question: '¿Funciona con PDFs escaneados?', answer: 'Mejor con PDFs de texto. Para escaneados, usa OCR primero.' },
      { question: '¿Puedo comparar más de dos PDFs?', answer: 'Esta herramienta compara dos PDFs a la vez.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterizar PDF',
    metaDescription: 'Divide páginas PDF grandes en múltiples páginas para impresión de posters.',
    keywords: ['posterizar pdf', 'imprimir poster', 'dividir página grande'],
    description: '<p>Posterizar PDF divide páginas grandes en múltiples páginas más pequeñas para imprimir posters en impresoras estándar.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Cuadrícula', description: 'Selecciona el número de filas y columnas.' },
      { step: 3, title: 'Posteriza y Descarga', description: 'Crea las páginas divididas y descarga.' },
    ],
    useCases: [
      { title: 'Posters', description: 'Imprime posters grandes en hojas A4.', icon: 'maximize' },
      { title: 'Planos', description: 'Divide planos para impresión en partes.', icon: 'map' },
      { title: 'Banners', description: 'Crea banners imprimibles en secciones.', icon: 'layout-grid' },
    ],
    faq: [
      { question: '¿Cómo funciona?', answer: 'Divide cada página en una cuadrícula de páginas más pequeñas.' },
      { question: '¿Puedo añadir marcas de corte?', answer: 'Sí, añade marcas de corte y superposición.' },
      { question: '¿Qué tamaño de cuadrícula puedo usar?', answer: 'Desde 2x2 hasta 10x10 o personalizado.' },
    ],
  },


  // ==================== OPTIMIZAR Y REPARAR ====================
  'fix-page-size': {
    title: 'Corregir Tamaño de Página',
    metaDescription: 'Estandariza el tamaño de página de documentos PDF.',
    keywords: ['corregir tamaño pdf', 'estandarizar páginas', 'tamaño página pdf'],
    description: '<p>Corregir Tamaño de Página estandariza todas las páginas de tu PDF a un tamaño uniforme.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Tamaño', description: 'Elige el tamaño de página deseado (A4, Letter, etc.).' },
      { step: 3, title: 'Aplica y Descarga', description: 'Estandariza las páginas y descarga.' },
    ],
    useCases: [
      { title: 'Impresión', description: 'Prepara documentos para impresión uniforme.', icon: 'printer' },
      { title: 'Combinación', description: 'Estandariza antes de combinar documentos.', icon: 'combine' },
      { title: 'Presentación', description: 'Unifica tamaños para presentaciones profesionales.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Qué tamaños están disponibles?', answer: 'A4, Letter, Legal, A3, A5 y tamaños personalizados.' },
      { question: '¿Se escala el contenido?', answer: 'Puedes elegir escalar, recortar o añadir márgenes.' },
      { question: '¿Afecta la calidad?', answer: 'El contenido mantiene su calidad original.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearizar PDF',
    metaDescription: 'Optimiza PDFs para visualización web rápida (Fast Web View).',
    keywords: ['linearizar pdf', 'fast web view', 'optimizar pdf web'],
    description: '<p>Linearizar PDF optimiza documentos para visualización web rápida, permitiendo ver la primera página mientras se descarga el resto.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Confirma', description: 'Revisa las opciones de linearización.' },
      { step: 3, title: 'Lineariza y Descarga', description: 'Optimiza el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Publicación Web', description: 'Optimiza PDFs para sitios web.', icon: 'globe' },
      { title: 'Documentos Grandes', description: 'Mejora la experiencia con PDFs grandes.', icon: 'file-text' },
      { title: 'Distribución', description: 'Prepara documentos para distribución en línea.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué es linearización?', answer: 'Reorganiza el PDF para que la primera página se muestre inmediatamente.' },
      { question: '¿Reduce el tamaño?', answer: 'No significativamente, pero mejora la velocidad de visualización.' },
      { question: '¿Afecta la compatibilidad?', answer: 'No, los PDFs linearizados son compatibles con todos los lectores.' },
    ],
  },

  'page-dimensions': {
    title: 'Dimensiones de Página',
    metaDescription: 'Analiza y muestra las dimensiones de cada página en documentos PDF.',
    keywords: ['dimensiones pdf', 'tamaño páginas', 'medidas pdf'],
    description: '<p>Dimensiones de Página analiza y muestra el tamaño de cada página en tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Dimensiones', description: 'Ve el tamaño de cada página.' },
      { step: 3, title: 'Exporta si Necesitas', description: 'Exporta el informe de dimensiones.' },
    ],
    useCases: [
      { title: 'Verificación', description: 'Verifica tamaños antes de imprimir.', icon: 'ruler' },
      { title: 'Análisis', description: 'Analiza documentos con páginas mixtas.', icon: 'search' },
      { title: 'Preparación', description: 'Identifica páginas que necesitan ajuste.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Qué unidades se muestran?', answer: 'Milímetros, pulgadas y puntos.' },
      { question: '¿Detecta orientación?', answer: 'Sí, muestra si cada página es vertical u horizontal.' },
      { question: '¿Puedo cambiar las dimensiones?', answer: 'Usa Corregir Tamaño de Página para modificar dimensiones.' },
    ],
  },

  'remove-restrictions': {
    title: 'Eliminar Restricciones',
    metaDescription: 'Elimina restricciones de seguridad de documentos PDF.',
    keywords: ['eliminar restricciones pdf', 'desbloquear pdf', 'quitar seguridad'],
    description: '<p>Eliminar Restricciones quita las restricciones de seguridad de PDFs que impiden copiar, imprimir o editar.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento restringido.' },
      { step: 2, title: 'Ingresa Contraseña', description: 'Si es necesario, ingresa la contraseña del propietario.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las restricciones y descarga.' },
    ],
    useCases: [
      { title: 'Imprimir Documentos', description: 'Habilita impresión en PDFs restringidos.', icon: 'printer' },
      { title: 'Copiar Texto', description: 'Permite copiar texto de documentos bloqueados.', icon: 'copy' },
      { title: 'Editar PDFs', description: 'Habilita edición en documentos protegidos.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Necesito la contraseña?', answer: 'Depende del tipo de protección. Algunas restricciones requieren contraseña.' },
      { question: '¿Es legal?', answer: 'Solo usa esta herramienta con documentos que tienes derecho a modificar.' },
      { question: '¿Funciona con todos los PDFs?', answer: 'Funciona con la mayoría de PDFs con restricciones estándar.' },
    ],
  },

  'repair-pdf': {
    title: 'Reparar PDF',
    metaDescription: 'Repara archivos PDF dañados o corruptos.',
    keywords: ['reparar pdf', 'arreglar pdf', 'pdf corrupto', 'recuperar pdf'],
    description: '<p>Reparar PDF intenta recuperar y reparar archivos PDF dañados o corruptos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el archivo dañado.' },
      { step: 2, title: 'Inicia Reparación', description: 'La herramienta analiza y repara el archivo.' },
      { step: 3, title: 'Descarga Reparado', description: 'Descarga el PDF reparado.' },
    ],
    useCases: [
      { title: 'Archivos Corruptos', description: 'Recupera PDFs que no se abren correctamente.', icon: 'wrench' },
      { title: 'Descargas Incompletas', description: 'Repara PDFs de descargas interrumpidas.', icon: 'download' },
      { title: 'Archivos Antiguos', description: 'Recupera documentos de archivos dañados.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué problemas puede reparar?', answer: 'Estructura dañada, referencias rotas, objetos corruptos.' },
      { question: '¿Siempre funciona?', answer: 'Depende del nivel de daño. Archivos muy dañados pueden no ser recuperables.' },
      { question: '¿Se pierde contenido?', answer: 'La herramienta intenta preservar todo el contenido posible.' },
    ],
  },

  // ==================== SEGURIDAD PDF ====================
  'encrypt-pdf': {
    title: 'Cifrar PDF',
    metaDescription: 'Protege documentos PDF con contraseña y cifrado.',
    keywords: ['cifrar pdf', 'proteger pdf', 'contraseña pdf', 'seguridad pdf'],
    description: '<p>Cifrar PDF protege tus documentos con contraseña y cifrado AES para máxima seguridad.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Seguridad', description: 'Establece contraseña y permisos.' },
      { step: 3, title: 'Cifra y Descarga', description: 'Aplica el cifrado y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Confidenciales', description: 'Protege información sensible.', icon: 'lock' },
      { title: 'Envío Seguro', description: 'Cifra documentos antes de enviar por email.', icon: 'mail' },
      { title: 'Cumplimiento', description: 'Cumple con requisitos de seguridad de datos.', icon: 'shield' },
    ],
    faq: [
      { question: '¿Qué cifrado se usa?', answer: 'AES de 128 o 256 bits, el estándar de la industria.' },
      { question: '¿Puedo establecer permisos?', answer: 'Sí, controla impresión, copia, edición y más.' },
      { question: '¿Qué pasa si olvido la contraseña?', answer: 'No hay forma de recuperar PDFs cifrados sin la contraseña.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitizar PDF',
    metaDescription: 'Elimina información oculta y metadatos de documentos PDF.',
    keywords: ['sanitizar pdf', 'limpiar pdf', 'eliminar información oculta'],
    description: '<p>Sanitizar PDF elimina toda la información oculta, metadatos, scripts y datos sensibles de tus documentos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Opciones', description: 'Elige qué elementos eliminar.' },
      { step: 3, title: 'Sanitiza y Descarga', description: 'Limpia el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Privacidad', description: 'Elimina información personal antes de compartir.', icon: 'shield' },
      { title: 'Seguridad', description: 'Quita scripts y elementos potencialmente peligrosos.', icon: 'alert-triangle' },
      { title: 'Publicación', description: 'Prepara documentos para publicación pública.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué se elimina?', answer: 'Metadatos, comentarios, adjuntos, scripts, capas ocultas y más.' },
      { question: '¿Afecta el contenido visible?', answer: 'No, solo elimina información oculta.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Descifrar PDF',
    metaDescription: 'Elimina la protección con contraseña de documentos PDF.',
    keywords: ['descifrar pdf', 'quitar contraseña', 'desbloquear pdf'],
    description: '<p>Descifrar PDF elimina la protección con contraseña de documentos PDF cifrados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento cifrado.' },
      { step: 2, title: 'Ingresa Contraseña', description: 'Ingresa la contraseña del documento.' },
      { step: 3, title: 'Descifra y Descarga', description: 'Elimina el cifrado y descarga.' },
    ],
    useCases: [
      { title: 'Acceso a Documentos', description: 'Desbloquea PDFs para los que tienes la contraseña.', icon: 'unlock' },
      { title: 'Archivos', description: 'Elimina cifrado de documentos archivados.', icon: 'archive' },
      { title: 'Procesamiento', description: 'Prepara PDFs cifrados para otras operaciones.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Necesito la contraseña?', answer: 'Sí, necesitas la contraseña correcta para descifrar.' },
      { question: '¿Puedo descifrar sin contraseña?', answer: 'No, esta herramienta requiere la contraseña legítima.' },
      { question: '¿Se elimina toda la protección?', answer: 'Sí, el PDF resultante no tiene cifrado ni restricciones.' },
    ],
  },

  'flatten-pdf': {
    title: 'Aplanar PDF',
    metaDescription: 'Aplana formularios y anotaciones en documentos PDF.',
    keywords: ['aplanar pdf', 'flatten pdf', 'formularios pdf'],
    description: '<p>Aplanar PDF convierte formularios interactivos y anotaciones en contenido estático no editable.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Opciones', description: 'Elige qué elementos aplanar.' },
      { step: 3, title: 'Aplana y Descarga', description: 'Convierte a estático y descarga.' },
    ],
    useCases: [
      { title: 'Formularios Completados', description: 'Convierte formularios rellenados en documentos finales.', icon: 'file-check' },
      { title: 'Archivos', description: 'Crea versiones permanentes de documentos anotados.', icon: 'archive' },
      { title: 'Distribución', description: 'Prepara documentos para distribución sin edición.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué se aplana?', answer: 'Campos de formulario, anotaciones, comentarios y capas.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original con elementos editables.' },
      { question: '¿Afecta la apariencia?', answer: 'No, el documento se ve igual pero los elementos son estáticos.' },
    ],
  },

  'remove-metadata': {
    title: 'Eliminar Metadatos',
    metaDescription: 'Elimina todos los metadatos de documentos PDF.',
    keywords: ['eliminar metadatos pdf', 'quitar propiedades', 'limpiar metadatos'],
    description: '<p>Eliminar Metadatos quita toda la información de propiedades de tus documentos PDF para proteger la privacidad.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Confirma', description: 'Revisa los metadatos a eliminar.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita los metadatos y descarga.' },
    ],
    useCases: [
      { title: 'Privacidad', description: 'Elimina información de autor y fechas.', icon: 'shield' },
      { title: 'Anonimización', description: 'Prepara documentos para compartir anónimamente.', icon: 'user-x' },
      { title: 'Publicación', description: 'Limpia metadatos antes de publicar.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué metadatos se eliminan?', answer: 'Autor, título, asunto, palabras clave, fechas, productor, etc.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo elimina las propiedades del documento.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia si necesitas los metadatos.' },
    ],
  },

  'change-permissions': {
    title: 'Cambiar Permisos',
    metaDescription: 'Modifica los permisos de seguridad de documentos PDF.',
    keywords: ['permisos pdf', 'cambiar permisos', 'seguridad pdf'],
    description: '<p>Cambiar Permisos te permite modificar qué acciones están permitidas en tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Permisos', description: 'Selecciona qué acciones permitir o restringir.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Guarda los nuevos permisos y descarga.' },
    ],
    useCases: [
      { title: 'Proteger Contenido', description: 'Restringe copia y edición de documentos.', icon: 'lock' },
      { title: 'Control de Impresión', description: 'Limita o permite impresión.', icon: 'printer' },
      { title: 'Distribución', description: 'Configura permisos para distribución controlada.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué permisos puedo cambiar?', answer: 'Impresión, copia, edición, anotaciones, extracción de páginas.' },
      { question: '¿Necesito contraseña?', answer: 'Puedes establecer una contraseña de propietario para proteger los permisos.' },
      { question: '¿Son los permisos seguros?', answer: 'Los permisos pueden ser eludidos con herramientas especializadas.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF a PowerPoint',
    metaDescription: 'Convierte PDF a presentación PowerPoint (PPTX). Cada página se convierte en una diapositiva.',
    keywords: ['pdf a pptx', 'pdf a powerpoint', 'convertir pdf ppt', 'pdf diapositiva'],
    description: `
      <p>PDF a PowerPoint convierte tus documentos PDF en presentaciones de PowerPoint (PPTX) editables. Cada página del PDF se transforma en una diapositiva de alta calidad, preservando el diseño visual.</p>
      <p>Ideal para convertir informes o documentos en formato de presentación.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Calidad', description: 'Selecciona la calidad de imagen (DPI) de las diapositivas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea tu presentación PPTX y descarga.' },
    ],
    useCases: [
      { title: 'Crear Presentaciones', description: 'Convierte informes PDF en diapositivas para reuniones.', icon: 'presentation' },
      { title: 'Material de Formación', description: 'Transforma manuales PDF en presentaciones interactivas.', icon: 'book-open' },
      { title: 'Reutilizar Contenido', description: 'Usa contenido PDF existente en nuevas presentaciones.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '¿Son editables las diapositivas?', answer: 'Cada diapositiva contiene una imagen de la página. Puedes añadir elementos encima.' },
      { question: '¿Qué DPI debo usar?', answer: '150 DPI para pantalla, 300 DPI para impresión.' },
      { question: '¿Funciona con múltiples páginas?', answer: 'Sí, cada página se convierte en una diapositiva separada.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF a Excel',
    metaDescription: 'Convierte PDF a hoja de cálculo Excel. Extrae tablas a formato XLSX.',
    keywords: ['pdf a excel', 'pdf a xlsx', 'extraer tablas', 'datos pdf'],
    description: `
      <p>PDF a Excel convierte tus documentos PDF en hojas de cálculo Microsoft Excel (XLSX) editables. La herramienta detecta automáticamente las tablas en tu PDF y las extrae en hojas separadas.</p>
      <p>Ideal para analizar informes financieros, facturas o cualquier dato tabular.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Sube el archivo PDF con tablas.' },
      { step: 2, title: 'Procesar', description: 'La herramienta identifica y extrae tablas automáticamente.' },
      { step: 3, title: 'Descarga Excel', description: 'Descarga el archivo Excel con los datos extraídos.' },
    ],
    useCases: [
      { title: 'Análisis Financiero', description: 'Convierte estados de cuenta o facturas a Excel.', icon: 'trending-up' },
      { title: 'Extracción de Datos', description: 'Saca tablas de informes de investigación.', icon: 'database' },
      { title: 'Gestión de Inventario', description: 'Convierte listas de inventario de PDF a hoja de cálculo.', icon: 'clipboard' },
    ],
    faq: [
      { question: '¿Cómo maneja las tablas?', answer: 'Las tablas detectadas se extraen a hojas correspondientes en el Excel.' },
      { question: '¿Si no hay tablas?', answer: 'Se crea una hoja de información indicando que no se encontraron tablas.' },
      { question: '¿Se preserva el formato?', answer: 'Los datos se preservan, pero el formato visual complejo puede simplificarse.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email a PDF',
    metaDescription: 'Convierte archivos de correo electrónico (.eml, .msg) a documentos PDF. Preserva formato, imágenes en línea, enlaces clicables y adjuntos.',
    keywords: ['email a pdf', 'eml a pdf', 'msg a pdf', 'convertir email', 'outlook a pdf'],
    description: `
      <p>Email a PDF convierte tus archivos de correo electrónico (formatos .eml y .msg) en documentos PDF bien formateados. La herramienta preserva la información del encabezado del correo, el contenido del cuerpo, imágenes en línea con reemplazo CID, enlaces clicables e incrusta adjuntos directamente en el PDF.</p>
      <p>Personaliza las opciones de salida incluyendo tamaño de página (A4, Letter, Legal), formato de fecha con soporte de zona horaria, y si incluir campos CC/BCC e información de adjuntos.</p>
      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus correos permanezcan privados y seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivo de Email', description: 'Sube tu archivo de correo .eml o .msg.' },
      { step: 2, title: 'Configurar Opciones', description: 'Establece el tamaño de página, formato de fecha, zona horaria y elige qué campos incluir.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Convierte a PDF con adjuntos incrustados y descarga el resultado.' },
    ],
    useCases: [
      { title: 'Registros Legales', description: 'Archiva correos importantes como PDF con adjuntos incrustados para documentación legal.', icon: 'scale' },
      { title: 'Archivos Empresariales', description: 'Convierte correspondencia empresarial a PDF para conservación a largo plazo.', icon: 'briefcase' },
      { title: 'Preservación de Evidencia', description: 'Guarda evidencia de correos con imágenes en línea y adjuntos en formato PDF no editable.', icon: 'shield' },
    ],
    faq: [
      { question: '¿Qué formatos de email son compatibles?', answer: 'Tanto archivos .eml (RFC 822) como .msg (Microsoft Outlook) son totalmente compatibles.' },
      { question: '¿Se incluyen los adjuntos?', answer: '¡Sí! Los adjuntos se incrustan directamente en el archivo PDF. Puedes extraerlos del PDF usando un lector PDF compatible.' },
      { question: '¿Se muestran las imágenes en línea?', answer: 'Sí, las imágenes en línea referenciadas vía CID (Content-ID) se convierten automáticamente a URIs de datos base64 y se muestran en el PDF.' },
      { question: '¿Los enlaces son clicables?', answer: 'Sí, todos los enlaces HTML (etiquetas <a>) y URLs en correos de texto plano se convierten en enlaces clicables en el PDF.' },
      { question: '¿Se preserva el formato del email?', answer: 'Sí, los correos HTML mantienen su formato lo más posible, incluyendo estilos, imágenes y enlaces.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU a PDF',
    metaDescription: 'Convierte archivos de documentos DJVU a PDF. Renderizado de alta calidad para documentos escaneados y libros.',
    keywords: ['djvu a pdf', 'convertir djvu', 'convertidor djvu', 'djvu pdf', 'djv a pdf'],
    description: `
      <p>DJVU a PDF convierte archivos de documentos DjVu en documentos PDF de alta calidad. DjVu es un formato de archivo informático diseñado principalmente para almacenar documentos escaneados, especialmente aquellos que contienen una combinación de texto, dibujos lineales y fotografías.</p>
      <p>Esta herramienta renderiza cada página de tu archivo DJVU en el DPI elegido (puntos por pulgada) y los combina en un documento PDF buscable. Perfecto para convertir libros escaneados, manuales técnicos y documentos de archivo.</p>
      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados y seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivo DJVU', description: 'Arrastra y suelta tu archivo .djvu o .djv, o haz clic para seleccionar desde tu dispositivo.' },
      { step: 2, title: 'Configurar Opciones', description: 'Elige el DPI de salida (72, 150 o 300) y la calidad de imagen para el PDF.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Haz clic en Convertir a PDF y descarga tu documento convertido.' },
    ],
    useCases: [
      { title: 'Documentos de Archivo', description: 'Convierte archivos DJVU a formato PDF universal.', icon: 'archive' },
      { title: 'Compartir Libros Escaneados', description: 'Comparte libros escaneados en formato PDF para mayor compatibilidad.', icon: 'share-2' },
      { title: 'Imprimir Documentos', description: 'Convierte DJVU a PDF de alta calidad para impresión.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Qué es el formato DJVU?', answer: 'DjVu es un formato de archivo diseñado para almacenar documentos escaneados, especialmente aquellos con texto, dibujos e imágenes. Ofrece mejor compresión que PDF para contenido escaneado.' },
      { question: '¿Qué DPI debo elegir?', answer: '72 DPI es adecuado para visualización web, 150 DPI para documentos estándar y 300 DPI para impresión de alta calidad.' },
      { question: '¿El texto será buscable?', answer: 'El texto se renderizará como imágenes. Si necesitas texto buscable, considera usar nuestra herramienta OCR PDF después de la conversión.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 a PDF',
    metaDescription: 'Convierte libros electrónicos FictionBook (FB2) a PDF. Soporta múltiples archivos con renderizado de alta calidad.',
    keywords: ['fb2 a pdf', 'convertir fb2', 'fictionbook a pdf', 'convertidor fb2', 'fb2.zip a pdf'],
    description: `
      <p>FB2 a PDF convierte archivos de libros electrónicos FictionBook (FB2) en documentos PDF de alta calidad. FB2 es un formato de libro electrónico basado en XML muy popular ampliamente utilizado en Rusia y Europa del Este.</p>
      <p>Esta herramienta soporta tanto archivos .fb2 como .fb2.zip, y puede procesar múltiples archivos a la vez. Preserva el formato de texto, imágenes y la estructura de capítulos de tus libros electrónicos.</p>
      <p>Toda la conversión ocurre localmente en tu navegador usando tecnología de renderizado avanzada, asegurando que tus libros permanezcan privados y la conversión sea rápida.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivos FB2', description: 'Arrastra y suelta uno o más archivos .fb2 o .fb2.zip, o haz clic para seleccionar desde tu dispositivo.' },
      { step: 2, title: 'Seleccionar Calidad', description: 'Elige la calidad de salida: Baja (72 DPI), Media (150 DPI) o Alta (300 DPI).' },
      { step: 3, title: 'Convertir y Descargar', description: 'Haz clic en Convertir a PDF y descarga tu(s) documento(s) convertido(s).' },
    ],
    useCases: [
      { title: 'Imprimir Libros Electrónicos', description: 'Convierte libros electrónicos FB2 a PDF para impresión física.', icon: 'printer' },
      { title: 'Conversión por Lotes', description: 'Convierte múltiples archivos FB2 a PDF a la vez.', icon: 'layers' },
      { title: 'Formato Universal', description: 'Comparte libros electrónicos en formato PDF que funciona en cualquier dispositivo.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Puedo convertir múltiples archivos FB2 a la vez?', answer: '¡Sí! Esta herramienta soporta conversión por lotes de hasta 20 archivos FB2 simultáneamente.' },
      { question: '¿Se soportan archivos .fb2.zip?', answer: 'Sí, la herramienta extrae y convierte automáticamente archivos FB2 desde archivos .fb2.zip.' },
      { question: '¿Se preserva el formato?', answer: '¡Sí! La herramienta usa renderizado nativo FB2, preservando el formato de texto, imágenes y estructura de capítulos con alta fidelidad.' },
    ],
  },

  'deskew-pdf': {
    title: 'Enderezar PDF',
    metaDescription: 'Endereza automáticamente páginas PDF escaneadas o inclinadas. Corrige documentos sesgados con detección precisa de ángulos.',
    keywords: ['enderezar pdf', 'corregir pdf inclinado', 'arreglar escaneo inclinado', 'rotar pdf automático', 'corregir ángulo pdf'],
    description: `
      <p>Enderezar PDF detecta y corrige automáticamente páginas inclinadas o sesgadas en tus documentos PDF usando análisis avanzado de varianza de perfil de proyección. Esto es esencial para documentos escaneados que se alimentaron al escáner en un ángulo.</p>
      <p>La herramienta analiza la alineación de texto y contenido en diferentes ángulos para encontrar la rotación óptima, luego aplica la corrección. Puedes ajustar el umbral de sensibilidad (1-30) y la configuración DPI (72-300) para obtener resultados óptimos.</p>
      <p>Todo el procesamiento ocurre localmente en tu navegador usando tecnología WebAssembly, asegurando que tus documentos permanezcan privados y seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir tu PDF', description: 'Arrastra y suelta tu archivo PDF escaneado o haz clic para seleccionar.' },
      { step: 2, title: 'Configurar Ajustes', description: 'Ajusta la sensibilidad del umbral y DPI si es necesario para una mejor detección.' },
      { step: 3, title: 'Procesar y Descargar', description: 'Haz clic en Enderezar para enderezar las páginas y descargar el PDF corregido.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Corrige páginas que se escanearon en un ángulo desde alimentadores de documentos.', icon: 'scan' },
      { title: 'Escaneos Móviles', description: 'Corrige fotos inclinadas de documentos tomadas con smartphones.', icon: 'smartphone' },
      { title: 'Restauración de Archivos', description: 'Endereza archivos escaneados antiguos para mejor legibilidad.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué tan precisa es la detección de ángulos?', answer: 'La herramienta usa análisis de varianza de perfil de proyección para detectar ángulos de sesgo de hasta ±10 grados con alta precisión. Omite automáticamente páginas con ángulos menores a 0.3 grados.' },
      { question: '¿Se verá afectada la calidad del texto?', answer: 'Para rotaciones en múltiplos de 90 grados, no ocurre pérdida de calidad. Para otros ángulos, la herramienta redondea al grado más cercano y mantiene buena calidad.' },
      { question: '¿Puedo enderezar solo páginas específicas?', answer: 'La herramienta analiza todas las páginas pero solo corrige aquellas con sesgo detectado por encima del umbral de sensibilidad. Las páginas con sesgo mínimo se dejan sin cambios.' },
      { question: '¿Qué es el umbral de sensibilidad?', answer: 'Los valores 1-10 corrigen solo inclinaciones obvias, 11-20 detectan sesgo moderado, y 21-30 capturan ángulos sutiles. El predeterminado es 10 para detección equilibrada.' },
      { question: '¿Cuánto tiempo toma el procesamiento?', answer: 'El tiempo de procesamiento depende del tamaño del archivo y DPI. 150 DPI (predeterminado) proporciona un buen equilibrio entre velocidad y precisión. DPI más alto es más preciso pero más lento.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF a PDF/A',
    metaDescription: 'Convierte PDF a formato de archivo PDF/A. Asegura la preservación de documentos a largo plazo con estándares ISO.',
    keywords: ['pdf a pdfa', 'convertidor pdfa', 'archivar pdf', 'archivo pdf', 'preservación a largo plazo'],
    description: `
      <p>PDF a PDF/A convierte tus documentos PDF al formato PDF/A, el estándar ISO para archivo de documentos a largo plazo. PDF/A asegura que los documentos serán visibles y reproducibles durante décadas.</p>
      <p>Elige entre PDF/A-1b (conformidad básica), PDF/A-2b (recomendado, soporta transparencia) o PDF/A-3b (permite archivos incrustados). La herramienta incrusta fuentes y aplana la transparencia según sea necesario.</p>
      <p>Toda la conversión ocurre localmente en tu navegador, asegurando que tus documentos permanezcan privados.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir tu PDF', description: 'Sube el PDF que deseas convertir a PDF/A.' },
      { step: 2, title: 'Seleccionar Nivel PDF/A', description: 'Elige el nivel de conformidad PDF/A-1b, PDF/A-2b o PDF/A-3b.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Convierte a PDF/A y descarga el documento de archivo.' },
    ],
    useCases: [
      { title: 'Archivos Legales', description: 'Convierte documentos legales a PDF/A para almacenamiento a largo plazo admisible en tribunales.', icon: 'scale' },
      { title: 'Registros Gubernamentales', description: 'Cumple con los requisitos de archivo gubernamental usando PDF/A.', icon: 'building' },
      { title: 'Archivos Empresariales', description: 'Preserva documentos empresariales importantes para accesibilidad futura.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué nivel de PDF/A debo usar?', answer: 'PDF/A-2b es recomendado para la mayoría de usos. Usa 1b para máxima compatibilidad o 3b si necesitas archivos incrustados.' },
      { question: '¿Qué hace diferente a PDF/A?', answer: 'PDF/A incrusta fuentes, deshabilita el cifrado y asegura que todos los elementos sean autocontenidos para visualización futura.' },
      { question: '¿Puedo convertir de vuelta desde PDF/A?', answer: 'Los archivos PDF/A son PDFs estándar y se pueden abrir normalmente. Las características de archivo agregan restricciones, no limitaciones.' },
    ],
  },

  'compress-pdf': {
    title: 'Comprimir PDF',
    metaDescription: 'Reduce el tamaño de tus archivos PDF sin perder calidad. Optimizador de PDF gratuito y rápido.',
    keywords: ['comprimir pdf', 'reducir tamaño pdf', 'optimizar pdf', 'pdf pequeño'],
    description: `
      <p>Comprimir PDF reduce significativamente el tamaño de tus documentos optimizando imágenes y eliminando datos redundantes, manteniendo una excelente calidad visual. Perfecto para enviar archivos por correo electrónico o subirlos a la web.</p>
      <p>Elige entre tres niveles de compresión: Extrema (máximo ahorro, menor calidad), Recomendada (equilibrio perfecto) o Baja (máxima calidad, menor ahorro).</p>
      <p>Todo el procesamiento ocurre localmente en tu navegador, garantizando que tus documentos privados nunca salgan de tu dispositivo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Arrastra y suelta tu archivo PDF o haz clic para seleccionar desde tu computadora.' },
      { step: 2, title: 'Elegir Nivel', description: 'Selecciona la intensidad de compresión que mejor se adapte a tus necesidades.' },
      { step: 3, title: 'Comprimir y Descargar', description: 'Haz clic en Comprimir y obtén tu archivo optimizado al instante.' },
    ],
    useCases: [
      { title: 'Enviar por Email', description: 'Reduce archivos grandes para superar los límites de adjuntos de correo.', icon: 'mail' },
      { title: 'Optimización Web', description: 'Mejora los tiempos de carga de tu sitio web usando PDFs más ligeros.', icon: 'globe' },
      { title: 'Ahorro de Espacio', description: 'Libera almacenamiento en tu disco duro o nube comprimiendo tus documentos.', icon: 'hard-drive' },
    ],
    faq: [
      { question: '¿Se pierde calidad?', answer: 'La compresión recomendada mantiene una calidad visual casi idéntica a la original.' },
      { question: '¿Cuánto reduce el tamaño?', answer: 'Dependiendo del contenido, puedes ahorrar desde un 20% hasta un 90% del espacio.' },
      { question: '¿Es seguro?', answer: 'Sí, tus archivos no se suben a ningún servidor; todo ocurre en tu navegador.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD a PDF',
    metaDescription: 'Convierte archivos de Photoshop (PSD) a documentos PDF. Convierte diseños a formato compartible.',
    keywords: ['psd a pdf', 'photoshop a pdf', 'convertir diseño pdf', 'imagen psd pdf'],
    description: `
      <p>PSD a PDF convierte tus diseños de Adobe Photoshop en documentos PDF de alta fidelidad. Es ideal para compartir pruebas de diseño con clientes o preparar archivos para impresión.</p>
      <p>El convertidor aplana las capas de forma inteligente para asegurar que el diseño se vea exactamente como en Photoshop, manteniendo la nitidez de los elementos vectoriales y textos.</p>
      <p>La conversión ocurre íntegramente en tu navegador, manteniendo tus diseños creativos privados y seguros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivo PSD', description: 'Selecciona tu archivo de Photoshop .psd desde tu dispositivo.' },
      { step: 2, title: 'Ajustar Opciones', description: 'Configura el tamaño de página y la orientación deseada.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Genera tu PDF profesional y descárgalo en segundos.' },
    ],
    useCases: [
      { title: 'Revisiones de Diseño', description: 'Envía propuestas de diseño a clientes en un formato universal y fácil de abrir.', icon: 'eye' },
      { title: 'Preparación para Imprenta', description: 'Convierte archivos PSD a PDF listos para impresión profesional.', icon: 'printer' },
      { title: 'Portafolios', description: 'Añade tus trabajos de Photoshop a un portafolio PDF consolidado.', icon: 'briefcase' },
    ],
    faq: [
      { question: '¿Soporta capas?', answer: 'La conversión aplana el diseño para asegurar compatibilidad universal en el PDF.' },
      { question: '¿Qué resolución tiene?', answer: 'Mantenemos la resolución original del archivo PSD para máxima nitidez.' },
      { question: '¿Necesito Photoshop?', answer: 'No, puedes convertir archivos PSD sin tener Adobe Photoshop instalado.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word a PDF',
    metaDescription: 'Convierte documentos de Word (.doc, .docx) a PDF con fidelidad perfecta. Gratis y sin registro.',
    keywords: ['word a pdf', 'convertir docx a pdf', 'doc a pdf', 'documento word a pdf'],
    description: `
      <p>Word a PDF transforma tus documentos de Microsoft Word (.docx y .doc) en archivos PDF profesionales. Nuestra tecnología de renderizado garantiza que el formato, las fuentes y las tablas se mantengan exactamente igual.</p>
      <p>Es la forma más rápida y segura de convertir tus escritos en un formato no editable y universalmente compatible.</p>
      <p>Toda la conversión es local; tus documentos confidenciales nunca se suben a la nube.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Docx/Doc', description: 'Arrastra tus archivos de Word al área de carga.' },
      { step: 2, title: 'Procesar', description: 'La herramienta analizará tu documento y lo preparará para la conversión.' },
      { step: 3, title: 'Descargar PDF', description: 'Obtén tu archivo PDF convertido con el diseño original preservado.' },
    ],
    useCases: [
      { title: 'Presentación de Informes', description: 'Convierte informes internos en documentos finales listos para distribución.', icon: 'file-text' },
      { title: 'Envío de Currículums', description: 'Asegura que tu CV se vea igual en cualquier dispositivo enviándolo como PDF.', icon: 'user' },
      { title: 'Documentación Oficial', description: 'Convierte cartas y formularios para que no puedan ser modificados fácilmente.', icon: 'shield' },
    ],
    faq: [
      { question: '¿Soporta fotos y tablas?', answer: 'Sí, todos los elementos visuales de Word se preservan fielmente.' },
      { question: '¿Es compatible con .doc antiguo?', answer: 'Soportamos tanto el formato moderno .docx como el antiguo .doc.' },
      { question: '¿Se alteran las fuentes?', answer: 'Incrustamos las fuentes necesarias para que el PDF se vea igual en todas partes.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel a PDF',
    metaDescription: 'Convierte hojas de cálculo de Excel (.xlsx, .xls) a PDF. Ajusta tus tablas a formato de página.',
    keywords: ['excel a pdf', 'convertir xlsx a pdf', 'hoja de cálculo a pdf', 'tablas excel pdf'],
    description: `
      <p>Excel a PDF convierte tus hojas de datos de Microsoft Excel (.xlsx y .xls) en documentos PDF limpios y organizados. Ideal para compartir reportes de datos sin que las celdas se desajusten.</p>
      <p>Puedes elegir ajustar todas las columnas a una sola página o mantener el tamaño original. La herramienta maneja múltiples pestañas de forma inteligente.</p>
      <p>Privacidad absoluta: el procesamiento de tus datos financieros y personales es 100% local en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Excel', description: 'Selecciona el archivo de Excel que deseas convertir.' },
      { step: 2, title: 'Ajustar Diseño', description: 'Elige si deseas ajustar el ancho de la tabla a la página o usar el tamaño real.' },
      { step: 3, title: 'Convertir y Guardar', description: 'Genera el PDF y descarga tus datos formateados.' },
    ],
    useCases: [
      { title: 'Reportes Financieros', description: 'Crea versiones no editables de balances y estados de cuenta.', icon: 'bar-chart' },
      { title: 'Listas de Precios', description: 'Convierte catálogos de Excel en folletos PDF legibles para clientes.', icon: 'tag' },
      { title: 'Análisis de Datos', description: 'Comparte resúmenes de datos complejos en un formato fácil de leer y archivar.', icon: 'database' },
    ],
    faq: [
      { question: '¿Qué pasa con las fórmulas?', answer: 'El PDF mostrará los resultados finales de las fórmulas, no el código.' },
      { question: '¿Soporta gráficos?', answer: 'Sí, todos los gráficos integrados en Excel se renderizan perfectamente en el PDF.' },
      { question: '¿Puedo elegir qué hojas convertir?', answer: 'Puedes convertir el libro completo o solo la hoja activa.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint a PDF',
    metaDescription: 'Convierte presentaciones de PowerPoint (.pptx, .ppt) a PDF. Ideal para dar presentaciones o compartir diapositivas.',
    keywords: ['powerpoint a pdf', 'pptx a pdf', 'convertir diapositivas pdf', 'ppt a pdf'],
    description: `
      <p>PowerPoint a PDF convierte tus diapositivas de presentación en un documento PDF estático. Es la mejor forma de asegurar que tus presentaciones se vean bien en cualquier proyector o pantalla sin depender de la versión de PowerPoint.</p>
      <p>Preserva fuentes personalizadas, transiciones visuales (como imágenes estáticas) y el diseño exacto de tus diapositivas.</p>
      <p>Convierte tus presentaciones de forma privada; nada se sube a Internet, todo ocurre en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Diapositivas', description: 'Selecciona tu archivo .pptx o .ppt.' },
      { step: 2, title: 'Ajustar Página', description: 'Selecciona el tamaño de página (usualmente el tamaño de la diapositiva).' },
      { step: 3, title: 'Convertir y Descargar', description: 'Obtén tu PDF listo para ser compartido o impreso.' },
    ],
    useCases: [
      { title: 'Entregar Material', description: 'Proporciona a tus alumnos o clientes una copia en PDF de tu presentación.', icon: 'graduation-cap' },
      { title: 'Impresión de Diapositivas', description: 'Imprime tus ppts con facilidad asegurando que no haya cortes de margen.', icon: 'printer' },
      { title: 'Visualización Móvil', description: 'Facilita la lectura de presentaciones en teléfonos y tablets sin apps pesadas.', icon: 'smartphone' },
    ],
    faq: [
      { question: '¿Se pierden las animaciones?', answer: 'Las animaciones son dinámicas y se convierten en el estado final de la diapositiva en el PDF.' },
      { question: '¿Es compatible con Google Slides?', answer: 'Sí, si descargas tu Google Slide como .pptx primero.' },
      { question: '¿Puedo convertir PPT antiguo?', answer: 'Sí, aceptamos tanto .pptx como el formato antiguo .ppt.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS a PDF',
    metaDescription: 'Convierte archivos XPS y OXPS a PDF. Preserva el diseño del documento original.',
    keywords: ['xps a pdf', 'oxps a pdf', 'convertir xps pdf', 'microsoft xps a pdf'],
    description: `
      <p>XPS a PDF convierte tus documentos XPS (XML Paper Specification) y OXPS en archivos PDF universales. Esto asegura que tus archivos de Microsoft sean legibles en cualquier dispositivo y sistema operativo.</p>
      <p>Nuestra herramienta de alta precisión mantiene el diseño vectorial, las fuentes incrustadas y la estructura exacta de tus documentos originales.</p>
      <p>Toda la conversión es privada y se realiza localmente en tu navegador; tus documentos nunca viajan por la red.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir XPS/OXPS', description: 'Selecciona el archivo de Microsoft XPS que deseas convertir.' },
      { step: 2, title: 'Configurar', description: 'Elige la calidad de renderizado deseada.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Procesa el archivo y obtén tu PDF profesional al instante.' },
    ],
    useCases: [
      { title: 'Compatibilidad Mac/Móvil', description: 'Abre archivos XPS de Windows en cualquier Mac, iPhone o dispositivo Android.', icon: 'smartphone' },
      { title: 'Archivado Estándar', description: 'Convierte documentos XPS heredados al estándar PDF para preservación a largo plazo.', icon: 'archive' },
      { title: 'Compartir sin Errores', description: 'Evita problemas de visualización al enviar documentos XPS convirtiéndolos primero a PDF.', icon: 'share' },
    ],
    faq: [
      { question: '¿Qué es XPS?', answer: 'Es el formato de Microsoft similar al PDF, comúnmente usado para imprimir en Windows.' },
      { question: '¿Soporta OXPS?', answer: 'Sí, soportamos tanto el formato XPS original como el estándar OpenXPS (OXPS).' },
      { question: '¿Necesito visores especiales?', answer: 'No, una vez convertido a PDF podrás abrirlo con cualquier navegador o lector de PDF estándar.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF a PDF',
    metaDescription: 'Convierte archivos de texto enriquecido (RTF) a PDF. Mantiene formato de texto y estilos.',
    keywords: ['rtf a pdf', 'convertir rich text a pdf', 'texto enriquecido pdf', 'rtf lector pdf'],
    description: `
      <p>RTF a PDF convierte tus archivos de Rich Text Format en documentos PDF de alta calidad. Mantiene el formato de texto, estilos de fuente, alineaciones y elementos básicos del documento original.</p>
      <p>Ideal para convertir notas de WordPad o documentos de texto con formato simple en archivos PDF compartibles y seguros.</p>
      <p>Privacidad total: el procesamiento ocurre dentro de tu ventana de navegación sin enviar datos a servidores externos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir RTF', description: 'Carga tu archivo .rtf desde tu computadora.' },
      { step: 2, title: 'Ajustar Página', description: 'Configura los márgenes y el tamaño de papel si es necesario.' },
      { step: 3, title: 'Convertir y Guardar', description: 'Descarga tu nuevo PDF con todo el estilo de texto preservado.' },
    ],
    useCases: [
      { title: 'Notas de WordPad', description: 'Convierte tus notas rápidas de Windows en documentos PDF profesionales.', icon: 'file-text' },
      { title: 'Documentación Ligera', description: 'Crea PDFs a partir de manuales o guías escritas en formato de texto enriquecido.', icon: 'book' },
      { title: 'Mailing List', description: 'Convierte borradores de correos o plantillas RTF en PDFs para adjuntar.', icon: 'mail' },
    ],
    faq: [
      { question: '¿Se mantienen los colores?', answer: 'Sí, todos los colores de texto y resaltados en el RTF se conservan en el PDF.' },
      { question: '¿Soporta imágenes?', answer: 'Soportamos imágenes básicas incrustadas en el archivo RTF.' },
      { question: '¿Qué tamaño de página usa?', answer: 'Por defecto utiliza tamaño A4, pero puedes personalizarlo en los ajustes.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB a PDF',
    metaDescription: 'Convierte libros electrónicos EPUB a PDF. Lee tus ebooks en cualquier dispositivo sin necesidad de lectores especiales.',
    keywords: ['epub a pdf', 'convertir ebook a pdf', 'libro digital a pdf', 'epub reader pdf'],
    description: `
      <p>EPUB a PDF convierte tus libros electrónicos y publicaciones digitales en documentos PDF. Esto congela la distribución del texto en un formato de página fija, ideal para imprimir o leer en dispositivos sin soporte de ebooks.</p>
      <p>Mantiene la estructura de capítulos, tablas e imágenes del libro original mientras optimiza la legibilidad en el nuevo formato.</p>
      <p>Toda la conversión se realiza localmente en tu navegador; tus libros favoritos permanecen privados y protegidos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir EPUB', description: 'Selecciona el archivo de ebook .epub que deseas convertir.' },
      { step: 2, title: 'Configurar Diseño', description: 'Elige el tamaño de página y la fuente que prefieras para tu PDF.' },
      { step: 3, title: 'Convertir y Leer', description: 'Genera el PDF y descárgalo para disfrutar de tu lectura en cualquier parte.' },
    ],
    useCases: [
      { title: 'Impresión de Ebooks', description: 'Convierte libros digitales para poder imprimirlos con un diseño de página consistente.', icon: 'printer' },
      { title: 'Compatibilidad Universal', description: 'Lee tus archivos EPUB en cualquier aparato que soporte PDF sin apps adicionales.', icon: 'monitor' },
      { title: 'Estudio y Anotación', description: 'Convierte ebooks a PDF para poder resaltarlos y comentarlos con herramientas de PDF estándar.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Mantiene la tabla de contenidos?', answer: 'Sí, intentamos preservar los enlaces de capítulos y la estructura del índice.' },
      { question: '¿Puedo convertir ebooks protegidos?', answer: 'No, no podemos convertir archivos con protección DRM de derechos de autor.' },
      { question: '¿Se ve igual que el ebook?', answer: 'El PDF tendrá un diseño de página fijo, por lo que el texto ya no fluirá como en un e-reader.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI a PDF',
    metaDescription: 'Convierte archivos MOBI de Kindle a PDF. Accede a tus libros de Amazon en cualquier pantalla.',
    keywords: ['mobi a pdf', 'kindle a pdf', 'azw a pdf', 'convertir mobi pdf'],
    description: `
      <p>MOBI a PDF convierte tus archivos de libro electrónico en formato Kindle (.mobi o .azw) a documentos PDF estándar. Perfecto para liberar tus libros y leerlos fuera del ecosistema de Amazon.</p>
      <p>La herramienta renderiza el contenido del libro con alta calidad, asegurando que el texto y las imágenes se presenten de forma clara y legible.</p>
      <p>Conversión 100% privada: tus archivos se procesan en tu navegador y nunca se comparten ni se almacenan en servidores.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir MOBI/AZW', description: 'Selecciona tu archivo de Kindle desde tu dispositivo.' },
      { step: 2, title: 'Ajustar Salida', description: 'Selecciona el tamaño de página (A4, Carta, etc.) para el PDF final.' },
      { step: 3, title: 'Convertir y Descargar', description: 'En segundos, tendrás tu libro convertido a PDF y listo para usar.' },
    ],
    useCases: [
      { title: 'Lectura sin Kindle', description: 'Lee tus archivos MOBI en computadoras o tablets que no tienen la app de Kindle instalada.', icon: 'book-open' },
      { title: 'Compartir Libros', description: 'Convierte documentos en formato MOBI a PDF para que cualquiera pueda leerlos fácilmente.', icon: 'share' },
      { title: 'Archivo Personal', description: 'Guarda tus libros electrónicos en un formato estándar de la industria (PDF) para el futuro.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Sirve para archivos AZW3?', answer: 'Sí, soportamos la mayoría de variaciones de formatos de Kindle, incluyendo AZW y AZW3.' },
      { question: '¿Necesito cuenta de Amazon?', answer: 'No, solo necesitas tener el archivo legalmente descargado en tu dispositivo.' },
      { question: '¿Qué pasa con el DRM?', answer: 'Solo podemos convertir archivos que no tengan protección digital DRM.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF a SVG',
    metaDescription: 'Convierte páginas de PDF a gráficos vectoriales SVG. Mantén la escalabilidad infinita para diseño web y edición.',
    keywords: ['pdf a svg', 'convertir pdf vectorial', 'pdf a vector', 'extraer svg pdf'],
    description: `
      <p>PDF a SVG convierte las páginas de tus documentos PDF en archivos de Gráficos Vectoriales Escalables (SVG). A diferencia de las imágenes comunes, los archivos SVG pueden ampliarse infinitamente sin perder nitidez.</p>
      <p>Es la herramienta perfecta para diseñadores que necesitan extraer logotipos, iconos o diagramas de un PDF para editarlos en herramientas como Illustrator, Inkscape o usarlos directamente en la web.</p>
      <p>El procesamiento es local y seguro; tus documentos nunca salen de tu navegador durante la extracción vectorial.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el documento que contiene los gráficos que deseas extraer.' },
      { step: 2, title: 'Seleccionar Páginas', description: 'Elige qué páginas del PDF quieres convertir a formato vectorial SVG.' },
      { step: 3, title: 'Convertir y Obtener', description: 'Descarga tus archivos SVG escalables, listos para diseño o uso web.' },
    ],
    useCases: [
      { title: 'Diseño Web', description: 'Inserta gráficos de alta calidad desde un PDF en tu sitio web usando archivos SVG ligeros.', icon: 'code' },
      { title: 'Edición Gráfica', description: 'Extrae elementos de un PDF para editarlos como vectores reales en software de diseño.', icon: 'pen-tool' },
      { title: 'Presentaciones de Alta Calidad', description: 'Usa SVGs extraídos de PDFs para que tus gráficos se vean perfectos en cualquier resolución.', icon: 'image' },
    ],
    faq: [
      { question: '¿El texto sigue siendo vectorial?', answer: 'Sí, intentamos mantener el texto como trazados vectoriales para máxima fidelidad visual.' },
      { question: '¿Puedo convertir todo el PDF?', answer: 'Sí, cada página se convertirá en un archivo SVG individual y se entregará en un paquete ZIP.' },
      { question: '¿Funciona con fotos?', answer: 'Las fotos dentro del PDF se incrustarán como imágenes dentro del archivo SVG.' },
    ],
  },

  'pdf-to-txt': {
    title: 'PDF a Texto',
    metaDescription: 'Extrae texto plano de archivos PDF. Convierte PDF a TXT con alta precisión.',
    keywords: ['pdf a texto', 'pdf a txt', 'extraer texto pdf', 'contenido pdf a texto'],
    description: `
      <p>PDF a Texto extrae todo el contenido escrito de tus documentos PDF y lo convierte en archivos de texto plano (.txt). Es la forma más rápida de obtener el texto crudo sin ningún formato para usarlo en otras aplicaciones.</p>
      <p>Nuestra herramienta utiliza algoritmos avanzados para mantener el orden de lectura y la estructura de los párrafos, asegurando que el texto extraído sea coherente.</p>
      <p>Todo el procesamiento se realiza localmente en tu navegador, garantizando que tu contenido permanezca completamente privado.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Arrastra tu archivo PDF o selecciónalo desde tu dispositivo.' },
      { step: 2, title: 'Configurar', description: 'Elige si deseas mantener el diseño básico o solo el texto continuo.' },
      { step: 3, title: 'Extraer y Descargar', description: 'Haz clic en el botón para generar tu archivo .txt al instante.' },
    ],
    useCases: [
      { title: 'Limpieza de Datos', description: 'Extrae información de informes PDF para procesarla en scripts o bases de datos.', icon: 'database' },
      { title: 'Reutilización de Contenido', description: 'Copia fácilmente textos largos de documentos PDF para editarlos en cualquier editor de texto.', icon: 'edit' },
      { title: 'Accesibilidad', description: 'Convierte documentos complejos en texto simple para lectores de pantalla o procesamiento de lenguaje.', icon: 'user-check' },
    ],
    faq: [
      { question: '¿Mantiene las imágenes?', answer: 'No, esta herramienta solo extrae el contenido de texto. Las imágenes son ignoradas.' },
      { question: '¿Funciona con PDFs escaneados?', answer: 'Si el PDF es solo una imagen de texto, necesitarás usar nuestra herramienta OCR PDF primero.' },
      { question: '¿Soporta caracteres especiales?', answer: 'Sí, soporta codificación UTF-8 para preservar tildes y caracteres de diversos idiomas.' },
    ],
  },

  'extract-images': {
    title: 'Extraer Imágenes de PDF',
    metaDescription: 'Extrae todas las imágenes incrustadas de un archivo PDF. Guarda fotos de PDF como JPG o PNG.',
    keywords: ['extraer imágenes pdf', 'sacar fotos pdf', 'guardar imágenes pdf', 'pdf a imagen'],
    description: `
      <p>Extraer Imágenes de PDF te permite sacar todas las fotografías, ilustraciones y gráficos incrustados en tu documento y guardarlos como archivos de imagen individuales.</p>
      <p>En lugar de convertir una página completa en una imagen, esta herramienta identifica y extrae los objetos de imagen reales en su calidad original.</p>
      <p>La extracción es local y segura; tus imágenes nunca se descargan a nuestros servidores, todo sucede en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el PDF que contiene las imágenes que deseas extraer.' },
      { step: 2, title: 'Extraer', description: 'La herramienta analizará el archivo y encontrará todas las imágenes incrustadas.' },
      { step: 3, title: 'Descargar Imágenes', description: 'Obtén todas tus imágenes en un práctico archivo ZIP listo para usar.' },
    ],
    useCases: [
      { title: 'Recuperar Fotografías', description: 'Saca fotos de alta calidad de folletos o informes para usarlas en otros proyectos.', icon: 'camera' },
      { title: 'Asset Management', description: 'Desglosa documentos de marketing para obtener los elementos gráficos por separado.', icon: 'image' },
      { title: 'Limpiar Documentos', description: 'Identifica qué imágenes están ocupando espacio en tus archivos PDF.', icon: 'package' },
    ],
    faq: [
      { question: '¿En qué formato se guardan?', answer: 'Se extraen usualmente en su formato original (JPG o PNG).' },
      { question: '¿Se pierde calidad?', answer: 'No, las imágenes se extraen con la misma resolución y calidad con la que fueron incrustadas.' },
      { question: '¿Extrae logotipos vectoriales?', answer: 'Extrae objetos de imagen. Para logotipos vectoriales, considera usar PDF a SVG.' },
    ],
  },

  'add-metadata': {
    title: 'Añadir Metadatos al PDF',
    metaDescription: 'Añade o edita información del documento PDF como Título, Autor, Asunto y Palabras Clave.',
    keywords: ['añadir metadatos pdf', 'editar propiedades pdf', 'metadatos documento', 'autor pdf'],
    description: `
      <p>Añadir Metadatos al PDF te permite personalizar la información interna de tus documentos. Esto ayuda a organizar archivos y mejorar la visibilidad en los resultados de búsqueda.</p>
      <p>Puedes establecer el título del documento, el autor, el asunto, el productor y las palabras clave. Estos datos son los que aparecen en las propiedades del archivo en cualquier visor de PDF.</p>
      <p>Privacidad garantizada: la edición de metadatos se realiza localmente en tu navegador sin subir el archivo a internet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el archivo PDF al que deseas añadir información.' },
      { step: 2, title: 'Ingresar Datos', description: 'Completa los campos de Título, Autor, Asunto y Etiquetas.' },
      { step: 3, title: 'Aplicar y Descargar', description: 'Guarda los cambios y obtén tu documento con los nuevos metadatos incrustados.' },
    ],
    useCases: [
      { title: 'SEO de Documentos', description: 'Añade títulos y palabras clave para que tus PDFs sean más fáciles de encontrar en la web.', icon: 'search' },
      { title: 'Identificación de Propiedad', description: 'Asegura que tu nombre o el de tu empresa aparezca como autor del documento.', icon: 'user' },
      { title: 'Organización de Archivos', description: 'Etiqueta tus archivos con asuntos específicos para mejorar la búsqueda en tu computadora.', icon: 'folder' },
    ],
    faq: [
      { question: '¿Dónde se ven estos datos?', answer: 'En las "Propiedades del Documento" dentro de cualquier lector de PDF.' },
      { question: '¿Mantiene los metadatos anteriores?', answer: 'Puedes elegir entre sobrescribirlos o añadir nuevos.' },
      { question: '¿Es compatible con XMP?', answer: 'Sí, la herramienta actualiza tanto los metadatos básicos como los campos XMP estándar.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF a Word (DOCX)',
    metaDescription: 'Estructura tus documentos PDF a Microsoft Word (.docx). Convierte PDF en texto editable con el diseño original.',
    keywords: ['pdf a word', 'pdf a docx', 'convertir pdf editable', 'pdf a texto editable'],
    description: `
      <p>PDF a Word (DOCX) convierte tus archivos PDF en documentos de texto totalmente editables. Nuestra tecnología de conversión intenta mantener el diseño, las tablas, las listas y la jerarquía de texto del PDF original.</p>
      <p>Es la herramienta ideal para actualizar documentos de los que has perdido el archivo fuente o para editar rápidamente el contenido de un informe.</p>
      <p>Toda la conversión es local y segura; tus documentos confidenciales nunca se suben a la nube.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Arrastra tu archivo PDF o selecciónalo para comenzar la conversión.' },
      { step: 2, title: 'Procesar', description: 'La herramienta analizará la estructura del documento para recrearlo en Word.' },
      { step: 3, title: 'Descargar DOCX', description: 'Obtén tu archivo de Word editable manteniendo la mayor fidelidad posible.' },
    ],
    useCases: [
      { title: 'Edición de Contratos', description: 'Convierte un contrato PDF para sugerir cambios o correcciones en Word.', icon: 'edit-3' },
      { title: 'Actualización de Manuales', description: 'Recupera manuales antiguos en formato PDF para actualizarlos fácilmente en Word.', icon: 'refresh-ccw' },
      { title: 'Reutilizar Plantillas', description: 'Usa el diseño de un PDF existente como base para un nuevo documento de Word.', icon: 'copy' },
    ],
    faq: [
      { question: '¿Qué tan editable es el resultado?', answer: 'Hacemos lo posible por crear texto fluido, aunque diseños muy complejos pueden requerir ajustes manuales.' },
      { question: '¿Funciona con escaneos?', answer: 'Si el PDF es una imagen, recomendamos usar primero nuestra herramienta OCR PDF.' },
      { question: '¿Afecta al archivo original?', answer: 'No, el archivo original permanece intacto y el nuevo archivo DOCX se descarga por separado.' },
    ],
  },

  'pdf-booklet': {
    title: 'Crear Folleto PDF',
    metaDescription: 'Convierte tus páginas PDF en un diseño de folleto para impresión. Organiza páginas para plegar y grapar.',
    keywords: ['folleto pdf', 'imprimir folleto', 'booklet pdf', 'organizar páginas folleto'],
    description: `
      <p>Crear Folleto PDF reorganiza las páginas de tu documento para que, al imprimirlas y plegarlas por la mitad, formen un folleto con el orden de lectura correcto.</p>
      <p>La herramienta calcula automáticamente la posición de cada página (ej: la última página junto a la primera) para una impresión de doble cara perfecta (estilo sillín).</p>
      <p>La reorganización ocurre localmente en tu navegador, manteniendo tu privacidad y permitiendo una preparación rápida para imprenta.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el documento que deseas imprimir como folleto.' },
      { step: 2, title: 'Configurar Imprimación', description: 'Selecciona el tamaño de papel final y si deseas incluir marcas de corte.' },
      { step: 3, title: 'Generar y Descargar', description: 'Obtén el PDF listo para imprimir en doble cara y montar tu folleto.' },
    ],
    useCases: [
      { title: 'Programas de Eventos', description: 'Crea folletos profesionales para bodas, conciertos o conferencias.', icon: 'calendar' },
      { title: 'Revistas y Zines', description: 'Prepara tus diseños editoriales para una impresión casera o profesional rápida.', icon: 'book' },
      { title: 'Manuales Rápidos', description: 'Convierte guías largas en folletos compactos fáciles de manejar y leer.', icon: 'book-open' },
    ],
    faq: [
      { question: '¿Cuántas páginas debo tener?', answer: 'Para un plegado perfecto, el número de páginas idealmente debe ser múltiplo de 4.' },
      { question: '¿Cómo debo imprimirlo?', answer: 'Debes seleccionar la opción de "Impresión en ambos lados" (Dúplex) y "Voltear en el borde corto".' },
      { question: '¿Añade páginas en blanco?', answer: 'Sí, la herramienta añadirá automáticamente páginas en blanco al final si es necesario para completar el folleto.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterizar PDF',
    metaDescription: 'Convierte páginas PDF en imágenes de mapa de bits (raster). Útil para seguridad y aplanado de documentos.',
    keywords: ['rasterizar pdf', 'pdf a imagen raster', 'aplanar pdf imagen', 'seguridad pdf'],
    description: `
      <p>Rasterizar PDF convierte cada página de tu documento en una imagen de mapa de bits de alta resolución. Este proceso elimina todas las capas vectoriales, textos seleccionables y metadatos, dejando solo una representación visual fija.</p>
      <p>Es la forma definitiva de "aplanar" un PDF para evitar que se extraigan textos o se alteren elementos vectoriales. Ideal para documentos que deben ser visualmente idénticos pero no editables.</p>
      <p>Toda la rasterización ocurre en tu navegador, asegurando que el contenido de tus documentos permanezca privado durante todo el proceso.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el archivo PDF que deseas rasterizar.' },
      { step: 2, title: 'Elegir Resolución', description: 'Selecciona los DPI (puntos por pulgada) para la calidad de la imagen resultante.' },
      { step: 3, title: 'Rasterizar y Descargar', description: 'Procesa el documento y obtén tu nuevo PDF aplanado al instante.' },
    ],
    useCases: [
      { title: 'Seguridad de Documentos', description: 'Evita que el texto sea copiado o los vectores sean editados convirtiendo todo a imagen.', icon: 'shield' },
      { title: 'Compatibilidad de Impresión', description: 'Resuelve problemas de impresión compleja convirtiendo capas difíciles en una sola imagen plana.', icon: 'printer' },
      { title: 'Protección de Propiedad Intelectual', description: 'Comparte diseños o planos sin entregar los datos vectoriales originales.', icon: 'lock' },
    ],
    faq: [
      { question: '¿El texto seguirá siendo seleccionable?', answer: 'No, al ser una imagen, el texto ya no se puede seleccionar ni buscar.' },
      { question: '¿Qué resolución debo elegir?', answer: '150 DPI es estándar para pantalla; 300 DPI es ideal para mantener nitidez en impresión.' },
      { question: '¿Aumenta el tamaño del archivo?', answer: 'Sí, usualmente un PDF rasterizado es más pesado que el original porque contiene imágenes de alta resolución.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown a PDF',
    metaDescription: 'Convierte archivos Markdown (.md) a documentos PDF profesionales con formato estilizado.',
    keywords: ['markdown a pdf', 'convertir md a pdf', 'documentación md pdf', 'formatear markdown'],
    description: `
      <p>Markdown a PDF transforma tus archivos de texto con formato Markdown en documentos PDF elegantes y profesionales. Soporta tablas, bloques de código, listas, imágenes y enlaces.</p>
      <p>Es la herramienta perfecta para desarrolladores y escritores que desean convertir sus archivos README o documentación técnica en manuales PDF listos para distribuir.</p>
      <p>Toda la conversión se realiza localmente en tu navegador; tu código y tus escritos nunca salen de tu dispositivo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir o Pegar Markdown', description: 'Arrastra tu archivo .md o pega el código Markdown directamente en el editor.' },
      { step: 2, title: 'Configurar Estilo', description: 'Elige el tema visual y el tamaño de página para tu documento final.' },
      { step: 3, title: 'Convertir y Guardar', description: 'Genera el PDF y descarga tu documento perfectamente formateado.' },
    ],
    useCases: [
      { title: 'Documentación Técnica', description: 'Convierte tus archivos de documentación de GitHub en manuales legibles offline.', icon: 'code' },
      { title: 'Escritura Creativa', description: 'Exporta tus borradores escritos en editores Markdown a un formato de entrega profesional.', icon: 'pen-tool' },
      { title: 'Reportes de Desarrollo', description: 'Crea reportes rápidos y formateados a partir de notas de texto simple con sintaxis Markdown.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Soporta GitHub Flavored Markdown?', answer: 'Sí, soportamos tablas, listas de tareas y bloques de código con resaltado.' },
      { question: '¿Se ven las imágenes?', answer: 'Sí, siempre que las URLs de las imágenes sean accesibles o estén incrustadas adecuadamente.' },
      { question: '¿Puedo personalizar el CSS?', answer: 'Usamos temas optimizados por defecto, pero pronto añadiremos soporte para estilos personalizados.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ a PDF',
    metaDescription: 'Convierte archivos de cómics CBZ a PDF. Lee tus cómics favoritos en cualquier lector de PDF estándar.',
    keywords: ['cbz a pdf', 'convertir comic a pdf', 'visor de comic pdf', 'comic book a pdf'],
    description: `
      <p>CBZ a PDF convierte tus archivos de archivo de cómic (archivos ZIP que contienen imágenes) en un único documento PDF. Esto facilita la lectura de tus novelas gráficas en cualquier dispositivo sin necesidad de apps especiales de cómic.</p>
      <p>La herramienta mantiene el orden correcto de las imágenes y optimiza su tamaño para una experiencia de lectura fluida en tablets y computadoras.</p>
      <p>Privacidad total: el desempaquetado y la conversión ocurren localmente en tu navegador sin subir tus archivos a internet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir CBZ', description: 'Selecciona el archivo de cómic .cbz que deseas convertir.' },
      { step: 2, title: 'Ajustar Calidad', description: 'Configura la calidad de las imágenes para equilibrar nitidez y tamaño de archivo.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Genera tu cómic en formato PDF y prepárate para leer.' },
    ],
    useCases: [
      { title: 'Lectura Universal', description: 'Pasa tus cómics a PDF para leerlos en Kindle, iPad o cualquier dispositivo móvil con facilidad.', icon: 'book-open' },
      { title: 'Archivo de Biblioteca', description: 'Organiza tu colección de cómics digitales en un formato estándar y fácil de catalogar.', icon: 'archive' },
      { title: 'Impresión de Arte', description: 'Convierte archivos de arte secuencial a PDF para imprimir tus propias pruebas de cómic.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Qué es un archivo CBZ?', answer: 'Es básicamente un archivo comprimido .zip que contiene imágenes numeradas consecuentivamente.' },
      { question: '¿Soporta CBR?', answer: 'Esta herramienta específica es para CBZ (zip). Para CBR (rar), te recomendamos renombrarlo o convertirlo primero a zip.' },
      { question: '¿Pierdo calidad en las viñetas?', answer: 'No, extraemos las imágenes a su resolución original antes de compilarlas en el PDF.' },
    ],
  },

  'font-to-outline': {
    title: 'Convertir Fuentes a Contornos',
    metaDescription: 'Transforma el texto de un PDF en trazados vectoriales. Asegura que el diseño se vea igual sin necesidad de fuentes.',
    keywords: ['fuentes a contornos pdf', 'expandir texto pdf', 'vectorizar texto pdf', 'fuentes curvas pdf'],
    description: `
      <p>Convertir Fuentes a Contornos transforma todos los caracteres de texto de tu documento PDF en formas vectoriales (curvas). Una vez vectorizado, el texto deja de ser editable y se convierte en dibujo puro.</p>
      <p>Este proceso garantiza que el diseño se visualice exactamente igual en cualquier computadora, incluso si no tienen instaladas las fuentes originales. Es un requisito estándar para la impresión profesional de alta gama.</p>
      <p>Todo el proceso vectorial se realiza localmente en tu navegador, manteniendo la integridad y privacidad de tus documentos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el documento con fuentes que deseas vectorizar.' },
      { step: 2, title: 'Procesar', description: 'La herramienta trazará los contornos de cada letra en todas las páginas.' },
      { step: 3, title: 'Descargar PDF Curvado', description: 'Obtén tu documento listo para imprenta con fuentes 100% estables.' },
    ],
    useCases: [
      { title: 'Envío a Imprenta', description: 'Evita errores de "fuentes faltantes" en la imprenta profesional convirtiendo todo el texto a curvas.', icon: 'printer' },
      { title: 'Estabilidad de Diseño', description: 'Asegura que tus logotipos y subtítulos de marca no cambien de apariencia al enviarlos a terceros.', icon: 'pen-tool' },
      { title: 'Prevención de Edición', description: 'Dificulta la alteración del texto en tus documentos oficiales al convertir las letras en dibujos vectoriales.', icon: 'shield' },
    ],
    faq: [
      { question: '¿Puedo volver a editar el texto?', answer: 'No, una vez convertido a contornos, el texto ya no es texto sino formas geométricas.' },
      { question: '¿Aumenta el peso del archivo?', answer: 'Sí, los documentos con mucho texto vectorizado suelen ser más pesados que los que usan fuentes incrustadas.' },
      { question: '¿Se ve igual?', answer: 'Visualmente el resultado es idéntico, pero las letras dejarán de ser seleccionables.' },
    ],
  },

  'extract-tables': {
    title: 'Extraer Tablas de PDF',
    metaDescription: 'Identifica y extrae datos tabulares de archivos PDF. Convierte tablas a CSV o Excel.',
    keywords: ['extraer tablas pdf', 'sacar datos tablas', 'pdf a csv tablas', 'minería de datos pdf'],
    description: `
      <p>Extraer Tablas de PDF utiliza algoritmos de detección de cuadrículas para encontrar tablas dentro de tus documentos y extraer sus datos de forma estructurada.</p>
      <p>Puedes obtener los resultados en formatos procesables como CSV, JSON o Excel, lo que te permite importar datos estadísticos o financieros directamente a tus herramientas de análisis.</p>
      <p>La detección y extracción son totalmente locales; tus datos confidenciales permanecen seguros en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF con Tablas', description: 'Selecciona el archivo que contiene los datos que deseas extraer.' },
      { step: 2, title: 'Detectar Tablas', description: 'La herramienta escaneará las páginas y mostrará las tablas encontradas.' },
      { step: 3, title: 'Elegir Formato y Descargar', description: 'Selecciona tu formato favorito (Excel/CSV) y descarga tus datos listos para usar.' },
    ],
    useCases: [
      { title: 'Análisis Financiero', description: 'Extrae datos de balances o estados de cuenta adjuntos en PDFs para analizarlos en Excel.', icon: 'trending-up' },
      { title: 'Investigación Académica', description: 'Convierte tablas de papers científicos en archivos de datos para tus propios estudios.', icon: 'graduation-cap' },
      { title: 'Automatización de Facturas', description: 'Saca los datos de filas y columnas de facturas PDF para cargarlos en sistemas contables.', icon: 'receipt' },
    ],
    faq: [
      { question: '¿Qué pasa si la tabla no tiene bordes?', answer: 'Nuestro algoritmo intenta detectar la alineación del texto para inferir la estructura, aunque las tablas con bordes son más precisas.' },
      { question: '¿Soporta tablas en varias páginas?', answer: 'Sí, la herramienta puede unir tablas que continúan en la siguiente página.' },
      { question: '¿Qué formatos de salida ofrece?', answer: 'Actualmente soportamos Excel (.xlsx), CSV y JSON.' },
    ],
  },

  'ocg-manager': {
    title: 'Gestor de Capas PDF',
    metaDescription: 'Gestiona capas (OCG) en tus archivos PDF. Activa, desactiva o elimina capas del documento.',
    keywords: ['capas pdf', 'gestor ocg pdf', 'eliminar capas pdf', 'visibilidad capas pdf'],
    description: `
      <p>Gestor de Capas PDF te permite controlar los Grupos de Contenido Opcional (OCG) de tu documento. Puedes ver una lista de todas las capas existentes y decidir cuáles deben estar visibles por defecto.</p>
      <p>Es ideal para planos arquitectónicos, mapas o documentos técnicos que contienen múltiples niveles de información superpuestos. Puedes "aplanar" el documento eliminando capas innecesarias para reducir el tamaño y la complejidad.</p>
      <p>Toda la gestión de capas ocurre localmente en tu navegador; tus archivos nunca se envían a ningún servidor externo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el PDF que contiene las capas que deseas gestionar.' },
      { step: 2, title: 'Configurar Visibilidad', description: 'Marca o desmarca las capas para definir su estado de visibilidad inicial.' },
      { step: 3, title: 'Aplicar y Descargar', description: 'Guarda los cambios y descarga tu PDF con la configuración de capas actualizada.' },
    ],
    useCases: [
      { title: 'Planos Arquitectónicos', description: 'Oculta capas de instalaciones eléctricas o fontanería para imprimir un plano limpio.', icon: 'layers' },
      { title: 'Diseño Multilingüe', description: 'Activa solo la capa de texto en el idioma que necesites para la exportación final.', icon: 'type' },
      { title: 'Simplificación de Documentos', description: 'Elimina capas ocultas o innecesarias para que el PDF sea más ligero y rápido de cargar.', icon: 'trash-2' },
    ],
    faq: [
      { question: '¿Qué es un OCG?', answer: 'Es el estándar técnico para las capas en documentos PDF (Optional Content Groups).' },
      { question: '¿Puedo renombrar capas?', answer: 'Actualmente puedes cambiar la visibilidad y eliminar capas, pero no renombrarlas.' },
      { question: '¿Se mantienen los vectores?', answer: 'Sí, la herramienta solo afecta a la visibilidad del contenido, no altera su naturaleza vectorial.' },
    ],
  },

  'pdf-reader': {
    title: 'Lector PDF Online',
    metaDescription: 'Lee tus archivos PDF directamente en el navegador. Rápido, ligero y con herramientas de navegación.',
    keywords: ['lector pdf online', 'ver pdf navegador', 'abrir pdf gratis', 'visor pdf ligero'],
    description: `
      <p>Lector PDF Online es un visor rápido y minimalista que te permite abrir y navegar por tus documentos PDF sin necesidad de instalar software pesado. Diseñado para una lectura fluida y sin distracciones.</p>
      <p>Incluye herramientas esenciales como zoom, búsqueda de texto, miniaturas de página y navegación rápida. Es compatible con todos los estándares modernos de PDF, incluyendo formularios y comentarios.</p>
      <p>Tu privacidad es lo primero: el documento se carga directamente desde tu disco local a la memoria de tu navegador, nunca pasa por nuestros servidores.</p>
    `,
    howToUse: [
      { step: 1, title: 'Abrir PDF', description: 'Selecciona o arrastra el archivo que deseas leer.' },
      { step: 2, title: 'Navegar', description: 'Usa la barra lateral para ver miniaturas o desplázate de forma continua.' },
      { step: 3, title: 'Interactuar', description: 'Utiliza las herramientas de búsqueda y zoom para encontrar y leer contenido fácilmente.' },
    ],
    useCases: [
      { title: 'Lectura Rápida', description: 'Abre adjuntos de correo o descargas sin esperar a que se inicie un lector pesado.', icon: 'zap' },
      { title: 'Navegadores Compartidos', description: 'Lee documentos de forma segura en computadoras públicas o de oficina sin dejar rastro.', icon: 'eye-off' },
      { title: 'Dispositivos Ligeros', description: 'Navega por PDFs grandes en tablets o laptops con pocos recursos gracias a su motor optimizado.', icon: 'smartphone' },
    ],
    faq: [
      { question: '¿Necesito internet?', answer: 'Solo para cargar la herramienta; una vez abierta, puedes leer el archivo incluso sin conexión.' },
      { question: '¿Es compatible con PDFs protegidos?', answer: 'Sí, si tienes la contraseña, puedes desbloquearlo y leerlo directamente.' },
      { question: '¿Puedo editar?', answer: 'Esta herramienta es solo para visualización. Para editar, usa nuestra herramienta "Editar PDF".' },
    ],
  },

  'pdf-workflow': {
    title: 'Flujos de Trabajo PDF',
    metaDescription: 'Automatiza tareas repetitivas con PDFs. Combina múltiples herramientas en una sola operación.',
    keywords: ['automatización pdf', 'workflow pdf', 'procesamiento por lotes', 'secuencia tareas pdf'],
    description: `
      <p>Flujos de Trabajo PDF te permite encadenar varias herramientas para procesar tus documentos de una sola vez. Por ejemplo, puedes desbloquear un PDF, comprimirlo y añadirle una marca de agua en un solo clic.</p>
      <p>Ahorra tiempo creando secuencias de tareas personalizadas según tus necesidades recurrentes. Es como tener un asistente de producción para tus documentos digitales.</p>
      <p>Toda la automatización se ejecuta de forma segura y local en tu navegador, protegiendo tus datos en cada paso del flujo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Crear Flujo', description: 'Selecciona las herramientas que deseas combinar y el orden en que se ejecutarán.' },
      { step: 2, title: 'Cargar Archivos', description: 'Sube uno o varios documentos que pasarán por toda la cadena de procesamiento.' },
      { step: 3, title: 'Ejecutar y Descargar', description: 'Procesa todos los pasos automáticamente y obtén los resultados finales.' },
    ],
    useCases: [
      { title: 'Preparación de Documentos', description: 'Extrae páginas específicas, dales formato y protégelas con contraseña sistemáticamente.', icon: 'repeat' },
      { title: 'Conversión en Masa', description: 'Convierte múltiples archivos a PDF/A y compriímelos para archivado corporativo.', icon: 'layers' },
      { title: 'Branding Corporativo', description: 'Añade metadatos de autor y logos de marca de agua a todos tus informes de una vez.', icon: 'briefcase' },
    ],
    faq: [
      { question: '¿Cuántas tareas puedo encadenar?', answer: 'Puedes encadenar hasta 5 herramientas diferentes en un solo flujo de trabajo.' },
      { question: '¿Puedo procesar varios archivos?', answer: 'Sí, puedes cargar múltiples archivos y el flujo se aplicará a cada uno de ellos.' },
      { question: '¿Es difícil de configurar?', answer: 'No, es una interfaz visual simple donde arrastras y sueltas las herramientas deseadas.' },
    ],
  },

  'html-to-pdf': {
    title: 'HTML a PDF',
    metaDescription: 'Convierte código HTML o páginas web en documentos PDF. Preserva el diseño CSS y las imágenes.',
    keywords: ['html a pdf', 'convertir web a pdf', 'código html pdf', 'página web a pdf'],
    description: `
      <p>HTML a PDF convierte tus fragmentos de código HTML o páginas web completas en documentos PDF de alta fidelidad. Es ideal para capturar el diseño exacto de una web para reportes o documentación offline.</p>
      <p>Nuestra herramienta renderiza el HTML y aplica los estilos CSS, asegurando que el PDF se vea exactamente como la página web original, incluyendo imágenes, tablas y tipografías.</p>
      <p>El procesamiento es local y rápido; tu código HTML se renderiza directamente en tu navegador sin enviar datos a servidores externos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Ingresar HTML', description: 'Pega tu código HTML o proporciona el contenido que deseas convertir.' },
      { step: 2, title: 'Ajustar Opciones', description: 'Configura el tamaño de página, márgenes y si deseas cargar recursos externos.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Genera tu PDF profesional a partir del código y descárgalo.' },
    ],
    useCases: [
      { title: 'Recibos y Facturas Web', description: 'Convierte confirmaciones de compra online en documentos PDF para tu contabilidad.', icon: 'file-text' },
      { title: 'Documentación de Código', description: 'Transforma páginas de documentación generadas por herramientas de software en manuales PDF.', icon: 'code' },
      { title: 'Captura de Artículos', description: 'Guarda artículos de blog o noticias como PDFs para leerlos cómodamente más tarde.', icon: 'book-open' },
    ],
    faq: [
      { question: '¿Soporta CSS3?', answer: 'Sí, soportamos la mayoría de las propiedades modernas de CSS para un renderizado fiel.' },
      { question: '¿Mantiene los enlaces?', answer: 'Sí, los enlaces internos y externos siguen activos en el documento PDF resultante.' },
      { question: '¿Cómo maneja las imágenes?', answer: 'Las imágenes con URLs absolutas se descargarán y se incrustarán en el PDF final.' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF a HTML',
    metaDescription: 'Convierte tus documentos PDF en código HTML responsivo. Haz que tus contenidos sean amigables para la web.',
    keywords: ['pdf a html', 'convertir pdf web', 'pdf a código html', 'contenido pdf a html'],
    description: `
      <p>PDF a HTML transforma tus documentos estáticos en código web estructurado. Esta herramienta intenta identificar cabeceras, párrafos, listas e imágenes para crear un archivo HTML limpio.</p>
      <p>Es la forma más eficiente de extraer contenido de un PDF para publicarlo en un sitio web o blog, ahorrá que tener que reformatear todo manualmente.</p>
      <p>Privacidad total: la conversión se realiza íntegramente en tu navegador; tus documentos nunca se suben a internet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el documento que deseas convertir en código web.' },
      { step: 2, title: 'Configurar Salida', description: 'Elige si deseas un archivo HTML único o una estructura de carpetas con imágenes separadas.' },
      { step: 3, title: 'Convertir y Obtener', description: 'Descarga el código HTML generado y las imágenes extraídas listas para usar.' },
    ],
    useCases: [
      { title: 'Publicación Web', description: 'Convierte comunicados de prensa o informes PDF en páginas HTML para tu sitio corporativo.', icon: 'globe' },
      { title: 'Accesibilidad Web', description: 'Transforma PDFs difíciles de leer en HTML adaptable que funciona mejor con lectores de pantalla.', icon: 'user-check' },
      { title: 'Recuperar Contenido', description: 'Extrae texto y estructura de antiguos diseños PDF para reutilizarlos en nuevos proyectos web.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '¿El diseño será idéntico?', answer: 'La conversión prioriza la estructura y el contenido para hacerlo responsivo; el diseño exacto puede variar.' },
      { question: '¿Se extraen las imágenes?', answer: 'Sí, la herramienta genera etiquetas de imagen y guarda los archivos gráficos por separado.' },
      { question: '¿Soporta tablas?', answer: 'Intentamos convertir las tablas de PDF en tablas HTML estándar (<table>).' },
    ],
  },

  'pdf-to-heic': {
    title: 'PDF a HEIC',
    metaDescription: 'Convierte páginas PDF a imágenes HEIC. Formato de alta eficiencia para dispositivos Apple.',
    keywords: ['pdf a heic', 'convertir pdf heif', 'imagen heic alta calidad', 'pdf a apple image'],
    description: `
      <p>PDF a HEIC convierte tus documentos PDF al formato de imagen de alta eficiencia (HEIC) utilizado por Apple. Este formato ofrece una calidad de imagen superior con un tamaño de archivo mucho menor que el JPEG convencional.</p>
      <p>Es ideal para usuarios que desean integrar contenido de documentos en sus bibliotecas de fotos de iPhone o Mac manteniendo la máxima fidelidad visual y ahorrando espacio de almacenamiento.</p>
      <p>La conversión se realiza localmente en tu navegador; tus documentos se procesan de forma segura sin salir de tu dispositivo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el PDF que deseas convertir a formato HEIC.' },
      { step: 2, title: 'Elegir Calidad', description: 'Configura el nivel de compresión y calidad para las imágenes resultantes.' },
      { step: 3, title: 'Convertir y Guardar', description: 'Genera tus archivos HEIC y descárgalos en un paquete ZIP.' },
    ],
    useCases: [
      { title: 'Ecosistema Apple', description: 'Guarda páginas de documentos directamente en tu carrete de fotos de iCloud.', icon: 'smartphone' },
      { title: 'Ahorro de Espacio', description: 'Almacena capturas de alta resolución de PDFs ocupando la mitad del espacio que un JPG.', icon: 'hard-drive' },
      { title: 'Fotografía Digital', description: 'Convierte portafolios PDF en archivos de imagen modernos compatibles con visores HEIF.', icon: 'image' },
    ],
    faq: [
      { question: '¿Qué es HEIC?', answer: 'Es el formato High Efficiency Image Container, que ofrece mejor compresión que JPG.' },
      { question: '¿Se ve en Windows?', answer: 'Sí, con el visor de fotos de Windows 10/11 o instalando las extensiones de imagen HEIF.' },
      { question: '¿Puedo convertir varias páginas?', answer: 'Sí, cada página se convertirá en una imagen HEIC individual.' },
    ],
  },

  'pdf-to-psd': {
    title: 'PDF a PSD',
    metaDescription: 'Convierte páginas PDF a archivos de Adobe Photoshop (PSD). Edita tus documentos con capas.',
    keywords: ['pdf a psd', 'convertir pdf photoshop', 'editar pdf psd', 'pdf a capas psd'],
    description: `
      <p>PDF a PSD convierte las páginas de tu documento en archivos de Adobe Photoshop totalmente compatibles. Esta herramienta es esencial para diseñadores que necesitan retocar o rediseñar contenido PDF usando herramientas de edición profesional.</p>
      <p>Cada página se convierte en un archivo PSD individual donde se intenta preservar la estructura visual, permitiéndote añadir efectos, capas de ajuste y máscaras directamente sobre el contenido original.</p>
      <p>Privacidad total: la conversión de archivos ocurre íntegramente en tu navegador sin enviar datos a la nube.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el documento PDF que deseas llevar a Photoshop.' },
      { step: 2, title: 'Configurar Resolución', description: 'Elige el DPI deseado (72 para web, 300 para impresión profesional).' },
      { step: 3, title: 'Convertir y Editar', description: 'Descarga tus archivos PSD listos para ser abiertos en Adobe Photoshop.' },
    ],
    useCases: [
      { title: 'Retoque Creativo', description: 'Usa las herramientas de pincel y pintura de Photoshop sobre elementos de un PDF.', icon: 'pen-tool' },
      { title: 'Diseño Publicitario', description: 'Integra páginas de folletos PDF en composiciones gráficas complejas en PSD.', icon: 'layout' },
      { title: 'Edición Fotográfica', description: 'Extrae y mejora la calidad visual de páginas de documentos usando capas de ajuste.', icon: 'image' },
    ],
    faq: [
      { question: '¿El texto es editable en PSD?', answer: 'El texto se renderiza para mantener el diseño exacto, pero puedes añadir nuevas capas de texto encima.' },
      { question: '¿Mantiene las capas originales del PDF?', answer: 'La herramienta aplana la página para asegurar la fidelidad visual, pero entrega un archivo PSD listo para añadir nuevas capas.' },
      { question: '¿Necesito Photoshop?', answer: 'Para abrir y editar el resultado sí, aunque el archivo generado es el estándar .psd de la industria.' },
    ],
  },

  'pdf-to-xps': {
    title: 'PDF a XPS',
    metaDescription: 'Convierte documentos PDF al formato XML Paper Specification (XPS) de Microsoft.',
    keywords: ['pdf a xps', 'convertir pdf oxps', 'formato microsoft xps', 'visor xps windows'],
    description: `
      <p>PDF a XPS convierte tus archivos de estándares universales al formato XML Paper Specification de Microsoft. XPS es una alternativa al PDF diseñada para la fidelidad de impresión y el intercambio seguro de documentos en entornos Windows.</p>
      <p>Esta herramienta es útil si necesitas integrar documentos en flujos de trabajo específicos de Microsoft o usar visores de documentos antiguos que prefieren el formato XPS.</p>
      <p>Toda la conversión es privada y local; procesamos tus archivos directamente en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el archivo PDF que deseas convertir a formato de Microsoft.' },
      { step: 2, title: 'Procesar', description: 'La herramienta adaptará la estructura de página y fuentes al estándar XPS.' },
      { step: 3, title: 'Descargar XPS', description: 'Obtén tu documento convertido y listo para ser usado en sistemas compatibles.' },
    ],
    useCases: [
      { title: 'Entornos Microsoft', description: 'Asegura la compatibilidad perfecta con sistemas de impresión y visores nativos de Windows.', icon: 'monitor' },
      { title: 'Fidelidad de Impresión', description: 'Usa el motor de renderizado XPS para trabajos de impresión específicos en oficina.', icon: 'printer' },
      { title: 'Pruebas de Formato', description: 'Compara la visualización de documentos entre los estándares PDF y XPS.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Qué es XPS?', answer: 'Es el formato de "impresión electrónica" de Microsoft, similar al PDF pero basado en XML.' },
      { question: '¿Sigue siendo seguro?', answer: 'Sí, al igual que el PDF, el XPS es un formato de página fija que mantiene el diseño original.' },
      { question: '¿Cómo lo abro?', answer: 'Windows incluye de forma nativa un "Visor de XPS", aunque también se puede abrir con navegadores modernos.' },
    ],
  },

  'pdf-to-rtf': {
    title: 'PDF a RTF',
    metaDescription: 'Convierte PDF a formato de texto enriquecido (RTF). Extrae texto con formato básico para WordPad o Word.',
    keywords: ['pdf a rtf', 'convertir pdf texto enriquecido', 'pdf a wordpad', 'extraer rtf de pdf'],
    description: `
      <p>PDF a RTF extrae el contenido de tu documento PDF y lo convierte en un archivo de Rich Text Format. A diferencia del texto plano, el formato RTF permite mantener negritas, cursivas, diferentes tamaños de letra y colores.</p>
      <p>Es una solución ligera para editar contenido de un PDF en procesadores de texto simples como WordPad sin la complejidad de un archivo DOCX pesado.</p>
      <p>El procesamiento es local y seguro; tus datos se extraen directamente en tu dispositivo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el archivo PDF cuyo texto deseas editar en formato enriquecido.' },
      { step: 2, title: 'Extraer', description: 'Nuestra herramienta procesará el PDF para preservar el estilo del texto.' },
      { step: 3, title: 'Descargar RTF', description: 'Obtén tu archivo editable y ábrelo con cualquier procesador de texto.' },
    ],
    useCases: [
      { title: 'Edición Ligera', description: 'Extrae texto de un PDF para correcciones rápidas en aplicaciones sencillas de texto.', icon: 'file-text' },
      { title: 'Compatibilidad Heredada', description: 'Prepara documentos para ser abiertos en sistemas antiguos que no soportan formatos modernos.', icon: 'history' },
      { title: 'Limpiar Documentos', description: 'Obtén el contenido esencial de un PDF descartando diseños complejos y quedándote solo con el texto formateado.', icon: 'trash-2' },
    ],
    faq: [
      { question: '¿Mantiene las imágenes?', answer: 'Dependiendo de la complejidad del PDF, el RTF puede incluir imágenes básicas incrustadas.' },
      { question: '¿Es mejor que Word?', answer: 'El RTF es más simple y compatible con casi cualquier sistema operativo sin necesidad de Microsoft Word.' },
      { question: '¿Qué pasa con las tablas?', answer: 'Las tablas simples suelen mantenerse bien, pero los diseños de tabla complejos pueden requerir ajustes manuales.' },
    ],
  },

  'pdf-to-epub': {
    title: 'PDF a EPUB',
    metaDescription: 'Convierte archivos PDF a formato de libro electrónico EPUB. Lee tus documentos como ebooks adaptables.',
    keywords: ['pdf a epub', 'convertir pdf a ebook', 'leer pdf en ereader', 'crear epub de pdf'],
    description: `
      <p>PDF a EPUB convierte tus documentos estáticos en libros electrónicos fluidos. A diferencia del PDF, el formato EPUB permite que el texto se adapte al tamaño de la pantalla de tu e-reader, tablet o smartphone.</p>
      <p>Nuestra herramienta utiliza algoritmos de extracción inteligentes para intentar reconstruir el flujo de texto original, permitiéndote cambiar el tamaño de la letra y el estilo de lectura cómodamente.</p>
      <p>Toda la conversión se realiza localmente en tu navegador; tu privacidad está garantizada ya que el libro nunca sale de tu equipo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el documento PDF que deseas convertir en libro electrónico.' },
      { step: 2, title: 'Ajustar Opciones', description: 'Configura los metadatos del libro como Título y Autor para tu biblioteca.' },
      { step: 3, title: 'Convertir y Leer', description: 'Genera el archivo EPUB y sincronízalo con tu dispositivo de lectura favorito.' },
    ],
    useCases: [
      { title: 'Lectura en E-readers', description: 'Prepara manuales o informes largos para leerlos cómodamente en Kindle, Kobo o iPad.', icon: 'book-open' },
      { title: 'Accesibilidad', description: 'Convierte PDFs de letra pequeña en ebooks donde puedas aumentar el tamaño del texto fácilmente.', icon: 'user-check' },
      { title: 'Bibliotecas Digitales', description: 'Organiza tu colección de documentos personales en un formato estándar de libro electrónico.', icon: 'archive' },
    ],
    faq: [
      { question: '¿El texto será fluido?', answer: 'Sí, el objetivo principal es que el texto deje de ser una "foto" y pase a ser contenido que se adapta a la pantalla.' },
      { question: '¿Qué pasa con los PDFs de imágenes?', answer: 'Si el PDF es escaneado, te recomendamos usar nuestra herramienta OCR antes de convertirlo a EPUB.' },
      { question: '¿Mantiene el índice de contenidos?', answer: 'Intentamos recrear la tabla de contenidos a partir de los marcadores y jerarquías del PDF.' },
    ],
  },

  'pdf-to-mobi': {
    title: 'PDF a MOBI',
    metaDescription: 'Convierte archivos PDF al formato de libro electrónico MOBI. Optimiza tus documentos para lectores Kindle.',
    keywords: ['pdf a mobi', 'convertir pdf kindle', 'crear mobi de pdf', 'pdf a ebook kindle'],
    description: `
      <p>PDF a MOBI transforma tus documentos PDF en archivos de libro electrónico optimizados para dispositivos Kindle antiguos y modernos. A diferencia del PDF estático, el formato MOBI permite una experiencia de lectura más cómoda en pantallas de tinta electrónica.</p>
      <p>La herramienta intenta extraer el flujo de texto y las imágenes, permitiéndote cambiar el tamaño de la fuente y navegar por el contenido de forma más natural en tu e-reader.</p>
      <p>Conversión 100% privada: tus archivos se procesan localmente en tu navegador y nunca se comparten con servidores externos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el documento PDF que deseas convertir para tu Kindle.' },
      { step: 2, title: 'Ajustar Metadatos', description: 'Añade el título del libro y el autor para que aparezca correctamente en tu biblioteca.' },
      { step: 3, title: 'Convertir y Transferir', description: 'Descarga el archivo MOBI y súbelo a tu dispositivo Kindle.' },
    ],
    useCases: [
      { title: 'Lectura en Kindle', description: 'Disfruta de tus documentos de trabajo o estudio directamente en tu dispositivo de lectura Amazon.', icon: 'book-open' },
      { title: 'Colecciones de Ebooks', description: 'Convierte manuales y libros en PDF a un formato amigable para bibliotecas digitales.', icon: 'archive' },
      { title: 'Optimización de Batería', description: 'Lee tus archivos en pantallas de tinta electrónica que consumen mucha menos energía que una tablet.', icon: 'battery-charging' },
    ],
    faq: [
      { question: '¿Es compatible con Kindle?', answer: 'Sí, MOBI es uno de los formatos nativos de Amazon Kindle.' },
      { question: '¿Qué pasa con los PDFs complejos?', answer: 'Los diseños de página muy elaborados pueden simplificarse para asegurar la legibilidad en el e-reader.' },
      { question: '¿Soporta AZW3?', answer: 'MOBI es el formato base, pero la mayoría de Kindles modernos manejan este archivo sin problemas.' },
    ],
  },

  'pdf-to-djvu': {
    title: 'PDF a DJVU',
    metaDescription: 'Convierte archivos PDF al formato DJVU. Ideal para comprimir documentos escaneados manteniendo alta calidad.',
    keywords: ['pdf a djvu', 'convertir pdf djvu', 'compresión djvu pdf', 'archivo djvu de pdf'],
    description: `
      <p>PDF a DJVU convierte tus documentos PDF en el formato DjVu, conocido por su excepcional capacidad de compresión en documentos escaneados de alta resolución. Es la opción preferida para bibliotecas digitales y archiveros.</p>
      <p>Esta herramienta separa el texto de las imágenes de fondo, comprimiendo cada elemento de forma óptima para reducir drásticamente el tamaño del archivo sin sacrificar la legibilidad visual.</p>
      <p>Todo el proceso es local y seguro; la conversión ocurre en tu navegador sin enviar datos a la red.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el archivo PDF de alta resolución que deseas comprimir.' },
      { step: 2, title: 'Ajustar Calidad', description: 'Configura el nivel de detalle que deseas mantener en el archivo DJVU resultante.' },
      { step: 3, title: 'Convertir y Guardar', description: 'Obtén tu documento en formato DJVU ultra-comprimido al instante.' },
    ],
    useCases: [
      { title: 'Bibliotecas Digitales', description: 'Almacena grandes colecciones de libros escaneados ocupando una fracción del espacio original.', icon: 'book' },
      { title: 'Compartir Archivos Pesados', description: 'Reduce el tamaño de planos o manuscritos escaneados para enviarlos fácilmente.', icon: 'share' },
      { title: 'Preservación de Documentos', description: 'Guarda copias de alta calidad de documentos históricos en un formato eficiente.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Por qué usar DJVU?', answer: 'Porque puede ser hasta 10 veces más pequeño que un PDF equivalente en documentos escaneados.' },
      { question: '¿Cómo abro un DJVU?', answer: 'Existen muchos visores gratuitos y extensiones de navegador dedicadas a este formato.' },
      { question: '¿Mantiene el texto buscable?', answer: 'Sí, si el PDF original tenía una capa de texto, intentaremos preservarla en el DJVU.' },
    ],
  },

  'pdf-to-fb2': {
    title: 'PDF a FB2',
    metaDescription: 'Convierte archivos PDF al formato FictionBook (FB2). Perfecto para leer libros en dispositivos móviles.',
    keywords: ['pdf a fb2', 'convertir pdf fictionbook', 'crear fb2 de pdf', 'pdf a ebook fb2'],
    description: `
      <p>PDF a FB2 transforma tus documentos PDF en el estándar FictionBook (FB2). Este formato basado en XML es extremadamente popular para la lectura de libros digitales debido a su estructura clara y facilidad de renderizado.</p>
      <p>La herramienta se enfoca en extraer el contenido literario, preservando encabezados, párrafos e imágenes de forma que el libro sea cómodo de leer en cualquier app de lectura compatible.</p>
      <p>Privacidad garantizada: la conversión se realiza localmente en tu navegador; tus libros nunca salen de tu equipo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el libro o documento PDF que deseas convertir.' },
      { step: 2, title: 'Configurar Metadatos', description: 'Ingresa la información del autor, género y título para una mejor organización.' },
      { step: 3, title: 'Convertir y Descargar', description: 'Descarga el archivo FB2 listo para cargar en tu e-reader o aplicación móvil.' },
    ],
    useCases: [
      { title: 'Lectura Móvil', description: 'Lee tus textos preferidos en aplicaciones como FBReader o similares con total fluidez.', icon: 'smartphone' },
      { title: 'Archivo de Ficción', description: 'Convierte manuscritos y novelas en PDF a un formato estructurado para edición y lectura.', icon: 'pen-tool' },
      { title: 'Personalización de Libros', description: 'Prepara tus archivos PDF para que puedas cambiarles la tipografía y el fondo en tu lector.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Qué es FB2?', answer: 'Es un formato de libro electrónico abierto basado en XML, muy versátil y fácil de procesar.' },
      { question: '¿Se ven las imágenes?', answer: 'Sí, las ilustraciones principales del documento se incrustan en el archivo FB2.' },
      { question: '¿Es compatible con Kindle?', answer: 'Kindle no soporta FB2 de forma nativa, para eso te recomendamos nuestra herramienta PDF a MOBI.' },
    ],
  },

  'pdf-to-email': {
    title: 'PDF a Email (.eml)',
    metaDescription: 'Convierte documentos PDF en archivos de correo electrónico (.eml). Crea borradores de email desde PDFs.',
    keywords: ['pdf a email', 'convertir pdf eml', 'pdf a outlook', 'crear borrador email pdf'],
    description: `
      <p>PDF a Email permite transformar el contenido de un documento PDF en un archivo de formato de correo electrónico (.eml). Esta herramienta es ideal para crear borradores de email rápidamente a partir de informes o propuestas guardadas en PDF.</p>
      <p>La herramienta intenta mapear el contenido del PDF al cuerpo del correo, permitiéndote abrir el resultado directamente en clientes como Outlook, Thunderbird o Apple Mail para enviarlo.</p>
      <p>Todo el procesamiento es local; no accedemos a tu cuenta de correo ni enviamos datos fuera de tu dispositivo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Selecciona el documento PDF que quieres convertir en correo.' },
      { step: 2, title: 'Ajustar Campos', description: 'Ingresa el destinatario, asunto y cualquier nota adicional si lo deseas.' },
      { step: 3, title: 'Generar EML', description: 'Descarga el archivo .eml y ábrelo con tu cliente de correo favorito.' },
    ],
    useCases: [
      { title: 'Marketing Directo', description: 'Convierte un diseño publicitario en PDF en el cuerpo de un correo para tus clientes.', icon: 'mail' },
      { title: 'Envío de Informes', description: 'Prepara borradores de reportes empresariales con el contenido del PDF ya integrado.', icon: 'send' },
      { title: 'Automatización de Tareas', description: 'Acelera el proceso de compartir información transformando documentos en correos listos para enviar.', icon: 'zap' },
    ],
    faq: [
      { question: '¿Qué es un archivo .eml?', answer: 'Es el formato estándar para mensajes de correo electrónico que incluye el texto, formato y adjuntos.' },
      { question: '¿Envía el correo automáticamente?', answer: 'No, genera un archivo que tú abres y envías desde tu propio programa de correo.' },
      { question: '¿Incluye el PDF como adjunto?', answer: 'Sí, puedes elegir incluir el PDF original como un archivo adjunto dentro del propio email generado.' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF a CBZ',
    metaDescription: 'Convierte documentos PDF a formato de cómic CBZ. Ideal para leer revistas y cómics en visores especializados.',
    keywords: ['pdf a cbz', 'convertir pdf comic', 'crear cbz de pdf', 'pdf a comic book archive'],
    description: `
      <p>PDF a CBZ convierte las páginas de tu documento PDF en un archivo de cómic comprimido (Comic Book Zip). Es la herramienta perfecta para transformar revistas, mangas o novelas gráficas digitales en un formato optimizado para visores de cómics.</p>
      <p>Nuestra herramienta extrae cada página como una imagen de alta calidad y las empaqueta siguiendo el orden correcto de lectura, asegurando una experiencia visual fluida.</p>
      <p>Privacidad total: el procesamiento visual se realiza localmente en tu navegador sin subir tus archivos a internet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir PDF', description: 'Carga el documento o cómic que deseas pasar a formato CBZ.' },
      { step: 2, title: 'Seleccionar Calidad', description: 'Configura la calidad de las imágenes (DPI) para equilibrar detalle y tamaño del archivo.' },
      { step: 3, title: 'Convertir y Disfrutar', description: 'Obtén tu archivo .cbz listo para tu aplicación de lectura de cómics favorita.' },
    ],
    useCases: [
      { title: 'Lectura de Manga', description: 'Convierte archivos PDF de manga en paquetes CBZ para leer con desplazamiento fluido.', icon: 'book-open' },
      { title: 'Coleccionismo Digital', description: 'Organiza tus revistas y cómics en un formato estándar de la comunidad de cómics.', icon: 'archive' },
      { title: 'Visores Especializados', description: 'Usa las funciones avanzadas de aplicaciones como CDisplayEx o Panels con tus archivos PDF.', icon: 'image' },
    ],
    faq: [
      { question: '¿Qué es un archivo CBZ?', answer: 'Es un contenedor de imágenes comprimidas diseñado específicamente para ser leído en secuencia como un libro.' },
      { question: '¿Funciona con revistas?', answer: 'Sí, es un formato excelente para cualquier documento basado principalmente en páginas visuales.' },
      { question: '¿Puedo elegir el formato de imagen?', answer: 'Por defecto extraemos en JPG de alta calidad para máxima compatibilidad con lectores de cómics.' },
    ],
  },
};
