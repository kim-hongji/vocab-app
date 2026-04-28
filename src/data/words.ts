export interface Word {
  english: string;
  pronunciation: string;
}

export interface WordGroup {
  id: number;
  meaning: string;
  words: Word[];
}

export const wordGroups: WordGroup[] = [
  {
    id: 1,
    meaning: "증오하다 / 혐오하다",
    words: [
      { english: "abhor", pronunciation: "앱호어 / 어브호어" },
      { english: "detest", pronunciation: "디테스트" },
      { english: "dislike", pronunciation: "디슬라이크" },
      { english: "hate", pronunciation: "헤이트" },
    ],
  },
  {
    id: 2,
    meaning: "혐오스러운",
    words: [
      { english: "abhorrent", pronunciation: "앱호런트 / 어브호런트" },
      { english: "detestable", pronunciation: "디테스터블" },
      { english: "disagreeable", pronunciation: "디스어그리어블" },
      { english: "disgusting", pronunciation: "디스거스팅" },
      { english: "odious", pronunciation: "오디어스" },
    ],
  },
  {
    id: 3,
    meaning: "경멸하다",
    words: [
      { english: "contemn", pronunciation: "컨템" },
      { english: "despise", pronunciation: "디스파이즈" },
      { english: "disdain", pronunciation: "디스데인" },
      { english: "look down on", pronunciation: "룩 다운 온" },
      { english: "scorn", pronunciation: "스콘 / 스코른" },
    ],
  },
  {
    id: 4,
    meaning: "비웃다 / 조롱하다",
    words: [
      { english: "deride", pronunciation: "디라이드" },
      { english: "jeer at", pronunciation: "지어 앳" },
      { english: "mock", pronunciation: "목 / 막" },
      { english: "tease", pronunciation: "티즈" },
    ],
  },
  {
    id: 5,
    meaning: "경멸하는",
    words: [
      { english: "contemptuous", pronunciation: "컨템프추어스" },
      { english: "disdainful", pronunciation: "디스데인풀" },
      { english: "scornful", pronunciation: "스콘풀 / 스코른풀" },
    ],
  },
  {
    id: 6,
    meaning: "얕보다 / 경시하다",
    words: [
      { english: "depreciate", pronunciation: "디프리시에이트" },
      { english: "minimize", pronunciation: "미니마이즈" },
    ],
  },
  {
    id: 7,
    meaning: "낮추다",
    words: [
      { english: "abase", pronunciation: "어베이스" },
      { english: "degrade", pronunciation: "디그레이드" },
    ],
  },
  {
    id: 8,
    meaning: "창피하게 하다",
    words: [
      { english: "chagrin", pronunciation: "셔그린 / 샤그린" },
      { english: "humiliate", pronunciation: "휴밀리에이트" },
    ],
  },
  {
    id: 9,
    meaning: "보편적인",
    words: [
      { english: "generic", pronunciation: "제네릭" },
      { english: "universal", pronunciation: "유니버설" },
    ],
  },
  {
    id: 10,
    meaning: "비판하다 / 비난하다",
    words: [
      { english: "accuse", pronunciation: "어큐즈" },
      { english: "blame", pronunciation: "블레임" },
      { english: "censure", pronunciation: "센셔" },
      { english: "condemn", pronunciation: "컨뎀" },
      { english: "criticize", pronunciation: "크리티사이즈" },
      { english: "denounce", pronunciation: "디나운스" },
    ],
  },
  {
    id: 11,
    meaning: "꾸짖다 / 질책하다",
    words: [
      { english: "rebuke", pronunciation: "리뷰크" },
      { english: "reprimand", pronunciation: "레프리맨드" },
      { english: "reproach", pronunciation: "리프로치" },
      { english: "scold", pronunciation: "스콜드" },
      { english: "upbraid", pronunciation: "업브레이드" },
    ],
  },
  {
    id: 12,
    meaning: "~탓으로 돌리다",
    words: [
      { english: "ascribe", pronunciation: "어스크라이브" },
      { english: "attribute", pronunciation: "어트리뷰트" },
    ],
  },
  {
    id: 13,
    meaning: "중상모략하다 / 헐뜯다",
    words: [
      { english: "asperse", pronunciation: "어스퍼스" },
      { english: "calumniate", pronunciation: "컬럼니에이트" },
      { english: "detract", pronunciation: "디트랙트" },
    ],
  },
  {
    id: 14,
    meaning: "화나게 하다",
    words: [
      { english: "aggravate", pronunciation: "애그라베이트" },
      { english: "annoy", pronunciation: "어노이" },
      { english: "exacerbate", pronunciation: "이그재서베이트" },
      { english: "incense", pronunciation: "인센스" },
      { english: "irritate", pronunciation: "이러테이트" },
      { english: "provoke", pronunciation: "프로보크" },
    ],
  },
  {
    id: 15,
    meaning: "분노 / 분개",
    words: [
      { english: "anger", pronunciation: "앵거" },
      { english: "fury", pronunciation: "퓨리" },
      { english: "indignation", pronunciation: "인디그네이션" },
      { english: "rage", pronunciation: "레이지" },
      { english: "wrath", pronunciation: "래스" },
    ],
  },
  {
    id: 16,
    meaning: "화를 잘 내는 / 신경질적인",
    words: [
      { english: "bilious", pronunciation: "빌리어스" },
      { english: "fretful", pronunciation: "프렛풀" },
      { english: "grouchy", pronunciation: "그라우치" },
      { english: "hot-tempered", pronunciation: "핫 템퍼드" },
      { english: "irritable", pronunciation: "이러터블" },
    ],
  },
  {
    id: 17,
    meaning: "적의 / 적대감",
    words: [
      { english: "animosity", pronunciation: "애너마서티" },
      { english: "antagonism", pronunciation: "앤태거니즘" },
      { english: "grudge", pronunciation: "그러지" },
      { english: "hatred", pronunciation: "헤이트리드" },
      { english: "hostility", pronunciation: "하스틸러티" },
    ],
  },
  {
    id: 18,
    meaning: "적",
    words: [
      { english: "adversary", pronunciation: "애드버세리" },
      { english: "antagonist", pronunciation: "앤태거니스트" },
      { english: "dissident", pronunciation: "디시던트" },
      { english: "enemy", pronunciation: "에너미" },
      { english: "opponent", pronunciation: "어포넌트" },
    ],
  },
  {
    id: 19,
    meaning: "공격하다",
    words: [
      { english: "assail", pronunciation: "어세일" },
      { english: "attack", pronunciation: "어택" },
      { english: "bombard", pronunciation: "밤바드" },
      { english: "charge", pronunciation: "차지" },
    ],
  },
  {
    id: 20,
    meaning: "둘러싸다 / 포위하다",
    words: [
      { english: "beset", pronunciation: "비셋" },
      { english: "encircle", pronunciation: "인서클" },
      { english: "enclose", pronunciation: "인클로즈" },
      { english: "surround", pronunciation: "서라운드" },
    ],
  },
  {
    id: 21,
    meaning: "침입하다",
    words: [
      { english: "encroach", pronunciation: "인크로치" },
      { english: "intrude", pronunciation: "인트루드" },
      { english: "invade", pronunciation: "인베이드" },
      { english: "trespass", pronunciation: "트레스패스" },
    ],
  },
  {
    id: 22,
    meaning: "무적인 / 난공불락의",
    words: [
      { english: "invincible", pronunciation: "인빈서블" },
      { english: "invulnerable", pronunciation: "인벌너러블" },
      { english: "matchless", pronunciation: "매치리스" },
      { english: "unparalleled", pronunciation: "언패럴렐드" },
    ],
  },
  {
    id: 23,
    meaning: "간섭하기 좋아하는",
    words: [
      { english: "intrusive", pronunciation: "인트루시브" },
      { english: "officious", pronunciation: "어피셔스" },
    ],
  },
  {
    id: 24,
    meaning: "복수 / 보복",
    words: [
      { english: "reprisal", pronunciation: "리프라이절" },
      { english: "revenge", pronunciation: "리벤지" },
      { english: "vengeance", pronunciation: "벤전스" },
    ],
  },
  {
    id: 25,
    meaning: "복수하다",
    words: [
      { english: "avenge", pronunciation: "어벤지" },
      { english: "get back on", pronunciation: "겟 백 온" },
      { english: "get even with", pronunciation: "겟 이븐 위드" },
      { english: "repay", pronunciation: "리페이" },
      { english: "revenge", pronunciation: "리벤지" },
    ],
  },
  {
    id: 26,
    meaning: "보상하다",
    words: [
      { english: "atone for", pronunciation: "어톤 포" },
      { english: "compensate", pronunciation: "컴펀세이트" },
      { english: "make up for", pronunciation: "메이크 업 포" },
      { english: "recompense", pronunciation: "레컴펜스" },
      { english: "reimburse", pronunciation: "리임버스" },
    ],
  },
  {
    id: 27,
    meaning: "반란 / 폭동",
    words: [
      { english: "coup", pronunciation: "쿠" },
      { english: "revolt", pronunciation: "리볼트" },
      { english: "revolution", pronunciation: "레볼루션" },
      { english: "riot", pronunciation: "라이엇" },
      { english: "uprising", pronunciation: "업라이징" },
    ],
  },
  {
    id: 28,
    meaning: "혼란 / 소동",
    words: [
      { english: "agitation", pronunciation: "애지테이션" },
      { english: "chaos", pronunciation: "케이오스" },
      { english: "commotion", pronunciation: "커모션" },
      { english: "confusion", pronunciation: "컨퓨전" },
      { english: "disturbance", pronunciation: "디스터번스" },
      { english: "upheaval", pronunciation: "업히벌" },
    ],
  },
  {
    id: 29,
    meaning: "선동하다 / 부추기다",
    words: [
      { english: "agitate", pronunciation: "애지테이트" },
      { english: "incite", pronunciation: "인사이트" },
      { english: "instigate", pronunciation: "인스티게이트" },
      { english: "stir up", pronunciation: "스터 업" },
    ],
  },
];

export function getAllWords() {
  return wordGroups.flatMap((group) =>
    group.words.map((word) => ({
      ...word,
      meaning: group.meaning,
      groupId: group.id,
    }))
  );
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
