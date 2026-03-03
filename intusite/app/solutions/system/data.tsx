import { Lock, Users, Shield } from 'lucide-react';
import React from 'react';

export const solutions = [
    {
        id: 'i-onengs',
        title: 'i-oneNGS',
        subtitle: 'Next Generation System Access Control',
        description: '이기종 IT 인프라에 대한 접근을 관리하고 통제하는 차세대 시스템 접근제어 및 계정 관리 통합 솔루션입니다. 국정원 보안 권고안을 충족하며 완벽한 로깅과 실시간 모니터링을 지원합니다.',
        features: [
            '시스템, DB, 애플리케이션에 대한 통합 접근제어 아키텍처 지원',
            '패스워드 자동 변경 및 주기적 일괄 관리 기능 탑재',
            '모든 작업 내역에 대한 고도화된 감사 추적 및 로깅',
            '직관적인 관리자 대시보드로 시스템 보안 상태 실시간 확인'
        ],
        specs: ['통합 접근제어', '패스워드 관리', '작업 이력 감사', '실시간 모니터링'],
        icon: <Shield className="w-6 h-6" />,
        externalLink: 'https://www.hunesion.com/solutions/system_1'
    }
];
