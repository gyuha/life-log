---
title: "한국은 왜 자영업자가 많을까: 사장님 숫자보다 노동시장의 구조를 봐야 한다"
date: 2026-08-05T00:00:00+09:00
draft: false
categories:
  - 경제
tags:
  - 생산성
  - 은퇴설계
description: "한국의 높은 자영업 비중을 정의와 최신 통계부터 다시 확인하고, 압축성장·노동시장 이중구조·조기퇴직·연금 공백·서비스업 경쟁이 어떻게 생계형 창업으로 이어지는지 분석합니다."
---

한국의 골목에는 식당, 카페, 편의점, 미용실, 부동산처럼 작은 사업장이 촘촘하게 이어집니다. [지식 브런치의 영상](https://youtu.be/7-8qF4y5Glc?t=0)은 이 풍경에서 출발해 한국 취업자 다섯 명 중 한 명 이상이 자영업자이고, 미국·독일·일본보다 그 비중이 훨씬 높다고 설명합니다.

이 차이를 "한국인은 유난히 장사를 좋아한다"는 기질로 설명하기는 어렵습니다. 자영업은 더 큰 기회를 찾아 선택한 창업일 수도 있지만, 괜찮은 임금 일자리와 재취업 기회가 부족해 생계를 위해 고른 마지막 선택지일 수도 있기 때문입니다. [영상도 기회형과 생계형 자영업을 먼저 구분](https://youtu.be/7-8qF4y5Glc?t=75)한 뒤, 중요한 것은 사장님의 숫자보다 **왜 임금근로자가 아닌 자영업자가 되었는가** 라고 질문합니다.

2025년 국제 통계를 대입해도 영상의 출발점은 대체로 맞습니다. 다만 자영업률의 정의와 분모를 확인하지 않으면 숫자를 잘못 읽기 쉽습니다. 이 글에서는 최신 공식 자료로 수치를 교차 검증하고, 한국의 높은 자영업 비중을 노동시장·기업 생산성·은퇴소득의 연결 구조로 풀어보겠습니다.

<!--more-->

## Sources

- [YouTube - 한국은 왜 자영업자가 많고, 미국·유럽은 적을까?](https://youtu.be/7-8qF4y5Glc?si=3xqqV0Gg-JTuATt4)
- [OECD - Self-employment rate](https://www.oecd.org/en/data/indicators/self-employment-rate.html)
- [World Bank - Self-employed, total (% of total employment)](https://data.worldbank.org/indicator/SL.EMP.SELF.ZS)
- [국가데이터처 - 2025년 12월 및 연간 고용동향](https://www.kostat.go.kr/board.es?act=view&bid=210&list_no=443017&mid=a10301010000)
- [OECD - Economic Surveys: Korea 2024](https://www.oecd.org/en/publications/oecd-economic-surveys-korea-2024_c243e16a-en.html)
- [OECD - Responding to population decline](https://www.oecd.org/en/publications/oecd-economic-surveys-korea-2024_c243e16a-en/full-report/responding-to-population-decline_7f6620e6.html)
- [OECD - Reviews of Pension Systems: Korea](https://www.oecd.org/en/publications/oecd-reviews-of-pension-systems-korea_2f1643f9-en/full-report/component-4.html)
- [OECD - Pensions at a Glance 2025: Korea](https://www.oecd.org/en/publications/pensions-at-a-glance-2025-country-notes_8a53ef12-en/korea-republic-of_5cd52913-en.html)
- [ILO - Small businesses and self-employed provide most jobs worldwide](https://www.ilo.org/resource/news/small-businesses-and-self-employed-provide-most-jobs-worldwide-new-ilo)
- [ILO - More than 60 per cent of the world's employed population are in the informal economy](https://www.ilo.org/resource/news/more-60-cent-world%E2%80%99s-employed-population-are-informal-economy)

> 국제 비교치는 조사 방식과 자영업자의 범위에 따라 달라질 수 있습니다. 이 글의 2025년 국가 비교는 ILO 모형 추정치를 제공하는 World Bank 지표를, 국내 인원은 국가데이터처 경제활동인구조사를 기준으로 삼았습니다.

## 1. 자영업자는 가게 사장님만 뜻하지 않는다

OECD는 자영업자를 고용주, 고용원 없이 일하는 사람, 생산자협동조합 구성원, 무급가족종사자까지 포함해 정의합니다. 회사의 등기임원처럼 법인에서 일하는 사람은 임금근로자로 봅니다. [영상도 직원을 둔 사업주뿐 아니라 1인 사업자, 자영농, 독립 운송노동자와 가족의 가게를 무급으로 돕는 사람까지 포함된다고 설명](https://youtu.be/7-8qF4y5Glc?t=43)합니다.

~~~mermaid
flowchart TD
    A["전체 취업자"] --> B["임금근로자"]
    A --> C["비임금근로자"]
    C --> D["고용원이 있는 자영업자"]
    C --> E["고용원이 없는 자영업자"]
    C --> F["무급가족종사자"]

    classDef populationTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef wageTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333
    classDef selfTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333

    class A populationTone
    class B wageTone
    class C,D,E,F selfTone
~~~

이 정의로 본 World Bank의 2025년 ILO 모형 추정치는 한국 **22.7%**, 미국 **6.1%**, 독일 **8.1%**, 일본 **9.1%** 입니다. 한국이 세 나라보다 두 배 이상 높다는 [영상의 국제 비교](https://youtu.be/7-8qF4y5Glc?t=15)는 최신 수치와도 방향이 일치합니다.

국가데이터처의 2025년 연간 고용동향을 직접 계산하면 전체 취업자 2,876만9천 명 가운데 비임금근로자는 645만1천 명으로 **22.4%** 입니다. 여기에는 고용원이 있는 자영업자 143만2천 명, 고용원이 없는 자영업자 418만7천 명, 무급가족종사자 83만2천 명이 포함됩니다. 무급가족종사자를 빼고 두 종류의 자영업자만 계산하면 562만 명, **19.5%** 로 내려갑니다.

따라서 "한국 자영업률이 20%를 넘는다"와 "자영업자가 취업자 다섯 명 중 한 명이다"는 모두 사용할 수 있지만, **무급가족종사자를 포함했는지** 를 함께 밝혀야 정확합니다. 농업 인구가 많거나 가족사업이 흔한 국가를 비교할 때는 이 차이가 특히 중요합니다.

## 2. 가난한 나라일수록 자영업자가 많은 이유

[영상은 저소득 국가에서 자영업이 많은 가장 큰 이유를 임금을 주며 고용할 기업과 일자리가 부족하기 때문이라고 설명](https://youtu.be/7-8qF4y5Glc?t=128)합니다. 일할 의사는 있지만 공장·기업·공공기관의 일자리가 충분하지 않고, 실업 상태로 버틸 소득도 없다면 사람은 작은 농사, 노점, 운송, 가내 작업이나 가족 가게로 자신의 일거리를 직접 만들어야 합니다.

ILO 조사에서도 자영업자와 소규모 사업체가 고용에서 차지하는 비중은 소득수준이 낮은 국가일수록 커집니다. 농업은 비공식 고용의 비중이 특히 높은 산업이고, 비공식 노동자는 사회보험·유급휴가·법적 보호에서 배제되기 쉽습니다. 이는 "가난한 나라일수록 기업가정신이 강하다"기보다 **정규 임금 일자리와 제도적 보호가 충분하지 않다** 는 설명에 힘을 실어 줍니다.

~~~mermaid
flowchart TD
    A["임금 일자리 부족"] --> D["가계가 실업을 버티기 어려움"]
    B["농업·가족사업 비중"] --> D
    C["비공식 경제와 약한 안전망"] --> D
    D --> E["스스로 일거리 창출"]
    E --> F["생계형 자영업 증가"]

    classDef causeTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef pressureTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef outcomeTone fill:#ffc8c4,stroke:#d77,stroke-width:1px,color:#333

    class A,B,C causeTone
    class D,E pressureTone
    class F outcomeTone
~~~

[영상이 농업, 비공식 경제, 사회안전망을 세 가지 핵심 요인으로 묶는 대목](https://youtu.be/7-8qF4y5Glc?t=182)도 이 흐름을 잘 보여 줍니다. 실직 뒤 충분한 실업급여와 재취업 지원을 받을 수 있다면 구직 기간을 가질 수 있지만, 오늘의 소득이 끊기는 순간 생계가 위태로워진다면 준비가 부족해도 당장 장사를 시작할 유인이 커집니다.

다만 자영업과 빈곤을 같은 말로 취급해서는 안 됩니다. 전문직, 독창적인 상점, 고부가가치 서비스와 기술 스타트업은 더 나은 기회를 찾아 선택한 자영업입니다. 같은 통계 안에 **성장을 선택한 창업** 과 **실업을 피하려는 창업** 이 함께 들어 있다는 점이 정책 판단을 어렵게 만듭니다.

## 3. 경제가 발전하면 가게가 사라지는 것이 아니라 고용 방식이 바뀐다

[영상은 경제가 발전할수록 기업이 개인 사업자가 하던 일을 흡수한다고 설명](https://youtu.be/7-8qF4y5Glc?t=257)합니다. 동네 상인이 나눠 하던 유통을 대형 유통기업이 맡고, 개인 운송업자가 하던 일을 물류회사가 조직하며, 작은 점포가 프랜차이즈나 체인의 일부가 되는 식입니다.

기업은 대량구매, 물류, 광고, 회계, 재고관리, 교육과 품질관리를 여러 지점에 나눠 적용할 수 있습니다. [영상이 설명하는 규모의 경제](https://youtu.be/7-8qF4y5Glc?t=298)입니다. 소비자가 받던 서비스가 없어지는 것이 아니라, 자기 가게를 운영하던 사람이 기업 안에서 월급을 받는 직원으로 바뀌면서 통계상 자영업자가 임금근로자로 이동합니다.

~~~mermaid
flowchart TD
    A["여러 개인 사업자"] --> B["구매·물류·광고를 각각 수행"]
    B --> C["높은 단위비용과 품질 편차"]
    D["기업·체인 조직"] --> E["구매·물류·회계 통합"]
    E --> F["규모의 경제와 표준화"]
    F --> G["사업주는 감소하고 임금근로자는 증가"]

    classDef fragmentedTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef firmTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef resultTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333

    class A,B,C fragmentedTone
    class D,E,F firmTone
    class G resultTone
~~~

미국과 유럽의 낮은 자영업률은 규모의 경제만으로 설명되지 않습니다. [영상은 임금 일자리가 의료보험·연금·유급휴가·실업보험 같은 보호를 묶어 제공하고](https://youtu.be/7-8qF4y5Glc?t=406), 창업자는 인허가·시설·보험·노동법 준수 비용을 직접 감당해야 한다고 설명합니다. 제도는 국가마다 다르지만, 임금근로의 기대편익이 높고 준비되지 않은 창업의 비용이 크면 생계형 창업은 줄어드는 방향으로 작동합니다.

[실직자가 실업급여·직업훈련·재취업 지원을 받으며 새 일자리를 찾을 수 있다는 대목](https://youtu.be/7-8qF4y5Glc?t=568)도 중요합니다. 자영업자를 줄이려고 장사를 무조건 어렵게 만드는 것이 아니라, **장사를 하지 않아도 소득을 회복할 경로** 를 넓히는 것이 핵심이라는 뜻입니다.

## 4. 중국·대만·일본의 자영업은 같은 모양이 아니다

동아시아 국가들은 작은 상점이 많은 거리 풍경만 보면 비슷해 보입니다. 그러나 [영상은 중국의 높은 자영업 비중을 농촌 인구, 비공식 경제, 가족사업과 플랫폼 노동의 결합으로 설명](https://youtu.be/7-8qF4y5Glc?t=677)합니다. World Bank의 2025년 ILO 모형 추정치에서도 중국은 37.7%로 높지만, 그 숫자를 한국의 음식점·소매업 중심 생계형 창업과 그대로 비교해서는 안 됩니다.

~~~mermaid
flowchart TD
    A["중국"] --> B["농촌·자영농"]
    A --> C["비공식 경제"]
    A --> D["가족사업·플랫폼 노동"]
    B --> E["높은 자영업 비중"]
    C --> E
    D --> E

    classDef nationTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef factorTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef resultTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333

    class A nationTone
    class B,C,D factorTone
    class E resultTone
~~~

[대만은 야시장과 음식점보다 전자산업을 받치는 가족 소유 소규모 제조업체와 부품 공급망이 자영업 구조의 중요한 축이라는 것이 영상의 설명](https://youtu.be/7-8qF4y5Glc?t=739)입니다. 자영업이 많아도 소비서비스에 과밀하게 몰린 경제와 제조 생태계의 전문 공급자로 연결된 경제는 생산성과 성장 가능성이 다릅니다.

~~~mermaid
flowchart TD
    A["대만"] --> B["가족 소유 소규모 제조업"]
    B --> C["부품·하청 공급망"]
    C --> D["중소기업 중심 산업 생태계"]

    classDef nationTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef industryTone fill:#e0c8ef,stroke:#9a72b5,stroke-width:1px,color:#333
    classDef resultTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333

    class A nationTone
    class B,C industryTone
    class D resultTone
~~~

[일본은 장기고용, 유통·편의점 체인의 확장, 정년 후 재고용과 후계자 없는 점포의 폐업이 자영업 감소에 영향을 줬다고 영상은 설명](https://youtu.be/7-8qF4y5Glc?t=769)합니다. World Bank의 2025년 추정 자영업률은 9.1%로 한국의 절반에도 미치지 않습니다. 작은 노포가 눈에 잘 띈다는 인상과 전체 취업구조는 다른 문제입니다.

~~~mermaid
flowchart TD
    A["일본"] --> B["기업의 장기고용·재고용"]
    A --> C["유통·서비스 체인화"]
    A --> D["고령 점포의 승계 단절"]
    B --> E["낮아지는 자영업 비중"]
    C --> E
    D --> E

    classDef nationTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef factorTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef resultTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333

    class A nationTone
    class B,C,D factorTone
    class E resultTone
~~~

세 사례는 자영업률 하나만으로 경제의 건강을 판정할 수 없음을 보여 줍니다. 농업과 비공식 경제, 전문 제조 공급망, 기업 고용과 사업승계 가운데 무엇이 숫자를 만들었는지까지 내려가야 합니다.

## 5. 한국의 높은 자영업률을 만든 여섯 갈래

한국은 대규모 제조업과 세계적인 기업을 보유한 고소득 국가인데도 자영업률이 높습니다. [영상은 이를 압축성장과 노동시장의 모순이 겹친 결과라고 정리](https://youtu.be/7-8qF4y5Glc?t=835)합니다. 어느 한 원인보다 여러 통로가 같은 생활서비스업 창업으로 모이는 구조를 봐야 합니다.

~~~mermaid
flowchart TD
    A["압축 산업화의 유산"] --> G["도시 서비스 자영업"]
    B["대기업·중소기업 격차"] --> G
    C["주된 일자리 조기 퇴직"] --> G
    D["퇴직금이라는 목돈"] --> G
    E["연금 전 소득 공백"] --> G
    F["낮은 진입장벽의 프랜차이즈"] --> G
    G --> H["과밀 경쟁과 낮은 생존력"]

    classDef causeTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef entryTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef riskTone fill:#ffc8c4,stroke:#d77,stroke-width:1px,color:#333

    class A,B,C,D,E,F causeTone
    class G entryTone
    class H riskTone
~~~

### 압축 산업화가 도시형 자영업으로 이어졌다

[영상은 농촌 인구가 도시로 이동하는 동안 공장과 기업이 모두를 임금근로자로 흡수하지 못했고](https://youtu.be/7-8qF4y5Glc?t=877), 일부가 시장·식당·운수·숙박·소매업으로 이동했다고 설명합니다. 농촌의 영세 자영업이 완전히 사라진 것이 아니라 도시 서비스업으로 형태를 바꿨다는 해석입니다.

이 흔적은 장기 추세에서도 보입니다. OECD 연금제도 검토에 따르면 한국의 자영업 비중은 2000년 37%에서 2020년 25%로 크게 하락했지만, 같은 기간 OECD 평균은 19%에서 15%로 내려가는 데 그쳐 한국의 상대적 격차는 여전히 컸습니다.

### 대기업은 강하지만 좋은 임금 일자리의 문은 좁다

[영상은 대기업과 공공부문의 좋은 일자리는 제한적인 반면 중소기업과의 임금·복지 격차가 크다고 지적](https://youtu.be/7-8qF4y5Glc?t=920)합니다. OECD의 2024년 한국경제보고서도 중소기업 생산성과 대기업 생산성의 격차가 OECD 평균보다 크고, 노동시장 이중구조를 완화해야 한다고 권고합니다.

중소기업 취업의 임금·복지·경력 전망이 충분히 매력적이지 않다면, 사람은 위험을 알면서도 "내 장사가 낫다"고 판단할 수 있습니다. 따라서 자영업 문제는 창업교육만으로 해결되지 않고, 중소기업 일자리의 생산성과 보상 체계를 함께 개선해야 합니다.

### 주된 일자리에서는 일찍 나오지만 노동시장에서는 늦게 떠난다

[영상은 한국인이 50대 전후에 주된 직장에서 퇴직하지만 생계를 위해 훨씬 오래 일한다고 설명](https://youtu.be/7-8qF4y5Glc?t=953)합니다. OECD가 인용한 2023년 조사에서 55~79세가 주된 일자리에서 은퇴한 평균 연령은 **52.7세** 였습니다. 재취업한 사람 다수는 불안정하고 임금이 낮으며 연금 기여도 제한적인 일자리로 이동했습니다.

반면 OECD의 2025년 연금 보고서에서 한국의 65~69세 고용률은 2024년 **57%** 로 OECD 평균 26%의 두 배가 넘었습니다. 주된 경력은 일찍 끝나지만 실제 노동은 오래 계속되는 역설입니다. [영상이 말하는 재취업·단기 일자리·자영업의 좁은 선택지](https://youtu.be/7-8qF4y5Glc?t=978)가 이 긴 두 번째 노동생애를 채웁니다.

### 퇴직금과 소득 공백이 창업의 자금과 압력이 된다

[영상은 퇴직금 자체가 자영업의 원인은 아니지만, 재취업이 어려운 사람에게 즉시 사용할 수 있는 창업자금이 된다고 설명](https://youtu.be/7-8qF4y5Glc?t=994)합니다. 목돈이 있다는 사실과 검증된 사업모델이 있다는 사실은 다르지만, 다른 소득경로가 막혀 있을수록 퇴직금은 생계형 창업으로 넘어가는 다리가 됩니다.

[국민연금 수령 전 소득 공백과 제한된 재취업 지원이 자영업을 노동시장의 완충지대로 만든다는 설명](https://youtu.be/7-8qF4y5Glc?t=1021)도 연결됩니다. OECD 연금모형에서 2024년에 경력을 시작한 한국의 평균임금 근로자가 받을 미래 순소득대체율은 39%로 OECD 평균 63%보다 낮습니다. 제도가 장차 바뀔 수 있는 전망치이지만, 노후소득 불안이 오래 일하려는 압력과 결합한다는 방향은 분명합니다.

### 시작하기 쉬운 서비스업은 살아남기 어렵다

[영상은 카페·편의점·치킨집 같은 업종은 프랜차이즈가 시설과 운영방식을 제공해 비교적 빨리 시작할 수 있지만](https://youtu.be/7-8qF4y5Glc?t=1054), 소비 증가보다 점포가 더 빨리 늘면 경쟁이 격화된다고 설명합니다. 낮은 진입장벽이 낮은 위험을 뜻하지는 않습니다. 오히려 비슷한 조건의 경쟁자가 빠르게 늘어 가격·영업시간·임대료 부담으로 경쟁할 가능성이 큽니다.

이 여섯 통로를 합치면 한국의 자영업은 기업과 공공부문이 충분히 흡수하지 못한 노동력을 받아주는 **거대한 완충지대** 가 됩니다. [영상의 핵심 진단](https://youtu.be/7-8qF4y5Glc?t=1090)은 자영업자가 많아서 문제가 아니라, 다른 선택지가 부족한 사람이 너무 쉽게 같은 업종으로 몰린다는 데 있습니다.

## 6. 숫자보다 자영업의 질을 봐야 한다

자영업은 소비자에게 다양한 서비스를 제공하고, 지역 상권을 움직이며, 새로운 상품과 사업모델을 시험하는 공간입니다. [영상도 자영업의 장점을 인정한 뒤 문제는 숫자가 아니라 질이라고 강조](https://youtu.be/7-8qF4y5Glc?t=1115)합니다.

~~~mermaid
flowchart TD
    A["자영업 진입"] --> B{"주된 동기와 경쟁력은?"}
    B --> C["전문성·기술·차별화"]
    B --> D["실직 회피·즉시 생계"]
    C --> E["높은 부가가치와 성장 가능성"]
    D --> F["동질 업종 과밀과 장시간 노동"]
    E --> G["기회형 자영업"]
    F --> H["생계형 자영업"]

    classDef entryTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef choiceTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef healthyTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333
    classDef fragileTone fill:#ffc8c4,stroke:#d77,stroke-width:1px,color:#333

    class A entryTone
    class B choiceTone
    class C,E,G healthyTone
    class D,F,H fragileTone
~~~

전문 서비스, 기술 기반 사업, 독창적인 상점처럼 높은 부가가치를 만드는 자영업이 많다면 높은 비율이 역동성의 신호가 될 수 있습니다. 반대로 음식점·미용실·부동산처럼 수요가 제한된 유사업종에 생계형 창업이 집중되고, [낮은 수익을 긴 노동시간으로 보충한다면](https://youtu.be/7-8qF4y5Glc?t=1150) 자영업 통계의 일부는 공개된 실업률에 잡히지 않는 고용 불안을 가릴 수 있습니다.

그래서 자영업률은 단독 성적표가 아니라 노동시장의 **건강검진 항목** 으로 읽어야 합니다. 함께 볼 지표는 사업체 생존율, 자영업자의 시간당 소득, 업종 집중도, 사회보험 가입률, 주된 일자리 퇴직연령, 중장년 재취업 임금, 연금 수급 전 소득 공백입니다.

## 실전 적용 포인트

### 창업을 고민하는 개인이라면

1. **생계 압력과 사업 기회를 분리합니다.** 지금 소득이 끊겼다는 사실이 고객 수요를 증명하지는 않습니다.
2. **퇴직금을 전액 투자 가능한 자본으로 보지 않습니다.** 생활비, 연금 수령 전 기간, 폐업비용을 먼저 떼어 별도 안전자금으로 둡니다.
3. **점포 수가 아니라 단위경제성을 계산합니다.** 객단가, 재구매율, 임대료, 인건비, 배달·플랫폼 수수료를 넣어 손익분기 매출을 구합니다.
4. **본사가 제공하는 운영 편의와 경쟁우위를 구분합니다.** 누구나 같은 간판과 메뉴를 살 수 있다면 진입은 쉬워도 차별화는 어렵습니다.
5. **폐업 이후 경로까지 설계합니다.** 실패 시 남는 부채, 원상복구비, 경력 공백과 재취업 가능성을 시작 전에 점검합니다.

~~~mermaid
flowchart TD
    A["창업 아이디어"] --> B["고객 수요 검증"]
    B --> C["단위경제성 계산"]
    C --> D["생활비·노후자금 분리"]
    D --> E["최악의 매출 시나리오"]
    E --> F["폐업·재취업 경로"]
    F --> G{"감당 가능한가?"}
    G -->|"예"| H["작게 시작하고 검증"]
    G -->|"아니오"| I["재취업·훈련 경로 우선"]

    classDef analysisTone fill:#c5dcef,stroke:#5f8fbd,stroke-width:1px,color:#333
    classDef decisionTone fill:#fde8c0,stroke:#d9a441,stroke-width:1px,color:#333
    classDef safeTone fill:#c0ecd3,stroke:#5dbb7a,stroke-width:1px,color:#333
    classDef stopTone fill:#ffc8c4,stroke:#d77,stroke-width:1px,color:#333

    class A,B,C,D,E,F analysisTone
    class G decisionTone
    class H safeTone
    class I stopTone
~~~

### 정책을 평가한다면

- 폐업비용 지원만큼 **실직 후 구직 기간의 소득보장** 이 충분한지 봅니다.
- 창업자 수보다 3년·5년 뒤 생존, 소득과 생산성의 변화를 봅니다.
- 중장년층에게 단기 일자리만 제공하는지, 경력을 인정하는 재취업·훈련 경로를 만드는지 확인합니다.
- 자영업 대출 확대가 경쟁력 있는 사업을 돕는지, 과밀업종 진입을 뒤로 미루는 데 그치는지 구분합니다.
- 대기업과 중소기업 사이 생산성·임금·복지 격차를 줄이는 정책이 함께 가는지 봅니다.

자영업 정책의 목표를 "사장님 수 줄이기"로 잡으면 규제 강화나 폐업 촉진에 머물 수 있습니다. 더 나은 목표는 **생계 때문에 준비 없이 창업할 필요가 없는 노동시장** 과 **창업하더라도 전문성과 생산성으로 성장할 수 있는 사업환경** 을 동시에 만드는 것입니다.

## 핵심 요약

- OECD의 넓은 정의에서 자영업자는 사업주뿐 아니라 1인 사업자와 무급가족종사자도 포함합니다.
- 2025년 국제 추정 자영업률은 한국 22.7%, 미국 6.1%, 독일 8.1%, 일본 9.1%입니다.
- 국가데이터처 기준 한국의 2025년 비임금근로자는 취업자의 22.4%이고, 무급가족종사자를 제외한 자영업자는 19.5%입니다.
- 저소득 국가의 높은 자영업률은 농업, 비공식 경제, 임금 일자리와 사회안전망의 부족과 연결됩니다.
- 한국에서는 압축성장, 대·중소기업 격차, 주된 일자리 조기퇴직, 퇴직금, 연금 전 소득 공백과 낮은 서비스업 진입장벽이 함께 작동합니다.
- 중요한 것은 자영업자의 숫자가 아니라 기회형과 생계형의 구성, 생산성, 소득, 생존 가능성입니다.
- 해결책은 장사를 막는 것이 아니라 좋은 임금 일자리, 중장년 재취업, 실업·노후소득 보호와 고부가가치 창업을 함께 늘리는 것입니다.

## 결론

[영상은 자영업률을 좋은 일자리, 실직자 보호, 은퇴생활의 안정성을 비추는 사회의 건강검진표라고 표현](https://youtu.be/7-8qF4y5Glc?t=1186)합니다. 이 관점에서 한국 골목의 수많은 간판은 강한 창업정신만 보여 주는 것도, 자영업자의 실패만 보여 주는 것도 아닙니다. 기업이 흡수하지 못한 사람, 주된 직장에서 일찍 나온 사람, 연금까지 소득 공백을 견뎌야 하는 사람이 어디로 이동했는지를 보여 주는 노동시장의 결과입니다.

자영업자가 줄어야 선진국이 되는 것은 아닙니다. 선택지가 충분한 상태에서 전문성과 차별화를 바탕으로 창업하고, 실패해도 다시 임금 일자리로 이동할 수 있어야 합니다. 한국이 바꿔야 할 것은 사장님의 숫자 자체가 아니라, **사장님이 되는 이유와 사업을 지속하는 방식** 입니다.
