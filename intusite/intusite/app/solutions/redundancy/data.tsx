import { Database } from 'lucide-react';
import React from 'react';

export const solutions = [
    {
        id: 'mantech-mccs',
        title: 'Mantech MCCS',
        subtitle: 'High Availability & Disaster Recovery',
        description: '물리적, 논리적 장애로부터 서비스의 연속성을 보장하는 고가용성(HA) 및 재해복구(DR) 솔루션입니다. 실시간 데이터 복제와 자동 장애 감지/복구(Failover)를 통해 24/7 중단 없는 비즈니스 환경을 제공합니다.',
        features: [
            '서버, 애플리케이션, 네트워크 장애 시 자동 절체(Failover)',
            '실시간 데이터 복제(Replication)를 통한 정합성 보장',
            '이기종 하드웨어 및 다양한 OS/DB 환경 완벽 지원',
            '직관적인 통합 관리 콘솔로 HA/DR 상태 실시간 모니터링'
        ],
        specs: ['실시간 데이터 복제', '자동 장애 감지 및 복구', 'HA/DR 통합 관리', '24/7 무중단 서비스'],
        icon: <Database className="w-6 h-6" />,
        externalLink: 'https://www.mantech.co.kr/products/mccs/'
    }
];
