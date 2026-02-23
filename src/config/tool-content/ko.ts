/**
 * Korean tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all tools
 * Requirements: 3.1 - Multi-language support (Korean)
 */

import { ToolContent } from '@/types/tool';

/**
 * Korean tool content map
 */
export const toolContentKo: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: 'PDF 멀티 도구',
    metaDescription: '올인원 PDF 편집기: 병합, 분할, 정리, 삭제, 회전, 페이지 추출을 하나의 강력한 도구로.',
    keywords: ['pdf 멀티 도구', 'pdf 편집기', 'pdf 병합', 'pdf 분할', 'pdf 정리', '올인원 pdf'],
    description: `
      <p>PDF 멀티 도구는 모든 PDF 페이지 관리 작업을 위한 포괄적인 솔루션입니다. 이 강력한 올인원 도구는 여러 PDF 작업을 단일 직관적인 인터페이스로 통합하여 시간과 노력을 절약합니다.</p>
      <p>여러 문서 병합, 큰 PDF 분할, 페이지 재정렬, 불필요한 콘텐츠 삭제, 페이지 회전, 특정 섹션 추출 등 다른 애플리케이션 간 전환 없이 모든 작업을 처리할 수 있습니다.</p>
      <p>모든 처리는 브라우저에서 직접 이루어지며, 문서의 개인 정보와 보안이 보장됩니다. 파일이 서버에 업로드되지 않습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 업로드 영역에 드래그 앤 드롭하거나 클릭하여 장치에서 파일을 선택합니다.' },
      { step: 2, title: '작업 선택', description: '사용 가능한 작업 중 선택: 병합, 분할, 정리, 페이지 삭제, 회전, 빈 페이지 추가, 페이지 추출.' },
      { step: 3, title: '옵션 구성', description: '페이지 범위, 회전 각도, 병합 순서 등 선택한 작업에 특정한 설정을 조정합니다.' },
      { step: 4, title: '처리 및 다운로드', description: '처리 버튼을 클릭하고 작업이 완료되면 수정된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 준비', description: '불필요한 페이지 제거, 콘텐츠 재정렬, 여러 파일 결합으로 제출용 문서를 준비합니다.', icon: 'file-check' },
      { title: '보고서 조립', description: '여러 보고서 섹션을 결합하고, 표지를 추가하고, 장을 하나의 전문 문서로 정리합니다.', icon: 'book-open' },
      { title: '아카이브 관리', description: '큰 아카이브 파일을 관리 가능한 섹션으로 분할하고, 관련 페이지를 추출하고, 기록 문서를 재정리합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '한 번에 몇 개의 PDF를 처리할 수 있나요?', answer: '최대 10개의 PDF 파일을 동시에 업로드하고 처리할 수 있으며, 총 최대 크기는 500MB입니다.' },
      { question: '북마크가 보존되나요?', answer: '예, PDF를 병합할 때 도구는 기존 북마크를 보존하고 선택적으로 통합된 북마크 구조로 결합할 수 있습니다.' },
      { question: '페이지 제한이 있나요?', answer: '엄격한 페이지 제한은 없습니다. 도구는 수백 페이지의 문서를 처리할 수 있지만, 매우 큰 파일은 처리 시간이 더 오래 걸릴 수 있습니다.' },
    ],
  },

  'merge-pdf': {
    title: 'PDF 병합',
    metaDescription: '여러 PDF 파일을 하나의 문서로 결합. 드래그 앤 드롭 재정렬이 가능한 무료 온라인 PDF 병합 도구.',
    keywords: ['pdf 병합', 'pdf 결합', 'pdf 합치기', 'pdf 머저', 'pdf 연결'],
    description: `<p>PDF 병합을 사용하면 여러 PDF 문서를 빠르고 쉽게 하나의 파일로 결합할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 파일 업로드', description: '여러 PDF 파일을 업로드 영역에 드래그 앤 드롭하거나 클릭하여 장치에서 파일을 선택합니다.' },
      { step: 2, title: '순서 정렬', description: '파일 썸네일을 드래그 앤 드롭하여 원하는 순서로 정렬합니다.' },
      { step: 3, title: '병합 및 다운로드', description: '병합 버튼을 클릭하여 모든 파일을 결합하고 병합된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '보고서 결합', description: '월간 또는 분기 보고서를 하나의 연간 문서로 병합합니다.', icon: 'file-text' },
      { title: '포트폴리오 조립', description: '여러 프로젝트 문서, 인증서, 작업 샘플을 전문 포트폴리오로 결합합니다.', icon: 'briefcase' },
      { title: '청구서 통합', description: '여러 청구서나 영수증을 하나의 문서로 병합합니다.', icon: 'receipt' },
    ],
    faq: [
      { question: '몇 개의 PDF를 병합할 수 있나요?', answer: '최대 100개의 PDF 파일을 한 번에 병합할 수 있습니다.' },
      { question: '병합된 PDF는 원본 품질을 유지하나요?', answer: '예, 병합 프로세스는 모든 문서의 원본 품질을 보존합니다.' },
      { question: '암호로 보호된 PDF를 병합할 수 있나요?', answer: '암호로 보호된 PDF는 먼저 복호화해야 합니다.' },
    ],
  },

  'split-pdf': {
    title: 'PDF 분할',
    metaDescription: 'PDF 파일을 여러 문서로 분할. 특정 페이지 추출 또는 페이지 범위로 나누기.',
    keywords: ['pdf 분할', 'pdf 나누기', 'pdf 분리', '페이지 추출', 'pdf 스플리터'],
    description: `<p>PDF 분할을 사용하면 하나의 PDF 문서를 여러 개의 작은 파일로 나눌 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 분할할 파일을 선택합니다.' },
      { step: 2, title: '분할 방법 선택', description: '페이지 범위, 특정 페이지 추출, 또는 일정 간격으로 분할을 선택합니다.' },
      { step: 3, title: '페이지 범위 정의', description: '추출할 페이지 번호 또는 범위를 입력합니다.' },
      { step: 4, title: '분할 및 다운로드', description: '분할을 클릭하여 새 PDF 파일을 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '장 추출', description: '책이나 매뉴얼을 개별 장으로 분할합니다.', icon: 'book' },
      { title: '결합 스캔 분리', description: '일괄 스캔된 문서를 개별 파일로 나눕니다.', icon: 'copy' },
      { title: '유인물 만들기', description: '프레젠테이션에서 특정 슬라이드를 추출합니다.', icon: 'presentation' },
    ],
    faq: [
      { question: 'PDF를 개별 페이지로 분할할 수 있나요?', answer: '예, "모든 페이지 분할" 옵션을 선택하면 됩니다.' },
      { question: '분할 시 북마크는 어떻게 되나요?', answer: '추출된 페이지 범위 내의 북마크는 보존됩니다.' },
      { question: '암호로 보호된 PDF를 분할할 수 있나요?', answer: '분할 전에 PDF를 복호화해야 합니다.' },
    ],
  },

  'compress-pdf': {
    title: 'PDF 압축',
    metaDescription: '품질을 유지하면서 PDF 파일 크기 줄이기.',
    keywords: ['pdf 압축', 'pdf 크기 줄이기', 'pdf 압축기', 'pdf 축소', 'pdf 최적화'],
    description: `<p>PDF 압축은 허용 가능한 품질을 유지하면서 PDF 문서의 파일 크기를 줄입니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 압축할 문서를 선택합니다.' },
      { step: 2, title: '압축 수준 선택', description: '낮음 (최고 품질), 중간 (균형), 높음 (최소 크기) 중 선택합니다.' },
      { step: 3, title: '압축 및 다운로드', description: '압축을 클릭하여 파일 크기를 줄이고 다운로드합니다.' },
    ],
    useCases: [
      { title: '이메일 첨부', description: '이메일 첨부 제한을 충족하기 위해 PDF 크기를 줄입니다.', icon: 'mail' },
      { title: '웹 게시', description: '웹 다운로드용 PDF를 최적화합니다.', icon: 'globe' },
      { title: '저장소 최적화', description: '아카이브 문서를 압축하여 디스크 공간을 절약합니다.', icon: 'hard-drive' },
    ],
    faq: [
      { question: '파일 크기를 얼마나 줄일 수 있나요?', answer: '이미지가 많은 PDF는 50-80% 줄일 수 있습니다.' },
      { question: '압축이 텍스트 품질에 영향을 미치나요?', answer: '텍스트는 모든 압축 수준에서 선명하게 유지됩니다.' },
      { question: '여러 PDF를 한 번에 압축할 수 있나요?', answer: '예, 최대 10개의 PDF 파일을 동시에 압축할 수 있습니다.' },
    ],
  },

  'edit-pdf': {
    title: 'PDF 편집',
    metaDescription: '온라인으로 PDF 파일 편집. 문서에 텍스트, 이미지, 주석 추가.',
    keywords: ['pdf 편집', 'pdf 편집기', 'pdf 주석', 'pdf에 텍스트 추가'],
    description: `<p>PDF 편집은 PDF 문서를 수정하고 주석을 달기 위한 포괄적인 도구 세트를 제공합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 편집할 문서를 선택합니다.' },
      { step: 2, title: '편집 도구 선택', description: '텍스트, 하이라이트, 도형, 이미지, 코멘트 도구 중 선택합니다.' },
      { step: 3, title: '편집하기', description: '문서를 클릭하여 주석을 추가하고 요소를 배치합니다.' },
      { step: 4, title: '저장 및 다운로드', description: '저장을 클릭하여 변경 사항을 적용하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 검토', description: '협업 검토를 위해 코멘트와 마크업을 추가합니다.', icon: 'message-square' },
      { title: '양식 작성', description: '인쇄 없이 PDF 양식을 완성합니다.', icon: 'edit-3' },
      { title: '콘텐츠 수정', description: '공유 전에 민감한 정보를 제거합니다.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'PDF의 원본 텍스트를 편집할 수 있나요?', answer: '이 도구는 주석과 새 콘텐츠 추가에 중점을 둡니다.' },
      { question: '편집이 영구적인가요?', answer: '주석은 평면화하여 영구적으로 만들 수 있습니다.' },
      { question: '변경 사항을 취소할 수 있나요?', answer: '예, 실행 취소/다시 실행 기능을 지원합니다.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG를 PDF로',
    metaDescription: 'JPG 이미지를 PDF로 변환. 여러 JPG 파일을 하나의 PDF로 결합.',
    keywords: ['jpg를 pdf로', 'jpeg를 pdf로', 'jpg 변환', '이미지를 pdf로'],
    description: `<p>JPG를 PDF로는 JPEG 이미지를 빠르고 쉽게 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'JPG 이미지 업로드', description: 'JPG 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '정렬 및 구성', description: '드래그하여 이미지를 재정렬하고 페이지 크기를 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '사진 앨범', description: '휴가 사진으로 PDF 앨범을 만듭니다.', icon: 'image' },
      { title: '문서 스캔', description: '휴대폰 사진을 PDF로 변환합니다.', icon: 'camera' },
      { title: '포트폴리오 만들기', description: '디자인 샘플을 PDF 포트폴리오로 컴파일합니다.', icon: 'folder' },
    ],
    faq: [
      { question: '몇 개의 이미지를 변환할 수 있나요?', answer: '최대 100개의 JPG 이미지를 변환할 수 있습니다.' },
      { question: '이미지 품질이 보존되나요?', answer: '예, 이미지는 원본 품질로 포함됩니다.' },
      { question: '다른 페이지 크기를 설정할 수 있나요?', answer: '도구는 모든 페이지에 균일한 크기를 적용합니다.' },
    ],
  },

  'sign-pdf': {
    title: 'PDF 서명',
    metaDescription: 'PDF 문서에 전자 서명 추가.',
    keywords: ['pdf 서명', '전자 서명', 'e-서명', '디지털 서명'],
    description: `<p>PDF 서명을 사용하면 PDF 문서에 전자 서명을 빠르고 안전하게 추가할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '서명 만들기', description: '서명을 그리거나, 입력하거나, 이미지를 업로드합니다.' },
      { step: 3, title: '배치 및 조정', description: '문서를 클릭하여 서명을 배치하고 크기를 조정합니다.' },
      { step: 4, title: '저장 및 다운로드', description: '저장을 클릭하여 서명된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '계약서 서명', description: '인쇄 없이 계약서에 전자 서명합니다.', icon: 'file-signature' },
      { title: '양식 작성', description: '신청서에 서명을 추가합니다.', icon: 'clipboard' },
      { title: '승인 워크플로', description: '검토 프로세스의 일부로 문서에 서명합니다.', icon: 'check-circle' },
    ],
    faq: [
      { question: '전자 서명은 법적으로 유효한가요?', answer: '대부분의 국가에서 법적으로 인정됩니다.' },
      { question: '서명을 저장할 수 있나요?', answer: '예, 브라우저의 로컬 저장소에 저장할 수 있습니다.' },
      { question: '여러 서명을 추가할 수 있나요?', answer: '예, 필요한 만큼 서명을 추가할 수 있습니다.' },
    ],
  },

  'crop-pdf': {
    title: 'PDF 자르기',
    metaDescription: 'PDF 페이지를 잘라 여백과 원하지 않는 영역 제거.',
    keywords: ['pdf 자르기', 'pdf 트리밍', 'pdf 여백 제거'],
    description: `<p>PDF 자르기를 사용하면 PDF 페이지에서 여백과 원하지 않는 영역을 트리밍할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '자르기 영역 정의', description: '자르기 핸들을 드래그하여 유지할 영역을 정의합니다.' },
      { step: 3, title: '페이지에 적용', description: '모든 페이지 또는 특정 페이지에 자르기를 적용합니다.' },
      { step: 4, title: '자르기 및 다운로드', description: '자르기를 클릭하여 다운로드합니다.' },
    ],
    useCases: [
      { title: '여백 제거', description: '스캔 문서에서 과도한 여백을 트리밍합니다.', icon: 'maximize-2' },
      { title: '콘텐츠 집중', description: '특정 콘텐츠 영역을 강조합니다.', icon: 'target' },
      { title: '페이지 표준화', description: '모든 페이지를 동일한 크기로 만듭니다.', icon: 'square' },
    ],
    faq: [
      { question: '자르기가 콘텐츠를 영구적으로 제거하나요?', answer: '예, 자르기 영역 외부의 콘텐츠가 제거됩니다.' },
      { question: '다른 페이지를 다르게 자를 수 있나요?', answer: '예, 개별 페이지에 다른 설정을 적용할 수 있습니다.' },
      { question: '자르기가 텍스트 품질에 영향을 미치나요?', answer: '아니요, 남은 콘텐츠는 원본 품질을 유지합니다.' },
    ],
  },

  'extract-pages': {
    title: '페이지 추출',
    metaDescription: 'PDF 파일에서 특정 페이지 추출.',
    keywords: ['pdf 페이지 추출', 'pdf 페이지 저장', 'pdf 페이지 복사'],
    description: `<p>페이지 추출을 사용하면 PDF 문서에서 특정 페이지를 선택하여 새 파일로 저장할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '페이지 선택', description: '페이지 썸네일을 클릭하거나 페이지 번호를 입력합니다.' },
      { step: 3, title: '추출 및 다운로드', description: '추출을 클릭하여 새 PDF를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '발췌 만들기', description: '보고서에서 관련 페이지를 추출합니다.', icon: 'file-minus' },
      { title: '특정 콘텐츠 공유', description: '특정 페이지만 추출하여 공유합니다.', icon: 'share-2' },
      { title: '중요 페이지 보관', description: '주요 페이지를 추출하여 저장합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '비연속 페이지를 추출할 수 있나요?', answer: '예, 모든 페이지 조합을 선택할 수 있습니다.' },
      { question: '북마크가 보존되나요?', answer: '추출된 페이지의 북마크는 보존됩니다.' },
      { question: '여러 PDF에서 페이지를 추출할 수 있나요?', answer: '이 도구는 한 번에 하나의 PDF로 작동합니다.' },
    ],
  },

  'organize-pdf': {
    title: 'PDF 정리',
    metaDescription: 'PDF 페이지 재정렬, 복제, 삭제.',
    keywords: ['pdf 정리', 'pdf 페이지 재정렬', 'pdf 재배열'],
    description: `<p>PDF 정리는 PDF 문서 내 페이지를 재배열하기 위한 직관적인 드래그 앤 드롭 인터페이스를 제공합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '페이지 재정렬', description: '페이지 썸네일을 드래그하여 재정렬합니다.' },
      { step: 3, title: '저장 및 다운로드', description: '저장을 클릭하여 재구성된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '페이지 순서 수정', description: '잘못된 페이지 순서를 수정합니다.', icon: 'arrow-up-down' },
      { title: '사용자 정의 순서 만들기', description: '특정 순서로 페이지를 배열합니다.', icon: 'list' },
      { title: '원하지 않는 페이지 제거', description: '빈 페이지나 중복을 삭제합니다.', icon: 'trash-2' },
    ],
    faq: [
      { question: '페이지를 복제할 수 있나요?', answer: '예, 모든 페이지를 복제할 수 있습니다.' },
      { question: '실행 취소 기능이 있나요?', answer: '예, 변경 사항을 실행 취소할 수 있습니다.' },
      { question: '여러 PDF를 함께 정리할 수 있나요?', answer: '이 도구는 한 번에 하나의 PDF로 작동합니다.' },
    ],
  },

  'delete-pages': {
    title: '페이지 삭제',
    metaDescription: 'PDF 파일에서 원하지 않는 페이지 제거.',
    keywords: ['pdf 페이지 삭제', 'pdf 페이지 제거'],
    description: `<p>페이지 삭제를 사용하면 PDF 문서에서 원하지 않는 페이지를 빠르고 쉽게 제거할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '삭제할 페이지 선택', description: '페이지 썸네일을 클릭하여 삭제 대상으로 표시합니다.' },
      { step: 3, title: '삭제 및 다운로드', description: '삭제를 클릭하여 업데이트된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '빈 페이지 제거', description: '실수로 포함된 빈 페이지를 제거합니다.', icon: 'file-x' },
      { title: '민감한 콘텐츠 제거', description: '기밀 정보가 포함된 페이지를 삭제합니다.', icon: 'shield' },
      { title: '문서 간소화', description: '관련 없는 페이지를 제거합니다.', icon: 'filter' },
    ],
    faq: [
      { question: '삭제된 페이지를 복구할 수 있나요?', answer: '출력 파일에서 삭제는 영구적입니다.' },
      { question: '여러 페이지를 한 번에 삭제할 수 있나요?', answer: '예, 여러 페이지를 동시에 삭제할 수 있습니다.' },
      { question: '페이지 삭제가 북마크에 영향을 미치나요?', answer: '삭제된 페이지의 북마크는 제거됩니다.' },
    ],
  },

  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: '북마크 편집',
    metaDescription: 'PDF 북마크 추가, 편집, 관리. 문서 탐색 구조 생성.',
    keywords: ['pdf 북마크', '북마크 편집', '북마크 추가', 'pdf 탐색'],
    description: `<p>PDF 문서의 북마크를 생성, 수정, 정리할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '북마크 관리', description: '새 북마크를 추가하거나 기존 북마크를 편집합니다.' },
      { step: 3, title: '저장 및 다운로드', description: '저장을 클릭하여 업데이트된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '탐색 생성', description: '긴 문서에 북마크를 추가합니다.', icon: 'navigation' },
      { title: '장 정리', description: '계층적 북마크 구조를 만듭니다.', icon: 'book-open' },
      { title: '접근성 향상', description: '문서를 더 사용하기 쉽게 만듭니다.', icon: 'accessibility' },
    ],
    faq: [
      { question: '중첩된 북마크를 만들 수 있나요?', answer: '예, 계층 구조를 만들 수 있습니다.' },
      { question: '파일에서 북마크를 가져올 수 있나요?', answer: '예, JSON 또는 텍스트 파일에서 가져올 수 있습니다.' },
      { question: '북마크가 모든 PDF 리더에서 작동하나요?', answer: '예, 표준 PDF 기능입니다.' },
    ],
  },

  'table-of-contents': {
    title: '목차',
    metaDescription: 'PDF 목차 생성. 북마크에서 클릭 가능한 탐색 생성.',
    keywords: ['pdf 목차', '목차 생성', 'pdf 인덱스'],
    description: `<p>PDF 문서의 탐색 가능한 목차 페이지를 생성합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '목차 설정', description: '북마크에서 생성하거나 사용자 정의 항목을 만듭니다.' },
      { step: 3, title: '생성 및 다운로드', description: '생성을 클릭하여 목차를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '학술 논문', description: '논문에 전문적인 목차를 추가합니다.', icon: 'graduation-cap' },
      { title: '비즈니스 보고서', description: '탐색 가능한 보고서를 만듭니다.', icon: 'bar-chart' },
      { title: '사용자 매뉴얼', description: '기술 문서의 목차를 생성합니다.', icon: 'book' },
    ],
    faq: [
      { question: '목차 모양을 사용자 정의할 수 있나요?', answer: '예, 스타일과 레이아웃을 선택할 수 있습니다.' },
      { question: '목차는 어디에 삽입되나요?', answer: '기본적으로 문서 시작 부분에 삽입됩니다.' },
      { question: '목차 항목이 클릭 가능한가요?', answer: '예, 각 항목은 해당 페이지로 이동하는 링크입니다.' },
    ],
  },

  'page-numbers': {
    title: '페이지 번호',
    metaDescription: 'PDF 문서에 페이지 번호 추가. 위치, 형식, 시작 번호 사용자 정의.',
    keywords: ['페이지 번호 추가', 'pdf 페이지 번호', 'pdf 페이지 매기기'],
    description: `<p>PDF 문서에 사용자 정의 가능한 페이지 번호를 추가합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '번호 매기기 설정', description: '위치, 형식, 시작 번호를 선택합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 페이지 번호를 추가하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '전문 문서', description: '보고서와 제안서에 페이지 번호를 추가합니다.', icon: 'file-text' },
      { title: '학술 논문', description: '학술 형식 요구 사항에 따라 페이지에 번호를 매깁니다.', icon: 'graduation-cap' },
      { title: '법적 문서', description: '계약서에 적절한 페이지 매기기를 추가합니다.', icon: 'scale' },
    ],
    faq: [
      { question: '첫 페이지를 건너뛸 수 있나요?', answer: '예, 번호를 매길 페이지를 지정할 수 있습니다.' },
      { question: '어떤 번호 형식을 사용할 수 있나요?', answer: '아라비아 숫자, 로마 숫자, 문자를 사용할 수 있습니다.' },
      { question: '"페이지 X/Y" 형식을 추가할 수 있나요?', answer: '예, 총 페이지 수를 포함할 수 있습니다.' },
    ],
  },

  'add-watermark': {
    title: '워터마크 추가',
    metaDescription: 'PDF 파일에 텍스트 또는 이미지 워터마크 추가.',
    keywords: ['워터마크 추가', 'pdf 워터마크', 'pdf 스탬프', 'pdf 보호'],
    description: `<p>PDF 문서에 텍스트 또는 이미지 워터마크를 배치할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '워터마크 생성', description: '텍스트를 입력하거나 이미지를 업로드합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 워터마크를 추가하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 보호', description: '"기밀" 또는 "초안" 워터마크를 추가합니다.', icon: 'shield' },
      { title: '문서 브랜딩', description: '공식 문서에 회사 로고를 추가합니다.', icon: 'award' },
      { title: '저작권 표시', description: '지적 재산을 보호하기 위해 저작권 정보를 추가합니다.', icon: 'copyright' },
    ],
    faq: [
      { question: '이미지를 워터마크로 사용할 수 있나요?', answer: '예, PNG, JPG, SVG 이미지를 업로드할 수 있습니다.' },
      { question: '워터마크를 반투명하게 만들 수 있나요?', answer: '예, 불투명도를 조정할 수 있습니다.' },
      { question: '다른 페이지에 다른 워터마크를 적용할 수 있나요?', answer: '도구는 선택한 페이지에 동일한 워터마크를 적용합니다.' },
    ],
  },

  'header-footer': {
    title: '머리글 및 바닥글',
    metaDescription: 'PDF 문서에 머리글과 바닥글 추가.',
    keywords: ['pdf 머리글', 'pdf 바닥글', '머리글 바닥글 추가'],
    description: `<p>PDF 문서에 사용자 정의 가능한 머리글과 바닥글을 추가합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '머리글/바닥글 설정', description: '머리글과 바닥글 영역의 텍스트를 입력합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 머리글/바닥글을 추가하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '비즈니스 문서', description: '전문 문서에 회사명과 페이지 번호를 추가합니다.', icon: 'briefcase' },
      { title: '법적 문서', description: '법적 제출물에 사건 번호와 날짜를 포함합니다.', icon: 'scale' },
      { title: '학술 논문', description: '논문 제목과 저자명의 러닝 헤더를 추가합니다.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: '홀수 페이지와 짝수 페이지에 다른 머리글을 설정할 수 있나요?', answer: '예, 다른 콘텐츠를 설정할 수 있습니다.' },
      { question: '현재 날짜를 포함할 수 있나요?', answer: '예, 동적 날짜 필드를 삽입할 수 있습니다.' },
      { question: '특정 페이지에서 머리글/바닥글을 건너뛸 수 있나요?', answer: '예, 건너뛸 페이지를 지정할 수 있습니다.' },
    ],
  },

  'invert-colors': {
    title: '색상 반전',
    metaDescription: '다크 모드 읽기를 위해 PDF 색상 반전.',
    keywords: ['pdf 색상 반전', 'pdf 다크 모드', '네거티브 pdf'],
    description: `<p>PDF 문서의 색상을 반전하여 네거티브 이미지 효과를 만듭니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '옵션 설정', description: '모든 콘텐츠를 반전할지 이미지를 보존할지 선택합니다.' },
      { step: 3, title: '반전 및 다운로드', description: '반전을 클릭하여 문서를 처리하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '야간 읽기', description: '야간 편안한 읽기를 위한 다크 모드 버전을 만듭니다.', icon: 'moon' },
      { title: '눈의 피로 감소', description: '밝은 문서를 반전하여 눈의 피로를 줄입니다.', icon: 'eye' },
      { title: '인쇄 절약', description: '초안 인쇄 시 잉크 사용량을 줄이기 위해 문서를 반전합니다.', icon: 'printer' },
    ],
    faq: [
      { question: '이미지도 반전되나요?', answer: '기본적으로 예. 원본 이미지를 보존하도록 선택할 수 있습니다.' },
      { question: '특정 페이지만 반전할 수 있나요?', answer: '예, 반전할 페이지를 선택할 수 있습니다.' },
      { question: '반전을 되돌릴 수 있나요?', answer: '문서를 다시 반전하여 대략 원래 색상으로 돌아갈 수 있습니다.' },
    ],
  },

  'background-color': {
    title: '배경색',
    metaDescription: 'PDF 배경색 변경. 문서 페이지에 색상 배경 추가.',
    keywords: ['pdf 배경색', 'pdf 배경 변경', '색상 pdf'],
    description: `<p>PDF 페이지의 배경색을 변경하거나 추가할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '색상 선택', description: '색상 선택기를 사용하거나 16진수 코드를 입력합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 배경을 추가하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '가독성 향상', description: '눈의 피로를 줄이기 위해 연한 크림색 배경을 추가합니다.', icon: 'eye' },
      { title: '문서 브랜딩', description: '마케팅 자료에 브랜드 색상을 사용합니다.', icon: 'palette' },
      { title: '섹션 강조', description: '문서 섹션을 구분하기 위해 다른 배경색을 사용합니다.', icon: 'layers' },
    ],
    faq: [
      { question: '배경이 기존 콘텐츠를 덮나요?', answer: '아니요, 배경은 기존 콘텐츠 뒤에 추가됩니다.' },
      { question: '다른 페이지에 다른 색상을 사용할 수 있나요?', answer: '다른 색상을 위해 문서를 여러 번 처리해야 합니다.' },
      { question: '기존 배경을 제거할 수 있나요?', answer: '이 도구는 배경을 추가합니다. 배경 제거는 PDF 편집 도구를 사용하세요.' },
    ],
  },

  'text-color': {
    title: '텍스트 색상 변경',
    metaDescription: 'PDF 문서의 텍스트 색상 변경.',
    keywords: ['pdf 텍스트 색상 변경', 'pdf 텍스트 색상'],
    description: `<p>PDF 문서 내 텍스트의 색상을 변경할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '색상 선택', description: '색상 선택기를 사용하거나 16진수 코드를 입력합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 텍스트 색상을 변경하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '대비 개선', description: '배경에 대한 가독성을 향상시키기 위해 텍스트 색상을 변경합니다.', icon: 'contrast' },
      { title: '브랜드 일관성', description: '브랜드 가이드라인에 맞게 텍스트 색상을 업데이트합니다.', icon: 'palette' },
      { title: '접근성', description: '접근성 대비 요구 사항을 충족하도록 텍스트 색상을 조정합니다.', icon: 'accessibility' },
    ],
    faq: [
      { question: '모든 텍스트가 변경되나요?', answer: '예, 도구는 문서의 모든 텍스트 요소의 색상을 변경합니다.' },
      { question: '특정 텍스트만 변경할 수 있나요?', answer: '이 도구는 모든 텍스트를 변경합니다. 선택적 변경은 PDF 편집 도구를 사용하세요.' },
      { question: '서식이 지정된 텍스트(굵게, 기울임꼴)가 보존되나요?', answer: '예, 텍스트 서식은 보존됩니다. 색상만 변경됩니다.' },
    ],
  },

  'add-stamps': {
    title: '스탬프 추가',
    metaDescription: 'PDF 문서에 스탬프 추가. 승인, 검토 등을 위한 프리셋 또는 사용자 정의 스탬프 사용.',
    keywords: ['pdf 스탬프', '스탬프 추가', '승인 스탬프'],
    description: `<p>PDF 문서에 스탬프 이미지를 배치할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '스탬프 선택', description: '프리셋 스탬프를 선택하거나 사용자 정의 스탬프 이미지를 업로드합니다.' },
      { step: 3, title: '배치 및 적용', description: '클릭하여 스탬프를 배치하고 위치와 크기를 조정한 후 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 승인', description: '검토 워크플로에서 "승인" 또는 "거부" 스탬프를 추가합니다.', icon: 'check-circle' },
      { title: '상태 표시', description: '문서를 "초안", "최종", "기밀"로 표시합니다.', icon: 'tag' },
      { title: '품질 관리', description: '검사 또는 검토 완료를 나타내는 QC 스탬프를 추가합니다.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: '어떤 프리셋 스탬프를 사용할 수 있나요?', answer: '승인, 거부, 초안, 최종, 기밀, 복사 등이 있습니다.' },
      { question: '사용자 정의 스탬프를 업로드할 수 있나요?', answer: '예, PNG 또는 JPG 이미지를 업로드할 수 있습니다.' },
      { question: '하나의 문서에 여러 스탬프를 추가할 수 있나요?', answer: '예, 여러 스탬프를 추가하고 각각 독립적으로 배치할 수 있습니다.' },
    ],
  },

  'remove-annotations': {
    title: '주석 제거',
    metaDescription: 'PDF 파일에서 주석 제거. 코멘트, 하이라이트, 마크업 삭제.',
    keywords: ['pdf 주석 제거', '코멘트 삭제', '하이라이트 제거'],
    description: `<p>PDF 문서에서 코멘트, 하이라이트, 스티커 노트 및 기타 주석을 제거합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '주석 유형 선택', description: '제거할 주석 유형을 선택합니다.' },
      { step: 3, title: '제거 및 다운로드', description: '제거를 클릭하여 주석을 삭제하고 깨끗한 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 최종화', description: '최종 문서를 게시하기 전에 검토 코멘트를 제거합니다.', icon: 'file-check' },
      { title: '개인 정보 보호', description: '공유 전에 민감한 정보가 포함된 코멘트를 제거합니다.', icon: 'shield' },
      { title: '깨끗한 배포', description: '배포용으로 주석이 달린 문서의 깨끗한 사본을 만듭니다.', icon: 'copy' },
    ],
    faq: [
      { question: '어떤 유형의 주석을 제거할 수 있나요?', answer: '코멘트, 하이라이트, 밑줄, 취소선, 스티커 노트, 스탬프, 링크를 모두 제거할 수 있습니다.' },
      { question: '일부 주석을 유지할 수 있나요?', answer: '예, 제거할 주석 유형과 유지할 유형을 선택할 수 있습니다.' },
      { question: '이것은 되돌릴 수 있나요?', answer: '아니요, 주석 제거는 영구적입니다. 필요한 경우 원본 백업을 유지하세요.' },
    ],
  },

  'form-filler': {
    title: '양식 작성',
    metaDescription: '온라인으로 PDF 양식 작성. 인쇄 없이 대화형 PDF 양식 완성.',
    keywords: ['pdf 양식 작성', 'pdf 양식 필러', 'pdf 양식 완성'],
    description: `<p>브라우저에서 직접 대화형 PDF 양식을 작성할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 양식 업로드', description: 'PDF 양식을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '양식 작성', description: '양식 필드를 클릭하여 텍스트를 입력하고 체크박스를 선택합니다.' },
      { step: 3, title: '저장 및 다운로드', description: '저장을 클릭하여 작성된 양식을 다운로드합니다.' },
    ],
    useCases: [
      { title: '신청서 양식', description: '취업 신청서, 허가 신청서, 등록 양식을 완성합니다.', icon: 'clipboard' },
      { title: '세금 양식', description: '세금 문서와 재무 양식을 전자적으로 작성합니다.', icon: 'file-text' },
      { title: '계약서', description: '서명 전에 계약서 양식에 정보를 입력합니다.', icon: 'file-signature' },
    ],
    faq: [
      { question: '진행 상황을 저장할 수 있나요?', answer: '예, 부분적으로 작성된 양식을 저장하고 나중에 계속할 수 있습니다.' },
      { question: '양식 평면화란 무엇인가요?', answer: '평면화는 양식 필드를 정적 콘텐츠로 변환하여 추가 편집을 방지합니다.' },
      { question: 'XFA 양식이 지원되나요?', answer: '예, 표준 AcroForms와 XFA 양식 모두 지원됩니다.' },
    ],
  },

  'form-creator': {
    title: '양식 생성',
    metaDescription: '작성 가능한 PDF 양식 생성. 문서에 텍스트 필드, 체크박스, 드롭다운 추가.',
    keywords: ['pdf 양식 생성', 'pdf 양식 크리에이터', '작성 가능한 pdf'],
    description: `<p>정적 PDF 문서를 대화형 작성 가능한 양식으로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '양식 필드 추가', description: '도구 모음에서 필드 유형을 선택하고 클릭하여 배치합니다.' },
      { step: 3, title: '설정 및 저장', description: '필드 속성을 설정한 후 작성 가능한 PDF 양식을 저장하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '신청서 양식', description: '작성 가능한 취업 신청서, 회원 양식, 등록 양식을 만듭니다.', icon: 'user-plus' },
      { title: '설문조사', description: '데이터 수집을 위한 대화형 설문조사와 질문지를 만듭니다.', icon: 'clipboard-list' },
      { title: '주문 양식', description: '수량 필드와 체크박스가 있는 제품 주문 양식을 만듭니다.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: '어떤 필드 유형을 추가할 수 있나요?', answer: '텍스트 필드, 체크박스, 라디오 버튼, 드롭다운, 날짜 선택기, 서명 필드.' },
      { question: '필드를 필수로 만들 수 있나요?', answer: '예, 필드를 필수로 표시하고 유효성 검사 규칙을 추가할 수 있습니다.' },
      { question: '계산을 추가할 수 있나요?', answer: '합계와 평균 같은 기본 계산을 숫자 필드에 추가할 수 있습니다.' },
    ],
  },

  'remove-blank-pages': {
    title: '빈 페이지 제거',
    metaDescription: 'PDF 문서에서 빈 페이지 자동 감지 및 제거.',
    keywords: ['빈 페이지 제거', '빈 페이지 삭제', 'pdf 정리'],
    description: `<p>PDF 문서에서 빈 페이지를 자동으로 감지하고 제거합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '임계값 조정', description: '필요한 경우 빈 페이지 감지 임계값을 설정합니다.' },
      { step: 3, title: '제거 및 다운로드', description: '제거를 클릭하여 빈 페이지를 삭제하고 정리된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '스캔 문서 정리', description: '일괄 스캔된 문서에서 빈 페이지를 제거합니다.', icon: 'scan' },
      { title: '구분자 제거', description: '병합된 문서에서 빈 구분자 페이지를 삭제합니다.', icon: 'minus' },
      { title: '파일 크기 줄이기', description: '불필요한 빈 페이지를 제거하여 문서 크기를 줄입니다.', icon: 'minimize-2' },
    ],
    faq: [
      { question: '빈 페이지 감지는 어떻게 작동하나요?', answer: '도구는 페이지 콘텐츠를 분석하고 최소한의 콘텐츠가 있는 페이지를 빈 페이지로 간주합니다.' },
      { question: '제거될 페이지를 미리 볼 수 있나요?', answer: '예, 감지된 빈 페이지는 제거 전에 검토를 위해 강조 표시됩니다.' },
      { question: '페이지에 머리글/바닥글만 있으면 어떻게 되나요?', answer: '최소한의 콘텐츠가 있는 페이지를 빈 페이지로 간주할지 결정하기 위해 임계값을 조정할 수 있습니다.' },
    ],
  },

  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: '이미지를 PDF로',
    metaDescription: '모든 이미지를 PDF로 변환. JPG, PNG, WebP, BMP, TIFF, SVG, HEIC 형식 지원.',
    keywords: ['이미지를 pdf로', '이미지 변환', '사진을 pdf로'],
    description: `<p>모든 형식의 이미지를 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: '이미지 업로드', description: '지원되는 형식의 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '정렬 및 구성', description: '이미지를 재정렬하고 페이지 크기와 방향을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '사진 컬렉션', description: '다양한 소스의 사진을 단일 PDF 앨범으로 결합합니다.', icon: 'images' },
      { title: '혼합 형식 문서', description: '다른 형식의 이미지를 통합 PDF로 변환합니다.', icon: 'file-stack' },
      { title: '아카이브 생성', description: '장기 저장을 위해 이미지 컬렉션에서 PDF 아카이브를 만듭니다.', icon: 'archive' },
    ],
    faq: [
      { question: '어떤 이미지 형식이 지원되나요?', answer: 'JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC, HEIF 형식이 모두 지원됩니다.' },
      { question: '다른 이미지 형식을 혼합할 수 있나요?', answer: '예, 다른 형식의 이미지를 단일 PDF로 결합할 수 있습니다.' },
      { question: '이미지 품질이 보존되나요?', answer: '예, 압축을 선택하지 않는 한 이미지는 원본 품질로 포함됩니다.' },
    ],
  },


  'png-to-pdf': {
    title: 'PNG를 PDF로',
    metaDescription: 'PNG 이미지를 PDF로 변환. 투명도 보존 및 여러 PNG 파일 결합.',
    keywords: ['png를 pdf로', 'png 변환', 'png 변환기'],
    description: `<p>PNG 이미지를 투명도를 보존하면서 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PNG 파일 업로드', description: 'PNG 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '정렬 및 구성', description: '이미지를 재정렬하고 페이지 크기 옵션을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '그래픽 포트폴리오', description: 'PNG 그래픽과 디자인을 전문 포트폴리오로 컴파일합니다.', icon: 'palette' },
      { title: '스크린샷 문서화', description: '스크린샷을 PDF 문서로 변환합니다.', icon: 'monitor' },
      { title: '로고 컬렉션', description: '로고와 브랜드 자산의 PDF 카탈로그를 만듭니다.', icon: 'award' },
    ],
    faq: [
      { question: '투명도가 보존되나요?', answer: 'PNG 투명도는 PDF 출력에서 보존됩니다.' },
      { question: 'PNG 애니메이션은 어떻게 되나요?', answer: '애니메이션 PNG는 첫 번째 프레임을 사용하여 정적 이미지로 변환됩니다.' },
      { question: '배경색을 설정할 수 있나요?', answer: '예, 투명 영역에 대한 배경색을 선택할 수 있습니다.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP를 PDF로',
    metaDescription: 'WebP 이미지를 PDF로 변환. 품질 보존과 함께 현대적인 이미지 형식 변환.',
    keywords: ['webp를 pdf로', 'webp 변환', 'webp 변환기'],
    description: `<p>현대적인 WebP 이미지를 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'WebP 파일 업로드', description: 'WebP 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '옵션 구성', description: '이미지를 정렬하고 페이지 크기와 방향을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '웹 콘텐츠 아카이빙', description: '오프라인 아카이빙을 위해 웹 이미지를 PDF로 변환합니다.', icon: 'globe' },
      { title: '인쇄 준비', description: '인쇄 목적으로 WebP 이미지를 PDF로 변환합니다.', icon: 'printer' },
      { title: '형식 표준화', description: '현대적인 WebP를 범용 호환 PDF로 변환합니다.', icon: 'file-check' },
    ],
    faq: [
      { question: 'WebP 형식이란 무엇인가요?', answer: 'WebP는 Google이 개발한 현대적인 이미지 형식으로 웹 이미지에 우수한 압축을 제공합니다.' },
      { question: '품질이 보존되나요?', answer: '예, 변환은 원본 이미지 품질을 보존합니다.' },
      { question: '애니메이션 WebP를 변환할 수 있나요?', answer: '애니메이션 WebP 파일은 정적 이미지로 변환됩니다.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG를 PDF로',
    metaDescription: 'SVG 벡터 그래픽을 PDF로 변환. 확장성과 품질 보존.',
    keywords: ['svg를 pdf로', 'svg 변환', '벡터를 pdf로'],
    description: `<p>확장 가능한 벡터 그래픽을 벡터 품질을 보존하면서 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'SVG 파일 업로드', description: 'SVG 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '설정 구성', description: '페이지 크기와 배열 옵션을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 벡터 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '로고 변환', description: 'SVG 로고를 인쇄 자료용 PDF로 변환합니다.', icon: 'award' },
      { title: '기술 도면', description: 'CAD 내보내기와 기술 일러스트레이션을 PDF로 변환합니다.', icon: 'ruler' },
      { title: '아이콘 컬렉션', description: '아이콘 세트와 그래픽의 PDF 카탈로그를 만듭니다.', icon: 'grid' },
    ],
    faq: [
      { question: '벡터 품질이 보존되나요?', answer: '예, SVG 벡터 품질은 PDF 출력에서 완전히 보존됩니다.' },
      { question: '복잡한 SVG를 변환할 수 있나요?', answer: '예, 그라디언트, 필터, 효과가 있는 복잡한 SVG가 지원됩니다.' },
      { question: '포함된 글꼴은 어떻게 되나요?', answer: 'SVG 파일에 포함된 글꼴은 PDF에서 보존됩니다.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP를 PDF로',
    metaDescription: 'BMP 비트맵 이미지를 PDF로 변환. 품질 보존과 함께 레거시 형식 지원.',
    keywords: ['bmp를 pdf로', 'bmp 변환', '비트맵을 pdf로'],
    description: `<p>비트맵 이미지를 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'BMP 파일 업로드', description: 'BMP 이미지를 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '옵션 구성', description: '이미지를 정렬하고 페이지 설정을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '레거시 파일 변환', description: '오래된 BMP 파일을 현대적인 PDF 형식으로 변환합니다.', icon: 'history' },
      { title: 'Windows 스크린샷', description: 'Windows 비트맵 스크린샷을 PDF로 변환합니다.', icon: 'monitor' },
      { title: '아카이브 현대화', description: '레거시 이미지 아카이브를 PDF 형식으로 업데이트합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '파일 크기가 줄어드나요?', answer: '예, BMP 파일은 PDF로 변환할 때 일반적으로 상당히 압축됩니다.' },
      { question: '품질이 보존되나요?', answer: '예, 변환 중 이미지 품질이 유지됩니다.' },
      { question: '어떤 BMP 색상 깊이가 지원되나요?', answer: '24비트 및 32비트를 포함한 모든 표준 BMP 색상 깊이가 지원됩니다.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC를 PDF로',
    metaDescription: 'iPhone HEIC 사진을 PDF로 변환. Apple 이미지 형식 변환이 쉬워집니다.',
    keywords: ['heic를 pdf로', 'heic 변환', 'iphone 사진을 pdf로'],
    description: `<p>Apple의 고효율 이미지 형식 사진을 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'HEIC 파일 업로드', description: 'HEIC 사진을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '사진 정렬', description: '사진을 재정렬하고 페이지 설정을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: 'iPhone 사진 앨범', description: '공유를 위해 iPhone 사진에서 PDF 앨범을 만듭니다.', icon: 'smartphone' },
      { title: '문서 스캔', description: 'iPhone 문서 스캔을 PDF 형식으로 변환합니다.', icon: 'scan' },
      { title: '크로스 플랫폼 공유', description: '범용 호환성을 위해 HEIC를 PDF로 변환합니다.', icon: 'share-2' },
    ],
    faq: [
      { question: 'HEIC 형식이란 무엇인가요?', answer: 'HEIC(고효율 이미지 컨테이너)는 JPEG보다 더 나은 압축을 제공하는 Apple의 이미지 형식입니다.' },
      { question: 'Live Photos가 지원되나요?', answer: 'Live Photos는 키 프레임을 사용하여 정적 이미지로 변환됩니다.' },
      { question: 'EXIF 데이터가 보존되나요?', answer: '사진 메타데이터는 변환 중 선택적으로 보존하거나 제거할 수 있습니다.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF를 PDF로',
    metaDescription: 'TIFF 이미지를 PDF로 변환. 다중 페이지 TIFF 파일 지원 및 고품질 변환.',
    keywords: ['tiff를 pdf로', 'tiff 변환', 'tif를 pdf로'],
    description: `<p>다중 페이지 TIFF 파일을 포함한 TIFF 이미지를 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'TIFF 파일 업로드', description: 'TIFF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '옵션 구성', description: '페이지 설정과 압축 옵션을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '스캔 문서', description: '고품질 스캔을 TIFF에서 PDF로 변환합니다.', icon: 'scan' },
      { title: '전문 그래픽', description: '배포를 위해 전문 TIFF 그래픽을 변환합니다.', icon: 'image' },
      { title: '아카이브 변환', description: 'TIFF 아카이브를 더 접근하기 쉬운 PDF 형식으로 변환합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '다중 페이지 TIFF가 지원되나요?', answer: '예, 다중 페이지 TIFF 파일은 자동으로 다중 페이지 PDF로 변환됩니다.' },
      { question: '품질이 보존되나요?', answer: '예, TIFF 품질은 PDF 출력에서 완전히 보존됩니다.' },
      { question: '어떤 압축이 사용되나요?', answer: '무손실 및 손실 압축 옵션 중에서 선택할 수 있습니다.' },
    ],
  },

  'txt-to-pdf': {
    title: '텍스트를 PDF로',
    metaDescription: '일반 텍스트 파일을 PDF로 변환. 글꼴, 여백, 페이지 레이아웃 사용자 정의.',
    keywords: ['txt를 pdf로', '텍스트를 pdf로', '텍스트 파일 변환'],
    description: `<p>일반 텍스트 파일을 서식이 지정된 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: '텍스트 파일 업로드', description: '.txt 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '서식 사용자 정의', description: '글꼴, 크기, 여백, 페이지 설정을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 서식이 지정된 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '코드 문서화', description: '소스 코드 파일을 문서화용 PDF로 변환합니다.', icon: 'code' },
      { title: '로그 아카이브', description: '아카이브 목적으로 로그 파일을 PDF로 변환합니다.', icon: 'file-text' },
      { title: '노트 변환', description: '일반 텍스트 노트를 서식이 지정된 PDF 문서로 변환합니다.', icon: 'sticky-note' },
    ],
    faq: [
      { question: '어떤 글꼴을 사용할 수 있나요?', answer: '코드용 고정폭 글꼴을 포함한 여러 글꼴을 사용할 수 있습니다.' },
      { question: '줄 바꿈이 자동으로 되나요?', answer: '예, 긴 줄은 페이지에 맞게 자동으로 줄 바꿈됩니다.' },
      { question: '서식을 보존할 수 있나요?', answer: '원본 텍스트의 공백과 들여쓰기가 보존됩니다.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON을 PDF로',
    metaDescription: 'JSON 파일을 서식이 지정된 PDF로 변환. 구문 강조 및 구조화된 출력.',
    keywords: ['json을 pdf로', 'json 변환', 'json 뷰어'],
    description: `<p>JSON 데이터 파일을 서식이 지정되고 읽기 쉬운 PDF 문서로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'JSON 파일 업로드', description: '.json 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '표시 구성', description: '서식 옵션과 구문 강조를 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 서식이 지정된 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: 'API 문서화', description: '문서화를 위해 API 응답을 PDF로 변환합니다.', icon: 'code' },
      { title: '설정 아카이브', description: '읽기 쉬운 PDF 형식으로 설정 파일을 아카이브합니다.', icon: 'settings' },
      { title: '데이터 보고서', description: 'JSON 데이터 내보내기에서 PDF 보고서를 만듭니다.', icon: 'bar-chart' },
    ],
    faq: [
      { question: '구문 강조가 포함되나요?', answer: '예, JSON 구문은 키, 값, 유형에 대해 색상으로 강조 표시됩니다.' },
      { question: '중첩된 데이터는 어떻게 처리되나요?', answer: '중첩된 객체와 배열은 가독성을 위해 적절히 들여쓰기됩니다.' },
      { question: '큰 JSON 파일은 어떻게 되나요?', answer: '큰 파일은 자동으로 여러 페이지에 걸쳐 페이지가 매겨집니다.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================
  'pdf-to-jpg': {
    title: 'PDF를 JPG로',
    metaDescription: 'PDF 페이지를 JPG 이미지로 변환. 사용자 정의 가능한 해상도로 고품질 추출.',
    keywords: ['pdf를 jpg로', 'pdf를 jpeg로', 'pdf를 이미지로 변환'],
    description: `<p>PDF 문서 페이지를 고품질 JPG 이미지로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '페이지 및 품질 선택', description: '변환할 페이지를 선택하고 품질/DPI 옵션을 설정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 이미지를 추출하고 ZIP으로 다운로드합니다.' },
    ],
    useCases: [
      { title: '웹 게시', description: '웹사이트 사용을 위해 PDF 페이지를 이미지로 변환합니다.', icon: 'globe' },
      { title: '소셜 미디어', description: '소셜 미디어 공유를 위해 페이지를 이미지로 추출합니다.', icon: 'share-2' },
      { title: '프레젠테이션', description: '프레젠테이션용으로 PDF 슬라이드를 이미지로 변환합니다.', icon: 'presentation' },
    ],
    faq: [
      { question: '어떤 품질 설정을 사용할 수 있나요?', answer: 'DPI를 72에서 300까지, JPEG 품질을 1-100까지 설정할 수 있습니다.' },
      { question: '특정 페이지만 변환할 수 있나요?', answer: '예, 개별 페이지 또는 페이지 범위를 선택하여 변환할 수 있습니다.' },
      { question: '여러 페이지는 어떻게 처리되나요?', answer: '각 페이지는 별도의 JPG 파일이 되어 ZIP 아카이브로 다운로드됩니다.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF를 PNG로',
    metaDescription: 'PDF 페이지를 PNG 이미지로 변환. 투명도 지원과 함께 무손실 품질.',
    keywords: ['pdf를 png로', 'pdf를 png로 변환', 'pdf 이미지 추출'],
    description: `<p>PDF 문서 페이지를 무손실 압축의 고품질 PNG 이미지로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '옵션 구성', description: '페이지를 선택하고 해상도(DPI) 옵션을 설정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PNG 이미지를 추출합니다.' },
    ],
    useCases: [
      { title: '그래픽 추출', description: '완벽한 품질로 다이어그램과 그래픽을 추출합니다.', icon: 'image' },
      { title: '디자인 자산', description: '편집 소프트웨어용으로 PDF 디자인을 PNG로 변환합니다.', icon: 'palette' },
      { title: '문서화', description: '기술 문서용 고품질 이미지를 만듭니다.', icon: 'file-text' },
    ],
    faq: [
      { question: 'JPG 대신 PNG를 선택하는 이유는?', answer: 'PNG는 무손실 압축과 투명도 지원을 제공하여 그래픽과 텍스트에 이상적입니다.' },
      { question: '투명 배경이 지원되나요?', answer: '예, 투명도가 있는 PDF 페이지는 PNG 출력에서 보존됩니다.' },
      { question: '어떤 DPI를 사용해야 하나요?', answer: '화면 보기에는 150 DPI, 인쇄에는 300 DPI를 사용하세요.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF를 WebP로',
    metaDescription: 'PDF 페이지를 WebP 이미지로 변환. 우수한 압축의 현대적인 형식.',
    keywords: ['pdf를 webp로', 'pdf를 webp로 변환', '현대적인 이미지 형식'],
    description: `<p>PDF 문서 페이지를 Google의 현대적인 이미지 형식인 WebP 이미지로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '품질 옵션 설정', description: '페이지를 선택하고 품질/압축 설정을 지정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 WebP 이미지를 만듭니다.' },
    ],
    useCases: [
      { title: '웹 최적화', description: 'PDF 콘텐츠에서 웹 최적화 이미지를 만듭니다.', icon: 'globe' },
      { title: '대역폭 절약', description: '더 빠른 로딩을 위해 이미지 파일 크기를 줄입니다.', icon: 'zap' },
      { title: '현대적인 웹사이트', description: '현대적인 웹 프로젝트에 현대적인 이미지 형식을 사용합니다.', icon: 'layout' },
    ],
    faq: [
      { question: 'WebP 형식이란 무엇인가요?', answer: 'WebP는 우수한 압축을 제공하는 Google의 현대적인 이미지 형식입니다.' },
      { question: 'WebP가 널리 지원되나요?', answer: '예, 모든 현대적인 브라우저가 WebP 형식을 지원합니다.' },
      { question: 'WebP 파일이 얼마나 작나요?', answer: 'WebP 파일은 일반적으로 동등한 JPG 파일보다 25-35% 작습니다.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF를 BMP로',
    metaDescription: 'PDF 페이지를 BMP 비트맵 이미지로 변환. 최대 호환성을 위한 비압축 형식.',
    keywords: ['pdf를 bmp로', 'pdf를 비트맵으로 변환', '비압축 이미지'],
    description: `<p>PDF 문서 페이지를 BMP 비트맵 이미지로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '페이지 선택', description: '변환할 페이지를 선택하고 DPI를 설정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 BMP 이미지를 만듭니다.' },
    ],
    useCases: [
      { title: '레거시 시스템', description: '오래된 소프트웨어와 호환되는 이미지를 만듭니다.', icon: 'history' },
      { title: 'Windows 애플리케이션', description: 'Windows 전용 애플리케이션용 BMP 파일을 생성합니다.', icon: 'monitor' },
      { title: '비압축 아카이브', description: 'PDF에서 비압축 이미지 아카이브를 만듭니다.', icon: 'archive' },
    ],
    faq: [
      { question: 'BMP 형식을 사용하는 이유는?', answer: 'BMP는 비압축 품질과 레거시 시스템과의 최대 호환성을 제공합니다.' },
      { question: 'BMP 파일이 더 큰가요?', answer: '예, BMP 파일은 비압축이므로 JPG나 PNG보다 상당히 큽니다.' },
      { question: '어떤 색상 깊이가 지원되나요?', answer: '24비트 및 32비트 색상 깊이가 지원됩니다.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF를 TIFF로',
    metaDescription: 'PDF를 TIFF 이미지로 변환. 다중 페이지 지원과 함께 전문 품질.',
    keywords: ['pdf를 tiff로', 'pdf를 tiff로 변환', '전문 이미지'],
    description: `<p>PDF 문서를 고품질 TIFF 이미지로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '출력 구성', description: '단일 또는 다중 페이지 TIFF를 선택하고 DPI를 설정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 TIFF 이미지를 만듭니다.' },
    ],
    useCases: [
      { title: '전문 인쇄', description: 'PDF 문서에서 인쇄 준비 TIFF 파일을 만듭니다.', icon: 'printer' },
      { title: '문서 아카이빙', description: '고품질 TIFF 형식으로 문서를 아카이브합니다.', icon: 'archive' },
      { title: '출판', description: '출판 워크플로를 위해 PDF를 TIFF로 변환합니다.', icon: 'book' },
    ],
    faq: [
      { question: '다중 페이지 TIFF를 만들 수 있나요?', answer: '예, 모든 PDF 페이지를 단일 다중 페이지 TIFF로 결합할 수 있습니다.' },
      { question: '어떤 압축 옵션을 사용할 수 있나요?', answer: 'LZW, ZIP, 무압축 옵션을 사용할 수 있습니다.' },
      { question: '인쇄에 어떤 DPI를 사용해야 하나요?', answer: '전문 인쇄에는 300 DPI 이상을 사용하세요.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF를 그레이스케일로',
    metaDescription: '컬러 PDF를 그레이스케일로 변환. 파일 크기 줄이기 및 흑백 인쇄 준비.',
    keywords: ['pdf를 그레이스케일로', '그레이스케일 pdf', '흑백 pdf'],
    description: `<p>컬러 PDF 문서를 그레이스케일(흑백)로 변환합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '컬러 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '변환 미리보기', description: '그레이스케일 버전이 어떻게 보일지 미리 봅니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 그레이스케일 PDF를 만듭니다.' },
    ],
    useCases: [
      { title: '인쇄 절약', description: '컬러 인쇄 비용을 절약하기 위해 그레이스케일로 변환합니다.', icon: 'printer' },
      { title: '초안 문서', description: '검토용 흑백 초안을 만듭니다.', icon: 'file-text' },
      { title: '파일 크기 줄이기', description: '색상 정보를 제거하여 PDF 크기를 줄입니다.', icon: 'minimize-2' },
    ],
    faq: [
      { question: '텍스트가 읽기 쉽게 유지되나요?', answer: '예, 그레이스케일 변환 중 텍스트 선명도가 보존됩니다.' },
      { question: '파일이 얼마나 작아지나요?', answer: '파일 크기 감소는 다양하지만 색상이 많은 문서의 경우 20-50%가 될 수 있습니다.' },
      { question: '특정 페이지만 변환할 수 있나요?', answer: '예, 그레이스케일로 변환할 페이지를 선택할 수 있습니다.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF를 JSON으로',
    metaDescription: 'PDF 콘텐츠를 JSON 형식으로 추출. PDF 문서에서 구조화된 데이터 가져오기.',
    keywords: ['pdf를 json으로', 'pdf 데이터 추출', 'pdf 파서'],
    description: `<p>PDF 문서에서 콘텐츠를 구조화된 JSON 형식으로 추출합니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '추출할 데이터 선택', description: '추출할 콘텐츠를 선택합니다: 텍스트, 메타데이터, 구조.' },
      { step: 3, title: '추출 및 다운로드', description: '추출을 클릭하여 JSON을 생성하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '데이터 추출', description: 'PDF 문서에서 구조화된 데이터를 추출합니다.', icon: 'database' },
      { title: '문서 분석', description: 'PDF 구조와 콘텐츠를 프로그래밍 방식으로 분석합니다.', icon: 'search' },
      { title: '통합', description: 'JSON을 통해 PDF 콘텐츠를 애플리케이션으로 가져옵니다.', icon: 'plug' },
    ],
    faq: [
      { question: '어떤 데이터가 추출되나요?', answer: '텍스트 콘텐츠, 메타데이터, 페이지 크기, 글꼴, 문서 구조.' },
      { question: 'JSON 형식이 문서화되어 있나요?', answer: '예, JSON 스키마는 일관되고 잘 문서화되어 있습니다.' },
      { question: '스캔된 PDF에서 추출할 수 있나요?', answer: '스캔된 PDF는 먼저 OCR이 필요합니다. 추출 전에 OCR PDF 도구를 사용하세요.' },
    ],
  },
  'ocr-pdf': {
    title: 'OCR PDF (텍스트 인식)',
    metaDescription: '스캔한 PDF를 검색 가능한 문서로 변환. 이미지에서 텍스트를 추출하고 인식합니다.',
    keywords: ['ocr pdf', 'pdf 텍스트 인식', '스캔 pdf 검색', 'pdf 글자 추출'],
    description: `
      <p>OCR PDF 도구는 광학 문자 인식 기술을 사용하여 스캔된 문서나 이미지 기반 PDF에서 텍스트를 추출합니다. 읽기 전용 이미지를 검색과 선택이 가능한 스마트한 문서로 변환하세요.</p>
      <p>한국어, 영어 등 다양한 언어를 지원하며 원본 레이아웃을 최대한 유지하면서 검색 가능한 텍스트 레이어를 추가합니다.</p>
    `,
    howToUse: [
      { step: 1, title: '스캔된 PDF 업로드', description: '텍스트 인식이 필요한 PDF 파일을 선택하거나 드래그 앤 드롭합니다.' },
      { step: 2, title: '언어 설정', description: '문서에 포함된 언어를 선택하여 인식 정확도를 높입니다.' },
      { step: 3, title: 'OCR 실행 및 다운로드', description: '프로세스 버튼을 클릭하여 처리가 완료된 검색 가능 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '문서 디지털화', description: '종이 문서를 스캔한 파일을 디지털 데이터로 관리하고 검색합니다.', icon: 'archive' },
      { title: '텍스트 복사', description: '이미지로 된 문서에서 필요한 텍스트를 긁어내어 편집에 활용합니다.', icon: 'type' },
      { title: '접근성 향상', description: '스크린 리더가 읽을 수 없는 이미지를 텍스트로 바꾸어 접근성을 높입니다.', icon: 'accessibility' },
    ],
    faq: [
      { question: '인식률은 얼마나 되나요?', answer: '원본 스캔 품질에 따라 다르지만, 깨끗한 문서의 경우 98% 이상의 정확도를 보입니다.' },
      { question: '여러 언어가 섞여 있어도 되나요?', answer: '예, 다중 언어 설정을 통해 혼합된 언어를 인식할 수 있습니다.' },
      { question: '이미지 위치가 바뀌나요?', answer: '아니요, 원본 이미지는 그대로 유지되고 그 위에 투명한 텍스트 레이어만 입혀집니다.' },
    ],
  },

  'alternate-merge': {
    title: '교차 병합',
    metaDescription: '두 PDF의 페이지를 번갈아 가며 병합. 앞면과 뒷면 스캔 파일을 하나로 합치기에 최적입니다.',
    keywords: ['pdf 교차 병합', 'pdf 번갈아 합치기', '양면 스캔 병합'],
    description: `<p>두 개의 PDF 파일을 한 페이지씩 번갈아 가며 섞어 병합합니다. 앞면만 스캔한 파일과 뒷면만 스캔한 파일을 합칠 때 유용합니다.</p>`,
    howToUse: [
      { step: 1, title: '두 PDF 업로드', description: '앞면(홀수) PDF와 뒷면(짝수) PDF를 각각 선택합니다.' },
      { step: 2, title: '순서 및 방향 설정', description: '필요에 따라 뒷면 페이지의 순서를 역순으로 설정할 수 있습니다.' },
      { step: 3, title: '병합 실행', description: '두 파일을 섞어서 하나의 완성된 양면 문서로 다운로드합니다.' },
    ],
    useCases: [
      { title: '양면 스캔 수정', description: '단면 스캐너로 앞뒤를 따로 스캔한 결과물을 하나로 합칩니다.', icon: 'copy' },
      { title: '문서 대조', description: '두 문서의 내용을 한 페이지씩 교차로 배치하여 비교합니다.', icon: 'layers' },
    ],
    faq: [
      { question: '파일 크기가 달라도 되나요?', answer: '예, 한쪽 파일의 페이지가 먼저 끝나면 나머지 페이지는 끝에 몰아서 붙습니다.' },
      { question: '역순 스캔도 지원하나요?', answer: '예, "역순 병합" 옵션을 사용하면 거꾸로 스캔된 뒷면도 올바르게 합쳐집니다.' },
    ],
  },

  'add-attachments': {
    title: '첨부파일 추가',
    metaDescription: 'PDF 내부에 다른 파일을 포함시킵니다. 엑셀, 이미지 등 모든 형식을 첨부할 수 있습니다.',
    keywords: ['pdf 첨부파일 추가', 'pdf 파일 임베드', 'pdf 포트폴리오'],
    description: `<p>PDF 문서 안에 엑셀, 코드, 이미지 등 관련 참고 자료를 파일 형태로 직접 임베드합니다. 배포 시 여러 파일을 하나로 묶는 효과가 있습니다.</p>`,
    howToUse: [
      { step: 1, title: '메인 PDF 업로드', description: '파일을 담을 베이스가 되는 PDF를 선택합니다.' },
      { step: 2, title: '첨부할 파일 선택', description: '내부에 포함시킬 파일들을 추가합니다.' },
      { step: 3, title: '저장 및 다운로드', description: '첨부파일이 포함된 최종 PDF를 생성합니다.' },
    ],
    useCases: [
      { title: '프로젝트 제안서', description: '제안서 PDF 안에 상세 수치 엑셀 파일을 첨부하여 보냅니다.', icon: 'package' },
      { title: '증빙 서류 제출', description: '메인 문서와 함께 관련 서류들을 하나의 PDF 안에 모아 제출합니다.', icon: 'file-text' },
    ],
    faq: [
      { question: '어떤 파일 형식이 가능한가요?', answer: '형식에 제한 없이 모든 종류의 파일을 첨부할 수 있습니다.' },
      { question: '받는 사람이 파일을 볼 수 있나요?', answer: '예, 표준 PDF 뷰어의 첨부파일 탭에서 확인 및 저장이 가능합니다.' },
    ],
  },

  // ==================== SECURE & PROTECT ====================
  'encrypt-pdf': {
    title: 'PDF 암호 설정',
    metaDescription: 'PDF 파일에 비밀번호를 설정하여 문서를 보호합니다. 열기 제한 및 권한 설정을 제어하세요.',
    keywords: ['pdf 암호 설정', 'pdf 비밀번호 잠금', 'pdf 보안 설정'],
    description: `<p>강력한 암호화 알고리즘으로 PDF를 보호합니다. 문서를 열 때 필요한 비밀번호와 인쇄/복사 제한을 위한 마스터 비밀번호를 설정할 수 있습니다.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '보호할 파일을 선택합니다.' },
      { step: 2, title: '비밀번호 입력', description: '열기 암호 또는 권한 암호를 입력합니다.' },
      { step: 3, title: '암호화 실행', description: '보안이 적용된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '민감한 자료 공유', description: '급여 명세서나 계약서 등 개인정보가 포함된 파일을 안전하게 전달합니다.', icon: 'lock' },
      { title: '콘텐츠 도용 방지', description: '복사나 인쇄 기능을 비활성화하여 내용을 보호합니다.', icon: 'key' },
    ],
    faq: [
      { question: '얼마나 안전한가요?', answer: 'AES 256비트 암호화 방식을 사용하여 매우 높은 수준의 보안을 제공합니다.' },
      { question: '비밀번호를 잊어버리면 어떻게 하나요?', answer: '보안을 위해 암호화된 비밀번호는 본인 외에는 알 수 없으니 반드시 기억해 두시기 바랍니다.' },
    ],
  },

  'decrypt-pdf': {
    title: 'PDF 암호 해제',
    metaDescription: '암호로 보호된 PDF의 비밀번호를 제거하여 자유롭게 열람 및 편집할 수 있도록 합니다.',
    keywords: ['pdf 암호 해제', 'pdf 비밀번호 제거', 'pdf 잠금 풀기'],
    description: `<p>매번 입력해야 하는 번거로운 PDF 비밀번호를 제거합니다. 비밀번호를 알고 있는 경우 이를 완전히 삭제하여 일반 PDF로 만듭니다.</p>`,
    howToUse: [
      { step: 1, title: '암호화된 PDF 업로드', description: '잠금을 풀고자 하는 파일을 선택합니다.' },
      { step: 2, title: '현재 암호 입력', description: '현재 설정되어 있는 올바른 암호를 입력합니다.' },
      { step: 3, title: '해제 및 다운로드', description: '암호가 제거된 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '반복 열람 문서', description: '자주 열어봐야 하는 업무 매뉴얼의 암호를 풀어 편리하게 사용합니다.', icon: 'unlock' },
      { title: '아카이브 보관', description: '나중에 암호를 잊어버릴 상황을 대비해 보관용 파일의 암호를 미리 해제합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '비밀번호를 몰라도 풀 수 있나요?', answer: '아니요, 무단 사용 방지를 위해 반드시 기존 암호를 알고 있어야 해제가 가능합니다.' },
      { question: '원본 데이터가 손상되나요?', answer: '아니요, 보안 설정만 변경될 뿐 본문 내용은 전혀 바뀌지 않습니다.' },
    ],
  },

  'rotate-custom': {
    title: '사용자 지정 각도 회전',
    metaDescription: 'PDF 페이지를 원하는 각도로 정밀하게 회전합니다. 기울어진 스캔 문서 교정에 적합합니다.',
    keywords: ['pdf 각도 회전', 'pdf 기울기 보정', 'pdf 수평 맞추기'],
    description: `<p>표준 90도 회전뿐만 아니라 1도 단위의 미세한 회전도 가능합니다. 잘못 들어간 스캔 문서의 수평을 맞추거나 도면의 방향을 정밀하게 조정할 때 사용하세요.</p>`,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '회전이 필요한 페이지가 포함된 파일을 선택합니다.' },
      { step: 2, title: '각도 입력', description: '회전시키고 싶은 정확한 수치(도)를 입력합니다.' },
      { step: 3, title: '미리보기 및 적용', description: '수평이 맞는지 확인한 후 회전된 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '스캔 문서 보정', description: '비스듬하게 스캔된 종이 문서를 똑바로 세웁니다.', icon: 'scan' },
      { title: '설계도 정밀 조정', description: '도면이나 차트의 방향을 정확한 각도로 맞춥니다.', icon: 'ruler' },
    ],
    faq: [
      { question: '소수점 각도도 되나요?', answer: '현재 정수 단위 회전을 지원하며, 더 정밀한 기능은 업데이트 예정입니다.' },
      { question: '이미지가 잘리나요?', answer: '아니요, 회전된 내용이 모두 보일 수 있도록 페이지 크기가 자동으로 조정됩니다.' },
    ],
  },

  'repair-pdf': {
    title: 'PDF 복구',
    metaDescription: '손상된 PDF 파일을 복구합니다. 열리지 않거나 오류가 발생하는 PDF에서 데이터를 추출하세요.',
    keywords: ['pdf 복구', '손상된 pdf 수정', 'pdf 데이터 추출', 'pdf 오류 해결'],
    description: `
      <p>PDF 복구는 손상되거나 파일 구조에 오류가 있는 PDF를 분석하여 복구를 시도합니다. 문서 내의 텍스트, 이미지 및 구조적 요소를 최대한 추출하여 새로운 정상 파일로 재구성합니다.</p>
      <p>갑자기 열리지 않거나 "파일이 손상되었습니다"라는 메시지가 뜨는 상황에서 최후의 수단으로 활용할 수 있습니다.</p>
      <p>모든 복구 시도는 브라우저에서 안전하게 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: '손상된 PDF 업로드', description: '오류가 발생하는 PDF 파일을 선택합니다.' },
      { step: 2, title: '복구 분석', description: '시스템이 파일 구조를 스캔하고 복구 가능한 데이터를 찾습니다.' },
      { step: 3, title: '복구된 PDF 저장', description: '성공적으로 추출된 내용으로 생성된 새 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '파일 전송 오류 수정', description: '다운로드나 전송 중 일부가 누락되어 깨진 파일을 복구합니다.', icon: 'alert-triangle' },
      { title: '오래된 문서 복원', description: '구조적 결함이 있는 오래된 PDF 파일의 내용을 살려냅니다.', icon: 'refresh-cw' },
      { title: '콘텐츠 추출', description: '완벽한 복구는 어려워도 내부의 중요한 텍스트와 이미지를 건져냅니다.', icon: 'download' },
    ],
    faq: [
      { question: '100% 복구되나요?', answer: '파일의 손상 정도에 따라 다릅니다. 구조가 심하게 파괴된 경우 일부 데이터만 건지거나 복구가 불가능할 수도 있습니다.' },
      { question: '암호화된 파일도 되나요?', answer: '비밀번호를 모르는 암호화된 파일은 복구가 어렵습니다. 먼저 암호 해제를 시도하세요.' },
      { question: '어떤 형식으로 복구되나요?', answer: '최대한 원본 PDF 구조를 유지한 새로운 PDF 파일로 생성됩니다.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF를 Word로 변환',
    metaDescription: 'PDF 문서를 편집 가능한 Word(DOCX) 파일로 변환합니다. 레이아웃과 서식을 완벽하게 유지하세요.',
    keywords: ['pdf word 변환', 'pdf 워드 변환', 'pdf docx 변환', 'pdf 편집 가능하게'],
    description: `
      <p>PDF 문서를 완벽하게 편집 가능한 Microsoft Word(DOCX) 파일로 변환합니다. 최신 알고리즘을 통해 텍스트 흐름, 글꼴, 표 및 이미지를 원본과 거의 동일하게 재현합니다.</p>
      <p>번거로운 타이핑 없이 PDF 내용을 Word에서 직접 수정하세요. 계약서 수정이나 보고서 재작성에 최적입니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'Word로 변환하고 싶은 파일을 선택합니다.' },
      { step: 2, title: '변환 시작', description: '문서 구조 분석이 완료될 때까지 잠시 기다립니다.' },
      { step: 3, title: 'Word 파일 다운로드', description: '생성된 DOCX 파일을 열어 자유롭게 편집합니다.' },
    ],
    useCases: [
      { title: '계약서 문구 수정', description: 'PDF로 된 계약 초안을 Word로 바꿔 조항을 수정하고 협의합니다.', icon: 'file-text' },
      { title: '이력서 업데이트', description: '오래된 PDF 이력서의 내용을 최신 경력으로 손쉽게 업데이트합니다.', icon: 'user' },
      { title: '콘텐츠 재활용', description: '보고서의 표나 텍스트를 복사해 새로운 문서를 작성할 때 활용합니다.', icon: 'copy' },
    ],
    faq: [
      { question: '서식이 깨지지는 않나요?', answer: '표준적인 문서는 레이아웃이 잘 유지됩니다. 다만, 디자인 요소가 너무 복잡하면 미세한 조정이 필요할 수 있습니다.' },
      { question: '스캔한 PDF도 되나요?', answer: '스캔본은 이미지로 인식되므로, 텍스트 편집을 원하시면 당사의 OCR 도구를 먼저 사용하시길 권장합니다.' },
      { question: '구글 문서와 호환되나요?', answer: '네, 표준 DOCX 형식이므로 구글 문서나 리브레 오피스에서도 잘 열립니다.' },
    ],
  },

  'grid-combine': {
    title: '그리드 결합 PDF',
    metaDescription: '여러 PDF 파일을 유연한 그리드 레이아웃으로 단일 페이지에 결합합니다. 2개, 4개, 6개, 9개 이상의 PDF를 경계선 및 간격과 함께 한 페이지에 배치하세요.',
    keywords: ['그리드 결합', 'PDF 그리드 결합', 'PDF 콜라주', '여러 PDF 한 페이지에', 'PDF N-up', 'PDF 그리드'],
    description: `
      <p>그리드 결합 도구는 여러 개의 개별 PDF 파일을 단일 페이지로 결합하는 독특한 방법을 제공합니다. 페이지를 단순히 추가하는 표준 'PDF 병합' 도구나 단일 문서에서 페이지를 재배치하는 'N-Up' 도구와 달리, 그리드 결합은 여러 입력 파일을 받아 사용자 정의 가능한 그리드 레이아웃에 나란히 배치합니다.</p>
      <p>2x1, 2x2, 3x3 등 다양한 그리드 구성을 선택할 수 있습니다. 이는 여러 문서를 비교하거나, 다른 소스의 유인물을 만들거나, 여러 파일의 컴팩트 버전을 인쇄하는 데 이상적입니다.</p>
      <p>용지 크기, 방향, 여백, 간격, 테두리를 제어하여 출력을 사용자 정의하세요. 모든 처리는 브라우저 내에서 로컬로 수행되므로 개인 정보가 최대한 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 파일 업로드', description: '결합할 2개 이상의 PDF 파일을 업로드합니다. 원하는 순서로 재정렬할 수 있습니다.' },
      { step: 2, title: '그리드 레이아웃 선택', description: '원하는 그리드 레이아웃을 선택합니다(예: 2x2는 페이지당 4개 파일, 3x3은 페이지당 9개 파일).' },
      { step: 3, title: '모양 사용자 정의', description: '용지 크기(A4, Letter), 방향, 항목 간 간격, 테두리 설정을 조정합니다.' },
      { step: 4, title: '결합 및 다운로드', description: "'PDF 병합'을 클릭하여 새 그리드 레이아웃 문서를 생성하고 결과를 다운로드합니다." },
    ],
    useCases: [
      { title: '시각적 비교', description: '디자인이나 문서의 다른 버전을 한 페이지에 나란히 배치하여 쉽게 비교합니다.', icon: 'layout-grid' },
      { title: '유인물 인쇄', description: '여러 짧은 문서나 슬라이드를 한 장의 종이에 모아 인쇄 비용을 절약합니다.', icon: 'printer' },
      { title: '포트폴리오 생성', description: '여러 프로젝트 파일을 정돈된 그리드 개요로 표시합니다.', icon: 'image' },
    ],
    faq: [
      { question: 'N-Up과의 차이점은 무엇인가요?', answer: 'N-Up은 하나의 PDF에서 페이지를 가져와 시트에 배치합니다. 그리드 결합은 여러 개의 다른 PDF 파일을 가져와 배치합니다.' },
      { question: '몇 개의 파일을 결합할 수 있나요?', answer: '브라우저 메모리에 따라 다르지만 최대 100개까지 가능하며, 레이아웃에 따라 페이지당 수용 가능한 수가 다릅니다(예: 4x4는 16개).' },
      { question: '테두리를 추가할 수 있나요?', answer: '네, 각 PDF 파일 주위에 테두리를 추가하고 테두리 색상을 사용자 지정할 수 있습니다.' },
    ],
  },

  'email-to-pdf': {
    title: '이메일을 PDF로',
    metaDescription: '이메일 파일(.eml, .msg)을 PDF 문서로 변환합니다. 서식, 인라인 이미지, 클릭 가능한 링크 및 첨부 파일을 보존합니다.',
    keywords: ['이메일 pdf 변환', 'eml pdf', 'msg pdf', '이메일 변환', '아웃룩 pdf'],
    description: `
      <p>이메일을 PDF로는 이메일 파일(.eml 및 .msg 형식)을 잘 포맷된 PDF 문서로 변환합니다. 이 도구는 이메일 헤더 정보, 본문 내용, CID 교체를 통한 인라인 이미지, 클릭 가능한 링크를 보존하고 첨부 파일을 PDF에 직접 포함합니다.</p>
      <p>페이지 크기(A4, Letter, Legal), 시간대 지원이 포함된 날짜 형식, CC/BCC 필드 및 첨부 파일 정보 포함 여부 등 출력 옵션을 사용자 지정할 수 있습니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 수행되므로 이메일의 개인 정보와 보안이 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: '이메일 파일 업로드', description: '.eml 또는 .msg 이메일 파일을 업로드합니다.' },
      { step: 2, title: '옵션 구성', description: '페이지 크기, 날짜 형식, 시간대를 설정하고 포함할 필드를 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '첨부 파일이 포함된 PDF로 변환하고 결과를 다운로드합니다.' },
    ],
    useCases: [
      { title: '법적 기록', description: '법적 문서를 위해 첨부 파일이 포함된 PDF로 중요한 이메일을 보관합니다.', icon: 'scale' },
      { title: '비즈니스 아카이브', description: '장기 보관을 위해 비즈니스 서신을 PDF로 변환합니다.', icon: 'briefcase' },
      { title: '증거 보존', description: '인라인 이미지와 첨부 파일이 포함된 이메일 증거를 편집 불가능한 PDF 형식으로 저장합니다.', icon: 'shield' },
    ],
    faq: [
      { question: '어떤 이메일 형식이 지원되나요?', answer: '.eml(RFC 822) 및 .msg(Microsoft Outlook) 파일이 모두 완전히 지원됩니다.' },
      { question: '첨부 파일이 포함되나요?', answer: '네! 첨부 파일은 PDF 파일에 직접 포함됩니다. 호환되는 PDF 리더를 사용하여 PDF에서 추출할 수 있습니다.' },
      { question: '인라인 이미지가 표시되나요?', answer: '네, CID(Content-ID)를 통해 참조되는 인라인 이미지는 자동으로 base64 데이터 URI로 변환되어 PDF에 표시됩니다.' },
      { question: '링크를 클릭할 수 있나요?', answer: '네, 모든 HTML 링크(<a> 태그)와 일반 텍스트 이메일의 URL은 PDF에서 클릭 가능한 링크로 변환됩니다.' },
      { question: '이메일 서식이 보존되나요?', answer: '네, HTML 이메일은 스타일, 이미지 및 링크를 포함하여 가능한 한 서식을 유지합니다.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU를 PDF로 변환',
    metaDescription: 'DJVU 문서 파일을 PDF로 변환합니다. 스캔된 문서와 책을 위한 고품질 렌더링.',
    keywords: ['djvu pdf 변환', 'djvu 변환', 'djvu 변환기', 'djvu pdf', 'djv pdf'],
    description: `
      <p>DJVU를 PDF로 변환은 DjVu 문서 파일을 고품질 PDF 문서로 변환합니다. DjVu는 주로 스캔된 문서, 특히 텍스트, 선화 및 사진의 조합을 포함하는 문서를 저장하도록 설계된 컴퓨터 파일 형식입니다.</p>
      <p>이 도구는 선택한 DPI(인치당 도트 수)로 DJVU 파일의 각 페이지를 렌더링하고 검색 가능한 PDF 문서로 결합합니다. 스캔된 책, 기술 매뉴얼 및 아카이브 문서를 변환하는 데 완벽합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 수행되므로 문서의 개인 정보와 보안이 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'DJVU 파일 업로드', description: '.djvu 또는 .djv 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '옵션 구성', description: '출력 DPI(72, 150 또는 300) 및 PDF의 이미지 품질을 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: 'PDF로 변환을 클릭하고 변환된 문서를 다운로드합니다.' },
    ],
    useCases: [
      { title: '아카이브 문서', description: 'DJVU 아카이브를 범용 PDF 형식으로 변환합니다.', icon: 'archive' },
      { title: '스캔된 책 공유', description: '더 넓은 호환성을 위해 PDF 형식으로 스캔된 책을 공유합니다.', icon: 'share-2' },
      { title: '문서 인쇄', description: '인쇄를 위해 DJVU를 고품질 PDF로 변환합니다.', icon: 'printer' },
    ],
    faq: [
      { question: 'DJVU 형식이란 무엇인가요?', answer: 'DjVu는 스캔된 문서, 특히 텍스트, 그림 및 이미지가 있는 문서를 저장하도록 설계된 파일 형식입니다. 스캔된 콘텐츠에 대해 PDF보다 더 나은 압축을 제공합니다.' },
      { question: '어떤 DPI를 선택해야 하나요?', answer: '72 DPI는 웹 보기에 적합하고, 150 DPI는 표준 문서에, 300 DPI는 고품질 인쇄에 적합합니다.' },
      { question: '텍스트가 검색 가능한가요?', answer: '텍스트는 이미지로 렌더링됩니다. 검색 가능한 텍스트가 필요한 경우 변환 후 OCR PDF 도구를 사용하는 것을 고려하세요.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2를 PDF로 변환',
    metaDescription: 'FictionBook (FB2) 전자책을 PDF로 변환합니다. 여러 파일의 고품질 렌더링을 지원합니다.',
    keywords: ['fb2 pdf 변환', 'fb2 변환', 'fictionbook pdf', 'fb2 변환기', 'fb2.zip pdf'],
    description: `
      <p>FB2를 PDF로 변환은 FictionBook (FB2) 전자책 파일을 고품질 PDF 문서로 변환합니다. FB2는 러시아와 동유럽에서 널리 사용되는 인기 있는 XML 기반 전자책 형식입니다.</p>
      <p>이 도구는 .fb2 및 .fb2.zip 파일을 모두 지원하며 한 번에 여러 파일을 처리할 수 있습니다. 전자책의 텍스트 서식, 이미지 및 장 구조를 보존합니다.</p>
      <p>모든 변환은 고급 렌더링 기술을 사용하여 브라우저에서 로컬로 수행되므로 책의 개인 정보가 보장되고 변환이 빠릅니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'FB2 파일 업로드', description: '하나 이상의 .fb2 또는 .fb2.zip 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '품질 선택', description: '출력 품질 선택: 낮음(72 DPI), 중간(150 DPI) 또는 높음(300 DPI).' },
      { step: 3, title: '변환 및 다운로드', description: 'PDF로 변환을 클릭하고 변환된 문서를 다운로드합니다.' },
    ],
    useCases: [
      { title: '전자책 인쇄', description: '물리적 인쇄를 위해 FB2 전자책을 PDF로 변환합니다.', icon: 'printer' },
      { title: '일괄 변환', description: '한 번에 여러 FB2 파일을 PDF로 변환합니다.', icon: 'layers' },
      { title: '범용 형식', description: '모든 장치에서 작동하는 PDF 형식으로 전자책을 공유합니다.', icon: 'share-2' },
    ],
    faq: [
      { question: '한 번에 여러 FB2 파일을 변환할 수 있나요?', answer: '네! 이 도구는 최대 20개의 FB2 파일을 동시에 일괄 변환하는 것을 지원합니다.' },
      { question: '.fb2.zip 파일이 지원되나요?', answer: '네, 도구는 .fb2.zip 아카이브에서 FB2 파일을 자동으로 추출하고 변환합니다.' },
      { question: '서식이 보존되나요?', answer: '네! 도구는 네이티브 FB2 렌더링을 사용하여 높은 충실도로 텍스트 서식, 이미지 및 장 구조를 보존합니다.' },
    ],
  },

  'deskew-pdf': {
    title: 'PDF 기울기 보정',
    metaDescription: '스캔되거나 기울어진 PDF 페이지를 자동으로 똑바로 만듭니다. 정밀한 각도 감지로 기울어진 문서를 수정합니다.',
    keywords: ['pdf 기울기 보정', 'pdf 똑바로', '기울어진 스캔 수정', '자동 pdf 회전', 'pdf 각도 보정'],
    description: `
      <p>PDF 기울기 보정은 고급 투영 프로파일 분산 분석을 사용하여 PDF 문서의 기울어진 또는 왜곡된 페이지를 자동으로 감지하고 보정합니다. 스캐너에 일정한 각도로 공급된 스캔 문서에 필수적입니다.</p>
      <p>도구는 다른 각도에서 텍스트와 콘텐츠 정렬을 분석하여 최적의 회전을 찾은 다음 보정을 적용합니다. 최적의 결과를 위해 감도 임계값(1-30)과 DPI 설정(72-300)을 조정할 수 있습니다.</p>
      <p>모든 처리는 WebAssembly 기술을 사용하여 브라우저에서 로컬로 수행되므로 문서의 개인 정보와 보안이 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '스캔된 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '설정 구성', description: '필요한 경우 더 나은 감지를 위해 임계값 감도와 DPI를 조정합니다.' },
      { step: 3, title: '처리 및 다운로드', description: '보정을 클릭하여 페이지를 똑바로 만들고 보정된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '스캔 문서', description: '문서 공급 장치에서 일정한 각도로 스캔된 페이지를 수정합니다.', icon: 'scan' },
      { title: '모바일 스캔', description: '스마트폰으로 촬영한 기울어진 문서 사진을 보정합니다.', icon: 'smartphone' },
      { title: '아카이브 복원', description: '가독성을 향상시키기 위해 오래된 스캔 아카이브를 똑바로 만듭니다.', icon: 'archive' },
    ],
    faq: [
      { question: '각도 감지는 얼마나 정확한가요?', answer: '도구는 투영 프로파일 분산 분석을 사용하여 ±10도까지의 기울기 각도를 높은 정확도로 감지합니다. 0.3도 미만의 각도를 가진 페이지는 자동으로 건너뜁니다.' },
      { question: '텍스트 품질이 영향을 받나요?', answer: '90도의 배수 회전의 경우 품질 손실이 발생하지 않습니다. 다른 각도의 경우 도구는 가장 가까운 도수로 반올림하고 좋은 품질을 유지합니다.' },
      { question: '특정 페이지만 보정할 수 있나요?', answer: '도구는 모든 페이지를 분석하지만 감지된 기울기가 감도 임계값을 초과하는 페이지만 보정합니다. 최소 기울기를 가진 페이지는 변경되지 않습니다.' },
      { question: '감도 임계값이란 무엇인가요?', answer: '값 1-10은 명백한 기울기만 보정하고, 11-20은 중간 기울기를 감지하며, 21-30은 미묘한 각도를 포착합니다. 기본값은 균형 잡힌 감지를 위해 10입니다.' },
      { question: '처리에는 얼마나 걸리나요?', answer: '처리 시간은 파일 크기와 DPI에 따라 다릅니다. 150 DPI(기본값)는 속도와 정확도 사이의 좋은 균형을 제공합니다. 더 높은 DPI는 더 정확하지만 더 느립니다.' },
    ],

  },

  'psd-to-pdf': {
    title: 'PSD를 PDF로',
    metaDescription: 'Adobe Photoshop(PSD) 파일을 PDF 형식으로 변환합니다. 여러 파일을 지원하며 이미지 품질을 보존합니다.',
    keywords: ['psd를 pdf로', 'psd 변환', '포토샵을 pdf로', 'psd 변환기', '어도비 psd를 pdf로'],
    description: `
      <p>PSD를 PDF로는 Adobe Photoshop(PSD) 파일을 PDF 문서로 변환합니다. 이 도구를 사용하면 Photoshop이 설치되어 있지 않아도 PSD 디자인을 보고 공유할 수 있습니다.</p>
      <p>여러 PSD 파일을 한 번에 변환하여 하나의 PDF 문서로 결합할 수 있습니다. 도구는 각 PSD 파일을 처리하여 표시되는 레이어를 고품질 PDF 페이지로 렌더링합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 디자인이 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PSD 파일 업로드', description: 'PSD 또는 PSB 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '순서 정렬', description: '파일 썸네일을 드래그 앤 드롭하여 원하는 순서로 정렬합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하여 PSD를 렌더링하고 PDF 문서를 다운로드합니다.' },
    ],
    useCases: [
      { title: '디자인 공유', description: 'Photoshop이 없는 클라이언트나 동료와 Photoshop 디자인을 공유합니다.', icon: 'share-2' },
      { title: '포트폴리오 생성', description: '디자인 작업을 전문적인 PDF 포트폴리오로 컴파일합니다.', icon: 'layout' },
      { title: '인쇄 준비', description: '인쇄 목적으로 디자인을 PDF로 변환합니다.', icon: 'printer' },
    ],
    faq: [
      { question: 'Photoshop이 설치되어 있어야 하나요?', answer: '아니요, 이 도구는 Adobe Photoshop 없이 브라우저에서 완전히 작동합니다.' },
      { question: '레이어가 보존되나요?', answer: '도구는 PSD의 표시된 상태(복합 이미지)를 렌더링합니다. 개별 레이어는 PDF에서 평면화됩니다.' },
      { question: '최대 파일 크기는 얼마인가요?', answer: '각 최대 100MB의 파일을 업로드할 수 있습니다. 큰 PSD 파일은 처리하는 데 시간이 걸릴 수 있습니다.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word를 PDF로',
    metaDescription: 'Word 문서(DOCX)를 PDF로 변환합니다. 변환된 문서에서 서식과 레이아웃을 그대로 유지합니다.',
    keywords: ['word를 pdf로', 'docx를 pdf로', 'word 변환', 'word 변환기', '마이크로소프트 word를 pdf로'],
    description: `
      <p>Word를 PDF로는 Microsoft Word 문서를 PDF 형식으로 변환하면서 원본 서식, 레이아웃 및 콘텐츠 구조를 보존합니다.</p>
      <p>DOCX 파일을 업로드하면 공유, 인쇄 또는 아카이빙에 적합한 고품질 PDF 출력을 얻을 수 있습니다. 변환 시 텍스트 서식, 단락 스타일 및 기본 문서 구조가 유지됩니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 문서가 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'Word 문서 업로드', description: 'DOCX 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 문서를 로드하고 변환을 준비합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '문서 공유', description: '범용적인 공유 및 보기를 위해 Word 문서를 PDF로 변환합니다.', icon: 'share-2' },
      { title: '인쇄 준비', description: 'Word 문서에서 인쇄 준비가 된 PDF를 만듭니다.', icon: 'printer' },
      { title: '문서 아카이브', description: '장기 보관을 위해 Word 문서를 안정적인 PDF 형식으로 아카이빙합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '.doc 형식이 지원되나요?', answer: '현재 .docx 형식만 지원됩니다. .doc 파일은 Microsoft Word나 LibreOffice를 사용하여 먼저 .docx로 변환해 주세요.' },
      { question: '이미지가 보존되나요?', answer: '텍스트 콘텐츠와 기본 서식은 보존됩니다. 이미지가 많은 복잡한 레이아웃은 렌더링이 단순화될 수 있습니다.' },
      { question: '변환이 안전한가요?', answer: '예, 모든 처리는 브라우저에서 이루어집니다. 문서는 기기를 떠나지 않습니다.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel을 PDF로',
    metaDescription: 'Excel 스프레드시트(XLSX)를 PDF로 변환합니다. 변환된 문서에서 표와 데이터를 그대로 유지합니다.',
    keywords: ['excel을 pdf로', 'xlsx를 pdf로', 'excel 변환', '스프레드시트를 pdf로', '마이크로소프트 excel을 pdf로'],
    description: `
      <p>Excel을 PDF로는 Microsoft Excel 스프레드시트를 PDF 형식으로 변환하면서 표 구조와 데이터 구성을 보존합니다.</p>
      <p>XLSX 파일을 업로드하면 적절하게 서식이 지정된 표와 함께 깨끗한 PDF 출력을 얻을 수 있습니다. 통합 문서의 각 시트는 PDF의 별도 섹션이 됩니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 데이터가 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'Excel 파일 업로드', description: 'XLSX 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 스프레드시트를 로드하고 모든 시트를 변환합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '보고서 공유', description: '이해관계자에게 배포하기 위해 Excel 보고서를 PDF로 변환합니다.', icon: 'file-text' },
      { title: '데이터 아카이빙', description: '스프레드시트 데이터를 안정적인 PDF 형식으로 아카이빙합니다.', icon: 'archive' },
      { title: '인쇄 준비', description: 'Excel 워크시트에서 인쇄 준비가 된 PDF를 만듭니다.', icon: 'printer' },
    ],
    faq: [
      { question: '여러 시트가 지원되나요?', answer: '예, 통합 문서의 모든 시트가 변환되어 PDF에 포함됩니다.' },
      { question: '.xls 형식이 지원되나요?', answer: '현재 .docx 형식만 지원됩니다. .xls 파일은 먼저 .xlsx로 저장해 주세요.' },
      { question: '수식이 보존되나요?', answer: 'PDF는 계산된 값을 보여줍니다. 수식은 PDF 형식에서 실행 가능하지 않습니다.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint를 PDF로',
    metaDescription: 'PowerPoint 프레젠테이션(PPTX)을 PDF로 변환합니다. 쉬운 공유를 위해 슬라이드와 콘텐츠를 보존합니다.',
    keywords: ['powerpoint를 pdf로', 'pptx를 pdf로', 'pptx 변환', '프레젠테이션을 pdf로', '슬라이드를 pdf로'],
    description: `
      <p>PowerPoint를 PDF로는 Microsoft PowerPoint 프레젠테이션을 PDF 형식으로 변환하여, 슬라이드 콘텐츠와 텍스트를 보존하여 쉽게 공유하고 볼 수 있게 합니다.</p>
      <p>각 슬라이드는 PDF의 한 페이지가 되어 프레젠테이션 흐름을 유지합니다. PowerPoint가 설치되지 않은 사람들과 프레젠테이션을 공유할 때 적합합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 프레젠테이션이 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PowerPoint 파일 업로드', description: 'PPTX 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 슬라이드 콘텐츠를 추출하고 PDF를 생성합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '프레젠테이션 공유', description: 'PowerPoint 없이도 누구나 프레젠테이션을 볼 수 있게 공유합니다.', icon: 'share-2' },
      { title: '유인물 생성', description: '프레젠테이션 슬라이드에서 PDF 유인물을 만듭니다.', icon: 'file-text' },
      { title: '프레젠테이션 아카이브', description: '프레젠테이션을 안정적인 PDF 형식으로 아카이빙합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '애니메이션이 보존되나요?', answer: 'PDF는 정적 형식이므로 애니메이션과 전환 효과는 보존되지 않습니다. 각 슬라이드는 정적 페이지가 됩니다.' },
      { question: '.ppt 형식이 지원되나요?', answer: '현재 .pptx 형식만 지원됩니다. .ppt 파일은 먼저 .pptx로 변환해 주세요.' },
      { question: '발표자 노트가 포함되나요?', answer: '현재 발표자 노트는 PDF 출력에 포함되지 않습니다.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS를 PDF로',
    metaDescription: 'XPS 문서를 PDF 형식으로 변환합니다. 레이아웃과 그래픽을 보존하는 고정밀 변환.',
    keywords: ['xps를 pdf로', 'xps 변환', 'xps 변환기', '마이크로소프트 xps를 pdf로', 'oxps를 pdf로'],
    description: `
      <p>XPS를 PDF로는 Microsoft XPS(XML Paper Specification) 문서를 PDF 형식으로 변환하면서 원본 레이아웃, 텍스트 및 벡터 그래픽을 보존합니다.</p>
      <p>XPS는 PDF와 유사한 고정 문서 형식입니다. 이 도구는 기본 XPS 파싱을 사용하여 고정밀 변환을 제공하며, 문서의 정확한 재현을 보장합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 문서가 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'XPS 파일 업로드', description: 'XPS 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 XPS 문서를 파싱하고 변환합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '형식 변환', description: 'XPS 문서를 더 널리 지원되는 PDF 형식으로 변환합니다.', icon: 'file' },
      { title: '문서 공유', description: 'XPS 뷰어가 없는 사용자와 XPS 문서를 공유합니다.', icon: 'share-2' },
      { title: '아카이브 마이그레이션', description: '더 나은 호환성을 위해 XPS 아카이브를 PDF 형식으로 마이그레이션합니다.', icon: 'archive' },
    ],
    faq: [
      { question: 'XPS 형식이란 무엇인가요?', answer: 'XPS(XML Paper Specification)는 Microsoft의 고정 문서 형식으로, PDF와 유사합니다. 주로 Windows 인쇄용으로 사용됩니다.' },
      { question: '변환 시 품질 손실이 없나요?', answer: '예, 변환은 텍스트, 그래픽 및 레이아웃을 고밀도로 보존합니다.' },
      { question: '다중 페이지 XPS 파일이 지원되나요?', answer: '예, XPS 문서의 모든 페이지가 PDF로 변환됩니다.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF를 PDF로',
    metaDescription: 'RTF(Rich Text Format) 파일을 PDF로 변환합니다. 문서의 텍스트 서식을 보존합니다.',
    keywords: ['rtf를 pdf로', 'rtf 변환', '리치 텍스트를 pdf로', 'rtf 변환기'],
    description: `
      <p>RTF를 PDF로는 Rich Text Format 파일을 PDF 문서로 변환합니다. RTF는 폰트, 색상 및 스타일과 같은 기본 서식을 포함하는 널리 지원되는 텍스트 형식입니다.</p>
      <p>RTF 파일을 업로드하면 텍스트 콘텐츠와 기본 서식을 보존하면서 깨끗한 PDF 출력을 얻을 수 있습니다. 레거시 문서를 현대적인 PDF 형식으로 변환하는 데 적합합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 문서가 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'RTF 파일 업로드', description: 'RTF 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 RTF 콘텐츠를 파싱하고 변환합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '레거시 변환', description: '오래된 RTF 문서를 현대적인 PDF 형식으로 변환합니다.', icon: 'history' },
      { title: '문서 공유', description: '범용적으로 볼 수 있는 PDF 형식으로 RTF 문서를 공유합니다.', icon: 'share-2' },
      { title: '문서 아카이브', description: '장기 보관을 위해 RTF 파일을 안정적인 PDF 형식으로 아카이빙합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '어떤 서식이 보존되나요?', answer: '폰트, 단락 및 스타일을 포함한 기본 텍스트 서식이 변환됩니다. 복잡한 RTF 기능은 단순화될 수 있습니다.' },
      { question: '여러 RTF 파일을 변환할 수 있나요?', answer: '현재는 한 번에 하나의 파일만 변환됩니다. 여러 변환된 파일을 결합하려면 PDF 병합을 사용하세요.' },
      { question: '포함된 이미지가 지원되나요?', answer: '텍스트 콘텐츠가 주요 초점입니다. 포함된 개체는 렌더링되지 않을 수 있습니다.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB를 PDF로',
    metaDescription: 'EPUB 전자책을 PDF로 변환합니다. 서식, 이미지 및 장 구조를 보존합니다.',
    keywords: ['epub를 pdf로', 'epub 변환', '전자책을 pdf로', 'epub 변환기'],
    description: `
      <p>EPUB를 PDF로는 전자책 파일을 고품질 PDF 문서로 변환합니다. EPUB는 대부분의 전자책 리더와 디지털 도서관에서 사용되는 가장 인기 있는 전자책 형식입니다.</p>
      <p>이 도구는 전자책의 텍스트 서식, 이미지 및 장 구조를 보존합니다. 전자책을 범용적으로 볼 수 있는 형식으로 인쇄, 아카이빙 또는 공유하는 데 적합합니다.</p>
      <p>모든 변환은 고급 렌더링 기술을 사용하여 브라우저에서 로컬로 처리되므로 책의 개인 정보가 보호되고 변환이 빠릅니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'EPUB 파일 업로드', description: 'EPUB 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '변환 대기', description: '도구가 전자책의 모든 페이지를 렌더링하고 변환합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '전자책 인쇄', description: '실제 인쇄를 위해 전자책을 PDF로 변환합니다.', icon: 'printer' },
      { title: '도서 아카이브', description: '전자책을 장기적으로 안정적인 PDF 형식으로 저장합니다.', icon: 'archive' },
      { title: '문서 공유', description: '전자책 리더가 없는 사람과도 전자책을 공유합니다.', icon: 'share-2' },
    ],
    faq: [
      { question: '서식이 보존되나요?', answer: '예! 이 도구는 기본 EPUB 렌더링을 사용하여 텍스트 서식, 이미지 및 레이아웃을 고정밀로 보존합니다.' },
      { question: 'DRM 보호된 EPUB가 지원되나요?', answer: '아니요, DRM 보호된 전자책은 변환할 수 없습니다. DRM이 없는 EPUB 파일만 지원됩니다.' },
      { question: '페이지 크기는 어떻게 결정되나요?', answer: 'EPUB 콘텐츠는 최적의 가독성을 위해 표준 A4 페이지 크기로 렌더링됩니다.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI를 PDF로',
    metaDescription: 'MOBI 전자책을 PDF로 변환합니다. 고품질 렌더링으로 Kindle 형식을 지원합니다.',
    keywords: ['mobi를 pdf로', 'mobi 변환', '킨들을 pdf로', 'azw를 pdf로', 'mobi 변환기'],
    description: `
      <p>MOBI를 PDF로는 Amazon Kindle 전자책 파일을 고품질 PDF 문서로 변환합니다. MOBI 형식(AZW 및 AZW3 포함)은 Kindle 기기에서 사용되는 Amazon 전용 전자책 형식입니다.</p>
      <p>이 도구는 Kindle 책의 텍스트 서식, 이미지 및 구조를 보존합니다. Kindle 책을 인쇄, 아카이빙 또는 MOBI 형식을 지원하지 않는 기기에서 읽을 때 적합합니다.</p>
      <p>모든 변환은 고급 렌더링 기술을 사용하여 브라우저에서 로컬로 처리되므로 책의 개인 정보가 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'MOBI 파일 업로드', description: 'MOBI, AZW 또는 AZW3 파일을 드래그 앤 드롭하거나 클릭하여 장치에서 선택합니다.' },
      { step: 2, title: '변환 대기', description: '도구가 전자책의 모든 페이지를 렌더링하고 변환합니다.' },
      { step: 3, title: 'PDF 다운로드', description: '다운로드를 클릭하여 변환된 PDF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '킨들 책 인쇄', description: '실제 인쇄를 위해 Kindle 전자책을 PDF로 변환합니다.', icon: 'printer' },
      { title: '도서 아카이브', description: 'Kindle 책을 범용적인 PDF 형식으로 저상합니다.', icon: 'archive' },
      { title: '교차 기기 읽기', description: 'PDF만 지원하는 기기에서 Kindle 책을 읽습니다.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: '어떤 MOBI 형식이 지원되나요?', answer: '이 도구는 .mobi, .azw 및 .azw3 파일(DRM이 없는 버전)을 지원합니다.' },
      { question: 'DRM 보호된 킨들 책이 지원되나요?', answer: '아니요, DRM 보호된 전자책은 변환할 수 없습니다. DRM이 없는 파일만 지원됩니다.' },
      { question: '서식이 보존되나요?', answer: '예! 도구는 기본 MOBI 렌더링을 사용하여 텍스트, 이미지 및 레이아웃을 보존합니다.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF를 SVG로',
    metaDescription: 'PDF 페이지를 SVG 벡터 그래픽으로 변환합니다. 고품질 편집을 위해 벡터 정밀도를 유지합니다.',
    keywords: ['pdf를 svg로', 'pdf 변환', 'pdf 벡터화', 'pdf를 벡터로'],
    description: `
      <p>PDF를 SVG로는 PDF 문서 페이지를 확장 가능한 벡터 그래픽(SVG)으로 변환합니다. 래스터 이미지와 달리 SVG는 품질 손실 없이 어떤 크기로든 확장할 수 있습니다.</p>
      <p>이 도구는 텍스트를 경로로 유지하고 벡터 모양을 보존하여 Illustrator, Inkscape 또는 디자인 소프트웨어에서 편집하기에 적합하도록 합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 문서가 비공개로 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 파일 업로드', description: 'SVG로 변환하려는 PDF 파일을 업로드합니다.' },
      { step: 2, title: '페이지 선택', description: 'SVG로 추출할 특정 페이지를 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '변환을 클릭하고 SVG 파일을 다운로드합니다.' },
    ],
    useCases: [
      { title: '디자인 편집', description: '고품질 편집을 위해 PDF 자산을 벡터 형식으로 추출합니다.', icon: 'palette' },
      { title: '웹 아이콘 생성', description: 'PDF 아이콘이나 로고를 웹에 사용하기에 적합한 SVG로 변환합니다.', icon: 'code' },
      { title: '고해상도 프레젠테이션', description: '프레젠테이션에 사용할 무한 확장 가능한 그래픽을 만듭니다.', icon: 'presentation' },
    ],
    faq: [
      { question: '텍스트가 검색 가능한가요?', answer: 'SVG에서 텍스트는 경로로 변환되거나 텍스트 요소로 유지되도록 선택할 수 있습니다.' },
      { question: '이미지는 어떻게 처리되나요?', answer: 'PDF에 포함된 래스터 이미지는 SVG 파일 내에 데이터로 포함됩니다.' },
      { question: '브라우저에서 SVG를 볼 수 있나요?', answer: '예, 모든 현대적인 웹 브라우저는 추가 소프트웨어 없이 SVG를 지원합니다.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF를 PowerPoint로',
    metaDescription: 'PDF 문서를 편집 가능한 PowerPoint 프레젠테이션(PPTX)으로 변환합니다.',
    keywords: ['pdf를 pptx로', 'pdf를 파워포인트로', 'pdf 변환기', 'pdf를 슬라이드로'],
    description: `
      <p>PDF 문서를 편집 가능한 PowerPoint 프레젠테이션으로 변환하여 콘텐츠를 슬라이드로 다시 활용할 수 있게 합니다.</p>
      <p>각 PDF 페이지는 텍스트와 이미지를 조작할 수 있는 PowerPoint 슬라이드가 됩니다. 디자인과 레이아웃을 최대한 가깝게 재구성합니다.</p>
      <p>모든 변환은 브라우저에서 로컬로 처리되므로 프레젠테이션 콘텐츠가 안전하게 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PPTX로 변환하려는 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '처리 대기', description: '도구가 페이지를 분석하고 슬라이드로 재구성합니다.' },
      { step: 3, title: 'PPTX 다운로드', description: '다운로드를 클릭하여 편집 가능한 프레젠테이션을 저장합니다.' },
    ],
    useCases: [
      { title: '콘텐츠 재활용', description: 'PDF 보고서 내용을 새로운 프레젠테이션 슬라이드로 변환합니다.', icon: 'refresh-cw' },
      { title: '교육 자료 생성', description: '강의 PDF를 편집 가능한 강의 슬라이드로 만듭니다.', icon: 'book' },
      { title: '프레젠테이션 수정', description: '원본 파일이 없는 PDF 발표 자료를 수정 가능한 형태로 변환합니다.', icon: 'edit' },
    ],
    faq: [
      { question: '텍스트를 편집할 수 있나요?', answer: '예, 도구는 텍스트 요소를 편집 가능한 텍스트 상자로 인식하려고 노력합니다.' },
      { question: '레이아웃이 그대로 유지되나요?', answer: '복잡한 PDF 레이아웃은 PPTX 슬라이드로 변환 시 약간의 조정이 필요할 수 있습니다.' },
      { question: '이미지 품질은 어떤가요?', answer: '모든 이미지는 원본 해상도를 유지하면서 슬라이드에 포함됩니다.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF를 Excel로',
    metaDescription: 'PDF 표를 편집 가능한 Excel 스프레드시트(XLSX)로 추출합니다.',
    keywords: ['pdf를 excel로', 'pdf를 xlsx로', 'pdf 표 추출', 'pdf 데이터 추출'],
    description: `
      <p>PDF 문서에서 표 데이터를 추출하여 편집 가능한 Microsoft Excel 스프레드시트로 변환합니다.</p>
      <p>이 도구는 PDF 내의 표 구조를 지능적으로 감지하여 데이터 행과 열을 적절한 Excel 셀로 매핑합니다. 재입력할 필요 없이 데이터를 바로 처리할 수 있습니다.</p>
      <p>모든 행위는 브라우저 내부에서 이루어지므로 민감한 데이터가 외부로 유출되지 않습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '데이터를 추출할 PDF 파일을 선택합니다.' },
      { step: 2, title: '표 감지', description: '도구가 문서 내의 표를 자동으로 분석하고 변환합니다.' },
      { step: 3, title: 'Excel 다운로드', description: '변환된 XLSX 파일을 다운로드하여 편집을 시작합니다.' },
    ],
    useCases: [
      { title: '재무 분석', description: 'PDF 손익계산서 데이터를 Excel로 옮겨 분석을 수행합니다.', icon: 'pie-chart' },
      { title: '데이터 수집', description: '여러 PDF 보고서의 표 데이터를 하나의 스프레드시트로 통합합니다.', icon: 'database' },
      { title: '가격표 관리', description: 'PDF 카탈로그의 제품 및 가격표를 편집 가능한 Excel로 관리합니다.', icon: 'tag' },
    ],
    faq: [
      { question: '복잡한 표도 인식되나요?', answer: '표준적인 표는 잘 인식되지만, 병합된 셀이 많은 복잡한 표는 변환 후 약간의 수정이 필요할 수 있습니다.' },
      { question: '여러 시트로 나누어지나요?', answer: '페이지별 또는 감지된 표별로 시트를 나누어 저장할 수 있는 옵션을 제공합니다.' },
      { question: '문자 깨짐이 없나요?', answer: '다양한 인코딩을 지원하여 한글을 포함한 텍스트가 깨짐 없이 추출되도록 합니다.' },
    ],
  },

  'pdf-to-txt': {
    title: 'PDF를 텍스트로',
    metaDescription: 'PDF에서 일반 텍스트를 추출합니다. 모든 PDF 문서에서 텍스트 콘텐츠를 가져옵니다.',
    keywords: ['pdf를 텍스트로', 'pdf 텍스트 추출', 'pdf에서 텍스트 읽기'],
    description: `
      <p>PDF를 텍스트로는 PDF 문서에서 모든 텍스트 콘텐츠를 추출하여 일반 텍스트(.txt) 파일로 변환합니다.</p>
      <p>이미지나 서식을 제거하고 순수한 텍스트 데이터만 필요할 때 적합합니다. 텍스트 분석, 데이터 마이닝 또는 콘텐츠 재활용에 매우 유용합니다.</p>
      <p>모든 과정은 브라우저에서 로컬로 진행되며, 보안을 보장합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '텍스트를 추출할 PDF 파일을 선택합니다.' },
      { step: 2, title: '추출 대기', description: '도구가 페이지를 읽고 모든 텍스트를 수집합니다.' },
      { step: 3, title: '텍스트 다운로드', description: '추출된 내용을 .txt 파일로 저장합니다.' },
    ],
    useCases: [
      { title: '자연어 처리', description: 'AI 학습이나 데이터 분석을 위해 텍스트만 추출합니다.', icon: 'cpu' },
      { title: '콘텐츠 재작성', description: '서식 없이 텍스트만 가져와 블로그 글이나 영감을 얻습니다.', icon: 'edit-3' },
      { title: '검색 인덱싱', description: '문서 내용을 일반 텍스트로 변환하여 검색 시스템에 등록합니다.', icon: 'search' },
    ],
    faq: [
      { question: '이미지 속 글자도 추출되나요?', answer: '이 도구는 텍스트 레이어를 기반으로 합니다. 이미지 속 글자는 OCR 도구를 사용해 주세요.' },
      { question: '줄 바꿈이 유지되나요?', answer: '원본 문서의 단락 구조를 최대한 유지하려고 노력합니다.' },
      { question: '한글도 잘 나오나요?', answer: '유니코드 규격을 준수하여 모든 언어가 올바르게 추출됩니다.' },
    ],
  },

  'extract-attachments': {
    title: '첨부 파일 추출',
    metaDescription: 'PDF 문서 내에 삽입된 모든 첨부 파일을 추출하고 다운로드합니다.',
    keywords: ['pdf 첨부파일 추출', 'pdf 내장 파일', 'pdf 첨부 저장'],
    description: `
      <p>PDF 파일 안에 숨겨진 모든 첨부 파일(임베드된 파일)을 찾아내어 추출합니다.</p>
      <p>일부 PDF에는 관련 데이터, 영상, 혹은 다른 문서가 첨부되어 있을 수 있습니다. 이 도구는 이를 모두 스캔하여 개별 파일로 제공합니다.</p>
      <p>파일 정보는 노출되지 않으며 모든 작업은 사용자의 기기에서만 행해집니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '첨부 파일이 포함된 PDF를 선택합니다.' },
      { step: 2, title: '파일 목록 확인', description: '감지된 모든 첨부 파일 목록을 화면에서 확인합니다.' },
      { step: 3, title: '추출 및 저장', description: '원하는 파일을 선택하여 다운로드하거나 전체를 ZIP으로 받습니다.' },
    ],
    useCases: [
      { title: '부록 데이터 확인', description: '보고서 내에 포함된 원본 데이터 시트를 가져옵니다.', icon: 'link' },
      { title: '멀티미디어 확인', description: 'PDF 내에 첨부된 오디오나 비디오 파일을 추출합니다.', icon: 'play' },
      { title: '증빙 서류 추출', description: '공문서 등에 포함된 개별 증빙 서류들을 분리합니다.', icon: 'paperclip' },
    ],
    faq: [
      { question: '어떤 형식의 파일도 추출되나요?', answer: 'PDF가 허용하는 모든 형태의 내장 파일(Word, Excel, 이미지 등)을 추출할 수 있습니다.' },
      { question: '첨부 파일이 있는지 어떻게 아나요?', answer: '도구가 파일을 업로드받는 즉시 내부를 검사하여 결과를 알려드립니다.' },
      { question: '추출 후 원본 PDF는 어떻게 되나요?', answer: '원본 PDF는 변경되지 않으며, 사본에서 추출 작업만 수행합니다.' },
    ],
  },

  'extract-images': {
    title: '이미지 추출',
    metaDescription: 'PDF 문서에서 고해상도 이미지를 추출하여 개별 파일로 저장합니다.',
    keywords: ['pdf 이미지 추출', 'pdf 사진 저장', 'pdf 이미지 분리'],
    description: `
      <p>PDF 페이지 속에 들어있는 모든 이미지를 원본 해상도 그대로 추출합니다.</p>
      <p>페이지 전체를 스크린샷 찍는 것이 아니라, 문서 파일 내부의 실제 이미지 객체를 직접 가져오므로 가장 깨끗한 화질을 얻을 수 있습니다.</p>
      <p>모든 데이터 처리는 로컬 환경에서 안전하게 수행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '이미지를 가져올 PDF 파일을 선택합니다.' },
      { step: 2, title: '이미지 분석', description: '도구가 문서 내의 모든 고품질 이미지를 검색합니다.' },
      { step: 3, title: '다운로드', description: '추출된 이미지를 ZIP 파일이나 개별 이미지로 다운로드합니다.' },
    ],
    useCases: [
      { title: '사진 소스 관리', description: 'PDF에 사용된 원본 사진들을 다시 디자인 용도로 사용합니다.', icon: 'camera' },
      { title: '마케팅 활용', description: 'PDF 브로슈어의 이미지를 소셜 미디어나 웹에 게시합니다.', icon: 'image' },
      { title: '콘텐츠 아카이브', description: '문서 속의 중요한 그래픽 소스들을 별도로 보관합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '이미지 화질이 떨어지나요?', answer: '아니요, PDF 내부에 저장된 실제 픽셀 데이터를 그대로 가져옵니다.' },
      { question: '모든 페이지에서 추출되나요?', answer: '예, 문서 전체를 대상으로 모든 이미지를 찾아냅니다.' },
      { question: '어떤 이미지 형식이 나오나요?', answer: '원본에 저장된 방식에 따라 JPG 또는 PNG 등으로 추출됩니다.' },
    ],
  },

  'edit-attachments': {
    title: '첨부 파일 편집',
    metaDescription: 'PDF 문서의 첨부 파일을 추가, 삭제 또는 관리합니다.',
    keywords: ['pdf 첨부파일 편집', 'pdf 첨부 추가', 'pdf 첨부 삭제'],
    description: `
      <p>PDF 문서 내부의 첨부 파일 목록을 원하는 대로 구성할 수 있습니다.</p>
      <p>불필요한 내장 파일을 삭제하거나, 관련 있는 새 자료를 PDF 안에 직접 첨부하여 하나의 패키지로 관리할 수 있게 도와줍니다.</p>
      <p>인터넷 연결 없이 브라우저 내에서 직접 관리하여 보안이 뛰어납니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '첨부 파일을 관리할 PDF를 선택합니다.' },
      { step: 2, title: '추가 또는 삭제', description: '새 파일을 끌어다 놓아 첨부하거나 기존 목록에서 삭제 버튼을 누릅니다.' },
      { step: 3, title: '저장 및 완료', description: '수정 완료된 새 PDF 문서를 다운로드합니다.' },
    ],
    useCases: [
      { title: '데이터 패키징', description: '보고서 PDF 안에 근거 데이터 파일을 함께 첨부하여 배포합니다.', icon: 'package' },
      { title: '파일 정리', description: '기존 PDF에 포함된 불필요하거나 오래된 첨부물을 제거합니다.', icon: 'trash-2' },
      { title: '보안 관리', description: '배포 전 실수로 포함된 민감한 첨부 파일을 확인하고 삭제합니다.', icon: 'shield' },
    ],
    faq: [
      { question: '첨부 파일 개수 제한이 있나요?', answer: '특별한 소포트웨어적 제한은 없으나, 파일 전체 크기가 너무 커지면 작동이 느려질 수 있습니다.' },
      { question: '암호화된 PDF도 되나요?', answer: '편집을 위해서는 먼저 PDF 암호를 해제해야 할 수도 있습니다.' },
      { question: '첨부된 파일의 내용을 바로 수정할 수 있나요?', answer: '이 도구는 첨부 관계(추가/삭제)만 관리합니다. 파일 자체의 내용을 고치려면 해당 파일을 추출한 뒤 고쳐서 다시 첨부해야 합니다.' },
    ],
  },

  'divide-pages': {
    title: '페이지 나누기',
    metaDescription: 'PDF 페이지를 여러 섹션으로 나눕니다. 페이지를 가로 또는 세로로 분할합니다.',
    keywords: ['pdf 페이지 나누기', '페이지 분할', 'pdf 페이지 자르기', '페이지 섹션'],
    description: `
      <p>페이지 나누기는 개별 PDF 페이지를 여러 섹션으로 분할합니다. 페이지를 가로, 세로 또는 그리드 형태로 잘라 하나의 페이지에서 여러 페이지를 생성할 수 있습니다.</p>
      <p>한 페이지에 여러 항목이 포함된 스캔 문서를 분할하거나, 대형 페이지를 표준 크기로 나누는 데 적합합니다.</p>
      <p>모든 처리는 브라우저에서 로컬로 진행되어 문서의 보안을 보장합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '분할 설정', description: '가로, 세로 또는 그리드 분할을 선택하고 섹션 수를 설정합니다.' },
      { step: 3, title: '나누기 및 다운로드', description: '나누기를 클릭하여 페이지를 분할하고 결과물을 다운로드합니다.' },
    ],
    useCases: [
      { title: '스캔본 분할', description: '여러 문서가 포함된 스캔 페이지를 개별 페이지로 나눕니다.', icon: 'scissors' },
      { title: '페이지 크기 조정', description: '큰 페이지를 표준 용지 크기로 분할합니다.', icon: 'maximize-2' },
      { title: '카드/명함 생성', description: '인쇄를 위해 페이지를 카드 크기 섹션으로 나눕니다.', icon: 'grid' },
    ],
    faq: [
      { question: '비대칭으로 나눌 수 있나요?', answer: '현재는 균등 분할만 지원합니다. 사용자 정의 섹션이 필요한 경우 PDF 자르기 도구를 사용하세요.' },
      { question: '분할선에 있는 내용은 어떻게 되나요?', answer: '내용이 분할선에서 잘리므로 중요한 내용이 경계선에 걸치지 않도록 주의하세요.' },
      { question: '특정 페이지만 나눌 수 있나요?', answer: '예, 분할할 페이지를 개별적으로 선택할 수 있습니다.' },
    ],
  },

  'add-blank-page': {
    title: '빈 페이지 추가',
    metaDescription: 'PDF 문서에 빈 페이지를 삽입합니다. 어느 위치에나 빈 페이지를 추가할 수 있습니다.',
    keywords: ['빈 페이지 추가', '페이지 삽입', '빈 페이지', 'pdf 페이지 삽입'],
    description: `
      <p>빈 페이지 추가는 PDF 문서의 원하는 위치에 빈 페이지를 삽입합니다. 기존 페이지 앞, 뒤 또는 사이에 사용자 정의 크기의 페이지를 추가할 수 있습니다.</p>
      <p>메모 공간 확보, 섹션 구분선 생성 또는 인쇄 준비를 위한 페이지 조정에 적합합니다.</p>
      <p>모든 처리는 브라우저 내에서 이루어지므로 문서가 안전하게 보호됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '위치 선택', description: '빈 페이지를 삽입할 위치와 개수를 선택합니다.' },
      { step: 3, title: '추가 및 다운로드', description: '추가를 클릭하여 페이지를 삽입하고 완료된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '메모 공간', description: '수기 메모를 위한 빈 페이지를 추가합니다.', icon: 'edit-3' },
      { title: '섹션 구분', description: '문서 섹션 사이에 빈 페이지를 삽입하여 구분합니다.', icon: 'minus' },
      { title: '인쇄 준비', description: '양면 인쇄 정렬을 위해 필요한 위치에 페이지를 추가합니다.', icon: 'printer' },
    ],
    faq: [
      { question: '페이지 크기를 선택할 수 있나요?', answer: '예, 기존 페이지와 맞추거나 사용자 정의 크기를 지정할 수 있습니다.' },
      { question: '여러 장을 한 번에 추가할 수 있나요?', answer: '예, 원하는 만큼의 빈 페이지를 한 번에 추가할 수 있습니다.' },
      { question: '색상이 있는 페이지를 넣을 수 있나요?', answer: '빈 페이지를 추가한 후 배경색 도구를 사용하여 색상을 입힐 수 있습니다.' },
    ],
  },

  'reverse-pages': {
    title: '페이지 순서 역순',
    metaDescription: 'PDF 페이지 순서를 반전시킵니다. 마지막 페이지부터 첫 페이지 순으로 정렬합니다.',
    keywords: ['pdf 역순', '페이지 순서 뒤집기', '순서 반전', '문서 역순 정렬'],
    description: `
      <p>페이지 순서 역순은 PDF 문서의 페이지 순서를 뒤집어 마지막 페이지가 첫 번째로, 첫 번째 페이지가 마지막으로 오게 합니다. 거꾸로 스캔된 문서나 특정 인쇄 요구 사항이 있을 때 유용합니다.</p>
      <p>전체 문서 또는 선택한 페이지 범위의 순서를 변경하며, 모든 내용과 서식을 유지합니다.</p>
      <p>브라우저에서 직접 처리되므로 문서 보안이 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '페이지 선택', description: '전체 페이지를 뒤집을지 특정 범위를 선택할지 결정합니다.' },
      { step: 3, title: '역순 정렬 및 다운로드', description: '역순을 클릭하여 순서를 뒤집고 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '스캔 순서 교정', description: '거꾸로 스캔된 문서의 순서를 바로잡습니다.', icon: 'refresh-cw' },
      { title: '인쇄 준비', description: '특정 인쇄 방식에 맞춰 페이지 순서를 반전시킵니다.', icon: 'printer' },
      { title: '문서 재정렬', description: '검토를 위해 문서 순서를 빠르게 뒤집습니다.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: '북마크도 업데이트 되나요?', answer: '예, 북마크는 순서가 바뀐 페이지를 정확히 가리키도록 업데이트됩니다.' },
      { question: '일부 페이지만 뒤집을 수 있나요?', answer: '예, 페이지 범위를 지정하여 해당 부분의 순서만 반전시킬 수 있습니다.' },
      { question: '회전과 같은 기능인가요?', answer: '아니요, 역순은 페이지의 순서를 바꾸고, 회전은 페이지의 방향을 바꿉니다.' },
    ],
  },

  'rotate-pdf': {
    title: 'PDF 회전',
    metaDescription: 'PDF 페이지를 회전시킵니다. 페이지를 90도, 180도 또는 270도 방향으로 돌립니다.',
    keywords: ['pdf 회전', '페이지 돌리기', 'pdf 방향 수정', '가로세로 조정'],
    description: `
      <p>PDF 회전은 문서의 페이지를 90도, 180도 또는 270도로 회전시킵니다. 잘못 보관된 스캔본을 바로잡거나, 가로 페이지를 조정하여 보기 좋게 만듭니다.</p>
      <p>모든 페이지를 한꺼번에 회전하거나 특정 페이지만 개별적으로 선택하여 처리할 수 있습니다. 품질 손실 없이 서식을 유지합니다.</p>
      <p>보안을 위해 모든 작업은 브라우저에서 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '회전 선택', description: '회전 각도와 적용할 페이지를 선택합니다.' },
      { step: 3, title: '회전 및 다운로드', description: '회전을 클릭하여 변경 사항을 적용하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '스캔본 교정', description: '잘못된 방향으로 스캔된 문서를 바로잡습니다.', icon: 'rotate-cw' },
      { title: '가로 페이지 조정', description: '가로로 된 페이지를 세로로 또는 그 반대로 돌려 보기 좋게 만듭니다.', icon: 'monitor' },
      { title: '방향 통일', description: '여러 문서가 섞인 경우 페이지 방향을 일정하게 맞춥니다.', icon: 'layout' },
    ],
    faq: [
      { question: '페이지마다 다르게 돌릴 수 있나요?', answer: '예, 각 페이지에 다른 회전 각도를 적용할 수 있습니다.' },
      { question: '회전하면 화질이 떨어지나요?', answer: '아니요, 회전 작업은 문서의 품질에 영향을 주지 않습니다.' },
      { question: '원하는 각도로 세밀하게 조절 가능한가요?', answer: '이 도구는 90도 단위(90, 180, 270) 회전만 지원합니다.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: '한 장의 용지에 여러 페이지를 배치합니다. 2-up, 4-up 또는 사용자 정의 레이아웃을 만드세요.',
    keywords: ['n-up pdf', '여러 페이지 한 장에', '2-up 인쇄', '페이지 축소 배치'],
    description: `
      <p>N-Up PDF는 한 장의 용지에 여러 페이지를 배열하여 2-up, 4-up, 6-up, 9-up 또는 사용자 정의 레이아웃을 생성합니다. 인쇄 시 종이를 절약하거나 유인물을 만드는 데 적합합니다.</p>
      <p>제공된 레이아웃 중에서 선택하거나 직접 배열을 설정할 수 있습니다. 도구가 최적의 결과를 위해 페이지 크기를 자동으로 조정합니다.</p>
      <p>모든 과정은 브라우저에서 안전하게 로컬로 처리됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '레이아웃 선택', description: '2-up, 4-up, 6-up, 9-up 또는 그리드 설정에서 선택합니다.' },
      { step: 3, title: '생성 및 다운로드', description: '생성을 클릭하여 N-up PDF를 만들고 다운로드합니다.' },
    ],
    useCases: [
      { title: '종이 절약', description: '한 장에 여러 페이지를 인쇄하여 종이 사용량을 줄입니다.', icon: 'leaf' },
      { title: '유인물 제작', description: '발표 자료 슬라이드를 모아 컴팩트한 유인물을 만듭니다.', icon: 'file-text' },
      { title: '문서 검토', description: '전체적인 흐름을 보기 위해 문서를 축소하여 인쇄합니다.', icon: 'eye' },
    ],
    faq: [
      { question: '어떤 레이아웃이 가능한가요?', answer: '기본 2/4/6/9 페이지 배치 외에 사용자 정의 그리드 레이아웃도 가능합니다.' },
      { question: '페이지 사이에 테두리를 넣을 수 있나요?', answer: '예, 페이지 간격(거터) 및 테두리 추가 옵션을 제공합니다.' },
      { question: '페이지 순서가 유지되나요?', answer: '예, 읽기 순서(왼쪽에서 오른쪽, 위에서 아래)에 맞춰 배치됩니다.' },
    ],
  },

  'combine-single-page': {
    title: '한 페이지로 결합',
    metaDescription: 'PDF 페이지들을 하나의 긴 연속된 페이지로 이어 붙입니다. 스크롤 가능한 단일 페이지 문서를 생성합니다.',
    keywords: ['페이지 결합', '단일 페이지 pdf', '페이지 이어붙이기', '연속 스크롤'],
    description: `
      <p>한 페이지로 결합은 PDF의 모든 페이지를 하나의 긴 연속된 페이지로 이어 붙입니다. 웹에서 보거나 끊김 없이 읽기에 적합한 스크롤 문서를 만드세요.</p>
      <p>페이지들이 세로 방향으로 연결되며 간격을 조절할 수 있습니다. 결과물은 모든 내용을 담은 단 하나의 긴 페이지가 됩니다.</p>
      <p>모든 처리는 브라우저에서 로컬로 진행되어 안전합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '간격 설정', description: '페이지 사이에 들어갈 간격을 설정합니다.' },
      { step: 3, title: '결합 및 다운로드', description: '결합을 클릭하여 단일 페이지 PDF를 생성합니다.' },
    ],
    useCases: [
      { title: '웹 문서', description: '웹사이트에 임베드하기 좋은 스크롤형 PDF를 만듭니다.', icon: 'globe' },
      { title: '연속 읽기', description: '페이지 구분 없이 연속해서 읽을 수 있도록 변환합니다.', icon: 'scroll' },
      { title: '롱폼 콘텐츠', description: '긴 기사나 보고서를 매끄러운 단일 문서로 통합합니다.', icon: 'file-text' },
    ],
    faq: [
      { question: '페이지 수 제한이 있나요?', answer: '너무 많은 페이지가 포함된 문서는 브라우저 메모리 한계에 도달할 수 있습니다.' },
      { question: '페이지 사이에 구분선을 넣을 수 있나요?', answer: '예, 페이지 사이의 간격이나 선을 추가할 수 있습니다.' },
      { question: '인쇄용으로 적합한가요?', answer: '이 결과물은 화면 보기용으로 최적화되어 있습니다. 인쇄용은 N-Up 도구를 권장합니다.' },
    ],
  },

  'view-metadata': {
    title: '메타데이터 보기',
    metaDescription: 'PDF 문서 속성을 확인합니다. 작성자, 제목, 날짜 등 기타 메타데이터를 볼 수 있습니다.',
    keywords: ['pdf 메타데이터', '문서 속성', 'pdf 정보', '문서 상세 정보'],
    description: `
      <p>메타데이터 보기는 PDF 파일의 모든 문서 속성과 메타데이터를 표시합니다. 제목, 작성자, 주제, 키워드, 생성 및 수정 날짜 등을 확인할 수 있습니다.</p>
      <p>문서 감사, 파일 정보 확인 또는 문서의 진위 여부를 파악할 때 유용합니다.</p>
      <p>모든 정보 확인은 브라우저에서 이루어지며 문서는 외부에 공유되지 않습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '속성 확인', description: '정리된 형식으로 표시된 모든 메타데이터를 확인합니다.' },
      { step: 3, title: '내보내기 (필요시)', description: '선택적으로 메타데이터를 JSON 파일로 내보냅니다.' },
    ],
    useCases: [
      { title: '문서 감사', description: '규정 준수를 위해 문서 속성을 검토합니다.', icon: 'clipboard-check' },
      { title: '진위 확인', description: '생성 날짜와 작성자 정보를 대조하여 확인합니다.', icon: 'shield' },
      { title: '파일 상세 정보', description: 'PDF 파일에 대한 상세한 기술 정보를 얻습니다.', icon: 'info' },
    ],
    faq: [
      { question: '어떤 메타데이터가 보이나요?', answer: '제목, 작성자, 주제, 키워드, 생성기, 제작자, 날짜 및 PDF 버전이 포함됩니다.' },
      { question: '여기서 수정도 가능한가요?', answer: '메타데이터 수정을 위해서는 ‘메타데이터 편집’ 도구를 사용하세요.' },
      { question: 'XMP 메타데이터도 지원되나요?', answer: '예, 표준 메타데이터와 XMP 메타데이터 모두 표시됩니다.' },
    ],
  },

  'edit-metadata': {
    title: '메타데이터 편집',
    metaDescription: 'PDF 문서 속성을 편집합니다. 제목, 작성자, 주제 및 키워드를 변경하세요.',
    keywords: ['pdf 메타데이터 수정', '문서 속성 변경', 'pdf 작성자 변경', '문서 정보 편집'],
    description: `
      <p>메타데이터 편집은 PDF 파일의 문서 속성을 수정할 수 있게 해줍니다. 제목, 작성자, 주제, 키워드 및 기타 필드를 변경할 수 있습니다.</p>
      <p>잘못된 문서 정보를 바로잡거나, 적절한 저작권 정보를 추가할 때, 또는 배포 전 파일을 정리할 때 적합합니다.</p>
      <p>모든 편집은 브라우저에서 진행되어 사용자의 개인 정보를 보호합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '속성 수정', description: '제목, 작성자, 주제, 키워드 등을 원하는 값으로 고칩니다.' },
      { step: 3, title: '저장 및 다운로드', description: '저장을 클릭하여 변경 사항을 적용하고 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '정보 추가', description: '올바른 작성자나 제목 정보를 삽입합니다.', icon: 'user' },
      { title: 'SEO 최적화', description: '검색 용이성을 위해 설명과 키워드를 추가합니다.', icon: 'search' },
      { title: '배포 준비', description: '문서를 공유하기 전 메타데이터를 깔끔하게 정리합니다.', icon: 'file-check' },
    ],
    faq: [
      { question: '어떤 필드를 고칠 수 있나요?', answer: '제목, 작성자, 주제, 키워드, 생성기 및 제작자 필드를 수정할 수 있습니다.' },
      { question: '모든 정보를 지울 수 있나요?', answer: '메타데이터를 완전히 제거하려면 ‘메타데이터 제거’ 도구를 사용하세요.' },
      { question: '날짜도 수정되나요?', answer: '문서의 마지막 수정 날짜는 저장 시 자동으로 업데이트됩니다.' },
    ],
  },

  'add-metadata': {
    title: '메타데이터 추가',
    metaDescription: 'PDF 문서에 메타데이터를 추가합니다. 제목, 작성자, 주제, 키워드 등을 삽입하세요.',
    keywords: ['메타데이터 추가', 'pdf 정보 입력', '문서 속성 설정', 'pdf 상세보기 추가'],
    description: `
      <p>메타데이터 추가는 PDF 파일에 문서 속성과 메타데이터를 새롭게 추가하거나 업데이트합니다. 제목, 저자, 주제, 키워드 등을 입력할 수 있습니다.</p>
      <p>문서 정리, 저작권 표시 또는 배포를 위한 파일 준비 단계에서 매우 유용합니다.</p>
      <p>모든 처리는 브라우저에서 안전하게 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '메타데이터 입력', description: '추가하거나 업데이트할 메타데이터 필드를 채웁니다.' },
      { step: 3, title: '저장 및 다운로드', description: '저장을 클릭하여 변경 사항을 적용하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '문서 정리', description: '나중에 찾기 쉽도록 파일에 분류 정보를 추가합니다.', icon: 'folder' },
      { title: '저작자 표기', description: '창작자의 이름과 정보 정보를 문서에 명시합니다.', icon: 'user' },
      { title: '검색 인덱스 개선', description: '키워드를 추가하여 내부 검색 시스템에서의 노출을 개선합니다.', icon: 'search' },
    ],
    faq: [
      { question: '어떤 필드를 추가할 수 있나요?', answer: '제목, 작성자, 주제, 키워드, 생성기 및 제작자 필드를 지원합니다.' },
      { question: '기존에 있던 정보는 어떻게 되나요?', answer: '이미 정보가 있는 필드에 새 값을 입력하면 덮어쓰게 됩니다.' },
      { question: 'XMP 규격도 지원하나요?', answer: '예, 표준 메타데이터와 XMP 메타데이터가 함께 업데이트됩니다.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF를 ZIP으로',
    metaDescription: '여러 PDF를 하나의 ZIP 압축 파일로 패키징합니다. PDF 파일들을 묶어서 보관하거나 압축하세요.',
    keywords: ['pdf zip 압축', 'pdf 묶기', 'pdf 아카이브', '파일 번들링'],
    description: `
      <p>PDF를 ZIP으로는 여러 개의 PDF 파일을 하나의 ZIP 아카이브로 묶어줍니다. 공유, 보관 또는 백업을 위해 파일들을 효율적으로 압축하세요.</p>
      <p>이 도구는 업로드된 모든 PDF를 포함하는 압축 파일을 생성하여 전체 크기를 줄이고 파일 관리를 단순화합니다.</p>
      <p>프로세스는 브라우저에서 로컬로 진행되므로 파일 보안이 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '묶고 싶은 여러 PDF 파일들을 드래그 앤 드롭하거나 선택합니다.' },
      { step: 2, title: '아카이브 설정', description: '필요시 압축 파일의 이름을 설정합니다.' },
      { step: 3, title: '생성 및 다운로드', description: '생성을 클릭하여 ZIP 파일을 만들고 저장합니다.' },
    ],
    useCases: [
      { title: '파일 공유', description: '여러 문서를 이메일 등으로 한 번에 보내기 쉽게 묶습니다.', icon: 'share-2' },
      { title: '백업 생성', description: '문서 모음을 압축하여 보관용 백업을 만듭니다.', icon: 'archive' },
      { title: '이메일 첨부', description: '여러 파일을 하나의 압축 첨부 파일로 정리합니다.', icon: 'mail' },
    ],
    faq: [
      { question: '용량이 얼마나 줄어드나요?', answer: '일반적으로 ZIP 압축을 통해 전체 크기를 10~30% 정도 줄일 수 있습니다.' },
      { question: '전체 파일 개수 제한이 있나요?', answer: '한 번에 최대 100개의 PDF를 하나의 압축 파일로 묶을 수 있습니다.' },
      { question: '압축 파일에 암호를 걸 수 있나요?', answer: '현재 암호 기능이 있는 ZIP 파일 생성은 지원하지 않습니다.' },
    ],
  },

  'compare-pdfs': {
    title: 'PDF 비교',
    metaDescription: '두 개의 PDF 문서를 비교합니다. 버전 간의 차이점을 강조하여 표시합니다.',
    keywords: ['pdf 비교', 'pdf 차이점', '문서 비교', '버전 비교'],
    description: `
      <p>PDF 비교는 두 개의 PDF 문서를 분석하고 그 사이의 차이점을 찾아냅니다. 문서 수정 사항 검토, 계약서 변경 내용 확인 또는 편집 내용 검증에 적합합니다.</p>
      <p>문서를 나란히 보거나 오버레이 모드로 보면서 차이점을 눈으로 확인할 수 있습니다. 도구는 텍스트 변경, 추가 및 삭제된 부분을 식별합니다.</p>
      <p>모든 비교 작업은 브라우저에서 로컬로 진행되어 문서의 보안을 보장합니다.</p>
    `,
    howToUse: [
      { step: 1, title: '두 PDF 업로드', description: '원본 PDF와 수정된 PDF 문서를 각각 업로드합니다.' },
      { step: 2, title: '문서 비교', description: '나란히 보기 또는 오버레이 모드에서 강조된 차이점을 확인합니다.' },
      { step: 3, title: '결과 내보내기', description: '비교 보고서나 주석이 달린 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '계약서 검토', description: '계약서 버전을 비교하여 변경된 조항을 식별합니다.', icon: 'file-text' },
      { title: '문서 개정', description: '문서 버전 간의 편집 내용을 검토합니다.', icon: 'git-compare' },
      { title: '품질 보증', description: '의도한 변경 사항만 반영되었는지 확인합니다.', icon: 'check-circle' },
    ],
    faq: [
      { question: '어떤 종류의 차이점이 감지되나요?', answer: '텍스트 추가, 삭제, 수정 및 서식 변경 사항을 감지합니다.' },
      { question: '스캔된 문서도 비교할 수 있나요?', answer: '스캔된 문서는 텍스트 비교를 위해 먼저 OCR 처리를 거치는 것이 좋습니다.' },
      { question: '시각적 비교도 가능한가요?', answer: '예, 오버레이 모드를 통해 페이지 간의 시각적 차이를 확인할 수 있습니다.' },
    ],
  },

  'posterize-pdf': {
    title: '포스터 만들기',
    metaDescription: '대형 PDF 페이지를 인쇄 가능한 타일로 나눕니다. PDF 페이지로 포스터를 제작하세요.',
    keywords: ['pdf 포스터화', 'pdf 타일 나누기', '대형 인쇄', 'pdf 포스터'],
    description: `
      <p>포스터 만들기는 큰 PDF 페이지를 여러 개의 작은 타일로 분할하여 표준 용지로 인쇄한 뒤 포스터로 조립할 수 있게 해줍니다. 대형 도표, 지도 또는 예술 작품을 인쇄할 때 완벽합니다.</p>
      <p>조립이 쉽도록 그리드 크기와 겹침(overlap) 정도를 설정하세요. 도구가 대상 출력 크기에 맞춰 타일 크기를 자동으로 계산합니다.</p>
      <p>모든 처리는 브라우저에서 로컬로 이루어져 문서 보안이 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '대형 PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '타일 설정', description: '그리드 크기, 겹침 간격 및 출력 용지 크기를 설정합니다.' },
      { step: 3, title: '생성 및 다운로드', description: '생성을 클릭하여 인쇄 가능한 타일 파일을 받습니다.' },
    ],
    useCases: [
      { title: '포스터 인쇄', description: '표준 용지를 사용하여 대형 포스터를 인쇄합니다.', icon: 'maximize-2' },
      { title: '지도 인쇄', description: '큰 지도를 섹션별로 인쇄하여 조립합니다.', icon: 'map' },
      { title: '작품 복제', description: 'PDF 아트워크로 대형 프린트를 제작합니다.', icon: 'image' },
    ],
    faq: [
      { question: '겹침 간격은 어느 정도가 좋나요?', answer: '조립 시 정렬을 위해 10-20mm 정도의 겹침을 권장합니다.' },
      { question: '재단선(crop marks)을 넣을 수 있나요?', answer: '예, 자르기와 정렬을 돕기 위해 재단선을 추가할 수 있습니다.' },
      { question: '어떤 용지 크기를 지원하나요?', answer: 'A4, Letter, A3 및 사용자 정의 크기를 지원합니다.' },
    ],
  },

  'fix-page-size': {
    title: '페이지 크기 통일',
    metaDescription: 'PDF 페이지 크기를 표준화합니다. 모든 페이지를 균일한 치수로 변환하세요.',
    keywords: ['페이지 크기 수정', 'pdf 표준화', '페이지 균일화', 'pdf 크기 조정'],
    description: `
      <p>페이지 크기 통일은 PDF의 모든 페이지를 균일한 크기로 맞춥니다. 서로 다른 크기의 페이지가 섞인 문서를 일관성 있게 만들어 전문적인 발표나 인쇄에 적합하게 변경합니다.</p>
      <p>표준 크기(A4, Letter 등)를 선택하거나 사용자 정의 치수를 입력할 수 있습니다. 콘텐츠는 새 페이지 크기에 맞춰 비율이 조정되거나 배치됩니다.</p>
      <p>모든 처리는 브라우저 내에서 안전하게 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '대상 크기 선택', description: '표준 크기를 선택하거나 사용자 정의 치수를 입력합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '적용을 클릭하여 페이지를 표준화하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '인쇄 준비', description: '일관된 인쇄를 위해 페이지 크기를 통일합니다.', icon: 'printer' },
      { title: '문서 정리', description: '페이지 크기가 제각각인 문서를 깔끔하게 바로잡습니다.', icon: 'file-check' },
      { title: '전문 문서 작성', description: '배포를 위해 규격이 통일된 문서를 만듭니다.', icon: 'briefcase' },
    ],
    faq: [
      { question: '콘텐츠는 어떻게 처리되나요?', answer: '콘텐츠는 새 페이지 크기에 맞춰 크기가 조정되거나 중앙에 배치됩니다.' },
      { question: '가로세로 비율이 유지되나요?', answer: '예, 콘텐츠를 비율에 맞춰 늘리거나 줄일 수 있는 옵션을 제공합니다.' },
      { question: '어떤 표준 크기를 지원하나요?', answer: 'A4, A3, Letter, Legal 등 일반적인 모든 규격을 지원합니다.' },
    ],
  },

  'linearize-pdf': {
    title: '웹 최적화 (선형화)',
    metaDescription: '빠른 웹 보기를 위해 PDF를 최적화합니다. 순차적 로딩을 활성화하세요.',
    keywords: ['pdf 선형화', '빠른 웹 보기', 'pdf 최적화', '프로그레시브 pdf'],
    description: `
      <p>웹 최적화는 문서를 웹에서 빠르게 볼 수 있도록 최적화합니다. 선형화된 PDF는 전체 파일이 다운로드되기 전에도 페이지를 표시하기 시작하여 사용자 경험을 향상시킵니다.</p>
      <p>"빠른 웹 보기(Fast Web View)"라고도 불리는 이 작업은 웹 브라우저에서 순차적(프로그레시브) 로딩이 가능하도록 PDF 구조를 재구성합니다.</p>
      <p>보안을 위해 모든 처리는 브라우저에서 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '선형화 실행', description: '최적화 버튼을 클릭하여 웹용으로 재구성합니다.' },
      { step: 3, title: '다운로드', description: '최적화된 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '웹 게시', description: '웹사이트 다운로드용 PDF를 최적화합니다.', icon: 'globe' },
      { title: '이메일 첨부', description: '수신자가 더 빨리 열어볼 수 있는 PDF를 만듭니다.', icon: 'mail' },
      { title: '온라인 문서', description: '온라인에서 문서를 볼 때의 대기 시간을 줄입니다.', icon: 'cloud' },
    ],
    faq: [
      { question: '선형화란 무엇인가요?', answer: '페이지를 순서대로 불러올 수 있도록 PDF 내부 데이터를 재배치하는 기술입니다.' },
      { question: '파일 용량이 줄어드나요?', answer: '구조 정보가 추가되어 용량이 아주 미세하게 늘어날 수 있지만 무시할 만한 수준입니다.' },
      { question: '모든 뷰어와 호환되나요?', answer: '예, 모든 표준 PDF 리더에서 정상적으로 작동합니다.' },
    ],
  },

  'page-dimensions': {
    title: '페이지 크기 분석',
    metaDescription: 'PDF 페이지 크기를 분석합니다. 문서 내 모든 페이지의 정확한 치수를 확인하세요.',
    keywords: ['pdf 페이지 크기', '페이지 치수', 'pdf 측정', '문서 규격'],
    description: `
      <p>페이지 크기 분석은 PDF 문서의 모든 페이지 크기를 조사하여 표시합니다. 다양한 단위(인치, mm, 포인트)로 치수를 확인하고 표준이 아닌 페이지를 쉽게 찾을 수 있습니다.</p>
      <p>인쇄 준비, 문서 분석 또는 일관되지 않은 페이지 크기를 식별할 때 매우 유용합니다.</p>
      <p>모든 분석은 브라우저에서 로컬로 수행되어 문서 보안이 보장됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '규격 확인', description: '모든 페이지에 대해 표시된 크기 정보를 확인합니다.' },
      { step: 3, title: '보고서 내보내기', description: '선택적으로 치수 정보를 JSON 파일로 내보냅니다.' },
    ],
    useCases: [
      { title: '인쇄 계획', description: '인쇄 전 페이지 크기를 미리 체크합니다.', icon: 'printer' },
      { title: '문서 분석', description: '특이한 크기의 페이지가 포함되어 있는지 확인합니다.', icon: 'search' },
      { title: '품질 관리', description: '페이지 크기가 사양에 맞는지 검증합니다.', icon: 'check-circle' },
    ],
    faq: [
      { question: '어떤 단위를 지원하나요?', answer: '인치, 밀리미터, 센티미터, 포인트를 지원합니다.' },
      { question: '방향도 알려주나요?', answer: '예, 가로(Landscape) 또는 세로(Portrait) 방향을 표시합니다.' },
      { question: '여기서 크기를 바꿀 수도 있나요?', answer: '크기 변경을 원하시면 ‘페이지 크기 통일’ 도구를 사용하세요.' },
    ],
  },

  'remove-restrictions': {
    title: '제한 제거',
    metaDescription: 'PDF 제한 사항을 제거합니다. 인쇄, 복제 및 편집 권한을 해제하세요.',
    keywords: ['pdf 제한 해제', 'pdf 잠금 해제', 'pdf 권한', '제한 없는 pdf'],
    description: `
      <p>제한 제거는 인쇄, 복제 또는 편집을 막는 권한 제한이 걸린 PDF의 잠금을 해제합니다. 이 도구는 문서 내용은 그대로 유지하면서 소유자 비밀번호(Owner Password) 제한을 제거합니다.</p>
      <p>주의: 이 도구는 문서를 여는 것 자체를 막는 사용자 비밀번호를 제거하지는 못합니다. 파일을 여는 비밀번호가 걸린 경우 ‘PDF 암호 해제’ 도구를 사용하세요.</p>
      <p>모든 처리는 브라우저에서 안전하게 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: '제한된 PDF 업로드', description: '제한이 걸린 PDF 파일을 드래그 앤 드롭하거나 선택합니다.' },
      { step: 2, title: '제한 제거', description: '버튼을 클릭하여 문서의 잠금을 해제합니다.' },
      { step: 3, title: '다운로드', description: '제한이 풀린 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '인쇄 활성화', description: '인쇄가 차단된 PDF의 인쇄 기능을 엽니다.', icon: 'printer' },
      { title: '복제 활성화', description: '텍스트 선택 및 복사를 허용합니다.', icon: 'copy' },
      { title: '편집 활성화', description: '문서 내용 수정을 방해하는 제한을 없앱니다.', icon: 'edit' },
    ],
    faq: [
      { question: '합법적인가요?', answer: '본인이 소유하거나 권한이 있는 문서의 제한을 제거하는 것은 일반적으로 문제되지 않습니다.' },
      { question: '열기 암호도 제거되나요?', answer: '아니요, 파일을 열 때 필요한 암호는 ‘PDF 암호 해제’ 도구에서 처리해야 합니다.' },
      { question: '내용이 바뀌나요?', answer: '아니요, 오직 권한 제한만 제거되며 문서의 내용은 변하지 않습니다.' },
    ],
  },

  'sanitize-pdf': {
    title: '데이터 정화 (개인정보 제거)',
    metaDescription: 'PDF에서 숨겨진 데이터를 삭제합니다. 메타데이터, 스크립트 및 민감한 정보를 제거하세요.',
    keywords: ['pdf 정화', '데이터 클리닝', '숨은 정보 삭제', 'pdf 프라이버시'],
    description: `
      <p>데이터 정화는 문서에서 숨겨진 데이터와 민감할 수 있는 정보를 말끔히 지웁니다. 메타데이터, 포함된 스크립트, 첨부물, 주석 등 눈에 보이지 않는 요소들을 제거합니다.</p>
      <p>문서를 대중에 공개하거나 공유하기 전 프라이버시 보호를 위해 반드시 필요한 단계입니다.</p>
      <p>모든 정화 작업은 브라우저에서 로컬로 진행되어 안전합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '삭제 항목 선택', description: '삭제할 숨겨진 데이터 유형을 선택합니다.' },
      { step: 3, title: '정화 및 다운로드', description: '정화를 클릭하여 문서를 깨끗이 비우고 다운로드합니다.' },
    ],
    useCases: [
      { title: '공개 배포', description: '정부나 민간에 문서를 공개하기 전 정보를 정리합니다.', icon: 'globe' },
      { title: '개인정보 보호', description: '공유 전 불필요하게 포함된 개인 식별 정보를 지웁니다.', icon: 'shield' },
      { title: '보안 규정 준수', description: '민감 데이터 취급 가이드라인에 맞춰 문서를 처리합니다.', icon: 'check-circle' },
    ],
    faq: [
      { question: '어떤 숨은 정보가 지워지나요?', answer: '메타데이터, 스크립트, 첨부파일, 주석, 양식 데이터, 숨겨진 레이어 등이 삭제됩니다.' },
      { question: '눈에 보이는 내용도 바뀌나요?', answer: '아니요, 오직 숨겨진 데이터만 삭제되며 문서의 시각적 내용은 유지됩니다.' },
      { question: '복구가 가능한가요?', answer: '아니요, 삭제된 정보는 복구할 수 없습니다. 원본 파일은 따로 보관하세요.' },
    ],
  },

  'flatten-pdf': {
    title: 'PDF 평면화',
    metaDescription: 'PDF 양식과 주석을 평면화합니다. 콘텐츠를 수정 불가능하게 만드세요.',
    keywords: ['pdf 평면화', '양식 고정', '주석 병합', '수정 불가 pdf'],
    description: `
      <p>PDF 평면화는 양식 필드나 주석 같은 대화형 요소를 정적인 일반 콘텐츠로 변환합니다. 평면화된 PDF는 모양은 같지만 더 이상 입력하거나 편집할 수 없습니다.</p>
      <p>입력 완료된 양식을 확정하거나, 주석을 포함한 상태로 배포할 때, 또는 수정 금지 버전이 필요할 때 완벽합니다.</p>
      <p>모든 처리는 브라우저에서 로컬로 이루어지므로 안전합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '양식이나 주석이 포함된 PDF를 선택합니다.' },
      { step: 2, title: '평면화 대상 선택', description: '양식만, 주석만, 혹은 둘 다 고정할지 선택합니다.' },
      { step: 3, title: '평면화 및 다운로드', description: '평면화를 클릭하여 고정된 PDF를 생성합니다.' },
    ],
    useCases: [
      { title: '양식 최종 확정', description: '작성 완료된 폼 데이터를 고정하여 변경을 방지합니다.', icon: 'lock' },
      { title: '주석 보존', description: '작성된 주석을 문서의 영구적인 일부로 만듭니다.', icon: 'check-circle' },
      { title: '아카이브 생성', description: '보관을 위해 수정 불가능한 아카이브 버전을 만듭니다.', icon: 'archive' },
    ],
    faq: [
      { question: '다시 되돌릴 수 있나요?', answer: '아니요, 평면화 작업은 영구적입니다. 원본 파일을 백업해 두세요.' },
      { question: '보이는 모습이 바뀌나요?', answer: '아니요, 문서의 모습은 그대로 유지되지만 더 이상 대화형(클릭 등)이 아니게 됩니다.' },
      { question: '파일 크기가 줄어드나요?', answer: '일반적으로 복잡한 대화형 요소가 단순화되어 파일 용량이 소폭 감소합니다.' },
    ],
  },

  'remove-metadata': {
    title: '메타데이터 제거',
    metaDescription: 'PDF 파일에서 메타데이터를 제거합니다. 작성자, 날짜 및 문서 속성을 지우세요.',
    keywords: ['pdf 메타데이터 삭제', '정보 제거', '익명 pdf', '문서 프라이버시'],
    description: `
      <p>메타데이터 제거는 PDF 파일의 모든 문서 속성과 메타데이터를 삭제합니다. 작성자 이름, 생성 날짜, 소프트웨어 정보 및 기타 식별 가능한 데이터를 없앱니다.</p>
      <p>문서를 익명으로 공유하거나 메타데이터를 통해 민감한 정보가 노출되는 것을 방지하기 위해 필수적입니다.</p>
      <p>모든 프로세스는 브라우저 내에서 로컬로 안전하게 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '메타데이터를 지울 PDF 파일을 선택합니다.' },
      { step: 2, title: '제거 실행', description: '버튼을 클릭하여 모든 식별 정보를 제거합니다.' },
      { step: 3, title: '다운로드', description: '익명화된 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '익명 공유', description: '작성자 정보 없이 문서를 공개적으로 공유합니다.', icon: 'user-x' },
      { title: '프라이버시 보호', description: '공유 전 문서에 남아있는 개인 정보를 지웁니다.', icon: 'shield' },
      { title: '기업 보안', description: '내부용 소프트웨어 정보 등이 외부에 노출되는 것을 막습니다.', icon: 'eye-off' },
    ],
    faq: [
      { question: '어떤 정보가 지워지나요?', answer: '제목, 작성자, 작성일, 수정일, 작성 프로그램 정보 등이 모두 지워집니다.' },
      { question: '문서 내용도 변하나요?', answer: '아니요, 페지 내의 글자나 이미지는 전혀 수정되지 않습니다.' },
      { question: 'XMP 데이터도 지워지나요?', answer: '예, 문서 내부의 표준 및 XMP 메타데이터가 모두 삭제됩니다.' },
    ],
  },

  'change-permissions': {
    title: '권한 변경',
    metaDescription: 'PDF 권한을 수정합니다. 인쇄, 복사 및 편집 액세스를 제어하세요.',
    keywords: ['pdf 권한', 'pdf 액세스 변경', 'pdf 제한', 'pdf 보안'],
    description: `
      <p>권한 변경은 PDF 문서의 액세스 제어 설정을 수정합니다. 인쇄, 복사, 편집 및 주석 달기 권한을 활성화하거나 비활성화할 수 있습니다.</p>
      <p>이러한 제한을 적용하려면 소유자 비밀번호를 설정하세요. 수신자는 문서를 볼 수는 있지만 허용된 작업으로 활동이 제한됩니다.</p>
      <p>모든 처리는 브라우저에서 로컬로 진행되어 문서의 보안을 유지합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF 파일을 드래그 앤 드롭하거나 클릭하여 선택합니다.' },
      { step: 2, title: '권한 설정', description: '인쇄, 복사, 편집 및 주석 권한의 허용 여부를 선택합니다.' },
      { step: 3, title: '적용 및 다운로드', description: '소유자 비밀번호를 설정하고 제한된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '복사 방지', description: '콘텐츠 보호를 위해 텍스트 복사 기능을 끕니다.', icon: 'copy' },
      { title: '인쇄 제어', description: '문서 인쇄 가능 여부를 제한하거나 허용합니다.', icon: 'printer' },
      { title: '편집 제한', description: '문서 내용이 수정되는 것을 방지합니다.', icon: 'edit-3' },
    ],
    faq: [
      { question: '비밀번호가 꼭 필요한가요?', answer: '권한 제한을 강제하려면 소유자 비밀번호(Owner Password)를 설정해야 합니다.' },
      { question: '나중에 제한을 풀 수 있나요?', answer: '예, 설정한 소유자 비밀번호를 사용하거나 ‘제한 제거’ 도구를 통해 해제할 수 있습니다.' },
      { question: '모든 PDF 리더에서 작동하나요?', answer: '대부분의 표준 PDF 리더는 권한 설정을 준수하지만, 일부 뷰어에서는 강제되지 않을 수도 있습니다.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF 소책자 만들기',
    metaDescription: '인쇄용 PDF 소책자 레이아웃을 생성합니다. 접어서 만드는 안장 스테이플러 제본용으로 페이지를 배치하세요.',
    keywords: ['pdf 소책자', '북클릿 제작', '소책자 인쇄', '중정 제본', '페이지 임포지션'],
    description: `
      <p>PDF 소책자 만들기는 일반 PDF 페이지를 인쇄 후 접어서 바로 책자로 만들 수 있는 레이아웃으로 재배치합니다. 브로슈어, 소잡지(진), 매뉴얼 제작에 적합합니다.</p>
      <p>다양한 그리드 모드(1x2, 2x2, 2x4, 4x4), 용지 크기 및 방향 옵션을 제공합니다. 도구가 접었을 때 순서가 맞도록 페이지 배치(임포지션)를 자동으로 계산합니다.</p>
      <p>모든 보안 처리는 브라우저 내부에서 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '소책자로 만들고 싶은 PDF 문서를 업로드합니다.' },
      { step: 2, title: '레이아웃 선택', description: '그리드 모드, 용지 크기, 방향 및 회전 옵션을 선택합니다.' },
      { step: 3, title: '생성 및 다운로드', description: '소책자 레이아웃을 생성하고 인쇄용 파일을 다운로드합니다.' },
    ],
    useCases: [
      { title: '브로슈어 제작', description: '표준 PDF로 바로 접어 쓸 수 있는 브로슈어를 만듭니다.', icon: 'book-open' },
      { title: '독립 출판(진/Zines)', description: '올바른 페이지 순서로 독립 출판물을 제작합니다.', icon: 'book' },
      { title: '행사 안내서', description: '행사용 전문 안내 책자를 간편하게 인쇄합니다.', icon: 'calendar' },
    ],
    faq: [
      { question: '중정(Saddle-stitch) 제본이 무엇인가요?', answer: '겹쳐진 종이 가운데를 스테이플러로 찍어 만드는 가장 일반적인 제본 방식입니다.' },
      { question: '어떤 그리드 모드를 써야 하나요?', answer: '일반적인 소책자는 1x2를 사용합니다. 2x2 이상은 종이 절약을 위해 한 장에 여러 벌을 인쇄할 때 씁니다.' },
      { question: '결과물을 미리 볼 수 있나요?', answer: '예, 파일을 생성하기 전에 시각적인 미리보기를 제공합니다.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ를 PDF로',
    metaDescription: '만화책 아카이브(CBZ)를 PDF로 변환합니다. 이미지 순서와 화질을 그대로 유지하세요.',
    keywords: ['cbz를 pdf로', '만화를 pdf로', 'cbz 변환', '코믹북 변환기', '만화책 변환'],
    description: `
      <p>CBZ를 PDF로는 만화책 아카이브 파일을 PDF 문서로 바꿔줍니다. CBZ 내의 모든 이미지를 추출하여 읽기 순서에 맞게 고품질 PDF로 컴파일합니다.</p>
      <p>원본 이미지 크기 또는 표준적인 만화책 판형 등 다양한 페이지 크기 옵션을 제공합니다. CBZ를 지원하지 않는 기기에서 만화를 볼 때 완벽한 해법입니다.</p>
      <p>모든 변환 작업은 브라우저에서 로컬로 진행되어 개인 정보가 보호됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'CBZ 파일 업로드', description: '.cbz 확장자의 만화책 파일을 선택합니다.' },
      { step: 2, title: '페이지 설정', description: '원본 크기를 유지하거나 특정 용지 크기에 맞출지 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '이미지들이 결합된 PDF를 생성하고 다운로드합니다.' },
    ],
    useCases: [
      { title: '전자책 리더 사용', description: 'CBZ를 지원하지 않는 Kindle 등에서 전자책을 보기 위해 변환합니다.', icon: 'tablet' },
      { title: '아카이브 통합', description: '여러 만화 파일을 표준적인 PDF 형식으로 통합 관리합니다.', icon: 'archive' },
      { title: '공유 용이성', description: '별도의 뷰어 없이도 어디서나 볼 수 있는 PDF로 공유합니다.', icon: 'share-2' },
    ],
    faq: [
      { question: '이미지 화질이 나빠지나요?', answer: '아니요, 원본 이미지의 해상도를 최대한 유지하며 PDF로 래핑합니다.' },
      { question: '비밀번호가 걸린 CBZ도 되나요?', answer: '표준적인 ZIP 기반 CBZ는 지원하나, 특수한 암호화가 적용된 경우는 제한될 수 있습니다.' },
      { question: '파일 용량이 너무 커지지 않나요?', answer: '이미지를 재압축하지 않으므로 용량은 원본 CBZ와 비슷합니다.' },
    ],
  },

  'font-to-outline': {
    title: '폰트를 외곽선으로',
    metaDescription: 'PDF의 폰트 의존성을 제거하기 위해 각 페이지를 이미지화합니다. 모든 환경에서 완벽한 호환을 보장하세요.',
    keywords: ['폰트를 외곽선으로', '폰트 윤곽선', '폰트 제거', '폰트 호환성', 'pdf 폰트 평면화'],
    description: `
      <p>폰트를 외곽선으로는 각 페이지를 고품질 이미지 콘텐츠로 변환하여 폰트 의존성을 완전히 없앱니다. 해당 폰트가 설치되지 않은 어떤 시스템에서도 문서가 똑같이 보이도록 보장합니다.</p>
      <p>선택한 DPI(150-600)로 페이지를 다시 그려 시각적 모습을 유지하면서 내부 폰트 데이터는 제거합니다. 필요할 경우 검색 가능 레이어를 추가하여 텍스트 검색 기능을 유지할 수 있습니다.</p>
      <p>상업 인쇄 준비, 교차 플랫폼 공유, 폰트 라이선스 문제 회피 등에 필수적입니다. 모든 작업은 브라우저에서 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '폰트를 제거하고 싶은 PDF 파일을 업로드합니다.' },
      { step: 2, title: '품질 설정', description: 'DPI(인쇄용 300, 화면용 150 추천)를 선택하고 검색 기능 유지 여부를 결정합니다.' },
      { step: 3, title: '변환 및 다운로드', description: '처리를 완료하고 폰트로부터 자유로운 PDF를 저장합니다.' },
    ],
    useCases: [
      { title: '상업 인쇄 준비', description: '인쇄소에서 폰트 문제로 출력 사고가 나는 것을 방지합니다.', icon: 'printer' },
      { title: '완벽한 레이아웃 공유', description: '받는 사람의 기기에 상관없이 디자인이 틀어지지 않게 공유합니다.', icon: 'share-2' },
      { title: '라이선스 보호', description: '폰트 데이터를 제거하여 배포 시 발생할 수 있는 저작권 이슈를 피합니다.', icon: 'shield' },
    ],
    faq: [
      { question: '어떻게 작동하나요?', answer: '페이지를 고해상도로 렌더링한 뒤 이를 바탕으로 PDF를 재생성하여 폰트 종속성을 끊어냅니다.' },
      { question: '텍스트 선택이 계속 가능한가요?', answer: '기본적으로는 불가능해집니다. 하지만 "검색 가능한 텍스트 유지" 옵션을 켜면 투명 텍스트 레이어가 추가됩니다.' },
      { question: 'DPI는 얼마가 적당한가요?', answer: '인쇄용은 300, 단순 열람용은 150이 적당합니다. 600은 고품질이지만 용량이 매우 커집니다.' },
      { question: '파일 용량이 커지나요?', answer: 'DPI 설정에 따라 다릅니다. 150은 보통 줄어들고, 300 이상은 커질 수 있습니다. 자동 압축이 적용됩니다.' },
      { question: '되돌릴 수 있나요?', answer: '아니요, 실제 폰트 데이터는 사라집니다. 편집용 원본 파일은 반드시 따로 보관하세요.' },
    ],
  },

  'extract-tables': {
    title: 'PDF에서 표 추출',
    metaDescription: 'PDF 문서 내의 표 데이터를 감지하여 추출합니다. JSON, Markdown 또는 CSV 형식으로 내보내세요.',
    keywords: ['pdf 표 추출', 'pdf 표 감지', 'pdf를 csv로', 'pdf를 excel로', '표 데이터 뽑기'],
    description: `
      <p>PDF에서 표 추출은 문서 내의 표 데이터를 찾아내어 구조화된 형식으로 내보냅니다. 데이터 분석용 JSON, 문서화용 마크다운, 또는 엑셀용 CSV 중 선택할 수 있습니다.</p>
      <p>지능형 감지 알고리즘을 사용하여 복잡한 문서 내에서도 표 구조를 식별합니다. 특정 페이지 범위를 지정하거나 감지 임계값을 조절하여 결과를 최적화할 수 있습니다.</p>
      <p>모든 데이터 처리는 브라우저에서 로컬로 수행되어 보안이 유지됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '표가 들어있는 PDF 파일을 선택합니다.' },
      { step: 2, title: '감지 설정', description: '페이지 범위와 감지에 필요한 최소 행/열 기준을 설정합니다.' },
      { step: 3, title: '내보내기 및 다운로드', description: '원하는 형식(JSON/Markdown/CSV)을 골라 저장합니다.' },
    ],
    useCases: [
      { title: '데이터 분석', description: 'PDF에 고정된 데이터를 엑셀이나 DB로 옮겨 추가 분석을 수행합니다.', icon: 'bar-chart' },
      { title: '콘텐츠 아카이브', description: '보고서의 표 데이터를 시스템에 입력하기 좋은 형태로 수집합니다.', icon: 'database' },
      { title: '문서 변환', description: 'PDF 표를 마크다운 문서나 블로그 등에 활용하기 쉽게 변환합니다.', icon: 'list' },
    ],
    faq: [
      { question: '어떤 형식이 가장 좋나요?', answer: '데이터 연동은 JSON, 엑셀은 CSV, 문서 작성은 마크다운을 추천합니다.' },
      { question: '표가 잘 안 잡히면 어떡하죠?', answer: '감지 임계값(Thresholds) 설정을 조절하면 더 세밀하게 표를 찾아낼 수도 있습니다.' },
      { question: '이미지 내의 표도 되나요?', answer: '글자 정보가 없는 이미지는 먼저 OCR 도구를 거쳐야 데이터 추출이 가능합니다.' },
    ],
  },

  'ocg-manager': {
    title: 'OCG 레이어 관리자',
    metaDescription: 'PDF 내의 OCG(Optional Content Groups) 또는 레이어를 관리합니다. 레이어의 가시성, 잠금 상태 및 이름을 수정하세요.',
    keywords: ['pdf 레이어', 'ocg 관리', 'pdf 레이어 편집', '레이어 가시성', 'optional content groups'],
    description: `
      <p>OCG 레이어 관리자는 PDF 문서 내부의 레이어(Optional Content Groups)를 제어할 수 있게 해줍니다. 설계도나 다국어 문서처럼 여러 레이어가 겹쳐진 파일에서 특정 레이어만 켜거나 끌 수 있습니다.</p>
      <p>레이어의 이름을 변경하거나 가시성 상태를 고정하여 문서를 배포할 때 원하는 모습으로 보이게 할 수 있습니다.</p>
      <p>모든 작업은 브라우저에서 안전하게 로컬로 진행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '레이어가 포함된 PDF 파일을 선택합니다.' },
      { step: 2, title: '레이어 수정', description: '각 레이어의 가시성을 설정하거나 이름을 변경합니다.' },
      { step: 3, title: '저장 및 다운로드', description: '수정된 레이어 설정이 적용된 PDF를 다운로드합니다.' },
    ],
    useCases: [
      { title: '설계도 관리', description: 'CAD 등에서 생성된 PDF의 특정 도면 층만 표시합니다.', icon: 'layers' },
      { title: '다국어 버전 배포', description: '언어별 레이어가 있는 문서에서 특정 언어만 활성화하여 내보냅니다.', icon: 'globe' },
      { title: '검토용 레이어 제어', description: '주석이나 보조 데이터가 포함된 레이어를 제어합니다.', icon: 'eye' },
    ],
    faq: [
      { question: '모든 PDF에 레이어가 있나요?', answer: '아니요, CAD 프로그램이나 일러스트레이터 등 레이어를 지원하는 소프트웨어에서 생성된 파일에만 존재합니다.' },
      { question: '레이어를 병합할 수 있나요?', answer: '현재 도구는 가시성과 속성 관리에 집중하며, 레이어 병합은 별도의 ‘평면화’ 도구를 사용해 주세요.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF 뷰어 및 리더',
    metaDescription: '온라인에서 PDF를 즉시 열어보고 읽으세요. 다운로드 없이 브라우저에서 바로 확인 가능합니다.',
    keywords: ['pdf 뷰어', 'pdf 읽기', '온라인 pdf 리더', '무료 pdf 뷰어'],
    description: `
      <p>PDF 뷰어는 복잡한 소프트웨어 설치 없이 브라우저에서 즉시 PDF 파일을 열어볼 수 있는 편리한 도구입니다.</p>
      <p>페이지 확대/축소, 텍스트 검색, 페이지 이동 기능 등 독서에 필요한 핵심 기능을 제공합니다.</p>
    `,
    howToUse: [
      { step: 1, title: '파일 선택', description: '읽고 싶은 PDF 파일을 선택하거나 드래그하여 올립니다.' },
      { step: 2, title: '문서 읽기', description: '뷰어 기능을 사용하여 문서를 편리하게 탐색합니다.' },
    ],
    useCases: [
      { title: '빠른 문서 확인', description: '파일을 다운로드하거나 전문 프로그램을 켜지 않고 내용을 확인합니다.', icon: 'eye' },
      { title: '이동 중 열람', description: '어떤 기기에서든 브라우저만 있으면 PDF를 읽을 수 있습니다.', icon: 'smartphone' },
    ],
    faq: [
      { question: '암호화된 파일도 열리나요?', answer: '비밀번호를 알고 계신다면 입력 후 열람이 가능합니다.' },
      { question: '내용 수정도 가능한가요?', answer: '이 도구는 읽기 전용 뷰어입니다. 수정을 원하시면 ‘PDF 편집’ 도구를 이용해 주세요.' },
    ],
  },

  'pdf-workflow': {
    title: 'PDF 워크플로우 빌더',
    metaDescription: '여러 PDF 작업을 하나의 워크플로우로 자동화하세요. 반복적인 작업을 체인으로 연결합니다.',
    keywords: ['pdf 자동화', 'pdf 워크플로우', 'pdf 일괄 처리', '작업 체인'],
    description: `
      <p>PDF 워크플로우 빌더는 여러 개의 PDF 처리 단계를 하나로 묶어 자동화해 줍니다. 예를 들어 'PDF 압축 -> 암호 설정 -> 메타데이터 제거'를 한 번의 클릭으로 수행할 수 있습니다.</p>
      <p>매번 같은 순서로 여러 도구를 거쳐야 하는 반복 업무의 효율을 극적으로 높여줍니다.</p>
    `,
    howToUse: [
      { step: 1, title: '작업 추가', description: '수행하고 싶은 작업들을 순서대로 목록에 추가합니다.' },
      { step: 2, title: '설정 구성', description: '각 단계별 세부 옵션(압축률, 비밀번호 등)을 설정합니다.' },
      { step: 3, title: '실행 및 결과물 확인', description: '워크플로우를 실행하고 최종 결과물을 받습니다.' },
    ],
    useCases: [
      { title: '반복 업무 자동화', description: '매일 하는 문서 전처리 과정을 자동화하여 시간을 아낍니다.', icon: 'zap' },
      { title: '표준 프로세스 구축', description: '팀 전체가 동일한 문서 처리 규격(예: 공통 워터마크 추가 등)을 따르게 합니다.', icon: 'settings' },
    ],
    faq: [
      { question: '작업 순서를 바꿀 수 있나요?', answer: '네, 드래그 앤 드롭으로 작업의 순서를 자유롭게 조정할 수 있습니다.' },
      { question: '중간 단계 파일을 받을 수 있나요?', answer: '최종 결과물만 제공하여 브라우저 리소스를 절약합니다.' },
    ],
  },

  'html-to-pdf': {
    title: 'HTML을 PDF로 변환',
    metaDescription: '웹페이지나 HTML 파일을 PDF 문서로 변환합니다. 웹 콘텐츠를 오프라인용 PDF로 저장하세요.',
    keywords: ['html pdf 변환', '웹페이지를 pdf로', 'html 파일 변환', '웹사이트 pdf 저장'],
    description: `
      <p>HTML을 PDF로는 HTML 파일이나 웹 콘텐츠를 완벽한 레이아웃의 PDF로 바꿔줍니다. CSS 스타일과 이미지를 유지하면서 웹페이지를 문서화할 때 사용하세요.</p>
      <p>개발자의 기술 문서 저장이나 블로거의 포스팅 아카이브용으로 적합합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'HTML 업로드', description: 'PDF로 바꾸고 싶은 .html 파일을 선택합니다.' },
      { step: 2, title: '스타일 설정', description: '용지 크기, 방향 등 인쇄 옵션을 선택합니다.' },
      { step: 3, title: 'PDF 생성', description: '변환된 PDF를 즉시 다운로드합니다.' },
    ],
    useCases: [
      { title: '기술 문서 저장', description: '브라우저에서 보던 기술 문서를 오프라인 열람용 PDF로 저장합니다.', icon: 'file-text' },
      { title: '웹 콘텐츠 영구 보존', description: '사라질 수 있는 웹페이지 내용을 PDF로 박제하여 보관합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '복잡한 레이아웃도 깨지지 않나요?', answer: '표준적인 HTML/CSS는 잘 유지되지만, 동적 자바스크립트 실행이 필요한 페이지는 일부 차이가 있을 수 있습니다.' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF를 HTML로 변환',
    metaDescription: 'PDF 문서를 웹에서 보기 좋은 HTML 형식으로 변환합니다. 문서 내용을 웹사이트에 바로 활용하세요.',
    keywords: ['pdf html 변환', 'pdf를 웹으로', 'pdf를 html 파일로', 'pdf 웹 추출'],
    description: `
      <p>PDF를 HTML로는 PDF 문서의 내용을 웹 친화적인 HTML 코드로 변환해 줍니다. 텍스트와 구조를 유지하여 웹페이지에 내용을 바로 게시하고 싶을 때 유용합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'HTML로 추출하고 싶은 PDF를 선택합니다.' },
      { step: 2, title: '변환 시작', description: '구조 분석을 거쳐 웹 표준 태그로 변환합니다.' },
      { step: 3, title: 'HTML 저장', description: '생성된 HTML 코드를 다운로드합니다.' },
    ],
    useCases: [
      { title: '웹 포스팅', description: 'PDF 보고서 내용을 블로그나 사내 웹사이트에 쉽게 옮깁니다.', icon: 'layout' },
      { title: '데이터 재활용', description: 'PDF 내의 텍스트와 구조를 웹 프로젝트에서 활용합니다.', icon: 'code' },
    ],
    faq: [
      { question: '이미지도 같이 저장되나요?', answer: '예, 인라인 이미지 또는 별도의 자산으로 함께 변환을 시도합니다.' },
    ],
  },

  'pdf-to-heic': {
    title: 'PDF를 HEIC로 변환',
    metaDescription: 'PDF 페이지를 Apple의 고효율 이미지 형식(HEIC)으로 변환합니다. 파일 크기를 작게 유지하면서 품질을 보존하세요.',
    keywords: ['pdf heic 변환', 'pdf를 heic로', 'pdf 이미지 추출', 'heic 변환기'],
    description: `
      <p>PDF를 HEIC로는 PDF 페이지를 Apple 기기에서 널리 쓰이는 고효율 이미지 포맷인 HEIC로 바꿔줍니다. JPEG보다 적은 용량으로 고품질 이미지를 유지할 수 있습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'HEIC로 바꿀 PDF 파일을 선택합니다.' },
      { step: 2, title: '이미지 설정', description: '품질과 해상도를 선택합니다.' },
      { step: 3, title: 'HEIC 다운로드', description: '변환된 고효율 이미지 파일을 저장합니다.' },
    ],
    useCases: [
      { title: 'Apple 기기 저장', description: 'iPhone이나 Mac에서 사진 라이브러리에 보관하기 좋은 형식으로 변환합니다.', icon: 'smartphone' },
      { title: '저장 공간 절약', description: '품질 저하 없이 이미지 파일의 용량을 최소화합니다.', icon: 'database' },
    ],
    faq: [
      { question: 'HEIC가 무엇인가요?', answer: '고효율 이미지 파일 형식(High Efficiency Image Coding)으로, 적은 용량에도 고화질을 유지하는 현대적인 포맷입니다.' },
    ],
  },

  'pdf-to-psd': {
    title: 'PDF를 PSD로 변환',
    metaDescription: 'PDF 페이지를 Adobe Photoshop(PSD) 레이어로 변환합니다. 디자인 작업을 위해 다시 가져오세요.',
    keywords: ['pdf psd 변환', 'pdf를 포토샵으로', 'pdf 레이어 추출', 'psd 변환기'],
    description: `
      <p>PDF를 PSD로는 PDF 문서를 Adobe Photoshop용 다중 레이어 PSD 파일로 변환합니다. 각 요소나 페이지를 레이어로 분리하여 디자인 수정이 용이하게 돕습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PSD로 바꿀 PDF 문서를 선택합니다.' },
      { step: 2, title: '레이어 옵션', description: '페이지별 레이어 구성 방식을 선택합니다.' },
      { step: 3, title: 'PSD 다운로드', description: 'Photoshop에서 열 수 있는 파일을 내보냅니다.' },
    ],
    useCases: [
      { title: '그래픽 디자인 수정', description: 'PDF로 된 시안을 포토샵으로 가져와 세부 디자인을 수정합니다.', icon: 'palette' },
      { title: '이미지 자산 추출', description: 'PDF 내의 고해상도 이미지를 포토샵 레이어로 확보합니다.', icon: 'image' },
    ],
    faq: [
      { question: '완벽한 레이어 분리가 되나요?', answer: '벡터 데이터는 가급적 유지하지만, 래스터화된 내용은 평면 이미지 레이어로 들어옵니다.' },
    ],
  },

  'pdf-to-xps': {
    title: 'PDF를 XPS로 변환',
    metaDescription: 'PDF를 Microsoft XPS 형식으로 변환합니다. Windows 환경에서의 인쇄 및 보관 호환성을 높이세요.',
    keywords: ['pdf xps 변환', 'pdf를 xps로', 'openxps 변환', 'windows 문서 변환'],
    description: `
      <p>PDF를 XPS로는 문서를 Windows의 기본 인쇄 및 보관 규격인 XPS(XML Paper Specification)로 변환해 줍니다. 윈도우 환경에서의 문서 충실도를 보장합니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'XPS로 바꿀 PDF 파일을 선택합니다.' },
      { step: 2, title: '변환 시작', description: 'XPS 규격에 맞춰 레이아웃을 재구성합니다.' },
      { step: 3, title: 'XPS 다운로드', description: 'Windows에서 열람 가능한 XPS 파일을 저장합니다.' },
    ],
    useCases: [
      { title: 'Windows 아카이빙', description: '사내 윈도우 인프라에 맞춘 표준 문서로 보관합니다.', icon: 'archive' },
      { title: '인쇄 호환성 확보', description: 'XPS 전용 인쇄 환경에서 문서를 출력할 때 사용합니다.', icon: 'printer' },
    ],
    faq: [
      { question: 'XPS와 OpenXPS의 차이는 무엇인가요?', answer: '둘 다 비슷하지만 OpenXPS가 더 최신의 국제 표준 규격입니다.' },
    ],
  },

  'pdf-to-rtf': {
    title: 'PDF를 RTF로 변환',
    metaDescription: 'PDF를 Rich Text Format(RTF)으로 변환합니다. 텍스트와 기본 서식을 유지하며 다양한 편집기에서 활용하세요.',
    keywords: ['pdf rtf 변환', 'pdf를 rtf로', '텍스트 추출', '리치 텍스트 변환'],
    description: `
      <p>PDF를 RTF로는 문서를 범용적인 리치 텍스트 포맷으로 바꿔줍니다. 워드패드나 구형 한글, MS 워드 등 거의 모든 워드프로세서와 호환됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '텍스트를 뽑을 PDF를 선택합니다.' },
      { step: 2, title: '서식 분석', description: '폰트 스타일과 정렬을 분석합니다.' },
      { step: 3, title: 'RTF 다운로드', description: '편집 가능한 RTF 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '간편한 재편집', description: '복잡한 기능 없이 텍스트 자체의 수정이 필요할 때 사용합니다.', icon: 'edit' },
      { title: '소프트웨어 호환', description: '최신 Word 형식을 지원하지 않는 도구에서 내용을 활용합니다.', icon: 'share' },
    ],
    faq: [
      { question: '이미지도 포함되나요?', answer: '예, RTF는 기본적인 이미지 포함을 지원하여 레이아웃을 일부 유지합니다.' },
    ],
  },

  'pdf-to-epub': {
    title: 'PDF를 EPUB로 변환',
    metaDescription: 'PDF를 EPUB 전자책으로 변환합니다. 모바일 기기와 e-리더에서 읽기 편한 리플로우 텍스트를 경험하세요.',
    keywords: ['pdf epub 변환', 'pdf를 전자책으로', 'pdf 킨들 변환', '이북 제작'],
    description: `
      <p>PDF를 EPUB로는 고정된 레이아웃의 PDF를 기기 화면 크기에 맞춰 글자 크기가 조절되는 리플로우(Reflowable) 전자책으로 바꿔줍니다. 스마트폰 독서에 최적입니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '전자책으로 만들 PDF를 선택합니다.' },
      { step: 2, title: '메타데이터 입력', description: '책 제목과 저자 정보를 입력합니다.' },
      { step: 3, title: 'EPUB 다운로드', description: 'e-리더로 전송할 EPUB 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '모바일 독서', description: 'PDF 책을 지하철 등에서 스마트폰으로 편하게 읽습니다.', icon: 'smartphone' },
      { title: '전자책 리더 사용', description: 'Kindle이나 Kobo 등 전용 기기에서 최적화된 화면으로 읽습니다.', icon: 'book' },
    ],
    faq: [
      { question: '표와 그림도 잘 나오나요?', answer: '리플로우 특성상 위치는 조금 바뀔 수 있지만, 이미지는 텍스트 흐름에 맞춰 삽입됩니다.' },
    ],
  },

  'pdf-to-mobi': {
    title: 'PDF를 MOBI로 변환',
    metaDescription: 'PDF를 MOBI 전자책으로 변환합니다. Kindle 기기에 최적화된 형식으로 문서를 읽으세요.',
    keywords: ['pdf mobi 변환', 'pdf를 킨들로', 'mobi 변환기', '킨들 이북'],
    description: `
      <p>PDF를 MOBI로는 Amazon Kindle 기기에서 가장 선호하는 포맷인 MOBI로 변환해 줍니다. 킨들의 네이티브 기능을 완벽하게 활용할 수 있습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '킨들에서 볼 PDF를 선택합니다.' },
      { step: 2, title: '정보 설정', description: '제목, 저자, 표지 이미지를 설정합니다.' },
      { step: 3, title: 'MOBI 다운로드', description: '킨들용 MOBI 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '킨들 독서', description: 'PDF 문서를 킨들 전용 포맷으로 소장하고 읽습니다.', icon: 'book-open' },
      { title: '구형 리더 지원', description: 'EPUB보다 MOBI를 선호하는 구형 전자책 단말기에서 사용합니다.', icon: 'history' },
    ],
    faq: [
      { question: '킨들에 넣는 법은요?', answer: 'USB 케이블 연결이나 아마존의 "Send to Kindle" 서비스를 이용하면 됩니다.' },
    ],
  },

  'pdf-to-djvu': {
    title: 'PDF를 DJVU로 변환',
    metaDescription: 'PDF를 DJVU 형식으로 변환합니다. 고해상도 스캔 문서의 용량을 획기적으로 줄이세요.',
    keywords: ['pdf djvu 변환', '스캔본 압축', 'djvu 변환기', '고효율 문서 저장'],
    description: `
      <p>PDF를 DJVU로는 스캔된 문서에 특화된 고효율 압축 포맷인 DjVu로 바꿔줍니다. 고화질 컬러 페이지를 선명하게 유지하면서도 용량은 크게 줄여줍니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '압축이 필요한 스캔 PDF를 선택합니다.' },
      { step: 2, title: '품질 선택', description: '압축률과 해상도 레벨을 고릅니다.' },
      { step: 3, title: 'DJVU 다운로드', description: '용량이 줄어든 아카이브용 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '디지털 도서관 구축', description: '대량의 스캔 도서 데이터를 적은 용량으로 관리합니다.', icon: 'library' },
      { title: '역사 자료 보관', description: '희귀 스캔 자료를 고화질로 영구 보존합니다.', icon: 'archive' },
    ],
    faq: [
      { question: 'DJVU가 PDF보다 좋나요?', answer: '스캔된 이미지 문서의 경우 PDF보다 5~10배 더 높은 압축률을 보여주는 경우가 많습니다.' },
    ],
  },

  'pdf-to-fb2': {
    title: 'PDF를 FB2로 변환',
    metaDescription: 'PDF를 FictionBook(FB2)으로 변환합니다. 구조화된 XML 기반의 전자책 형식을 활용하세요.',
    keywords: ['pdf fb2 변환', '이북 텍스트 추출', '구조화된 전자책', 'fb2 변환기'],
    description: `
      <p>PDF를 FB2로는 문서를 FictionBook(XML) 형식으로 변환합니다. 텍스트의 구조와 의미를 보존하여 다양한 읽기 앱에서 사용자 정의 스타일로 읽기 좋습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '변환할 PDF 파일을 선택합니다.' },
      { step: 2, title: '책 정보 확인', description: '장르, 작가, 제목 등 정보를 검토합니다.' },
      { step: 3, title: 'FB2 다운로드', description: '구조화된 전자책 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '오픈 포맷 소장', description: '완벽하게 구조화된 XML 기반 이북 라이브러리를 구축합니다.', icon: 'unlock' },
      { title: '독서 앱 커스텀', description: '텍스트 레이아웃을 마음대로 바꿀 수 있는 FB2 앱에서 사용합니다.', icon: 'settings' },
    ],
    faq: [
      { question: 'FB2의 장점은요?', answer: '문서의 외형 대신 구조를 정의하므로, 읽는 사람이 폰트나 배경색 등을 자유롭게 정하기 매우 편합니다.' },
    ],
  },

  'pdf-to-email': {
    title: 'PDF를 이메일(EML)로 변환',
    metaDescription: 'PDF를 이메일(EML) 파일로 변환합니다. 문서 내용을 이메일 본문과 첨부파일로 즉시 구성하세요.',
    keywords: ['pdf 이메일 변환', 'pdf를 eml로', '메일 초안 작성', 'pdf 본문 추출'],
    description: `
      <p>PDF를 이메일로는 PDF 내용을 이메일 초안 파일(.eml)로 만들어 줍니다. 텍스트는 본문으로, 이미지는 본문 내 삽입되거나 첨부파일로 구성됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '메일로 만들 PDF를 선택합니다.' },
      { step: 2, title: '초안 설정', description: '기본 제목과 발신 정보를 입력합니다.' },
      { step: 3, title: 'EML 다운로드', description: '아웃룩이나 메일 앱에서 열 수 있는 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '뉴스레터 발송 준비', description: 'PDF로 만든 소식지를 이메일 본문으로 쉽게 옮깁니다.', icon: 'mail' },
      { title: '보고 내역 공유', description: '보고서 내용을 별도의 복사/붙여넣기 없이 이메일로 바로 구성합니다.', icon: 'send' },
    ],
    faq: [
      { question: '어떤 메일 앱에서 열리나요?', answer: 'Outlook, Apple Mail, Gmail 등 EML 형식을 지원하는 거의 모든 클라이언트에서 열립니다.' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF를 CBZ로 변환',
    metaDescription: 'PDF 문서를 CBZ 만화책 아카이브로 변환합니다. 페이지를 이미지화하여 만화 뷰어에서 감상하세요.',
    keywords: ['pdf cbz 변환', '문서를 만화로', '이미지 아카이브 생성', 'cbz 변환기'],
    description: `
      <p>PDF를 CBZ로는 문서를 만화책 아카이브인 CBZ 형식으로 바꿔줍니다. 각 페이지를 고화질 이미지로 렌더링한 후 ZIP으로 묶어 내보냅니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '이미지화할 PDF 문서를 선택합니다.' },
      { step: 2, title: '이미지 설정', description: 'JPG 또는 PNG 포맷과 화질을 선택합니다.' },
      { step: 3, title: 'CBZ 다운로드', description: '만화 전용 뷰어에서 읽을 파일을 저장합니다.' },
    ],
    useCases: [
      { title: '만화 뷰어 활용', description: '이미지 감상에 최적화된 앱에서 PDF 내용을 부드럽게 넘겨봅니다.', icon: 'image' },
      { title: '이미지 자산 패키징', description: '전체 페이지를 깔끔하게 정렬된 이미지 꾸러미로 확보합니다.', icon: 'package' },
    ],
    faq: [
      { question: 'JPG와 PNG 중 무엇이 좋나요?', answer: '용량 절약은 JPG, 최대 화질과 투명도 유지는 PNG를 추천합니다.' },
    ],
  },

  'rasterize-pdf': {
    title: 'PDF 래스터화 (이미지로 변환)',
    metaDescription: 'PDF 페이지를 고품질 이미지로 변환합니다. PNG, JPEG 또는 WebP 형식으로 내보내세요.',
    keywords: ['pdf 래스터화', 'pdf를 이미지로', 'pdf를 png로', 'pdf를 jpeg로', 'pdf 페이지 변환'],
    description: `
      <p>PDF 래스터화는 PDF 페이지를 고해상도 비트맵 이미지로 변환합니다. PNG, JPEG, WebP 형식 중 선택할 수 있으며 DPI 및 품질을 자유롭게 조정할 수 있습니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: '이미지화할 PDF 문서를 선택합니다.' },
      { step: 2, title: '이미지 설정', description: '출력 형식, DPI 및 화질 설정을 선택합니다.' },
      { step: 3, title: '이미지 다운로드', description: '변환된 이미지 파일을 개별적으로 또는 ZIP으로 압축하여 저장합니다.' },
    ],
    useCases: [
      { title: '웹 표시용 이미지', description: '웹사이트나 소셜 미디어에 PDF 페이지를 이미지로 게시합니다.', icon: 'image' },
      { title: '문서 평면화', description: '텍스트를 이미지화하여 내용을 복사하거나 편집할 수 없도록 만듭니다.', icon: 'lock' },
      { title: '다른 앱으로 가져오기', description: 'PDF를 직접 지원하지 않는 그래픽 소프트웨어로 페이지를 가져옵니다.', icon: 'share' },
    ],
    faq: [
      { question: '어떤 형식이 가장 좋나요?', answer: '일반적인 경우 PNG(무손실) 또는 JPEG(용량 균형)를 권장합니다. 투명도가 필요하면 PNG를 선택하세요.' },
      { question: '고해상도 이미지가 필요한가요?', answer: '인쇄를 위해서는 300 DPI 이상을 선택하는 것이 좋습니다. 화면용은 150 DPI면 충분합니다.' },
    ],
  },

  'markdown-to-pdf': {
    title: '마크다운을 PDF로 변환',
    metaDescription: '마크다운(MD) 파일을 세련된 PDF 문서로 변환합니다. 문법 강조와 테마를 지원합니다.',
    keywords: ['마크다운 pdf 변환', 'md를 pdf로', '마크다운 문서 생성', 'md 변환기'],
    description: `
      <p>마크다운을 PDF로는 일반 텍스트 문법으로 작성된 마크다운 파일을 깔끔하게 디자인된 PDF로 바꿔줍니다. 코드 블록 색상 강조와 가독성 높은 테마를 기본 제공합니다.</p>
    `,
    howToUse: [
      { step: 1, title: '마크다운 업로드', description: '변환할 .md 파일을 선택하거나 텍스트를 붙여넣습니다.' },
      { step: 2, title: '테마 선택', description: '문서에 어울리는 스타일링 테마를 선택합니다.' },
      { step: 3, title: 'PDF 생성', description: '세련된 디자인의 PDF를 즉시 다운로드합니다.' },
    ],
    useCases: [
      { title: '기술 매뉴얼 작성', description: '문법 강조가 적용된 깔끔한 개발 문서를 배포합니다.', icon: 'file-text' },
      { title: '블로그 글 저장', description: '작성한 글을 아카이브용 PDF로 남겨둡니다.', icon: 'archive' },
    ],
    faq: [
      { question: '수식(LaTeX)도 지원되나요?', answer: '네, 표준적인 수식 표현을 지원하여 학술 문서 제작에 이상적입니다.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF를 PDF/A로',
    metaDescription: 'PDF를 장기 보관용 PDF/A 형식으로 변환합니다. ISO 표준을 준수하여 영구 보존을 보장하세요.',
    keywords: ['pdf를 pdfa로', 'pdfa 변환기', '아카이브용 pdf', 'pdf 장기 보관', '표준 보관 문서'],
    description: `
      <p>PDF를 PDF/A로는 문서를 장기 보관을 위한 ISO 표준 형식인 PDF/A로 변환합니다. PDF/A는 수십 년이 지난 후에도 문서를 정확히 재현할 수 있도록 보장합니다.</p>
      <p>PDF/A-1b, PDF/A-2b(권장), PDF/A-3b 중 선택할 수 있습니다. 도구가 필요한 폰트를 임베드하고 투명도를 평면화하여 규격을 맞춤니다.</p>
      <p>보안을 위해 모든 변환 프로세스는 브라우저에서 로컬로 실행됩니다.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF 업로드', description: 'PDF/A로 변환할 문서를 업로드합니다.' },
      { step: 2, title: '규격 선택', description: 'PDF/A-1b, 2b 또는 3b 레벨 중 하나를 선택합니다.' },
      { step: 3, title: '변환 및 다운로드', description: 'PDF/A로 변환한 뒤 완성된 아카이브 문서를 저장합니다.' },
    ],
    useCases: [
      { title: '법률 아카이브', description: '법적 증거 능력이 있는 장기 저장을 위해 문서를 PDF/A로 변환합니다.', icon: 'scale' },
      { title: '관공서 기록물', description: '정부의 공식 아카이브 요구 사항을 준수하기 위해 사용합니다.', icon: 'building' },
      { title: '비즈니스 보관', description: '중요한 사내 문서를 미래에도 열 수 있도록 변환합니다.', icon: 'archive' },
    ],
    faq: [
      { question: '어떤 PDF/A 레벨을 써야 하나요?', answer: '대부분의 경우 PDF/A-2b를 권장합니다. 호환성이 중요하면 1b, 다른 파일을 임베드해야 하면 3b를 쓰세요.' },
      { question: '일반 PDF와 무엇이 다른가요?', answer: 'PDF/A는 모든 리소스를 내장하고 암호화를 금지하여 자체 완결성을 갖춘 형식입니다.' },
    ],
  },
};
