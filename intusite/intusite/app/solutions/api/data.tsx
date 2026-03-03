import { Code2, Fingerprint } from 'lucide-react';
import React from 'react';

export const solutions = [
    {
        id: 'nginx-app-protect',
        title: 'NGINX App Protect',
        subtitle: 'Modern App & API Security',
        description: 'F5의 시장 선도적인 WAF 기술을 NGINX Plus 기반으로 경량화하여 구현한 모던 애플리케이션 보안 솔루션입니다. 마이크로서비스, 컨테이너, API 환경에 일관된 보안 정책을 적용할 수 있으며, CI/CD 파이프라인에 통합된 "코드형 보안(Security as Code)"으로 자동화된 DevSecOps를 실현합니다.',
        features: [
            'F5 AWAF 기반의 강력한 보안 엔진을 경량 소프트웨어로 제공',
            'JSON/XML 기반의 선언형 정책으로 CI/CD 파이프라인 완벽 통합',
            '기존 3rd Party WAF 대비 월등히 빠른 고성능 보장',
            '마이크로서비스, 컨테이너, API를 아우르는 일관된 보안 제어'
        ],
        specs: ['Based on F5 AWAF', 'Declarative Policy (JSON)', 'DevSecOps Automation', 'High Performance / Low Latency'],
        icon: <Code2 className="w-6 h-6" />,
        externalLink: 'https://www.secuwave.co.kr/solution/f5-nginx?tabs=4'
    },
    {
        id: 'softfreak-f-api-sp',
        title: 'SoftFreak F-APIm Security',
        subtitle: 'Intelligent API Security Platform',
        description: 'API 기반 서비스 환경에서 발생하는 보안 취약점을 탐지하고, 공격을 실시간으로 차단하는 API 전용 보안 플랫폼입니다. 웹 방화벽(WAF)이 놓치기 쉬운 비즈니스 로직(BOLA) 공격이나 데이터 노출 문제를 해결하며, API의 생성부터 운영까지 전 과정을 빈틈없이 보호합니다.',
        features: [
            'API Discovery: 섀도우/좀비 API 자동 식별 및 가시성 확보',
            'API Posture: OWASP API Top 10 기반 취약점 사전 진단',
            'API Protection: AI/ML 기반 이상행위 및 BOLA 공격 실시간 차단',
            'Data Privacy: 개인정보 및 민감 데이터 실시간 마스킹/필터링'
        ],
        specs: ['Full Lifecycle Protection', 'Shadow API Discovery', 'AI Anomaly Detection', 'Sensitive Data Masking'],
        icon: <Fingerprint className="w-6 h-6" />,
        externalLink: 'https://www.softfreak.kr/38'
    }
];
