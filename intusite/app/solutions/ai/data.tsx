import { ShieldAlert, Bot, Cpu, GlobeLock } from 'lucide-react';
import React from 'react';

export const solutions = [
    {
        id: 'f5-ai-guardrails',
        title: 'F5 AI Guardrails',
        subtitle: 'Runtime AI Protection',
        description: '특정 AI 모델이나 배포 환경에 종속되지 않는 독립적인 런타임 보안 계층입니다. 프롬프트 인젝션, 데이터 유출 등 새로운 AI 위협을 실시간으로 차단하며, 기업 내 AI 트래픽에 대한 완전한 가시성과 감사 기능을 제공하여 안전한 AI 도입을 보장합니다.',
        features: [
            '특정 AI 모델에 종속되지 않는 런타임 보안 계층',
            'Prompt Injection, 탈옥 등 AI 고유 위협 실시간 차단',
            'PII(개인식별정보) 마스킹 등 데이터 유출 방지 기능',
            'AI 트래픽에 대한 완전한 가시성 및 감사 로그 제공'
        ],
        specs: ['Model-Agnostic Protection', 'Prompt Injection 차단', 'Data Leakage Prevention', '실시간 트래픽 감시'],
        icon: <ShieldAlert className="w-6 h-6" />,
        externalLink: 'https://www.f5.com/ko_kr/products/ai-guardrails#introduction'
    },
    {
        id: 'f5-ai-red-team',
        title: 'F5 AI Red Team',
        subtitle: 'Continuous AI Security Testing',
        description: '자동화된 공격 시뮬레이션을 통해 AI 모델의 취약점을 지속적으로 진단하고 검증하는 오펜시브 보안 서비스입니다. 최신 위협 정보를 기반으로 모의 공격을 수행하고, 발견된 취약점 정보를 AI Guardrails 정책에 즉시 반영하여 방어 체계를 지속적으로 강화합니다.',
        features: [
            '자동화된 AI 모델 취약점 진단 및 공격 시뮬레이션',
            '최신 위협 인텔리전스 기반의 지속적인 검증',
            '발견된 취약점을 보안 정책에 즉시 반영 (Feedback Loop)',
            '선제적 리스크 관리로 안전한 AI 모델 배포 지원'
        ],
        specs: ['Automated Attack Simulation', 'Vulnerability Scanning', 'Adaptive Policy Loop', 'Proactive Risk Mgmt'],
        icon: <Bot className="w-6 h-6" />,
        externalLink: 'https://www.f5.com/ko_kr/products/ai-red-team'
    },
    {
        id: 'sandslab-glx',
        title: 'SANDS Lab GLX',
        subtitle: 'Guard for LLM X (Generative AI Security)',
        description: '거대언어모델(LLM)을 안전하게 사용하기 위한 초고속 보안 솔루션입니다. 독자적인 경량화 기술로 GPU 없이 일반 CPU 환경에서도 실시간 보안 필터링이 가능하며, 기존 솔루션 대비 월등한 속도와 저렴한 비용으로 안전한 생성형 AI 도입을 돕습니다.',
        features: [
            'GPU 없이 CPU 환경에서 구동되는 초고속 경량 보안',
            '기존 대비 3배 빠른 성능과 스트리밍 수준의 저지연(Low Latency) 처리',
            '입력(Input), 출력(Output), RAG 단계의 3중 위협 탐지 및 차단',
            '기존 AI 서비스에 플러그인 형태로 즉시 적용 가능한 유연성'
        ],
        specs: ['100% CPU-based Architecture', 'Real-time Filtering', '3-Stage Protection (In/Out/RAG)', 'Hyper-Low Latency'],
        icon: <Cpu className="w-6 h-6" />,
        disableDetailLink: true
    },
    {
        id: 's2w-saip',
        title: 'S2W SAIP',
        subtitle: 'Security Specialized AI Platform',
        description: '기업의 보안 위협 대응과 내부 데이터 활용을 위해 설계된 보안 특화 생성형 AI 플랫폼입니다. 세계 최초의 다크웹 전용 언어모델인 DarkBERT와 강력한 보안 가드레일을 결합하여, 기밀 유출 걱정 없이 전문적인 보안 인텔리전스를 활용할 수 있습니다.',
        features: [
            '다크웹 전용 언어모델 DarkBERT 기반의 강력한 위협 분석',
            '기업 내부 정보 유출을 원천 차단하는 보안 가드레일(Security Guardrail)',
            'RAG 기술로 환각 현상을 방지하고 답변의 정확도 극대화',
            '온프레미스(On-premise) 및 프라이빗 클라우드 구축 완벽 지원'
        ],
        specs: ['DarkBERT Integration', 'Custom Security Guardrail', 'RAG (Search Augmented)', 'On-premise / Private Cloud'],
        icon: <GlobeLock className="w-6 h-6" />,
        externalLink: 'https://s2w.inc/ko/product/pd01'
    }
];
