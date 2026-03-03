import { FileText, Activity, ArrowRight, Shield } from 'lucide-react';
import React from 'react';

export const solutions = [
    {
        id: 'ionenet-ftp',
        title: 'i-oneNet 자료전송',
        subtitle: 'Secure File Transfer',
        description: '분리된 망 간 안전한 파일 전송을 위한 표준 솔루션으로, 국정원 검증 필 암호화 모듈과 CC인증(EAL4)을 준수합니다. 강력한 멀티 백신 엔진으로 악성코드를 탐지하고, 승인/결재 시스템을 통해 중요 정보 유출을 통제합니다.',
        features: [
            '국정원 검증 필 암호화 모듈 탑재',
            '강력한 멀티 백신 엔진을 통한 악성코드 탐지',
            '승인/결재 시스템을 통한 정보 유출 통제',
            '내/외부 메일 연계 및 클라우드 호환 지원'
        ],
        specs: ['CC인증 EAL4', 'GS 1등급', '암호화 모듈', '멀티 백신'],
        icon: <FileText className="w-6 h-6" />,
        externalLink: 'https://www.hunesion.com/solutions/network'
    },
    {
        id: 'ionenet-stm',
        title: 'i-oneNet 스트리밍',
        subtitle: 'Secure Streaming',
        description: '물리적 망분리 환경에서 CCTV, 화상회의, 원격진료 등 실시간 데이터의 끊김 없는 중계를 제공합니다. 독자적인 Non-TCP 기반 기술로 보안성을 유지하면서도 대용량 스트리밍 데이터의 지연 시간을 최소화합니다.',
        features: [
            'Non-TCP 기반의 독자적 실시간 전송 기술',
            'CCTV, 화상회의 등 다양한 스트림 프로토콜 지원',
            '물리적 망분리 환경에서의 완벽한 서비스 연계',
            '대용량 데이터의 초저지연(Low Latency) 전송'
        ],
        specs: ['Non-TCP', 'Real-time', 'Low Latency', 'Multi-Protocol'],
        icon: <Activity className="w-6 h-6" />,
        externalLink: 'https://www.hunesion.com/solutions/network'
    },
    {
        id: 'ionenet-dd',
        title: 'i-oneNet 일방향',
        titleKo: 'i-oneNet 일방향',
        subtitle: 'Data Diode (일방향 전송)',
        description: '보안 수준이 높은 영역으로의 외부 접근을 원천 차단하고, 데이터의 안전한 일방향 전송을 보장합니다. 물리적 단방향 매체와 OSI 7 계층 단방향 기술을 적용하여 해킹 시도를 물리적으로 100% 차단합니다.',
        features: [
            '물리적 단방향 매체(IEEE 1394/Giga Optic) 적용',
            'OSI 7 계층 단방향 기술로 외부 접근 원천 차단',
            '1:N 다중망 연계 지원으로 운영 효율성 극대화',
            '전용 NIC 기반의 강력한 하드웨어적 보안'
        ],
        specs: ['CC인증 EAL2', 'IEEE 1394', 'Giga Optic', 'Physical Unidirectional'],
        icon: <ArrowRight className="w-6 h-6" />,
        externalLink: 'https://www.hunesion.com/solutions/network1_2'
    },
    {
        id: 'nac',
        title: 'NAC 네트워크 접근제어',
        subtitle: 'Network Access Control',
        description: '비인가 단말이나 보안 정책을 준수하지 않은 기기의 내부 네트워크 접속을 원천적으로 차단합니다. 사내 모든 IP 및 단말 자산을 중앙에서 가시적으로 관리하고 통제할 수 있습니다.',
        features: [
            '인가되지 않은 단말의 네트워크 접속 실시간 차단',
            'IP/MAC 주소 및 단말 자산의 중앙 집중적 관리',
            '무결성 점검을 통한 보안 정책 미준수 기기 통제',
            '다양한 네트워크 환경(유/무선, VPN) 완벽 지원'
        ],
        specs: ['접근 통제', '자산 가시성', '정책 컴플라이언스', '유/무선 통합'],
        icon: <Shield className="w-6 h-6" />
    }
];
